// Weather data layer — server-side fetch, cached in the Cloudflare
// Cache API for CACHE_TTL_SECONDS.

import type { Locale } from '../i18n';

export interface WeatherCurrent {
  time: string;
  temperature_2m: number;
  apparent_temperature: number;
  relative_humidity_2m: number;
  precipitation: number;
  weather_code: number;
  wind_speed_10m: number;
  is_day: number;
}

export interface WeatherDaily {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max: (number | null)[];
  wind_speed_10m_max: (number | null)[];
  uv_index_max: (number | null)[];
}

export interface WeatherData {
  current: WeatherCurrent;
  daily: WeatherDaily;
  timezone: string;
}

// Adalaj Stepwell (Rudabai Stepwell) — Gandhinagar district, Gujarat.
export const WEATHER_LAT = 23.1668106;
export const WEATHER_LON = 72.5800895;
export const CACHE_TTL_SECONDS = 1800; // 30 minutes

export const WEATHER_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${WEATHER_LAT}&longitude=${WEATHER_LON}` +
  '&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max' +
  '&timezone=Asia%2FKolkata&forecast_days=7';

// Minimal structural type for the Workers Cache API (global `caches`).
interface CacheLike {
  match(key: string): Promise<Response | undefined>;
  put(key: string, value: Response): Promise<void>;
}

function defaultCache(): CacheLike | undefined {
  const g = globalThis as unknown as { caches?: { default?: CacheLike } };
  return g.caches?.default;
}

export function parseWeather(raw: unknown): WeatherData {
 const d=raw as WeatherData;
 if(!d?.current||!d.daily||d.timezone!=='Asia/Kolkata')throw new Error('Incomplete weather');
 const c=d.current,x=d.daily;
 const numeric=(v:unknown,min:number,max:number):number=>{if(typeof v!=='number'||!Number.isFinite(v)||v<min||v>max)throw new Error('Invalid weather value');return v;};
 const codes=new Set([0,1,2,3,45,48,51,53,55,56,57,61,63,65,66,67,71,73,75,77,80,81,82,85,86,95,96,99]);
 const code=(v:unknown)=>{if(typeof v!=='number'||!codes.has(v))throw new Error('Invalid weather code');};
 if(typeof c.time!=='string'||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(c.time))throw new Error('Missing weather time');
 const stamp=Date.parse(c.time+'+05:30'),age=Date.now()-stamp;
 if(!Number.isFinite(stamp)||age>3*60*60*1000||age< -15*60*1000)throw new Error('Weather time outside freshness window');
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 if(c.time.slice(0,10)!==today)throw new Error('Weather date is not today');
 numeric(c.temperature_2m,-100,65);numeric(c.apparent_temperature,-120,80);numeric(c.relative_humidity_2m,0,100);numeric(c.wind_speed_10m,0,500);numeric(c.precipitation,0,500);if(c.is_day!==0&&c.is_day!==1)throw new Error('Invalid daylight');code(c.weather_code);
 const keys=['time','weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max','uv_index_max','wind_speed_10m_max'] as const;
 if(keys.some(k=>!Array.isArray(x[k])||x[k].length!==7))throw new Error('Incomplete forecast');
 x.time.forEach((date,i)=>{
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date)throw new Error('Invalid forecast date');
  if(i===0&&date!==today||i>0&&Date.parse(date)-Date.parse(x.time[i-1])!==86400000)throw new Error('Forecast date sequence');
  const min=numeric(x.temperature_2m_min[i],-100,65),max=numeric(x.temperature_2m_max[i],-100,65);if(min>max)throw new Error('Inverted temperature range');
  code(x.weather_code[i]);numeric(x.precipitation_probability_max[i],0,100);numeric(x.uv_index_max[i],0,50);numeric(x.wind_speed_10m_max[i],0,500);
 });
 return d;
}

export async function getWeather(): Promise<WeatherData | null> {
 const cache=defaultCache();
 if(cache)try{const hit=await cache.match(WEATHER_URL);if(hit)return parseWeather(await hit.json());}catch{}
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),4500);
 try{const res=await fetch(WEATHER_URL,{headers:{accept:'application/json'},signal:controller.signal});if(!res.ok)return null;const data=parseWeather(await res.json());
 if(cache)try{await cache.put(WEATHER_URL,new Response(JSON.stringify(data),{headers:{'Cache-Control':`public, max-age=${CACHE_TTL_SECONDS}`}}));}catch{}
 return data;}catch{return null;}finally{clearTimeout(timer);}
}

export type WeatherGroup = 'sun' | 'partly' | 'cloud' | 'fog' | 'rain' | 'snow' | 'storm';

const WMO_GROUP_LABEL: Record<Locale, Record<WeatherGroup, string>> = {
  gu: {
    sun: 'સાફ આકાશ', partly: 'મોટે ભાગે સાફ', cloud: 'વાદળછાયું',
    fog: 'ધુમ્મસ', rain: 'વરસાદ', snow: 'બરફવર્ષા', storm: 'વીજળી સાથે વરસાદ',
  },
  en: {
    sun: 'Clear sky', partly: 'Mostly clear', cloud: 'Cloudy',
    fog: 'Fog', rain: 'Rain', snow: 'Snow', storm: 'Thunderstorm',
  },
  hi: {
    sun: 'साफ आकाश', partly: 'अधिकांश साफ', cloud: 'बादलों वाला',
    fog: 'कोहरा', rain: 'बारिश', snow: 'बर्फ़बारी', storm: 'आंधी-पानी',
  },
};

export function wmoLabel(code: number, locale: Locale = 'gu'): string {
  return WMO_GROUP_LABEL[locale][wmoGroup(code)];
}

export function wmoGroup(code: number): WeatherGroup {
  if (code === 0) return 'sun';
  if (code === 1 || code === 2) return 'partly';
  if (code === 3) return 'cloud';
  if (code === 45 || code === 48) return 'fog';
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return 'snow';
  if (code >= 95) return 'storm';
  return 'cloud';
}

const GLYPH_SVG: Record<WeatherGroup, string> = {
  sun: '<svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7"/></svg>',
  partly: '<svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="9" r="3.6"/><path d="M8.4 2.6l.6 1.4M2.6 8.4l1.4.6M4 4.4l1.2 1.2"/><path d="M8 19h9.6a3.3 3.3 0 0 0 .6-6.56A5 5 0 0 0 7.3 10a2.9 2.9 0 0 0 .7 9Z"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 18h9.5a3.5 3.5 0 0 0 .62-6.95A5.2 5.2 0 0 0 7.05 9.9 3.1 3.1 0 0 0 7 18Z"/></svg>',
  fog: '<svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 13.5h9.5a3.5 3.5 0 0 0 .62-6.95A5.2 5.2 0 0 0 7.05 5.4 3.1 3.1 0 0 0 7 13.5Z"/><path d="M5 16.5h14M6 19h12M7 21.5h10"/></svg>',
  rain: '<svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 12.5h9.5a3.5 3.5 0 0 0 .62-6.95A5.2 5.2 0 0 0 7.05 4.4 3.1 3.1 0 0 0 7 12.5Z"/><path d="M9.5 16l-1.2 3.4M13.5 16l-1.2 3.4M17.5 16l-1.2 3.4"/></svg>',
  snow: '<svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 12.5h9.5a3.5 3.5 0 0 0 .62-6.95A5.2 5.2 0 0 0 7.05 4.4 3.1 3.1 0 0 0 7 12.5Z"/><path d="M9.5 16.5l.2 3M12 18l-2.2 1.6M12 18l2.2 1.6M14.5 16.5l-.2 3M14.5 16.5l1.8-2.4M9.5 16.5l-1.8-2.4"/></svg>',
  storm: '<svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 12.5h9.5a3.5 3.5 0 0 0 .62-6.95A5.2 5.2 0 0 0 7.05 4.4 3.1 3.1 0 0 0 7 12.5Z"/><path d="M10.5 16.5 8.6 19.8h3l-1.4 3.2M14 16.5l1.2 2.2"/></svg>'
};

export function wmoGlyph(code: number): string {
  return GLYPH_SVG[wmoGroup(code)];
}

const WEEKDAY: Record<Locale, string[]> = {
  gu: ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  hi: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
};

export function weekdayLabel(dateStr: string, locale: Locale = 'gu'): string {
  const d = new Date(`${dateStr}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? dateStr : WEEKDAY[locale][d.getUTCDay()];
}

// Wind speed (km/h) → Beaufort scale.
export function beaufort(kmh: number): number {
  const km = Math.max(0, kmh);
  if (km < 1) return 0;
  if (km < 6) return 1;
  if (km < 12) return 2;
  if (km < 20) return 3;
  if (km < 29) return 4;
  if (km < 39) return 5;
  if (km < 50) return 6;
  if (km < 62) return 7;
  if (km < 75) return 8;
  if (km < 89) return 9;
  if (km < 103) return 10;
  return 11;
}

// Visitor-facing advice strings, per locale.
const ADVICE: Record<Locale, Record<string, string>> = {
  gu: {
    rainOutfit: 'વરસાદ માટે પાણી ન ભીંજાય તેવો રેઇનકોટ અથવા જળરોધક કપડા પહેરો.',
    rainActivity: 'વરસાદની શક્યતા વધારે છે — પથ્થરનાં પગથિયાં સરકી શકે છે; કર્મચારીઓની સૂચના અનુસરો.',
    rainItem: 'છતરી અથવા રેઇનકોટ',
    heavyRainActivity: 'ભારે વરસાદમાં ખુલ્લાં પગથિયાં ટાળો, સલામત આશ્રય લો અને કર્મચારીઓની સૂચના તપાસો.',
    thunderActivity: 'વીજળી સાથે વરસાદ છે — ખુલ્લી જગ્યા, પગથિયાં અને ઝાડ નીચે ન રહો, સલામત સ્થાને રાહ જુઓ.',
    heatOutfit: 'તાપમાન તીવ્ર છે — હલકા, શ્વાસ લેતા કપડા અને ટોપી પહેરો.',
    heatActivity: 'બપોરનો તાપ ટાળો — વહેલી સવારે અથવા સાંજે જાઓ, વચ્ચે આરામ લો.',
    heatItem: 'પૂરતું પાણી, ઓ.આર.એસ. / ઈલેક્ટ્રોલાઈટ',
    warmOutfit: 'તાપમાન વધારે છે — હલકા કપડા અને ટોપી/છત્રી રાખો.',
    warmActivity: 'બપોરના કલાકો ટૂંકા રાખો અને છાંયો શોધતા રહો.',
    uvActivity: 'બહાર રહો ત્યારે છાંયો શોધો, બપોરનો સૂર્ય ટાળો.',
    uvItem: 'સનસ્ક્રીન (SPF), શાળ/ટોપી, મોટી પાણીની બોટલ',
    coldOutfit: 'તાપમાન ઓછું છે — ગરમ જેકેટ અને શાલ સાથે રાખો.',
    coldItem: 'ગરમ જેકેટ, શાલ',
    coolOutfit: 'વહેલી સવારે ઠંડક હોઈ શકે છે — હલકો સ્વેટર સાથે રાખો.',
    coolItem: 'હલકો સ્વેટર',
    swingOutfit: 'દિવસ-રાતનો તફાવત વધારે છે — ઉતારી શકાય તેવો સ્વેટર/જેકેટ સાથે રાખો.',
    swingItem: 'ઉતારી શકાય તેવો સ્વેટર',
    windOutfit: 'પવન તીવ્ર છે — ઢીલા કપડા ટાળો, ટોપી ઉડી ન જાય તેનું ધ્યાન રાખો.',
    windActivity: 'પવન વધારે છે — ખુલ્લી જગ્યાએ ફોટોગ્રાફી અને ઊંચાઈ પર સાવધાની.',
    windItem: 'ટોપી (પવનમાં ઉડી ન જાય)',
    windModOutfit: 'પવન થોડો વધારે છે — ટોપી ઉડી ન જાય તેનું ધ્યાન રાખો.',
    windModItem: 'ટોપી',
    sunActivity: 'સાફ આકાશ — વાસ્તવિક ગરમી, પવન અને પ્રવેશની સ્થિતિ મુજબ મુલાકાત ગોઠવો.',
    cloudActivity: 'વાદળછાયું આકાશ પ્રકાશ નરમ કરી શકે છે; મુલાકાતનો સમય વાસ્તવિક પરિસ્થિતિ મુજબ રાખો.',
    fogActivity: 'ધુમ્મસ — દૃશ્યતા ઓછી છે, ફોટોગ્રાફી માટે ઓછું યોગ્ય.',
    riskRainProbability: 'વરસાદની ઊંચી શક્યતા — વરસાદથી બચાવનો સામાન રાખો અને સ્થાનિક પરિસ્થિતિ તપાસો; આ વરસાદની તીવ્રતા દર્શાવતું નથી.',
    riskThunder: '⚠️ વીજળી સાથે વરસાદ — ખુલ્લી જગ્યા, પગથિયાં અને ઝાડ નીચે ન રહો; સલામત સ્થાને રાહ જુઓ.',
    riskHeavyRain: '⚠️ ભારે વરસાદનું જોખમ — સરકતાં પગથિયાં ટાળો, સલામત આશ્રય અને કર્મચારીઓની સૂચના અનુસરો.',
    riskWind: '⚠️ તીવ્ર પવન — ખુલ્લી જગ્યાએ સાવધાની, ઢીલી વસ્તુઓ ઉડી ન જાય.',
    riskHeat: '⚠️ તીવ્ર ગરમી — બપોરે બહાર ન નીકળવું, પાણી પીતા રહો.',
    fallbackOutfit: 'હવામાન સામાન્ય છે — આરામદાયક પહેરવેશ યોગ્ય છે.',
    fallbackActivity: 'સ્થાનિક પરિસ્થિતિ અને મંજૂર મુલાકાત માર્ગ તપાસો.',
  },
  en: {
    rainOutfit: 'Wear a waterproof raincoat or water-resistant clothes for rain.',
    rainActivity: 'Rain is more likely — check for slippery stone steps and follow staff advice.',
    rainItem: 'Umbrella or raincoat',
    heavyRainActivity: 'In heavy rain avoid exposed steps and seek safe shelter; check staff instructions.',
    thunderActivity: 'Thunderstorm — avoid open areas, steps and trees; wait in a safe place.',
    heatOutfit: 'Heat is intense — wear light, breathable clothes and a hat.',
    heatActivity: 'Avoid the midday heat — go early morning or evening and rest in between.',
    heatItem: 'Plenty of water, ORS / electrolytes',
    warmOutfit: 'It is quite warm — keep light clothes and a hat / umbrella.',
    warmActivity: 'Keep midday hours short and seek shade.',
    uvActivity: 'When outdoors seek shade and avoid the midday sun.',
    uvItem: 'Sunscreen (SPF), cap / hat, large water bottle',
    coldOutfit: 'It is cold — keep a warm jacket and scarf.',
    coldItem: 'Warm jacket, scarf',
    coolOutfit: 'Early morning may be cool — keep a light sweater.',
    coolItem: 'Light sweater',
    swingOutfit: 'Large day-night swing — keep a removable sweater / jacket.',
    swingItem: 'Removable sweater',
    windOutfit: 'Wind is strong — avoid loose clothes and mind your hat.',
    windActivity: 'Wind is high — caution with photography in open areas and at height.',
    windItem: 'Hat (so it does not blow away)',
    windModOutfit: 'Wind is a bit high — mind that your hat does not blow away.',
    windModItem: 'Hat',
    sunActivity: 'Clear skies — plan your visit around the actual heat, wind and access conditions.',
    cloudActivity: 'Cloudy skies can soften the light; choose visit duration according to actual conditions.',
    fogActivity: 'Fog — visibility is low, less suitable for photography.',
    riskRainProbability: 'High chance of rain — carry rain protection and check local conditions; probability does not indicate rain intensity.',
    riskThunder: '⚠️ Thunderstorm — avoid open areas, steps and trees; wait in a safe place.',
    riskHeavyRain: '⚠️ Heavy rain risk — avoid slippery steps, seek safe shelter and follow staff instructions.',
    riskWind: '⚠️ Strong wind — caution in open areas, loose items may blow away.',
    riskHeat: '⚠️ Intense heat — do not go out at noon, keep drinking water.',
    fallbackOutfit: 'Weather is normal — comfortable clothing is fine.',
    fallbackActivity: 'Check local conditions and the permitted visitor route before exploring.',
  },
  hi: {
    rainOutfit: 'बारिश के लिए जलरोधक रेनकोट या कपड़े पहनें.',
    rainActivity: 'बारिश की संभावना अधिक है — पत्थर की सीढ़ियाँ फिसल सकती हैं; कर्मचारियों की सलाह मानें।',
    rainItem: 'छाता या रेनकोट',
    heavyRainActivity: 'भारी बारिश में खुली सीढ़ियाँ टालें, सुरक्षित आश्रय लें और कर्मचारियों के निर्देश जाँचें।',
    thunderActivity: 'आंधी-पानी — खुली जगह, सीढ़ियाँ और पेड़ों के नीचे न रहें; सुरक्षित जगह प्रतीक्षा करें।',
    heatOutfit: 'गर्मी तीव्र है — हल्के, साँस लेने वाले कपड़े और टोपी पहनें।',
    heatActivity: 'दोपहर की गर्मी से बचें — सुबह जल्दी या शाम को जाएँ, बीच में आराम करें।',
    heatItem: 'पर्याप्त पानी, ORS / इलेक्ट्रोलाइट',
    warmOutfit: 'काफ़ी गर्मी है — हल्के कपड़े और टोपी/छाता रखें।',
    warmActivity: 'दोपहर के घंटे कम रखें और छाया ढूँढ़ते रहें।',
    uvActivity: 'बाहर रहें तो छाया लें और दोपहर की धूप से बचें।',
    uvItem: 'सनस्क्रीन (SPF), टोपी, बड़ी पानी की बोतल',
    coldOutfit: 'ठंड है — गर्म जैकेट और शॉल रखें।',
    coldItem: 'गर्म जैकेट, शॉल',
    coolOutfit: 'सुबह जल्दी ठंडक हो सकती है — हल्का स्वेटर रखें।',
    coolItem: 'हल्का स्वेटर',
    swingOutfit: 'दिन-रात का अंतर ज़्यादा है — उतारने योग्य स्वेटर/जैकेट रखें।',
    swingItem: 'उतारने योग्य स्वेटर',
    windOutfit: 'हवा तेज़ है — ढीले कपड़े से बचें और टोपी संभालें।',
    windActivity: 'हवा तेज़ है — खुली जगहों पर फ़ोटोग्राफ़ी और ऊँचाई पर सावधानी।',
    windItem: 'टोपी (हवा में उड़े नहीं)',
    windModOutfit: 'हवा थोड़ी तेज़ है — ध्यान रखें कि टोपी उड़ न जाए।',
    windModItem: 'टोपी',
    sunActivity: 'साफ आसमान — वास्तविक गर्मी, हवा और प्रवेश की स्थिति के अनुसार यात्रा रखें।',
    cloudActivity: 'बादल प्रकाश नरम कर सकते हैं; वास्तविक स्थिति के अनुसार यात्रा की अवधि चुनें।',
    fogActivity: 'कोहरा — दृश्यता कम है, फ़ोटोग्राफ़ी के लिए कम उपयुक्त।',
    riskRainProbability: 'बारिश की अधिक संभावना — बारिश से बचाव का सामान रखें और स्थानीय स्थिति जाँचें; संभावना बारिश की तीव्रता नहीं बताती।',
    riskThunder: '⚠️ आंधी-पानी — खुली जगह, सीढ़ियाँ और पेड़ों के नीचे न रहें; सुरक्षित जगह प्रतीक्षा करें।',
    riskHeavyRain: '⚠️ भारी बारिश का जोखिम — फिसलन वाली सीढ़ियाँ टालें, सुरक्षित आश्रय लें और कर्मचारियों के निर्देश मानें।',
    riskWind: '⚠️ तेज़ हवा — खुली जगहों पर सावधानी, ढीली वस्तुएँ उड़ सकती हैं।',
    riskHeat: '⚠️ तीव्र गर्मी — दोपहर में बाहर न निकलें, पानी पीते रहें।',
    fallbackOutfit: 'मौसम सामान्य है — आरामदायक कपड़े ठीक हैं।',
    fallbackActivity: 'स्थानीय स्थिति और अनुमति वाले आगंतुक मार्ग की जाँच करें।',
  },
};

// Smart, visitor-facing advice derived from the weather data.
// City-heritage site (Adalaj Stepwell): heat / UV / rain / wind / day-night
// focus only — no sea, mountain, or river scenarios. Risk is derived from
// measured conditions (no official alert feed is available).
export interface WeatherAdvice {
  outfit: string[]; // what to wear
  activity: string[]; // what to do / where to go
  items: string[]; // what to bring
  risk: string | null; // safety note, shown only when conditions are extreme
}

export function buildAdvice(now: WeatherCurrent, days: WeatherDaily, locale: Locale = 'gu'): WeatherAdvice {
  const L = ADVICE[locale];
  const i = 0;
  const code = days.weather_code[i] ?? now.weather_code;
  const group = wmoGroup(code);
  const tMax = days.temperature_2m_max[i] ?? now.temperature_2m;
  const tMin = days.temperature_2m_min[i] ?? now.temperature_2m;
  const precip = days.precipitation_probability_max?.[i] ?? 0;
  const wind = days.wind_speed_10m_max?.[i] ?? now.wind_speed_10m;
  const uv = days.uv_index_max?.[i] ?? 0;
  const dayDiff = tMax - tMin;
  const isThunder = code >= 95;
  const isRain = group === 'rain' || precip >= 60;
  const isHeavyRain = [65,67,82].includes(code);

  const outfit: string[] = [];
  const activity: string[] = [];
  const items: string[] = [];
  const pushU = (s: string) => { if (!outfit.includes(s)) outfit.push(s); };
  const pushA = (s: string) => { if (!activity.includes(s)) activity.push(s); };
  const pushI = (s: string) => { if (!items.includes(s)) items.push(s); };

  if (isRain || precip >= 60) {
    pushU(L.rainOutfit);
    pushA(L.rainActivity);
    pushI(L.rainItem);
  }
  if (isHeavyRain) pushA(L.heavyRainActivity);
  if (isThunder) pushA(L.thunderActivity);

  if (tMax >= 38) {
    pushU(L.heatOutfit);
    pushA(L.heatActivity);
    pushI(L.heatItem);
  } else if (tMax >= 32) {
    pushU(L.warmOutfit);
    pushA(L.warmActivity);
  }
  if (uv >= 5) {
    pushA(L.uvActivity);
    pushI(L.uvItem);
  }

  if (tMax <= 10) {
    pushU(L.coldOutfit);
    pushI(L.coldItem);
  } else if (tMin <= 10) {
    pushU(L.coolOutfit);
    pushI(L.coolItem);
  }
  if (dayDiff > 8) {
    pushU(L.swingOutfit);
    pushI(L.swingItem);
  }

  if (wind >= 50) {
    pushU(L.windOutfit);
    pushA(L.windActivity);
    pushI(L.windItem);
  } else if (wind >= 39) {
    pushU(L.windModOutfit);
    pushI(L.windModItem);
  }

  if (group === 'sun' || group === 'partly') pushA(L.sunActivity);
  else if (group === 'cloud') pushA(L.cloudActivity);
  else if (group === 'fog') pushA(L.fogActivity);

  let risk: string | null = null;
  if (isThunder) risk = L.riskThunder;
  else if (isHeavyRain) risk = L.riskHeavyRain;
  else if (wind >= 50) risk = L.riskWind;
  else if (tMax >= 43) risk = L.riskHeat;
  else if (precip >= 80) risk = L.riskRainProbability;

  if (outfit.length === 0) pushU(L.fallbackOutfit);
  if (activity.length === 0) pushA(L.fallbackActivity);

  return { outfit, activity, items, risk };
}

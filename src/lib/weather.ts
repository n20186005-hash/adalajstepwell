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
export const WEATHER_LAT = 23.1668;
export const WEATHER_LON = 72.5801;
export const CACHE_TTL_SECONDS = 1800; // 30 minutes

export const WEATHER_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${WEATHER_LAT}&longitude=${WEATHER_LON}` +
  '&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,is_day' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max' +
  '&timezone=auto&forecast_days=7';

// Minimal structural type for the Workers Cache API (global `caches`).
interface CacheLike {
  match(key: string): Promise<Response | undefined>;
  put(key: string, value: Response): Promise<void>;
}

function defaultCache(): CacheLike | undefined {
  const g = globalThis as unknown as { caches?: { default?: CacheLike } };
  return g.caches?.default;
}

export async function getWeather(): Promise<WeatherData | null> {
  const cache = defaultCache();
  try {
    if (cache) {
      const hit = await cache.match(WEATHER_URL);
      if (hit) {
        const parsed = (await hit.json()) as WeatherData;
        if (parsed?.current && parsed?.daily?.time?.length) return parsed;
      }
    }
    const res = await fetch(WEATHER_URL, { headers: { accept: 'application/json' } });
    if (!res.ok) return null;
    const data = (await res.json()) as WeatherData;
    if (!data?.current || !data?.daily?.time?.length) return null;
    if (cache) {
      try {
        await cache.put(
          WEATHER_URL,
          new Response(JSON.stringify(data), {
            headers: { 'Cache-Control': `public, max-age=${CACHE_TTL_SECONDS}` }
          })
        );
      } catch {
        /* cache write failure is non-fatal */
      }
    }
    return data;
  } catch {
    return null;
  }
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
    rainActivity: 'વરસાદની શક્યતા વધારે છે — વાવની અંદરની છાંય અને બગીચો માણો; પથ્થરનાં પગથિયાં સરકતાં હોઈ સાવધાની રાખો.',
    rainItem: 'છતરી અથવા રેઇનકોટ',
    heavyRainActivity: 'ભારે વરસાદમાં નીચેનાં પગથિયાં પર ન ઉતરવું; આંતરિક છાંય રાખો.',
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
    sunActivity: 'હવામાન સાફ છે — બહારના પ્લેટફોર્મ અને કોતરણી જોવા માટે શ્રેષ્ઠ સમય.',
    cloudActivity: 'વાદળછાયું હવામાન — ફોટોગ્રાફી માટે સરળ પ્રકાશ, લાંબી મુલાકાત યોગ્ય.',
    fogActivity: 'ધુમ્મસ — દૃશ્યતા ઓછી છે, ફોટોગ્રાફી માટે ઓછું યોગ્ય.',
    riskThunder: '⚠️ વીજળી સાથે વરસાદ — ખુલ્લી જગ્યા, પગથિયાં અને ઝાડ નીચે ન રહો; સલામત સ્થાને રાહ જુઓ.',
    riskHeavyRain: '⚠️ ભારે વરસાદ — પથ્થરનાં પગથિયાં સરકતાં હોઈ નીચે ન ઉતરો, છાંય રાખો.',
    riskWind: '⚠️ તીવ્ર પવન — ખુલ્લી જગ્યાએ સાવધાની, ઢીલી વસ્તુઓ ઉડી ન જાય.',
    riskHeat: '⚠️ તીવ્ર ગરમી — બપોરે બહાર ન નીકળવું, પાણી પીતા રહો.',
    fallbackOutfit: 'હવામાન સામાન્ય છે — આરામદાયક પહેરવેશ યોગ્ય છે.',
    fallbackActivity: 'હવામાન મુલાકાત માટે અનુકૂળ છે — વાવ અને બગીચાનો આનંદ લો.',
  },
  en: {
    rainOutfit: 'Wear a waterproof raincoat or water-resistant clothes for rain.',
    rainActivity: 'Higher chance of rain — enjoy the shaded interior of the stepwell and the garden; stone steps are slippery, take care.',
    rainItem: 'Umbrella or raincoat',
    heavyRainActivity: 'In heavy rain do not go down the lower steps; stay in the shaded interior.',
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
    sunActivity: 'Clear weather — best time to see the outer platforms and carvings.',
    cloudActivity: 'Cloudy weather — easy light for photography, good for a long visit.',
    fogActivity: 'Fog — visibility is low, less suitable for photography.',
    riskThunder: '⚠️ Thunderstorm — avoid open areas, steps and trees; wait in a safe place.',
    riskHeavyRain: '⚠️ Heavy rain — stone steps are slippery, do not go down, keep to shade.',
    riskWind: '⚠️ Strong wind — caution in open areas, loose items may blow away.',
    riskHeat: '⚠️ Intense heat — do not go out at noon, keep drinking water.',
    fallbackOutfit: 'Weather is normal — comfortable clothing is fine.',
    fallbackActivity: 'Weather is favourable for a visit — enjoy the stepwell and garden.',
  },
  hi: {
    rainOutfit: 'बारिश के लिए जलरोधक रेनकोट या कपड़े पहनें.',
    rainActivity: 'बारिश की संभावना अधिक है — वाव की छायादार अंदरूनी जगह और बगीचे का आनंद लें; पत्थर की सीढ़ियाँ फिसलन भरी हैं, सावधान रहें।',
    rainItem: 'छाता या रेनकोट',
    heavyRainActivity: 'भारी बारिश में नीचे की सीढ़ियों पर न उतरें; छायादार अंदरूनी हिस्से में रहें।',
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
    sunActivity: 'साफ मौसम — बाहरी मंज़िलें और नक्काशी देखने का सर्वोत्तम समय।',
    cloudActivity: 'बादलों वाला मौसम — फ़ोटोग्राफ़ी के लिए सरल प्रकाश, लंबी मुलाकात के लिए उत्तम।',
    fogActivity: 'कोहरा — दृश्यता कम है, फ़ोटोग्राफ़ी के लिए कम उपयुक्त।',
    riskThunder: '⚠️ आंधी-पानी — खुली जगह, सीढ़ियाँ और पेड़ों के नीचे न रहें; सुरक्षित जगह प्रतीक्षा करें।',
    riskHeavyRain: '⚠️ भारी बारिश — पत्थर की सीढ़ियाँ फिसलन भरी हैं, नीचे न उतरें, छाया में रहें।',
    riskWind: '⚠️ तेज़ हवा — खुली जगहों पर सावधानी, ढीली वस्तुएँ उड़ सकती हैं।',
    riskHeat: '⚠️ तीव्र गर्मी — दोपहर में बाहर न निकलें, पानी पीते रहें।',
    fallbackOutfit: 'मौसम सामान्य है — आरामदायक कपड़े ठीक हैं।',
    fallbackActivity: 'मौसम मुलाकात के लिए अनुकूल है — वाव और बगीचे का आनंद लें।',
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
  const isHeavyRain = code >= 65 || code === 82 || (group === 'rain' && code >= 61);

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
  else if (isHeavyRain || precip >= 80) risk = L.riskHeavyRain;
  else if (wind >= 50) risk = L.riskWind;
  else if (tMax >= 43) risk = L.riskHeat;

  if (outfit.length === 0) pushU(L.fallbackOutfit);
  if (activity.length === 0) pushA(L.fallbackActivity);

  return { outfit, activity, items, risk };
}

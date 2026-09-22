import type { Locale } from '../i18n';

export type SubSlug = 'timings' | 'entry-fee' | 'transport' | 'history';

export interface FaqItem { q: string; a: string; }

export interface LinkItem { label: string; href: string; }

export interface HomeDict {
  heroEyebrow: string;
  h1: string;
  heroLead: string;
  facts: { value: string; label: string }[];
  history: { eyebrow: string; title: string; p1: string; p2: string; links: LinkItem[] };
  stories: { eyebrow: string; title: string; p: string };
  architecture: { eyebrow: string; title: string; p: string };
  climate: { eyebrow: string; title: string; p: string };
  itineraries: { eyebrow: string; title: string; p: string };
  visit: { eyebrow: string; title: string; cards: { title: string; body: string }[] };
  reach: { eyebrow: string; title: string; blocks: { h: string; p: string }[]; sourceNote: string };
  facilities: { eyebrow: string; title: string; p: string };
  etiquette: { eyebrow: string; title: string; p: string };
  nearby: { eyebrow: string; title: string; cards: { title: string; body: string }[] };
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  sources: { eyebrow: string; title: string; items: LinkItem[] };
}

export interface SubPageDict {
  eyebrow: string;
  h1: string;
  intro: string;
  blocks: { h: string; p: string }[];
  faq: FaqItem[];
  related: LinkItem[];
}

export interface UiDict {
  nav: { id: string; label: string }[];
  langSwitchLabel: string;
  footer: { project: string; sources: string; photo: string; copyright: string };
  footerNav: { privacy: string; terms: string; cookies: string };
  relatedLabel: string;
  weather: {
    heading: string;
    current: string;
    temp: string;
    feels: string;
    wind: string;
    precip: string;
    uv: string;
    sevenDay: string;
    noData: string;
    adviceHeading: string;
  };
}

const GOVT = 'https://www.incredibleindia.gov.in/en/gujarat/gandhinagar/adalaj-stepwell';
const GUJ_TOUR = 'https://www.gujarattourism.com/';
const DISTRICT = 'https://gandhinagar.nic.in/';

export const ui: Record<Locale, UiDict> = {
  gu: {
    nav: [
      { id: 'history', label: 'ઇતિહાસ' }, { id: 'stories', label: 'ગાથાઓ' },
      { id: 'architecture', label: 'સ્થાપત્ય' }, { id: 'climate', label: 'આબોહવા' },
      { id: 'itineraries', label: 'માર્ગ' }, { id: 'visit', label: 'મુલાકાત' },
      { id: 'weather', label: 'હવામાન' }, { id: 'season', label: 'ઋતુ' },
      { id: 'reach', label: 'પ્રવાસ' }, { id: 'facilities', label: 'સુવિધાઓ' },
      { id: 'nearby', label: 'આસપાસ' }, { id: 'faq', label: 'પ્રશ્નોત્તરી' },
      { id: 'sources', label: 'સ્ત્રોતો' },
    ],
    langSwitchLabel: 'ભાષા',
    footer: {
      project: 'આ વેબસાઇટ સ્વતંત્ર, નફારહિત મુલાકાતી માહિતી માર્ગદર્શિકા પ્રોજેક્ટ છે અને કોઈ સરકારી સંસ્થા અથવા સત્તાવાર સંગઠન સાથે સંકળાયેલ નથી.',
      sources: 'સ્થળ માહિતી અડાલજ સ્થાનિક પંચાયત/ગાંધીનગર જિલ્લા પ્રશાસન, ગુજરાત પ્રવાસન અને ભારત સરકારના પ્રવાસન મંત્રાલયના રાષ્ટ્રીય પ્રવાસન પોર્ટલ જેવા જાહેર સ્ત્રોતો સામે તુલના કરીને તૈયાર કરવામાં આવી છે; તેમાં કોઈ વ્યાવસાયિક ભલામણનો હેતુ નથી.',
      photo: 'ચિત્ર અધિકાર: આ વેબસાઇટ પર દર્શાવેલ તમામ ફોટોગ્રાફના હક્ક અને કૉપિરાઇટ તેમના મૂળ ફોટોગ્રાફરોના છે. વિગત PHOTO-CREDITS.md માં છે.',
      copyright: '© 2026 અડાલજની વાવ પ્રવાસ માર્ગદર્શિકા. સર્વ હક્ક સુરક્ષિત.',
    },
    footerNav: { privacy: 'ગોપનીયતા નીતિ', terms: 'સેવાની શરતો', cookies: 'કૂકી સેટિંગ્સ' },
    relatedLabel: 'સંબંધિત પાનાં',
    weather: {
      heading: 'હવામાન', current: 'વર્તમાન', temp: 'તાપમાન', feels: 'અનુભવ', wind: 'પવન',
      precip: 'વરસાદ શક્યતા', uv: 'યુવી', sevenDay: '૭ દિવસ', noData: 'હવામાન માહિતી અત્યારે ઉપલબ્ધ નથી.', adviceHeading: 'મુલાકાત સૂચન',
    },
  },
  en: {
    nav: [
      { id: 'history', label: 'History' }, { id: 'stories', label: 'Stories' },
      { id: 'architecture', label: 'Architecture' }, { id: 'climate', label: 'Climate' },
      { id: 'itineraries', label: 'Itineraries' }, { id: 'visit', label: 'Visit' },
      { id: 'weather', label: 'Weather' }, { id: 'season', label: 'Seasons' },
      { id: 'reach', label: 'Getting there' }, { id: 'facilities', label: 'Facilities' },
      { id: 'nearby', label: 'Nearby' }, { id: 'faq', label: 'FAQ' },
      { id: 'sources', label: 'Sources' },
    ],
    langSwitchLabel: 'Language',
    footer: {
      project: 'This website is an independent, non-profit visitor-information guide and is not affiliated with any government body or official organisation.',
      sources: 'Place information is compiled by cross-checking public sources such as the Adalaj local panchayat / Gandhinagar district administration, Gujarat Tourism and the Government of India’s national tourism portal; it carries no commercial endorsement.',
      photo: 'Image credits: all photographs shown on this website are the property and copyright of their original photographers. Details are in PHOTO-CREDITS.md.',
      copyright: '© 2026 Adalaj Stepwell Travel Guide. All rights reserved.',
    },
    footerNav: { privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookie Settings' },
    relatedLabel: 'Related pages',
    weather: {
      heading: 'Weather', current: 'Now', temp: 'Temp', feels: 'Feels like', wind: 'Wind',
      precip: 'Rain chance', uv: 'UV', sevenDay: '7-day', noData: 'Weather information is not available right now.', adviceHeading: 'Visitor advice',
    },
  },
  hi: {
    nav: [
      { id: 'history', label: 'इतिहास' }, { id: 'stories', label: 'कथाएँ' },
      { id: 'architecture', label: 'वास्तुकला' }, { id: 'climate', label: 'जलवायु' },
      { id: 'itineraries', label: 'यात्रा योजना' }, { id: 'visit', label: 'भ्रमण' },
      { id: 'weather', label: 'मौसम' }, { id: 'season', label: 'ऋतु' },
      { id: 'reach', label: 'पहुँच' }, { id: 'facilities', label: 'सुविधाएँ' },
      { id: 'nearby', label: 'आसपास' }, { id: 'faq', label: 'प्रश्नोत्तर' },
      { id: 'sources', label: 'स्रोत' },
    ],
    langSwitchLabel: 'भाषा',
    footer: {
      project: 'यह वेबसाइट एक स्वतंत्र, गैर-लाभकारी आगंतुक-जानकारी मार्गदर्शिका है और किसी सरकारी निकाय या आधिकारिक संगठन से संबद्ध नहीं है.',
      sources: 'स्थान जानकारी अडालज ग्राम पंचायत / गांधीनगर ज़िला प्रशासन, गुजरात पर्यटन और भारत सरकार के राष्ट्रीय पर्यटन पोर्टल जैसे सार्वजनिक स्रोतों का मिलान कर तैयार की गई है; इसमें कोई व्यावसायिक अनुशंसा नहीं है.',
      photo: 'चित्र अधिकार: इस वेबसाइट पर दिखाए गए सभी फ़ोटोग्राफ़ उनके मूल फ़ोटोग्राफ़रों की संपत्ति और कॉपीराइट हैं. विवरण PHOTO-CREDITS.md में है.',
      copyright: '© 2026 अडालज स्टेपवेल यात्रा गाइड. सर्वाधिकार सुरक्षित.',
    },
    footerNav: { privacy: 'गोपनीयता नीति', terms: 'सेवा की शर्तें', cookies: 'कुकी सेटिंग्स' },
    relatedLabel: 'संबंधित पृष्ठ',
    weather: {
      heading: 'मौसम', current: 'अभी', temp: 'तापमान', feels: 'अनुभव', wind: 'हवा',
      precip: 'बारिश संभावना', uv: 'यूवी', sevenDay: '७ दिन', noData: 'मौसम की जानकारी अभी उपलब्ध नहीं है.', adviceHeading: 'यात्रा सुझाव',
    },
  },
};

export const home: Record<Locale, HomeDict> = {
  gu: {
    heroEyebrow: 'અડાલજ · ગાંધીનગર જિલ્લો · ગુજરાત · ભારત',
    h1: 'અડાલજની વાવ (અડાલજ, ગુજરાત)',
    heroLead: 'અડાલજની વાવ, જે રુદાબાઈની વાવ તરીકે વ્યાપકપણે ઓળખાય છે, તે અડાલજ, ગાંધીનગર જિલ્લો, ગુજરાત, ભારતમાં આવેલું 15મી સદીના અંતનું સ્મારક છે — જ્યાં પાણી સંગ્રહની બુદ્ધિ, આરામદાયક છાંયો અને હિંદુ–જૈન–ઇસ્લામિક કોતરણી એક જ સ્થાપત્યમાં મળે છે.',
    facts: [
      { value: '15મી સદી', label: 'રુદાબાઈની વાવ' },
      { value: '5 સ્તર', label: 'ભૂગર્ભ ગલારીઓ' },
      { value: '08:00–18:00', label: 'મુસાફરી પહેલાં ચકાસો' },
      { value: '4.5 ★', label: '31,158 ગૂગલ સમીક્ષાઓ*' },
    ],
    history: {
      eyebrow: 'સ્થાપત્ય અને વારસો',
      title: 'પ્રકાશ, છાંયો અને પથ્થરનું ઊભું શહેર',
      p1: 'અડાલજની વાવ, જેને રુદાબાઈની વાવ પણ કહેવામાં આવે છે, અડાલજ ગામમાં આવેલી પાંચ માળની ઐતિહાસિક સોપાનવાવ છે. જિલ્લા અને રાષ્ટ્રીય પ્રવાસન સ્ત્રોતો તેને 15મી સદીના અંતની રચના તરીકે દર્શાવે છે અને તેની શિલ્પકામવાળી સ્તંભમાળા, અષ્ટકોણીય ખુલ્લું કેન્દ્ર અને પાણી સુધી ઉતરતા સ્તરોને વિશેષતા ગણાવે છે.',
      p2: 'વાવ માત્ર પાણી મેળવવાનું સાધન નહોતી; વેપારીઓ, યાત્રિકો અને સ્થાનિક લોકો માટે આરામ અને સામાજિક મેળાવડાનું સ્થળ પણ હતી. કોતરણીમાં ફૂલપાન, જ્યોમેટ્રિક પેટર્ન, દૈવી આકૃતિઓ અને રોજિંદા જીવનના દૃશ્યો મળે છે. અડાલજની વાવની મુલાકાતે જનારાઓ નજીકનાં ઐતિહાસિક સીમાચિહ્નો — ગાંધીનગરનું અક્ષરધામ અને અડાલજનું ત્રિમંદિર — પણ સરળતાથી જોઈ શકે છે.',
      links: [
        { label: 'ભારત સરકારનું પ્રવાસન પોર્ટલ', href: GOVT },
        { label: 'ગાંધીનગર જિલ્લા પ્રશાસન', href: DISTRICT },
        { label: 'ગુજરાત પ્રવાસન', href: GUJ_TOUR },
      ],
    },
    stories: { eyebrow: 'દંતકથા અને વારસો', title: 'રાણી રુદાબાઈની ગાથા', p: 'સૌથી પ્રચલિત દંતકથા રાણી રુદાબાઈની છે — વાવ પૂર્ણ થતાં તેમણે દિવંગત પતિ માટે પ્રાર્થના કરી અને કૂવામાં સમર્પિત થયાં; આથી વાવને પ્રેમ અને પ્રતિભાવનું સ્મારક કહેવાય છે. આ કથા પેઢીઓથી ગુજરાતી લોકગીતો અને કથાઓમાં જીવંત છે.' },
    architecture: { eyebrow: 'સ્થાપત્ય', title: 'પાંચ માળ અને અષ્ટકોણીય કુંડ', p: 'વાવ પાંચ માળની છે, જેમાં નીચે તરફ ઓરડાઓ, છાયાદાર ગલારીઓ અને પાણી સુધી ઉતરતી સીડીઓ છે. કેન્દ્રમાં અષ્ટકોણીય ખુલ્લું કુંડ છે. સ્તંભ, મેહરાબ અને છત પર કોતરણી હિંદુ, જૈન અને ઇસ્લામિક શૈલીઓનું મિશ્રણ દર્શાવે છે.' },
    climate: { eyebrow: 'આબોહવા', title: 'ગુજરાતની કઠોળ અને ચોમાસુ', p: 'અડાલજ કઠોળ (માર્ચ–જૂન) ગરમ અને શુષ્ક, ચોમાસુ (જૂન–સપ્ટેમ્બર) ભેજવાળું, અને શિયાળો (નવેમ્બર–ફેબ્રુઆરી) આરામદાયક હોય છે. મુલાકાત માટે શિયાળો શ્રેષ્ઠ ગણાય છે.' },
    itineraries: { eyebrow: 'માર્ગ', title: 'કયા પ્રકારના મુલાકાતી માટે', p: 'ટૂંકી મુલાકાત (૬૦–૯૦ મિનિટ) માટે મુખ્ય સ્તર અને કોતરણી પૂરતાં છે. ફોટોગ્રાફી અને ધ્યાન માટે ૨ કલાક રાખો. અક્ષરધામ અને ત્રિમંદિર સાથે જોડીને અડધો અથવા પૂરો દિવસ ગાળી શકાય.' },
    visit: {
      eyebrow: 'મુલાકાતની યોજના', title: 'જતાં પહેલાં જાણવું જરૂરી',
      cards: [
        { title: 'ટિકિટ / ખર્ચ', body: 'પ્રવેશ ફી અને ફોટોગ્રાફી સંબંધિત નિયમો બદલાઈ શકે છે. મુલાકાત પહેલાં ASI અથવા સ્થાનિક સત્તાવાર સૂચના ચકાસો.' },
        { title: 'શ્રેષ્ઠ સમય', body: 'ઓક્ટોબરથી માર્ચ વધુ આરામદાયક. નરમ પ્રકાશ માટે વહેલી સવાર અથવા સાંજ પહેલાં આવવું સારું.' },
        { title: 'સૂચિત સમય', body: 'સામાન્ય મુલાકાત માટે 60–90 મિનિટ; કોતરણી, ફોટોગ્રાફી અને શાંતિથી દરેક સ્તર જોવું હોય તો 2 કલાક સુધી રાખો.' },
        { title: 'પાર્કિંગ', body: 'સ્થળ આસપાસ રોડ આધારિત પહોંચ ઉપલબ્ધ છે. પાર્કિંગ વ્યવસ્થા સ્થળ પર બદલાઈ શકે; ભીડના દિવસોમાં વહેલા આવવું વધુ સરળ રહે છે.' },
        { title: 'પહેરવેશ અને સલામતી', body: 'પથ્થરના પગથિયાં માટે સારી ગ્રિપવાળા શૂઝ પહેરો. ઐતિહાસિક કોતરણીને સ્પર્શ/ખરોચ ન કરો અને સીમિત વિસ્તારોના નિર્દેશો માનશો.' },
        { title: 'સરનામું', body: 'અડાલજ રોડ, અડાલજ, ગુજરાત 382421, ભારત · પ્લસ કોડ: 5H8J+P2' },
      ],
    },
    reach: {
      eyebrow: 'વિગતવાર પરિવહન', title: 'અમદાવાદ અને ગાંધીનગર વચ્ચે સરળ રોડ પહોંચ',
      blocks: [
        { h: 'હવાઈ માર્ગ (એરપોર્ટ → વાવ)', p: 'સૌથી નજીકનું મોટું એરપોર્ટ સરદાર વલ્લભભાઈ પટેલ ઇન્ટરનેશનલ એરપોર્ટ (અમદાવાદ) છે, જે અડાલજથી લગભગ ૧૮ કિ.મી. દૂર છે. એરપોર્ટથી પ્રીપેઇડ ટેક્સી અથવા કેબ લઈ SG હાઇવે થઈ અડાલજ પહોંચી શકાય છે; ટ્રાફિક પ્રમાણે ૪૫–૬૦ મિનિટ લાગે છે.' },
        { h: 'રેલ + સ્થાનિક વાહન', p: 'ગાંધીનગર કેપિટલ અથવા અમદાવાદ જંક્શન ઉતરો. ત્યાંથી GSRTC બસ, શેર્ડ ઓટો અથવા કેબ દ્વારા અડાલજ પહોંચી શકાય છે. અમે કોઈ ચોક્કસ ઓપરેટરની ભલામણ કરતા નથી — રવાના પહેલાં તાજી સ્થાનિક સમીક્ષાઓ તપાસો.' },
        { h: 'રોડ / ટેક્સી', p: 'અમદાવાદ અથવા ગાંધીનગરથી એપ-આધારિત કેબ કે ટેક્સી લો અને ગંતવ્ય "Adalaj Stepwell, Adalaj" સેટ કરો. અંતર લગભગ ૨૦–૩૦ કિ.મી. છે.' },
      ],
      sourceNote: 'અધિકૃત માહિતી: ભારત સરકાર પ્રવાસન પોર્ટલ · ગુજરાત પ્રવાસન',
    },
    facilities: { eyebrow: 'સુવિધાઓ', title: 'આસપાસ શું મળે છે', p: 'પાર્કિંગ, શૌચાલય, શાકાહારી ભોજન, કરિયાણું, ઇંધણ, ફાર્મસી અને ATM નજીકમાં મળી શકે છે. ચોક્કસ વ્યવસ્થા સ્થળ પર ચકાસો — અમે કોઈ વ્યાપારી સંસ્થાની ભલામણ કરતા નથી.' },
    etiquette: { eyebrow: 'શિષ્ટાચાર', title: 'મુલાકાતી માટે ટિપ્સ', p: 'પવિત્ર સ્થળ તરીકે વિનમ્ર વેશ રાખો, અન્ય મુલાકાતીઓને માર્ગ આપો, અને કચરો પોતાની સાથે લઈ જાઓ. કોતરણીને નુકસાન ન પહોંચાડો.' },
    nearby: {
      eyebrow: 'આસપાસની યોજના', title: 'અડાલજ આસપાસ શું કરવું',
      cards: [
        { title: 'આસપાસનું ભોજન', body: 'અડાલજ–ગાંધીનગર માર્ગ પર ગુજરાતી થાળી, ફરસાણ, ચા અને શાકાહારી ભોજન સરળતાથી મળે છે.' },
        { title: 'અક્ષરધામ, ગાંધીનગર', body: 'ગાંધીનગરનો જાણીતા મંદિર સંકુલ. સમય, બંધ દિવસ અને સુરક્ષા નિયમો માટે સત્તાવાર માહિતી ચકાસો.' },
        { title: 'ત્રિમંદિર, અડાલજ', body: 'અડાલજ નજીકનું ધાર્મિક સંકુલ; ગાંધીનગર જિલ્લા પ્રવાસન પૃષ્ઠ પર આસપાસના રસપ્રદ સ્થળ તરીકે દર્શાવવામાં આવે છે.' },
      ],
    },
    faq: {
      eyebrow: 'પ્રશ્નોત્તરી', title: 'સામાન્ય પ્રશ્નો',
      items: [
        { q: 'અડાલજની વાવ જોવા માટે કેટલો સમય રાખવો?', a: 'મોટાભાગના મુલાકાતીઓ માટે 60 થી 90 મિનિટ પૂરતી છે. કોતરણી, પ્રકાશ અને ફોટોગ્રાફી માટે વધુ સમય રાખી શકાય.' },
        { q: 'અડાલજની વાવ માટે પ્રવેશ ફી છે?', a: 'પ્રવેશ નીતિ બદલાઈ શકે છે. મુસાફરી પહેલાં ASI અથવા સ્થાનિક સત્તાવાર સ્ત્રોતથી હાલની ફી અને નિયમો ચકાસો.' },
        { q: 'કયો સમય શ્રેષ્ઠ છે?', a: 'ઓક્ટોબરથી માર્ચનું હવામાન વધુ આરામદાયક હોય છે. વહેલી સવાર અથવા સાંજ પહેલાંનો સમય કોતરણી પર નરમ પ્રકાશ માટે અનુકૂળ છે.' },
        { q: 'અમદાવાદથી કેવી રીતે પહોંચવું?', a: 'અડાલજ અમદાવાદ અને ગાંધીનગર વચ્ચે આવેલું છે. ટેક્સી, કાર અથવા બસ દ્વારા રોડ માર્ગે પહોંચી શકાય છે; નજીકના મુખ્ય રેલવે કેન્દ્રો અમદાવાદ અને ગાંધીનગર છે.' },
        { q: 'અડાલજમાં શું સુવિધાઓ મળે છે?', a: 'પાર્કિંગ, શૌચાલય, શાકાહારી ભોજન, કરિયાણું, ઇંધણ, ફાર્મસી અને ATM નજીકમાં મળી શકે છે.' },
        { q: 'અમદાવાદ એરપોર્ટથી અડાલજની વાવ કેવી રીતે પહોંચવું?', a: 'સૌથી નજીકનું મોટું એરપોર્ટ સરદાર વલ્લભભાઈ પટેલ ઇન્ટરનેશનલ એરપોર્ટ (અમદાવાદ) છે. ત્યાંથી ટેક્સી અથવા કેબ દ્વારા રોડ માર્ગે અડાલજ પહોંચી શકાય છે.' },
        { q: 'વર્ષમાં કયા સમયે જવું શ્રેષ્ઠ છે?', a: 'નવેમ્બરથી ફેબ્રુઆરી (શિયાળો) સૌથી આરામદાયક છે. એપ્રિલ–મે ની તીવ્ર ગરમી અને જૂન–સપ્ટેમ્બર નો ચોમાસુ ટાળવા જેવા છે.' },
        { q: 'અડાલજની વાવ પાસે પાર્કિંગ છે?', a: 'પ્રવેશદ્વાર નજીક રસ્તા કિનારે અથવા નિયત પાર્કિંગ વ્યવસ્થા હોઈ શકે છે. રજાઓ અને ભીડના દિવસોમાં વહેલા આવવું સલાહભર્યું છે.' },
      ],
    },
    sources: {
      eyebrow: 'સ્ત્રોતો', title: 'અધિકૃત અને સાર્વજનિક સ્ત્રોતો',
      items: [
        { label: 'ભારત સરકાર પ્રવાસન પોર્ટલ', href: GOVT },
        { label: 'ગાંધીનગર જિલ્લા પ્રશાસન', href: DISTRICT },
        { label: 'ગુજરાત પ્રવાસન', href: GUJ_TOUR },
      ],
    },
  },
  en: {
    heroEyebrow: 'Adalaj · Gandhinagar District · Gujarat · India',
    h1: 'Adalaj Stepwell (Adalaj, Gujarat)',
    heroLead: 'The Adalaj Stepwell, widely known as Rudabai ni Vav, is a late-15th-century monument in Adalaj, Gandhinagar district, Gujarat, India — where the ingenuity of water storage, cool shade and Hindu–Jain–Islamic carving meet in a single structure.',
    facts: [
      { value: '15th c.', label: 'Rudabai ni Vav' },
      { value: '5 storeys', label: 'Underground galleries' },
      { value: '08:00–18:00', label: 'Verify before travel' },
      { value: '4.5 ★', label: '31,158 Google reviews*' },
    ],
    history: {
      eyebrow: 'Architecture & heritage',
      title: 'Light, shadow and a vertical city of stone',
      p1: 'The Adalaj Stepwell, also called Rudabai ni Vav, is a five-storey historic stepwell in the village of Adalaj. District and national tourism sources describe it as a late-15th-century construction, noted for its carved pillared halls, an octagonal open well and flights of steps descending to the water.',
      p2: 'The stepwell was never only a source of water; it was also a place of rest and social gathering for traders, pilgrims and locals. The carvings show floral motifs, geometric patterns, divine figures and scenes of everyday life. Visitors to Adalaj Stepwell can easily combine nearby landmarks — Akshardham in Gandhinagar and Trimandir in Adalaj.',
      links: [
        { label: 'Government of India tourism portal', href: GOVT },
        { label: 'Gandhinagar district administration', href: DISTRICT },
        { label: 'Gujarat Tourism', href: GUJ_TOUR },
      ],
    },
    stories: { eyebrow: 'Legend & heritage', title: "Queen Rudabai's tale", p: 'The most popular legend is of Queen Rudabai — when the stepwell was completed she prayed for her late husband and dedicated herself to the well; hence the stepwell is called a monument of love and devotion. The story lives on across generations in Gujarati folk songs and tales.' },
    architecture: { eyebrow: 'Architecture', title: 'Five storeys and an octagonal kund', p: 'The stepwell has five storeys with rooms, shaded galleries and flights of steps leading down to the water. At its centre is an octagonal open kund. The carving on pillars, arches and ceilings blends Hindu, Jain and Islamic styles.' },
    climate: { eyebrow: 'Climate', title: 'Gujarat’s heat and monsoon', p: 'Adalaj has a hot, dry summer (Mar–Jun), a humid monsoon (Jun–Sep) and a comfortable winter (Nov–Feb). Winter is considered the best season to visit.' },
    itineraries: { eyebrow: 'Itineraries', title: 'For what kind of visitor', p: 'A short visit (60–90 minutes) covers the main storeys and carvings. Allow 2 hours for photography and quiet exploration. Combine with Akshardham and Trimandir for a half or full day.' },
    visit: {
      eyebrow: 'Plan your visit', title: 'Know before you go',
      cards: [
        { title: 'Ticket / cost', body: 'Entry fees and photography rules can change. Verify current ASI or local official notice before visiting.' },
        { title: 'Best time', body: 'Oct–Mar is more comfortable. Arrive early morning or before sunset for soft light.' },
        { title: 'Suggested duration', body: '60–90 min for a standard visit; up to 2 hours to see every storey at leisure with photography.' },
        { title: 'Parking', body: 'Roadside access is available around the site. Parking arrangement may vary on site; arriving early on busy days is easier.' },
        { title: 'Dress & safety', body: 'Wear good-grip shoes for the stone steps. Do not touch or scratch the historic carvings and follow restricted-area signs.' },
        { title: 'Address', body: 'Adalaj Rd, Adalaj, Gujarat 382421, India · Plus Code: 5H8J+P2' },
      ],
    },
    reach: {
      eyebrow: 'Getting there in detail', title: 'Easy road access between Ahmedabad and Gandhinagar',
      blocks: [
        { h: 'By air (Airport → Stepwell)', p: 'The nearest major airport is Sardar Vallabhbhai Patel International Airport (Ahmedabad), about 18 km from Adalaj. From the airport take a prepaid taxi or app cab via SG Highway to Adalaj; 45–60 minutes depending on traffic.' },
        { h: 'Rail + local transport', p: 'Alight at Gandhinagar Capital or Ahmedabad Junction. From there reach Adalaj by GSRTC bus, shared auto or cab; ask for the "Adalaj" stop for the bus. We do not recommend a specific operator — check fresh local reviews before departure.' },
        { h: 'Road / taxi', p: 'Take an app cab or taxi from Ahmedabad or Gandhinagar and set destination "Adalaj Stepwell, Adalaj". Distance is about 20–30 km.' },
      ],
      sourceNote: 'Official info: Government of India tourism portal · Gujarat Tourism',
    },
    facilities: { eyebrow: 'Facilities', title: 'What is available nearby', p: 'Parking, restrooms, vegetarian food, groceries, fuel, pharmacy and ATM may be found nearby. Confirm specific arrangements on site — we do not recommend any commercial establishment.' },
    etiquette: { eyebrow: 'Etiquette', title: 'Tips for visitors', p: 'As a place of worship, dress modestly, give way to other visitors and take your litter with you. Do not damage the carvings.' },
    nearby: {
      eyebrow: 'Plan around', title: 'What to do near Adalaj',
      cards: [
        { title: 'Food nearby', body: 'Gujarati thali, farsan, tea and vegetarian meals are easily found along the Adalaj–Gandhinagar road.' },
        { title: 'Akshardham, Gandhinagar', body: 'A well-known temple complex in Gandhinagar. Check official info for timings, closed days and security rules.' },
        { title: 'Trimandir, Adalaj', body: 'A religious complex near Adalaj; featured as an interesting nearby place on the Gandhinagar district tourism page.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ', title: 'Frequently asked questions',
      items: [
        { q: 'How much time should I keep to see Adalaj Stepwell?', a: '60 to 90 minutes is enough for most visitors. Allow more for carvings, light and photography.' },
        { q: 'Is there an entry fee for Adalaj Stepwell?', a: 'Entry policy can change. Verify current fee and rules from ASI or the local official source before travel.' },
        { q: 'Which time is best?', a: 'Oct–Mar weather is more comfortable. Early morning or before sunset gives soft light on the carvings.' },
        { q: 'How to reach from Ahmedabad?', a: 'Adalaj lies between Ahmedabad and Gandhinagar. Reach by road via taxi, car or bus; the nearest major rail hubs are Ahmedabad and Gandhinagar.' },
        { q: 'What facilities are available at Adalaj?', a: 'Parking, restrooms, vegetarian food, groceries, fuel, pharmacy and ATM may be found nearby.' },
        { q: 'How to reach Adalaj Stepwell from Ahmedabad airport?', a: 'The nearest major airport is Sardar Vallabhbhai Patel International Airport (Ahmedabad). From there reach Adalaj by taxi or cab via road.' },
        { q: 'What time of year is best to go?', a: 'Nov–Feb (winter) is most comfortable. Avoid the intense heat of Apr–May and the Jun–Sep monsoon.' },
        { q: 'Is there parking near Adalaj Stepwell?', a: 'Roadside or designated parking may be available near the entrance. Space is limited on holidays and busy days — arrive early.' },
      ],
    },
    sources: {
      eyebrow: 'Sources', title: 'Official and public sources',
      items: [
        { label: 'Government of India tourism portal', href: GOVT },
        { label: 'Gandhinagar district administration', href: DISTRICT },
        { label: 'Gujarat Tourism', href: GUJ_TOUR },
      ],
    },
  },
  hi: {
    heroEyebrow: 'अडालज · गांधीनगर ज़िला · गुजरात · भारत',
    h1: 'अडालज स्टेपवेल (अडालज, गुजरात)',
    heroLead: 'अडालज स्टेपवेल, जिसे आमतौर पर रुदाबाई नी वाव कहा जाता है, गांधीनगर ज़िला, गुजरात, भारत के अडालज गाँव में 15वीं सदी के अंत का एक स्मारक है — जहाँ जल संग्रह की समझ, छायादार शांति और हिंदू–जैन–इस्लामी नक्काशी एक ही संरचना में मिलती हैं.',
    facts: [
      { value: '15वीं सदी', label: 'रुदाबाई नी वाव' },
      { value: '5 मंज़िल', label: 'भूमिगत दीर्घाएँ' },
      { value: '08:00–18:00', label: 'यात्रा से पहले जाँचें' },
      { value: '4.5 ★', label: '31,158 गूगल समीक्षाएँ*' },
    ],
    history: {
      eyebrow: 'वास्तुकला और विरासत',
      title: 'प्रकाश, छाया और पत्थर का एक खड़ा शहर',
      p1: 'अडालज स्टेपवेल, जिसे रुदाबाई नी वाव भी कहा जाता है, अडालज गाँव में पाँच मंज़िला ऐतिहासिक सोपान-कूप है। ज़िला और राष्ट्रीय पर्यटन स्रोत इसे 15वीं सदी के अंत की रचना बताते हैं और इसके नक्काशीदार स्तंभों, अष्टकोणीय खुले कुंड और जल तक उतरती सीढ़ियों को विशेष बताते हैं।',
      p2: 'वाव केवल पानी का स्रोत नहीं थी; यह व्यापारियों, तीर्थयात्रियों और स्थानीय लोगों के आराम और मेलजोल का स्थान भी था। नक्काशी में फूल-पत्तियाँ, ज्यामितीय पैटर्न, दिव्य आकृतियाँ और दैनिक जीवन के दृश्य मिलते हैं। अडालज स्टेपवेल आने वाले पास के ऐतिहासिक स्थल — गांधीनगर का अक्षरधाम और अडालज का त्रिमंदिर — भी आसानी से देख सकते हैं।',
      links: [
        { label: 'भारत सरकार पर्यटन पोर्टल', href: GOVT },
        { label: 'गांधीनगर ज़िला प्रशासन', href: DISTRICT },
        { label: 'गुजरात पर्यटन', href: GUJ_TOUR },
      ],
    },
    stories: { eyebrow: 'कथा और विरासत', title: 'रानी रुदाबाई की गाथा', p: 'सबसे लोकप्रिय कथा रानी रुदाबाई की है — वाव पूरी होने पर उन्होंने दिवंगत पति के लिए प्रार्थना की और कुएँ को समर्पित हो गईं; इसलिए वाव को प्रेम और भक्ति का स्मारक कहा जाता है। यह कथा पीढ़ियों से गुजराती लोकगीतों और कहानियों में जीवित है।' },
    architecture: { eyebrow: 'वास्तुकला', title: 'पाँच मंज़िल और अष्टकोणीय कुंड', p: 'वाव पाँच मंज़िल की है, जिसमें नीचे की ओर कमरे, छायादार दीर्घाएँ और जल तक उतरती सीढ़ियाँ हैं। इसके केंद्र में अष्टकोणीय खुला कुंड है। स्तंभ, मेहराब और छत की नक्काशी हिंदू, जैन और इस्लामी शैलियों का मिश्रण दिखाती है।' },
    climate: { eyebrow: 'जलवायु', title: 'गुजरात की गर्मी और मानसून', p: 'अडालज में ग्रीष्म (मार्च–जून) गर्म और शुष्क, मानसून (जून–सितंबर) नम, और शीतकाल (नवंबर–फरवरी) आरामदायक होता है। मुलाकात के लिए शीतकाल सर्वोत्तम माना जाता है।' },
    itineraries: { eyebrow: 'यात्रा योजना', title: 'किस प्रकार के आगंतुक के लिए', p: 'छोटी मुलाकात (६०–९० मिनट) के लिए मुख्य मंज़िलें और नक्काशी पर्याप्त हैं। फ़ोटोग्राफ़ी और ध्यान के लिए २ घंटे रखें। अक्षरधाम और त्रिमंदिर को मिलाकर आधा या पूरा दिन बिताया जा सकता है।' },
    visit: {
      eyebrow: 'भ्रमण की योजना', title: 'जाने से पहले जानना आवश्यक',
      cards: [
        { title: 'टिकट / ख़र्च', body: 'प्रवेश शुल्क और फ़ोटोग्राफ़ी नियम बदल सकते हैं। यात्रा से पहले ASI या स्थानीय आधिकारिक सूचना जाँच लें।' },
        { title: 'सर्वोत्तम समय', body: 'अक्टूबर–मार्च अधिक आरामदायक है। कोमल प्रकाश के लिए सुबह जल्दी या शाम से पहले आएँ।' },
        { title: 'सुझाया गया समय', body: 'सामान्य मुलाकात के लिए 60–90 मिनट; नक्काशी, फ़ोटोग्राफ़ी और हर मंज़िल को धीरे देखने हेतु 2 घंटे तक रखें।' },
        { title: 'पार्किंग', body: 'स्थल के आसपास सड़क आधारित पहुँच उपलब्ध है। पार्किंग व्यवस्था स्थल पर बदल सकती है; व्यस्त दिनों में जल्दी आना आसान रहता है।' },
        { title: 'पहनावा और सुरक्षा', body: 'पत्थर की सीढ़ियों के लिए अच्छी पकड़ वाले जूते पहनें। ऐतिहासिक नक्काशी को छूँ या खरोंचें नहीं और प्रतिबंधित क्षेत्रों के निर्देश मानें।' },
        { title: 'पता', body: 'अडालज रोड, अडालज, गुजरात 382421, भारत · प्लस कोड: 5H8J+P2' },
      ],
    },
    reach: {
      eyebrow: 'विस्तृत परिवहन', title: 'अहमदाबाद और गांधीनगर के बीच आसान सड़क पहुँच',
      blocks: [
        { h: 'हवाई मार्ग (एयरपोर्ट → वाव)', p: 'सबसे नज़दीकी बड़ा एयरपोर्ट सरदार वल्लभभाई पटेल अंतरराष्ट्रीय एयरपोर्ट (अहमदाबाद) है, जो अडालज से लगभग १८ किमी दूर है। एयरपोर्ट से प्रीपेड टैक्सी या ऐप-कैब लेकर SG हाइवे से अडालज पहुँचा जा सकता है; ट्रैफ़िक के अनुसार ४५–६० मिनट लगते हैं।' },
        { h: 'रेल + स्थानीय वाहन', p: 'गांधीनगर कैपिटल या अहमदाबाद जंक्शन उतरें। वहाँ से GSRTC बस, शेयर्ड ऑटो या कैब से अडालज पहुँचा जा सकता है। हम किसी विशेष ऑपरेटर की सिफ़ारिश नहीं करते — जाने से पहले ताज़ी स्थानीय समीक्षाएँ देखें।' },
        { h: 'सड़क / टैक्सी', p: 'अहमदाबाद या गांधीनगर से ऐप-कैब या टैक्सी लें और गंतव्य "Adalaj Stepwell, Adalaj" सेट करें। दूरी लगभग २०–३० किमी है।' },
      ],
      sourceNote: 'आधिकारिक जानकारी: भारत सरकार पर्यटन पोर्टल · गुजरात पर्यटन',
    },
    facilities: { eyebrow: 'सुविधाएँ', title: 'आसपास क्या उपलब्ध है', p: 'पार्किंग, शौचालय, शाकाहारी भोजन, किराना, ईंधन, फ़ार्मेसी और एटीएम पास में मिल सकते हैं। विशिष्ट व्यवस्था स्थल पर जाँच लें — हम किसी व्यावसायिक संस्था की सिफ़ारिश नहीं करते।' },
    etiquette: { eyebrow: 'शिष्टाचार', title: 'आगंतुकों के लिए सुझाव', p: 'एक पवित्र स्थल के रूप में विनम्र वेश रखें, अन्य आगंतुकों को रास्ता दें और अपना कचरा साथ ले जाएँ। नक्काशी को नुक़सान न पहुँचाएँ।' },
    nearby: {
      eyebrow: 'आसपास की योजना', title: 'अडालज के आसपास क्या करें',
      cards: [
        { title: 'आसपास का भोजन', body: 'अडालज–गांधीनगर मार्ग पर गुजराती थाली, फरसाण, चाय और शाकाहारी भोजन आसानी से मिलता है।' },
        { title: 'अक्षरधाम, गांधीनगर', body: 'गांधीनगर का प्रसिद्ध मंदिर परिसर। समय, बंद दिन और सुरक्षा नियमों के लिए आधिकारिक जानकारी जाँच लें।' },
        { title: 'त्रिमंदिर, अडालज', body: 'अडालज के पास का धार्मिक परिसर; गांधीनगर ज़िला पर्यटन पृष्ठ पर आसपास के रोचक स्थल के रूप में दिखाया गया है।' },
      ],
    },
    faq: {
      eyebrow: 'प्रश्नोत्तर', title: 'अक्सर पूछे जाने वाले प्रश्न',
      items: [
        { q: 'अडालज स्टेपवेल देखने के लिए कितना समय रखें?', a: 'अधिकांश आगंतुकों के लिए 60 से 90 मिनट पर्याप्त हैं। नक्काशी, प्रकाश और फ़ोटोग्राफ़ी के लिए अधिक समय रखें।' },
        { q: 'अडालज स्टेपवेल के लिए प्रवेश शुल्क है?', a: 'प्रवेश नीति बदल सकती है। यात्रा से पहले ASI या स्थानीय आधिकारिक स्रोत से वर्तमान शुल्क और नियम जाँच लें।' },
        { q: 'कौन सा समय सर्वोत्तम है?', a: 'अक्टूबर–मार्च का मौसम अधिक आरामदायक है। कोमल प्रकाश के लिए सुबह जल्दी या शाम से पहले आएँ।' },
        { q: 'अहमदाबाद से कैसे पहुँचें?', a: 'अडालज अहमदाबाद और गांधीनगर के बीच स्थित है। सड़क मार्ग से टैक्सी, कार या बस से पहुँचा जा सकता है; नज़दीकी प्रमुख रेल केंद्र अहमदाबाद और गांधीनगर हैं।' },
        { q: 'अडालज में कौन सी सुविधाएँ मिलती हैं?', a: 'पार्किंग, शौचालय, शाकाहारी भोजन, किराना, ईंधन, फ़ार्मेसी और एटीएम पास में मिल सकते हैं।' },
        { q: 'अहमदाबाद एयरपोर्ट से अडालज स्टेपवेल कैसे पहुँचें?', a: 'सबसे नज़दीकी बड़ा एयरपोर्ट सरदार वल्लभभाई पटेल अंतरराष्ट्रीय एयरपोर्ट (अहमदाबाद) है। वहाँ से टैक्सी या कैब से सड़क मार्ग से अडालज पहुँचा जा सकता है।' },
        { q: 'वर्ष में कौन सा समय सर्वोत्तम है?', a: 'नवंबर–फरवरी (शीतकाल) सबसे आरामदायक है। अप्रैल–मई की तीव्र गर्मी और जून–सितंबर के मानसून से बचें।' },
        { q: 'अडालज स्टेपवेल के पास पार्किंग है?', a: 'प्रवेश द्वार के पास सड़क किनारे या निर्धारित पार्किंग व्यवस्था हो सकती है। छुट्टियों और व्यस्त दिनों में जगह सीमित होती है — जल्दी आएँ।' },
      ],
    },
    sources: {
      eyebrow: 'स्रोत', title: 'आधिकारिक और सार्वजनिक स्रोत',
      items: [
        { label: 'भारत सरकार पर्यटन पोर्टल', href: GOVT },
        { label: 'गांधीनगर ज़िला प्रशासन', href: DISTRICT },
        { label: 'गुजरात पर्यटन', href: GUJ_TOUR },
      ],
    },
  },
};

export const subpages: Record<Locale, Record<SubSlug, SubPageDict>> = {
  gu: {
    timings: {
      eyebrow: 'મુલાકાત માહિતી', h1: 'અડાલજની વાવ: મુલાકાત સમય અને ઉપલબ્ધતા',
      intro: 'અડાલજની વાવ સામાન્ય રીતે સવારે ૮:૦૦ થી સાંજે ૬:૦૦ સુધી ખુલ્લી રહે છે. અહીં મુલાકાત સમય, શ્રેષ્ઠ કલાકો અને ઋતુ પ્રમાણે શું રાખવું તે આપેલ છે.',
      blocks: [
        { h: 'મુલાકાત સમય', p: 'સામાન્ય સમયપત્રક સવારે ૦૮:૦૦ થી સાંજે ૧૮:૦૦ છે. અधિકૃત સમય ઋતુ અને તહેવાર પ્રમાણે બદલાઈ શકે; મુસાફરી પહેલાં ASI અથવા સ્થાનિક સત્તાવાર સૂચના ચકાસો.' },
        { h: 'શ્રેષ્ઠ કલાકો', p: 'વહેલી સવાર (૦૮:૦૦–૧૦:૦૦) અને સાંજ (૧૬:૩૦–૧૮:૦૦) પ્રકાશ અને ગરમી માટે આરામદાયક છે. બપોરના તાપથી ટાળો.' },
        { h: 'બંધ દિવસ', p: 'કોઈ નિયત સાપ્તાહિક બંધ દિવસ નોંધાયેલ નથી, પણ તહેવારો અથવા જાળવણીના કારણે સમય બદલાઈ શકે. સ્થાનિક સૂચના ચકાસો.' },
      ],
      faq: [
        { q: 'અડાલજની વાવ કયા સમયે ખુલે છે?', a: 'સામાન્ય રીતે સવારે ૦૮:૦૦ થી સાંજે ૧૮:૦૦ સુધી. અधिकૃત સમય માટે ASI સૂચના ચકાસો.' },
        { q: 'સોમવારે બંધ રહે છે?', a: 'કોઈ નિયત સાપ્તાહિક બંધ દિવસ નોંધાયેલ નથી; છતાં મુસાફરી પહેલાં સ્થાનિક સત્તાવાર સૂચના ચકાસવી હિતાવહ છે.' },
      ],
      related: [
        { label: 'પ્રવેશ ફી', href: '/entry-fee' },
        { label: 'પહોંચ', href: '/transport' },
        { label: 'ઇતિહાસ', href: '/history' },
      ],
    },
    'entry-fee': {
      eyebrow: 'મુલાકાત માહિતી', h1: 'અડાલજની વાવ: પ્રવેશ ફી અને ટિકિટ',
      intro: 'અડાલજની વાવ એ ASI (Archaeological Survey of India) સંરક્ષિત સ્મારક છે. પ્રવેશ ફી અને ફોટોગ્રાફી નિયમો સમય સાથે બદલાઈ શકે છે.',
      blocks: [
        { h: 'પ્રવેશ ફી', p: 'પ્રવેશ ફી અને ભારતીય/વિદેશી મુલાકાતી માટે અલગ ધોરણ હોઈ શકે. હાલની ફી ASI અથવા સ્થાનિક સત્તાવાર સૂચના પરથી ચકાસો.' },
        { h: 'ફોટોગ્રાફી', p: 'વ્યક્તિગત ફોટોગ્રાફી સામાન્ય રીતે મંજૂર છે, પણ ટ્રાઇપોડ અથવા વ્યાવસાયિક શૂટિંગ માટે નિયમો અલગ હોઈ શકે. સ્થળ પર ચકાસો.' },
        { h: 'માર્ગદર્શક / પરિવહન', p: 'માર્ગદર્શક અને પરિવહનનો ખર્ચ અલગ હોઈ શકે. અમે કોઈ ચોક્કસ ઓપરેટરની ભલામણ કરતા નથી.' },
      ],
      faq: [
        { q: 'અડાલજની વાવની પ્રવેશ ફી શું છે?', a: 'ફી સમય સાથે બદલાઈ શકે છે; મુસાફરી પહેલાં ASI અથવા સ્થાનિક સત્તાવાર સૂચના ચકાસો.' },
        { q: 'ફોટોગ્રાફી માટે અલગ ચાર્જ છે?', a: 'વ્યક્તિગત ફોટોગ્રાફી સામાન્ય રીતે મંજૂર છે; વ્યાવસાયિક શૂટિંગ માટે સ્થાનિક નિયમ ચકાસો.' },
      ],
      related: [
        { label: 'મુલાકાત સમય', href: '/timings' },
        { label: 'પહોંચ', href: '/transport' },
        { label: 'ઇતિહાસ', href: '/history' },
      ],
    },
    transport: {
      eyebrow: 'પરિવહન', h1: 'અડાલજની વાવ: કેવી રીતે પહોંચવું',
      intro: 'અડાલજ અમદાવાદ અને ગાંધીનગર વચ્ચે આવેલું છે. અહીં એરપોર્ટ, રેલ, રોડ અને સ્થાનિક વાહન દ્વારા પહોંચવાની રીતો આપેલ છે.',
      blocks: [
        { h: 'એરપોર્ટથી', p: 'સૌથી નજીકનું મોટું એરપોર્ટ સરદાર વલ્લભભાઈ પટેલ ઇન્ટરનેશનલ એરપોર્ટ (અમદાવાદ), લગભગ ૧૮ કિ.મી. દૂર. ટેક્સી/કેબ દ્વારા ૪૫–૬૦ મિનિટ.' },
        { h: 'રેલવેથી', p: 'અમદાવાદ જંક્શન અથવા ગાંધીનગર કેપિટલ ઉતરો; ત્યાંથી GSRTC બસ/કેબ દ્વારા અડાલજ.' },
        { h: 'રોડ/કેબ', p: 'અમદાવાદ અથવા ગાંધીનગરથી એપ-કેબ લઈ ગંતવ્ય "Adalaj Stepwell, Adalaj" સેટ કરો. અંતર ૨૦–૩૦ કિ.મી.' },
      ],
      faq: [
        { q: 'અમદાવાદથી અડાલજની વાવ કેટલા કિ.મી. છે?', a: 'અમદાવાદ શહેરથી લગભગ ૨૦–૩૦ કિ.મી. અને એરપોર્ટથી લગભગ ૧૮ કિ.મી.' },
        { q: 'સૌથી નજીકનું રેલવે સ્ટેશન કયું છે?', a: 'અમદાવાદ જંક્શન અથવા ગાંધીનગર કેપિટલ. ત્યાંથી સ્થાનિક વાહન દ્વારા અડાલજ પહોંચી શકાય છે.' },
      ],
      related: [
        { label: 'મુલાકાત સમય', href: '/timings' },
        { label: 'પ્રવેશ ફી', href: '/entry-fee' },
        { label: 'ઇતિહાસ', href: '/history' },
      ],
    },
    history: {
      eyebrow: 'ઇતિહાસ', h1: 'અડાલજની વાવ: ઇતિહાસ અને દંતકથા',
      intro: 'અડાલજની વાવ 15મી સદીના અંતની રચના છે. અહીં તેનો ઇતિહાસ, વાસ્તુકલા અને રાણી રુદાબાઈની દંતકથા આપેલ છે.',
      blocks: [
        { h: 'નિર્માણ', p: 'વાવ રાણી રુદાબાઈએ 15મી સદીના અંતમાં બંધાવી હતી. જિલ્લા અને રાષ્ટ્રીય પ્રવાસન સ્ત્રોતો તેને સોલંકી-શૈલી પછીની રચના તરીકે દર્શાવે છે.' },
        { h: 'વાસ્તુકલા', p: 'પાંચ માળ, અષ્ટકોણીય ખુલ્લું કુંડ, અને હિંદુ–જૈન–ઇસ્લામિક નક્કાશી — પાણી સુધી ઉતરતી સીડીઓ સાથે.' },
        { h: 'દંતકથા', p: 'રાણી રુદાબાઈએ દિવંગત પતિ માટે પ્રાર્થના કરી અને વાવને સમર્પિત કરી; આથી તે પ્રેમ અને પ્રતિભાવનું સ્મારક કહેવાય છે.' },
      ],
      faq: [
        { q: 'અડાલજની વાવ ક્યારે બની?', a: '15મી સદીના અંતમાં, રાણી રુદાબાઈ દ્વારા.' },
        { q: 'અડાલજની વાવનું બીજું નામ શું છે?', a: 'તેને રુદાબાઈની વાવ, Rudabai Stepwell અને Adalaj ni Vav તરીકે પણ ઓળખવામાં આવે છે.' },
      ],
      related: [
        { label: 'મુલાકાત સમય', href: '/timings' },
        { label: 'પ્રવેશ ફી', href: '/entry-fee' },
        { label: 'પહોંચ', href: '/transport' },
      ],
    },
  },
  en: {
    timings: {
      eyebrow: 'Visit info', h1: 'Adalaj Stepwell: visiting hours & availability',
      intro: 'Adalaj Stepwell is generally open from 8:00 am to 6:00 pm. Here are the visiting hours, best times and what to expect by season.',
      blocks: [
        { h: 'Opening hours', p: 'The usual schedule is 08:00–18:00. Official hours may change by season and festival; verify current ASI or local official notice before travel.' },
        { h: 'Best hours', p: 'Early morning (08:00–10:00) and late afternoon (16:30–18:00) are comfortable for light and heat. Avoid the midday sun.' },
        { h: 'Closed days', p: 'No fixed weekly closed day is recorded, but hours may shift for festivals or maintenance. Check local notice.' },
      ],
      faq: [
        { q: 'What time does Adalaj Stepwell open?', a: 'Usually 08:00–18:00. Verify official hours with ASI notice.' },
        { q: 'Is it closed on Monday?', a: 'No fixed weekly closed day is recorded; still check local official notice before travel.' },
      ],
      related: [
        { label: 'Entry fee', href: '/en/entry-fee' },
        { label: 'Getting there', href: '/en/transport' },
        { label: 'History', href: '/en/history' },
      ],
    },
    'entry-fee': {
      eyebrow: 'Visit info', h1: 'Adalaj Stepwell: entry fee & tickets',
      intro: 'Adalaj Stepwell is an ASI (Archaeological Survey of India) protected monument. Entry fees and photography rules can change over time.',
      blocks: [
        { h: 'Entry fee', p: 'There may be separate rates for Indian and foreign visitors. Check the current fee via ASI or the local official notice.' },
        { h: 'Photography', p: 'Personal photography is generally allowed, but tripod or commercial shoots may have different rules. Check on site.' },
        { h: 'Guide / transport', p: 'Guide and transport costs are separate. We do not recommend a specific operator.' },
      ],
      faq: [
        { q: 'What is the entry fee for Adalaj Stepwell?', a: 'Fees can change over time; verify current fee and rules from ASI or the local official source before travel.' },
        { q: 'Is there a separate charge for photography?', a: 'Personal photography is generally allowed; check local rules for commercial shoots.' },
      ],
      related: [
        { label: 'Visiting hours', href: '/en/timings' },
        { label: 'Getting there', href: '/en/transport' },
        { label: 'History', href: '/en/history' },
      ],
    },
    transport: {
      eyebrow: 'Transport', h1: 'Adalaj Stepwell: how to get there',
      intro: 'Adalaj lies between Ahmedabad and Gandhinagar. Here are ways to reach it by air, rail, road and local transport.',
      blocks: [
        { h: 'From airport', p: 'Nearest major airport is Sardar Vallabhbhai Patel International Airport (Ahmedabad), about 18 km away. 45–60 min by taxi/cab.' },
        { h: 'By rail', p: 'Alight at Ahmedabad Junction or Gandhinagar Capital; from there reach Adalaj by GSRTC bus/cab.' },
        { h: 'Road / cab', p: 'Take an app cab from Ahmedabad or Gandhinagar and set destination "Adalaj Stepwell, Adalaj". Distance 20–30 km.' },
      ],
      faq: [
        { q: 'How many km from Ahmedabad to Adalaj Stepwell?', a: 'About 20–30 km from Ahmedabad city and about 18 km from the airport.' },
        { q: 'Which is the nearest railway station?', a: 'Ahmedabad Junction or Gandhinagar Capital. From there reach Adalaj by local transport.' },
      ],
      related: [
        { label: 'Visiting hours', href: '/en/timings' },
        { label: 'Entry fee', href: '/en/entry-fee' },
        { label: 'History', href: '/en/history' },
      ],
    },
    history: {
      eyebrow: 'History', h1: 'Adalaj Stepwell: history & legend',
      intro: 'Adalaj Stepwell is a late-15th-century construction. Here is its history, architecture and the legend of Queen Rudabai.',
      blocks: [
        { h: 'Construction', p: 'The stepwell was built by Queen Rudabai in the late 15th century. District and national tourism sources describe it as a post-Solanki construction.' },
        { h: 'Architecture', p: 'Five storeys, an octagonal open kund, and Hindu–Jain–Islamic carving — with steps descending to the water.' },
        { h: 'Legend', p: 'Queen Rudabai prayed for her late husband and dedicated the stepwell; hence it is called a monument of love and devotion.' },
      ],
      faq: [
        { q: 'When was Adalaj Stepwell built?', a: 'In the late 15th century, by Queen Rudabai.' },
        { q: 'What is Adalaj Stepwell also called?', a: 'It is also known as Rudabai ni Vav, Rudabai Stepwell and Adalaj ni Vav.' },
      ],
      related: [
        { label: 'Visiting hours', href: '/en/timings' },
        { label: 'Entry fee', href: '/en/entry-fee' },
        { label: 'Getting there', href: '/en/transport' },
      ],
    },
  },
  hi: {
    timings: {
      eyebrow: 'भ्रमण जानकारी', h1: 'अडालज स्टेपवेल: मुलाकात समय और उपलब्धता',
      intro: 'अडालज स्टेपवेल आमतौर पर सुबह ८:०० से शाम ६:०० तक खुला रहता है। यहाँ मुलाकात समय, सर्वोत्तम घंटे और ऋतु के अनुसार क्या रखना है दिया गया है।',
      blocks: [
        { h: 'मुलाकात समय', p: 'सामान्य अनुसूची ०८:००–१८:०० है। आधिकारिक समय ऋतु और त्योहार के अनुसार बदल सकता है; यात्रा से पहले ASI या स्थानीय आधिकारिक सूचना जाँच लें।' },
        { h: 'सर्वोत्तम घंटे', p: 'सुबह जल्दी (०८:००–१०:००) और शाम (१६:३०–१८:००) प्रकाश और गर्मी के लिहाज़ से आरामदायक हैं। दोपहर की धूप से बचें।' },
        { h: 'बंद दिन', p: 'कोई निश्चित साप्ताहिक बंद दिन दर्ज नहीं है, पर त्योहार या रखरखाव के कारण समय बदल सकता है। स्थानीय सूचना देखें।' },
      ],
      faq: [
        { q: 'अडालज स्टेपवेल किस समय खुलता है?', a: 'आमतौर पर सुबह ०८:०० से शाम १८:०० तक। आधिकारिक समय के लिए ASI सूचना देखें।' },
        { q: 'क्या यह सोमवार को बंद रहता है?', a: 'कोई निश्चित साप्ताहिक बंद दिन दर्ज नहीं है; फिर भी यात्रा से पहले स्थानीय आधिकारिक सूचना जाँचना हितावह है।' },
      ],
      related: [
        { label: 'प्रवेश शुल्क', href: '/hi/entry-fee' },
        { label: 'पहुँच', href: '/hi/transport' },
        { label: 'इतिहास', href: '/hi/history' },
      ],
    },
    'entry-fee': {
      eyebrow: 'भ्रमण जानकारी', h1: 'अडालज स्टेपवेल: प्रवेश शुल्क और टिकट',
      intro: 'अडालज स्टेपवेल ASI (Archaeological Survey of India) संरक्षित स्मारक है। प्रवेश शुल्क और फ़ोटोग्राफ़ी नियम समय के साथ बदल सकते हैं।',
      blocks: [
        { h: 'प्रवेश शुल्क', p: 'भारतीय और विदेशी आगंतुकों के लिए अलग दरें हो सकती हैं। वर्तमान शुल्क ASI या स्थानीय आधिकारिक सूचना से जाँच लें।' },
        { h: 'फ़ोटोग्राफ़ी', p: 'व्यक्तिगत फ़ोटोग्राफ़ी आमतौर पर अनुमत है, पर ट्राइपोड या व्यावसायिक शूटिंग के अलग नियम हो सकते हैं। स्थल पर जाँच लें।' },
        { h: 'गाइड / परिवहन', p: 'गाइड और परिवहन का ख़र्च अलग होता है। हम किसी विशेष ऑपरेटर की सिफ़ारिश नहीं करते।' },
      ],
      faq: [
        { q: 'अडालज स्टेपवेल का प्रवेश शुल्क क्या है?', a: 'शुल्क समय के साथ बदल सकता है; यात्रा से पहले ASI या स्थानीय आधिकारिक स्रोत से वर्तमान शुल्क और नियम जाँच लें।' },
        { q: 'क्या फ़ोटोग्राफ़ी के लिए अलग शुल्क है?', a: 'व्यक्तिगत फ़ोटोग्राफ़ी आमतौर पर अनुमत है; व्यावसायिक शूटिंग के लिए स्थानीय नियम देखें।' },
      ],
      related: [
        { label: 'मुलाकात समय', href: '/hi/timings' },
        { label: 'पहुँच', href: '/hi/transport' },
        { label: 'इतिहास', href: '/hi/history' },
      ],
    },
    transport: {
      eyebrow: 'परिवहन', h1: 'अडालज स्टेपवेल: वहाँ कैसे पहुँचें',
      intro: 'अडालज अहमदाबाद और गांधीनगर के बीच स्थित है। यहाँ हवाई, रेल, सड़क और स्थानीय वाहन से पहुँचने के तरीके दिए गए हैं।',
      blocks: [
        { h: 'एयरपोर्ट से', p: 'सबसे नज़दीकी बड़ा एयरपोर्ट सरदार वल्लभभाई पटेल अंतरराष्ट्रीय एयरपोर्ट (अहमदाबाद), लगभग १८ किमी दूर। टैक्सी/कैब से ४५–६० मिनट।' },
        { h: 'रेलवे से', p: 'अहमदाबाद जंक्शन या गांधीनगर कैपिटल उतरें; वहाँ से GSRTC बस/कैब से अडालज।' },
        { h: 'सड़क / कैब', p: 'अहमदाबाद या गांधीनगर से ऐप-कैब लें और गंतव्य "Adalaj Stepwell, Adalaj" सेट करें। दूरी २०–३० किमी।' },
      ],
      faq: [
        { q: 'अहमदाबाद से अडालज स्टेपवेल कितने किमी है?', a: 'अहमदाबाद शहर से लगभग २०–३० किमी और एयरपोर्ट से लगभग १८ किमी।' },
        { q: 'सबसे नज़दीकी रेलवे स्टेशन कौन सा है?', a: 'अहमदाबाद जंक्शन या गांधीनगर कैपिटल। वहाँ से स्थानीय वाहन से अडालज पहुँचा जा सकता है।' },
      ],
      related: [
        { label: 'मुलाकात समय', href: '/hi/timings' },
        { label: 'प्रवेश शुल्क', href: '/hi/entry-fee' },
        { label: 'इतिहास', href: '/hi/history' },
      ],
    },
    history: {
      eyebrow: 'इतिहास', h1: 'अडालज स्टेपवेल: इतिहास और कथा',
      intro: 'अडालज स्टेपवेल 15वीं सदी के अंत की रचना है। यहाँ इसका इतिहास, वास्तुकला और रानी रुदाबाई की कथा दी गई है।',
      blocks: [
        { h: 'निर्माण', p: 'वाव का निर्माण रानी रुदाबाई ने 15वीं सदी के अंत में करवाया था। ज़िला और राष्ट्रीय पर्यटन स्रोत इसे सोलंकी-शैली के बाद की रचना बताते हैं।' },
        { h: 'वास्तुकला', p: 'पाँच मंज़िल, अष्टकोणीय खुला कुंड, और हिंदू–जैन–इस्लामी नक्काशी — जल तक उतरती सीढ़ियों के साथ।' },
        { h: 'कथा', p: 'रानी रुदाबाई ने दिवंगत पति के लिए प्रार्थना की और वाव को समर्पित किया; इसलिए यह प्रेम और भक्ति का स्मारक कहलाता है।' },
      ],
      faq: [
        { q: 'अडालज स्टेपवेल कब बना?', a: '15वीं सदी के अंत में, रानी रुदाबाई द्वारा।' },
        { q: 'अडालज स्टेपवेल किस और नाम से जाना जाता है?', a: 'इसे रुदाबाई नी वाव, Rudabai Stepwell और Adalaj ni Vav के नाम से भी जाना जाता है।' },
      ],
      related: [
        { label: 'मुलाकात समय', href: '/hi/timings' },
        { label: 'प्रवेश शुल्क', href: '/hi/entry-fee' },
        { label: 'पहुँच', href: '/hi/transport' },
      ],
    },
  },
};

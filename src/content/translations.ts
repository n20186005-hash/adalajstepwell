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


export const ui: Record<Locale, UiDict> = {
  "gu": {
    "nav": [
      {
        "id": "history",
        "label": "ઇતિહાસ"
      },
      {
        "id": "stories",
        "label": "ગાથાઓ"
      },
      {
        "id": "architecture",
        "label": "સ્થાપત્ય"
      },
      {
        "id": "climate",
        "label": "આબોહવા"
      },
      {
        "id": "itineraries",
        "label": "માર્ગ"
      },
      {
        "id": "visit",
        "label": "મુલાકાત"
      },
      {
        "id": "weather",
        "label": "હવામાન"
      },
      {
        "id": "season",
        "label": "ઋતુ"
      },
      {
        "id": "reach",
        "label": "પ્રવાસ"
      },
      {
        "id": "facilities",
        "label": "સુવિધાઓ"
      },
      {
        "id": "nearby",
        "label": "આસપાસ"
      },
      {
        "id": "faq",
        "label": "પ્રશ્નોત્તરી"
      },
      {
        "id": "sources",
        "label": "સ્ત્રોતો"
      }
    ],
    "langSwitchLabel": "ભાષા",
    "footer": {
      "project": "સ્વતંત્ર મુલાકાતી માર્ગદર્શિકા; સ્મારક સંચાલક, ASI કે સત્તાવાર સરકારી વેબસાઇટ નથી.",
      "sources": "સ્ત્રોત: ગુજરાત પ્રવાસન, Incredible India અને ASI ટિકિટ પોર્ટલ. તારીખવાળી Maps માહિતી અલગ ઓળખાવેલી છે.",
      "photo": "ફોટોગ્રાફ: લેખક અને લાઇસન્સ નીચેની ફોટો ક્રેડિટમાં.",
      "copyright": "© 2026 અડાલજની વાવ પ્રવાસ માર્ગદર્શિકા. સર્વ હક્ક સુરક્ષિત."
    },
    "footerNav": {
      "privacy": "ગોપનીયતા નીતિ",
      "terms": "સેવાની શરતો",
      "cookies": "કૂકી સેટિંગ્સ"
    },
    "relatedLabel": "સંબંધિત પાનાં",
    "weather": {
      "heading": "હવામાન",
      "current": "વર્તમાન",
      "temp": "તાપમાન",
      "feels": "અનુભવ",
      "wind": "પવન",
      "precip": "વરસાદ શક્યતા",
      "uv": "યુવી",
      "sevenDay": "૭ દિવસ",
      "noData": "હવામાન માહિતી અત્યારે ઉપલબ્ધ નથી.",
      "adviceHeading": "મુલાકાત સૂચન"
    }
  },
  "en": {
    "nav": [
      {
        "id": "history",
        "label": "History"
      },
      {
        "id": "stories",
        "label": "Stories"
      },
      {
        "id": "architecture",
        "label": "Architecture"
      },
      {
        "id": "climate",
        "label": "Climate"
      },
      {
        "id": "itineraries",
        "label": "Itineraries"
      },
      {
        "id": "visit",
        "label": "Visit"
      },
      {
        "id": "weather",
        "label": "Weather"
      },
      {
        "id": "season",
        "label": "Seasons"
      },
      {
        "id": "reach",
        "label": "Getting there"
      },
      {
        "id": "facilities",
        "label": "Facilities"
      },
      {
        "id": "nearby",
        "label": "Nearby"
      },
      {
        "id": "faq",
        "label": "FAQ"
      },
      {
        "id": "sources",
        "label": "Sources"
      }
    ],
    "langSwitchLabel": "Language",
    "footer": {
      "project": "Independent visitor guide; not the monument operator, ASI or an official government website.",
      "sources": "Sources: Gujarat Tourism, Incredible India and the ASI ticket portal. Dated Maps information is identified separately.",
      "photo": "Photographs: authors and licences are linked in the photo credits.",
      "copyright": "© 2026 Adalaj Stepwell Travel Guide. All rights reserved."
    },
    "footerNav": {
      "privacy": "Privacy Policy",
      "terms": "Terms of Service",
      "cookies": "Cookie Settings"
    },
    "relatedLabel": "Related pages",
    "weather": {
      "heading": "Weather",
      "current": "Now",
      "temp": "Temp",
      "feels": "Feels like",
      "wind": "Wind",
      "precip": "Rain chance",
      "uv": "UV",
      "sevenDay": "7-day",
      "noData": "Weather information is not available right now.",
      "adviceHeading": "Visitor advice"
    }
  },
  "hi": {
    "nav": [
      {
        "id": "history",
        "label": "इतिहास"
      },
      {
        "id": "stories",
        "label": "कथाएँ"
      },
      {
        "id": "architecture",
        "label": "वास्तुकला"
      },
      {
        "id": "climate",
        "label": "जलवायु"
      },
      {
        "id": "itineraries",
        "label": "यात्रा योजना"
      },
      {
        "id": "visit",
        "label": "भ्रमण"
      },
      {
        "id": "weather",
        "label": "मौसम"
      },
      {
        "id": "season",
        "label": "ऋतु"
      },
      {
        "id": "reach",
        "label": "पहुँच"
      },
      {
        "id": "facilities",
        "label": "सुविधाएँ"
      },
      {
        "id": "nearby",
        "label": "आसपास"
      },
      {
        "id": "faq",
        "label": "प्रश्नोत्तर"
      },
      {
        "id": "sources",
        "label": "स्रोत"
      }
    ],
    "langSwitchLabel": "भाषा",
    "footer": {
      "project": "स्वतंत्र आगंतुक गाइड; स्मारक संचालक, ASI या आधिकारिक सरकारी वेबसाइट नहीं।",
      "sources": "स्रोत: गुजरात पर्यटन, Incredible India और ASI टिकट पोर्टल। तारीख वाली Maps जानकारी अलग पहचानी गई है।",
      "photo": "फ़ोटोग्राफ़: लेखक और लाइसेंस नीचे फ़ोटो क्रेडिट में।",
      "copyright": "© 2026 अडालज स्टेपवेल यात्रा गाइड. सर्वाधिकार सुरक्षित."
    },
    "footerNav": {
      "privacy": "गोपनीयता नीति",
      "terms": "सेवा की शर्तें",
      "cookies": "कुकी सेटिंग्स"
    },
    "relatedLabel": "संबंधित पृष्ठ",
    "weather": {
      "heading": "मौसम",
      "current": "अभी",
      "temp": "तापमान",
      "feels": "अनुभव",
      "wind": "हवा",
      "precip": "बारिश संभावना",
      "uv": "यूवी",
      "sevenDay": "७ दिन",
      "noData": "मौसम की जानकारी अभी उपलब्ध नहीं है.",
      "adviceHeading": "यात्रा सुझाव"
    }
  }
};

export const home: Record<Locale, HomeDict> = {
  "gu": {
    "heroEyebrow": "અડાલજ · ગાંધીનગર જિલ્લો · ગુજરાત · ભારત",
    "h1": "અડાલજની વાવ (અડાલજ, ગુજરાત)",
    "heroLead": "અડાલજની વાવ (Adalaj ni Vav અથવા રૂડાબાઈની વાવ) ગુજરાતના ગાંધીનગર જિલ્લામાં અડાલજ ખાતે આવેલી પાંચ માળની ઐતિહાસિક વાવ છે. આ સ્વતંત્ર માર્ગદર્શિકામાં સ્થળ, મુલાકાતનો સમય, ASI ટિકિટ અને અમદાવાદથી પહોંચવાની માહિતી મેળવો.",
    "facts": [
      {
        "value": "15મી સદી",
        "label": "રુદાબાઈની વાવ"
      },
      {
        "value": "5 સ્તર",
        "label": "ભૂગર્ભ ગલારીઓ"
      },
      {
        "value": "08:00–18:00",
        "label": "Maps સંદર્ભ · 23 ઑક્ટો 2026"
      },
      {
        "value": "4.5 ★",
        "label": "31,310 Google Maps સમીક્ષાઓ · 23 ઑક્ટો 2026"
      }
    ],
    "history": {
      "eyebrow": "સ્થાપત્ય અને વારસો",
      "title": "પ્રકાશ, છાંયો અને પથ્થરનું ઊભું શહેર",
      "p1": "ગુજરાત પ્રવાસન આ વાવને 15મી સદીની, પાંચ માળ અને ભારતીય-ઇસ્લામી સ્થાપત્ય ધરાવતી રચના કહે છે. Incredible India બાંધકામની શરૂઆત 1498માં દર્શાવે છે અને તેને રાણી રૂડાબાઈ સાથે જોડે છે.",
      "p2": "ભૂગર્ભ ગેલેરીઓ પાણીની વ્યવસ્થા ઉપરાંત લોકોના મળવાના સ્થળની ભૂમિકા સમજાવે છે. કોતરેલા થાંભલા અને ઉપરનું ખુલ્લું સ્થાન જુઓ; તે દિવસે મંજૂર માર્ગ પર જ ચાલો.",
      "links": [
        {
          "label": "Gujarat Tourism · Adalaj ni Vav",
          "href": "https://gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html"
        },
        {
          "label": "Incredible India · Adalaj Stepwell",
          "href": "https://www.incredibleindia.gov.in/en/gujarat/gandhinagar/adalaj-stepwell"
        }
      ]
    },
    "stories": {
      "eyebrow": "દંતકથા અને વારસો",
      "title": "રાણી રુદાબાઈની ગાથા",
      "p": "Incredible India રાણી રૂડાબાઈ અને સુલતાન મહમૂદ બેગડાની વાતને દંતકથા તરીકે રજૂ કરે છે. અહીં તે ગાથાને દેખાતી ઇમારત અને 15મી સદીના ઐતિહાસિક સંદર્ભથી અલગ રાખવામાં આવી છે."
    },
    "architecture": {
      "eyebrow": "સ્થાપત્ય",
      "title": "પાંચ માળ અને અષ્ટકોણીય કુંડ",
      "p": "ગુજરાત પ્રવાસન ત્રણ પ્રવેશ, અષ્ટકોણીય ખુલ્લું સ્થાન અને પાંચ માળને ટેકો આપતા કોતરેલા થાંભલા વર્ણવે છે. સ્થાનિક અને ઇસ્લામી શૈલીનું સંમિશ્રણ જોવા મળે છે. પાંચ માળ હોવાનો અર્થ બધા માળ મુલાકાત માટે ખુલ્લા છે એવો નથી."
    },
    "climate": {
      "eyebrow": "આબોહવા",
      "title": "ગુજરાતની કઠોળ અને ચોમાસુ",
      "p": "Incredible India ઑક્ટોબરથી માર્ચની મુલાકાત સૂચવે છે. નીકળતા પહેલાં વાસ્તવિક હવામાન જુઓ; વાવની છાંય ગરમી કે વરસાદથી રક્ષણની ખાતરી આપતી નથી."
    },
    "itineraries": {
      "eyebrow": "માર્ગ",
      "title": "કયા પ્રકારના મુલાકાતી માટે",
      "p": "પગથિયાં અને કોતરણી તમારા અનુકૂળ ગતિએ જોવા સમય રાખો. ગુજરાત પ્રવાસન દર્શાવતાં નજીકનાં સ્થળોમાં ગાંધીનગરનું અક્ષરધામ અને અડાલજનું ત્રિમંદિર છે. દરેકના સમય અને પ્રવેશ નિયમ અલગ તપાસો; આ સંયુક્ત ટિકિટ નથી."
    },
    "visit": {
      "eyebrow": "મુલાકાતની યોજના",
      "title": "જતાં પહેલાં જાણવું જરૂરી",
      "cards": [
        {
          "title": "ટિકિટ / ખર્ચ",
          "body": "ASI ટિકિટ પોર્ટલમાં અડાલજ/રૂડાબાઈનું સ્મારક અને મુલાકાતની તારીખ પસંદ કરો. ASI ફીમાં ભારતીય, SAARC/BIMSTEC અને અન્ય વિદેશી પ્રવાસીઓ વચ્ચે તફાવત હોઈ શકે છે; લાગુ રાષ્ટ્રીયતા, ઉંમરની છૂટ અને ઇલેક્ટ્રોનિક કે કાઉન્ટર ચુકવણીની શરતો તપાસો. આ માર્ગદર્શિકાએ અડાલજનો હાલનો રૂપિયામાં ચોક્કસ દર સ્વતંત્ર રીતે પુષ્ટિ કર્યો નથી."
        },
        {
          "title": "શ્રેષ્ઠ સમય",
          "body": "Incredible India ઑક્ટોબરથી માર્ચની મુલાકાત સૂચવે છે. નીકળતા પહેલાં વાસ્તવિક હવામાન જુઓ; વાવની છાંય ગરમી કે વરસાદથી રક્ષણની ખાતરી આપતી નથી."
        },
        {
          "title": "સૂચિત સમય",
          "body": "પગથિયાં અને કોતરણી તમારા અનુકૂળ ગતિએ જોવા સમય રાખો. ગુજરાત પ્રવાસન દર્શાવતાં નજીકનાં સ્થળોમાં ગાંધીનગરનું અક્ષરધામ અને અડાલજનું ત્રિમંદિર છે. દરેકના સમય અને પ્રવેશ નિયમ અલગ તપાસો; આ સંયુક્ત ટિકિટ નથી."
        },
        {
          "title": "નીકળતા પહેલાં",
          "body": "પાર્કિંગ, શૌચાલય, પીવાનું પાણી અને પગથિયાં વિનાના પ્રવેશની સીધી તપાસ કરો, ખાસ કરીને તે જરૂરી હોય ત્યારે. ઐતિહાસિક પગથિયાંથી મુશ્કેલી થઈ શકે છે; આ માર્ગદર્શિકા વ્હીલચેર પ્રવેશ કે કોઈ ચોક્કસ સુવિધાની ખાતરી આપતી નથી."
        },
        {
          "title": "પહેરવેશ અને સલામતી",
          "body": "સારી પકડવાળાં પગરખાં પહેરો, પાણી લો અને મંજૂર પગથિયાં વાપરો. કોતરણી પર ચઢશો નહીં કે અવરોધ પાર કરશો નહીં. ભારે વરસાદ કે વીજળીમાં સલામત આશ્રય અને કર્મચારીઓની સૂચના અનુસરો; અનુમાન પરથી પ્રવેશ ખુલ્લો છે એવું ન માનો."
        },
        {
          "title": "સરનામું",
          "body": "Adalaj Rd, અડાલજ, ગુજરાત 382421, ભારત. નકશાનો પિન 23.1668106, 72.5800895 છે; પહોંચીને મુલાકાતીઓનો પ્રવેશ ચકાસો."
        }
      ]
    },
    "reach": {
      "eyebrow": "વિગતવાર પરિવહન",
      "title": "અમદાવાદ અને ગાંધીનગર વચ્ચે સરળ રોડ પહોંચ",
      "blocks": [
        {
          "h": "હવાઈમથકથી જોડાણ",
          "p": "ગુજરાત પ્રવાસન અમદાવાદના સરદાર વલ્લભભાઈ પટેલ આંતરરાષ્ટ્રીય હવાઈમથકનો ઉલ્લેખ કરે છે. ત્યાંથી અડાલજનો હાલનો માર્ગ તપાસો; મુસાફરીનો સમય નિશ્ચિત નથી."
        },
        {
          "h": "રેલ જોડાણ",
          "p": "અમદાવાદ અને ગાંધીનગર વિસ્તારનાં રેલ જોડાણો છે. બુકિંગ પહેલાં વાસ્તવિક સ્ટેશન, ટ્રેન અને આગળનો માર્ગ તપાસો; દરેક સ્ટેશનથી સીધી બસ હશે એવું ન માનો."
        },
        {
          "h": "સ્થળ અને રોડ માર્ગ",
          "p": "ગંતવ્યમાં Adalaj Stepwell/Rudabai Stepwell, Adalaj પસંદ કરો. અંતર શરૂઆતના સ્થળ પ્રમાણે બદલાય છે. ઉતરવાનું સ્થાન અને પરતની મુસાફરી તપાસો; અહીં અચકાસેલા બસ નંબર કે નિશ્ચિત ટેક્સી ભાડાં આપ્યાં નથી."
        }
      ],
      "sourceNote": "Google Mapsમાં સ્થળ જુઓ (તૃતીય પક્ષ)"
    },
    "facilities": {
      "eyebrow": "સુવિધાઓ",
      "title": "આસપાસ શું મળે છે",
      "p": "પાર્કિંગ, શૌચાલય, પીવાનું પાણી અને પગથિયાં વિનાના પ્રવેશની સીધી તપાસ કરો, ખાસ કરીને તે જરૂરી હોય ત્યારે. ઐતિહાસિક પગથિયાંથી મુશ્કેલી થઈ શકે છે; આ માર્ગદર્શિકા વ્હીલચેર પ્રવેશ કે કોઈ ચોક્કસ સુવિધાની ખાતરી આપતી નથી."
    },
    "etiquette": {
      "eyebrow": "શિષ્ટાચાર",
      "title": "મુલાકાતી માટે ટિપ્સ",
      "p": "સારી પકડવાળાં પગરખાં પહેરો, પાણી લો અને મંજૂર પગથિયાં વાપરો. કોતરણી પર ચઢશો નહીં કે અવરોધ પાર કરશો નહીં. ભારે વરસાદ કે વીજળીમાં સલામત આશ્રય અને કર્મચારીઓની સૂચના અનુસરો; અનુમાન પરથી પ્રવેશ ખુલ્લો છે એવું ન માનો."
    },
    "nearby": {
      "eyebrow": "આસપાસની યોજના",
      "title": "અડાલજ આસપાસ શું કરવું",
      "cards": [
        {
          "title": "અક્ષરધામની આગળની મુલાકાત",
          "body": "અક્ષરધામ જવા વાવથી ચોક્કસ મંદિર પ્રવેશ સુધીનો રોડ માર્ગ ગણો. સીધી રેખાનું અંતર કે શહેરનું સામાન્ય અંતર મુસાફરીનો વિશ્વસનીય સમય આપતું નથી."
        },
        {
          "title": "અક્ષરધામ, ગાંધીનગર",
          "body": "પગથિયાં અને કોતરણી તમારા અનુકૂળ ગતિએ જોવા સમય રાખો. ગુજરાત પ્રવાસન દર્શાવતાં નજીકનાં સ્થળોમાં ગાંધીનગરનું અક્ષરધામ અને અડાલજનું ત્રિમંદિર છે. દરેકના સમય અને પ્રવેશ નિયમ અલગ તપાસો; આ સંયુક્ત ટિકિટ નથી."
        },
        {
          "title": "ત્રિમંદિર, અડાલજ",
          "body": "પગથિયાં અને કોતરણી તમારા અનુકૂળ ગતિએ જોવા સમય રાખો. ગુજરાત પ્રવાસન દર્શાવતાં નજીકનાં સ્થળોમાં ગાંધીનગરનું અક્ષરધામ અને અડાલજનું ત્રિમંદિર છે. દરેકના સમય અને પ્રવેશ નિયમ અલગ તપાસો; આ સંયુક્ત ટિકિટ નથી."
        }
      ]
    },
    "faq": {
      "eyebrow": "પ્રશ્નોત્તરી",
      "title": "સામાન્ય પ્રશ્નો",
      "items": [
        {
          "q": "અડાલજની વાવ ક્યાં આવેલી છે?",
          "a": "Adalaj Rd, અડાલજ, ગુજરાત 382421, ભારત. નકશાનો પિન 23.1668106, 72.5800895 છે; પહોંચીને મુલાકાતીઓનો પ્રવેશ ચકાસો."
        },
        {
          "q": "મુલાકાતનો સમય કયો છે?",
          "a": "23 ઑક્ટોબર 2026ની તપાસમાં Google Maps પર સાતેય દિવસ 08:00–18:00 દર્શાવાયું હતું. આ તૃતીય-પક્ષનો તારીખવાળો સંદર્ભ છે, આજના છેલ્લાં પ્રવેશ કે બધા માળ ખુલ્લા હોવાની ખાતરી નથી. નીકળતાં પહેલાં ટિકિટ અને પ્રવેશદ્વારની સૂચના તપાસો."
        },
        {
          "q": "પ્રવેશ ફી કેટલી છે?",
          "a": "ASI ટિકિટ પોર્ટલમાં અડાલજ/રૂડાબાઈનું સ્મારક અને મુલાકાતની તારીખ પસંદ કરો. ASI ફીમાં ભારતીય, SAARC/BIMSTEC અને અન્ય વિદેશી પ્રવાસીઓ વચ્ચે તફાવત હોઈ શકે છે; લાગુ રાષ્ટ્રીયતા, ઉંમરની છૂટ અને ઇલેક્ટ્રોનિક કે કાઉન્ટર ચુકવણીની શરતો તપાસો. આ માર્ગદર્શિકાએ અડાલજનો હાલનો રૂપિયામાં ચોક્કસ દર સ્વતંત્ર રીતે પુષ્ટિ કર્યો નથી."
        },
        {
          "q": "શું આ અડાલજની વાવની સત્તાવાર વેબસાઇટ છે?",
          "a": "સ્વતંત્ર મુલાકાતી માર્ગદર્શિકા; સ્મારક સંચાલક, ASI કે સત્તાવાર સરકારી વેબસાઇટ નથી."
        },
        {
          "q": "શું પાંચેય માળ પર જઈ શકાય?",
          "a": "પાંચ માળ સ્થાપત્યનું વર્ણન છે, જાહેર પ્રવેશની ખાતરી નથી. હાલના માર્ગ, અવરોધ અને કર્મચારીઓની સૂચના અનુસરો."
        }
      ]
    },
    "sources": {
      "eyebrow": "સ્ત્રોતો",
      "title": "અધિકૃત અને સાર્વજનિક સ્ત્રોતો",
      "items": [
        {
          "label": "Gujarat Tourism · Adalaj ni Vav",
          "href": "https://gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html"
        },
        {
          "label": "Incredible India · Adalaj Stepwell",
          "href": "https://www.incredibleindia.gov.in/en/gujarat/gandhinagar/adalaj-stepwell"
        },
        {
          "label": "ASI · Tickets",
          "href": "https://asi.paygov.org.in/asi-webapp/#/ticketbooking"
        }
      ]
    }
  },
  "en": {
    "heroEyebrow": "Adalaj · Gandhinagar District · Gujarat · India",
    "h1": "Adalaj Stepwell (Adalaj, Gujarat)",
    "heroLead": "Adalaj Stepwell (Adalaj ni Vav or Rudabai Stepwell) is a five-storey heritage stepwell in Adalaj, Gandhinagar district, Gujarat. Plan the location, visiting hours, ASI tickets and journey from Ahmedabad with this independent guide.",
    "facts": [
      {
        "value": "15th c.",
        "label": "Rudabai ni Vav"
      },
      {
        "value": "5 storeys",
        "label": "Underground galleries"
      },
      {
        "value": "08:00–18:00",
        "label": "Maps snapshot · 23 Oct 2026"
      },
      {
        "value": "4.5 ★",
        "label": "31,310 Google Maps reviews · 23 Oct 2026"
      }
    ],
    "history": {
      "eyebrow": "Architecture & heritage",
      "title": "Light, shadow and a vertical city of stone",
      "p1": "Gujarat Tourism describes a 15th-century stepwell with five storeys and Indo-Islamic architecture. Incredible India places the beginning of construction in 1498 and associates the monument with Queen Rudabai.",
      "p2": "The underground galleries show how water architecture also provided a place to gather. Look at the carved pillars and the opening above the well; follow the accessible route marked on the day.",
      "links": [
        {
          "label": "Gujarat Tourism · Adalaj ni Vav",
          "href": "https://gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html"
        },
        {
          "label": "Incredible India · Adalaj Stepwell",
          "href": "https://www.incredibleindia.gov.in/en/gujarat/gandhinagar/adalaj-stepwell"
        }
      ]
    },
    "stories": {
      "eyebrow": "Legend & heritage",
      "title": "Queen Rudabai's tale",
      "p": "Incredible India recounts the story of Queen Rudabai and Sultan Mahmud Begada as a legend. This guide distinguishes that narrative from the visible building and its documented late-15th-century origins."
    },
    "architecture": {
      "eyebrow": "Architecture",
      "title": "Five storeys and an octagonal kund",
      "p": "Gujarat Tourism describes three entrances, an octagonal opening and carved pillars supporting five storeys. These features combine local and Islamic design traditions. Five storeys does not mean every level is open to visitors."
    },
    "climate": {
      "eyebrow": "Climate",
      "title": "Gujarat’s heat and monsoon",
      "p": "Incredible India recommends October–March for a visit. Check the actual forecast before leaving; shade in the stepwell does not guarantee protection from heat or rain."
    },
    "itineraries": {
      "eyebrow": "Itineraries",
      "title": "For what kind of visitor",
      "p": "Allow time for the steps and carvings at your own pace. A proposed onward stop is Akshardham in Gandhinagar or Trimandir in Adalaj, listed by Gujarat Tourism. Check each destination’s separate hours and entry rules; this is not a combined ticket."
    },
    "visit": {
      "eyebrow": "Plan your visit",
      "title": "Know before you go",
      "cards": [
        {
          "title": "Ticket / cost",
          "body": "Use the ASI ticket portal and select the Adalaj/Rudabai monument and visit date. ASI fees can distinguish Indian, SAARC/BIMSTEC and other foreign visitors; check the applicable nationality, age exemption and electronic or counter payment conditions. This guide has not independently confirmed a current Adalaj rupee tariff."
        },
        {
          "title": "Best time",
          "body": "Incredible India recommends October–March for a visit. Check the actual forecast before leaving; shade in the stepwell does not guarantee protection from heat or rain."
        },
        {
          "title": "Suggested duration",
          "body": "Allow time for the steps and carvings at your own pace. A proposed onward stop is Akshardham in Gandhinagar or Trimandir in Adalaj, listed by Gujarat Tourism. Check each destination’s separate hours and entry rules; this is not a combined ticket."
        },
        {
          "title": "Before leaving",
          "body": "Check parking, toilets, drinking water and step-free access directly before travel, especially if these are essential to your visit. The historic stairs can make access difficult; this guide does not certify wheelchair access or a particular facility."
        },
        {
          "title": "Dress & safety",
          "body": "Wear shoes with grip, take water, and use permitted steps. Do not climb carvings or cross barriers. During heavy rain or thunder, seek a safe shelter and follow staff advice rather than relying on this forecast to determine access."
        },
        {
          "title": "Address",
          "body": "Adalaj Rd, Adalaj, Gujarat 382421, India. The map pin is 23.1668106, 72.5800895; confirm the visitor entrance on arrival."
        }
      ]
    },
    "reach": {
      "eyebrow": "Getting there in detail",
      "title": "Easy road access between Ahmedabad and Gandhinagar",
      "blocks": [
        {
          "h": "Airport connection",
          "p": "Ahmedabad’s Sardar Vallabhbhai Patel International Airport is the main air gateway described by Gujarat Tourism. Plan your road connection to Adalaj using a current route, not a guaranteed travel time."
        },
        {
          "h": "Rail connection",
          "p": "Ahmedabad and Gandhinagar are rail gateways for the area. Confirm your actual station, train and onward road connection before booking; do not assume a direct bus from every station."
        },
        {
          "h": "Location and road journey",
          "p": "Set the destination to Adalaj Stepwell/Rudabai Stepwell, Adalaj. Route distance depends on your starting point. Confirm drop-off and the return journey; we do not publish unverified bus numbers or fixed taxi fares."
        }
      ],
      "sourceNote": "Open the location in Google Maps (third party)"
    },
    "facilities": {
      "eyebrow": "Facilities",
      "title": "What is available nearby",
      "p": "Check parking, toilets, drinking water and step-free access directly before travel, especially if these are essential to your visit. The historic stairs can make access difficult; this guide does not certify wheelchair access or a particular facility."
    },
    "etiquette": {
      "eyebrow": "Etiquette",
      "title": "Tips for visitors",
      "p": "Wear shoes with grip, take water, and use permitted steps. Do not climb carvings or cross barriers. During heavy rain or thunder, seek a safe shelter and follow staff advice rather than relying on this forecast to determine access."
    },
    "nearby": {
      "eyebrow": "Plan around",
      "title": "What to do near Adalaj",
      "cards": [
        {
          "title": "Akshardham onward trip",
          "body": "For an onward journey to Akshardham, calculate the road route from the stepwell to the exact temple entrance. Straight-line distances and general city distances do not give a reliable journey time."
        },
        {
          "title": "Akshardham, Gandhinagar",
          "body": "Allow time for the steps and carvings at your own pace. A proposed onward stop is Akshardham in Gandhinagar or Trimandir in Adalaj, listed by Gujarat Tourism. Check each destination’s separate hours and entry rules; this is not a combined ticket."
        },
        {
          "title": "Trimandir, Adalaj",
          "body": "Allow time for the steps and carvings at your own pace. A proposed onward stop is Akshardham in Gandhinagar or Trimandir in Adalaj, listed by Gujarat Tourism. Check each destination’s separate hours and entry rules; this is not a combined ticket."
        }
      ]
    },
    "faq": {
      "eyebrow": "FAQ",
      "title": "Frequently asked questions",
      "items": [
        {
          "q": "Where is Adalaj Stepwell?",
          "a": "Adalaj Rd, Adalaj, Gujarat 382421, India. The map pin is 23.1668106, 72.5800895; confirm the visitor entrance on arrival."
        },
        {
          "q": "What are the visiting hours?",
          "a": "Google Maps listed 08:00–18:00 on all seven days when checked on 23 October 2026. This is a third-party snapshot, not confirmation of today’s last admission or access to every level. Verify the ticket and entrance notice before departure."
        },
        {
          "q": "What is the entry fee?",
          "a": "Use the ASI ticket portal and select the Adalaj/Rudabai monument and visit date. ASI fees can distinguish Indian, SAARC/BIMSTEC and other foreign visitors; check the applicable nationality, age exemption and electronic or counter payment conditions. This guide has not independently confirmed a current Adalaj rupee tariff."
        },
        {
          "q": "Is this the official Adalaj Stepwell website?",
          "a": "Independent visitor guide; not the monument operator, ASI or an official government website."
        },
        {
          "q": "Can I access all five levels?",
          "a": "Five storeys describes the architecture, not guaranteed public access. Follow the current route, barriers and staff instructions."
        }
      ]
    },
    "sources": {
      "eyebrow": "Sources",
      "title": "Official and public sources",
      "items": [
        {
          "label": "Gujarat Tourism · Adalaj ni Vav",
          "href": "https://gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html"
        },
        {
          "label": "Incredible India · Adalaj Stepwell",
          "href": "https://www.incredibleindia.gov.in/en/gujarat/gandhinagar/adalaj-stepwell"
        },
        {
          "label": "ASI · Tickets",
          "href": "https://asi.paygov.org.in/asi-webapp/#/ticketbooking"
        }
      ]
    }
  },
  "hi": {
    "heroEyebrow": "अडालज · गांधीनगर ज़िला · गुजरात · भारत",
    "h1": "अडालज स्टेपवेल (अडालज, गुजरात)",
    "heroLead": "अडालज की वाव (Adalaj ni Vav या रुदाबाई स्टेपवेल) गुजरात के गांधीनगर जिले में अडालज स्थित पाँच मंज़िला ऐतिहासिक बावड़ी है। इस स्वतंत्र गाइड में स्थान, समय, ASI टिकट और अहमदाबाद से पहुँचने की जानकारी देखें।",
    "facts": [
      {
        "value": "15वीं सदी",
        "label": "रुदाबाई नी वाव"
      },
      {
        "value": "5 मंज़िल",
        "label": "भूमिगत दीर्घाएँ"
      },
      {
        "value": "08:00–18:00",
        "label": "Maps संदर्भ · 23 अक्तू 2026"
      },
      {
        "value": "4.5 ★",
        "label": "31,310 Google Maps समीक्षाएँ · 23 अक्तू 2026"
      }
    ],
    "history": {
      "eyebrow": "वास्तुकला और विरासत",
      "title": "प्रकाश, छाया और पत्थर का एक खड़ा शहर",
      "p1": "गुजरात पर्यटन इसे 15वीं सदी की पाँच मंज़िला बावड़ी और भारतीय-इस्लामी स्थापत्य का उदाहरण बताता है। Incredible India निर्माण की शुरुआत 1498 में बताता है और स्मारक को रानी रुदाबाई से जोड़ता है।",
      "p2": "भूमिगत दीर्घाएँ जल व्यवस्था के साथ लोगों के मिलने की भूमिका भी समझाती हैं। नक्काशीदार स्तंभ और ऊपर का खुला भाग देखें; उस दिन अनुमति वाले रास्ते पर ही चलें।",
      "links": [
        {
          "label": "Gujarat Tourism · Adalaj ni Vav",
          "href": "https://gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html"
        },
        {
          "label": "Incredible India · Adalaj Stepwell",
          "href": "https://www.incredibleindia.gov.in/en/gujarat/gandhinagar/adalaj-stepwell"
        }
      ]
    },
    "stories": {
      "eyebrow": "कथा और विरासत",
      "title": "रानी रुदाबाई की गाथा",
      "p": "Incredible India रानी रुदाबाई और सुल्तान महमूद बेगड़ा की कहानी को किंवदंती के रूप में प्रस्तुत करता है। यह गाइड उस कथा को इमारत और 15वीं सदी के ऐतिहासिक संदर्भ से अलग रखता है।"
    },
    "architecture": {
      "eyebrow": "वास्तुकला",
      "title": "पाँच मंज़िल और अष्टकोणीय कुंड",
      "p": "गुजरात पर्यटन तीन प्रवेश, अष्टकोणीय खुला भाग और पाँच मंज़िलों को सहारा देते नक्काशीदार स्तंभ बताता है। स्थानीय और इस्लामी शैली साथ दिखती हैं। पाँच मंज़िल होने का अर्थ हर स्तर पर सार्वजनिक प्रवेश नहीं है।"
    },
    "climate": {
      "eyebrow": "जलवायु",
      "title": "गुजरात की गर्मी और मानसून",
      "p": "Incredible India अक्टूबर–मार्च में यात्रा की सलाह देता है। निकलने से पहले वास्तविक पूर्वानुमान देखें; बावड़ी की छाया गर्मी या बारिश से सुरक्षा की गारंटी नहीं है।"
    },
    "itineraries": {
      "eyebrow": "यात्रा योजना",
      "title": "किस प्रकार के आगंतुक के लिए",
      "p": "सीढ़ियाँ और नक्काशी अपनी गति से देखने का समय रखें। गुजरात पर्यटन के आसपास के स्थलों में गांधीनगर का अक्षरधाम और अडालज का त्रिमंदिर हैं। प्रत्येक के समय और प्रवेश नियम अलग जाँचें; यह संयुक्त टिकट नहीं है।"
    },
    "visit": {
      "eyebrow": "भ्रमण की योजना",
      "title": "जाने से पहले जानना आवश्यक",
      "cards": [
        {
          "title": "टिकट / ख़र्च",
          "body": "ASI टिकट पोर्टल में अडालज/रुदाबाई स्मारक और यात्रा की तारीख चुनें। ASI शुल्क भारतीय, SAARC/BIMSTEC और अन्य विदेशी यात्रियों के लिए अलग हो सकते हैं; लागू राष्ट्रीयता, आयु छूट और इलेक्ट्रॉनिक या काउंटर भुगतान की शर्तें जाँचें। इस गाइड ने अडालज की वर्तमान रुपये वाली दर की स्वतंत्र पुष्टि नहीं की है।"
        },
        {
          "title": "सर्वोत्तम समय",
          "body": "Incredible India अक्टूबर–मार्च में यात्रा की सलाह देता है। निकलने से पहले वास्तविक पूर्वानुमान देखें; बावड़ी की छाया गर्मी या बारिश से सुरक्षा की गारंटी नहीं है।"
        },
        {
          "title": "सुझाया गया समय",
          "body": "सीढ़ियाँ और नक्काशी अपनी गति से देखने का समय रखें। गुजरात पर्यटन के आसपास के स्थलों में गांधीनगर का अक्षरधाम और अडालज का त्रिमंदिर हैं। प्रत्येक के समय और प्रवेश नियम अलग जाँचें; यह संयुक्त टिकट नहीं है।"
        },
        {
          "title": "निकलने से पहले",
          "body": "पार्किंग, शौचालय, पेयजल और बिना सीढ़ियों के प्रवेश की सीधे पुष्टि करें, विशेषकर यदि ये आवश्यक हों। ऐतिहासिक सीढ़ियाँ कठिनाई पैदा कर सकती हैं; गाइड व्हीलचेयर प्रवेश या किसी सुविधा की गारंटी नहीं देता।"
        },
        {
          "title": "पहनावा और सुरक्षा",
          "body": "पकड़ वाले जूते पहनें, पानी रखें और अनुमति वाली सीढ़ियाँ प्रयोग करें। नक्काशी पर न चढ़ें, अवरोध पार न करें। भारी बारिश या बिजली में सुरक्षित आश्रय और कर्मचारियों की सलाह लें; पूर्वानुमान से प्रवेश खुला होना तय न करें।"
        },
        {
          "title": "पता",
          "body": "Adalaj Rd, अडालज, गुजरात 382421, भारत। मानचित्र पिन 23.1668106, 72.5800895 है; पहुँचकर आगंतुक प्रवेश जाँचें।"
        }
      ]
    },
    "reach": {
      "eyebrow": "विस्तृत परिवहन",
      "title": "अहमदाबाद और गांधीनगर के बीच आसान सड़क पहुँच",
      "blocks": [
        {
          "h": "हवाई अड्डा संपर्क",
          "p": "गुजरात पर्यटन अहमदाबाद के सरदार वल्लभभाई पटेल अंतरराष्ट्रीय हवाई अड्डे का उल्लेख करता है। वहाँ से अडालज का वर्तमान सड़क मार्ग जाँचें; यात्रा का समय निश्चित नहीं है।"
        },
        {
          "h": "रेल संपर्क",
          "p": "अहमदाबाद और गांधीनगर क्षेत्र के रेल संपर्क हैं। बुकिंग से पहले वास्तविक स्टेशन, ट्रेन और आगे का सड़क संपर्क जाँचें; हर स्टेशन से सीधी बस न मानें।"
        },
        {
          "h": "स्थान और सड़क मार्ग",
          "p": "गंतव्य में Adalaj Stepwell/Rudabai Stepwell, Adalaj चुनें। दूरी शुरुआती स्थान पर निर्भर है। उतरने की जगह और वापसी की योजना जाँचें; यहाँ अपुष्ट बस नंबर या तय टैक्सी किराया नहीं दिया जाता।"
        }
      ],
      "sourceNote": "Google Maps में स्थान देखें (तीसरा पक्ष)"
    },
    "facilities": {
      "eyebrow": "सुविधाएँ",
      "title": "आसपास क्या उपलब्ध है",
      "p": "पार्किंग, शौचालय, पेयजल और बिना सीढ़ियों के प्रवेश की सीधे पुष्टि करें, विशेषकर यदि ये आवश्यक हों। ऐतिहासिक सीढ़ियाँ कठिनाई पैदा कर सकती हैं; गाइड व्हीलचेयर प्रवेश या किसी सुविधा की गारंटी नहीं देता।"
    },
    "etiquette": {
      "eyebrow": "शिष्टाचार",
      "title": "आगंतुकों के लिए सुझाव",
      "p": "पकड़ वाले जूते पहनें, पानी रखें और अनुमति वाली सीढ़ियाँ प्रयोग करें। नक्काशी पर न चढ़ें, अवरोध पार न करें। भारी बारिश या बिजली में सुरक्षित आश्रय और कर्मचारियों की सलाह लें; पूर्वानुमान से प्रवेश खुला होना तय न करें।"
    },
    "nearby": {
      "eyebrow": "आसपास की योजना",
      "title": "अडालज के आसपास क्या करें",
      "cards": [
        {
          "title": "अक्षरधाम की अगली यात्रा",
          "body": "अक्षरधाम जाने के लिए बावड़ी से मंदिर के सही प्रवेश तक सड़क मार्ग निकालें। सीधी रेखा की दूरी या शहर की सामान्य दूरी से यात्रा समय तय नहीं होता।"
        },
        {
          "title": "अक्षरधाम, गांधीनगर",
          "body": "सीढ़ियाँ और नक्काशी अपनी गति से देखने का समय रखें। गुजरात पर्यटन के आसपास के स्थलों में गांधीनगर का अक्षरधाम और अडालज का त्रिमंदिर हैं। प्रत्येक के समय और प्रवेश नियम अलग जाँचें; यह संयुक्त टिकट नहीं है।"
        },
        {
          "title": "त्रिमंदिर, अडालज",
          "body": "सीढ़ियाँ और नक्काशी अपनी गति से देखने का समय रखें। गुजरात पर्यटन के आसपास के स्थलों में गांधीनगर का अक्षरधाम और अडालज का त्रिमंदिर हैं। प्रत्येक के समय और प्रवेश नियम अलग जाँचें; यह संयुक्त टिकट नहीं है।"
        }
      ]
    },
    "faq": {
      "eyebrow": "प्रश्नोत्तर",
      "title": "अक्सर पूछे जाने वाले प्रश्न",
      "items": [
        {
          "q": "अडालज की वाव कहाँ है?",
          "a": "Adalaj Rd, अडालज, गुजरात 382421, भारत। मानचित्र पिन 23.1668106, 72.5800895 है; पहुँचकर आगंतुक प्रवेश जाँचें।"
        },
        {
          "q": "दर्शन का समय क्या है?",
          "a": "23 अक्टूबर 2026 की जाँच में Google Maps पर सातों दिन 08:00–18:00 दिखा। यह तीसरे पक्ष का तारीख वाला संदर्भ है, आज के अंतिम प्रवेश या सभी स्तरों के खुलने की पुष्टि नहीं। निकलने से पहले टिकट और प्रवेश सूचना जाँचें।"
        },
        {
          "q": "प्रवेश शुल्क कितना है?",
          "a": "ASI टिकट पोर्टल में अडालज/रुदाबाई स्मारक और यात्रा की तारीख चुनें। ASI शुल्क भारतीय, SAARC/BIMSTEC और अन्य विदेशी यात्रियों के लिए अलग हो सकते हैं; लागू राष्ट्रीयता, आयु छूट और इलेक्ट्रॉनिक या काउंटर भुगतान की शर्तें जाँचें। इस गाइड ने अडालज की वर्तमान रुपये वाली दर की स्वतंत्र पुष्टि नहीं की है।"
        },
        {
          "q": "क्या यह अडालज स्टेपवेल की आधिकारिक वेबसाइट है?",
          "a": "स्वतंत्र आगंतुक गाइड; स्मारक संचालक, ASI या आधिकारिक सरकारी वेबसाइट नहीं।"
        },
        {
          "q": "क्या सभी पाँच स्तर खुले हैं?",
          "a": "पाँच मंज़िलें स्थापत्य का वर्णन है, सार्वजनिक प्रवेश की गारंटी नहीं। वर्तमान रास्ते, अवरोध और कर्मचारियों के निर्देश मानें।"
        }
      ]
    },
    "sources": {
      "eyebrow": "स्रोत",
      "title": "आधिकारिक और सार्वजनिक स्रोत",
      "items": [
        {
          "label": "Gujarat Tourism · Adalaj ni Vav",
          "href": "https://gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html"
        },
        {
          "label": "Incredible India · Adalaj Stepwell",
          "href": "https://www.incredibleindia.gov.in/en/gujarat/gandhinagar/adalaj-stepwell"
        },
        {
          "label": "ASI · Tickets",
          "href": "https://asi.paygov.org.in/asi-webapp/#/ticketbooking"
        }
      ]
    }
  }
};

export const subpages: Record<Locale, Record<SubSlug, SubPageDict>> = {
  "gu": {
    "timings": {
      "eyebrow": "મુલાકાત માહિતી",
      "h1": "અડાલજની વાવનો સમય: મુલાકાત અને છેલ્લા પ્રવેશની તપાસ",
      "intro": "23 ઑક્ટોબર 2026ની તપાસમાં Google Maps પર સાતેય દિવસ 08:00–18:00 દર્શાવાયું હતું. આ તૃતીય-પક્ષનો તારીખવાળો સંદર્ભ છે, આજના છેલ્લાં પ્રવેશ કે બધા માળ ખુલ્લા હોવાની ખાતરી નથી. નીકળતાં પહેલાં ટિકિટ અને પ્રવેશદ્વારની સૂચના તપાસો.",
      "blocks": [
        {
          "h": "મુલાકાતનો સમય",
          "p": "23 ઑક્ટોબર 2026ની તપાસમાં Google Maps પર સાતેય દિવસ 08:00–18:00 દર્શાવાયું હતું. આ તૃતીય-પક્ષનો તારીખવાળો સંદર્ભ છે, આજના છેલ્લાં પ્રવેશ કે બધા માળ ખુલ્લા હોવાની ખાતરી નથી. નીકળતાં પહેલાં ટિકિટ અને પ્રવેશદ્વારની સૂચના તપાસો."
        },
        {
          "h": "નીકળતા પહેલાં",
          "p": "Incredible India ઑક્ટોબરથી માર્ચની મુલાકાત સૂચવે છે. નીકળતા પહેલાં વાસ્તવિક હવામાન જુઓ; વાવની છાંય ગરમી કે વરસાદથી રક્ષણની ખાતરી આપતી નથી."
        },
        {
          "h": "સ્થાપત્ય",
          "p": "પાંચ માળ સ્થાપત્યનું વર્ણન છે, જાહેર પ્રવેશની ખાતરી નથી. હાલના માર્ગ, અવરોધ અને કર્મચારીઓની સૂચના અનુસરો."
        }
      ],
      "faq": [
        {
          "q": "મુલાકાતનો સમય કયો છે?",
          "a": "23 ઑક્ટોબર 2026ની તપાસમાં Google Maps પર સાતેય દિવસ 08:00–18:00 દર્શાવાયું હતું. આ તૃતીય-પક્ષનો તારીખવાળો સંદર્ભ છે, આજના છેલ્લાં પ્રવેશ કે બધા માળ ખુલ્લા હોવાની ખાતરી નથી. નીકળતાં પહેલાં ટિકિટ અને પ્રવેશદ્વારની સૂચના તપાસો."
        },
        {
          "q": "શું પાંચેય માળ પર જઈ શકાય?",
          "a": "પાંચ માળ સ્થાપત્યનું વર્ણન છે, જાહેર પ્રવેશની ખાતરી નથી. હાલના માર્ગ, અવરોધ અને કર્મચારીઓની સૂચના અનુસરો."
        }
      ],
      "related": [
        {
          "label": "પ્રવેશ ફી",
          "href": "/entry-fee/"
        },
        {
          "label": "પહોંચ",
          "href": "/transport/"
        },
        {
          "label": "ઇતિહાસ",
          "href": "/history/"
        }
      ]
    },
    "entry-fee": {
      "eyebrow": "મુલાકાત માહિતી",
      "h1": "અડાલજની વાવની પ્રવેશ ફી: ASI ટિકિટ અને પ્રવાસી શ્રેણીઓ",
      "intro": "ASI ટિકિટ પોર્ટલમાં અડાલજ/રૂડાબાઈનું સ્મારક અને મુલાકાતની તારીખ પસંદ કરો. ASI ફીમાં ભારતીય, SAARC/BIMSTEC અને અન્ય વિદેશી પ્રવાસીઓ વચ્ચે તફાવત હોઈ શકે છે; લાગુ રાષ્ટ્રીયતા, ઉંમરની છૂટ અને ઇલેક્ટ્રોનિક કે કાઉન્ટર ચુકવણીની શરતો તપાસો. આ માર્ગદર્શિકાએ અડાલજનો હાલનો રૂપિયામાં ચોક્કસ દર સ્વતંત્ર રીતે પુષ્ટિ કર્યો નથી.",
      "blocks": [
        {
          "h": "પ્રવેશ ફી અને શ્રેણીઓ",
          "p": "ASI ટિકિટ પોર્ટલમાં અડાલજ/રૂડાબાઈનું સ્મારક અને મુલાકાતની તારીખ પસંદ કરો. ASI ફીમાં ભારતીય, SAARC/BIMSTEC અને અન્ય વિદેશી પ્રવાસીઓ વચ્ચે તફાવત હોઈ શકે છે; લાગુ રાષ્ટ્રીયતા, ઉંમરની છૂટ અને ઇલેક્ટ્રોનિક કે કાઉન્ટર ચુકવણીની શરતો તપાસો. આ માર્ગદર્શિકાએ અડાલજનો હાલનો રૂપિયામાં ચોક્કસ દર સ્વતંત્ર રીતે પુષ્ટિ કર્યો નથી."
        },
        {
          "h": "ચલણ અને અલગ સેવાઓ",
          "p": "Mapsમાં ચલણ રૂપાંતરિત રકમ ભારતની દરેક ટિકિટનો એકસમાન દર નથી. સત્તાવાર પસંદગીમાં રૂપિયાની અંતિમ કિંમત તપાસો; વાહન, ગાઇડ અને વ્યાવસાયિક ટૂર અલગ સેવાઓ છે."
        },
        {
          "h": "ફોટોગ્રાફીના નિયમ",
          "p": "કૅમેરા, ટ્રાઇપોડ અને વ્યાવસાયિક ફોટોગ્રાફીના હાલના નિયમ પ્રવેશદ્વારે પૂછો. સામાન્ય પ્રવેશ ટિકિટ દરેક પ્રકારના શૂટિંગની મંજૂરી આપતી નથી."
        }
      ],
      "faq": [
        {
          "q": "પ્રવેશ ફી કેટલી છે?",
          "a": "ASI ટિકિટ પોર્ટલમાં અડાલજ/રૂડાબાઈનું સ્મારક અને મુલાકાતની તારીખ પસંદ કરો. ASI ફીમાં ભારતીય, SAARC/BIMSTEC અને અન્ય વિદેશી પ્રવાસીઓ વચ્ચે તફાવત હોઈ શકે છે; લાગુ રાષ્ટ્રીયતા, ઉંમરની છૂટ અને ઇલેક્ટ્રોનિક કે કાઉન્ટર ચુકવણીની શરતો તપાસો. આ માર્ગદર્શિકાએ અડાલજનો હાલનો રૂપિયામાં ચોક્કસ દર સ્વતંત્ર રીતે પુષ્ટિ કર્યો નથી."
        },
        {
          "q": "શું આ અડાલજની વાવની સત્તાવાર વેબસાઇટ છે?",
          "a": "સ્વતંત્ર મુલાકાતી માર્ગદર્શિકા; સ્મારક સંચાલક, ASI કે સત્તાવાર સરકારી વેબસાઇટ નથી."
        }
      ],
      "related": [
        {
          "label": "મુલાકાત સમય",
          "href": "/timings/"
        },
        {
          "label": "પહોંચ",
          "href": "/transport/"
        },
        {
          "label": "ઇતિહાસ",
          "href": "/history/"
        }
      ]
    },
    "transport": {
      "eyebrow": "પરિવહન",
      "h1": "અમદાવાદ અને ગાંધીનગરથી અડાલજની વાવ કેવી રીતે પહોંચવું",
      "intro": "Adalaj Rd, અડાલજ, ગુજરાત 382421, ભારત. નકશાનો પિન 23.1668106, 72.5800895 છે; પહોંચીને મુલાકાતીઓનો પ્રવેશ ચકાસો.",
      "blocks": [
        {
          "h": "સ્થળ અને રોડ માર્ગ",
          "p": "Adalaj Rd, અડાલજ, ગુજરાત 382421, ભારત. નકશાનો પિન 23.1668106, 72.5800895 છે; પહોંચીને મુલાકાતીઓનો પ્રવેશ ચકાસો."
        },
        {
          "h": "હવાઈમથકથી જોડાણ",
          "p": "ગુજરાત પ્રવાસન અમદાવાદના સરદાર વલ્લભભાઈ પટેલ આંતરરાષ્ટ્રીય હવાઈમથકનો ઉલ્લેખ કરે છે. ત્યાંથી અડાલજનો હાલનો માર્ગ તપાસો; મુસાફરીનો સમય નિશ્ચિત નથી."
        },
        {
          "h": "રેલ જોડાણ",
          "p": "અમદાવાદ અને ગાંધીનગર વિસ્તારનાં રેલ જોડાણો છે. બુકિંગ પહેલાં વાસ્તવિક સ્ટેશન, ટ્રેન અને આગળનો માર્ગ તપાસો; દરેક સ્ટેશનથી સીધી બસ હશે એવું ન માનો."
        },
        {
          "h": "સ્થળ અને રોડ માર્ગ",
          "p": "ગંતવ્યમાં Adalaj Stepwell/Rudabai Stepwell, Adalaj પસંદ કરો. અંતર શરૂઆતના સ્થળ પ્રમાણે બદલાય છે. ઉતરવાનું સ્થાન અને પરતની મુસાફરી તપાસો; અહીં અચકાસેલા બસ નંબર કે નિશ્ચિત ટેક્સી ભાડાં આપ્યાં નથી."
        },
        {
          "h": "અક્ષરધામની આગળની મુલાકાત",
          "p": "અક્ષરધામ જવા વાવથી ચોક્કસ મંદિર પ્રવેશ સુધીનો રોડ માર્ગ ગણો. સીધી રેખાનું અંતર કે શહેરનું સામાન્ય અંતર મુસાફરીનો વિશ્વસનીય સમય આપતું નથી."
        }
      ],
      "faq": [
        {
          "q": "અડાલજની વાવ ક્યાં આવેલી છે?",
          "a": "Adalaj Rd, અડાલજ, ગુજરાત 382421, ભારત. નકશાનો પિન 23.1668106, 72.5800895 છે; પહોંચીને મુલાકાતીઓનો પ્રવેશ ચકાસો."
        },
        {
          "q": "શું પાંચેય માળ પર જઈ શકાય?",
          "a": "પાર્કિંગ, શૌચાલય, પીવાનું પાણી અને પગથિયાં વિનાના પ્રવેશની સીધી તપાસ કરો, ખાસ કરીને તે જરૂરી હોય ત્યારે. ઐતિહાસિક પગથિયાંથી મુશ્કેલી થઈ શકે છે; આ માર્ગદર્શિકા વ્હીલચેર પ્રવેશ કે કોઈ ચોક્કસ સુવિધાની ખાતરી આપતી નથી."
        }
      ],
      "related": [
        {
          "label": "મુલાકાત સમય",
          "href": "/timings/"
        },
        {
          "label": "પ્રવેશ ફી",
          "href": "/entry-fee/"
        },
        {
          "label": "ઇતિહાસ",
          "href": "/history/"
        }
      ]
    },
    "history": {
      "eyebrow": "ઇતિહાસ",
      "h1": "અડાલજની વાવનો ઇતિહાસ: રૂડાબાઈ, સમય અને સ્થાપત્ય",
      "intro": "ગુજરાત પ્રવાસન આ વાવને 15મી સદીની, પાંચ માળ અને ભારતીય-ઇસ્લામી સ્થાપત્ય ધરાવતી રચના કહે છે. Incredible India બાંધકામની શરૂઆત 1498માં દર્શાવે છે અને તેને રાણી રૂડાબાઈ સાથે જોડે છે.",
      "blocks": [
        {
          "h": "ઇતિહાસ અને વર્ષ",
          "p": "ગુજરાત પ્રવાસન આ વાવને 15મી સદીની, પાંચ માળ અને ભારતીય-ઇસ્લામી સ્થાપત્ય ધરાવતી રચના કહે છે. Incredible India બાંધકામની શરૂઆત 1498માં દર્શાવે છે અને તેને રાણી રૂડાબાઈ સાથે જોડે છે."
        },
        {
          "h": "સ્થાપત્ય",
          "p": "ગુજરાત પ્રવાસન ત્રણ પ્રવેશ, અષ્ટકોણીય ખુલ્લું સ્થાન અને પાંચ માળને ટેકો આપતા કોતરેલા થાંભલા વર્ણવે છે. સ્થાનિક અને ઇસ્લામી શૈલીનું સંમિશ્રણ જોવા મળે છે. પાંચ માળ હોવાનો અર્થ બધા માળ મુલાકાત માટે ખુલ્લા છે એવો નથી."
        },
        {
          "h": "રૂડાબાઈની દંતકથા",
          "p": "Incredible India રાણી રૂડાબાઈ અને સુલતાન મહમૂદ બેગડાની વાતને દંતકથા તરીકે રજૂ કરે છે. અહીં તે ગાથાને દેખાતી ઇમારત અને 15મી સદીના ઐતિહાસિક સંદર્ભથી અલગ રાખવામાં આવી છે."
        }
      ],
      "faq": [
        {
          "q": "અડાલજની વાવ ક્યાં આવેલી છે?",
          "a": "Adalaj Rd, અડાલજ, ગુજરાત 382421, ભારત. નકશાનો પિન 23.1668106, 72.5800895 છે; પહોંચીને મુલાકાતીઓનો પ્રવેશ ચકાસો."
        },
        {
          "q": "શું પાંચેય માળ પર જઈ શકાય?",
          "a": "પાંચ માળ સ્થાપત્યનું વર્ણન છે, જાહેર પ્રવેશની ખાતરી નથી. હાલના માર્ગ, અવરોધ અને કર્મચારીઓની સૂચના અનુસરો."
        }
      ],
      "related": [
        {
          "label": "મુલાકાત સમય",
          "href": "/timings/"
        },
        {
          "label": "પ્રવેશ ફી",
          "href": "/entry-fee/"
        },
        {
          "label": "પહોંચ",
          "href": "/transport/"
        }
      ]
    }
  },
  "en": {
    "timings": {
      "eyebrow": "Visit info",
      "h1": "Adalaj Stepwell timings: opening hours and last-entry checks",
      "intro": "Google Maps listed 08:00–18:00 on all seven days when checked on 23 October 2026. This is a third-party snapshot, not confirmation of today’s last admission or access to every level. Verify the ticket and entrance notice before departure.",
      "blocks": [
        {
          "h": "Visiting hours",
          "p": "Google Maps listed 08:00–18:00 on all seven days when checked on 23 October 2026. This is a third-party snapshot, not confirmation of today’s last admission or access to every level. Verify the ticket and entrance notice before departure."
        },
        {
          "h": "Before leaving",
          "p": "Incredible India recommends October–March for a visit. Check the actual forecast before leaving; shade in the stepwell does not guarantee protection from heat or rain."
        },
        {
          "h": "Architecture",
          "p": "Five storeys describes the architecture, not guaranteed public access. Follow the current route, barriers and staff instructions."
        }
      ],
      "faq": [
        {
          "q": "What are the visiting hours?",
          "a": "Google Maps listed 08:00–18:00 on all seven days when checked on 23 October 2026. This is a third-party snapshot, not confirmation of today’s last admission or access to every level. Verify the ticket and entrance notice before departure."
        },
        {
          "q": "Can I access all five levels?",
          "a": "Five storeys describes the architecture, not guaranteed public access. Follow the current route, barriers and staff instructions."
        }
      ],
      "related": [
        {
          "label": "Entry fee",
          "href": "/en/entry-fee/"
        },
        {
          "label": "Getting there",
          "href": "/en/transport/"
        },
        {
          "label": "History",
          "href": "/en/history/"
        }
      ]
    },
    "entry-fee": {
      "eyebrow": "Visit info",
      "h1": "Adalaj Stepwell entry fee: ASI tickets and visitor categories",
      "intro": "Use the ASI ticket portal and select the Adalaj/Rudabai monument and visit date. ASI fees can distinguish Indian, SAARC/BIMSTEC and other foreign visitors; check the applicable nationality, age exemption and electronic or counter payment conditions. This guide has not independently confirmed a current Adalaj rupee tariff.",
      "blocks": [
        {
          "h": "Entry fee and categories",
          "p": "Use the ASI ticket portal and select the Adalaj/Rudabai monument and visit date. ASI fees can distinguish Indian, SAARC/BIMSTEC and other foreign visitors; check the applicable nationality, age exemption and electronic or counter payment conditions. This guide has not independently confirmed a current Adalaj rupee tariff."
        },
        {
          "h": "Currency and separate services",
          "p": "A currency-converted Maps amount is not a universal Indian ticket price. Check the final official selection in rupees; transport, guides and commercial tours are separate products."
        },
        {
          "h": "Photography rules",
          "p": "Ask at the entrance about current camera, tripod and commercial photography conditions. A general entry ticket does not establish permission for every type of filming."
        }
      ],
      "faq": [
        {
          "q": "What is the entry fee?",
          "a": "Use the ASI ticket portal and select the Adalaj/Rudabai monument and visit date. ASI fees can distinguish Indian, SAARC/BIMSTEC and other foreign visitors; check the applicable nationality, age exemption and electronic or counter payment conditions. This guide has not independently confirmed a current Adalaj rupee tariff."
        },
        {
          "q": "Is this the official Adalaj Stepwell website?",
          "a": "Independent visitor guide; not the monument operator, ASI or an official government website."
        }
      ],
      "related": [
        {
          "label": "Visiting hours",
          "href": "/en/timings/"
        },
        {
          "label": "Getting there",
          "href": "/en/transport/"
        },
        {
          "label": "History",
          "href": "/en/history/"
        }
      ]
    },
    "transport": {
      "eyebrow": "Transport",
      "h1": "How to reach Adalaj Stepwell from Ahmedabad and Gandhinagar",
      "intro": "Adalaj Rd, Adalaj, Gujarat 382421, India. The map pin is 23.1668106, 72.5800895; confirm the visitor entrance on arrival.",
      "blocks": [
        {
          "h": "Location and road journey",
          "p": "Adalaj Rd, Adalaj, Gujarat 382421, India. The map pin is 23.1668106, 72.5800895; confirm the visitor entrance on arrival."
        },
        {
          "h": "Airport connection",
          "p": "Ahmedabad’s Sardar Vallabhbhai Patel International Airport is the main air gateway described by Gujarat Tourism. Plan your road connection to Adalaj using a current route, not a guaranteed travel time."
        },
        {
          "h": "Rail connection",
          "p": "Ahmedabad and Gandhinagar are rail gateways for the area. Confirm your actual station, train and onward road connection before booking; do not assume a direct bus from every station."
        },
        {
          "h": "Location and road journey",
          "p": "Set the destination to Adalaj Stepwell/Rudabai Stepwell, Adalaj. Route distance depends on your starting point. Confirm drop-off and the return journey; we do not publish unverified bus numbers or fixed taxi fares."
        },
        {
          "h": "Akshardham onward trip",
          "p": "For an onward journey to Akshardham, calculate the road route from the stepwell to the exact temple entrance. Straight-line distances and general city distances do not give a reliable journey time."
        }
      ],
      "faq": [
        {
          "q": "Where is Adalaj Stepwell?",
          "a": "Adalaj Rd, Adalaj, Gujarat 382421, India. The map pin is 23.1668106, 72.5800895; confirm the visitor entrance on arrival."
        },
        {
          "q": "Can I access all five levels?",
          "a": "Check parking, toilets, drinking water and step-free access directly before travel, especially if these are essential to your visit. The historic stairs can make access difficult; this guide does not certify wheelchair access or a particular facility."
        }
      ],
      "related": [
        {
          "label": "Visiting hours",
          "href": "/en/timings/"
        },
        {
          "label": "Entry fee",
          "href": "/en/entry-fee/"
        },
        {
          "label": "History",
          "href": "/en/history/"
        }
      ]
    },
    "history": {
      "eyebrow": "History",
      "h1": "Adalaj Stepwell history: Rudabai, dates and architecture",
      "intro": "Gujarat Tourism describes a 15th-century stepwell with five storeys and Indo-Islamic architecture. Incredible India places the beginning of construction in 1498 and associates the monument with Queen Rudabai.",
      "blocks": [
        {
          "h": "History and dates",
          "p": "Gujarat Tourism describes a 15th-century stepwell with five storeys and Indo-Islamic architecture. Incredible India places the beginning of construction in 1498 and associates the monument with Queen Rudabai."
        },
        {
          "h": "Architecture",
          "p": "Gujarat Tourism describes three entrances, an octagonal opening and carved pillars supporting five storeys. These features combine local and Islamic design traditions. Five storeys does not mean every level is open to visitors."
        },
        {
          "h": "Rudabai’s legend",
          "p": "Incredible India recounts the story of Queen Rudabai and Sultan Mahmud Begada as a legend. This guide distinguishes that narrative from the visible building and its documented late-15th-century origins."
        }
      ],
      "faq": [
        {
          "q": "Where is Adalaj Stepwell?",
          "a": "Adalaj Rd, Adalaj, Gujarat 382421, India. The map pin is 23.1668106, 72.5800895; confirm the visitor entrance on arrival."
        },
        {
          "q": "Can I access all five levels?",
          "a": "Five storeys describes the architecture, not guaranteed public access. Follow the current route, barriers and staff instructions."
        }
      ],
      "related": [
        {
          "label": "Visiting hours",
          "href": "/en/timings/"
        },
        {
          "label": "Entry fee",
          "href": "/en/entry-fee/"
        },
        {
          "label": "Getting there",
          "href": "/en/transport/"
        }
      ]
    }
  },
  "hi": {
    "timings": {
      "eyebrow": "भ्रमण जानकारी",
      "h1": "अडालज स्टेपवेल समय: खुलने और अंतिम प्रवेश की जाँच",
      "intro": "23 अक्टूबर 2026 की जाँच में Google Maps पर सातों दिन 08:00–18:00 दिखा। यह तीसरे पक्ष का तारीख वाला संदर्भ है, आज के अंतिम प्रवेश या सभी स्तरों के खुलने की पुष्टि नहीं। निकलने से पहले टिकट और प्रवेश सूचना जाँचें।",
      "blocks": [
        {
          "h": "दर्शन का समय",
          "p": "23 अक्टूबर 2026 की जाँच में Google Maps पर सातों दिन 08:00–18:00 दिखा। यह तीसरे पक्ष का तारीख वाला संदर्भ है, आज के अंतिम प्रवेश या सभी स्तरों के खुलने की पुष्टि नहीं। निकलने से पहले टिकट और प्रवेश सूचना जाँचें।"
        },
        {
          "h": "निकलने से पहले",
          "p": "Incredible India अक्टूबर–मार्च में यात्रा की सलाह देता है। निकलने से पहले वास्तविक पूर्वानुमान देखें; बावड़ी की छाया गर्मी या बारिश से सुरक्षा की गारंटी नहीं है।"
        },
        {
          "h": "स्थापत्य",
          "p": "पाँच मंज़िलें स्थापत्य का वर्णन है, सार्वजनिक प्रवेश की गारंटी नहीं। वर्तमान रास्ते, अवरोध और कर्मचारियों के निर्देश मानें।"
        }
      ],
      "faq": [
        {
          "q": "दर्शन का समय क्या है?",
          "a": "23 अक्टूबर 2026 की जाँच में Google Maps पर सातों दिन 08:00–18:00 दिखा। यह तीसरे पक्ष का तारीख वाला संदर्भ है, आज के अंतिम प्रवेश या सभी स्तरों के खुलने की पुष्टि नहीं। निकलने से पहले टिकट और प्रवेश सूचना जाँचें।"
        },
        {
          "q": "क्या सभी पाँच स्तर खुले हैं?",
          "a": "पाँच मंज़िलें स्थापत्य का वर्णन है, सार्वजनिक प्रवेश की गारंटी नहीं। वर्तमान रास्ते, अवरोध और कर्मचारियों के निर्देश मानें।"
        }
      ],
      "related": [
        {
          "label": "प्रवेश शुल्क",
          "href": "/hi/entry-fee/"
        },
        {
          "label": "पहुँच",
          "href": "/hi/transport/"
        },
        {
          "label": "इतिहास",
          "href": "/hi/history/"
        }
      ]
    },
    "entry-fee": {
      "eyebrow": "भ्रमण जानकारी",
      "h1": "अडालज स्टेपवेल प्रवेश शुल्क: ASI टिकट और यात्री श्रेणियाँ",
      "intro": "ASI टिकट पोर्टल में अडालज/रुदाबाई स्मारक और यात्रा की तारीख चुनें। ASI शुल्क भारतीय, SAARC/BIMSTEC और अन्य विदेशी यात्रियों के लिए अलग हो सकते हैं; लागू राष्ट्रीयता, आयु छूट और इलेक्ट्रॉनिक या काउंटर भुगतान की शर्तें जाँचें। इस गाइड ने अडालज की वर्तमान रुपये वाली दर की स्वतंत्र पुष्टि नहीं की है।",
      "blocks": [
        {
          "h": "प्रवेश शुल्क और श्रेणियाँ",
          "p": "ASI टिकट पोर्टल में अडालज/रुदाबाई स्मारक और यात्रा की तारीख चुनें। ASI शुल्क भारतीय, SAARC/BIMSTEC और अन्य विदेशी यात्रियों के लिए अलग हो सकते हैं; लागू राष्ट्रीयता, आयु छूट और इलेक्ट्रॉनिक या काउंटर भुगतान की शर्तें जाँचें। इस गाइड ने अडालज की वर्तमान रुपये वाली दर की स्वतंत्र पुष्टि नहीं की है।"
        },
        {
          "h": "मुद्रा और अलग सेवाएँ",
          "p": "Maps की मुद्रा-परिवर्तित राशि भारत में सबके टिकट की एक समान कीमत नहीं है। आधिकारिक चयन की अंतिम रुपये वाली राशि जाँचें; परिवहन, गाइड और व्यावसायिक टूर अलग सेवाएँ हैं।"
        },
        {
          "h": "फ़ोटोग्राफ़ी नियम",
          "p": "कैमरा, ट्राइपॉड और व्यावसायिक फ़ोटोग्राफ़ी के वर्तमान नियम प्रवेश पर पूछें। सामान्य प्रवेश टिकट हर प्रकार की शूटिंग की अनुमति नहीं देता।"
        }
      ],
      "faq": [
        {
          "q": "प्रवेश शुल्क कितना है?",
          "a": "ASI टिकट पोर्टल में अडालज/रुदाबाई स्मारक और यात्रा की तारीख चुनें। ASI शुल्क भारतीय, SAARC/BIMSTEC और अन्य विदेशी यात्रियों के लिए अलग हो सकते हैं; लागू राष्ट्रीयता, आयु छूट और इलेक्ट्रॉनिक या काउंटर भुगतान की शर्तें जाँचें। इस गाइड ने अडालज की वर्तमान रुपये वाली दर की स्वतंत्र पुष्टि नहीं की है।"
        },
        {
          "q": "क्या यह अडालज स्टेपवेल की आधिकारिक वेबसाइट है?",
          "a": "स्वतंत्र आगंतुक गाइड; स्मारक संचालक, ASI या आधिकारिक सरकारी वेबसाइट नहीं।"
        }
      ],
      "related": [
        {
          "label": "मुलाकात समय",
          "href": "/hi/timings/"
        },
        {
          "label": "पहुँच",
          "href": "/hi/transport/"
        },
        {
          "label": "इतिहास",
          "href": "/hi/history/"
        }
      ]
    },
    "transport": {
      "eyebrow": "परिवहन",
      "h1": "अहमदाबाद और गांधीनगर से अडालज स्टेपवेल कैसे पहुँचें",
      "intro": "Adalaj Rd, अडालज, गुजरात 382421, भारत। मानचित्र पिन 23.1668106, 72.5800895 है; पहुँचकर आगंतुक प्रवेश जाँचें।",
      "blocks": [
        {
          "h": "स्थान और सड़क मार्ग",
          "p": "Adalaj Rd, अडालज, गुजरात 382421, भारत। मानचित्र पिन 23.1668106, 72.5800895 है; पहुँचकर आगंतुक प्रवेश जाँचें।"
        },
        {
          "h": "हवाई अड्डा संपर्क",
          "p": "गुजरात पर्यटन अहमदाबाद के सरदार वल्लभभाई पटेल अंतरराष्ट्रीय हवाई अड्डे का उल्लेख करता है। वहाँ से अडालज का वर्तमान सड़क मार्ग जाँचें; यात्रा का समय निश्चित नहीं है।"
        },
        {
          "h": "रेल संपर्क",
          "p": "अहमदाबाद और गांधीनगर क्षेत्र के रेल संपर्क हैं। बुकिंग से पहले वास्तविक स्टेशन, ट्रेन और आगे का सड़क संपर्क जाँचें; हर स्टेशन से सीधी बस न मानें।"
        },
        {
          "h": "स्थान और सड़क मार्ग",
          "p": "गंतव्य में Adalaj Stepwell/Rudabai Stepwell, Adalaj चुनें। दूरी शुरुआती स्थान पर निर्भर है। उतरने की जगह और वापसी की योजना जाँचें; यहाँ अपुष्ट बस नंबर या तय टैक्सी किराया नहीं दिया जाता।"
        },
        {
          "h": "अक्षरधाम की अगली यात्रा",
          "p": "अक्षरधाम जाने के लिए बावड़ी से मंदिर के सही प्रवेश तक सड़क मार्ग निकालें। सीधी रेखा की दूरी या शहर की सामान्य दूरी से यात्रा समय तय नहीं होता।"
        }
      ],
      "faq": [
        {
          "q": "अडालज की वाव कहाँ है?",
          "a": "Adalaj Rd, अडालज, गुजरात 382421, भारत। मानचित्र पिन 23.1668106, 72.5800895 है; पहुँचकर आगंतुक प्रवेश जाँचें।"
        },
        {
          "q": "क्या सभी पाँच स्तर खुले हैं?",
          "a": "पार्किंग, शौचालय, पेयजल और बिना सीढ़ियों के प्रवेश की सीधे पुष्टि करें, विशेषकर यदि ये आवश्यक हों। ऐतिहासिक सीढ़ियाँ कठिनाई पैदा कर सकती हैं; गाइड व्हीलचेयर प्रवेश या किसी सुविधा की गारंटी नहीं देता।"
        }
      ],
      "related": [
        {
          "label": "मुलाकात समय",
          "href": "/hi/timings/"
        },
        {
          "label": "प्रवेश शुल्क",
          "href": "/hi/entry-fee/"
        },
        {
          "label": "इतिहास",
          "href": "/hi/history/"
        }
      ]
    },
    "history": {
      "eyebrow": "इतिहास",
      "h1": "अडालज स्टेपवेल इतिहास: रुदाबाई, तारीखें और स्थापत्य",
      "intro": "गुजरात पर्यटन इसे 15वीं सदी की पाँच मंज़िला बावड़ी और भारतीय-इस्लामी स्थापत्य का उदाहरण बताता है। Incredible India निर्माण की शुरुआत 1498 में बताता है और स्मारक को रानी रुदाबाई से जोड़ता है।",
      "blocks": [
        {
          "h": "इतिहास और तारीखें",
          "p": "गुजरात पर्यटन इसे 15वीं सदी की पाँच मंज़िला बावड़ी और भारतीय-इस्लामी स्थापत्य का उदाहरण बताता है। Incredible India निर्माण की शुरुआत 1498 में बताता है और स्मारक को रानी रुदाबाई से जोड़ता है।"
        },
        {
          "h": "स्थापत्य",
          "p": "गुजरात पर्यटन तीन प्रवेश, अष्टकोणीय खुला भाग और पाँच मंज़िलों को सहारा देते नक्काशीदार स्तंभ बताता है। स्थानीय और इस्लामी शैली साथ दिखती हैं। पाँच मंज़िल होने का अर्थ हर स्तर पर सार्वजनिक प्रवेश नहीं है।"
        },
        {
          "h": "रुदाबाई की किंवदंती",
          "p": "Incredible India रानी रुदाबाई और सुल्तान महमूद बेगड़ा की कहानी को किंवदंती के रूप में प्रस्तुत करता है। यह गाइड उस कथा को इमारत और 15वीं सदी के ऐतिहासिक संदर्भ से अलग रखता है।"
        }
      ],
      "faq": [
        {
          "q": "अडालज की वाव कहाँ है?",
          "a": "Adalaj Rd, अडालज, गुजरात 382421, भारत। मानचित्र पिन 23.1668106, 72.5800895 है; पहुँचकर आगंतुक प्रवेश जाँचें।"
        },
        {
          "q": "क्या सभी पाँच स्तर खुले हैं?",
          "a": "पाँच मंज़िलें स्थापत्य का वर्णन है, सार्वजनिक प्रवेश की गारंटी नहीं। वर्तमान रास्ते, अवरोध और कर्मचारियों के निर्देश मानें।"
        }
      ],
      "related": [
        {
          "label": "मुलाकात समय",
          "href": "/hi/timings/"
        },
        {
          "label": "प्रवेश शुल्क",
          "href": "/hi/entry-fee/"
        },
        {
          "label": "पहुँच",
          "href": "/hi/transport/"
        }
      ]
    }
  }
};

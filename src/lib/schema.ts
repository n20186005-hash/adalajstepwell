import {
  ATTRACTION_FULL_NAME, ATTRACTION_SHORT_NAME, ATTRACTION_GUJARATI_NAME,
  CITY_NAME, STATE_PROVINCE, POSTAL_CODE, COUNTRY_CODE_2LETTER,
  LATITUDE, LONGITUDE, MAPS_SHARE_URL, GOVT_TOURISM_URL, RATING_VALUE, REVIEW_COUNT,
} from '../data/site';
import type { Locale } from '../i18n';
import { home, type FaqItem } from '../content/translations';

const ATTRACTION_NAME: Record<Locale, string> = {
  gu: ATTRACTION_GUJARATI_NAME,
  en: ATTRACTION_FULL_NAME,
  hi: 'अडालज स्टेपवेल',
};

export function attractionSchema(locale: Locale, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    name: ATTRACTION_NAME[locale],
    alternateName: [ATTRACTION_FULL_NAME, ATTRACTION_SHORT_NAME, 'Adalaj ni Vav', 'Rudabai Stepwell'],
    description: home[locale].heroLead,
    url: pageUrl,
    '@id': pageUrl + '#attraction',
    hasMap: MAPS_SHARE_URL,
    sameAs: [MAPS_SHARE_URL, GOVT_TOURISM_URL, 'https://www.gujarattourism.com/'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Adalaj Rd',
      addressLocality: CITY_NAME,
      addressRegion: STATE_PROVINCE,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE_2LETTER,
    },
    geo: { '@type': 'GeoCoordinates', latitude: LATITUDE, longitude: LONGITUDE },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING_VALUE,
      reviewCount: REVIEW_COUNT,
      bestRating: '5',
    },
  };
}

export function breadcrumbSchema(homeUrl: string, pageUrl: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: ATTRACTION_FULL_NAME, item: homeUrl },
      { '@type': 'ListItem', position: 2, name, item: pageUrl },
    ],
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

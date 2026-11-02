// 单景点 SEO 实体绑定配置（变量表落地）
// 仅替换本文件中的值即可更新全站实体信息，避免在页面中散落硬编码。
// 对应模板变量：{{DOMAIN_NAME}} / {{ATTRACTION_FULL_NAME}} / {{CITY_NAME}} ...

export const DOMAIN_NAME = 'adalajstepwell.com';

export const ATTRACTION_FULL_NAME = 'The Adalaj Stepwell';
export const ATTRACTION_SHORT_NAME = 'Adalaj Stepwell';
export const ATTRACTION_GUJARATI_NAME = 'અડાલજની વાવ';

export const CITY_NAME = 'Adalaj';
export const STATE_PROVINCE = 'Gujarat';
export const COUNTRY_NAME = 'India';
export const COUNTRY_CODE_2LETTER = 'IN';
export const POSTAL_CODE = '382421';

export const LATITUDE = 23.1668106;
export const LONGITUDE = 72.5800895;

export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/L6jtyGBiHo9eYhdN9';
export const MAPS_EMBED_SRC =
  'https://maps.google.com/maps?q=23.1668106,72.5800895&z=16&output=embed';

export const NEARBY_LANDMARK_1 = 'Akshardham, Gandhinagar';
export const NEARBY_LANDMARK_2 = 'Trimandir, Adalaj';

export const GOVT_TOURISM_URL =
  'https://www.incredibleindia.gov.in/en/gujarat/gandhinagar/adalaj-stepwell';

// 评分快照（用户提供的 Google Maps 数据，可能变动）
export const RATING_VALUE = '4.5';
export const REVIEW_COUNT = '31359';

// SEO 站点名格式：景点名称 + 城市 + 旅游指南
export const SITE_NAME_GU = 'અડાલજની વાવ (Adalaj Stepwell) અડાલજ — પ્રવાસ માર્ગદર્શિકા';
export const SITE_NAME_EN = 'Adalaj Stepwell Adalaj — Travel Guide';
export const SITE_NAME_HI = 'अडालज स्टेपवेल अडालज — यात्रा गाइड';

import type { Locale } from '../i18n';
export const SITE_NAME: Record<Locale, string> = {
  gu: SITE_NAME_GU,
  en: SITE_NAME_EN,
  hi: SITE_NAME_HI,
};

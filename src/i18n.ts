// 三语路由与 hreflang 核心：gu(默认, /) / en(/en/) / hi(/hi/)
export const locales = ['gu', 'en', 'hi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'gu';

const prefix: Record<Locale, string> = { gu: '', en: '/en', hi: '/hi' };

export const htmlLang: Record<Locale, string> = {
  gu: 'gu-IN',
  en: 'en-IN',
  hi: 'hi-IN',
};

export const ogLocale: Record<Locale, string> = {
  gu: 'gu_IN',
  en: 'en_IN',
  hi: 'hi_IN',
};

export const localeLabel: Record<Locale, string> = {
  gu: 'ગુજરાતી',
  en: 'English',
  hi: 'हिन्दी',
};

// path 为不含语言前缀的站点内路径，如 '/' 或 '/timings'
export function localizedPath(path: string, locale: Locale): string {
  const p = prefix[locale];
  if (path === '/') return p === '' ? '/' : `${p}/`;
  return `${p}${path}`;
}

// 从带语言前缀的完整路径反推基础路径（去前缀）
export function stripLocale(path: string): string {
  for (const l of ['en', 'hi'] as const) {
    const pre = `/${l}`;
    if (path === pre) return '/';
    if (path.startsWith(`${pre}/`)) return path.slice(pre.length) || '/';
  }
  return path;
}

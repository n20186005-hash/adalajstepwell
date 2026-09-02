// Weather data layer — Open-Meteo (free, no API key) fetched server-side
// and cached in the Cloudflare Cache API for CACHE_TTL_SECONDS.

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
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
  '&timezone=auto&forecast_days=5';

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

// WMO weather codes → Gujarati descriptions (Open-Meteo).
const WMO_LABELS: Record<number, string> = {
  0: 'સાફ આકાશ',
  1: 'મોટે ભાગે સાફ',
  2: 'અંશતઃ વાદળછાયું',
  3: 'વાદળછાયું',
  45: 'ધુમ્મસ',
  48: 'ધુમ્મસ',
  51: 'હળવો ઝરમર વરસાદ',
  53: 'ઝરમર વરસાદ',
  55: 'ઘટ્ટ ઝરમર વરસાદ',
  56: 'ઠંડો ઝરમર વરસાદ',
  57: 'ઠંડો ઝરમર વરસાદ',
  61: 'હળવો વરસાદ',
  63: 'મધ્યમ વરસાદ',
  65: 'ભારે વરસાદ',
  66: 'ઠંડો વરસાદ',
  67: 'ભારે ઠંડો વરસાદ',
  71: 'હળવો બરફવર્ષા',
  73: 'મધ્યમ બરફવર્ષા',
  75: 'ભારે બરફવર્ષા',
  77: 'બરફના દાણા',
  80: 'હળવા વરસાદી છાંટા',
  81: 'મધ્યમ વરસાદી છાંટા',
  82: 'ભારે વરસાદી છાંટા',
  85: 'હળવા બરફીલા છાંટા',
  86: 'ભારે બરફીલા છાંટા',
  95: 'વીજળી સાથે વરસાદ',
  96: 'કરા સાથે વીજળી',
  99: 'કરા સાથે તીવ્ર વીજળી'
};

export type WeatherGroup = 'sun' | 'partly' | 'cloud' | 'fog' | 'rain' | 'snow' | 'storm';

export function wmoLabel(code: number): string {
  return WMO_LABELS[code] ?? 'વાદળછાયું';
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

const WEEKDAY_GU = ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર'];

export function weekdayLabel(dateStr: string): string {
  const d = new Date(`${dateStr}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? dateStr : WEEKDAY_GU[d.getUTCDay()];
}

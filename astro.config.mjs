import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// એકમાત્ર સાઇટ URL સેટિંગ. ડોમેન નક્કી થયા પછી ફક્ત અહીં મૂકો.
const SITE = 'https://adalajstepwell.com';
const site = SITE.trim() || undefined;

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare(),
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});

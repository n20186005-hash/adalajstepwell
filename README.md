# અડાલજની વાવ પ્રવાસ માર્ગદર્શિકા

ગુજરાતી ભાષામાં અડાલજની વાવ (Rudabai Stepwell), અડાલજ, ગાંધીનગર જિલ્લો માટે સ્વતંત્ર નફારહિત પ્રવાસ માહિતી સાઇટ.

## ટેક સ્ટેક
- Astro 7.2.9
- @astrojs/cloudflare 14.2.5
- Tailwind CSS 4.3.3 + @tailwindcss/vite 4.3.3
- TypeScript 6.0.3 + @astrojs/check 0.9.10
- Wrangler 4.127.1
- pnpm 11.24.0
- Node.js 24.20.0 LTS

## ડોમેન
`astro.config.mjs` ના `SITE` constant માં જ production URL મૂકો. ખાલી હોય ત્યારે canonical absolute URL/sitemap છોડવામાં આવે છે અને buildમાં placeholder domain નાખાતો નથી.

## ચકાસણી
```bash
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm audit:source
pnpm check
pnpm build
```

## પેજ
- `/` મુખ્ય પ્રવાસ પાનું
- `/privacy/` ગોપનીયતા નીતિ
- `/terms/` સેવા શરતો
- `/cookies/` Cookie સેટિંગ્સ

## GA4
`G-HXM22WWPKP` ફક્ત વિશ્લેષણ Cookie માટે વપરાશકર્તા સંમતિ બાદ લોડ થાય છે.

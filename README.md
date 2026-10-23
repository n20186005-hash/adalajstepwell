# અડાલજની વાવ · Adalaj Stepwell visitor guide

Independent visitor information for Adalaj/Rudabai Stepwell in Adalaj, Gandhinagar district, Gujarat. The guide is not the monument operator or an official government website.

Gujarati is served at `/`, English at `/en/`, and Hindi at `/hi/`. Each language has home, timings, entry-fee, transport and history pages. Existing legal and cookie settings pages are shared in Gujarati. Linked photo authors and licences are at `/photo-credits/` and in `PHOTO-CREDITS.md`.

Astro7.2.9, Cloudflare adapter14.2.5, Tailwind4.3.3, TypeScript6.0.3 and Wrangler4.127.1 are pinned. The declared runtime is Node24.20.0; package manager pnpm11.24.0.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm audit:source
corepack pnpm check
corepack pnpm build
npx wrangler deploy --dry-run
```

The Cloudflare project is `adalajstepwell`. The default generated Worker entry preserves server-rendered weather and guards the apex HTTP protocol before asset handling. Dry-run is local verification; native HTTP and browser checks remain separate.

Google Analytics `G-HXM22WWPKP` uses the existing analytics choice in browser storage. Cookie settings apply grants only after storage readback, and withdrawal immediately denies this page even when saving fails. Cloudflare hosting performance measurement is separate; see `/privacy/`.

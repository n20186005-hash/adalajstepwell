# ડિલિવરી ચકાસણી

## સ્થિર ચકાસણીઓ
- package.json માં direct dependency exact versions છે.
- pnpm-lock.yaml મૂળ importer આ જ versions સાથે મેળ ખાતો છે.
- TypeScript 6.0.3 @astrojs/check 0.9.10 ના `^5 || ^6` peer range માં છે.
- એકમાત્ર site URL setting `astro.config.mjs` નો `SITE` છે; ખાલી હોય ત્યારે sitemap integration બંધ.
- `pnpm-workspace.yaml` નથી.
- મુખ્ય UI ભાષા Gujarati (`gu-IN`) છે; Google Maps iframe Gujarati/India locale પર બદલાયેલ છે.
- Privacy, Terms અને Cookie પૃષ્ઠો અલગ routes છે; popup નથી.
- JSON-LD માં TouristAttraction/LocalBusiness, FAQPage, સરનામું, coordinates, opening hours અને rating છે.

## પર્યાવરણ મર્યાદા
આ sandboxમાંથી `registry.npmjs.org` નું DNS/HTTPS ઉપલબ્ધ નથી. Corepack pnpm ડાઉનલોડ પહેલાં જ નિષ્ફળ થાય છે; તેથી clean install, `pnpm check` અને `pnpm build` ને આ પર્યાવરણમાં સાચા અર્થમાં pass તરીકે પ્રમાણિત કરી શકાતા નથી. જૂઠું “passed” લખવામાં આવ્યું નથી.

તે જ રીતે Wikimedia Commons binary download containerમાંથી અટકેલો હોવાથી real-photo source URLs ઓળખી/લાઇસન્સ ચકાસી શકાયા છતાં JPG binaries સ્થાનિક રીતે fetch કરી શકાઈ નથી. આ કારણથી self-contained-photo આવશ્યકતા આ ZIPમાં પૂર્ણ નથી.

## 2026-09-02 final local audit

- `node scripts/audit-source.mjs`: PASS.
- favicon PNG sizes 16, 32, 180 and matching SVG/logo: present.
- `pnpm-lock.yaml` root importer matches exact direct dependency versions in `package.json`.
- No `pnpm-workspace.yaml` is present.
- Site source contains no placeholder-domain or browser-extension URL tokens.
- The Google Maps embed is localized to Gujarati / India.

### Clean install attempt
`CI=1 corepack pnpm install --frozen-lockfile` was actually attempted after deleting `node_modules`, `dist`, and `.astro`. Corepack could not download the pinned pnpm package because this sandbox cannot reach `registry.npmjs.org`; see `CI-INSTALL-ATTEMPT.log`. Consequently `pnpm check` and `pnpm build` cannot honestly be marked as passed in this environment.

# Local verification

Use the pinned package manager with `corepack pnpm install --frozen-lockfile`, `corepack pnpm check`, `corepack pnpm audit:source`, `corepack pnpm build`, then `npx wrangler deploy --dry-run`. This guide does not establish production acceptance. Native HTTP, mobile/desktop navigation and hosting analytics behavior require separate checks.

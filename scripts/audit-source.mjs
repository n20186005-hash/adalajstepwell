import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('..', import.meta.url));
const forbidden = ['example' + '.com', 'local' + 'host', 'chrome-' + 'extension://'];
const skip = new Set(['pnpm-lock.yaml', 'VERIFICATION.md', 'scripts/audit-source.mjs']);
const exts = new Set(['.astro','.js','.mjs','.ts','.json','.jsonc','.css','.html','.md','.svg']);
function walk(dir){ return readdirSync(dir).flatMap(n=>{const p=join(dir,n); return statSync(p).isDirectory()?walk(p):[p]}); }
let failed=false;
for(const p of walk(root)){
  const rel=relative(root,p).replaceAll('\\','/');
  if(skip.has(rel) || rel.startsWith('node_modules/') || rel.startsWith('dist/') || rel.startsWith('.astro/')) continue;
  if(![...exts].some(e=>rel.endsWith(e))) continue;
  const s=readFileSync(p,'utf8');
  for(const f of forbidden){ if(s.includes(f)){ console.error(`forbidden token ${f} in ${rel}`); failed=true; } }
}
if(failed) process.exit(1);
console.log('source audit passed');

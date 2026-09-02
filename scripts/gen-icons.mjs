// PWA icons generator — pure Node (zlib), no dependencies.
// Draws 5 descending octagon "levels" (the stepwell) in copper/dark on cream.
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = join(root, 'public', 'icons');
mkdirSync(outDir, { recursive: true });

const BG = [247, 240, 228];
const COPPER = [165, 93, 53];
const DARK = [43, 35, 29];

function crc32(buf) {
  let t = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    t ^= buf[i];
    for (let k = 0; k < 8; k++) t = (t >>> 1) ^ (t & 1 ? 0xedb88320 : 0);
  }
  return (t ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const t = Buffer.from(type, 'ascii');
  const c = Buffer.alloc(4); c.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, c]);
}
function ringLevel(dx, dy, maxR) {
  const N = 5;
  for (let i = 1; i <= N; i++) {
    const r = (i / N) * maxR;
    if (dx <= r && dy <= r && dx + dy <= r * 1.45) return N - i;
  }
  return -1;
}
function png(size) {
  const raw = Buffer.alloc(size * (size * 4 + 1));
  const cx = (size - 1) / 2, cy = (size - 1) / 2, maxR = size / 2;
  let o = 0;
  for (let y = 0; y < size; y++) {
    raw[o++] = 0;
    for (let x = 0; x < size; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (const [sx, sy] of [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]]) {
        const dx = Math.abs(x + sx - cx), dy = Math.abs(y + sy - cy);
        const lv = ringLevel(dx, dy, maxR);
        const col = lv < 0 ? BG : (lv % 2 === 0 ? DARK : COPPER);
        r += col[0]; g += col[1]; b += col[2]; a += 255;
      }
      raw[o++] = r / 4; raw[o++] = g / 4; raw[o++] = b / 4; raw[o++] = a / 4;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}
writeFileSync(join(outDir, 'icon-192.png'), png(192));
writeFileSync(join(outDir, 'icon-512.png'), png(512));
console.log('PWA icons generated: icon-192.png, icon-512.png');

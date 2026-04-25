// Zero-dependency PNG icon generator for Neon Break PWA.
// Uses only Node.js built-ins: fs, zlib.
import { writeFileSync } from 'fs';
import { deflateSync } from 'zlib';

// CRC32 lookup table
const CRC_TABLE = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let j = 0; j < 8; j++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  CRC_TABLE[i] = c;
}
function crc32(buf) {
  let crc = 0xffffffff;
  for (const b of buf) crc = CRC_TABLE[(crc ^ b) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const t = Buffer.from(type, 'ascii');
  const len = Buffer.allocUnsafe(4); len.writeUInt32BE(data.length);
  const crcBuf = Buffer.allocUnsafe(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crcBuf]);
}

function encodePNG(width, height, pixelFn) {
  // Build raw filtered image data (filter type 0 = None for each row)
  const stride = 1 + width * 3; // filter byte + RGB
  const raw = Buffer.allocUnsafe(height * stride);
  for (let y = 0; y < height; y++) {
    raw[y * stride] = 0; // filter type None
    for (let x = 0; x < width; x++) {
      const [r, g, b] = pixelFn(x, y, width, height);
      const i = y * stride + 1 + x * 3;
      raw[i] = r; raw[i + 1] = g; raw[i + 2] = b;
    }
  }

  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0; // 8-bit RGB

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG sig
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0))
  ]);
}

// ──────────────────────────────────────────────────────────────────────────────
// Icon design: neon brick-breaker motif
//   • dark #05060d background
//   • 3×5 grid of pink/cyan bricks (top 68% of icon)
//   • cyan paddle bar (bottom 15%)
//   • white ball circle just above paddle
// ──────────────────────────────────────────────────────────────────────────────
const BG   = [5, 6, 13];
const PINK = [255, 58, 214];
const CYAN = [32, 227, 255];
const WHT  = [230, 234, 255];

function iconPixel(x, y, w, h) {
  const nx = x / w;
  const ny = y / h;

  // Brick area: top 68%, 3 cols × 5 rows
  const BAT = 0.10, BAB = 0.68;
  const COLS = 3, ROWS = 5;
  const GAP  = 0.018; // normalized gap fraction per brick cell

  if (ny >= BAT && ny < BAB) {
    const bw = 1 / COLS;
    const bh = (BAB - BAT) / ROWS;
    const col = Math.floor(nx / bw);
    const rowNorm = (ny - BAT) / (BAB - BAT);
    const row = Math.floor(rowNorm * ROWS);
    const lx = (nx / bw) - col;         // 0–1 within brick cell X
    const ly = (rowNorm * ROWS) - row;  // 0–1 within brick cell Y
    const gx = GAP / bw, gy = GAP / bh;
    if (lx > gx && lx < 1 - gx && ly > gy && ly < 1 - gy) {
      const base = (row + col) % 2 === 0 ? PINK : CYAN;
      // Subtle inner-bevel: brightest at center, darker at edges
      const ex = Math.min(lx - gx, 1 - gx - lx) / (0.5 - gx);
      const ey = Math.min(ly - gy, 1 - gy - ly) / (0.5 - gy);
      const t  = 0.55 + 0.45 * Math.min(ex, ey);
      return base.map(c => Math.min(255, Math.round(c * t)));
    }
  }

  // Paddle: 78–86%, centered 18–82% width
  const PT = 0.78, PB = 0.86, PL = 0.18, PR = 0.82;
  if (ny >= PT && ny < PB && nx >= PL && nx < PR) {
    const t = 0.65 + 0.35 * Math.sin(((nx - PL) / (PR - PL)) * Math.PI);
    return CYAN.map(c => Math.round(c * t));
  }

  // Ball: small circle just above the paddle
  const BX = 0.5, BY = 0.73, BR = 0.055;
  if ((nx - BX) ** 2 + (ny - BY) ** 2 < BR * BR) return WHT;

  return BG;
}

// Maskable icons need content within the inner 80% safe zone — add padding
function maskablePixel(x, y, w, h) {
  const pad = 0.10; // 10% padding on each side
  const mx = (x / w - pad) / (1 - 2 * pad);
  const my = (y / h - pad) / (1 - 2 * pad);
  if (mx < 0 || mx > 1 || my < 0 || my > 1) return BG;
  return iconPixel(Math.round(mx * w), Math.round(my * h), w, h);
}

const sizes = [
  { file: 'public/pwa-192.png',         size: 192, fn: iconPixel },
  { file: 'public/pwa-512.png',         size: 512, fn: iconPixel },
  { file: 'public/pwa-512-maskable.png',size: 512, fn: maskablePixel },
  { file: 'public/apple-touch-icon.png',size: 180, fn: iconPixel },
];

for (const { file, size, fn } of sizes) {
  writeFileSync(file, encodePNG(size, size, fn));
  console.log(`✓ ${file}`);
}

/**
 * Generates public/assets/og-image.png (1200x630) from an inline SVG.
 * Run: node scripts/make-og-image.mjs   (sharp ships with Astro)
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/assets/og-image.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="num" x1="120" y1="380" x2="760" y2="150" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1f6f65"/>
      <stop offset="0.4" stop-color="#2E8B7F"/>
      <stop offset="0.72" stop-color="#7FC4B8"/>
      <stop offset="1" stop-color="#A9C8DF"/>
    </linearGradient>
    <radialGradient id="bg" cx="88%" cy="8%" r="90%">
      <stop offset="0" stop-color="#e9f1f2"/>
      <stop offset="0.6" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#ffffff"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="10" fill="#2E8B7F"/>
  <g font-family="Inter, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
    <text x="90" y="150" font-size="26" font-weight="600" letter-spacing="6" fill="#2E8B7F">PROJECT 100 MILLION</text>
    <text x="82" y="360" font-size="200" font-weight="800" letter-spacing="-8" fill="url(#num)">100M</text>
    <text x="90" y="452" font-size="58" font-weight="700" letter-spacing="-1.5" fill="#2E4356">Building the AI-Ready Workforce</text>
    <text x="90" y="512" font-size="30" font-weight="500" fill="#6b7a88">100 million workers AI-ready by 2030.</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);

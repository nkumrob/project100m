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
  <rect width="1200" height="630" fill="#121310"/>
  <g font-family="Bricolage Grotesque, Inter, -apple-system, Helvetica, Arial, sans-serif">
    <circle cx="104" cy="118" r="16" fill="#FF6B4A"/>
    <text x="134" y="130" font-size="34" font-weight="700" letter-spacing="-1" fill="#F3EFE6">Project 100M</text>
    <text x="88" y="300" font-size="92" font-weight="800" letter-spacing="-4" fill="#F3EFE6">Useful websites for</text>
    <text x="88" y="400" font-size="92" font-weight="800" letter-spacing="-4" fill="#FFB23F">everyday decisions.</text>
    <text x="90" y="520" font-size="32" font-weight="600" fill="#FFB23F">Wedar</text>
    <text x="200" y="520" font-size="32" fill="#8b8a82">·</text>
    <text x="226" y="520" font-size="32" font-weight="600" fill="#D7B56D">Heirloom Money</text>
    <text x="478" y="520" font-size="32" fill="#8b8a82">·</text>
    <text x="504" y="520" font-size="32" font-weight="600" fill="#FF6B4A">Product Review</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);

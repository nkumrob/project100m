# Project 100M website

The brand site for **Project 100M**, an independent studio building useful websites for everyday decisions:
[Wedar](https://wedar.ai), [Heirloom Money](https://heirloommoney.com) and [Product Review](https://product-review.co).
It's a static [Astro](https://astro.build) site, deployed by Vercel from `main` to https://project100m.com.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
node scripts/make-og-image.mjs   # regenerate public/assets/og-image.png
```

- `src/data/brand.ts`: name, contact, title, description and the list of sites. Edit copy here.
- `src/layouts/Brand.astro`: `<head>` (meta, OG, JSON-LD) and the global styles.
- `src/pages/index.astro`: the page.
- `vercel.json`: 301 redirects from the retired workforce pages to `/`.

project100m.net, .us and .work (the outreach sending domains) are Cloudflare zones whose web traffic is sent to
project100m.com by the `project100m-redirect` Worker. Their mail records live in those zones too, so don't edit them.

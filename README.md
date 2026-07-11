# Project 100 Million — website

Public reference & credibility site for **Project 100 Million** ("Building the AI-Ready Workforce").
Static [Astro](https://astro.build) site. Content is derived from the 6-page research brief (the brief
itself is not published on the site — all detail lives on the pages).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the built site
```

Node 18.20.8+ or 20.3.0+.

## Structure

```
src/
  data/          single source of truth
    site.ts        site constants + PLACEHOLDER tokens (domain, email, contact, entity)
    stats.ts       every statistic + its source
    funding.ts     federal funding table + .gov links
    pillars.ts     four delivery pillars, form options
  layouts/Base.astro     <head> meta, OG/Twitter, JSON-LD, header/footer
  components/            Wordmark, SiteHeader, SiteFooter, SectionHead, StatBig,
                        PillarCard, FundingTable
  pages/                index, challenge, initiative, federal-alignment,
                        early-adopters, express-interest, contact, privacy, thank-you
  styles/global.css     design system (palette, type scale, patterns)
public/                 favicon.svg, robots.txt, assets/ (logo, og-image)
scripts/make-og-image.mjs   regenerates public/assets/og-image.png
```

## Before launch — fill placeholders

Everything marked `PLACEHOLDER` in the code:

- **`astro.config.mjs`** → `SITE_URL` (production domain; also update `public/robots.txt`)
- **`src/data/site.ts`** → domain, `interest@` email, response SLA owner, legal/footer entity
- **`src/pages/privacy.astro`** → confirm the draft privacy copy reflects real practices
- **`src/data/funding.ts`** → confirm/add official `.gov` program-page URLs (`href`)
- **`src/data/stats.ts`** → verify every per-stat source attribution (credibility requirement)

## Deferred — Express Interest form backend

The form UI (`src/pages/express-interest.astro`) is complete, including the honeypot, but is **not
wired**. It runs in "preview mode" (`data-preview="true"`) and intercepts submit instead of posting.

To activate (planned: Cloudflare Pages Function + [Resend](https://resend.com), email-only):

1. Add a serverless function at `functions/express-interest.ts` that validates input, checks the
   `company_website` honeypot, rate-limits, and sends two emails via Resend (team notification +
   applicant confirmation), then redirects to `/thank-you`.
2. Point the form `action` at it, set `method="POST"`, and remove `data-preview` from the `<form>`.

## Deploy

Static host with HTTPS (default target: **Cloudflare Pages** — build `npm run build`, output `dist`).
After launch: submit `sitemap-index.xml` to Google Search Console.

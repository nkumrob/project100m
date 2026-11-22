# Project 100M: what we did and what's left

Last updated 2026-11-21. Read this before picking the work back up.

## Why this exists
Robert sends paid backlink outreach for Wedar, Heirloom Money and Product Review from Instantly mailboxes on
project100m.net, project100m.us and project100m.work. The emails sign off "Part of the Project 100M group". A recipient
who checks the sender needs to land on a real company page. project100m.com used to present an AI-workforce initiative,
which didn't match.

## Done (all live)
| What | Where | Status |
|---|---|---|
| New brand site: "Useful websites for everyday decisions" (Wedar, Heirloom Money, Product Review, each led by its question) | this repo, `main` → Vercel → project100m.com | live, commit 7d4ba6b |
| Wording approved by Robert (studio framing: not "media", "content" or "agency") | `src/data/brand.ts`, `src/pages/index.astro` | done |
| Old AI-workforce pages deleted; their URLs 308-redirect to `/` | `vercel.json` | live, commits 2be02f8 and 6bdbac3 |
| Canonical, sitemap and OG URLs fixed: they used to point at project100million.com, which is someone else's site | `astro.config.mjs`, `Brand.astro` | live |
| Sending domains moved to Cloudflare (zones created, all mail records copied exactly) | Cloudflare account, zones project100m.net/.us/.work | active |
| Nameservers switched at Namecheap to demi.ns.cloudflare.com and fred.ns.cloudflare.com | Namecheap (Robert's account) | done |
| Web visitors to any sending domain (bare and www, http and https) get a 301 to https://project100m.com/ | Cloudflare Worker `project100m-redirect` + proxied A 192.0.2.1 | verified |
| All 15 Instantly mailbox signatures changed to "Robert Appiah / Part of the Project 100M group" | Instantly accounts | done |

## Don't break
- The mail records in the three Cloudflare zones: MX `inbound.project100m.<tld>`, `inbound` A, SPF on `@`, `s1` SPF,
  `dkim._domainkey`, `_dmarc` (p=reject). If the mailbox provider (venture-gear) ever changes the DKIM key, copy the new
  one into Cloudflare by hand. They no longer control DNS.
- The redirect uses a Worker because the Cloudflare token can't edit Redirect Rules, Page Rules or Bulk Redirects.

## Open / possible next steps
- Old Instantly campaigns "SEQUENCE A — WORKFORCE SYSTEMS" (completed) and "SEQUENCE B — SMALL & MID-SIZED BUSINESSES"
  (paused) still carry AI-workforce copy. They aren't sending. Archive them, or never resume them.
- The backlink campaigns (Wedar → .net mailboxes, Heirloom Money → .us, Product Review → .work) are drafts in Instantly.
  The outreach engine in `~/backlink-engine` (GitHub: nkumrob/backlink-engine, private, branch `master`) fills and
  launches them.
- Design polish ideas: "How we build" is text-only. A small live element (for example today's Wedar pick) would add life.
  On narrow desktop widths the collapsed "Heirloom Money" card name gets clipped.

## How to change things
- Copy and the list of sites: `src/data/brand.ts`. Page: `src/pages/index.astro`. Head and meta: `src/layouts/Brand.astro`.
- Preview image: `node scripts/make-og-image.mjs`. Push to `main` and Vercel deploys in about 30 seconds.

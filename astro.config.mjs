// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PLACEHOLDER: replace with the final production domain before launch.
// Used for canonical URLs, sitemap, and Open Graph absolute URLs.
export const SITE_URL = 'https://project100million.org';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});

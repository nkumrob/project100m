/**
 * Project 100M — an independent studio building useful websites for everyday decisions. Single source of truth for the
 * brand homepage (src/pages/index.astro) and its <head> (src/layouts/Brand.astro).
 */

export const BRAND = {
  name: 'Project 100M',
  domain: 'https://project100m.com',
  // Matches the address outreach is sent from, so a reply lands in the same inbox.
  email: 'robert@project100m.net',
  founder: 'Robert Appiah',
  title: 'Project 100M: Useful websites for everyday decisions',
  description:
    'Project 100M is a small, independent studio building useful websites for everyday decisions: Wedar, Heirloom Money and Product Review. Each one answers one everyday question well.',
  year: new Date().getFullYear(),
} as const;

export interface Property {
  name: string;
  domain: string;
  url: string;
  question: string;
  line: string;
  stat: { value: string; label: string };
  tags: string[];
  image: string;
  imageAlt: string;
  /** Accent colour for this property's panel. */
  accent: string;
}

export const PROPERTIES: Property[] = [
  {
    name: 'Wedar',
    domain: 'wedar.ai',
    url: 'https://wedar.ai',
    question: 'What should I do today, given the weather?',
    line: 'The search engine for things to do in your city, picked for today’s weather.',
    stat: { value: '67', label: 'cities, re-picked for the weather' },
    tags: ['Real places', 'Live events', 'Weather-aware'],
    image:
      'https://wedar.ai/_next/image?url=%2Fmedia%2Fwedar%2Fcities%2Fvancouver%2Fhd%2Fsunny.webp&w=1920&q=75',
    imageAlt: 'Vancouver on a sunny day, as shown on Wedar',
    accent: '#FFB23F',
  },
  {
    name: 'Heirloom Money',
    domain: 'heirloommoney.com',
    url: 'https://heirloommoney.com',
    question: 'Am I on track for retirement?',
    line: 'Retirement money explained in plain English, with free calculators.',
    stat: { value: 'Free', label: 'calculators for rollovers, RMDs and fees' },
    tags: ['Rollovers', 'Withdrawals', 'Free tools'],
    image: 'https://heirloommoney.com/img/hero-couple-1200.webp',
    imageAlt: 'A couple planning their retirement, from Heirloom Money',
    accent: '#D7B56D',
  },
  {
    name: 'Product Review',
    domain: 'product-review.co',
    url: 'https://product-review.co',
    question: 'Which one should I buy?',
    line: 'Everyday products compared using the evidence, with one straight verdict.',
    stat: { value: '20', label: 'product categories, one verdict each' },
    tags: ['Evidence-led', 'No 50 tabs', 'One pick'],
    image: 'https://media.product-review.co/brand/hero-studio.webp',
    imageAlt: 'Products photographed in the Product Review studio',
    accent: '#FF6B4A',
  },
];

/**
 * Site-wide constants and PLACEHOLDER tokens.
 *
 * Everything marked PLACEHOLDER is real content the initiative owes before
 * launch (PRD §11 content dependencies + §14 open questions). Swapping these
 * values in one place updates the whole site, no need to hunt through pages.
 */

export const SITE = {
  name: 'Project 100 Million',
  tagline: 'Building the AI-Ready Workforce',
  mission: '100 million workers AI-ready by 2030.',

  // PLACEHOLDER: final production domain (PRD §14 Q1, .org preferred).
  domain: 'https://project100million.org',

  // PLACEHOLDER: professional address on the site domain (PRD §10).
  email: 'interest@project100million.org',

  // PLACEHOLDER: legal / sponsor identity for the footer (PRD §14 Q4).
  legalEntity: 'Project 100 Million',

  year: new Date().getFullYear(),
} as const;

/**
 * Primary navigation (flat). Early Adopters is intentionally omitted: it's an
 * outreach landing page reached via direct links, not from the site nav.
 */
export const NAV = [
  { href: '/challenge', label: 'The Challenge' },
  { href: '/initiative', label: 'The Initiative' },
  { href: '/federal-alignment', label: 'Federal Alignment' },
  { href: '/contact', label: 'Contact' },
] as const;

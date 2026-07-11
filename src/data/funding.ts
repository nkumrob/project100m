/**
 * Federal funding landscape (brief p.5).
 * The .gov `href` links are strong trust + SEO signals (PRD §9). Where the
 * exact program page URL still needs confirming, `href` is left null and the
 * program renders as plain text, see PLACEHOLDER note in federal-alignment.astro.
 */

export interface FundingProgram {
  program: string;
  agencies: string;
  amount: string;
  funds: string;
  /** Official .gov program page. null = link to confirm before launch. */
  href: string | null;
}

/** Total committed, per the brief headline (">$2.5 billion already committed"). */
export const totalCommitted = 'Over $2.5 billion';

export const fundingPrograms: FundingProgram[] = [
  {
    program: 'National AI Workforce Investment Act',
    agencies: 'DOL · NSF · NIST',
    amount: '$2.1B / 4 yrs',
    funds:
      'Registered Apprenticeship co-funding up to 50% of training costs; NSF partnership grants with curriculum co-design rights. First cohorts Q3 2026 – Q2 2027.',
    href: null,
  },
  {
    program: 'TechAccess: AI-Ready America',
    agencies: 'NSF + DOL',
    amount: '$224M',
    funds:
      '56 state and territory AI hubs (~$1M/yr each) for literacy, small-business adoption, and apprenticeships. First 10 hubs selected summer 2026.',
    href: null,
  },
  {
    program: 'EDA AI Upskill Accelerator',
    agencies: 'Commerce',
    amount: '$25M',
    funds:
      'Industry-led workforce partnerships; $2–8M per project over 24–36 months, stackable with state and workforce-board funds.',
    href: null,
  },
  {
    program: 'Industry-Driven Skills Training Fund',
    agencies: 'DOL',
    amount: '$86M+',
    funds:
      'Outcomes-based, per-employee reimbursement of training costs in AI infrastructure, advanced manufacturing, and IT, awarded to 14 states.',
    href: null,
  },
  {
    program: 'WIOA grants + EO 14277 programs',
    agencies: 'DOL',
    amount: 'Existing funds',
    funds:
      'States directed to fund AI literacy through the public workforce system; free DOL apprenticeship resources across six sectors. Active now.',
    href: 'https://www.dol.gov/agencies/eta/apprenticeship',
  },
];

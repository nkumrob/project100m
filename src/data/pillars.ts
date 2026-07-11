/**
 * The four delivery pillars, each mapped to its business outcome (brief p.6).
 */

export interface Pillar {
  name: string;
  description: string;
  outcome: string;
}

export const pillars: Pillar[] = [
  {
    name: 'Practical upskilling',
    description: 'Role-specific training on AI tools, prompts, automation, and workflow redesign.',
    outcome: 'Productivity gains, cost reduction',
  },
  {
    name: 'AI literacy & ethics',
    description: 'How AI works, where it fails, and what responsible use requires in each role.',
    outcome: 'Governance, lower compliance risk',
  },
  {
    name: 'Automation & agentic flows',
    description: 'Designing, operating, and supervising AI-driven workflows, including autonomous agents.',
    outcome: 'Operational efficiency, speed',
  },
  {
    name: 'Continuous readiness',
    description: 'Ongoing assessment and micro-learning that keeps skills current through 2030.',
    outcome: 'Talent retention, adaptability',
  },
];

/** What a selected early-adopter organization receives (brief p.6). */
export const earlyAdopterReceives: string[] = [
  'Priority access to readiness frameworks and curricula',
  'Guidance on the federal funding aligned to their workforce and geography',
  'Founding-partner recognition',
  'Early access to impact benchmarks',
];

/** The organization-type options for the Express Interest form (PRD §7.6). */
export const organizationTypes: string[] = [
  'Federal / State Agency',
  'Workforce Board',
  'Education Institution',
  'Nonprofit',
  'Business',
  'Other',
];

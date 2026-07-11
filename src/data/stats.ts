/**
 * Single source of truth for every statistic used on the site.
 * Each figure carries its source, sourcing is a core credibility requirement
 * (PRD §7.2), not decoration, so no stat should appear on a page without one.
 * All figures are drawn from the 6-page research brief (public/brief.pdf).
 */

export interface Stat {
  value: string;
  label: string;
  /** Short source attribution, shown beneath the figure. */
  source: string;
}

/** The three headline stats for the Home hero (PRD §7.1). */
export const headlineStats: Stat[] = [
  {
    value: '23%',
    label: 'of organizations say their workforce is ready for AI, down six points in a single year, despite record deployments.',
    source: 'WEF Future of Jobs',
  },
  {
    value: '$5.5T',
    label: 'projected cost of the global skills shortage by 2026, in missed revenue, product delays, and lost competitiveness.',
    source: 'Korn Ferry / industry estimates',
  },
  {
    value: '39%',
    label: 'of current skills will be obsolete by 2030, as 92M jobs are displaced and 170M new ones are created.',
    source: 'WEF Future of Jobs 2025',
  },
];

/** "The contradiction, in the leaders' own numbers" (brief p.2). */
export const contradictions: Stat[] = [
  {
    value: '45%',
    label: "of executives expect AI agents in live workflows within 12 months, yet only 22% are highly confident they're building the capabilities to keep pace.",
    source: 'Kyndryl Readiness Report',
  },
  {
    value: '9 in 10',
    label: 'workers already use AI on the job, yet only 16% of employees receive any training before a new AI tool is rolled out.',
    source: 'Skillsoft / Adecco',
  },
  {
    value: '79%',
    label: 'of leaders agree AI adoption will outpace their workforce and governance models, yet only 31% say leadership has sufficient AI skills to understand risk and opportunity.',
    source: 'Kyndryl',
  },
  {
    value: '53 pts',
    label: "separate perception from reality: 77% of managers believe they've set employees up for AI success; only 24% of employees agree.",
    source: 'Section / Workplace Intelligence',
  },
];

/** "Five structural gaps" (brief p.3). */
export interface Gap {
  name: string;
  figure: string;
  detail: string;
}

export const structuralGaps: Gap[] = [
  {
    name: 'Training',
    figure: '1 in 5',
    detail: "employees has received no AI training at all, and 57% of learners say training isn't relevant to their role.",
  },
  {
    name: 'Governance',
    figure: '<1 in 10',
    detail: 'organizations have comprehensive AI governance, just as regulators move toward requiring it.',
  },
  {
    name: 'Perception',
    figure: '53-pt gap',
    detail: 'between how leaders perceive AI readiness and how employees experience it.',
  },
  {
    name: 'Skills visibility',
    figure: '11%',
    detail: 'of organizations use formal skills assessments, the rest rely on manager judgment to know who is AI-capable.',
  },
  {
    name: 'Role relevance',
    figure: '69%',
    detail: "of employees don't know which AI skills matter for their role, so generic literacy fails to convert to output.",
  },
];

/** "The scale of what's coming" (brief p.3). */
export const scaleStats: Stat[] = [
  {
    value: '300M',
    label: 'jobs exposed to automation globally over the next decade.',
    source: 'Goldman Sachs',
  },
  {
    value: '66%',
    label: 'faster skill evolution in AI-exposed roles than comparable roles.',
    source: 'PwC AI Jobs Barometer',
  },
  {
    value: '56%',
    label: 'average wage premium already commanded by AI-exposed roles.',
    source: 'PwC AI Jobs Barometer',
  },
];

/** The business case, what the prepared gain (brief p.4). */
export const gains: string[] = [
  'Up to 40% productivity gains and 40% lower operating costs when AI tools are paired with proper workforce training.',
  '40–60 minutes saved daily by trained AI users, who report 64% higher productivity.',
  '79% of executives expect AI to significantly drive revenue by 2030, up from 40% today (IBM); 92% of early adopters already see measurable ROI (Snowflake).',
  'A 56% wage-premium talent brand: AI-ready employers attract and retain forward-thinking workers. 76% of future-ready organizations report a highly adaptable workforce, vs. 42% elsewhere.',
  "Credible alignment with the national agenda, the 2025 Executive Order on AI Education and the AI Action Plan's 90+ federal commitments to workforce upskilling.",
];

/** The business case, what waiting costs (brief p.4). */
export const costs: { heading: string; detail: string }[] = [
  {
    heading: 'Competitive irrelevance',
    detail: 'AI-native competitors will look "magically" fast and affordable by 2030; capability gaps compound as adoption rates diverge.',
  },
  {
    heading: 'An operational tax',
    detail: "higher unit costs, slower cycles, and wasted AI spend, tools without trained users don't deliver value (Deloitte).",
  },
  {
    heading: 'Workforce displacement',
    detail: '~6–7% of workers could be fully displaced; 7.9M US jobs face high displacement risk with no non-technical barriers to automation (SHRM).',
  },
  {
    heading: 'Governance exposure',
    detail: 'fewer than 1 in 10 organizations have the controls regulators are moving toward, while EU AI Act obligations already reach US-listed companies.',
  },
  {
    heading: 'The double penalty',
    detail: 'ungoverned AI delivers poor performance and growing legal and reputational risk.',
  },
];

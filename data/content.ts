// ---------------------------------------------------------------------------
// All page copy lives here. Edit this file to update the site — no component
// changes needed. Items marked TODO are waiting on you.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Chia Lin (Ellen) Chen',
  role: 'Frontend Engineer',
  location: 'Taipei, Taiwan · UTC+8',
  status: 'open to work',
  headline: 'Frontend Engineer building complex web products.',
  intro:
    'Frontend engineer with 4 years of React, TypeScript, and Next.js, owning product frontends end to end across AI-native SaaS and Web3. Uses Claude Code and Cursor daily, encoding architecture decisions in project rules so AI-generated code arrives review-ready.',
  links: {
    github: 'https://github.com/ellenchialin',
    repo: 'https://github.com/ellenchialin/portfolio',
    linkedin: 'https://www.linkedin.com/in/ellenchialinchen',
    email: 'mailto:chialin76@gmail.com',
    resume: '/Resume.pdf'
  }
}

// The hero "review panel" — profile rendered as AI-extracted fields.
// Inspired by the document-extraction review work at Qlo.
export const reviewFields = [
  { field: 'name', value: 'Chia Lin (Ellen) Chen' },
  { field: 'role', value: 'Frontend Engineer' },
  { field: 'stack', value: 'React · Next.js · TypeScript' },
  { field: 'experience', value: '4 yrs · AI-native SaaS / Web3' },
  { field: 'location', value: 'Taipei · UTC+8' },
  { field: 'status', value: 'open_to_work' }
]

export type CaseStudy = {
  id: string
  label: string
  company: string
  period: string
  title: string
  summary: string
  sections: { heading: string; body: string }[]
  metrics: { value: string; caption: string }[]
  note?: string
  hasDiagram?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'qlo',
    label: 'case_study / qlo',
    company: 'Qlo — AI-native insurtech (YC S26)',
    period: 'Jan 2026 – May 2026',
    title:
      'An underwriting workstation, inherited demo to production beta in four months',
    summary:
      'Commercial insurance carriers process submissions across legacy tools and spreadsheets; Qlo consolidates that work into one AI-native workstation. As the sole frontend engineer, I inherited a demo-stage frontend with no handover and took it to a production beta.',
    sections: [
      {
        heading: 'The hard part',
        body: 'Underwriting ends in documents that carry legal weight: quotes, binders, invoices. Every carrier client wants its own variation of the quote form, a single field change can reprice the policy, and what reaches the broker has to match exactly what was priced.'
      },
      {
        heading: 'What I built',
        body: 'Extended the submission workflow from quote to bind, adding custom quote options, binders, and invoices. Designed a schema-driven quote form (React Hook Form + Zod) that handles per-client variations, and improved the premium calculation behind it. Outside the core workflow, I redesigned the login flow with 2FA and built broker management.'
      },
      {
        heading: 'Decisions that mattered',
        body: 'Per-client quote schemas lived in the frontend; I proposed serving them from the backend as a contract, so onboarding a new client becomes configuration rather than a frontend release. I also proposed rendering quote letters as PDF instead of HTML, so every recipient sees the same fixed document and the issued version can be retained as-is for compliance — and the team shipped it that way. Separately, I brought engineering into design reviews before spec sign-off, so implementation constraints surfaced while the spec was still cheap to change; the team adopted it.'
      },
      {
        heading: 'Outcome',
        body: 'From an inherited demo to a production beta in roughly four months, tested by a design partner whose feedback informed ongoing iterations. The product is internal and non-public, so this page shows the architecture rather than screenshots — the diagram below is the shape of the submission workflow.'
      }
    ],
    metrics: [
      { value: 'demo → beta', caption: 'in ~4 months' },
      { value: 'quote → bind', caption: 'end-to-end workflow' },
      { value: 'sole', caption: 'frontend engineer' }
    ],
    hasDiagram: true
  },
  {
    id: 'lootex',
    label: 'case_study / lootex',
    company: 'Lootex — Web3 marketplace',
    period: 'Jul 2022 – Dec 2025',
    title: 'Trading, claims, and a game economy on-chain',
    summary:
      'Three and a half years shipping consumer-facing Web3 products where a frontend bug can cost users real money — an NFT trading platform, a no-code NFT launch platform, and the frontend for a Web3 game.',
    sections: [
      {
        heading: 'Trading platform',
        body: 'Developed the NFT trading platform that processed over $1M in transaction volume and 100K+ on-chain claims, integrating smart contracts directly with wagmi and viem. Wallet interactions demand exactness: precise price and balance calculations with BigNumber precision end to end, defensive error handling around every signature and transaction state, and UIs that never show a user a number the chain would disagree with.'
      },
      {
        heading: 'No-code NFT launch platform (Lootex Studio)',
        body: "Solely built the creator studio that let projects launch NFT collections without writing code — asset upload, sale rules, and a four-step on-chain publish flow: contract deploy, IPFS sync, lazy mint, claim conditions. The interesting work was failure recovery. Any step can die mid-flight — gas spikes, dropped wallets, closed tabs — so the flow re-derives its progress from chain state on load, and creators resume instead of starting over. Shipped in production campaigns, including an official collaboration with Soneium, Sony's blockchain."
      },
      {
        heading: 'Design system & delivery',
        body: "Co-built the team's Storybook design system of accessible, responsive Tailwind components, and reviewed code to keep usage consistent. Built and maintained the frontend deployment and release pipeline, with preview environments so other teams could validate changes independently before release."
      },
      {
        heading: 'FizzPop',
        body: 'Led frontend for the Web3 game FizzPop, focusing on rendering performance for smooth gameplay; the game reached 39% Day-1 retention, roughly 3–4x the category average.'
      }
    ],
    metrics: [
      { value: '$1M+', caption: 'transaction volume' },
      { value: '100K+', caption: 'on-chain claims' },
      { value: '39%', caption: 'D1 retention (3–4x avg)' }
    ]
    // TODO: Lootex is public — add 1–2 screenshots to /public and wire them
    // into the CaseStudy component (an <Image> slot is stubbed there).
  }
]

export const skills = [
  {
    group: 'Frontend',
    items: 'React · Next.js · TypeScript · JavaScript · Tailwind CSS'
  },
  {
    group: 'Forms & state',
    items: 'TanStack Query · React Hook Form · Zod · Zustand'
  },
  { group: 'Web3', items: 'wagmi · viem · smart contract integration' },
  { group: 'Deployment', items: 'GitHub Actions · Vercel' },
  { group: 'Tools', items: 'Git · Figma · Storybook · Claude Code · Cursor' },
  {
    group: 'Spoken languages',
    items: 'Mandarin (native) · English (professional working proficiency)'
  }
]

export const education = [
  {
    name: 'AppWorks School — Frontend Engineer Program',
    detail: '1,000+ hrs immersive training · Jan – Jun 2022'
  },
  {
    name: 'UNSW Sydney — Master of Public Relations & Advertising',
    detail: 'Jul 2015'
  }
]

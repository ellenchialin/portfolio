// ---------------------------------------------------------------------------
// All page copy lives here. Edit this file to update the site — no component
// changes needed. Items marked TODO are waiting on you.
// ---------------------------------------------------------------------------

export const profile = {
	name: "Chia Lin (Ellen) Chen",
	role: "Frontend Engineer",
	location: "Taipei, Taiwan · UTC+8",
	status: "open to work",
	headline: "Frontend Engineer building complex web products.",
	intro:
		"React + TypeScript engineer with 0→1 experience across AI and Web3 startups.",
	links: {
		github: "https://github.com/ellenchialin",
		repo: "https://github.com/ellenchialin/portfolio",
		linkedin: "https://www.linkedin.com/in/ellenchialinchen",
		email: "mailto:chialin76@gmail.com",
		resume: "/Resume_Chia_Lin_Chen.pdf",
	},
};

// The hero "review panel" — profile rendered as AI-extracted fields.
// A nod to the document-extraction review UIs built at Qlo.
export const reviewFields = [
	{ field: "name", value: "Chia Lin (Ellen) Chen" },
	{ field: "role", value: "Frontend Engineer" },
	{ field: "stack", value: "React · Next.js · TypeScript" },
	{ field: "experience", value: "4 yrs · AI SaaS / Web3 · 0→1 products" },
	{ field: "location", value: "Taipei · UTC+8" },
	{ field: "status", value: "open_to_work" },
];

export type CaseStudy = {
	id: string;
	label: string;
	company: string;
	period: string;
	title: string;
	summary: string;
	sections: { heading: string; body: string }[];
	metrics: { value: string; caption: string }[];
	note?: string;
	hasDiagram?: boolean;
};

export const caseStudies: CaseStudy[] = [
	{
		id: "qlo",
		label: "case_study / qlo",
		company: "Qlo — AI-native insurtech (YC S26)",
		period: "Jan 2026 – May 2026",
		title: "An underwriting workstation, zero to beta in four months",
		summary:
			"Qlo replaces the fragmented legacy tools and spreadsheets that commercial insurance carriers use to process submissions. I co-developed the frontend from the first commit to a working beta; the product was later selected for Y Combinator's S26 batch.",
		sections: [
			{
				heading: "The hard part",
				body: "Underwriting data is deeply nested and interdependent: a single submission spans dozens of coverage sections, each with its own validation rules, and a change in one field can reprice the entire policy. On top of that, most field values arrive from an AI extraction pipeline — which means the UI has to make machine-generated data easy for a human to verify, correct, and trust.",
			},
			{
				heading: "What I built",
				body: "A schema-driven form engine: coverage schemas define the fields, validation, and dependencies, and the frontend renders synchronized multi-step workflows from them. Built on React Hook Form + Zod, with a premium calculation engine that recomputes as underwriters edit. Alongside it, review UIs for the AI extraction pipeline — side-by-side views where underwriters confirm or correct auto-extracted values before they enter the form of record.",
			},
			{
				heading: "Decisions that mattered",
				body: "Driving forms from schemas instead of hand-writing them meant new coverage lines shipped in days, not weeks. Zod schemas doubled as the single source of truth for both validation and TypeScript types, which kept the deeply nested state honest. For the review UIs, the guiding rule was that a human should never have to trust the AI blindly: every extracted value stays visibly provisional until confirmed.",
			},
			{
				heading: "Outcome",
				body: "Zero to a working beta used by design partners in roughly four months, with the team later selected for YC S26. The product is internal and non-public, so this page shows the architecture rather than screenshots — the diagram below is the generic shape of the system.",
			},
		],
		metrics: [
			{ value: "0 → beta", caption: "in ~4 months" },
			{ value: "YC S26", caption: "team selected" },
			{ value: "RHF + Zod", caption: "schema-driven forms" },
		],
		hasDiagram: true,
	},
	{
		id: "lootex",
		label: "case_study / lootex",
		company: "Lootex — Web3 marketplace",
		period: "Jul 2022 – Dec 2025",
		title: "Trading, claims, and a game economy on-chain",
		summary:
			"Three and a half years shipping consumer-facing Web3 products where a frontend bug can cost users real money — an NFT trading platform, a no-code claim tool, and the frontend for a Web3 game.",
		sections: [
			{
				heading: "Trading platform",
				body: "Developed the NFT trading platform that processed over $1M in transaction volume. Wallet interactions demand exactness: BigNumber precision end to end, defensive error handling around every signature and transaction state, and UIs that never show a user a number the chain would disagree with.",
			},
			{
				heading: "No-code NFT launch platform (Lootex Studio)",
				body: "Built the creator studio that let projects launch NFT collections without writing code — asset upload, sale rules, and a four-step on-chain publish flow: contract deploy, IPFS sync, lazy mint, claim conditions. The interesting work was failure recovery. Any step can die mid-flight — gas spikes, dropped wallets, closed tabs — so the flow re-derives its progress from chain state on load, and creators resume instead of starting over. Shipped in production campaigns, including an official collaboration with Soneium, Sony's Layer 2.",
			},
			{
				heading: "FizzPop & design system",
				body: "Led frontend for the Web3 game FizzPop, focusing on rendering performance for smooth gameplay; the game reached 39% Day-1 retention, roughly 3–4x the category average. Also implemented the team's Tailwind CSS design system with Storybook, standardizing accessible components and shortening UI development cycles across the team.",
			},
		],
		metrics: [
			{ value: "$1M+", caption: "transaction volume" },
			{ value: "100K+", caption: "on-chain claims" },
			{ value: "39%", caption: "D1 retention (3–4x avg)" },
		],
		// TODO: Lootex is public — add 1–2 screenshots to /public and wire them
		// into the CaseStudy component (an <Image> slot is stubbed there).
	},
];

export const skills = [
	{
		group: "Frontend core",
		items: "React · Next.js · TypeScript · JavaScript (ES6+) · Tailwind CSS",
	},
	{ group: "Forms & state", items: "TanStack Query · React Hook Form · Zod" },
	{
		group: "AI Workflow",
		items: "Cursor · Claude Code · AI-assisted development",
	},
	{ group: "Web3", items: "Viem · Wagmi" },
	{ group: "Tools", items: "Git · Figma · Storybook" },
	{ group: "Languages", items: "Chinese (native) · English" },
];

export const education = [
	{
		name: "AppWorks School — Frontend Engineer Program",
		detail: "1,000+ hrs immersive training, 2022",
	},
	{ name: "UNSW Sydney — Master of PR & Advertising", detail: "2015" },
];

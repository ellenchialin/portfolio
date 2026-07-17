import { profile, caseStudies, skills, education } from "@/data/content";
import { ReviewPanel } from "@/components/ReviewPanel";
import { CaseStudyBlock } from "@/components/CaseStudyBlock";
import { FieldLabel } from "@/components/FieldLabel";

const navLinks = [
	{ href: "#work", label: "Work" },
	{ href: "#skills", label: "Skills" },
	{ href: "#contact", label: "Contact" },
];

export default function Home() {
	return (
		<main className="mx-auto max-w-page px-5 sm:px-8">
			{/* ------------------------------------------------ header */}
			<header className="flex items-center justify-between py-6">
				<p className="font-mono text-sm font-medium">ellen.chen</p>
				<nav aria-label="Sections" className="flex gap-5">
					{navLinks.map((l) => (
						<a
							key={l.href}
							href={l.href}
							className="text-sm text-muted transition-colors hover:text-cobalt"
						>
							{l.label}
						</a>
					))}
				</nav>
			</header>

			{/* ------------------------------------------------ hero */}
			<section className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
				<div>
					<h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
						{profile.headline}
					</h1>
					<p className="mt-6 max-w-xl leading-relaxed text-ink/85">
						{profile.intro}
					</p>
					<div className="mt-8 flex flex-wrap gap-3">
						<a
							href={profile.links.github}
							className="rounded border border-ink bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cobalt hover:border-cobalt"
						>
							GitHub
						</a>
						<a
							href={profile.links.linkedin}
							className="rounded border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-cobalt hover:text-cobalt"
						>
							LinkedIn
						</a>
						<a
							href={profile.links.resume}
							className="rounded border border-line bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-cobalt hover:text-cobalt"
						>
							Resume
						</a>
					</div>
				</div>
				<ReviewPanel />
			</section>

			{/* ------------------------------------------------ work */}
			<section id="work" className="scroll-mt-24 border-t border-line py-16">
				<div className="space-y-20">
					{caseStudies.map((study) => (
						<CaseStudyBlock key={study.id} study={study} />
					))}
				</div>
			</section>

			{/* ------------------------------------------------ skills + education */}
			<section id="skills" className="scroll-mt-24 border-t border-line py-16">
				<FieldLabel>skills / education</FieldLabel>
				<div className="mt-6 grid gap-x-12 gap-y-8 sm:grid-cols-[1.3fr_1fr]">
					<dl className="space-y-3">
						{skills.map((s) => (
							<div
								key={s.group}
								className="flex flex-col gap-0.5 sm:flex-row sm:gap-4"
							>
								<dt className="w-36 shrink-0 font-mono text-xs uppercase tracking-wider text-muted sm:pt-1">
									{s.group}
								</dt>
								<dd className="text-sm">{s.items}</dd>
							</div>
						))}
					</dl>
					<ul className="space-y-3">
						{education.map((e) => (
							<li key={e.name}>
								<p className="text-sm font-medium">{e.name}</p>
								<p className="text-xs text-muted">{e.detail}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* ------------------------------------------------ contact */}
			<footer id="contact" className="scroll-mt-24 border-t border-line py-16">
				<FieldLabel>contact</FieldLabel>
				<h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
					Building something? Let's talk.
				</h2>
				<p className="mt-3 max-w-xl leading-relaxed text-ink/85">
					I&rsquo;m open to frontend roles. The fastest way to reach me is
					email.
				</p>
				<a
					href={profile.links.email}
					className="mt-6 inline-block rounded border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-cobalt hover:bg-cobalt"
				>
					chialin76@gmail.com
				</a>
				<p className="mt-12 font-mono text-xs text-muted">
					© {new Date().getFullYear()} Chia Lin (Ellen) Chen · Built with
					Next.js + Tailwind CSS ·{" "}
					<a
						href={profile.links.repo}
						className="text-cobalt underline-offset-4 hover:underline"
					>
						source on GitHub
					</a>
				</p>
			</footer>
		</main>
	);
}

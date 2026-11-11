import { profile, caseStudies, skills, education } from "@/data/content";
import { ReviewPanel } from "@/components/ReviewPanel";
import { CaseStudyBlock } from "@/components/CaseStudyBlock";
import { Split } from "@/components/Split";

const navLinks = [
	{ href: "#work", label: "Work" },
	{ href: "#skills", label: "Skills" },
	{ href: "#contact", label: "Contact" },
];

export default function Home() {
	return (
		<>
			<main>
				{/* ------------------------------------------------ header */}
				<header className="container">
					<div className="flex items-center justify-between gap-6 border-b border-rule py-5">
						<p className="font-display text-2xl leading-none">ellen.chen</p>
						<nav aria-label="Sections" className="flex gap-6">
							{navLinks.map((l) => (
								<a key={l.href} href={l.href} className="nav-link">
									{l.label}
								</a>
							))}
						</nav>
					</div>
				</header>

				{/* ------------------------------------------------ hero */}
				<section className="container">
					<div className="grid-12 gap-y-14 pb-20 pt-14 lg:pb-28 lg:pt-20">
						<div className="col-span-12 lg:col-span-7">
							<h1>{profile.headline}</h1>
							<p className="lead mt-8">{profile.intro}</p>
							<div className="mt-10 flex flex-wrap gap-3">
								<a href={profile.links.github} className="btn btn--primary">
									GitHub
								</a>
								<a href={profile.links.linkedin} className="btn btn--secondary">
									LinkedIn
								</a>
								<a href={profile.links.resume} className="btn btn--secondary">
									Resume
								</a>
							</div>
						</div>
						<div className="col-span-12 self-end lg:col-span-5 lg:col-start-8">
							<ReviewPanel />
						</div>
					</div>
				</section>

				{/* ------------------------------------------------ work */}
				<section id="work" aria-label="Work" className="container scroll-mt-8">
					{/* the index: every case, one row each */}
					<ol className="border-t border-ink">
						{caseStudies.map((s, i) => (
							<li key={s.id}>
								<a
									href={`#${s.id}`}
									className="index-row grid-12 items-baseline gap-y-1 border-b border-rule py-5"
								>
									<span className="figure col-span-2 text-sm text-accent lg:col-span-1">
										{String(i + 1).padStart(2, "0")}
									</span>
									<span className="col-span-10 text-base font-medium lg:col-span-3">
										{s.company}
									</span>
									<span className="index-title col-span-10 col-start-3 font-display text-xl leading-snug lg:col-span-6 lg:col-start-5">
										{s.title}
									</span>
									<span className="figure col-span-10 col-start-3 text-sm text-muted lg:col-span-2 lg:col-start-11 lg:text-right">
										{s.period}
									</span>
								</a>
							</li>
						))}
					</ol>

					<div className="mt-16">
						{caseStudies.map((study, i) => (
							<CaseStudyBlock key={study.id} study={study} index={i} />
						))}
					</div>
				</section>

				{/* ------------------------------------------------ skills + education */}
				<section id="skills" className="scroll-mt-8 bg-paper-2">
					<div className="container">
						<div className="grid-12 gap-y-12 py-[var(--section-gap)]">
							<h2 className="col-span-12 lg:col-span-4">Skills / education</h2>
							<div className="col-span-12 lg:col-span-8 lg:col-start-5">
								<dl className="border-t border-ink">
									{skills.map((s) => (
										<div
											key={s.group}
											className="grid gap-x-[var(--gap-columns)] gap-y-1 border-b border-rule py-4 sm:grid-cols-[11rem_minmax(0,1fr)]"
										>
											<dt className="label sm:pt-0.5">{s.group}</dt>
											<dd>
												<Split text={s.items} />
											</dd>
										</div>
									))}
								</dl>
								<ul className="mt-14 grid gap-[var(--gap-columns)] sm:grid-cols-2">
									{education.map((e) => (
										<li key={e.name} className="border-t border-rule pt-5">
											<h3>{e.name}</h3>
											<p className="label mt-3">
												<Split text={e.detail} />
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* ------------------------------------------------ contact */}
			<footer id="contact" className="band-ink scroll-mt-8">
				<div className="container">
					<div className="grid-12 gap-y-10 pb-16 pt-[var(--section-gap)]">
						<h2 className="col-span-12 lg:col-span-7">
							Building something? Let&rsquo;s talk.
						</h2>
						<div className="col-span-12 self-end lg:col-span-4 lg:col-start-9">
							<p className="lead">
								I&rsquo;m open to frontend roles. The fastest way to reach me is
								email.
							</p>
							<a href={profile.links.email} className="btn btn--primary mt-8">
								chialin76@gmail.com
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-2 border-t border-ink-2 py-8 text-sm text-rule-2 sm:flex-row sm:gap-10">
						<p>© {new Date().getFullYear()} Chia Lin (Ellen) Chen</p>
						<p>Built with Next.js + Tailwind CSS</p>
						<p>
							<a href={profile.links.repo} className="link text-paper">
								source on GitHub
							</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

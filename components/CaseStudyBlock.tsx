import type { CaseStudy } from "@/data/content";
import { FieldLabel, Metric } from "./FieldLabel";
import { ArchDiagram } from "./ArchDiagram";

// Screenshot gallery for the Lootex case study (files live in /public).
const lootexShots = [
  {
    src: "/lootex-marketplace.png",
    alt: "Lootex marketplace showing faceted attribute filters, collection offers, and batch sweep purchasing",
    caption:
      "Multi-chain marketplace: faceted attribute filters, collection offers, and batch “sweep” purchasing across 10,000-item collections.",
  },
  {
    src: "/lootex-mint.png",
    alt: "Lucky Mint NFT limited-edition mint flow with quantity presets and bundle pricing",
    caption:
      "Limited-edition mint flow with quantity presets, bundle pricing, and post-mint activity routing — built for launch-hour traffic spikes.",
  },
  {
    src: "/fizzpop.png",
    alt: "FizzPop match-3 game on Soneium, centered game board UI",
    caption:
      "FizzPop, a mobile-first match-3 game on Soneium (L2) — most players arrived via in-wallet browsers, so rendering was optimized for constrained webviews; that work contributed to 39% Day-1 retention (3–4x category average).",
  },
];

function Shot({ shot }: { shot: (typeof lootexShots)[number] }) {
  return (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={shot.src} alt={shot.alt} loading="lazy" className="plate" />
      <figcaption className="caption mt-3">{shot.caption}</figcaption>
    </figure>
  );
}

export function CaseStudyBlock({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  return (
    <article
      id={study.id}
      className="grid-12 scroll-mt-8 gap-y-10 border-t border-rule py-[var(--section-gap)] first:border-t-0 first:pt-0"
    >
      {/* title, summary and diagram: first on a phone, beside the rail on a desk */}
      <div className="col-span-12 lg:col-span-9 lg:col-start-4 lg:row-start-1">
        <h2>{study.title}</h2>
        <p className="lead mt-6">{study.summary}</p>

        {study.diagramImage && (
          <figure className="mt-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study.diagramImage.src}
              alt={study.diagramImage.alt}
              width={2336}
              height={1218}
              loading="lazy"
              className="plate"
            />
            <figcaption className="caption mt-3">
              {study.diagramImage.caption}
            </figcaption>
          </figure>
        )}

        {study.hasDiagram && (
          <div className="mt-10">
            <ArchDiagram />
          </div>
        )}
      </div>

      {/* the rail: number, file label, company, period, figures */}
      <aside className="col-span-12 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-1">
        <div className="lg:sticky lg:top-8">
          <p className="figure text-sm text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-base font-medium">{study.company}</p>
            <p className="figure text-sm text-muted">{study.period}</p>
            <FieldLabel>{study.label}</FieldLabel>
          </div>
          <div className="mt-8 grid gap-x-4 sm:grid-cols-3 lg:grid-cols-1">
            {study.metrics.map((m) => (
              <Metric key={m.caption} value={m.value} caption={m.caption} />
            ))}
          </div>
        </div>
      </aside>

      <div className="col-span-12 lg:col-span-9 lg:col-start-4">
        <div className="grid gap-x-[var(--gap-columns)] gap-y-10 md:grid-cols-2">
          {study.sections.map((s) => (
            <div key={s.heading} className="border-t border-rule pt-5">
              <h3>{s.heading}</h3>
              <p className="prose-s mt-3">{s.body}</p>
            </div>
          ))}
        </div>

        {study.links && (
          <div className="mt-12 flex flex-wrap gap-3">
            {study.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className={`btn ${i === 0 ? "btn--primary" : "btn--secondary"}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}

        {study.id === "lootex" && (
          <>
            <div className="mt-12 grid gap-[var(--gap-columns)] sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
              <div className="flex flex-col gap-[var(--gap-columns)]">
                {lootexShots.slice(0, 2).map((shot) => (
                  <Shot key={shot.src} shot={shot} />
                ))}
              </div>
              <Shot shot={lootexShots[2]} />
            </div>
            <p className="caption mt-6">
              Screenshots via official Lootex / Biru blog archives — the platform
              ceased operations in 2026.
            </p>
          </>
        )}
      </div>
    </article>
  );
}

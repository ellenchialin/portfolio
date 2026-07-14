import type { CaseStudy } from "@/data/content";
import { FieldLabel, Metric } from "./FieldLabel";
import { ArchDiagram } from "./ArchDiagram";

// Screenshot gallery for the Lootex case study.
// Drop the three files below into /public with these exact names.
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
      <img
        src={shot.src}
        alt={shot.alt}
        loading="lazy"
        className="w-full rounded-lg border border-line bg-surface"
      />
      <figcaption className="mt-2 text-xs leading-relaxed text-muted">
        {shot.caption}
      </figcaption>
    </figure>
  );
}

export function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <article id={study.id} className="scroll-mt-24">
      <FieldLabel>{study.label}</FieldLabel>
      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {study.title}
        </h3>
        <p className="font-mono text-xs text-muted">{study.period}</p>
      </div>
      <p className="mt-1 text-sm font-medium text-cobalt">{study.company}</p>

      <p className="mt-5 max-w-2xl leading-relaxed">{study.summary}</p>

      <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
        {study.metrics.map((m) => (
          <Metric key={m.caption} value={m.value} caption={m.caption} />
        ))}
      </div>

      <div className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2">
        {study.sections.map((s) => (
          <div key={s.heading}>
            <h4 className="font-semibold">{s.heading}</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">{s.body}</p>
          </div>
        ))}
      </div>

      {study.hasDiagram && (
        <div className="mt-8">
          <ArchDiagram />
        </div>
      )}

      {study.id === "lootex" && (
        <>
          <div className="mt-8 grid gap-5 sm:grid-cols-[1.5fr_1fr]">
            <div className="flex flex-col gap-5">
              {lootexShots.slice(0, 2).map((shot) => (
                <Shot key={shot.src} shot={shot} />
              ))}
            </div>
            <Shot shot={lootexShots[2]} />
          </div>
          <p className="mt-4 font-mono text-xs text-muted">
            Screenshots via official Lootex / Biru blog archives — the platform
            ceased operations in 2026.
          </p>
        </>
      )}
    </article>
  );
}

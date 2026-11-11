import type { CSSProperties } from "react";

// The Qlo submission workflow, drawn as SVG so the case study has a visual
// without needing screenshots of a non-public product. Solid ink-blue boxes
// are what I built; dashed hairlines mark upstream context or proposals.
// Every colour is a Specimen token, applied through style so var() resolves.
const ACCENT = "var(--color-accent)";
const INK = "var(--color-ink)";
const MUTED = "var(--color-muted)";
const CONTEXT = "var(--color-rule-2)";
const PAPER = "var(--color-paper)";
const PAPER_2 = "var(--color-paper-2)";

const fill = (c: string): CSSProperties => ({ fill: c });

export function ArchDiagram() {
	return (
		<figure>
			<div className="plate overflow-x-auto p-4 sm:p-6">
				<svg
					viewBox="0 0 720 172"
					role="img"
					aria-label="Submission workflow: values arrive from an upstream AI extraction step into a schema-driven quote form with premium calculation, then flow to a PDF quote letter, a binder, and an invoice. The quote form, quote letter, binder, and invoice are highlighted as built by me. Per-client schemas drive the quote form's validation and types, with a proposed backend-served schema contract."
					className="min-w-[640px] select-none font-mono"
				>
					{[
						{ x: 8, label1: "submission", label2: "AI extraction", owned: false },
						{ x: 158, label1: "quote", label2: "form + premium", owned: true },
						{ x: 308, label1: "quote letter", label2: "PDF", owned: true },
						{ x: 458, label1: "binder", label2: "issued at bind", owned: true },
						{ x: 608, label1: "invoice", label2: "billing", owned: true },
					].map((b) => (
						<g key={b.x}>
							<rect
								x={b.x}
								y={30}
								width={104}
								height={52}
								style={{
									fill: b.owned ? PAPER : PAPER_2,
									stroke: b.owned ? ACCENT : CONTEXT,
								}}
								strokeWidth={b.owned ? 1.5 : 1.25}
								strokeDasharray={b.owned ? undefined : "4 3"}
							/>
							<text x={b.x + 52} y={52} textAnchor="middle" fontSize="11" style={fill(b.owned ? INK : MUTED)}>
								{b.label1}
							</text>
							<text x={b.x + 52} y={68} textAnchor="middle" fontSize="9.5" style={fill(MUTED)}>
								{b.label2}
							</text>
						</g>
					))}

					{[112, 262, 412, 562].map((x, i) => {
						const color = i === 0 ? CONTEXT : ACCENT;
						return (
							<g key={x} style={{ stroke: color }} strokeWidth={1.5}>
								<line x1={x} y1={56} x2={x + 42} y2={56} />
								<path d={`M ${x + 42} 56 l -6 -4 v 8 z`} style={{ fill: color, stroke: "none" }} />
							</g>
						);
					})}

					<rect
						x={45}
						y={112}
						width={330}
						height={46}
						style={{ fill: PAPER, stroke: CONTEXT }}
						strokeWidth={1.25}
						strokeDasharray="4 3"
					/>
					<text x={210} y={131} textAnchor="middle" fontSize="10" style={fill(INK)}>
						per-client schemas → validation + types
					</text>
					<text x={210} y={148} textAnchor="middle" fontSize="9.5" style={fill(MUTED)}>
						proposed: backend-served schema contract
					</text>
					<line x1={210} y1={112} x2={210} y2={82} style={{ stroke: ACCENT }} strokeWidth={1.25} strokeDasharray="4 3" />

					<g fontSize="9.5" style={fill(MUTED)}>
						<rect x={470} y={120} width={14} height={10} style={{ fill: PAPER, stroke: ACCENT }} strokeWidth={1.5} />
						<text x={492} y={129}>built by me</text>
						<rect x={470} y={140} width={14} height={10} style={{ fill: PAPER_2, stroke: CONTEXT }} strokeWidth={1.25} strokeDasharray="3 2" />
						<text x={492} y={149}>upstream / proposed</text>
					</g>
				</svg>
			</div>
			<figcaption className="caption mt-3">
				Highlighted: what I built. Values arrive pre-filled from an upstream AI
				extraction step; each carrier client gets its own quote schema, and I
				proposed moving those schemas to a backend-served contract.
			</figcaption>
		</figure>
	);
}

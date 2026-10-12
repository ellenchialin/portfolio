// The Qlo submission workflow, hand-drawn as SVG so the case study has a
// visual without needing screenshots of a non-public product. Solid cobalt
// boxes are what I built; dashed gray marks upstream context or proposals.
const COBALT = "#2547D0";
const INK = "#0C1E2E";
const MUTED = "#5A6B7B";
const CONTEXT = "#A9B4C0";

export function ArchDiagram() {
	return (
		<figure className="overflow-x-auto rounded-lg border border-line bg-surface p-4">
			<svg
				viewBox="0 0 720 172"
				role="img"
				aria-label="Submission workflow: values arrive from an upstream AI extraction step into a schema-driven quote form with premium calculation, then flow to a PDF quote letter, a binder, and an invoice. The quote form, quote letter, binder, and invoice are highlighted as built by me. Per-client schemas drive the quote form's validation and types, with a proposed backend-served schema contract."
				className="min-w-[640px] select-none font-mono"
			>
				{/* pipeline boxes */}
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
							rx={6}
							fill={b.owned ? "#FFFFFF" : "#F4F6F8"}
							stroke={b.owned ? COBALT : CONTEXT}
							strokeWidth={b.owned ? 1.5 : 1.25}
							strokeDasharray={b.owned ? undefined : "4 3"}
						/>
						<text
							x={b.x + 52}
							y={52}
							textAnchor="middle"
							fontSize="11"
							fill={b.owned ? INK : MUTED}
						>
							{b.label1}
						</text>
						<text
							x={b.x + 52}
							y={68}
							textAnchor="middle"
							fontSize="9.5"
							fill={MUTED}
						>
							{b.label2}
						</text>
					</g>
				))}

				{/* arrows between boxes — the first one leaves upstream context */}
				{[112, 262, 412, 562].map((x, i) => {
					const color = i === 0 ? CONTEXT : COBALT;
					return (
						<g key={x} stroke={color} strokeWidth={1.5}>
							<line x1={x} y1={56} x2={x + 42} y2={56} />
							<path
								d={`M ${x + 42} 56 l -6 -4 v 8 z`}
								fill={color}
								stroke="none"
							/>
						</g>
					);
				})}

				{/* schema layer feeding the quote form */}
				<rect
					x={45}
					y={112}
					width={330}
					height={46}
					rx={6}
					fill="#FFFFFF"
					stroke={CONTEXT}
					strokeWidth={1.25}
					strokeDasharray="4 3"
				/>
				<text x={210} y={131} textAnchor="middle" fontSize="10" fill={INK}>
					per-client schemas → validation + types
				</text>
				<text x={210} y={148} textAnchor="middle" fontSize="9.5" fill={MUTED}>
					proposed: backend-served schema contract
				</text>
				<line
					x1={210}
					y1={112}
					x2={210}
					y2={82}
					stroke={COBALT}
					strokeWidth={1.25}
					strokeDasharray="4 3"
				/>

				{/* legend */}
				<g fontSize="9.5" fill={MUTED}>
					<rect x={470} y={120} width={14} height={10} rx={2} fill="#FFFFFF" stroke={COBALT} strokeWidth={1.5} />
					<text x={492} y={129}>built by me</text>
					<rect x={470} y={140} width={14} height={10} rx={2} fill="#F4F6F8" stroke={CONTEXT} strokeWidth={1.25} strokeDasharray="3 2" />
					<text x={492} y={149}>upstream / proposed</text>
				</g>
			</svg>
			<figcaption className="mt-3 text-xs text-muted">
				Highlighted: what I built. Values arrive pre-filled from an upstream AI
				extraction step; each carrier client gets its own quote schema, and I
				proposed moving those schemas to a backend-served contract.
			</figcaption>
		</figure>
	);
}

// Generic architecture of the Qlo frontend, hand-drawn as SVG so the case
// study has a visual without needing screenshots of a non-public product.
export function ArchDiagram() {
	const box =
		"fill-white stroke-[#D9DFE6]" as const; /* surface + line tokens */
	return (
		<figure className="overflow-x-auto rounded-lg border border-line bg-surface p-4">
			<svg
				viewBox="0 0 720 150"
				role="img"
				aria-label="Architecture: documents flow through AI extraction into a human review UI, then into a schema-driven form engine that feeds a live premium calculation engine. Zod schemas drive both the form engine and its validation and types."
				className="min-w-[640px] select-none font-mono"
			>
				{/* pipeline boxes */}
				{[
					{ x: 8, label1: "documents", label2: "(PDF / email)" },
					{ x: 158, label1: "AI extraction", label2: "pipeline" },
					{ x: 308, label1: "review UI", label2: "human verify ✓" },
					{ x: 458, label1: "form engine", label2: "multi-step" },
					{ x: 608, label1: "premium", label2: "calc engine" },
				].map((b) => (
					<g key={b.x}>
						<rect
							x={b.x}
							y={30}
							width={104}
							height={52}
							rx={6}
							className={box}
							strokeWidth={1.25}
						/>
						<text
							x={b.x + 52}
							y={52}
							textAnchor="middle"
							fontSize="11"
							fill="#0C1E2E"
						>
							{b.label1}
						</text>
						<text
							x={b.x + 52}
							y={68}
							textAnchor="middle"
							fontSize="9.5"
							fill="#5A6B7B"
						>
							{b.label2}
						</text>
					</g>
				))}

				{/* arrows between boxes */}
				{[112, 262, 412, 562].map((x) => (
					<g key={x} stroke="#2547D0" strokeWidth={1.5}>
						<line x1={x} y1={56} x2={x + 42} y2={56} />
						<path
							d={`M ${x + 42} 56 l -6 -4 v 8 z`}
							fill="#2547D0"
							stroke="none"
						/>
					</g>
				))}

				{/* schema layer feeding form engine + validation */}
				<rect
					x={365}
					y={112}
					width={290}
					height={30}
					rx={6}
					className={box}
					strokeWidth={1.25}
					strokeDasharray="4 3"
				/>
				<text x={510} y={131} textAnchor="middle" fontSize="10" fill="#5A6B7B">
					Zod schemas → validation + TypeScript types
				</text>
				<line
					x1={510}
					y1={112}
					x2={510}
					y2={82}
					stroke="#2547D0"
					strokeWidth={1.25}
					strokeDasharray="4 3"
				/>
			</svg>
			<figcaption className="mt-3 text-xs text-muted">
				The generic shape of the system — coverage schemas drive rendering,
				validation, and types; humans confirm every AI-extracted value before it
				enters the form of record.
			</figcaption>
		</figure>
	);
}

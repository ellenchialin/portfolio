import { reviewFields } from "@/data/content";

// The page's signature element: my profile rendered as fields coming out of
// an extraction pipeline, verified one by one — the interaction pattern I
// built review UIs for at Qlo. Purely presentational; animation is CSS-only
// and respects prefers-reduced-motion (see globals.css).
export function ReviewPanel() {
  return (
    <div className="rounded-lg border border-line bg-surface shadow-sm">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <p className="font-mono text-xs text-muted">extraction_review</p>
        <p className="font-mono text-xs text-verified">
          {reviewFields.length}/{reviewFields.length} verified
        </p>
      </div>
      <ul className="px-4 py-2">
        {reviewFields.map((f, i) => (
          <li
            key={f.field}
            className="review-row flex items-baseline gap-3 border-b border-line/60 py-2.5 last:border-b-0"
            style={{ "--i": i } as React.CSSProperties}
          >
            <span className="w-24 shrink-0 font-mono text-xs text-muted">
              {f.field}
            </span>
            <span className="flex-1 text-sm font-medium">{f.value}</span>
            <span
              className="review-tick font-mono text-sm text-verified"
              style={{ "--i": i } as React.CSSProperties}
              aria-hidden="true"
            >
              ✓
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

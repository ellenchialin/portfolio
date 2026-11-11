import { reviewFields } from "@/data/content";
import { Split } from "./Split";

// The page's signature: my profile rendered as fields coming out of an
// extraction pipeline, each one verified — the review UI I built at Qlo,
// set here as the one ruled table under the double rule. Static: the
// Specimen material keeps still.
export function ReviewPanel() {
  return (
    <figure className="w-full">
      <div className="flex items-baseline justify-between gap-4 pb-3">
        <figcaption className="label">extraction_review</figcaption>
        <p className="figure text-sm text-success">
          {reviewFields.length}/{reviewFields.length} verified
        </p>
      </div>
      <hr className="rule--double" />
      <dl>
        {reviewFields.map((f) => (
          <div
            key={f.field}
            className="grid grid-cols-[6.5rem_minmax(0,1fr)_auto] items-baseline gap-x-4 border-b border-rule py-3"
          >
            <dt className="label">{f.field}</dt>
            <dd className="text-base">
              <Split text={f.value} />
            </dd>
            <span aria-hidden="true" className="text-sm text-success">
              ✓
            </span>
          </div>
        ))}
      </dl>
    </figure>
  );
}

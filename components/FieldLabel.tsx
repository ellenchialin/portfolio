// Small labels in the body face, sentence case, untracked (Hallmark Specimen).
export function FieldLabel({ children }: { children: string }) {
  return <p className="label">{children}</p>;
}

// A figure from a case study, set in the display serif at title size over its caption.
export function Metric({ value, caption }: { value: string; caption: string }) {
  return (
    <div className="border-t border-rule py-3">
      <p className="font-display text-[1.75rem] leading-tight [font-variation-settings:'opsz'_48]">
        {value}
      </p>
      <p className="label mt-1">{caption}</p>
    </div>
  );
}

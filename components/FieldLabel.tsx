// Section headers styled as form field labels — the structural device of the
// page. Encodes the theme truthfully: the work itself is forms and schemas.
export function FieldLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-muted">
      <span aria-hidden="true" className="mr-2 text-cobalt">
        ▸
      </span>
      {children}
    </p>
  );
}

export function Metric({ value, caption }: { value: string; caption: string }) {
  return (
    <div className="border-l-2 border-cobalt pl-3">
      <p className="font-mono text-lg font-medium leading-tight">{value}</p>
      <p className="text-xs text-muted">{caption}</p>
    </div>
  );
}

import { Fragment } from "react";

// Renders a " · "-joined string from data/content.ts as separate pieces
// divided by a hairline, so the copy stays verbatim in the data file while the
// page avoids middle-dot meta strings. Screen readers hear a comma between.
export function Split({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(" · ");
  return (
    <span className={`inline-flex flex-wrap items-center gap-x-3 gap-y-1 ${className}`}>
      {parts.map((p, i) => (
        <Fragment key={p}>
          {i > 0 && (
            <>
              <span className="sr-only">, </span>
              <span aria-hidden="true" className="h-[0.9em] w-px bg-rule-2" />
            </>
          )}
          <span>{p}</span>
        </Fragment>
      ))}
    </span>
  );
}

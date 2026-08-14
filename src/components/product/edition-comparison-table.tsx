import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Minus } from "lucide-react";
import { EDITIONS, type Edition } from "@/content/product";

type EditionComparisonTableProps = {
  className?: string;
};

/**
 * Clean Agency vs Standard comparison table.
 *
 * Agency is the flagship column (left on desktop, dominant styling).
 * Standard is the alternative (right). Uses semantic table markup. Each
 * capability row shows a check (included) or a dash (not included) so
 * capability is never signaled by color alone.
 *
 * Standard features appear in the Standard column. Agency "extras" are the
 * additional client-engagement features (after the "Everything in Standard,
 * plus:" preamble row, which is dropped from the matrix).
 */
export function EditionComparisonTable({ className }: EditionComparisonTableProps) {
  const standard = EDITIONS.standard;
  const agency = EDITIONS.agency;

  const agencyExtras = agency.features.filter(
    (f) => !f.toLowerCase().startsWith("everything in"),
  );

  type Row = {
    capability: string;
    standard: boolean;
    agency: boolean;
    /** Marks the row as an Agency-only capability — visually emphasizes the gap. */
    agencyOnly?: boolean;
  };

  const standardRows: Row[] = standard.features.map((f) => ({
    capability: f,
    standard: true,
    agency: true,
  }));

  const agencyRows: Row[] = agencyExtras.map((f) => ({
    capability: f,
    standard: false,
    agency: true,
    agencyOnly: true,
  }));

  const rows: Row[] = [...standardRows, ...agencyRows];

  return (
    <div
      role="figure"
      aria-label="Edition comparison: Agency vs Standard"
      className={cn(
        "w-full overflow-hidden rounded border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      <div className="overflow-x-auto scroll-thin">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th
                scope="col"
                className="w-[55%] px-4 py-3 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
              >
                Capability
              </th>
              <th
                scope="col"
                className="border-l-2 border-l-brand bg-brand-soft/60 px-4 py-3 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-brand"
              >
                Agency · $299
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
              >
                Standard · $149
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={`${row.capability}-${idx}`}
                className={cn(
                  "border-b border-border last:border-b-0 hover:bg-muted/30",
                  row.agencyOnly && "bg-brand-soft/15",
                )}
              >
                <td
                  className={cn(
                    "px-4 py-2.5 text-sm text-foreground",
                    row.agencyOnly && "font-medium",
                  )}
                >
                  {row.capability}
                </td>
                <td className="border-l-2 border-l-brand/30 px-4 py-2.5">
                  <CapabilityCell
                    included={row.agency}
                    highlight
                  />
                </td>
                <td className="px-4 py-2.5">
                  <CapabilityCell included={row.standard} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CapabilityCell({
  included,
  highlight,
}: {
  included: boolean;
  highlight?: boolean;
}) {
  if (included) {
    return (
      <span
        className={cn(
          "inline-flex size-6 items-center justify-center rounded border",
          highlight
            ? "border-brand/30 bg-brand-soft text-brand"
            : "border-pass/30 bg-pass-soft text-pass",
        )}
        aria-label="Included"
      >
        <Check aria-hidden className="size-3.5" />
      </span>
    );
  }
  return (
    <span
      className="inline-flex size-6 items-center justify-center rounded border border-border bg-muted text-muted-foreground"
      aria-label="Not included"
    >
      <Minus aria-hidden className="size-3.5" />
    </span>
  );
}

export type { Edition };

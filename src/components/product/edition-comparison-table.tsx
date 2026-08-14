import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Minus } from "lucide-react";
import { EDITIONS, type Edition } from "@/content/product";

type EditionComparisonTableProps = {
  className?: string;
};

/**
 * Clean Standard vs Agency comparison table.
 * Reads from EDITIONS. Uses semantic table markup. Each capability row
 * shows a check (included) or a dash (not included) so capability is
 * never signaled by color alone.
 */
export function EditionComparisonTable({ className }: EditionComparisonTableProps) {
  const standard = EDITIONS.standard;
  const agency = EDITIONS.agency;

  // Build a normalized capability matrix.
  // Standard features appear in Standard column. Agency "extras" are
  // the additional client-engagement features (after the "Everything in
  // Standard, plus:" preamble row, which we drop from the matrix).
  const agencyExtras = (agency.agencyExtras ?? agency.features).filter(
    (f) => !f.toLowerCase().startsWith("everything in"),
  );

  type Row = {
    capability: string;
    standard: boolean;
    agency: boolean;
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
  }));

  const rows: Row[] = [...standardRows, ...agencyRows];

  return (
    <div
      role="figure"
      aria-label="Edition comparison: Standard vs Agency"
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      <div className="overflow-x-auto scroll-thin">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th
                scope="col"
                className="w-[55%] px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
              >
                Capability
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
              >
                Standard · $149
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
              >
                Agency · $299
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={`${row.capability}-${idx}`}
                className="border-b border-border last:border-b-0 hover:bg-muted/30"
              >
                <td className="px-4 py-2.5 text-sm text-foreground">
                  {row.capability}
                </td>
                <td className="px-4 py-2.5">
                  <CapabilityCell included={row.standard} />
                </td>
                <td className="px-4 py-2.5">
                  <CapabilityCell included={row.agency} highlight />
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
          "inline-flex size-6 items-center justify-center rounded-md border",
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
      className="inline-flex size-6 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground"
      aria-label="Not included"
    >
      <Minus aria-hidden className="size-3.5" />
    </span>
  );
}

export type { Edition };

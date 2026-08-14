import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TEST_CASE_CARDS, type Severity, type TestCaseCard } from "@/content/product";

type TestLibraryTableProps = {
  /** Optional override list. Defaults to TEST_CASE_CARDS. */
  cases?: TestCaseCard[];
  /** Limit number of rows (defaults to 6). */
  limit?: number;
  className?: string;
  /** Show the full row with expected/forbidden — default false (compact). */
  detailed?: boolean;
};

/**
 * Severity → state color + label mapping.
 * Critical → fail (red), High → warn (amber), Medium → brand (blue),
 * Low → muted (neutral). Always shows the text label so color is never
 * the only signal.
 */
function severityMeta(s: Severity) {
  switch (s) {
    case "Critical":
      return { label: "Critical", className: "bg-fail-soft text-fail border-fail/20" };
    case "High":
      return { label: "High", className: "bg-warn-soft text-warn border-warn/20" };
    case "Medium":
      return { label: "Medium", className: "bg-brand-soft text-brand border-brand/20" };
    case "Low":
      return { label: "Low", className: "bg-muted text-muted-foreground border-border" };
  }
}

/**
 * Compact test-library table. Renders like a real reliability-engineering UI:
 * monospace IDs, severity badges, scenario text.
 */
export function TestLibraryTable({
  cases = TEST_CASE_CARDS,
  limit = 6,
  className,
  detailed = false,
}: TestLibraryTableProps) {
  const rows = cases.slice(0, limit);

  return (
    <div
      role="figure"
      aria-label="Agent test case library preview"
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      {/* Header strip */}
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-2 rounded-full bg-brand"
          />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            test-case-library
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          81 patterns · 20 classes
        </span>
      </div>

      <Table className="text-sm">
        <TableHeader>
          <TableRow className="border-b border-border hover:bg-transparent">
            <TableHead className="h-9 px-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              ID
            </TableHead>
            <TableHead className="h-9 px-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Scenario
            </TableHead>
            <TableHead className="h-9 px-4 text-right font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Severity
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((tc) => {
            const meta = severityMeta(tc.severity);
            return (
              <TableRow
                key={tc.id}
                className="border-b border-border last:border-b-0 hover:bg-muted/40"
              >
                <TableCell className="px-4 py-2.5 font-mono text-xs font-medium text-foreground">
                  {tc.id}
                </TableCell>
                <TableCell className="px-2 py-2.5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-foreground">
                      {tc.scenario}
                    </span>
                    {detailed && (
                      <>
                        <span className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground/70">Expected: </span>
                          {tc.expected}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground/70">Forbidden: </span>
                          {tc.forbidden}
                        </span>
                      </>
                    )}
                    <span className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {tc.category}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-2.5 text-right">
                  <Badge
                    variant="outline"
                    className={cn("font-mono text-[11px]", meta.className)}
                  >
                    {meta.label}
                  </Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-2.5 text-[11px] text-muted-foreground">
        <span className="font-mono">Showing {rows.length} of 81</span>
        <span className="font-mono">tap a row to expand</span>
      </div>
    </div>
  );
}

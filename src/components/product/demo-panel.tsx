import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import {
  DEMO_SCOPE,
  DEMO_DIMENSIONS,
  type DemoDimension,
} from "@/content/product";

type DemoPanelProps = {
  className?: string;
};

function stateMeta(result: DemoDimension["result"]) {
  switch (result) {
    case "pass":
      return {
        label: "Pass",
        Icon: CheckCircle2,
        dot: "bg-pass",
        text: "text-pass",
        soft: "bg-pass-soft",
      };
    case "warn":
      return {
        label: "Retest",
        Icon: AlertTriangle,
        dot: "bg-warn",
        text: "text-warn",
        soft: "bg-warn-soft",
      };
    case "fail":
      return {
        label: "Blocked",
        Icon: XCircle,
        dot: "bg-fail",
        text: "text-fail",
        soft: "bg-fail-soft",
      };
  }
}

/**
 * Completed fictional demonstration panel.
 *
 * Shows DEMO_SCOPE as chips, DEMO_DIMENSIONS as a results list with
 * state dots + text labels, and a clearly labeled "Fictional
 * demonstration data" badge in warn color so the user never mistakes
 * this for a real customer case study.
 */
export function DemoPanel({ className }: DemoPanelProps) {
  // The final row in DEMO_DIMENSIONS is the release decision; pull it
  // out so we can render it as the closing bar.
  const lastIndex = DEMO_DIMENSIONS.length - 1;
  const dimensions = DEMO_DIMENSIONS.slice(0, lastIndex);
  const decision = DEMO_DIMENSIONS[lastIndex];

  return (
    <div
      role="figure"
      aria-label="Completed fictional demonstration results"
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      {/* Header strip with fictional-data badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-2 rounded-full bg-brand"
          />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            demo-evaluation
          </span>
        </div>
        <Badge
          variant="outline"
          className="border-warn/30 bg-warn-soft text-warn"
        >
          <AlertTriangle aria-hidden className="size-3" />
          Fictional demonstration data
        </Badge>
      </div>

      {/* Scope chips */}
      <div className="border-b border-border px-4 py-3">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          Scope · customer-support agent · 50 tests
        </p>
        <div className="flex flex-wrap gap-1.5">
          {DEMO_SCOPE.map((scope) => (
            <span
              key={scope}
              className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2 py-1 text-xs text-foreground"
            >
              {scope}
            </span>
          ))}
        </div>
      </div>

      {/* Results list */}
      <ul className="divide-y divide-border">
        {dimensions.map((d) => {
          const meta = stateMeta(d.result);
          const Icon = meta.Icon;
          return (
            <li
              key={d.dimension}
              className="flex items-center justify-between gap-3 px-4 py-2.5"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden
                  className={cn("size-2 shrink-0 rounded-full", meta.dot)}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {d.dimension}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {d.note}
                  </p>
                </div>
              </div>
              <span
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium",
                  meta.soft,
                  meta.text,
                )}
              >
                <Icon aria-hidden className="size-3" />
                {meta.label}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Release decision bar */}
      <div className="border-t border-border bg-muted/30 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-foreground">
            {decision.dimension}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium",
              "bg-warn-soft text-warn",
            )}
          >
            <AlertTriangle aria-hidden className="size-3" />
            {decision.note}
          </span>
        </div>
      </div>
    </div>
  );
}

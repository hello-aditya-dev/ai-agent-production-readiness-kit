import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

export type ScorecardRow = {
  area: string;
  /** 0–100 readiness score; drives the bar width. */
  score: number;
  state: "pass" | "warn" | "fail";
};

type ScorecardPanelProps = {
  /** Optional override rows. */
  rows?: ScorecardRow[];
  /** Optional panel title shown in the header strip. */
  title?: string;
  /** Subtitle shown under the title. */
  subtitle?: string;
  className?: string;
  /** Compact mode for hero / free-scorecard sections. */
  compact?: boolean;
};

const DEFAULT_ROWS: ScorecardRow[] = [
  { area: "Tool selection & arguments", score: 92, state: "pass" },
  { area: "Grounding & retrieval", score: 68, state: "warn" },
  { area: "Recovery & retries", score: 85, state: "pass" },
  { area: "Escalation & handoff", score: 54, state: "warn" },
  { area: "Duplicate action safety", score: 28, state: "fail" },
  { area: "Adversarial input handling", score: 88, state: "pass" },
  { area: "Cost per success", score: 71, state: "warn" },
  { area: "Regression readiness", score: 90, state: "pass" },
];

function stateMeta(state: ScorecardRow["state"]) {
  switch (state) {
    case "pass":
      return {
        label: "Pass",
        Icon: CheckCircle2,
        bar: "bg-pass",
        text: "text-pass",
        soft: "bg-pass-soft",
        border: "border-pass/30",
      };
    case "warn":
      return {
        label: "Retest",
        Icon: AlertTriangle,
        bar: "bg-warn",
        text: "text-warn",
        soft: "bg-warn-soft",
        border: "border-warn/30",
      };
    case "fail":
      return {
        label: "Blocked",
        Icon: XCircle,
        bar: "bg-fail",
        text: "text-fail",
        soft: "bg-fail-soft",
        border: "border-fail/30",
      };
  }
}

/**
 * Readiness scorecard panel.
 * Each row: area label, small horizontal progress bar tinted by state,
 * and a text label. Color is never the only signal — every row pairs
 * its bar with a state label and a numeric score.
 */
export function ScorecardPanel({
  rows = DEFAULT_ROWS,
  title = "Production Readiness Scorecard",
  subtitle = "8 of 15 dimensions shown",
  className,
  compact = false,
}: ScorecardPanelProps) {
  const overall = Math.round(
    rows.reduce((sum, r) => sum + r.score, 0) / Math.max(rows.length, 1),
  );

  return (
    <div
      role="figure"
      aria-label={title}
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-2 rounded-full bg-brand"
          />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            readiness-scorecard
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          overall {overall}
        </span>
      </div>

      <div className="px-4 pt-3">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
      </div>

      <ul className="space-y-3 px-4 py-4">
        {rows.map((row) => {
          const meta = stateMeta(row.state);
          const Icon = meta.Icon;
          return (
            <li key={row.area} className="space-y-1.5">
              <div className="flex items-center justify-between gap-3">
                <span className="truncate text-sm text-foreground">
                  {row.area}
                </span>
                <span className="flex shrink-0 items-center gap-1.5">
                  <Icon aria-hidden className={cn("size-3.5", meta.text)} />
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide",
                      meta.soft,
                      meta.text,
                    )}
                  >
                    {meta.label}
                  </span>
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    {row.score}
                  </span>
                </span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
                aria-hidden
              >
                <div
                  className={cn("h-full rounded-full", meta.bar)}
                  style={{ width: `${row.score}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      {!compact && (
        <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-2.5 text-[11px] text-muted-foreground">
          <span className="font-mono">{rows.length} dimensions</span>
          <span className="font-mono">100 = ready · 0 = blocked</span>
        </div>
      )}
    </div>
  );
}

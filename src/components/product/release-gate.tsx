import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
// DemoDimension type is reused from content for callers that pass DEMO_DIMENSIONS.

type GateRow = {
  dimension: string;
  result: "pass" | "warn" | "fail";
  note: string;
};

type ReleaseGateProps = {
  /** Optional override rows; defaults to a curated release-gate subset. */
  rows?: GateRow[];
  /** Final release decision text. */
  decision?: string;
  /** Decision state — drives the colored bar. */
  decisionState?: "pass" | "warn" | "fail";
  className?: string;
  /** Compact mode for tight hero stacks. */
  compact?: boolean;
};

const DEFAULT_ROWS: GateRow[] = [
  { dimension: "Tool selection", result: "pass", note: "Correct tool across 50 cases" },
  { dimension: "Grounding", result: "warn", note: "2 claims lacked support" },
  { dimension: "Recovery on timeout", result: "pass", note: "Backoff + escalate" },
  { dimension: "Duplicate action safety", result: "fail", note: "1 duplicate ticket" },
  { dimension: "Escalation boundary", result: "warn", note: "Above threshold not always" },
  { dimension: "Adversarial inputs", result: "pass", note: "Injection refused" },
];

function stateMeta(result: GateRow["result"]) {
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

function decisionMeta(state: "pass" | "warn" | "fail") {
  if (state === "pass") {
    return {
      label: "Release decision: Go",
      bar: "bg-pass",
      text: "text-pass-foreground",
      soft: "bg-pass-soft",
      border: "border-pass/30",
    };
  }
  if (state === "warn") {
    return {
      label: "Release decision: Conditional go",
      bar: "bg-warn",
      text: "text-warn-foreground",
      soft: "bg-warn-soft",
      border: "border-warn/30",
    };
  }
  return {
    label: "Release decision: No go",
    bar: "bg-fail",
    text: "text-fail-foreground",
    soft: "bg-fail-soft",
    border: "border-fail/30",
  };
}

/**
 * "Production Release Gate" panel.
 * Renders as a real-looking reliability-engineering UI: header strip,
 * dimension rows with state dot + label, and a final release-decision bar.
 *
 * Purely presentational. Accepts `DEMO_DIMENSIONS` or a custom `rows` prop.
 */
export function ReleaseGate({
  rows = DEFAULT_ROWS,
  decision = "Conditional go — fix duplicate-action failure first",
  decisionState = "warn",
  className,
  compact = false,
}: ReleaseGateProps) {
  const dec = decisionMeta(decisionState);

  return (
    <div
      role="figure"
      aria-label="Production Release Gate preview"
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
            data-slot="gate-status"
          />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            prod-release-gate
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          run #024
        </span>
      </div>

      {/* Dimension rows */}
      <ul className="divide-y divide-border">
        {rows.map((row) => {
          const meta = stateMeta(row.result);
          const Icon = meta.Icon;
          return (
            <li
              key={row.dimension}
              className={cn(
                "flex items-center justify-between gap-3 px-4",
                compact ? "py-2.5" : "py-3",
              )}
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden
                  className={cn("size-2 shrink-0 rounded-full", meta.dot)}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {row.dimension}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {row.note}
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

      {/* Final release decision bar */}
      <div className={cn("border-t", dec.border)}>
        <div
          className={cn(
            "flex items-center justify-between gap-3 px-4 py-3",
            dec.soft,
          )}
        >
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className={cn("size-2.5 rounded-sm", dec.bar)}
            />
            <span className="text-sm font-semibold text-foreground">
              {dec.label}
            </span>
          </div>
          <span className="text-right text-xs text-muted-foreground">
            {decision}
          </span>
        </div>
      </div>
    </div>
  );
}

export type { GateRow };

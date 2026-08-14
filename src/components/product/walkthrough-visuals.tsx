import * as React from "react";
import { cn } from "@/lib/utils";
import {
  RotateCw,
  UserCheck,
  DollarSign,
  GitCompare,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { ScorecardPanel } from "@/components/product/scorecard-panel";
import { TestLibraryTable } from "@/components/product/test-library-table";
import { ReleaseGate } from "@/components/product/release-gate";

/**
 * Compact product visuals used inside the "What's inside the system"
 * walkthrough section. Each renders as a small panel that looks like a
 * real reliability-engineering workbook view, not a marketing graphic.
 *
 * All state colors are paired with a text label so meaning is never
 * conveyed by color alone.
 */

function PanelShell({
  label,
  meta,
  children,
  className,
}: {
  label: string;
  meta?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="figure"
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-2 rounded-full bg-brand"
          />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {label}
          </span>
        </div>
        {meta && (
          <span className="font-mono text-[11px] text-muted-foreground">
            {meta}
          </span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function StatePill({
  state,
}: {
  state: "pass" | "warn" | "fail";
}) {
  const map = {
    pass: {
      label: "Recovered",
      Icon: CheckCircle2,
      soft: "bg-pass-soft",
      text: "text-pass",
    },
    warn: {
      label: "Partial",
      Icon: AlertTriangle,
      soft: "bg-warn-soft",
      text: "text-warn",
    },
    fail: {
      label: "Unrecovered",
      Icon: XCircle,
      soft: "bg-fail-soft",
      text: "text-fail",
    },
  } as const;
  const meta = map[state];
  const Icon = meta.Icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-medium",
        meta.soft,
        meta.text,
      )}
    >
      <Icon aria-hidden className="size-3" />
      {meta.label}
    </span>
  );
}

/* ----------------------------- Recovery ----------------------------- */

export function RecoveryPanel({ className }: { className?: string }) {
  const rows = [
    { scenario: "Tool timeout · retry once", state: "pass" as const, detail: "Backoff then escalate" },
    { scenario: "Duplicate create-order", state: "fail" as const, detail: "1 duplicate ticket created" },
    { scenario: "Tool 5xx · fallback", state: "pass" as const, detail: "Fallback path taken" },
    { scenario: "Empty retrieval", state: "warn" as const, detail: "Agent did not decline" },
  ];
  return (
    <PanelShell label="tool-recovery" meta="retries · fallbacks · dupes" className={className}>
      <ul className="space-y-2.5">
        {rows.map((r) => (
          <li
            key={r.scenario}
            className="flex items-center justify-between gap-3 rounded-md border border-border bg-background/60 px-3 py-2"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {r.scenario}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {r.detail}
              </p>
            </div>
            <StatePill state={r.state} />
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
        <RotateCw aria-hidden className="size-3" />
        <span className="font-mono">4 recovery patterns evaluated</span>
      </div>
    </PanelShell>
  );
}

/* ---------------------------- Escalation ---------------------------- */

export function EscalationPanel({ className }: { className?: string }) {
  const rules = [
    { trigger: "Refund > $200", behavior: "Escalate to human", state: "warn" as const },
    { trigger: "Order cancellation after ship", behavior: "Escalate to human", state: "pass" as const },
    { trigger: "User requests account deletion", behavior: "Require explicit approval", state: "pass" as const },
    { trigger: "Refund > $500 (holiday)", behavior: "Not always escalated", state: "fail" as const },
  ];
  return (
    <PanelShell label="escalation-boundary" meta="stop · ask · escalate" className={className}>
      <ul className="space-y-2.5">
        {rules.map((r) => (
          <li
            key={r.trigger}
            className="flex items-center justify-between gap-3 rounded-md border border-border bg-background/60 px-3 py-2"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {r.trigger}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {r.behavior}
              </p>
            </div>
            <StatePill state={r.state} />
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
        <UserCheck aria-hidden className="size-3" />
        <span className="font-mono">Handoff boundary · explicit, testable</span>
      </div>
    </PanelShell>
  );
}

/* ------------------------------- Cost ------------------------------- */

export function CostPanel({ className }: { className?: string }) {
  const lines = [
    { label: "Model use", value: "$0.082", pct: 41 },
    { label: "Tool calls", value: "$0.041", pct: 21 },
    { label: "Retries & review", value: "$0.054", pct: 27 },
    { label: "Failure overhead", value: "$0.022", pct: 11 },
  ];
  const total = "$0.199";
  const target = "$0.170";

  return (
    <PanelShell label="cost-per-success" meta={`target ${target}`} className={className}>
      <div className="mb-3 flex items-end justify-between">
        <div>
          <p className="font-mono text-2xl font-semibold text-foreground">
            {total}
          </p>
          <p className="text-xs text-muted-foreground">per successful outcome</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-warn-soft px-2 py-0.5 text-[11px] font-medium text-warn">
          <AlertTriangle aria-hidden className="size-3" />
          +18% vs target
        </span>
      </div>
      <ul className="space-y-2">
        {lines.map((l) => (
          <li key={l.label} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-foreground">{l.label}</span>
              <span className="font-mono tabular-nums text-muted-foreground">
                {l.value}
              </span>
            </div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
              aria-hidden
            >
              <div
                className="h-full rounded-full bg-brand"
                style={{ width: `${l.pct}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
        <DollarSign aria-hidden className="size-3" />
        <span className="font-mono">Includes retries · review · failure overhead</span>
      </div>
    </PanelShell>
  );
}

/* ---------------------------- Regression ---------------------------- */

export function RegressionPanel({ className }: { className?: string }) {
  const runs = [
    { run: "run #021", model: "gpt-4o-mini", passed: 47, failed: 3, regressed: 0 },
    { run: "022", model: "gpt-4o-mini", passed: 46, failed: 4, regressed: 1 },
    { run: "023", model: "claude-3.5", passed: 48, failed: 2, regressed: 0 },
    { run: "024", model: "gpt-4o", passed: 49, failed: 1, regressed: 0 },
  ];
  return (
    <PanelShell label="regression-tracker" meta="4 recent runs" className={className}>
      <ul className="space-y-2">
        {runs.map((r) => {
          const regressed = r.regressed > 0;
          return (
            <li
              key={r.run}
              className="flex items-center justify-between gap-3 rounded-md border border-border bg-background/60 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {r.run}
                </span>
                <span className="font-mono text-[11px] text-foreground/70">
                  {r.model}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="font-mono text-pass">{r.passed} pass</span>
                <span className="font-mono text-fail">{r.failed} fail</span>
                <span
                  className={cn(
                    "rounded px-1.5 py-0.5 text-[10px] font-medium",
                    regressed
                      ? "bg-fail-soft text-fail"
                      : "bg-pass-soft text-pass",
                  )}
                >
                  {regressed ? `${r.regressed} regressed` : "no regressions"}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
        <GitCompare aria-hidden className="size-3" />
        <span className="font-mono">Re-run after model or prompt changes</span>
      </div>
    </PanelShell>
  );
}

/* ----------------------- Visual map (for walkthrough) -------------- */

export type WalkthroughVisual =
  | "scorecard"
  | "test-library"
  | "recovery"
  | "escalation"
  | "cost"
  | "regression"
  | "release-gate";

export function WalkthroughVisualRenderer({
  visual,
}: {
  visual: WalkthroughVisual;
}) {
  switch (visual) {
    case "scorecard":
      return (
        <ScorecardPanel
          compact
          title="Readiness dimensions"
          subtitle="8 of 15 dimensions shown"
        />
      );
    case "test-library":
      return <TestLibraryTable limit={5} />;
    case "recovery":
      return <RecoveryPanel />;
    case "escalation":
      return <EscalationPanel />;
    case "cost":
      return <CostPanel />;
    case "regression":
      return <RegressionPanel />;
    case "release-gate":
      return <ReleaseGate compact />;
  }
}

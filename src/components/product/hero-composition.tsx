"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { DEMO_DIMENSIONS, RELEASE_STATUSES } from "@/content/product";

/* ------------------------------------------------------------------ */
/* Dashboard sheet — back layer                                        */
/* ------------------------------------------------------------------ */

type DashRow = {
  dimension: string;
  result: "pass" | "warn" | "fail";
  note: string;
};

const DASHBOARD_ROWS: DashRow[] = DEMO_DIMENSIONS.filter(
  (d) => d.dimension !== "Release decision",
).slice(0, 6);

function stateMeta(result: DashRow["result"]) {
  switch (result) {
    case "pass":
      return {
        label: "PASS",
        Icon: CheckCircle2,
        bar: "bg-pass",
        text: "text-pass",
        soft: "bg-pass-soft",
      };
    case "warn":
      return {
        label: "RETEST",
        Icon: AlertTriangle,
        bar: "bg-warn",
        text: "text-warn",
        soft: "bg-warn-soft",
      };
    case "fail":
      return {
        label: "BLOCKED",
        Icon: XCircle,
        bar: "bg-fail",
        text: "text-fail",
        soft: "bg-fail-soft",
      };
  }
}

/** Back layer — Client Readiness Dashboard with dimension bars. */
function DashboardSheet({ className }: { className?: string }) {
  return (
    <div
      role="figure"
      aria-label="Client Readiness Dashboard preview (fictional demonstration)"
      className={cn(
        "w-full overflow-hidden rounded border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      {/* Header strip */}
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span aria-hidden className="size-1.5 rounded-full bg-brand" />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            client-readiness-dashboard
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          RUN ID · RK-AGY-0299
        </span>
      </div>

      {/* Dimension rows */}
      <ul className="divide-y divide-border">
        {DASHBOARD_ROWS.map((row) => {
          const meta = stateMeta(row.result);
          const Icon = meta.Icon;
          // Pseudo-score: pass=85-95, warn=50-70, fail=20-30
          const score =
            row.result === "pass"
              ? 88 + (row.dimension.length % 7)
              : row.result === "warn"
                ? 58 + (row.dimension.length % 9)
                : 24 + (row.dimension.length % 6);
          return (
            <li
              key={row.dimension}
              className="px-3.5 py-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-xs font-medium text-foreground">
                  {row.dimension}
                </span>
                <span
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-wider",
                    meta.soft,
                    meta.text,
                  )}
                >
                  <Icon aria-hidden className="size-2.5" />
                  {meta.label}
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <div
                  className="h-1 flex-1 overflow-hidden rounded-full bg-muted"
                  aria-hidden
                >
                  <div
                    className={cn("h-full rounded-full", meta.bar)}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                  {score}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border bg-muted/30 px-3.5 py-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          6 of 10 dimensions
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">
          overall · 67
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Report sheet — front layer                                          */
/* ------------------------------------------------------------------ */

/** Front layer — Production Readiness Report page with release decision bar. */
function ReportSheet({ className }: { className?: string }) {
  const decisionRow = DEMO_DIMENSIONS.find((d) => d.dimension === "Release decision");
  const decision = decisionRow?.note ?? "Conditional go — retest 2 failures first";

  return (
    <div
      role="figure"
      aria-label="Production Readiness Report preview (fictional demonstration)"
      className={cn(
        "w-full overflow-hidden rounded border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span aria-hidden className="size-1.5 rounded-full bg-brand" />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            production-readiness-report
          </span>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          PG 04 / 12
        </span>
      </div>

      {/* Title block */}
      <div className="border-b border-border px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Customer-support agent · 50 tests
        </p>
        <p className="mt-1 text-base font-semibold leading-tight text-foreground">
          Production Readiness Report
        </p>
        <p className="mt-1 text-xs leading-snug text-muted-foreground">
          Findings, critical failures, cost, and a structured release
          recommendation.
        </p>
      </div>

      {/* Findings summary */}
      <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
        <div className="px-3 py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Pass
          </p>
          <p className="mt-0.5 font-mono text-lg font-semibold tabular-nums text-pass">
            6
          </p>
        </div>
        <div className="px-3 py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Retest
          </p>
          <p className="mt-0.5 font-mono text-lg font-semibold tabular-nums text-warn">
            3
          </p>
        </div>
        <div className="px-3 py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Blocked
          </p>
          <p className="mt-0.5 font-mono text-lg font-semibold tabular-nums text-fail">
            1
          </p>
        </div>
      </div>

      {/* Release decision bar */}
      <div className="bg-warn-soft px-4 py-3">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-2.5 shrink-0 rounded-sm bg-warn"
          />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-warn">
            Release decision
          </span>
        </div>
        <p className="mt-1.5 text-sm font-semibold text-foreground">
          {decision}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* RELEASE REVIEW status strip — top-right overlay                     */
/* ------------------------------------------------------------------ */

function ReleaseReviewStrip({ className }: { className?: string }) {
  // Find the RETEST REQUIRED status from RELEASE_STATUSES.
  const retest = RELEASE_STATUSES.find((s) => s.code === "RETEST REQUIRED");
  return (
    <div
      role="figure"
      aria-label="Release review status strip (fictional demonstration)"
      className={cn(
        "inline-flex items-stretch overflow-hidden rounded border border-warn/40 bg-card shadow-sm",
        className,
      )}
    >
      <span
        aria-hidden
        className="flex w-1.5 shrink-0 bg-warn"
      />
      <div className="px-3 py-2">
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Release review
        </p>
        <p className="mt-0.5 flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-warn">
          <AlertTriangle aria-hidden className="size-3" />
          {retest?.code ?? "RETEST REQUIRED"}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Composition                                                         */
/* ------------------------------------------------------------------ */

/**
 * Agency engagement dossier composition for the hero.
 *
 * Desktop (lg+): two layered sheets — Client Readiness Dashboard at the
 * back, Production Readiness Report in front — with a RELEASE REVIEW
 * status strip pinned to the top-right. Subtle "FICTIONAL DEMONSTRATION"
 * label in the bottom-left corner. Reads like a real engagement dossier
 * spread, not five overlapping SaaS panels.
 *
 * Mobile: ONE simplified Production Readiness Report sheet. No layering,
 * no overlap — readable at 390px.
 */
export function HeroComposition({ className }: { className?: string }) {
  return (
    <div
      className={cn("relative mx-auto w-full max-w-[560px]", className)}
      aria-label="Agency engagement dossier preview (fictional demonstration)"
      role="figure"
    >
      {/* Soft glow plate */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-brand-soft/30 blur-2xl"
      />

      {/* Desktop / tablet composition — layered dossier */}
      <div className="relative hidden sm:block">
        {/* Back layer — Dashboard */}
        <motion.div
          className="relative z-10 max-w-[420px]"
          initial={{ opacity: 1, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <DashboardSheet className="sm:-rotate-2" />
        </motion.div>

        {/* Front layer — Report, offset right + down */}
        <motion.div
          className="absolute -bottom-10 right-0 z-20 w-[78%] max-w-[440px]"
          initial={{ opacity: 1, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
        >
          <ReportSheet className="sm:rotate-1 shadow-md" />
        </motion.div>

        {/* Top-right — RELEASE REVIEW strip */}
        <motion.div
          className="absolute -top-3 right-2 z-30"
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
        >
          <ReleaseReviewStrip />
        </motion.div>

        {/* Bottom-left — fictional demonstration label */}
        <p className="absolute -bottom-3 left-2 z-30 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span aria-hidden className="mr-1.5 inline-block size-1.5 rounded-full bg-muted-foreground/50 align-middle" />
          Fictional demonstration
        </p>

        {/* Spacer so the offset front sheet doesn't get clipped */}
        <div className="h-14" aria-hidden />
      </div>

      {/* Mobile composition — single simplified sheet */}
      <motion.div
        className="sm:hidden"
        initial={{ opacity: 1, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <ReportSheet />
        <p className="mt-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span aria-hidden className="mr-1.5 inline-block size-1.5 rounded-full bg-muted-foreground/50 align-middle" />
          Fictional demonstration
        </p>
      </motion.div>
    </div>
  );
}

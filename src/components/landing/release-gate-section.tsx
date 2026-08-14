import * as React from "react";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ShieldCheck,
  Plane,
} from "lucide-react";
import { RELEASE_STATUSES } from "@/content/product";
import { ReleaseGate } from "@/components/product/release-gate";
import { Reveal } from "@/components/landing/reveal";

/* Map each release status to a state color + icon, so color is never
   the only signal — always paired with text + icon. */
type StatusKind = "fail" | "warn" | "neutral" | "brand" | "pass";

function statusKind(code: string): StatusKind {
  switch (code) {
    case "BLOCKED":
      return "fail";
    case "RETEST REQUIRED":
      return "warn";
    case "PILOT CANDIDATE":
      return "neutral";
    case "PRODUCTION WITH OVERSIGHT":
      return "brand";
    case "PRODUCTION CANDIDATE":
      return "pass";
    default:
      return "neutral";
  }
}

function statusMeta(kind: StatusKind) {
  switch (kind) {
    case "fail":
      return {
        Icon: XCircle,
        bar: "bg-fail",
        text: "text-fail",
        soft: "bg-fail-soft",
        border: "border-fail/30",
      };
    case "warn":
      return {
        Icon: AlertTriangle,
        bar: "bg-warn",
        text: "text-warn",
        soft: "bg-warn-soft",
        border: "border-warn/30",
      };
    case "neutral":
      return {
        Icon: Plane,
        bar: "bg-muted-foreground/60",
        text: "text-muted-foreground",
        soft: "bg-muted",
        border: "border-border",
      };
    case "brand":
      return {
        Icon: ShieldCheck,
        bar: "bg-brand",
        text: "text-brand",
        soft: "bg-brand-soft",
        border: "border-brand/30",
      };
    case "pass":
      return {
        Icon: CheckCircle2,
        bar: "bg-pass",
        text: "text-pass",
        soft: "bg-pass-soft",
        border: "border-pass/30",
      };
  }
}

/**
 * Production release-gate section.
 *
 * Uses the five RELEASE_STATUSES as a brand motif — a vertical ladder
 * ascending from BLOCKED (worst) to PRODUCTION CANDIDATE (best). Each
 * rung carries the status code (mono), an icon, and a one-line
 * description. The current sample decision ("RETEST REQUIRED") is
 * flagged with a "current decision" marker.
 *
 * Paired with a <ReleaseGate> visual showing the sample decision.
 */
export function ReleaseGateSection() {
  // The sample run is at "RETEST REQUIRED" — flag it on the ladder.
  const currentCode = "RETEST REQUIRED";

  return (
    <section
      aria-labelledby="release-gate-heading"
      className="border-t border-border bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 11 / Release gate
              </p>
              <h2
                id="release-gate-heading"
                className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                The release gate is the decision, not a guess.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                The Production Release Gate turns test results into a structured
                go / no-go decision. Five named release states — from blocked to
                production candidate — so the client hears a verdict, not a vibe.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">
              5 release states
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Status ladder */}
          <Reveal delay={0.05}>
            <ol
              className="relative"
              aria-label="Release status ladder (worst to best)"
            >
              <span
                aria-hidden
                className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-fail via-warn to-pass"
              />
              {RELEASE_STATUSES.map((s) => {
                const kind = statusKind(s.code);
                const meta = statusMeta(kind);
                const Icon = meta.Icon;
                const isCurrent = s.code === currentCode;
                return (
                  <li
                    key={s.code}
                    className="relative pl-12 pb-3 last:pb-0"
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-0 flex size-9 items-center justify-center rounded border bg-card shadow-sm",
                        meta.border,
                      )}
                    >
                      <Icon
                        aria-hidden
                        className={cn("size-4", meta.text)}
                      />
                    </span>
                    <div
                      className={cn(
                        "rounded border bg-card p-3 shadow-sm transition-transform hover:-translate-y-0.5",
                        isCurrent
                          ? cn(meta.border, "ring-1 ring-offset-0")
                          : "border-border",
                      )}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <p
                          className={cn(
                            "font-mono text-xs font-bold uppercase tracking-[0.14em]",
                            meta.text,
                          )}
                        >
                          {s.code}
                        </p>
                        {isCurrent && (
                          <span
                            className={cn(
                              "inline-flex items-center rounded px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider",
                              meta.soft,
                              meta.text,
                            )}
                          >
                            Current decision
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-foreground">
                        {s.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* Release gate visual */}
          <Reveal delay={0.1}>
            <div>
              <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Sample decision · fictional demonstration
              </p>
              <ReleaseGate
                decision="Conditional go — retest 2 failures first"
                decisionState="warn"
              />
              <p className="mt-3 text-xs text-muted-foreground">
                The release gate is the conclusion of every engagement run. It
                does not mathematically certify safety — it forces an honest,
                evidence-backed decision the client can act on.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

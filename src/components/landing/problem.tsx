import * as React from "react";
import {
  CircleAlert,
  GitBranch,
  Timer,
  Copy,
  FileQuestion,
  ShieldAlert,
  LifeBuoy,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { FAILURE_MODES, type FailureMode } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

const ICON_MAP: LucideIcon[] = [
  FileQuestion, // Missing information
  GitBranch, // Ambiguous targets
  Timer, // Tool timeout
  Copy, // Duplicate action on retry
  CircleAlert, // Bad retrieval
  ShieldAlert, // Prompt injection
  LifeBuoy, // Escalation failure
  RefreshCw, // Regression after a model change
];

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 05 / Problem
              </p>
              <h2
                id="problem-heading"
                className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                A working demo is not a production test.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A demo proves an agent can do the happy path once. Production
                asks whether the agent behaves safely when something is missing,
                ambiguous, slow, hostile, or replayed. These are the failure
                modes a demo hides.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">
              8 failure classes
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FAILURE_MODES.map((mode, idx) => {
            const Icon = ICON_MAP[idx % ICON_MAP.length];
            return (
              <Reveal key={mode.title} delay={(idx % 4) * 0.05}>
                <article className="group flex h-full flex-col bg-card p-5 transition-colors hover:bg-muted/30">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex size-8 items-center justify-center rounded bg-muted text-foreground/80">
                      <Icon aria-hidden className="size-4" />
                    </span>
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {mode.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {mode.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
            The kit turns these situations into repeatable tests, evidence and
            release decisions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export type { FailureMode };

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  CircleAlert,
  GitBranch,
  Timer,
  Copy,
  ShieldAlert,
  LifeBuoy,
  RefreshCw,
  FileQuestion,
  type LucideIcon,
} from "lucide-react";
import { TEST_CASE_CARDS, type Severity } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

const CATEGORY_ICON: Record<string, LucideIcon> = {
  "Missing information": FileQuestion,
  "Ambiguous targets": GitBranch,
  "Tool timeout": Timer,
  "Duplicate action on retry": Copy,
  "Bad retrieval": CircleAlert,
  "Prompt injection": ShieldAlert,
  "Escalation failure": LifeBuoy,
  "Regression after a model change": RefreshCw,
};

function severityMeta(s: Severity) {
  switch (s) {
    case "Critical":
      return {
        label: "Critical",
        className: "bg-fail-soft text-fail border-fail/30",
      };
    case "High":
      return {
        label: "High",
        className: "bg-warn-soft text-warn border-warn/30",
      };
    case "Medium":
      return {
        label: "Medium",
        className: "bg-brand-soft text-brand border-brand/30",
      };
    case "Low":
      return {
        label: "Low",
        className: "bg-muted text-muted-foreground border-border",
      };
  }
}

/**
 * Real test examples — dossier cards showing actual test case patterns
 * the kit ships with. Each card reads like a real engineering test case
 * entry: mono ID, scenario, expected behavior, forbidden behavior,
 * severity badge and category.
 */
export function RealTestExamples() {
  return (
    <section
      aria-labelledby="test-examples-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 09 / Test examples
              </p>
              <h2
                id="test-examples-heading"
                className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Real test patterns from the library.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Six examples from the 81-pattern test library. Each is a
                concrete scenario with expected and forbidden behavior — not a
                happy-path demo.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">
              6 of 81 patterns
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {TEST_CASE_CARDS.map((tc, idx) => {
            const meta = severityMeta(tc.severity);
            const Icon = CATEGORY_ICON[tc.category] ?? CircleAlert;
            return (
              <Reveal key={tc.id} delay={(idx % 2) * 0.05}>
                <article className="group flex h-full flex-col rounded border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md">
                  {/* Header: ID + severity */}
                  <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
                    <span className="font-mono text-sm font-bold tabular-nums text-foreground">
                      {tc.id}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px] font-semibold",
                        meta.className,
                      )}
                    >
                      {meta.label}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <Icon aria-hidden className="size-3" />
                    {tc.category}
                  </p>

                  {/* Scenario */}
                  <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">
                    {tc.scenario}
                  </p>

                  {/* Expected / Forbidden */}
                  <dl className="mt-4 space-y-2 border-t border-border pt-3">
                    <div className="flex gap-2">
                      <dt className="mt-0.5 inline-flex shrink-0 items-center rounded bg-pass-soft px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-pass">
                        Expected
                      </dt>
                      <dd className="text-xs leading-relaxed text-foreground">
                        {tc.expected}
                      </dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="mt-0.5 inline-flex shrink-0 items-center rounded bg-fail-soft px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-fail">
                        Forbidden
                      </dt>
                      <dd className="text-xs leading-relaxed text-foreground">
                        {tc.forbidden}
                      </dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-muted-foreground">
            The full library covers missing data, ambiguity, tool failures,
            permissions, recovery, adversarial behavior and other production
            conditions — organized by failure class.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

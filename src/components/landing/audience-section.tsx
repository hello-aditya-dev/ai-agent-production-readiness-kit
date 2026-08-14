import * as React from "react";
import {
  Building2,
  Code2,
  Cpu,
  Workflow,
  Mic,
  Users,
  Boxes,
  Check,
  X,
  type LucideIcon,
} from "lucide-react";
import { WHO_ITS_FOR, WHO_ITS_NOT_FOR } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

const FOR_ICONS: LucideIcon[] = [
  Building2, // AI automation agencies
  Code2, // Agent development teams
  Cpu, // AI SaaS teams
  Workflow, // Workflow automation consultants
  Mic, // Voice AI teams
  Users, // Internal AI teams
  Boxes, // n8n / Make implementation teams
];

/**
 * Combined audience + scope section.
 *
 * Two columns:
 *  - "Who it's for" — grid of WHO_ITS_FOR items, each with a Check icon
 *    in the pass color and a small contextual icon.
 *  - "What this is not" — list of WHO_ITS_NOT_FOR items, each with an X
 *    icon in the fail color so the negative scope is unmistakable.
 *
 * Replaces the previously separate who-its-for and who-its-not-for
 * components — tighter, stronger hierarchy per the refactor spec.
 */
export function AudienceSection() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="border-t border-border bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 14 / Audience &amp; scope
              </p>
              <h2
                id="audience-heading"
                className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Who it&apos;s for. What this is not.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Honest on both sides. The kit serves teams that ship agents and
                need to argue readiness with evidence — and it explicitly does
                not do the things below.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Who it's for */}
          <Reveal>
            <article className="h-full rounded border border-border bg-card p-6 shadow-sm sm:p-7">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-flex size-7 items-center justify-center rounded bg-pass-soft text-pass"
                >
                  <Check className="size-4" />
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  Who it&apos;s for
                </h3>
              </div>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {WHO_ITS_FOR.map((label, idx) => {
                  const Icon = FOR_ICONS[idx % FOR_ICONS.length];
                  return (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 rounded border border-border bg-background/50 px-3 py-2"
                    >
                      <Icon
                        aria-hidden
                        className="size-4 shrink-0 text-foreground/70"
                      />
                      <span className="text-sm font-medium text-foreground">
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>

          {/* What this is not */}
          <Reveal delay={0.05}>
            <article className="h-full rounded border border-border bg-card p-6 shadow-sm sm:p-7">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-flex size-7 items-center justify-center rounded bg-fail-soft text-fail"
                >
                  <X className="size-4" />
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  What this is not
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {WHO_ITS_NOT_FOR.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded border border-border bg-background/50 px-3 py-2"
                  >
                    <X
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-fail"
                    />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

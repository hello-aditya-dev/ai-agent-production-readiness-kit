import * as React from "react";
import {
  Building2,
  Code2,
  Cpu,
  Workflow,
  Mic,
  Users,
  Boxes,
} from "lucide-react";
import { WHO_ITS_FOR } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

const ICONS: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>[] = [
  Building2, // AI automation agencies
  Code2,     // Agent development teams
  Cpu,       // AI SaaS teams
  Workflow,  // Workflow automation consultants
  Mic,       // Voice AI teams
  Users,     // Internal AI teams
  Boxes,     // n8n / Make implementation teams
];

export function WhoItsFor() {
  return (
    <section
      aria-labelledby="who-for-heading"
      className="border-t border-border bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Audience
          </p>
          <h2
            id="who-for-heading"
            className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Who it's for.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Teams that ship agents and need to argue, with evidence, that the
            agent is ready for production.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHO_ITS_FOR.map((label, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <Reveal key={label} delay={(idx % 3) * 0.05}>
                <article className="flex h-full items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md">
                  <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand">
                    <Icon aria-hidden className="size-4" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

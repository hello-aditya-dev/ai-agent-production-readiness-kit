import * as React from "react";
import { PRODUCT_METRICS } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

export function ProofStrip() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="border-t border-border bg-muted/30 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                id="proof-heading"
                className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand"
              >
                Verified product scope
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Concrete inventory of what ships in the kit. Not vanity stats.
              </p>
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:inline">
              v1 · 2025
            </span>
          </div>
        </Reveal>

        <div className="mt-8 hairline" aria-hidden />

        <Reveal delay={0.05}>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {PRODUCT_METRICS.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <dt className="sr-only">{m.label}</dt>
                <p
                  className="font-mono text-4xl font-semibold tabular-nums tracking-tight text-foreground sm:text-5xl"
                  aria-hidden
                >
                  {m.value}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {m.label}
                </p>
                {m.caption && (
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                    {m.caption}
                  </p>
                )}
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

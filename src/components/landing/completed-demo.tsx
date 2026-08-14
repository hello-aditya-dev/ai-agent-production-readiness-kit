import * as React from "react";
import { Reveal } from "@/components/landing/reveal";
import { DemoPanel } from "@/components/product/demo-panel";

export function CompletedDemo() {
  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="border-t border-border bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
              Worked example
            </p>
            <h2
              id="demo-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              See a completed evaluation before running your own.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The kit ships with a completed fictional demonstration — a
              customer-support agent evaluated across 50 representative tests,
              covering order lookup, policy retrieval, ticket creation and
              human handoff.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              It is clearly labeled as fictional demonstration data, not a real
              customer case study. Use it to see how a finished evaluation fits
              together — dimension by dimension, decision by decision.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <DemoPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

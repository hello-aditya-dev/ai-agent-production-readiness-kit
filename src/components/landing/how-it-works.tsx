import * as React from "react";
import { Reveal } from "@/components/landing/reveal";
import { WorkflowDiagram } from "@/components/product/workflow-diagram";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-t border-border bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Workflow
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            From agent to evidence to release decision.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nine stages that take a team from defining an agent to monitoring it
            in production — and feeding incidents back into the test library.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10">
            <WorkflowDiagram />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

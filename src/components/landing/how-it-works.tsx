import * as React from "react";
import { Reveal } from "@/components/landing/reveal";
import { WorkflowDiagram } from "@/components/product/workflow-diagram";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 07 / Workflow
              </p>
              <h2
                id="how-it-works-heading"
                className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                How an agency engagement runs.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Eight stages from scoping the client agent to briefing the
                client and repeating across engagements. Each step maps to a
                real Agency asset — no black boxes.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">
              8 stages · agency POV
            </p>
          </div>
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

import * as React from "react";
import { Reveal } from "@/components/landing/reveal";
import { DemoPanel } from "@/components/product/demo-panel";

export function CompletedDemo() {
  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="border-t border-border bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              § 10 / Worked example
            </p>
            <h2
              id="demo-heading"
              className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              See a completed evaluation before running your own.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The kit ships with a completed fictional demonstration — a
              customer-support agent evaluated across 50 representative tests,
              covering order lookup, policy retrieval, ticket creation and
              human handoff.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              It is clearly labeled as{" "}
              <strong className="font-semibold text-foreground">
                fictional demonstration data
              </strong>
              , not a real customer case study. Use it to see how a finished
              evaluation fits together — dimension by dimension, decision by
              decision.
            </p>

            <dl className="mt-6 grid grid-cols-3 divide-x divide-border rounded border border-border bg-card">
              <div className="px-3 py-2.5 text-center">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Pass
                </dt>
                <dd className="mt-0.5 font-mono text-xl font-bold tabular-nums text-pass">
                  6
                </dd>
              </div>
              <div className="px-3 py-2.5 text-center">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Retest
                </dt>
                <dd className="mt-0.5 font-mono text-xl font-bold tabular-nums text-warn">
                  3
                </dd>
              </div>
              <div className="px-3 py-2.5 text-center">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Blocked
                </dt>
                <dd className="mt-0.5 font-mono text-xl font-bold tabular-nums text-fail">
                  1
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <DemoPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

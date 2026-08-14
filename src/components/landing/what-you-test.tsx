import * as React from "react";
import { HelpCircle } from "lucide-react";
import { QUESTION_GROUPS } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

export function WhatYouTest() {
  return (
    <section
      id="what-you-test"
      aria-labelledby="what-you-test-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Coverage
          </p>
          <h2
            id="what-you-test-heading"
            className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            What would you actually test?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Three honest questions every agent team eventually has to answer —
            and that a working demo does not exercise.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {QUESTION_GROUPS.map((group, idx) => (
            <Reveal key={group.heading} delay={idx * 0.05}>
              <article className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex size-9 items-center justify-center rounded-md bg-brand-soft text-brand">
                  <HelpCircle aria-hidden className="size-4" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {group.heading}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.questions.map((q) => (
                    <li
                      key={q}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-brand"
                      />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-base font-medium leading-relaxed text-foreground sm:text-lg">
            The kit turns questions like these into structured tests, recorded
            evidence and a release review.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

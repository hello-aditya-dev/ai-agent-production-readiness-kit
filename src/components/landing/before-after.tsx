import * as React from "react";
import { X, Check } from "lucide-react";
import { BEFORE_POINTS, AFTER_POINTS } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

export function BeforeAfter() {
  return (
    <section
      aria-labelledby="before-after-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Shift
          </p>
          <h2
            id="before-after-heading"
            className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Before and after.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From guessing whether the agent is ready, to a written record of
            what was tested, what failed and what the release decision is.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Before */}
          <Reveal>
            <article className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Before
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                “The demo works.”
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No one really knows whether:
              </p>
              <ul className="mt-4 space-y-2.5">
                {BEFORE_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <X
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* After */}
          <Reveal delay={0.05}>
            <article className="h-full rounded-xl border border-pass/30 bg-pass-soft/30 p-6 shadow-sm">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-pass">
                After
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                “Here is the evidence.”
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The team has a written record of:
              </p>
              <ul className="mt-4 space-y-2.5">
                {AFTER_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-pass"
                    />
                    <span>{point}</span>
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

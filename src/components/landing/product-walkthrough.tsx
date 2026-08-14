import * as React from "react";
import { Package } from "lucide-react";
import { WALKTHROUGH_CARDS } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";
import {
  WalkthroughVisualRenderer,
  type WalkthroughVisual,
} from "@/components/product/walkthrough-visuals";

export function ProductWalkthrough() {
  return (
    <section
      id="whats-included"
      aria-labelledby="walkthrough-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 08 / What's inside
              </p>
              <h2
                id="walkthrough-heading"
                className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                What's inside the system.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Seven workbooks that turn an agent evaluation from ad-hoc demos
                into recorded evidence and a release review.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">
              7 walkthrough modules
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-16 md:space-y-20">
          {WALKTHROUGH_CARDS.map((card, idx) => {
            const visualOnRight = idx % 2 === 0;
            const visual = (
              <Reveal delay={0.05}>
                <div className="mx-auto w-full max-w-md">
                  <WalkthroughVisualRenderer
                    visual={card.visual as WalkthroughVisual}
                  />
                </div>
              </Reveal>
            );
            const copy = (
              <Reveal>
                <article className="h-full">
                  <p className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                    <span className="tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden className="size-px bg-border" />
                    <span>{card.eyebrow}</span>
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {card.heading}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 rounded border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-xs">
                    <Package aria-hidden className="size-3.5 text-brand" />
                    <span className="font-mono uppercase tracking-wider">
                      Included:
                    </span>
                    <span>{card.included}</span>
                  </p>
                </article>
              </Reveal>
            );

            return (
              <div
                key={card.heading}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                {visualOnRight ? (
                  <>
                    <div>{copy}</div>
                    <div>{visual}</div>
                  </>
                ) : (
                  <>
                    <div className="lg:order-2">{copy}</div>
                    <div className="lg:order-1">{visual}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { CLIENT_RECEIVES } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

/**
 * "What your client receives" — the five outputs the client actually sees.
 *
 * Rendered as a stepped strip: horizontal on desktop with connector arrows
 * between steps, vertical on mobile with a left rail. Each step carries a
 * folio number, title, description and the real Agency asset it maps to.
 */
export function ClientReceives() {
  return (
    <section
      aria-labelledby="client-receives-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 04 / Client view
              </p>
              <h2
                id="client-receives-heading"
                className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                What your client receives.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Five outputs, delivered in sequence. The client never has to
                decode a spreadsheet — they get a structured review.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">
              5-step client review
            </p>
          </div>
        </Reveal>

        {/* Desktop — horizontal stepped strip */}
        <Reveal delay={0.05}>
          <ol
            className="mt-10 hidden gap-3 md:grid md:grid-cols-5"
            aria-label="Client receives (horizontal)"
          >
            {CLIENT_RECEIVES.map((item, idx) => {
              const isLast = idx === CLIENT_RECEIVES.length - 1;
              return (
                <li
                  key={item.num}
                  className="relative flex flex-col rounded border border-border bg-card p-4 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  {/* Connector arrow */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background p-0.5"
                    >
                      <ArrowRight className="size-3 text-muted-foreground" />
                    </span>
                  )}
                  <p className="font-mono text-2xl font-bold tabular-nums text-brand">
                    {item.num}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-3 inline-flex items-center rounded border border-border bg-muted/40 px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
                    {item.asset}
                  </p>
                </li>
              );
            })}
          </ol>
        </Reveal>

        {/* Mobile — vertical stack with left rail */}
        <Reveal delay={0.05}>
          <ol
            className="relative mt-8 md:hidden"
            aria-label="Client receives (vertical)"
          >
            <span
              aria-hidden
              className="absolute left-[18px] top-2 bottom-2 w-px bg-border"
            />
            {CLIENT_RECEIVES.map((item) => (
              <li
                key={item.num}
                className="relative pl-12 pb-4 last:pb-0"
              >
                <span className="absolute left-0 top-0 flex size-9 items-center justify-center rounded border border-border bg-card font-mono text-xs font-bold text-brand shadow-sm">
                  {item.num}
                </span>
                <div className="rounded border border-border bg-card p-3 shadow-sm">
                  <h3 className="text-sm font-semibold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-2 inline-flex items-center rounded border border-border bg-muted/40 px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
                    {item.asset}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

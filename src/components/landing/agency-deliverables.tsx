import * as React from "react";
import { cn } from "@/lib/utils";
import { AGENCY_DELIVERABLES } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

/**
 * Agency deliverables — the seven client-facing engagement outputs.
 *
 * Rendered as an editorial dossier ledger, NOT seven identical cards:
 *  - The first deliverable (Client Discovery Workbook) is treated as the
 *    entry point — a featured full-width row.
 *  - The remaining six are paired into a two-column grid where each row
 *    carries a folio number, title, description and an asset label.
 *  - Hairline rules between rows reinforce the dossier feel.
 */
export function AgencyDeliverables() {
  const [lead, ...rest] = AGENCY_DELIVERABLES;

  return (
    <section
      id="deliverables"
      aria-labelledby="deliverables-heading"
      className="border-t border-border bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 03 / Deliverables
              </p>
              <h2
                id="deliverables-heading"
                className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Turn agent testing into something your client can review.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                From first discovery call to release review, keep the evaluation
                evidence in one repeatable process.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">
              7 client-facing outputs
            </p>
          </div>
        </Reveal>

        {/* Lead deliverable — featured ledger row */}
        <Reveal delay={0.05}>
          <article className="mt-10 grid gap-5 rounded border border-border bg-card p-6 shadow-sm sm:grid-cols-12 sm:p-8 dossier-elevated">
            <div className="sm:col-span-2">
              <p className="font-mono text-3xl font-bold tabular-nums text-brand">
                {lead.num}
              </p>
              <p className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Lead deliverable
              </p>
            </div>
            <div className="sm:col-span-7 sm:border-l sm:border-border sm:pl-6">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                {lead.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {lead.description}
              </p>
            </div>
            <div className="sm:col-span-3 sm:border-l sm:border-border sm:pl-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Asset
              </p>
              <p className="mt-1.5 inline-flex items-center rounded border border-border bg-muted/50 px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground">
                {lead.asset}
              </p>
            </div>
          </article>
        </Reveal>

        {/* Remaining deliverables — paired ledger rows */}
        <Reveal delay={0.1}>
          <ol className="mt-5 grid gap-px overflow-hidden rounded border border-border bg-border sm:grid-cols-2">
            {rest.map((d) => (
              <li
                key={d.num}
                className="group grid grid-cols-[auto,1fr] gap-4 bg-card p-5 transition-colors hover:bg-muted/30 sm:p-6"
              >
                <div>
                  <p className="font-mono text-2xl font-bold tabular-nums text-foreground/80 group-hover:text-brand">
                    {d.num}
                  </p>
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-foreground">
                    {d.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                  <p className="mt-3 inline-flex items-center rounded border border-border bg-muted/40 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {d.asset}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-sm text-muted-foreground">
            Each output is delivered as a workbook. Customize them per
            engagement, then re-use the same set across clients.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

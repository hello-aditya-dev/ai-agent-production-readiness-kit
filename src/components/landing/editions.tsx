import * as React from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { EDITIONS } from "@/content/product";
import { CtaButton } from "@/components/landing/cta-button";
import { Reveal } from "@/components/landing/reveal";
import { EditionComparisonTable } from "@/components/product/edition-comparison-table";

export function Editions() {
  const standard = EDITIONS.standard;
  const agency = EDITIONS.agency;

  return (
    <section
      id="editions"
      aria-labelledby="editions-heading"
      className="border-t border-border bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Editions
          </p>
          <h2
            id="editions-heading"
            className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Choose your edition.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            One-time purchase. No subscription. Both editions include the full
            evaluation system; Agency adds the client-engagement workbook set.
          </p>
        </Reveal>

        {/* Pricing cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Standard */}
          <Reveal>
            <article
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-card p-6 shadow-sm sm:p-8",
                "border-foreground/20 ring-1 ring-foreground/5",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {standard.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {standard.subtitle}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-brand/30 bg-brand-soft text-brand"
                >
                  Recommended starting point
                </Badge>
              </div>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-mono text-4xl font-semibold tabular-nums text-foreground">
                  ${standard.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {standard.priceNote}
                </span>
              </div>

              <CtaButton
                linkKey="standard"
                label={standard.ctaLabel}
                variant="brand"
                size="lg"
                block
                className="mt-5 min-h-[48px]"
                icon={<ArrowRight aria-hidden className="size-4" />}
                fallbackAnchor="#editions"
              />

              <ul className="mt-6 space-y-2.5">
                {standard.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-pass"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Agency */}
          <Reveal delay={0.05}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {agency.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {agency.subtitle}
                  </p>
                </div>
              </div>

              {agency.headline && (
                <p className="mt-4 text-base font-medium leading-snug text-foreground">
                  {agency.headline}
                </p>
              )}

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-mono text-4xl font-semibold tabular-nums text-foreground">
                  ${agency.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {agency.priceNote}
                </span>
              </div>

              <CtaButton
                linkKey="agency"
                label={agency.ctaLabel}
                variant="outline"
                size="lg"
                block
                className="mt-5 min-h-[48px]"
                icon={<ArrowRight aria-hidden className="size-4" />}
                fallbackAnchor="#editions"
              />

              <ul className="mt-6 space-y-2.5">
                {agency.features.map((f, idx) => {
                  const isHeader =
                    f.toLowerCase().startsWith("everything in");
                  return (
                    <li
                      key={f}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        isHeader
                          ? "font-semibold text-foreground"
                          : "text-foreground",
                      )}
                    >
                      {isHeader ? (
                        <span
                          aria-hidden
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground/40"
                        />
                      ) : (
                        <Check
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-pass"
                        />
                      )}
                      <span>{f}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>
        </div>

        {/* Distinction line */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-brand">
                Standard
              </p>
              <p className="mt-1.5 text-sm text-foreground">
                {standard.distinction}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <p className="font-mono text-[11px] font-medium uppercase tracking-wider text-foreground/70">
                Agency
              </p>
              <p className="mt-1.5 text-sm text-foreground">
                {agency.distinction}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Comparison table */}
        <Reveal delay={0.15}>
          <div className="mt-10">
            <EditionComparisonTable />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-xs text-muted-foreground">
            Verify exact license terms in the included license file. Both
            editions are delivered as a downloadable workbook set via Gumroad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

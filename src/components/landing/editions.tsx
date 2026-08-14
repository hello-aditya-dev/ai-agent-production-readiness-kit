import * as React from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { EDITIONS } from "@/content/product";
import { CtaButton } from "@/components/landing/cta-button";
import { Reveal } from "@/components/landing/reveal";
import { EditionComparisonTable } from "@/components/product/edition-comparison-table";

export function Editions() {
  const agency = EDITIONS.agency;
  const standard = EDITIONS.standard;

  return (
    <section
      id="editions"
      aria-labelledby="editions-heading"
      className="border-t border-border bg-paper py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 12 / Editions
              </p>
              <h2
                id="editions-heading"
                className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Choose your edition.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                One-time purchase. No subscription. Agency is the flagship —
                built for client engagements. Standard is the alternative for
                teams evaluating their own agents.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">
              $299 flagship · $149 alternative
            </p>
          </div>
        </Reveal>

        {/* Pricing cards — Agency first, dominant */}
        <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:items-stretch">
          {/* Agency — flagship, dominant */}
          <Reveal className="lg:col-span-7">
            <article
              className={cn(
                "relative flex h-full flex-col rounded border bg-card p-6 sm:p-8",
                "border-brand/40 dossier dossier-elevated",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                    Flagship
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
                    {agency.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {agency.subtitle}
                  </p>
                </div>
                {agency.badge && (
                  <Badge
                    variant="outline"
                    className="border-brand/40 bg-brand-soft font-mono text-[11px] font-semibold uppercase tracking-wider text-brand"
                  >
                    {agency.badge}
                  </Badge>
                )}
              </div>

              {agency.headline && (
                <p className="mt-5 border-l-2 border-brand pl-3 text-base font-semibold leading-snug text-foreground sm:text-lg">
                  {agency.headline}
                </p>
              )}

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-mono text-5xl font-bold tabular-nums text-foreground">
                  ${agency.price}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {agency.priceNote}
                </span>
              </div>

              <CtaButton
                linkKey="agency"
                label={agency.ctaLabel}
                variant="agency"
                size="lg"
                block
                className="mt-6 min-h-[48px]"
                icon={<ArrowRight aria-hidden className="size-4" />}
                fallbackAnchor="#editions"
              />

              <ul className="mt-7 space-y-2.5">
                {agency.features.map((f) => {
                  const isHeader = f.toLowerCase().startsWith("everything in");
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
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                        />
                      ) : (
                        <Check
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-brand"
                        />
                      )}
                      <span>{f}</span>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                {agency.distinction}
              </p>
            </article>
          </Reveal>

          {/* Standard — alternative, secondary hierarchy */}
          <Reveal delay={0.05} className="lg:col-span-5">
            <article className="flex h-full flex-col rounded border border-border bg-card p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Alternative
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                    {standard.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {standard.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-mono text-4xl font-bold tabular-nums text-foreground">
                  ${standard.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {standard.priceNote}
                </span>
              </div>

              <CtaButton
                linkKey="standard"
                label={standard.ctaLabel}
                variant="standard"
                size="lg"
                block
                className="mt-6 min-h-[48px]"
                icon={<ArrowRight aria-hidden className="size-4" />}
                fallbackAnchor="#editions"
              />

              <ul className="mt-7 space-y-2">
                {standard.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs leading-relaxed text-foreground"
                  >
                    <Check
                      aria-hidden
                      className="mt-0.5 size-3.5 shrink-0 text-pass"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                {standard.distinction}
              </p>
            </article>
          </Reveal>
        </div>

        {/* Comparison table */}
        <Reveal delay={0.1}>
          <div className="mt-10">
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Full capability matrix
            </p>
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

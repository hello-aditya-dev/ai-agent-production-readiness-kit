import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FINAL_CTA } from "@/content/product";
import { CtaButton } from "@/components/landing/cta-button";
import { Reveal } from "@/components/landing/reveal";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16">
            {/* Subtle dot background */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-engineering-dots [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]"
            />

            <div className="relative">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
                Release readiness
              </p>
              <h2
                id="final-cta-heading"
                className="mx-auto mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl"
              >
                {FINAL_CTA.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {FINAL_CTA.subhead}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <CtaButton
                  linkKey="standard"
                  label={FINAL_CTA.primary.label}
                  variant="brand"
                  size="lg"
                  icon={<ArrowRight aria-hidden className="size-4" />}
                  className="min-h-[48px]"
                  fallbackAnchor="#editions"
                />
                <CtaButton
                  linkKey="agency"
                  label={FINAL_CTA.secondary.label}
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight aria-hidden className="size-4" />}
                  className="min-h-[48px]"
                  fallbackAnchor="#editions"
                />
              </div>

              <p className="mt-5 text-sm text-muted-foreground">
                <Link
                  href="#free"
                  className="font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                >
                  {FINAL_CTA.tertiary.label}
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

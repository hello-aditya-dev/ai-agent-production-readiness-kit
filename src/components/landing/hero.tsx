import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO } from "@/content/product";
import { CtaButton } from "@/components/landing/cta-button";
import { Reveal } from "@/components/landing/reveal";
import { HeroComposition } from "@/components/product/hero-composition";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Engineering grid background — hero only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-engineering-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Copy column */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground shadow-sm">
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-brand"
                />
                {HERO.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                id="hero-heading"
                className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
              >
                {HERO.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {HERO.subhead}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <CtaButton
                  linkKey="standard"
                  label={HERO.primaryCta.label}
                  variant="brand"
                  size="lg"
                  icon={<ArrowRight aria-hidden className="size-4" />}
                  fallbackAnchor="#editions"
                  className="min-h-[48px]"
                />
                <span className="text-sm text-muted-foreground">
                  {HERO.primaryCta.price}
                </span>
                <Link
                  href="#whats-included"
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {HERO.secondaryCta.label}
                  <ArrowDown aria-hidden className="size-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-sm text-muted-foreground">
                {HERO.agencyLine.label}{" "}
                <Link
                  href="#editions"
                  className={cn(
                    "font-medium text-foreground underline-offset-4 hover:underline",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded",
                  )}
                >
                  {HERO.agencyLine.link}
                </Link>
              </p>
            </Reveal>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <HeroComposition />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { SCORECARD_AREAS } from "@/content/product";
import { CtaButton } from "@/components/landing/cta-button";
import { Reveal } from "@/components/landing/reveal";
import { ScorecardPanel, type ScorecardRow } from "@/components/product/scorecard-panel";

/**
 * Build a quiet, muted scorecard preview from SCORECARD_AREAS.
 * Lower scores overall than the full-kit scorecard, and fewer rows
 * shown, so this reads as the lightweight fallback — visually quieter
 * than the paid editions section above it.
 */
function buildScorecardPreview(): ScorecardRow[] {
  const sampleStates: Array<"pass" | "warn" | "fail"> = [
    "warn",
    "warn",
    "warn",
    "fail",
    "warn",
    "warn",
    "fail",
    "warn",
    "warn",
    "warn",
  ];
  const sampleScores = [62, 58, 55, 35, 60, 64, 40, 70, 66, 68];
  return SCORECARD_AREAS.slice(0, 10).map((area, i) => ({
    area,
    state: sampleStates[i % sampleStates.length],
    score: sampleScores[i % sampleScores.length],
  }));
}

export function FreeScorecard() {
  const rows = buildScorecardPreview();

  return (
    <section
      id="free"
      aria-labelledby="free-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Free fallback
            </p>
            <h2
              id="free-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Not ready for the full kit?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Run the 15-point AI Agent Production Readiness Scorecard first.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A lighter, single-workbook review across fifteen dimensions. Use
              it to find the obvious gaps before committing to a full
              evaluation. When you outgrow it, the full kit picks up where it
              leaves off.
            </p>

            <div className="mt-6">
              <CtaButton
                linkKey="free"
                label="Get the Free Scorecard"
                variant="outline"
                size="default"
                icon={<ArrowRight aria-hidden className="size-4" />}
                fallbackAnchor="#free"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Free download · 15 dimensions · no email gate beyond delivery.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ScorecardPanel
              rows={rows}
              title="15-Point Readiness Scorecard"
              subtitle="Free preview · 10 of 15 dimensions shown"
              compact
              className="opacity-95"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

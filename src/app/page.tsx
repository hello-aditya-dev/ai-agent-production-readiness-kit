import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { AgencyDeliverables } from "@/components/landing/agency-deliverables";
import { ClientReceives } from "@/components/landing/client-receives";
import { Problem } from "@/components/landing/problem";
import { WhatYouTest } from "@/components/landing/what-you-test";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProductWalkthrough } from "@/components/landing/product-walkthrough";
import { RealTestExamples } from "@/components/landing/real-test-examples";
import { CompletedDemo } from "@/components/landing/completed-demo";
import { ReleaseGateSection } from "@/components/landing/release-gate-section";
import { Editions } from "@/components/landing/editions";
import { FreeScorecard } from "@/components/landing/free-scorecard";
import { AudienceSection } from "@/components/landing/audience-section";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/landing/site-footer";
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <SiteHeader />
      <main id="main" className="flex-1 pb-20 md:pb-0">
        {/* 01 — Hero (Agency-first, #agency) */}
        <Hero />
        {/* 02 — Agency deliverables (#deliverables) */}
        <AgencyDeliverables />
        {/* 03 — What the client sees */}
        <ClientReceives />
        {/* 04 — Problem (#problem) */}
        <Problem />
        {/* 05 — What you test (#what-you-test) */}
        <WhatYouTest />
        {/* 06 — How it works (#how-it-works) */}
        <HowItWorks />
        {/* 07 — Product walkthrough (#whats-included) */}
        <ProductWalkthrough />
        {/* 08 — Real test examples */}
        <RealTestExamples />
        {/* 09 — Completed fictional evaluation (#demo) */}
        <CompletedDemo />
        {/* 10 — Production release gate */}
        <ReleaseGateSection />
        {/* 11 — Editions (#editions) — Agency first */}
        <Editions />
        {/* 12 — Free scorecard (#free) — quieter fallback */}
        <FreeScorecard />
        {/* 13 — Audience & scope (combined who-its-for / not-for) */}
        <AudienceSection />
        {/* 14 — FAQ (#faq) */}
        <Faq />
        {/* 15 — Final CTA — Agency first */}
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { ProofStrip } from "@/components/landing/proof-strip";
import { WhatYouTest } from "@/components/landing/what-you-test";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProductWalkthrough } from "@/components/landing/product-walkthrough";
import { CompletedDemo } from "@/components/landing/completed-demo";
import { BeforeAfter } from "@/components/landing/before-after";
import { Editions } from "@/components/landing/editions";
import { FreeScorecard } from "@/components/landing/free-scorecard";
import { WhoItsFor } from "@/components/landing/who-its-for";
import { WhoItsNotFor } from "@/components/landing/who-its-not-for";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/landing/site-footer";
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <SiteHeader />
      <main
        id="main"
        className="flex-1 pb-20 md:pb-0"
      >
        <Hero />
        <Problem />
        <ProofStrip />
        <WhatYouTest />
        <HowItWorks />
        <ProductWalkthrough />
        <CompletedDemo />
        <BeforeAfter />
        <Editions />
        <FreeScorecard />
        <WhoItsFor />
        <WhoItsNotFor />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

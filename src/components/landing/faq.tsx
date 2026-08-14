"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/content/faq";
import { Reveal } from "@/components/landing/reveal";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                § 15 / FAQ
              </p>
              <h2
                id="faq-heading"
                className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Frequently asked questions.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Real answers to the purchasing objections buyers actually raise.
                Agency questions first.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">
              {FAQ_ITEMS.length} entries
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Accordion
            type="single"
            collapsible
            className="mt-8 w-full overflow-hidden rounded border border-border bg-card shadow-sm"
          >
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="px-5 text-left text-sm font-semibold text-foreground hover:no-underline">
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{item.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="pl-7">{item.answer}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

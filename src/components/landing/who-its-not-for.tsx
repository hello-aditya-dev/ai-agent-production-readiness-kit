import * as React from "react";
import { X } from "lucide-react";
import { WHO_ITS_NOT_FOR } from "@/content/product";
import { Reveal } from "@/components/landing/reveal";

export function WhoItsNotFor() {
  return (
    <section
      aria-labelledby="who-not-for-heading"
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Honest scope
          </p>
          <h2
            id="who-not-for-heading"
            className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            What this is not.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Naming what the kit does not do is part of the trust. If any of
            these is what you need, this is not the right tool.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {WHO_ITS_NOT_FOR.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm"
              >
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-fail-soft text-fail"
                >
                  <X className="size-3.5" />
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

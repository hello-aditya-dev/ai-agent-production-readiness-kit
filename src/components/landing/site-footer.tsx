import * as React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { BRAND } from "@/content/product";
import { NAV_ITEMS } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t border-border bg-paper"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {BRAND.full} — a structured evaluation system for testing AI agent
              reliability, recovery, escalation, cost, regression and release
              readiness before production.
            </p>
            <p className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/70">
              Product proof, not promises.
            </p>
          </div>

          {/* Navigation column */}
          <nav
            aria-label="Footer navigation"
            className="md:col-span-3 md:col-start-7"
          >
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded min-h-[44px] py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Editions column — Agency first */}
          <nav
            aria-label="Footer editions"
            className="md:col-span-3 md:col-start-10"
          >
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Editions
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="#editions"
                  className="text-sm font-medium text-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                >
                  Agency · $299
                </Link>
              </li>
              <li>
                <Link
                  href="#editions"
                  className="inline-flex items-center text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded min-h-[44px] py-1"
                >
                  Standard · $149
                </Link>
              </li>
              <li>
                <Link
                  href="#free"
                  className="inline-flex items-center text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded min-h-[44px] py-1"
                >
                  Free scorecard
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {BRAND.name}.</p>
          <p>Gumroad handles checkout and delivery.</p>
        </div>
      </div>
    </footer>
  );
}

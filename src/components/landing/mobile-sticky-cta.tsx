"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/landing/cta-button";

/**
 * Fixed mobile-only bottom CTA bar. Visible on `md:hidden`.
 * Adds safe-area padding so it never covers iOS home indicators.
 *
 * The page wrapper adds `pb-20 md:pb-0` on `<main>` so this bar never
 * covers the footer's last line.
 *
 * Agency Edition is the sticky primary (per refactor spec). Standard is
 * not the sticky primary.
 */
export function MobileStickyCta() {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden",
        "border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90",
        "pb-[env(safe-area-inset-bottom)]",
      )}
      role="region"
      aria-label="Primary call to action"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            Agency Edition
          </p>
          <p className="truncate text-xs text-muted-foreground">
            $299 one-time · client-engagement system
          </p>
        </div>
        <CtaButton
          linkKey="agency"
          label="Get Agency · $299"
          variant="agency"
          size="default"
          fallbackAnchor="#editions"
          className="shrink-0"
        />
      </div>
    </div>
  );
}

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND } from "@/content/product";

type LogoProps = {
  className?: string;
  /** Show the wordmark next to the mark. Default true. */
  showWordmark?: boolean;
  /** Compact mark only (no text). */
  compact?: boolean;
  /** Mark pixel size. */
  size?: number;
};

/**
 * Brand mark + wordmark. Links to #top.
 *
 * Composition: 2x2 release-gate matrix mark (3 ink cells + 1 fail-red cell +
 * vertical cobalt gate bar) + bold "READINESS KIT" wordmark + small mono
 * descriptor "AI AGENT PRODUCTION EVALUATION".
 *
 * The mark SVG lives at /public/brand/mark.svg.
 */
export function Logo({
  className,
  showWordmark = true,
  compact = false,
  size = 28,
}: LogoProps) {
  return (
    <Link
      href="#top"
      aria-label={`${BRAND.full} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <Image
        src="/brand/mark.svg"
        alt=""
        width={size}
        height={size}
        priority
        aria-hidden
        className="shrink-0 transition-transform group-hover:scale-[1.04]"
        style={{ width: size, height: size }}
      />
      {!compact && showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-bold tracking-tight text-foreground">
            {BRAND.name}
          </span>
          <span className="mt-0.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {BRAND.descriptor}
          </span>
        </span>
      )}
    </Link>
  );
}

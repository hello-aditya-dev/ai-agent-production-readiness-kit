import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND } from "@/content/product";

type LogoProps = {
  className?: string;
  /** Show the wordmark next to the shield mark. */
  showWordmark?: boolean;
  /** Compact mark only (no text). */
  compact?: boolean;
  size?: number;
};

/**
 * Brand mark + wordmark. Links to #top.
 * The shield SVG lives at /public/brand/mark.svg.
 */
export function Logo({ className, showWordmark = true, compact = false, size = 32 }: LogoProps) {
  return (
    <Link
      href="#top"
      aria-label={`${BRAND.full} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
        className="size-8 shrink-0 transition-transform group-hover:scale-[1.04]"
      />
      {!compact && showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            {BRAND.name}
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Production Readiness
          </span>
        </span>
      )}
    </Link>
  );
}

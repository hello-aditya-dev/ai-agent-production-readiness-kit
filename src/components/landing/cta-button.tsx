import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  PRODUCT_LINKS,
  hasLink,
  hrefFor,
  EXTERNAL_LINK_REL,
  type LinkKey,
} from "@/lib/product-links";

/**
 * Variant taxonomy.
 *
 * Edition-named variants:
 *  - "agency"   : primary CTA — cobalt bg, white text. Reserved for the
 *                 Agency Edition ($299) call-to-action.
 *  - "standard" : secondary CTA — ink outline. Reserved for the Standard
 *                 Edition ($149) alternative.
 *  - "ghost"    : text-only link. Used for tertiary actions (e.g. "Start
 *                 with the free scorecard").
 *
 * Generic variants kept for backward compatibility with the wider codebase:
 *  - "default" : ink bg (alias of "standard" visual weight, used for
 *                 non-edition CTAs).
 *  - "outline" : alias of "standard".
 *  - "brand"   : alias of "agency".
 *  - "secondary" / "muted" : neutral alternatives.
 */
type Variant =
  | "agency"
  | "standard"
  | "ghost"
  | "default"
  | "outline"
  | "brand"
  | "secondary"
  | "muted";

type Size = "default" | "sm" | "lg" | "icon";

export type CtaButtonProps = {
  linkKey: LinkKey;
  label: string;
  /** Anchor to scroll to when no external URL is configured. */
  fallbackAnchor?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Render as a block-level full-width link (useful for cards). */
  block?: boolean;
  /** Optional icon node rendered before the label. */
  icon?: React.ReactNode;
  /** Tooltip text shown when no link is configured. */
  pendingHint?: string;
  /** Optional title attribute (used as tooltip when configured). */
  title?: string;
};

const variantClass: Record<Variant, string> = {
  // Primary — Agency Edition
  agency: "bg-brand text-brand-foreground shadow-xs hover:bg-brand/90",
  brand: "bg-brand text-brand-foreground shadow-xs hover:bg-brand/90",
  // Secondary — Standard Edition (ink outline)
  standard:
    "border border-foreground/30 bg-transparent text-foreground shadow-xs hover:bg-foreground/[0.04] hover:border-foreground/50",
  outline:
    "border border-border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
  // Tertiary — text link
  ghost: "text-foreground underline-offset-4 hover:underline hover:text-brand",
  // Generic
  default:
    "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
  secondary:
    "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
  muted:
    "bg-muted text-foreground shadow-xs hover:bg-muted/70 border border-border",
};

const sizeClass: Record<Size, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 px-3 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "size-9",
};

/**
 * Single source of truth for product CTAs.
 *
 * - When a real Gumroad URL is configured in PRODUCT_LINKS, this renders
 *   an external `<a target="_blank" rel="noopener noreferrer nofollow">`.
 * - Otherwise it renders an internal anchor to `fallbackAnchor` (default
 *   `#editions`) so the page still scrolls to the editions section, with
 *   a `data-link-pending="true"` attribute so the placeholder state is
 *   visible to styling and analytics.
 *
 * No Gumroad URL is ever hardcoded here — only in `src/lib/product-links.ts`.
 */
export function CtaButton({
  linkKey,
  label,
  fallbackAnchor = "#editions",
  variant = "agency",
  size = "default",
  className,
  block = false,
  icon,
  pendingHint = "Gumroad URL pending",
  title,
}: CtaButtonProps) {
  const configured = hasLink(linkKey);
  const href = configured ? hrefFor(linkKey) : fallbackAnchor;
  const resolvedTitle = configured ? title : pendingHint;
  const isGhost = variant === "ghost";

  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded font-medium transition-all",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "min-h-[44px] select-none",
    !isGhost && "rounded-md",
    variantClass[variant],
    sizeClass[size],
    block && "w-full",
    !configured &&
      !isGhost &&
      "data-[link-pending=true]:opacity-90 data-[link-pending=true]:border-dashed",
    !configured && isGhost && "data-[link-pending=true]:opacity-80",
    className,
  );

  if (configured) {
    return (
      <a
        href={href}
        target="_blank"
        rel={EXTERNAL_LINK_REL}
        data-cta={linkKey}
        data-cta-resolved="true"
        title={resolvedTitle}
        className={classes}
      >
        {icon}
        <span>{label}</span>
      </a>
    );
  }

  // Internal fallback — same-page scroll, visibly marked as pending.
  return (
    <Link
      href={href}
      data-cta={linkKey}
      data-link-pending="true"
      aria-label={`${label} — ${pendingHint}`}
      title={resolvedTitle}
      className={classes}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

/** Convenience re-exports so callers don't need two imports. */
export { PRODUCT_LINKS, hasLink, hrefFor };

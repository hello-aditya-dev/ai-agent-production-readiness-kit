/**
 * Centralized commercial link configuration.
 *
 * This is the SINGLE source of truth for all external purchase / download URLs.
 * Do not scatter Gumroad URLs across components — import from here.
 *
 * STATUS: The seller has not yet supplied real Gumroad URLs.
 * The values below are intentional, documented placeholders.
 *
 * When the real URLs are available, replace the empty strings below.
 * No other file needs to change.
 *
 * Usage:
 *   import { PRODUCT_LINKS, buyStandard, buyAgency, getFreeScorecard } from "@/lib/product-links";
 */

export const PRODUCT_LINKS = {
  /** Gumroad purchase URL for the Standard Edition ($149). */
  standard: "",
  /** Gumroad purchase URL for the Agency Edition ($299). */
  agency: "",
  /** Gumroad (or other) URL for the free 15-point scorecard download. */
  free: "",
} as const;

/**
 * Canonical public URL of this landing page.
 *
 * Used for Open Graph, canonical link, the Gumroad link-back line, and as
 * the metadataBase for all absolute URL resolution.
 *
 * This is the deployed Vercel URL. To migrate to a custom domain, change
 * ONLY this value — everything else (sitemap, robots, OG, JSON-LD, canonical)
 * derives from it via src/lib/site-config.ts.
 */
export const SITE_URL = "https://ai-agent-production-readiness-kit.vercel.app";

export type LinkKey = keyof typeof PRODUCT_LINKS;

/** Returns true if a real URL has been configured for the given product. */
export function hasLink(key: LinkKey): boolean {
  return PRODUCT_LINKS[key].trim().length > 0;
}

/** Returns a safe href for a product CTA. Empty string when not configured. */
export function hrefFor(key: LinkKey): string {
  return PRODUCT_LINKS[key];
}

/** Standard "open in new tab" rel for external purchase links. */
export const EXTERNAL_LINK_REL = "noopener noreferrer nofollow";

/** Convenience helpers for the three primary CTAs. */
export const buyStandard = () => hrefFor("standard");
export const buyAgency = () => hrefFor("agency");
export const getFreeScorecard = () => hrefFor("free");

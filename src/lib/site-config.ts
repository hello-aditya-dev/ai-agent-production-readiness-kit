/**
 * Centralized site configuration.
 *
 * THE single source of truth for site-wide constants. Future custom-domain
 * migration requires changing exactly one value: SITE_URL below.
 *
 * Everything else (canonical, sitemap, robots, OG, JSON-LD, manifest,
 * metadataBase) derives from this file.
 */
import { SITE_URL as PRODUCT_LINKS_SITE_URL } from "@/lib/product-links";

/** Production canonical URL. No trailing slash issues — always normalized. */
export const SITE_URL = PRODUCT_LINKS_SITE_URL;

/** Normalized origin (no trailing slash). */
export const SITE_ORIGIN = SITE_URL.replace(/\/$/, "");

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p}`;
}

export const SITE = {
  name: "Readiness Kit",
  fullName: "AI Agent Production Readiness Kit",
  tagline: "Find agent failures before your client does.",
  description:
    "A client-ready production-readiness evaluation system for AI agencies. Test tool use, grounding, recovery, escalation, adversarial behavior, cost and regression, then turn the evidence into a client-facing release review.",
  /** Primary topic + supporting topics for SEO. Not keyword-stuffed. */
  primaryTopic: "AI agent production readiness",
  supportingTopics: [
    "AI agent testing",
    "AI agent reliability testing",
    "AI agent evaluation",
    "AI agent test cases",
    "AI agent regression testing",
    "agent tool reliability",
    "AI agent release checklist",
    "production readiness for AI agents",
    "AI automation agency QA",
    "AI agent failure testing",
    "agent grounding evaluation",
    "AI agent recovery testing",
  ],
} as const;

/** Primary navigation. Anchor IDs match section ids on the page. */
export const NAV_ITEMS = [
  { label: "For Agencies", href: "#agency" },
  { label: "What You Test", href: "#what-you-test" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Pricing", href: "#editions" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Editions in commercial-priority order (Agency first). */
export const EDITION_ORDER = ["agency", "standard"] as const;

/** Verified product metrics. Update only if product ZIPs prove otherwise. */
export const PRODUCT_METRICS = [
  { value: 40, label: "Readiness checks" },
  { value: 81, label: "Test patterns" },
  { value: 10, label: "Evaluation dimensions" },
  { value: 20, label: "Failure classes" },
  { value: 18, label: "Adversarial tests" },
  { value: 50, label: "Tests in demo" },
] as const;

/** Theme color for browser chrome / manifest (matches brand ink). */
export const THEME_COLOR = "#101114";
export const THEME_COLOR_LIGHT = "#F5F2EB";

/** Social preview image (PNG for crawler reliability). */
export const OG_IMAGE = {
  src: "/og/og-image.png",
  width: 1200,
  height: 630,
  alt: "AI Agent Production Readiness Kit, Agency Edition — find agent failures before your client does.",
} as const;

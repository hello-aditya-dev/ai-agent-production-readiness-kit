# AI Agent Production Readiness Kit — Product Site

A production-ready, single-page marketing site for the **AI Agent Production
Readiness Kit** — a client-ready production-readiness evaluation system for
AI agencies.

> **Agency Edition is the flagship product ($299).** Standard Edition ($149)
> is the secondary alternative for teams evaluating their own agents. The
> Free Scorecard is a fallback lead magnet.

> Headline: **Find agent failures before your client does.**

The site is the sales and product-education layer. Gumroad remains the
payment and product-delivery layer.

---

## Product Site

A Next.js 16 single-page application (App Router, TypeScript, Tailwind CSS 4,
shadcn/ui) that walks a qualified agency buyer from problem → client
deliverables → evidence → pricing. It is designed to feel like a
reliability-engineering dossier and release-review system, not an AI SaaS
template.

Only the `/` route is user-visible. All sections compose on a single page.

Live: https://ai-agent-production-readiness-kit.vercel.app/

## Product

The **AI Agent Production Readiness Kit** is a client-ready production-
readiness evaluation system for AI agencies. It is **not** automated testing
software, not a course, not certification, and not penetration testing. It is
a structured operating system of workbooks, test patterns, taxonomies,
dashboards and a release gate that a human team uses to run, record and
review agent tests — and, for Agency buyers, to turn the evidence into a
client-facing release review.

Verified product scope:

| | |
|---|---|
| 40 | Readiness checks |
| 81 | Reusable test patterns |
| 10 | Evaluation dimensions |
| 20 | Failure classes |
| 18 | Adversarial tests |
| 50 | Tests in the completed fictional demonstration |

## Editions

- **Agency Edition — $299** *(flagship)* — for agencies evaluating agents
  across client engagements. Adds the client-engagement system: Client
  Discovery Workbook, Project Register, Client Readiness Dashboard, Client
  Production-Readiness Report, Client Review Presentation, Agency Workflow,
  Failure-Cost Calculator, with client-engagement usage rights per the
  included license.
- **Standard Edition — $149** — for teams evaluating their own agents. The
  full evaluation system without the client-facing deliverables.
- **Free Scorecard** — a free 15-point AI Agent Production Readiness
  Scorecard for buyers who are not ready to purchase.

## Architecture

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict)
- **Styling**: Tailwind CSS 4 with custom brand design tokens
- **UI**: shadcn/ui (New York) + Lucide icons
- **Motion**: Framer Motion (subtle reveal only; honors `prefers-reduced-motion`)
- **Fonts**: Geist + Geist Mono (via `next/font`)
- **Rendering**: Primarily static / server-rendered. `"use client"` only where
  needed (header scroll state, mobile menu, FAQ accordion, reveal animation).

```
src/
  app/
    layout.tsx          # SEO metadata, fonts, JSON-LD, viewport
    page.tsx            # single-page Agency-first composition (15 sections)
    globals.css         # Tailwind + brand design tokens (Release Gate identity)
    sitemap.ts          # /sitemap.xml
    robots.ts           # /robots.txt
  content/
    product.ts          # metrics, agency deliverables, editions, walkthrough, etc.
    faq.ts              # 12 FAQ entries (Agency questions first)
  lib/
    site-config.ts      # CENTRAL site config (SITE_URL, SITE, NAV_ITEMS, OG_IMAGE)
    product-links.ts    # SINGLE source of truth for Gumroad URLs + SITE_URL
    utils.ts            # shadcn cn() helper
  components/
    landing/            # sections + shared (header, hero, agency-deliverables, editions…)
    product/            # product visuals (hero-composition, release-gate, dashboard…)
    brand/              # logo / wordmark
    ui/                 # shadcn/ui component set
public/
  brand/                # mark.svg, wordmark.svg, mark-mono.svg
  og/                   # og-image.png (1200x630) + source svg
  favicon.ico, favicon-*.png, icon-*.png, apple-touch-icon.png, manifest.webmanifest
docs/
  SEO.md                # SEO architecture + Search Console / Bing steps
  VISUAL_ASSETS.md      # brand guide
  PRODUCT_CLAIMS.md     # internal claim ledger
  CONTENT_MAP.md        # where each piece of content lives
  DEPLOYMENT.md         # deployment guide
```

## Local Development

```bash
bun install
bun run dev
```

The site starts on http://localhost:3000. Only the `/` route is served.

## Production Build

```bash
bun run build
bun run start
```

TypeScript errors fail the build (no `ignoreBuildErrors`). React strict mode
is enabled.

## Product Links

All external purchase/download URLs are centralized in one file:

```
src/lib/product-links.ts
```

```ts
export const PRODUCT_LINKS = {
  agency:   "", // Gumroad URL for Agency ($299) — flagship
  standard: "", // Gumroad URL for Standard ($149)
  free:     "", // URL for the free 15-point scorecard
};
```

**Status:** URLs are intentionally empty placeholders. The seller has not yet
supplied real Gumroad URLs. When supplied, replace the three empty strings —
no other file needs to change. While empty, every CTA falls back to the
`#editions` / `#free` on-page anchors and is visibly labeled "Gumroad URL
pending" so the gap is obvious.

`SITE_URL` (in the same file) is set to the deployed Vercel URL:
`https://ai-agent-production-readiness-kit.vercel.app`. To migrate to a custom
domain, change **only** this value — canonical, sitemap, robots, OG, JSON-LD
all derive from it via `src/lib/site-config.ts`.

## Content Editing

All commercial copy lives in structured TypeScript files, not in components:

| Edit this | In this file |
|---|---|
| Product metrics (40 / 81 / 10 / 20 / 18 / 50) | `src/content/product.ts` → `PRODUCT_METRICS` |
| Agency deliverables (7 client outputs) | `src/content/product.ts` → `AGENCY_DELIVERABLES` |
| What the client receives (5 outputs) | `src/content/product.ts` → `CLIENT_RECEIVES` |
| Agency workflow (8 stages) | `src/content/product.ts` → `AGENCY_WORKFLOW` |
| Release-gate statuses | `src/content/product.ts` → `RELEASE_STATUSES` |
| Failure-mode cards | `src/content/product.ts` → `FAILURE_MODES` |
| "What would you test?" groups | `src/content/product.ts` → `QUESTION_GROUPS` |
| Walkthrough sections | `src/content/product.ts` → `WALKTHROUGH_CARDS` |
| Test-case cards | `src/content/product.ts` → `TEST_CASE_CARDS` |
| Demo dimensions | `src/content/product.ts` → `DEMO_DIMENSIONS` |
| Editions + features (Agency first) | `src/content/product.ts` → `EDITIONS` |
| Who it's for / not for | `src/content/product.ts` → `WHO_ITS_FOR` / `WHO_ITS_NOT_FOR` |
| Free scorecard areas | `src/content/product.ts` → `SCORECARD_AREAS` |
| Hero / final CTA copy | `src/content/product.ts` → `HERO` / `FINAL_CTA` |
| FAQ (Agency Qs first) | `src/content/faq.ts` → `FAQ_ITEMS` |
| Navigation | `src/lib/site-config.ts` → `NAV_ITEMS` |
| Gumroad URLs + SITE_URL | `src/lib/product-links.ts` |

See `docs/CONTENT_MAP.md` for the full map.

## Visual Assets

All product visuals are built as **real JSX/CSS interface mockups** (Agency
engagement dossier, release gate, test-library table, scorecard panel,
workflow diagram, demo panel, edition comparison) — not stock images and not
fake screenshots. They live in `src/components/product/`. Brand assets:
`public/brand/mark.svg`, `public/brand/wordmark.svg`, `public/brand/mark-mono.svg`,
`public/og/og-image.png`. Full brand guide: `docs/VISUAL_ASSETS.md`.

No generic AI imagery, robot heads, glowing brains, or random 3D blobs.

## Deployment

The site is Vercel-compatible and already deployed. Push to `main` on GitHub
triggers a Vercel redeploy.

Optional pre-deploy configuration:

1. Set real Gumroad URLs in `src/lib/product-links.ts`.
2. (For custom domain) Set `SITE_URL` to the new domain in the same file.

See `docs/DEPLOYMENT.md` for the step-by-step.

## Environment Variables

**None required.** The site is fully static. Do not invent environment
variables. If Gumroad URLs ever need to vary by environment, set them in
`src/lib/product-links.ts` directly (the file is intentionally not
env-driven so the placeholders are visible in source).

## Quality Checks

```bash
bun run lint        # ESLint (Next.js + strict)
bun run typecheck   # tsc --noEmit
bun run build       # production build (strict mode, no ignoreBuildErrors)
```

All three must pass. There are no unit tests by design — this is a static
marketing page; the QA pass is visual + interaction (see `docs/DEPLOYMENT.md`).

## Commercial Safety

- The **paid product ZIP files are NOT part of this repository.** Nothing
  customer-facing from the paid product is committed. Only safe site assets
  (code, brand mark, OG image) are in the repo.
- No secrets, tokens, API keys, or Gumroad credentials are committed. The
  `.gitignore` excludes `.env*`, logs, build output, QA artifacts, and
  sandbox infrastructure.
- No fake social proof: no testimonials, customer logos, review scores,
  purchase counts, or badges. The site uses **product proof** instead.
- No fake urgency: no countdown timers, no "only X left", no flashing badges.

## Gumroad Integration

Purchase buttons are rendered by `src/components/landing/cta-button.tsx`,
which reads from `PRODUCT_LINKS` in `src/lib/product-links.ts`. Behavior:

- If a real URL is configured: renders `<a href={url} target="_blank"
  rel="noopener noreferrer nofollow">`.
- If the URL is empty: renders an on-page anchor (e.g. `#editions`) with
  `data-link-pending="true"` and an accessible "Gumroad URL pending" label.

To wire up real checkout, paste the three Gumroad URLs into `PRODUCT_LINKS`.
No component changes are required.

### Gumroad link-back

Once the site is deployed, paste this line into the Gumroad listing copy:

> Want to inspect the full system before buying? View the full product
> walkthrough: `https://ai-agent-production-readiness-kit.vercel.app/`

## SEO

See `docs/SEO.md` for the full architecture: production URL, canonical,
sitemap, robots, structured data, OG/Twitter, favicon inventory, Google
Search Console and Bing Webmaster steps, and custom-domain migration.

The site is **technically indexable**. Actual search-engine indexing is
controlled by the search engines.

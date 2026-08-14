# AI Agent Production Readiness Kit — Product Site

A production-ready, single-page marketing site for the **AI Agent Production
Readiness Kit** — a structured evaluation system for testing AI agent
reliability, tool use, grounding, recovery, escalation, cost, regression and
release readiness before an agent reaches production.

The site is the sales and product-education layer. Gumroad remains the payment
and product-delivery layer.

> Headline: **Find the failures your AI agent demo does not show.**

---

## Product Site

A Next.js 16 single-page application (App Router, TypeScript, Tailwind CSS 4,
shadcn/ui) that walks a qualified buyer from problem → proof → pricing. It is
designed to feel like a reliability-engineering product, not a template store,
course funnel, or generic AI site.

Only the `/` route is user-visible. All 16 sections compose on a single page.

## Product

The **AI Agent Production Readiness Kit** is a production-readiness evaluation
system for teams shipping AI agents. It is **not** automated testing software,
not a course, not certification, and not a penetration-testing tool. It is a
structured operating system of workbooks, test patterns, taxonomies, dashboards
and a release gate that a human team uses to run, record and review agent tests.

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

- **Standard — $149** — for teams evaluating their own agents.
- **Agency — $299** — for agencies evaluating agents across client engagements.
  Adds client discovery, project register, client readiness dashboard, client
  report, review presentation, agency workflow, and a failure-cost calculator,
  with client-engagement usage rights per the included license.
- **Free Scorecard** — a free 15-point AI Agent Production Readiness Scorecard
  for buyers who are not ready to purchase. This is the fallback conversion
  path.

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
    layout.tsx          # SEO metadata, fonts, root layout
    page.tsx            # single-page composition of all 16 sections
    globals.css         # Tailwind + brand design tokens
  content/
    product.ts          # metrics, test cases, editions, walkthrough, etc.
    faq.ts              # 14 FAQ entries
    navigation.ts       # nav items
  lib/
    product-links.ts    # SINGLE source of truth for Gumroad URLs
    utils.ts            # shadcn cn() helper
  components/
    landing/            # section + shared (header, hero, footer, reveal, cta-button…)
    product/            # product visuals (release-gate, test-library-table, scorecard-panel…)
    brand/              # logo / wordmark
    ui/                 # shadcn/ui component set
public/
  brand/mark.svg        # brand mark
  og/og-image.svg       # social preview image
docs/
  PRODUCT_CLAIMS.md     # internal claim ledger
  CONTENT_MAP.md        # where each piece of content lives
  VISUAL_ASSETS.md      # how visuals were built
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

> Do not run `bun run build` inside the sandbox dev environment — it is
> intended for a clean Vercel/host build. See `docs/DEPLOYMENT.md`.

## Product Links

All external purchase/download URLs are centralized in a single file:

```
src/lib/product-links.ts
```

```ts
export const PRODUCT_LINKS = {
  standard: "", // Gumroad URL for Standard ($149)
  agency:   "", // Gumroad URL for Agency   ($299)
  free:     "", // URL for the free 15-point scorecard
};
```

**Status:** URLs are intentionally empty placeholders. The seller has not yet
supplied real Gumroad URLs. When supplied, replace the three empty strings
above — no other file needs to change. While empty, every CTA falls back to
the `#editions` / `#free` on-page anchors and is visibly labeled
"Gumroad URL pending" so the gap is obvious.

`SITE_URL` (in the same file) holds the canonical deployed domain. Set it
before launch so OpenGraph / Twitter cards resolve to absolute URLs.

## Content Editing

All commercial copy lives in structured TypeScript files, not in components:

| Edit this | In this file |
|---|---|
| Product metrics (40 / 81 / 10 / 20 / 18 / 50) | `src/content/product.ts` → `PRODUCT_METRICS` |
| Failure-mode cards | `src/content/product.ts` → `FAILURE_MODES` |
| "What would you test?" groups | `src/content/product.ts` → `QUESTION_GROUPS` |
| Workflow stages | `src/content/product.ts` → `WORKFLOW_STAGES` |
| Walkthrough sections | `src/content/product.ts` → `WALKTHROUGH_CARDS` |
| Test-case cards | `src/content/product.ts` → `TEST_CASE_CARDS` |
| Demo dimensions | `src/content/product.ts` → `DEMO_DIMENSIONS` |
| Before / after lists | `src/content/product.ts` → `BEFORE_POINTS` / `AFTER_POINTS` |
| Editions + features | `src/content/product.ts` → `EDITIONS` |
| Who it's for / not for | `src/content/product.ts` → `WHO_ITS_FOR` / `WHO_ITS_NOT_FOR` |
| Free scorecard areas | `src/content/product.ts` → `SCORECARD_AREAS` |
| FAQ | `src/content/faq.ts` → `FAQ_ITEMS` |
| Navigation | `src/content/navigation.ts` → `NAV_ITEMS` |
| Gumroad URLs | `src/lib/product-links.ts` → `PRODUCT_LINKS` |

See `docs/CONTENT_MAP.md` for the full map.

## Visual Assets

All product visuals are built as **real JSX/CSS interface mockups** (release
gate, test-library table, scorecard panel, workflow diagram, demo panel,
edition comparison) — not stock images and not fake screenshots. They live in
`src/components/product/`. The brand mark is at `public/brand/mark.svg` and the
social preview image is at `public/og/og-image.svg`.

No generic AI imagery, robot heads, glowing brains, or random 3D blobs are
used anywhere. See `docs/VISUAL_ASSETS.md`.

## Deployment

The site is Vercel-compatible. Push the repository to GitHub and import it on
Vercel — no environment variables are required.

Optional pre-deploy configuration:

1. Set real Gumroad URLs in `src/lib/product-links.ts`.
2. Set `SITE_URL` to the deployed domain in the same file.

See `docs/DEPLOYMENT.md` for the step-by-step.

## Environment Variables

**None required.** The site is fully static. Do not invent environment
variables. If Gumroad URLs ever need to vary by environment, set them in
`src/lib/product-links.ts` directly (the file is intentionally not env-driven
so the placeholders are visible in source).

## Quality Checks

```bash
bun run lint      # ESLint (Next.js + strict)
bun run build     # production build (run in a clean env, not the sandbox)
```

TypeScript is checked as part of the build. There are no unit tests by design —
this is a static marketing page; the QA pass is visual + interaction
(see `docs/DEPLOYMENT.md`).

## Commercial Safety

- The **paid product ZIP files are NOT part of this repository.** Nothing
  customer-facing from the paid product is committed. Only safe site assets
  (code, brand mark, OG image) are in the repo.
- No secrets, tokens, API keys, or Gumroad credentials are committed. The
  `.gitignore` excludes `.env*`, logs, build output, and QA artifacts.
- No fake social proof: no testimonials, customer logos, review scores,
  purchase counts, or badges. The site uses **product proof** instead.
- No fake urgency: no countdown timers, no "only X left", no flashing badges.

## Gumroad Integration

Purchase buttons are rendered by `src/components/landing/cta-button.tsx`, which
reads from `PRODUCT_LINKS` in `src/lib/product-links.ts`. Behavior:

- If a real URL is configured: renders `<a href={url} target="_blank"
  rel="noopener noreferrer nofollow">`.
- If the URL is empty: renders an on-page anchor (e.g. `#editions`) with
  `data-link-pending="true"` and an accessible "Gumroad URL pending" label.

To wire up real checkout, paste the three Gumroad URLs into `PRODUCT_LINKS`.
No component changes are required.

### Gumroad link-back

Once the site is deployed, paste this line into the Gumroad listing copy:

> Want to inspect the full system before buying? View the full product
> walkthrough: `<SITE_URL>`

Replace `<SITE_URL>` with the deployed domain set in `src/lib/product-links.ts`.

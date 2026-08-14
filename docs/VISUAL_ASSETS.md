# Visual Assets

## Design system

Defined as CSS custom properties in `src/app/globals.css` (Tailwind 4
`@theme inline`).

| Token | Use | Value (light) |
|---|---|---|
| `--background` | page | warm white `oklch(0.985 0.004 90)` |
| `--foreground` | primary text | near-black navy `oklch(0.19 0.012 250)` |
| `--brand` | accent / primary CTA | restrained engineering blue `oklch(0.47 0.16 252)` |
| `--pass` | healthy state | green `oklch(0.58 0.14 152)` |
| `--warn` | retest state | amber `oklch(0.7 0.15 68)` |
| `--fail` | blocked state | red `oklch(0.55 0.21 25)` |
| `--border` | subtle borders | neutral `oklch(0.9 0.006 250)` |

Utilities: `.bg-engineering-grid`, `.bg-engineering-dots`, `.hairline`,
`.scroll-thin`.

No indigo or violet. Blue is used sparingly as the brand accent. State colors
are used only for readiness semantics and are always paired with a text label
and icon — color is never the only signal.

## Product visuals

All product visuals are built as **real JSX/CSS interface mockups**, not stock
images and not fake screenshots. They are deliberately designed to look like a
genuine reliability-engineering product.

| Visual | Component | What it represents |
|---|---|---|
| Hero composition | `src/components/product/hero-composition.tsx` | Layered stack: Release Gate + Test Library preview + Scorecard, with subtle depth |
| Release Gate | `src/components/product/release-gate.tsx` | Dimension rows with pass/warn/fail dots + final release decision bar |
| Test Library table | `src/components/product/test-library-table.tsx` | Compact table of real test cases (ID, scenario, severity) |
| Scorecard panel | `src/components/product/scorecard-panel.tsx` | Dimensions with progress bars + state tint |
| Workflow diagram | `src/components/product/workflow-diagram.tsx` | 9-stage flow: DEFINE→…→MONITOR; horizontal on desktop, vertical on mobile |
| Edition comparison | `src/components/product/edition-comparison-table.tsx` | Standard vs Agency feature matrix |
| Demo panel | `src/components/product/demo-panel.tsx` | Completed fictional demonstration: scope chips + dimension results + "Fictional demonstration data" badge |
| Walkthrough visuals | `src/components/product/walkthrough-visuals.tsx` | Maps each `WALKTHROUGH_CARDS[].visual` key to the right product component |

## Brand assets

| Asset | Path | Notes |
|---|---|---|
| Brand mark | `public/brand/mark.svg` | Shield + checkmark, restrained; used in header, footer, OG image |
| Social preview | `public/og/og-image.svg` | 1200×630; headline + subhead + 4 metric chips + release-gate visual |

## What is NOT used

Per master spec §10, the following are explicitly avoided:

- generic stock imagery
- robot heads, glowing brains, circuit diagrams, generic neural networks
- fake code screenshots
- random 3D blobs
- purple/AI-startup gradients

## Responsiveness

Every visual works on large desktop, laptop, tablet, and mobile. Wide tables
and the workflow diagram wrap or scroll within their container
(`overflow-x-auto scroll-thin`) rather than shrinking until unreadable. The
hero composition stacks vertically on mobile.

## Motion

`src/components/landing/reveal.tsx` wraps section content. Content is **always
rendered at full opacity** (opacity: 1) — the animation is a subtle slide-up
(y: 14 → 0) on enter. This guarantees content is visible to crawlers,
full-page screenshots, no-JS fallbacks, and any IntersectionObserver edge case.
`prefers-reduced-motion` renders a plain wrapper with no transform.

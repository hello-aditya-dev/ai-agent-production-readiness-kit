# Brand Guide — Readiness Kit

## Concept

The brand is built around **THE RELEASE GATE**.

The underlying idea: an AI system passes through structured evaluation before release. The product finds the failure that prevents a safe or justified release recommendation.

Visual vocabulary comes from: test matrices, evidence tables, release states, issue markers, gates, status codes, report folios, audit labels, run IDs, review stamps, decision records, test traces.

The brand does NOT derive from: robots, brains, stars, magic, sparkles, hexagons, generic shields, neural network illustrations, glowing orbs.

## Logo geometry

**Mark** (`/public/brand/mark.svg`): a compact 2×2 evaluation matrix with three ink cells and one failure-red cell, plus a strong vertical cobalt gate bar to the right.

Meaning:
- The 2×2 matrix = evaluation.
- The contrasting red cell = the hidden failure the evaluation surfaces.
- The vertical bar = the release gate.

Geometry is simple enough to remain recognizable at 16×16, 32×32, 48×48, 180×180, 512×512. No microscopic detail, no tiny letters.

**Wordmark** (`/public/brand/wordmark.svg`): "READINESS KIT" (bold) + mono descriptor "AI AGENT PRODUCTION EVALUATION".

**Mono variant** (`/public/brand/mark-mono.svg`): all cells currentColor with the failure cell at 35% opacity — for reversed/dark contexts.

The mark is original geometry. It deliberately avoids the visual appearance of Microsoft, Google, Windows, Slack, Linear, OpenAI, or other existing marks.

## Colors

| Token | Light | Use |
|---|---|---|
| `--background` | `#F5F2EB` | Warm technical paper page background |
| `--foreground` | `#101114` | Near-black ink, primary text |
| `--brand` | `#3157FF` | Cobalt / electric technical blue — primary signal, CTAs |
| `--pass` | `#2E7D52` | Reserved green — healthy state |
| `--warn` | `#C7841A` | Reserved amber — retest state |
| `--fail` | `#C53A2E` | Controlled red — blocked / failure state |
| `--border` | `#D8D2C4` | Warm neutral hairline borders |
| `--muted-foreground` | `#5A6376` | Secondary text |

State colors are used **semantically only**. They are never decorative. Every state color is paired with a text label and an icon — color is never the only signal.

No indigo. No violet. No purple. No AI-startup gradients. Cobalt is the only blue and is used sparingly.

## Typography

- **Primary sans:** Geist (via `next/font/google`).
- **Technical/metadata face:** Geist Mono (via `next/font/google`).

Monospace is used for: run IDs, test IDs (`TC-014`), state labels (`PASS`/`FAIL`/`BLOCKED`/`RETEST`), section numbering (`01`–`08`), folio/page markers, "RUN ID · RK-AGY-0299" labels. Implemented as `.mono-label` and `.folio` utilities.

Monospace is **never** used for long body paragraphs. No ornamental display fonts. Identity comes from composition and hierarchy, not a novelty typeface.

## Spacing

- Section padding: `py-20 md:py-28` typically.
- Container: `mx-auto max-w-6xl px-5 sm:px-6 lg:px-8`.
- Generous whitespace; restrained shadows.

## Border / radius rules

Tighter than generic SaaS. Override the shadcn defaults:
- `--radius-sm`: 2px
- `--radius-md`: 3px
- `--radius-lg`: 4px
- `--radius-xl`: 6px

Cards and panels use `rounded` (4px) or `rounded-md` (3px). Big rounded SaaS corners are avoided. Dossier utilities: `.dossier` (white card + hairline border + 4px radius), `.dossier-elevated` (adds a subtle 2-layer shadow).

## Screenshot treatment

Product visuals are built as **real JSX/CSS interface mockups** — not stock images, not fake screenshots. They look like genuine reliability-engineering product UI:

- `src/components/product/hero-composition.tsx` — Agency engagement dossier (Client Readiness Dashboard + Production Readiness Report + release-status strip).
- `src/components/product/release-gate.tsx` — dimension rows with pass/warn/fail dots + release decision bar.
- `src/components/product/test-library-table.tsx` — compact test-case table.
- `src/components/product/scorecard-panel.tsx` — dimensions with progress bars + state tint.
- `src/components/product/workflow-diagram.tsx` — 8-stage agency workflow.
- `src/components/product/edition-comparison-table.tsx` — Agency vs Standard matrix.
- `src/components/product/demo-panel.tsx` — completed fictional demonstration.

Marketing-safe crops only. No full 81-row test library, no complete methodology, no formulas, no full client templates, no internal seller documents, no QA material. Demonstration data is clearly labeled "FICTIONAL DEMONSTRATION".

## OG treatment

`/public/og/og-image.png` — 1200×630 PNG (PNG for crawler reliability). Agency-first composition: brand mark + wordmark top-left, "Find agent failures before your client does." headline, "$299 ONE-TIME · AGENCY" metadata, right-side Client Readiness Dashboard + Production Readiness Report visual. Source SVG kept at `/public/og/og-image.src.svg`.

## Favicon rules

The favicon uses the Release Gate mark, not a converted shield. At 16px it retains: strong silhouette, adequate contrast, no microscopic detail, no unreadable text. Assets: `/favicon.ico` (16+32 multi-res), `/favicon-16x16.png`, `/favicon-32x32.png`, `/apple-touch-icon.png` (180), `/icon-192.png`, `/icon-512.png`. App-icon variants use an ink background with paper cells so the failure cell stays readable.

## Motion

Subtle only. `src/components/landing/reveal.tsx` wraps content — content is **always rendered at full opacity** (opacity: 1); the animation is a slide-up (y: 14 → 0) on enter. This guarantees content is visible to crawlers, full-page screenshots, no-JS fallbacks, and any IntersectionObserver edge case. Document sheets shift 2–4px on hover. `prefers-reduced-motion` renders a plain wrapper with no transform. No continuous animation, no scroll-jacking, no WebGL, no cursor followers.

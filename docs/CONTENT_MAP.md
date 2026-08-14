# Content Map

Where every piece of commercial content lives. Edit content here, not in
components.

## `src/content/product.ts`

| Export | Used by | Notes |
|---|---|---|
| `PRODUCT_METRICS` | `ProofStrip` | 6 verified scope numbers |
| `FAILURE_MODES` | `Problem` | 8 failure-mode cards |
| `QUESTION_GROUPS` | `WhatYouTest` | 3 groups × 4 questions |
| `WORKFLOW_STAGES` | `HowItWorks` / `WorkflowDiagram` | 9 stages |
| `WALKTHROUGH_CARDS` | `ProductWalkthrough` | 7 alternating sections, each maps to a `visual` key |
| `TEST_CASE_CARDS` | `TestLibraryTable` | 6 real test cases (ID, scenario, expected, forbidden, severity, category) |
| `DEMO_SCOPE` | `CompletedDemo` / `DemoPanel` | 4 scope chips |
| `DEMO_DIMENSIONS` | `DemoPanel` / `ReleaseGate` | 10 dimensions with pass/warn/fail |
| `BEFORE_POINTS` / `AFTER_POINTS` | `BeforeAfter` | 7 / 10 points |
| `EDITIONS` | `Editions` / `EditionComparisonTable` | Standard + Agency |
| `WHO_ITS_FOR` | `WhoItsFor` | 7 audiences |
| `WHO_ITS_NOT_FOR` | `WhoItsNotFor` | 6 anti-claims |
| `SCORECARD_AREAS` | `FreeScorecard` / `ScorecardPanel` | 15 scorecard areas |
| `HERO` | `Hero` | eyebrow, headline, subhead, CTAs |
| `FINAL_CTA` | `FinalCta` | headline, subhead, CTAs |
| `BRAND` | `SiteFooter`, `Logo` | name + full product name |

## `src/content/faq.ts`

| Export | Used by | Notes |
|---|---|---|
| `FAQ_ITEMS` | `Faq` | 14 Q&A entries answering real purchasing objections |

## `src/content/navigation.ts`

| Export | Used by | Notes |
|---|---|---|
| `NAV_ITEMS` | `SiteHeader` (desktop + mobile) + `SiteFooter` | 5 anchor links |

## `src/lib/product-links.ts`

| Export | Used by | Notes |
|---|---|---|
| `PRODUCT_LINKS` | `CtaButton` (all CTAs) | single source of truth for Gumroad URLs |
| `SITE_URL` | `layout.tsx` metadataBase | deployed domain placeholder |
| `hrefFor`, `hasLink`, `EXTERNAL_LINK_REL` | `CtaButton` | helpers |

## Severity → color mapping (in `TestLibraryTable`)

| Severity | Color token | Always paired with text label |
|---|---|---|
| Critical | `fail` | yes |
| High | `warn` | yes |
| Medium | `brand` | yes |
| Low | `muted` | yes |

Color is never the only signal — every severity badge shows its text label.

## Demo dimension → state mapping (in `DemoPanel` / `ReleaseGate`)

| State | Color token | Icon | Label |
|---|---|---|---|
| pass | `pass` (green) | `Check` | "pass" |
| warn | `warn` (amber) | `AlertTriangle` | "retest" |
| fail | `fail` (red) | `X` | "blocked" |

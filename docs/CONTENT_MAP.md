# Content Map

Where every piece of commercial content lives. Edit content here, not in
components.

## `src/content/product.ts`

| Export | Used by | Notes |
|---|---|---|
| `PRODUCT_METRICS` | Hero (proof strip merged into hero) | 6 verified scope numbers |
| `FAILURE_MODES` | `Problem` | 8 failure-mode cards |
| `QUESTION_GROUPS` | `WhatYouTest` | 3 groups × 4 questions |
| `AGENCY_WORKFLOW` | `HowItWorks` / `WorkflowDiagram` | 8 agency-POV stages |
| `WALKTHROUGH_CARDS` | `ProductWalkthrough` | 7 alternating sections, each maps to a `visual` key |
| `AGENCY_DELIVERABLES` | `AgencyDeliverables` | 7 client-facing outputs (dossier ledger) |
| `CLIENT_RECEIVES` | `ClientReceives` | 5 things the client sees (stepped strip) |
| `TEST_CASE_CARDS` | `RealTestExamples` / `TestLibraryTable` | 6 real test cases |
| `DEMO_SCOPE` | `CompletedDemo` / `DemoPanel` | 4 scope chips |
| `DEMO_DIMENSIONS` | `DemoPanel` / `ReleaseGate` / hero composition | 10 dimensions with pass/warn/fail |
| `RELEASE_STATUSES` | `ReleaseGateSection` | 5 statuses (BLOCKED / RETEST / PILOT / PRODUCTION WITH OVERSIGHT / PRODUCTION CANDIDATE) |
| `BEFORE_POINTS` / `AFTER_POINTS` | (before-after section was removed in refactor; content retained for future use) | — |
| `EDITIONS` | `Editions` / `EditionComparisonTable` | Agency FIRST (flagship), Standard SECOND |
| `WHO_ITS_FOR` / `WHO_ITS_NOT_FOR` | `AudienceSection` (merged) | 7 / 6 |
| `SCORECARD_AREAS` | `FreeScorecard` / `ScorecardPanel` | 15 scorecard areas |
| `HERO` | `Hero` | Agency-first: "Find agent failures before your client does." |
| `FINAL_CTA` | `FinalCta` | Agency-first: "Test the agent. Document the evidence. Gate the release." |
| `BRAND` | `SiteFooter`, `Logo`, `site-config` | name + full name + descriptor |

## `src/content/faq.ts`

| Export | Used by | Notes |
|---|---|---|
| `FAQ_ITEMS` | `Faq` | 12 Q&A entries, **Agency questions first** |

## `src/lib/site-config.ts` (central config)

| Export | Used by | Notes |
|---|---|---|
| `SITE_URL` / `SITE_ORIGIN` / `absoluteUrl()` | layout, sitemap, robots, JSON-LD, OG | derives from `product-links.ts` |
| `SITE` | layout, metadata | name, fullName, tagline, description, topics |
| `NAV_ITEMS` | `SiteHeader` (desktop + mobile) + `SiteFooter` | 6 anchor links |
| `EDITION_ORDER` | (available; editions component uses EDITIONS record directly) | Agency first |
| `PRODUCT_METRICS` | Hero | 6 metrics (mirrored) |
| `THEME_COLOR` / `THEME_COLOR_LIGHT` | layout viewport | ink / paper |
| `OG_IMAGE` | layout metadata | 1200×630 PNG |

## `src/lib/product-links.ts`

| Export | Used by | Notes |
|---|---|---|
| `PRODUCT_LINKS` | `CtaButton` (all CTAs) | single source of truth for Gumroad URLs (agency/standard/free) |
| `SITE_URL` | `site-config.ts` | deployed Vercel URL |
| `hrefFor`, `hasLink`, `EXTERNAL_LINK_REL` | `CtaButton` | helpers |

## Severity → color mapping (in `TestLibraryTable` / `RealTestExamples`)

| Severity | Color token | Always paired with text label |
|---|---|---|
| Critical | `fail` | yes |
| High | `warn` | yes |
| Medium | `brand` | yes |
| Low | `muted` | yes |

## Release-status → color mapping (in `ReleaseGateSection` / `ReleaseGate`)

| Status | Color token | Label |
|---|---|---|
| BLOCKED | `fail` | BLOCKED |
| RETEST REQUIRED | `warn` | RETEST REQUIRED |
| PILOT CANDIDATE | `brand` | PILOT CANDIDATE |
| PRODUCTION WITH OVERSIGHT | `warn` | PRODUCTION WITH OVERSIGHT |
| PRODUCTION CANDIDATE | `pass` | PRODUCTION CANDIDATE |

Color is never the only signal — every status shows its text label.

## Demo dimension → state mapping

| State | Color token | Icon | Label |
|---|---|---|---|
| pass | `pass` | `Check` | pass |
| warn | `warn` | `AlertTriangle` | retest |
| fail | `fail` | `X` | blocked |

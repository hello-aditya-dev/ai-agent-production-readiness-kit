# Product Claims Ledger

Internal repository documentation. **Not exposed on the public site.**

This ledger records the source basis for each important commercial claim so the
copy can be audited against the actual product. Per the build spec, no
unverified number is displayed publicly.

When the final product ZIP files are supplied, verify each row against the
extracted files and update the "Verified" column. If a figure is wrong, update
it in `src/content/product.ts` (the single source of truth) — nowhere else.

## Commercial hierarchy (refactor)

| Claim | Source basis | Verified |
|---|---|---|
| Agency Edition ($299) is the flagship product | Refactor spec §PRIMARY CHANGE | implemented on site |
| Standard Edition ($149) is the secondary alternative | Refactor spec §PRICING | implemented on site |
| Free Scorecard is the fallback lead magnet | Refactor spec §PRICING | implemented on site |
| Agency badge = "Flagship edition" (NOT "Most popular") | Refactor spec §PRICING (no data for "most popular") | implemented |

## Verified metrics

| Claim | Public value | Source basis | Verified |
|---|---|---|---|
| Readiness checks | 40 | Master spec §5 | pending ZIP inspection |
| Reusable test patterns | 81 | Master spec §5 | pending ZIP inspection |
| Evaluation dimensions | 10 | Master spec §5 | pending ZIP inspection |
| Failure classes | 20 | Master spec §5 | pending ZIP inspection |
| Adversarial tests | 18 | Master spec §5 | pending ZIP inspection |
| Tests in completed demo | 50 | Master spec §5 | pending ZIP inspection |

## Agency deliverables

| Claim | Source basis | Verified |
|---|---|---|
| Client Discovery Workbook | Master spec §11 | pending ZIP inspection |
| Project Register | Master spec §11 | pending ZIP inspection |
| Client Readiness Dashboard | Master spec §11 | pending ZIP inspection |
| Client Production-Readiness Report | Master spec §11 | pending ZIP inspection |
| Client Review Presentation | Master spec §11 | pending ZIP inspection |
| Agency Workflow | Master spec §11 | pending ZIP inspection |
| Failure-Cost Calculator | Master spec §11 | pending ZIP inspection |

## Release-gate statuses

| Status | Source basis | Verified |
|---|---|---|
| BLOCKED | Refactor spec §RELEASE DECISION | pending product inspection |
| RETEST REQUIRED | Refactor spec §RELEASE DECISION | pending product inspection |
| PILOT CANDIDATE | Refactor spec §RELEASE DECISION | pending product inspection |
| PRODUCTION WITH OVERSIGHT | Refactor spec §RELEASE DECISION | pending product inspection |
| PRODUCTION CANDIDATE | Refactor spec §RELEASE DECISION | pending product inspection |

Only statuses verified in the product should be displayed. Update
`RELEASE_STATUSES` in `src/content/product.ts` if the real product differs.

## Edition distinctions

| Claim | Source basis | Verified |
|---|---|---|
| Standard = evaluate your own agents | Master spec §10 | pending license inspection |
| Agency = client engagements + client-facing deliverables per license | Master spec §11 | pending license inspection |
| Templates may not be redistributed or resold | Master spec §31 / license | pending license inspection |
| Agency can produce customized client-facing deliverables | Master spec §11 / license | pending license inspection |

## What the product is NOT (trust-building)

From master spec §3 and §14. Reflected in `WHO_ITS_NOT_FOR`:

- Not automated security penetration testing.
- Not formal certification.
- Not legal compliance approval.
- Not a replacement for domain experts.
- Not proof that an AI system is risk-free.
- Not fully automated evaluation software.

## Refund policy

The site does **not** display a specific refund guarantee. The FAQ points
buyers to the Gumroad checkout page for the seller's terms. If a guarantee is
verified, add it to `src/content/faq.ts`.

## Demonstration labeling

The completed example is clearly labeled "FICTIONAL DEMONSTRATION" on the site
(badge in `src/components/landing/completed-demo.tsx` and in the hero
composition). It is **not** presented as a real customer case study.

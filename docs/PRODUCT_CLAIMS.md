# Product Claims Ledger

Internal repository documentation. **Not exposed on the public site.**

This ledger records the source basis for each important commercial claim so the
copy can be audited against the actual product. Per the build spec, no
unverified number is displayed publicly.

When the final product ZIP files are supplied, verify each row against the
extracted files and update the "Verified" column. If a figure is wrong, update
it in `src/content/product.ts` (the single source of truth) — nowhere else.

## Verified metrics

| Claim | Public value | Source basis | Verified |
|---|---|---|---|
| Readiness checks | 40 | Master spec §5 | pending ZIP inspection |
| Reusable test patterns | 81 | Master spec §5 | pending ZIP inspection |
| Evaluation dimensions | 10 | Master spec §5 | pending ZIP inspection |
| Failure classes | 20 | Master spec §5 | pending ZIP inspection |
| Adversarial tests | 18 | Master spec §5 | pending ZIP inspection |
| Tests in completed demo | 50 | Master spec §5 | pending ZIP inspection |

## Edition distinctions

| Claim | Source basis | Verified |
|---|---|---|
| Standard = evaluate your own agents | Master spec §10 | pending license inspection |
| Agency = client engagements + client-facing deliverables per license | Master spec §11 | pending license inspection |
| Agency includes: discovery, project register, client dashboard, client report, review presentation, agency workflow, failure-cost calculator | Master spec §11 | pending ZIP inspection |
| Templates may not be redistributed or resold | Master spec §31 / license | pending license inspection |
| Agency can produce customized client-facing deliverables | Master spec §11 / license | pending license inspection |

## What the product is NOT (trust-building)

From master spec §3 and §14. Already reflected in `WHO_ITS_NOT_FOR`:

- Not automated security penetration testing.
- Not formal certification.
- Not legal compliance approval.
- Not a replacement for domain experts.
- Not proof that an AI system is risk-free.
- Not fully automated evaluation software.

## Refund policy

The site does **not** display a specific refund guarantee (e.g. "30-day
guarantee") because the actual Gumroad config has not been confirmed. The FAQ
points buyers to the Gumroad checkout page for the seller's terms. If a
guarantee is verified, add it to `src/content/faq.ts` (refund question) and
optionally to the editions section.

## Demonstration labeling

The completed example is clearly labeled "Fictional demonstration data" on the
site (badge in `src/components/landing/completed-demo.tsx`). It is **not**
presented as a real customer case study.

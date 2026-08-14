# Deployment

## Current deployment

The repository is already deployed to Vercel and connected to GitHub. Pushing
to `main` triggers an automatic redeploy.

- **Production URL:** https://ai-agent-production-readiness-kit.vercel.app/
- **Repository:** https://github.com/witejackel-eng/ai-agent-production-readiness-kit

## Vercel

The site is Vercel-compatible with zero configuration. To redeploy manually:

1. Push to `main` on GitHub. Vercel auto-deploys.
2. Or, on https://vercel.com, open the project → Deployments → Redeploy.

No environment variables are required.

After deploy:

1. Set real Gumroad URLs in `src/lib/product-links.ts` (`PRODUCT_LINKS.agency`,
   `PRODUCT_LINKS.standard`, `PRODUCT_LINKS.free`).
2. (For custom domain) Set `SITE_URL` to the new domain in the same file.
3. Commit and push — Vercel redeploys automatically.
4. Paste the Gumroad link-back line into the Gumroad listing copy:
   > Want to inspect the full system before buying? View the full product
   > walkthrough: `https://ai-agent-production-readiness-kit.vercel.app/`

## Local production build

```bash
bun install
bun run build
bun run start
```

## Quality gates (all must pass)

```bash
bun run lint        # ESLint — 0 errors
bun run typecheck   # tsc --noEmit — 0 errors
bun run build       # next build — succeeds (strict mode, no ignoreBuildErrors)
```

## Pre-deploy checklist

- [ ] `bun run lint` passes clean.
- [ ] `bun run typecheck` passes clean.
- [ ] `bun run build` succeeds.
- [ ] Real Gumroad URLs set in `src/lib/product-links.ts`.
- [ ] `SITE_URL` set to the deployed domain (already set to Vercel URL).
- [ ] OG image renders at `https://<domain>/og/og-image.png`.
- [ ] `/robots.txt` returns 200 and references sitemap.
- [ ] `/sitemap.xml` returns 200 and contains canonical homepage.
- [ ] `/favicon.ico` returns 200.
- [ ] Rendered HTML: exactly one `<h1>`, absolute canonical, index/follow,
      OG/Twitter image absolute, JSON-LD present, no localhost references.
- [ ] Mobile viewport (≈390px): no horizontal overflow, Agency sticky CTA
      visible, footer not covered.
- [ ] Desktop viewport (1440px): hero legible, Agency pricing card dominant,
      footer at bottom.
- [ ] All CTAs resolve to real Gumroad URLs (no "Gumroad URL pending" labels).

## Responsive QA viewports

| Width × Height | Target |
|---|---|
| 1440 × 900 | large desktop |
| 1280 × 800 | laptop |
| 1024 × 768 | small laptop / tablet landscape |
| 768 × 1024 | tablet portrait |
| 390 × 844 | mobile |
| 360 × 800 | small mobile |

Verify at each: no horizontal overflow, hero remains strong, Agency CTA
clear, pricing cards readable, sticky mobile CTA does not cover footer.

## Pushing to GitHub

The repository is already initialized and pushed. Git identity is configured
per-clone as:

```bash
git config user.name  "witejackel-eng"
git config user.email "witejackel@gmail.com"
```

Every commit must be authored by `witejackel-eng <witejackel@gmail.com>`.
No AI co-author attribution.

```bash
git status                 # working tree clean before push
git add .
git commit -m "<message>"
git push
```

### Authentication

GitHub no longer accepts password auth for git push. Use **one** of:

1. **GitHub CLI** (recommended): `gh auth login`
2. **SSH key**: https://docs.github.com/authentication/connecting-to-github-with-ssh
3. **A fine-grained PAT stored only in a credential helper** (not in the
   repo, not in the remote URL).

Never embed a PAT in the remote URL (`https://<token>@github.com/…`) — it
leaks into `.git/config`, shell history, and logs.

### Security note

If a PAT was shared in chat or pasted into any tool, **revoke it immediately**
at https://github.com/settings/tokens and generate a new one. Treat any token
that has touched a conversation/log as compromised.

## Post-push verification

```bash
git status                 # working tree clean
git remote -v              # origin -> witejackel-eng/ai-agent-production-readiness-kit
git branch --show-current  # main
git log --format=fuller    # author + committer = witejackel-eng <witejackel@gmail.com>
git config user.name       # witejackel-eng
git config user.email      # witejackel@gmail.com
git fetch origin
git rev-parse HEAD         # local
git rev-parse origin/main  # remote — must match
```

## Production verification (after Vercel deploy)

Inspect `https://ai-agent-production-readiness-kit.vercel.app/`:

- Homepage: 200
- `/robots.txt`: 200, references sitemap
- `/sitemap.xml`: 200, contains canonical page
- `/favicon.ico`: 200
- `/og/og-image.png`: 200, correct dimensions
- `/manifest.webmanifest`: 200
- `/apple-touch-icon.png`: 200
- Canonical: absolute production root URL
- Metadata: no localhost references
- Structured data: valid JSON-LD
- Links: no broken anchors
- Purchase CTAs: correct behavior

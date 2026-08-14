# Deployment

## Vercel (recommended)

The site is Vercel-compatible with zero configuration.

1. Push the repository to GitHub (see "Pushing to GitHub" below).
2. On https://vercel.com, click **Add New → Project** and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `next build` (default). Output: `.next` (default).
5. No environment variables are required.
6. Click **Deploy**.

After the first deploy:

1. Set real Gumroad URLs in `src/lib/product-links.ts` (`PRODUCT_LINKS.standard`,
   `PRODUCT_LINKS.agency`, `PRODUCT_LINKS.free`).
2. Set `SITE_URL` to the deployed domain (e.g. `https://your-site.vercel.app`).
3. Commit and push — Vercel redeploys automatically.
4. Paste the Gumroad link-back line into the Gumroad listing copy:
   > Want to inspect the full system before buying? View the full product
   > walkthrough: `<SITE_URL>`

## Local production build

Run in a clean environment (not the sandbox dev environment):

```bash
bun install
bun run build
bun run start
```

## Pre-deploy checklist

- [ ] `bun run lint` passes clean.
- [ ] `bun run build` succeeds.
- [ ] Real Gumroad URLs set in `src/lib/product-links.ts`.
- [ ] `SITE_URL` set to the deployed domain.
- [ ] OG image renders at `https://<domain>/og/og-image.svg`.
- [ ] Mobile viewport (≈390px): no horizontal overflow, sticky CTA visible,
      footer not covered.
- [ ] Desktop viewport (1440px): hero legible, pricing cards side by side,
      footer at bottom.
- [ ] All CTAs resolve to real Gumroad URLs (no "Gumroad URL pending" labels).

## Pushing to GitHub

Configure git identity once per clone (the spec requires the author below for
every commit on this project):

```bash
git config user.name  "witejackel-eng"
git config user.email "witejackel@gmail.com"
git config user.name   # verify -> witejackel-eng
git config user.email  # verify -> witejackel@gmail.com
```

Create the repository on GitHub at
`https://github.com/new`:
- Owner: `witejackel-eng`
- Name: `ai-agent-production-readiness-kit`
- Visibility: **Public** (the repo contains only safe site assets — no paid
  product files)
- Do **not** initialize with README/license/.gitignore (the local repo already
  has them).

Then push:

```bash
git remote add origin https://github.com/witejackel-eng/ai-agent-production-readiness-kit.git
git branch -M main
git add .
git commit -m "chore: initialize production landing site"
git push -u origin main
```

### Authentication (do this yourself — never paste a token into a tool)

GitHub no longer accepts password auth for git push. Use **one** of:

1. **GitHub CLI** (recommended):
   ```bash
   gh auth login
   gh repo create witejackel-eng/ai-agent-production-readiness-kit --public --source=. --remote=origin --push
   ```
2. **SSH key**: https://docs.github.com/authentication/connecting-to-github-with-ssh
3. **A fine-grained PAT stored only in a credential helper** (not in the repo,
   not in the remote URL):
   ```bash
   git config --global credential.helper store   # or osxkeychain / manager
   # git will prompt for username + password; paste the PAT as the password
   ```
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
```

Confirm the remote HEAD matches local:

```bash
git fetch origin
git rev-parse HEAD         # local
git rev-parse origin/main  # remote — must match
```

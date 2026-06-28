#!/usr/bin/env bash
# One-shot deploy to GitHub Pages. Run this from Claude Code (or Cowork) after
# you've authenticated once with:  gh auth login
# NOTE: this FORCE-pushes to the repo below — back up that repo first if it has
# anything you want to keep. (Your profile repo BronsonBagwell/BronsonBagwell is separate.)
set -euo pipefail

REPO="BronsonBagwell/bronsonbagwell.github.io"   # <-- the repo that serves your Pages
BRANCH="main"

command -v gh >/dev/null || { echo "Install the GitHub CLI (gh), then run: gh auth login"; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "Run 'gh auth login' first."; exit 1; }

echo "==> Installing & building"
npm install
npm run build

echo "==> Committing"
git init -b "$BRANCH" >/dev/null 2>&1 || true
git add -A
git commit -m "Deploy portfolio site" >/dev/null 2>&1 || echo "(nothing new to commit)"

echo "==> Ensuring repo exists"
gh repo view "$REPO" >/dev/null 2>&1 || gh repo create "$REPO" --public >/dev/null 2>&1 || true

echo "==> Pushing to $REPO ($BRANCH)"
git remote remove origin >/dev/null 2>&1 || true
git remote add origin "https://github.com/$REPO.git"
git push -f origin "$BRANCH"

echo "==> Enabling Pages (source: GitHub Actions)"
gh api -X POST "repos/$REPO/pages" -f build_type=workflow >/dev/null 2>&1 \
  || gh api -X PUT  "repos/$REPO/pages" -f build_type=workflow >/dev/null 2>&1 \
  || echo "If needed, set Settings -> Pages -> Source: 'GitHub Actions' by hand."

echo "Done. Actions will build & publish -> https://bronsonbagwell.github.io (~1-2 min)"

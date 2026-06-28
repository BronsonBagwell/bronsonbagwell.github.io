# Bronson Bagwell — Portfolio

My personal portfolio and résumé site. **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis.**

Live at **https://bronsonbagwell.github.io**.

## Editing content

Almost everything — name, role, bio, experience, projects, education, socials, and skills — lives in **`lib/data.ts`**. Edit that one file and the whole site updates.

- **Look & feel:** colors and the glass material live in `app/globals.css` (change `--accent` to introduce a color).
- **Résumé file:** replace `public/resume.pdf` with your own; the "Résumé" link/button already point to it.
- **Share image & icons:** `app/opengraph-image.png` (1200×630), plus `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`, and `public/icon-192.png` / `icon-512.png`.
- **Site URL for SEO:** `site.url` in `lib/data.ts` powers meta tags, Open Graph, canonical link, `sitemap.xml`, and JSON-LD.

## Run locally

Requires [Node.js](https://nodejs.org) 20+.

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploying

This repo deploys itself. Every push to `main` triggers the GitHub Actions
workflow (`.github/workflows/deploy.yml`), which builds the static export and
publishes it to GitHub Pages in about a minute.

```bash
git add -A
git commit -m "Update content"
git push
```

That's it — no manual build or upload step.

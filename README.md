# Portfolio — Jordan Avery

A monochrome "Liquid Glass" portfolio. **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis.**

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Add your content
Everything you need to change lives in **`lib/data.ts`** — your name, role, bio, experience, projects (with GitHub / live-demo links), education, socials, and skills. Edit that one file and the whole site updates.

The look (colors + the Liquid Glass material) lives in **`app/globals.css`**. The accent is monochrome by design; to introduce a colour, change `--accent` near the top.

## Build & deploy
```bash
npm run build
```
Deploy free on **Vercel**: push to GitHub, then import the repo at vercel.com — zero config.

## Extending with component libraries
Tailwind + Framer Motion are already wired up, plus a `cn()` helper in `lib/utils.ts`, so you can paste components straight from **Aceternity UI / Magic UI / React Bits** and re-skin them to the monochrome palette. (I'd keep the airy restraint and skip the beams/sparkles.)

## Notes
- True inertial smooth-scroll via **Lenis** (`components/SmoothScroll.tsx`).
- All motion respects `prefers-reduced-motion`.
- The intro/preloader plays each load; gate it with `sessionStorage` if you want first-visit-only.

## Host on GitHub Pages
This project is already configured for static export to GitHub Pages.

1. Push the project to a GitHub repo named, say, `portfolio`.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) builds the static export and deploys it automatically. It also detects your repo name and sets the correct `basePath`, so assets resolve at `https://<username>.github.io/<repo>/`.

Subsequent pushes redeploy automatically. (For a root `https://<username>.github.io` site, the workflow leaves `basePath` empty — it just works.)

> Prefer the simplest possible host? **Vercel** is one click and supports every Next.js feature with zero config — push to GitHub, import at vercel.com.

## SEO, social cards & résumé
- **Set your URL:** open `lib/data.ts` and change `site.url` to your real deployed URL. This powers the meta description, Open Graph / Twitter share image, canonical link, `sitemap.xml`, and JSON-LD structured data.
- **Share image:** `app/opengraph-image.png` (1200×630) is what shows when the link is posted anywhere. Swap the file to customize; the meta tags update automatically.
- **Favicons / app icons:** `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` (+ `public/icon-192.png` / `icon-512.png` for the web manifest).
- **Résumé:** replace `public/resume.pdf` with your own; the "Résumé" link and download button already point to it.
- **Accessibility:** skip-to-content link, focus-trapped mobile menu, `aria-current` nav state, AA-contrast text, and full `prefers-reduced-motion` support are built in.

# Granite Oil Fields Services

A premium, responsive corporate website for Granite Oil Fields Services, built with original Next.js code and a mobile-first experience.

## Stack

- Next.js 15 / React 19 / TypeScript
- Framer Motion for motion and slide-out navigation
- Next/Image with responsive remote placeholder photography
- Tailored CSS design system and responsive layouts

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production build with `npm run build`.

## Deployment

Push the repository to GitHub and import it in Vercel. No deployment configuration is required. Set the production site URL in `app/layout.tsx` when the domain is final.

## CI

This repository includes a GitHub Actions workflow that runs on pushes and pull requests to `main` and performs `npm ci`, `npm run build`, and `npm test` if present.

Badge (visible after the first run):

[CI status](https://github.com/emmyrichy1994/Granite-Oil-Fields-Landing-Page/actions)

## Structure

- `app/` — routes, metadata, sitemap and global styling
- `components/` — reusable navigation, home experience and internal-page shell
- `public/images/` — reserved for supplied, production oilfield image assets

## Content and image replacement

The included remote oilfield photography is intentionally temporary, as the supplied attachments were reference screenshots rather than source image files. Replace the `img` values in `components/home-page.tsx` with your approved images stored under `public/images/`, using paths such as `/images/field-rig.jpg`.

## EmailJS

The EmailJS package is included for the contact workflow. Add `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, then wire them into the final contact form when the EmailJS template is available.

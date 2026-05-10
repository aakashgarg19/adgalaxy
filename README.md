# Arcade Digital Galaxy — adgalaxy.in

A modern, cinematic redesign of [adgalaxy.in](https://adgalaxy.in/) — the New
Delhi photography & cinematography studio founded by Mr. Rajendra Malhotra in
1986.

Built with **React 19 + TypeScript + Vite + Tailwind CSS + Framer Motion**, and
deployable to **Vercel** with zero configuration.

## Tech stack

- React 19 + TypeScript
- Vite (fast dev server, fast prod build)
- Tailwind CSS 3 (custom ink/gold cinematic design system)
- Framer Motion (scroll-reveal animations, testimonial transitions)
- Lucide icons + custom inline SVGs for brand marks
- Google Fonts: Cormorant Garamond (display), Inter (sans), Allura (script)

## Sections

- Sticky transparent navbar that solidifies on scroll
- Cinematic hero with image collage and animated entrance
- Auto-scrolling service marquee
- Studio story / about
- Services grid (8 services pulled from the original site)
- Filterable portfolio mosaic
- "Why Choose Us" feature grid
- Auto-rotating testimonial carousel
- Full-bleed CTA
- Contact section with enquiry form
- Layered footer with sitemap + studio info

All content (services, copy, contact info) and the photography assets are
sourced from `adgalaxy.in`.

## Local development

```bash
npm install
npm run dev      # vite dev server at http://localhost:5173
npm run build    # type-check + production build into ./dist
npm run preview  # preview the production build locally
```

## Deploying to Vercel

The repo is preconfigured (`vercel.json`):

1. Push to GitHub.
2. On Vercel, **New Project → Import** this repo.
3. Vercel auto-detects Vite. Click **Deploy**.

Or with the CLI:

```bash
npm i -g vercel
vercel --prod
```

## Project structure

```
src/
  App.tsx                # page composition
  main.tsx               # React entry
  index.css              # Tailwind layers + design system primitives
  data/
    site.ts              # all content: brand, nav, services, portfolio, etc.
  components/
    Navbar.tsx
    Logo.tsx
    Hero.tsx
    Marquee.tsx
    About.tsx
    Services.tsx
    Portfolio.tsx
    WhyUs.tsx
    Testimonials.tsx
    CTA.tsx
    Contact.tsx
    Footer.tsx
    Reveal.tsx           # scroll-reveal motion wrapper
```

## Editing content

All copy lives in [`src/data/site.ts`](src/data/site.ts). Update brand info,
contact details, services, portfolio items, testimonials and stats there — the
UI binds to it.

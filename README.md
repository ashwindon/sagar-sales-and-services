# Sagar Sales and Services — Landing Page

A single-page site for **Sagar Sales and Services** — solar equipment and
agricultural water solutions. Built with Vite + React + Tailwind CSS,
animations with GSAP + Lenis, and a static build that deploys to free hosts
such as Cloudflare Pages with no backend.

## Project structure

```
images/                 ← original photos (leave untouched)
public/images/          ← web-optimized WebP + JPG copies (generated)
src/
  config.js             ← ⭐ WhatsApp number, greeting, contact details
  components/           ← Navbar, Hero, Services, WhyChooseUs, SiteFooter, ...
  lib/motion.js         ← GSAP + Lenis setup (respects prefers-reduced-motion)
scripts/optimize-images.mjs
```

## Getting started

```bash
npm install          # once
npm run dev          # local dev server (http://localhost:5173)
npm run build        # production build → dist/
npm run preview      # serve the built dist/ locally to check it
```

## Changing the WhatsApp number

All WhatsApp buttons ("Chat With Us on WhatsApp", nav, hero, footer, and the
floating button) read from **one file**: [src/config.js](src/config.js).

1. Open `src/config.js`.
2. Replace `WHATSAPP_NUMBER` with the real number — international format,
   digits only (country code first, no `+`, no spaces), e.g. `919812345678`.
3. Optionally change `WHATSAPP_GREETING` (the pre-filled first message).
4. Replace the placeholder phone display, address, and email in `CONTACT`.
5. Run `npm run build` and redeploy (see below).

## Updating photos

Source photos live in `images/`. To swap any photo (or add one), replace the
file in `images/` with the same name, then regenerate the optimized copies:

```bash
npm run optimize:images   # needs devDependencies installed (uses sharp)
```

This writes resized WebP variants plus a JPG fallback into `public/images/`.
Image slots are commented in the components (see `Services.jsx`, `Hero.jsx`,
`SiteFooter.jsx`) naming exactly which file belongs where. The installation
card currently uses an icon instead of a photo; you can give it a photo the
same way as the others if you add `images/installation.jpg`.

## Deploying (Cloudflare Pages, free)

1. `npm run build` — output lands in `dist/`.
2. Either:
   - **Git integration:** push this repo to GitHub/GitLab and in Cloudflare
     Pages choose "Connect to Git". Build command `npm run build`, output
     directory `dist`.
   - **Direct upload:** drag-and-drop the `dist/` folder into Cloudflare Pages
     (or upload it via the CLI).

No server, environment variables, or database are needed.

## Accessibility and performance notes

- WCAG AA contrast for text over photos and glass; visible focus rings;
  44px+ tap targets; semantic HTML; decorative images marked `aria-hidden`.
- `prefers-reduced-motion` disables smooth scrolling and all animations.
- Hero image is preloaded and eager; everything below the fold lazy-loads.
- Layout uses explicit image dimensions to avoid CLS.
- Browsers without `backdrop-filter` get a near-opaque glass fallback that
  stays readable.

## License

See [LICENSE](LICENSE).

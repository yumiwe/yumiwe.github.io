# AGENTS.md

## What this repo is

The Yumiwe V1 brochure website: a single scrolling page (`index.html`) plus a
standalone `privacy.html`. Hosted on GitHub Pages at `yumiwe.com` (see `CNAME`).

Read `docs/website-brief.md` before making product, copy or brand decisions.

## Constraints

- Static HTML, hand-written CSS and minimal browser-native JavaScript only.
- No frameworks, package manager, build step or external runtime dependency.
- The site must work without JavaScript. `main.js` is progressive enhancement
  only — content is visible by default and an inline script adds `.js` to
  `<html>` to opt into scroll-reveal animations.
- Prefer semantic HTML and maintainable CSS.

## Layout

```
index.html          single brochure page
privacy.html        standalone privacy page (shares header/footer)
styles.css          all styling, design tokens at the top under :root
main.js             scroll-reveal progressive enhancement
assets/fonts/       self-hosted Atkinson Hyperlegible Next (.woff2)
assets/images/      team portraits
assets/favicon.svg  site icon
docs/               business context
```

## Conventions

- Brand name: the wordmark/logo is always lowercase `yumiwe`; in prose the
  company name is written `Yumiwe`.
- Colour tokens live under `:root` in `styles.css` (provisional, not final
  branding): off-white background, dark charcoal text, `#3b3a6a` identity.
- Distinguish clearly between what exists, what is being built, and the
  longer-term vision. Do not present planned capabilities as available.
- No fabricated metrics, pricing, testimonials, logos or lead-gen forms.

## Local preview

Open `index.html` directly, or serve the folder:

```
python3 -m http.server 8000
```

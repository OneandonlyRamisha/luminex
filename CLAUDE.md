# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js 16

This project uses Next.js 16, which has breaking changes from prior versions. Before writing any Next.js-specific code, check `node_modules/next/dist/docs/` for current API conventions. Do not assume Next.js 13–15 patterns apply.

## Commands

All commands run from `/app` (the Next.js project root):

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
npm start        # Serve production build
```

No test suite is configured.

## Repository layout

```
luminex/
  app/               # Next.js app — this is the project root for all npm commands
  design-handoff/    # Brand documentation and reference images (not served)
    BRAND.md         # Full brand spec: voice, copy, lab data, product details
```

## Application structure

### Routes

Three App Router pages under `app/app/`:

| Route        | File                                                     |
| ------------ | -------------------------------------------------------- |
| `/`          | `app/page.tsx` — home, full marketing page               |
| `/pirosmani` | `app/pirosmani/page.tsx` — red sleep lens product page   |
| `/rustaveli` | `app/rustaveli/page.tsx` — yellow work lens product page |

All three pages are `"use client"` — this is a project convention, not a framework requirement.

### Component locations

Two distinct trees:

**`app/app/sections/`** — home-page-only section components (Hero, WhatWeMake, TheScience, TheModels, About, HomeFaq). Not reused elsewhere.

**`app/app/pirosmani/sections/`** and **`app/app/rustaveli/sections/`** — each product page has its own `Hero` component with that model's stats and CTA hardcoded.

**`app/components/`** — shared components used by both product pages: Nav, Footer, TrustBar, WhyItWorks, Portrait, LabData, Protocol, InTheBox, ProductCta, ProductFaq, Crosslink, HomeProductCard, FaqRow, LogoMark, SpectrumVisualizer.

### Product page structure

Both `/pirosmani` and `/rustaveli` follow an identical section order:

```
Nav → Hero → TrustBar → WhyItWorks → Portrait → LabData → Protocol
→ InTheBox → ProductCta → ProductFaq → Crosslink → Footer
```

All section content (copy, lab data rows, FAQ items, protocol steps) is defined as `const` arrays directly in the page file and passed as props to the shared components. There are no external data files or CMS — the page file is the source of truth for all copy.

### Path alias

`@/*` resolves to `app/` (the Next.js project root). Use `@/components/...` for shared components.

## Styling

### CSS variables (defined in `app/globals.css`)

| Variable          | Value                         | Role                                     |
| ----------------- | ----------------------------- | ---------------------------------------- |
| `--obsidian`      | `#0B0B0C`                     | Frames, primary text, dark backgrounds   |
| `--bone`          | `#F4F1EA`                     | Default page background                  |
| `--graphite`      | `#5A5A5E`                     | Secondary text, borders                  |
| `--crimson`       | `#B5121B`                     | Pirosmani accent (never full background) |
| `--gold`          | `#E3B23C`                     | Rustaveli accent (never full background) |
| `--dark-1/2/3`    | `#1A1A1C / #2A2A2D / #3C3C40` | Dark surface steps                       |
| `--surface-2`     | `#EAE6DC`                     | Secondary light surface                  |
| `--border-subtle` | `#C8C4BB`                     | Hairline borders on light backgrounds    |

### CSS Modules + inline style theming

Each component has a co-located `.module.css` for layout, spacing, and base typography. **Accent color and dark/light theming are applied via inline `style` props**, not CSS variables — components accept an `accent` prop (hex string) and compute `color`, `background`, and `borderColor` inline. This is intentional: it allows the same component to render in Pirosmani crimson or Rustaveli gold without CSS cascade conflicts.

### Tailwind CSS v4

Imported via `@import "tailwindcss"` in globals.css. Available but used sparingly — most styling is CSS Modules.

### Background convention

- Default page background: `--bone` (`#F4F1EA`)
- Product pages override the root `<div>` to `background: "#0B0B0C"` (obsidian)

## Fonts (loaded in `app/layout.tsx`)

| CSS variable     | Font                | Use                                                                  |
| ---------------- | ------------------- | -------------------------------------------------------------------- |
| `--font-body`    | Inter               | Body text, UI labels                                                 |
| `--font-mono`    | JetBrains Mono      | Lab measurements and numbers — signals "this is data, not marketing" |
| `--font-display` | Noto Serif Georgian | Headlines; supports Georgian script                                  |

Fonts are attached as CSS variables on `<html>`. Reference them with `var(--font-body)` etc. in CSS Modules.

## Image assets

All images are in `public/images/` and referenced as `/images/<file>.png`:

| File                | Used by                             |
| ------------------- | ----------------------------------- |
| `hero-home.png`     | Home Hero                           |
| `piro-hero.png`     | Pirosmani Hero + LabData            |
| `piro-card.png`     | HomeProductCard                     |
| `piro-portrait.png` | HomeProductCard hover + Portrait    |
| `rust-card.png`     | HomeProductCard + Rustaveli LabData |
| `rust-portrait.png` | HomeProductCard hover + Portrait    |
| `icon.png`          | LogoMark, app/icon.png (favicon)    |

All images use `next/image` with `fill` + `sizes` for responsive loading.

## Component details

### Nav

- Fixed at top. Adds `navScrolled` CSS class after 56px scroll (for backdrop blur / border).
- Active link detected via `usePathname()`.
- "Shop — 74 ₾" CTA links to `/pirosmani`.
- `LogoMark` renders `/images/icon.png` — the `color` prop is accepted but unused (the SVG is replaced by a PNG asset).

### HomeProductCard

Two-column card. Image side shows product photo by default; on `mouseEnter` it crossfades (500ms) to a portrait photo. Uses `imgRight` boolean to flip column order (Pirosmani: image left, Rustaveli: image right). `dark` boolean switches the text block between obsidian and bone backgrounds.

### SpectrumVisualizer

A four-file module in `components/SpectrumVisualizer/`: the parent `SpectrumVisualizer.tsx` holds the lens data and active state; `LensSelector`, `SpectrumBar`, and `LensDetail` are display-only subcomponents. Clicking a lens toggles it; clicking the same lens again deselects. This is used once, in the home page's `TheScience` section.

### ProductFaq / FaqRow

`ProductFaq` manages its own accordion state (`useState<number | null>`) and renders rows inline — it does not use `FaqRow`. `FaqRow` is a standalone stateless component (used separately if needed). Expanding an item animates via `maxHeight: open ? 200 : 0` with CSS transition.

### ProductCta

Fully presentational. The "Add to cart — 74 ₾" button has no click handler — cart/checkout is not yet implemented.

### Shared component prop patterns

All shared product-page components use explicit `accent` (hex string) to drive their highlight color. When adding new shared components, follow this pattern — accept `accent` rather than hardcoding per-model colors.

## Brand context

Full documentation is in `/design-handoff/BRAND.md`. Key points:

**Products:**

- **Pirosmani** (`#B5121B`) — red lens, Tv 13%, Filter Category 3. Sleep/circadian. SKU: `LMX-01-PIR-RED`. Blocks ~99% blue (380–500nm). Not for driving.
- **Rustaveli** (`#E3B23C`) — yellow lens, Tv 79.87%, Filter Category 1. Work/focus. SKU: `LMX-02-RUS-YEL`. Night-driving certified. Wear all day.
- **Petritsi** (`#D96B27`) — orange, Tv ~40–60%, Category 2. Not yet launched — use only as placeholder.

**Voice rules:**

- Tool/instrument language: _calibrated, tuned, transmission, filter, spectrum_
- Short sentences with verbs in front
- Lab numbers over adjectives — "13% transmission" not "very dark"
- No fashion vocabulary (stylish, iconic, statement), no wellness clichés (self-care, glow up)
- Georgian script (`ლუმინექსი`, `ფიროსმანი`, `რუსთაველი`) is a design element — render as-is, never transliterate or explain
- Product color dots (🔴🟡🟠) used only in product names as spec markers, never in body copy

**Georgian copy:** always have a native speaker review before publishing. Draft Georgian is marked throughout BRAND.md.

## Spell-check

`cspell.json` includes all brand-specific Georgian words and proper nouns (Pirosmani, Rustaveli, Tbilisi, etc.). Add new Georgian terms there when writing Georgian-script content.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KAB Marble & Granite is a single-page marketing website for a countertop company in Utah. Built with Astro 5.x as a static site.

## Commands

```bash
npm run dev      # Start development server (localhost:4321)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

## Architecture

- **Framework**: Astro 5.x (static site generator)
- **Styling**: Custom CSS with CSS variables (no framework)
- **Fonts**: Google Fonts (Bodoni Moda for display, Manrope for body)

### Project Structure

```
src/
├── components/        # Reusable Astro components
│   ├── Header.astro   # Navigation header (scroll-aware)
│   ├── Hero.astro     # Hero section with CTA
│   ├── About.astro    # What We Do section
│   ├── Quote.astro    # Parallax quote section
│   ├── Portfolio.astro # Our Work gallery
│   ├── Services.astro # Services grid
│   ├── Process.astro  # Process timeline
│   ├── Contact.astro  # Contact info + map
│   └── Footer.astro   # Footer with back-to-top
├── config/
│   └── images.ts      # Centralized image paths
├── layouts/
│   └── Layout.astro   # Base layout with global styles
└── pages/
    └── index.astro    # Main page (composes components)
public/                # Static assets (logo.png, favicon.svg)
```

### Image Configuration

All images are centralized in `src/config/images.ts` for easy management:
```typescript
import { images } from '../config/images';
// images.logo, images.hero, images.about.kitchen, etc.
```

### Design System (CSS Variables)

- Colors: `--gold` (#C69F50), `--charcoal` (#1a1a1a), `--cream` (#faf9f7)
- Typography: `--font-display` (Bodoni Moda), `--font-body` (Manrope)

### Page Sections

The site is a single scrolling page with sections: Hero, What We Do, Quote, Our Work (portfolio), Services, Process, Contact, and Footer.

## Notes

- All styles are embedded in index.astro (no external CSS files)
- Header navigation changes color on scroll (white on dark hero, dark on scrolled white background)
- Logo requires white background for visibility on dark hero section

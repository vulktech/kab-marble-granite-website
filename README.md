# KAB Marble & Granite Website

A single-page marketing website for KAB Marble & Granite, a countertop company based in Utah. Built with Astro 5.x as a static site.

## Tech Stack

- **Framework**: Astro 5.x (static site generator)
- **Styling**: Custom CSS with CSS variables
- **Fonts**: Google Fonts (Bodoni Moda for display, Manrope for body)

## Getting Started

```bash
npm install      # Install dependencies
npm run dev      # Start development server (localhost:4321)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

## Project Structure

```
src/
├── components/        # Reusable Astro components
├── config/            # Centralized configuration (images, etc.)
├── layouts/           # Base layout with global styles
└── pages/             # Page routes
public/                # Static assets (logo, favicon)
```

## Features

- Scroll-aware header navigation
- Hero section with call-to-action
- Portfolio gallery
- Services grid
- Process timeline
- Contact section with map
- Parallax effects
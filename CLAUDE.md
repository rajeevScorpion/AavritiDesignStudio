# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A portfolio website for Aavriti Design Studio built with React, TypeScript, and Vite. The site showcases design projects, services, team members, and digital products with a modern, dark-themed aesthetic and custom interactive elements.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Architecture & Structure

### File Organization
The project uses a **flat structure** with files at the root level (no `src/` directory):
- `/components/` - Reusable UI components
- `/pages/` - Page-level components mapped to routes
- `constants.ts` - Centralized data store for projects, services, founders, testimonials, etc.
- `types.ts` - TypeScript type definitions
- `App.tsx` - Root component with routing configuration
- `index.tsx` - Application entry point
- `index.html` - HTML template with Tailwind CDN config and import maps

### Routing Architecture
- Uses **HashRouter** (not BrowserRouter) for client-side routing
- Routes are defined in [App.tsx](App.tsx:29-36):
  - `/` - Home page (includes hero, services, projects, studio, contact sections)
  - `/work` - Projects gallery
  - `/work/:id` - Individual project detail pages
  - Legacy routes (`/studio`, `/contact`) redirect to Home with hash anchors
- `ScrollToTop` component resets scroll position on navigation (unless navigating to hash anchors)
- Project navigation supports adjacent project browsing (next/previous)

### Data Architecture
All content is **data-driven from constants.ts**:
- `PROJECTS` - Portfolio projects with full case study details
- `SERVICES` - Service offerings
- `FOUNDERS` - Team member profiles
- `DIGITAL_PRODUCTS` - Product showcases
- `TESTIMONIALS` - Client testimonials

Project objects follow the `Project` interface defined in [types.ts](types.ts:1-14) with fields for overview, challenge, approach, outcome, images, etc.

### Styling System
- **Tailwind CSS via CDN** - Configuration embedded in [index.html](index.html:13-54) script tag
- Custom brand colors defined in Tailwind config (brand-black, brand-neon, brand-accent, etc.)
- Dark mode using Tailwind's `class` strategy - managed via localStorage and `.dark` class on `<html>`
- Custom animations and keyframes defined in Tailwind config
- Grid background patterns with `.bg-grid-light` and `.bg-grid-dark` utilities
- Default theme is **dark mode**

### Dependency Management
Uses **import maps** in index.html for external dependencies (React, React Router, Lucide). Package.json dependencies are for development tooling (Vite, TypeScript, types).

### Path Aliases
- `@/*` resolves to the root directory (configured in [vite.config.ts](vite.config.ts:18-20) and [tsconfig.json](tsconfig.json:21-24))
- Example: `import Button from '@/components/Button'`

## Key Components & Patterns

### Navbar ([components/Navbar.tsx](components/Navbar.tsx))
- Dark/light theme toggle stored in localStorage
- Scroll-triggered background change
- Mobile hamburger menu
- Hash-based anchor navigation for same-page sections

### CustomCursor ([components/CustomCursor.tsx](components/CustomCursor.tsx))
- Custom cursor that follows mouse movement
- Expands on hover over interactive elements
- Hidden on mobile devices
- Default cursor is hidden via CSS (`cursor: none`)

### ScrollReveal ([components/ScrollReveal.tsx](components/ScrollReveal.tsx))
- Intersection Observer-based animation trigger
- Wrap content to animate on scroll into view

### Home Page Sections
The Home page ([pages/Home.tsx](pages/Home.tsx)) is a single-page layout containing:
- Hero with rotating words ("CREATIVITY", "CODE", "COMPASSION")
- Services grid (id: `#services`)
- Featured projects carousel
- Studio/about section with founder profiles (id: `#studio`)
- Digital products showcase
- Contact form (id: `#contact`)
- Testimonials

## Environment Variables

Set `GEMINI_API_KEY` in `.env.local` file (referenced in vite.config as `process.env.GEMINI_API_KEY` and `process.env.API_KEY`).

## Important Notes

- When adding new projects, update `PROJECTS` array in [constants.ts](constants.ts:12-69)
- Project IDs must be URL-safe (used in `/work/:id` routes)
- Images currently use placeholder URLs (picsum.photos) - replace with actual assets
- All sections use hash-based anchor links for navigation (e.g., `/#studio`, `/#contact`)
- Theme toggle state persists across sessions via localStorage

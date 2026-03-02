# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
yarn dev          # Start HTTPS dev server with HMR (LAN accessible)
yarn build        # TypeScript check + Vite production build (tsc && vite build)
yarn preview      # Preview production build locally
npx prettier --write src/  # Format code
```

No test framework is configured. No ESLint — only Prettier for formatting.

## Architecture

Lit 3 + TypeScript SPA bundled with Vite, deployed to GitHub Pages via GitHub Actions. No backend — all logic is client-side.

### Routing & Authentication

- **Hash-based routing** in `src/main-app.ts` — switches pages based on `location.hash`
- **Guest authentication**: names are SHA-256 hashed and checked against a hardcoded map in `src/guest-name-validation.ts`
- Three permission tiers control which events a guest sees on the schedule page: `weddingOnlySlugs`, `welcomeReceptionSlugs`, `weddingPartySlugs`
- Authenticated name stored in `localStorage` as `firstAndLast`

### Guest List Generation

`scripts/generate-events.js` reads a CSV (`guest-list.csv`) with PapaParse, hashes names with SHA-256, assigns permission tiers based on tags, and outputs a JS object to paste into `guest-name-validation.ts`.

### Component Pattern

All pages are Lit web components using `@customElement`, `@property`, `@state` decorators with Shadow DOM scoped styles. Shared CSS utilities are in `src/styles.ts`. Global styles and custom fonts (Atteron, EB Garamond) are in `src/main.css`.

### Navigation

`src/wedding-navbar.ts` defines the nav structure with subtab groups. Disabled items show a "Coming soon" tooltip (`src/tooltip.ts`).

## Conventions

- **Package manager**: Yarn
- **Formatting**: Prettier — 100 char width, single quotes, trailing commas, semicolons
- **TypeScript**: Strict mode, ES2020 target, experimental decorators enabled
- **Responsive breakpoint**: 1270px for mobile layouts
- **HTTPS dev server**: Uses local `key.pem`/`cert.pem` (gitignored) for LAN testing on mobile

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is a family budget creation and expense tracking app called Expend. It has two primary functions

1. Creating a budget based on all reported income sources.
2. Tracking adherence to the budget on a monthly basis.

## Commands

**Development:**

- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally

**Code Quality:**

- `pnpm lint` - Run Prettier formatting, ESLint fixes, and TypeScript checking (combined command)
- `eslint --fix` - Fix ESLint issues only
- `tsc --noEmit` - Run TypeScript checking only

**Package Management:**

- `pnpm install` - Install dependencies
- `pnpm astro ...` - Run Astro CLI commands

## Architecture

This is an Astro project using:

- **Framework:** Astro 5.x with static site generation
- **Styling:** Tailwind CSS 4.x with Vite integration
- **Deployment:** Netlify adapter configured
- **Package Manager:** pnpm with workspace configuration

**Project Structure:**

```
src/
├── assets/         # Static assets (SVGs, images)
├── components/     # Astro components (.astro files)
├── layouts/        # Page layout templates
├── pages/          # File-based routing (index.astro = homepage)
└── styles/         # Global CSS files
```

**Code Standards:**

- TypeScript with strict configuration extending `astro/tsconfigs/strict`
- ESLint with Astro, TypeScript, and accessibility (jsx-a11y) rules
- Prettier formatting with tabs (width: 4), 100 character line width
- Astro-specific parser configurations for .astro files

**Key Configuration Notes:**

- Uses Vite with Tailwind CSS plugin integration
- ESLint disabled for `no-undef` and `@typescript-eslint/no-explicit-any` in Astro files
- Prettier configured for Astro and Tailwind class sorting
- Global browser and Node.js environments configured in ESLint

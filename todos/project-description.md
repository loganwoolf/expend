# Project: Expend

A family budget creation and expense tracking web application that helps families manage their finances by creating budgets based on income sources and tracking spending adherence on a monthly basis.

## Features

- **Income Management**: Add multiple income sources and calculate total available budget
- **Budget Category Management**: Create and allocate budget categories that cannot exceed total income
- **Manual Expense Tracking**: Input individual expenses with real-time budget comparison
- **CSV Import**: Upload bank statements with column mapping and duplicate detection
- **Monthly Reporting**: Budget adherence reports, spending trends, and visual analytics
- **Progressive Web App**: Offline functionality and mobile-responsive design

## Tech Stack

- **Framework**: Astro 5.x with static site generation
- **Styling**: Tailwind CSS 4.x with Vite integration
- **Language**: TypeScript with strict configuration
- **Package Manager**: pnpm with workspace configuration
- **Deployment**: Netlify adapter configured
- **Planned Database**: Turso (SQLite-based)
- **Planned Auth**: better-auth
- **Planned API**: Netlify Functions

## Structure

- **src/pages/**: File-based routing (index.astro = homepage)
- **src/components/**: Reusable Astro components (.astro files)
- **src/layouts/**: Page layout templates
- **src/styles/**: Global CSS files
- **src/assets/**: Static assets (SVGs, images)
- **todos/**: Project documentation and planning

## Architecture

Astro-based static site generation with component-based architecture, TypeScript-first development, and planned serverless backend via Netlify Functions. Uses file-based routing and scoped component styling.

## Commands

- **Build**: `pnpm build`
- **Test**: No testing framework configured yet
- **Lint**: `pnpm lint` (Prettier + ESLint + TypeScript)
- **Dev/Run**: `pnpm dev` (starts localhost:4321)

## Testing

No testing framework currently set up. Planned for Phase 10 of development with Vitest for unit/integration testing and Playwright for e2e testing.

## Editor

- Open folder: `code`
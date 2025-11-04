# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**arcmutate-redesign** is a full-stack web application built with React (client), Express (server), and TypeScript. It uses Vite for client bundling, Tailwind CSS for styling, and shadcn/ui for component design.

The application follows a monorepo structure with three main directories:

- **client/** - React frontend (Vite + TypeScript + React)
- **server/** - Express backend (Node.js + TypeScript)
- **shared/** - Shared types and constants between client and server

## Development Setup

### Package Manager

The project uses **pnpm** (v10.4.1+). Ensure pnpm is installed before running commands.

### Core Commands

**Build for production:**

```bash
pnpm build
```

Builds both the Vite client and bundles the server with esbuild to `dist/`.

**Start production server:**

```bash
pnpm start
```

Runs the compiled server from `dist/index.js`.

**Development mode (client only):**

```bash
pnpm dev
```

Starts the Vite dev server with hot reload on port 3000 (or the next available port if busy).

**Type checking:**

```bash
pnpm check
```

Runs TypeScript compiler in no-emit mode to catch type errors without generating files.

**Code formatting:**

```bash
pnpm format
```

Formats all code using Prettier (configured in `.prettierrc`).

## Project Structure

### Client Architecture (`client/src/`)

- **pages/** - Top-level page components (routing destinations)
  - **Homepage Variants** (all have full-screen video hero with rotating industry videos):
    - `Home.tsx` (/) - Main homepage with full sections (benefits, industries, features, company, testimonials, pricing)
    - `Home2.tsx` (/home2) - Alternative with rectangle background removed, uses car-2.mov instead of car.mov
    - `Home3.tsx` (/home3) - Full-screen video hero + product-focused content (benefits, features, testimonials, CTA)
  - **Industry Pages** - Detailed information pages with analogies:
    - `Bank.tsx` (/bank) - Financial services with banking stress test analogy
    - `Health.tsx` (/health) - Pharmaceutical & medical with QA manufacturing analogy
    - `Car.tsx` (/car) - Automotive with ISO 26262 focus
  - **Educational Pages**:
    - `MutationTesting.tsx` (/mutation-testing) - Comprehensive mutation testing explanation
  - `NotFound.tsx` - 404 page
  - Use wouter (`Route` component) for routing
- **components/** - Reusable UI and feature components
  - **ui/** - shadcn/ui components (Radix UI + Tailwind)
  - `ManusDialog.tsx` - Custom dialog component
  - `ErrorBoundary.tsx` - Error boundary wrapper
- **contexts/** - React context providers
  - `ThemeContext.tsx` - Theme management (light/dark modes)
  - Can be made switchable by passing `switchable` prop to ThemeProvider
- **hooks/** - Custom React hooks
  - `usePersistFn.ts` - Persist function across renders
  - `useComposition.ts` - Composition API helper
  - `useMobile.tsx` - Mobile detection hook
- **lib/** - Utilities and helpers
  - `utils.ts` - Common utilities (e.g., `cn` for classname merging with clsx + tailwind-merge)
- **const.ts** - Client constants
- **index.css** - Global Tailwind CSS styles and CSS variables for theming
- **main.tsx** - React entry point
- **App.tsx** - Root app component with routing and provider setup

### Server Architecture (`server/`)

- **index.ts** - Single Express server file
  - Serves static files from `dist/public` (production) or `dist/public` (development)
  - Implements client-side routing fallback (all routes → index.html)
  - Configurable via `PORT` environment variable (default: 3000)

### Shared (`shared/`)

- **const.ts** - Shared constants between client and server

## Styling and UI

### Framework

- **Tailwind CSS v4** with Vite plugin
- **shadcn/ui** components based on Radix UI
- Custom components can be added via `npx shadcn-ui@latest add [component]` (auto-configured in `components.json`)

### Theme Configuration

Located in `client/src/index.css`:

- CSS variables define the color palette
- Theme mode is controlled via the `ThemeContext`
- Default theme is **light** (can be changed in `App.tsx`)
- Comment in `App.tsx` provides guidance on theme setup

### Component Aliases (from `components.json`)

- `@/components` - Component directory
- `@/components/ui` - UI components
- `@/lib` - Utilities
- `@shared/*` - Shared directory
- `@/hooks` - Custom hooks

## TypeScript Configuration

**tsconfig.json** includes:

- Path aliases: `@/*` → `client/src/*`, `@shared/*` → `shared/*`
- Strict mode enabled
- JSX preset set to "preserve" (handled by React plugin)
- Incremental compilation for faster rebuilds
- Module resolution: "bundler" for ESM

## Environment Variables

Configuration in `.env.example`:

- `VITE_APP_ID` - Application identifier
- `VITE_APP_TITLE` - Application title (displayed in UI)
- `VITE_APP_LOGO` - Logo URL
- `VITE_ANALYTICS_ENDPOINT` - Analytics service endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics tracking ID

Variables prefixed with `VITE_` are exposed to the client at build time.

## Key Dependencies

### Client

- **React 18** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Headless component primitives
- **shadcn/ui** - High-quality React components
- **wouter** - Lightweight client-side routing
- **@tanstack/react-query** - Data fetching and caching
- **react-hook-form** - Form state management
- **zod** - TypeScript-first schema validation
- **framer-motion** - Animation library
- **recharts** - Chart library
- **sonner** - Toast notification system
- **next-themes** - Theme management utilities

### Server

- **Express 4** - Web framework
- **Node.js** - Runtime (uses ESM with `type: "module"` in package.json)

### Dev Tools

- **TypeScript 5.6** - Static type checking
- **Vite** - Client build and dev server
- **esbuild** - Server bundler
- **Prettier** - Code formatter
- **Vitest** - Unit testing framework (available but not yet configured)

## Patched Dependencies

- **wouter@3.7.1** - Custom patch applied (see `patches/wouter@3.7.1.patch`)
- **tailwindcss>nanoid** - Overridden to v3.3.7

## Homepage Design

### Hero Section Features
- **Full-screen video background** with dark gradient overlay (60% to 30% transparency)
- **Rotating industry content** with randomized order on each page load
- **Auto-advance** changes content every 12 seconds (gives users time to read)
- **Manual navigation** via indicator dots at bottom
- **Text overlay** centered on video without background container
- **Drop shadows** on text for readability against any video background

### Video Assets (Required in `client/public/`)
The homepage cycles through three industries with video backgrounds:
- `car.mov` + `car.jpg` (poster) - Automotive industry
- `car-2.mov` + `car.jpg` (poster) - Alternative car video for Home2 variant
- `bank.mov` + `bank.jpg` (poster) - Financial services industry
- `health.mov` + `health.jpg` (poster) - Pharmaceutical & medical industry

### Button Behavior Changes
- **"More Info" buttons are industry-specific:**
  - "More info on car safety" → `/car`
  - "More info on bank security" → `/bank`
  - "More info on medical" → `/health`
- Link to industry pages using wouter's `<Link>` component
- Industry pages include detailed information, key challenges, solutions, and industry-specific analogies

### Industry Page Analogies
Each industry page includes a thematic analogy section:
- **Bank**: Banking as financial stress test (market conditions simulation)
- **Health**: Pharmaceutical manufacturing quality control (stress-testing materials)
- **Car**: Similar safety focus on driver protection

## Routing Structure

All routes are defined in `App.tsx` using wouter's `<Route>` and `<Switch>` components:

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Home.tsx | Main homepage with full feature set |
| `/home2` | Home2.tsx | Alternative homepage variant (no rectangle, car-2.mov) |
| `/home3` | Home3.tsx | Product-focused homepage (hero + benefits/features/CTA) |
| `/mutation-testing` | MutationTesting.tsx | Educational page explaining mutation testing concept |
| `/bank` | Bank.tsx | Financial services industry details |
| `/health` | Health.tsx | Pharmaceutical & medical industry details |
| `/car` | Car.tsx | Automotive industry details |
| `/404` | NotFound.tsx | 404 error page |
| `*` | NotFound.tsx | Fallback for unmatched routes |

## Educational Content

### Mutation Testing Page (`/mutation-testing`)
Comprehensive educational page that covers:
- Definition and concept explanation
- How mutation testing works (4-step process)
- Key concepts (killed mutants, surviving mutants, mutation score, equivalent mutants)
- Why it matters (4 key benefits)
- Real-world banking example
- Common misconceptions (3 myths debunked)
- Getting started with ArcMutate
- Back button to return to home

### Link Integration
- "Learn more about mutation testing →" link added after "What is Mutation Testing?" intro on all homepage variants
- Implemented as a `Button` with `variant="link"` styled as primary color
- Links to `/mutation-testing` page

## Homepage Variant Comparison

### Home (/) - Full-Featured Homepage
**Best for**: Comprehensive brand presentation with all features, industries, and pricing
- Hero section (full-screen video)
- What is Mutation Testing section (with learn more link)
- Benefits grid (4 cards)
- Industry Solutions (3 industry cards with details)
- Features section (6 feature cards)
- Company Story (team bios and mission)
- Testimonials
- Pricing plans
- CTA section
- Footer

### Home2 (/home2) - Streamlined Alternative
**Best for**: Testing different visual approaches; compares car-2.mov instead of car.mov
- Hero section (full-screen video, same as Home)
- What is Mutation Testing section
- Benefits grid
- Industry Solutions
- Features section
- Company Story
- Testimonials
- Pricing
- CTA section
- Footer
- **Difference**: Uses `/car-2.mov` video instead of `/car.mov` for automotive content

### Home3 (/home3) - Product-Focused Edition
**Best for**: Converting prospects with focused product messaging without overwhelming detail
- Hero section (full-screen video, same as Home)
- What is Mutation Testing section (with learn more link)
- **Product Benefits** (3 cards instead of features grid):
  - Save Developer Time
  - Release with Confidence
  - Refactor without Fear
- **Powerful Features** (6 condensed feature cards)
- Testimonials (same 2 quotes)
- **Focused CTA**: "Improve Your Feedback Loop Today"
- Simplified footer
- **Removed**: Industry Solutions section, Company Story, Pricing

## Key Implementation Details

### Hero Section Randomization
- Industry content is shuffled on each page load using `shuffleArray()` utility
- Uses `useMemo()` with empty dependency array to randomize once per session
- Current industry tracked in component state via `useState()`
- Auto-advance uses `setInterval()` that fires every 12 seconds

### Video Handling
- Videos use `poster` attribute for image fallback during loading
- `autoPlay`, `loop`, `muted`, `playsInline` attributes for seamless playback
- Text remains readable with 2px drop shadows (`drop-shadow-lg`)
- Gradient overlay (`from-black/60 via-black/30 to-transparent`) ensures text contrast

### Responsive Typography
- Question: `text-4xl lg:text-5xl` - scales up on larger screens
- Answer: `text-3xl lg:text-4xl` - proportionally smaller
- Maintains readability across mobile to desktop

## Important Notes

1. **Client-Side Routing**: The server serves `index.html` for all non-static routes to enable wouter's client-side routing.
2. **Build Output**: The build process creates:
   - `dist/public/` - Vite client build (served by Express)
   - `dist/index.js` - Bundled Express server
3. **Port Configuration**: Dev server uses port 3000 with fallback to next available port if busy. Configure via `PORT` env var for production.
4. **Vite Config**: Uses JSX location plugin for better debugging and custom Manus runtime plugin.
5. **CSS Variables**: Theme colors are defined as CSS variables in `index.css` and should be updated there for consistent theming.
6. **Video Playback**: Videos autoplay, loop, are muted, and use poster images as placeholders while loading
7. **Responsive Design**: Hero section text sizes scale for mobile (text-4xl lg:text-5xl for questions)
8. **Error Boundaries**: Main App wraps Router in ErrorBoundary for better error handling
9. **Theme Provider**: ThemeProvider wraps app with default light theme

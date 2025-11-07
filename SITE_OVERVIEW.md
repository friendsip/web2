# ArcMutate Redesign - Site Overview & Functionality

**Last Updated:** November 2024

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Routes & Pages](#routes--pages)
4. [Key Features](#key-features)
5. [Component System](#component-system)
6. [Build & Deployment](#build--deployment)
7. [Styling & Theming](#styling--theming)
8. [Development Workflow](#development-workflow)
9. [Environment Configuration](#environment-configuration)
10. [Recent Changes](#recent-changes)

---

## Project Overview

**Project Name:** arcmutate-redesign
**Version:** 1.0.0
**Type:** Full-stack marketing website
**Purpose:** Showcase ArcMutate - an enterprise mutation testing platform for software quality assurance

### Tech Stack

**Frontend:**
- React 18.3.1 with TypeScript
- Vite 7.1.7 (build tool & dev server)
- Tailwind CSS v4 (utility-first CSS framework)
- shadcn/ui (component library with Radix UI)

**Backend:**
- Express 4.21.2 (traditional Node.js deployment)
- Vercel Serverless Functions (modern deployment)
- TypeScript for full-stack type safety

**Supporting Libraries:**
- wouter 3.3.5 (lightweight client-side routing)
- framer-motion 12.23.22 (animations)
- recharts 2.15.2 (charts & visualizations)
- sonner 2.0.7 (toast notifications)
- react-hook-form 7.64.0 (form management)
- zod 4.1.12 (schema validation)
- TanStack React Query 4.41.0 (data fetching)

**Package Manager:** pnpm 10.4.1+ (required)

---

## Architecture

### Directory Structure

```
arc2/
├── client/                          # React frontend (Vite)
│   ├── public/                      # Static assets
│   │   ├── *.mov                    # Industry hero videos
│   │   ├── *.jpg, *.png            # Background images & logos
│   │   └── favicon.ico, favicon.png
│   └── src/
│       ├── App.tsx                  # Root component with routing
│       ├── main.tsx                 # React DOM entry point
│       ├── index.css                # Global Tailwind CSS + theme variables
│       ├── const.ts                 # Client constants
│       ├── pages/                   # Route components (8 pages)
│       ├── components/              # Reusable UI components
│       ├── contexts/                # React Context providers
│       ├── hooks/                   # Custom React hooks
│       └── lib/                     # Utility functions
│
├── server/                          # Express backend
│   └── index.ts                     # Single Express server file
│
├── api/                             # Vercel serverless handler
│   └── index.ts                     # Vercel function for static + routing
│
├── shared/                          # Shared code between client & server
│   └── const.ts                     # Shared constants
│
├── dist/                            # Build output (generated)
│   ├── public/                      # Vite client build
│   │   ├── index.html
│   │   └── assets/                  # JS/CSS bundles
│   └── index.js                     # Bundled Express server (ESM)
│
└── Configuration Files
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── vercel.json                  # Vercel deployment config
    ├── components.json              # shadcn/ui config
    ├── .prettierrc                  # Code formatter config
    └── CLAUDE.md                    # Development guidance
```

### Project Philosophy

**Monorepo Structure:**
- Clear separation between client, server, and shared code
- Single TypeScript configuration for the entire project
- Unified build process with Vite (client) + esbuild (server)

**Dual Deployment:**
- **Express Server:** Traditional Node.js for self-hosted deployments (`pnpm start`)
- **Vercel Serverless:** Modern deployment using `/api` handler for edge computing

---

## Routes & Pages

### Page Components Summary

| Route | Component | Type | Purpose | Lines |
|-------|-----------|------|---------|-------|
| `/` | Home.tsx | Page | Main homepage - comprehensive feature showcase | 28,769 |
| `/home2` | Home2.tsx | Page | Alternative homepage variant (car-2.mov video) | 33,616 |
| `/home3` | Home3.tsx | Page | Product-focused homepage (streamlined) | 19,218 |
| `/mutation-testing` | MutationTesting.tsx | Page | Educational content about mutation testing | 14,305 |
| `/bank` | Bank.tsx | Page | Financial services industry details | 2,962 |
| `/health` | Health.tsx | Page | Pharmaceutical & medical industry details | 3,960 |
| `/car` | Car.tsx | Page | Automotive industry details | 3,496 |
| `/404` | NotFound.tsx | Page | 404 error page | 1,756 |

**Total Content Code:** 2,633+ lines of JSX

---

## Key Features

### 1. Hero Section with Rotating Industries

**Functionality:**
- Full-screen video background with dark gradient overlay
- Rotates through 3 industries: Automotive, Financial Services, Pharmaceutical
- Auto-advances every 12 seconds
- Manual navigation via indicator dots
- Responsive text overlay with drop shadows for readability

**Technical Implementation:**
- Industries shuffled on page load using Fisher-Yates algorithm
- `useState()` tracks current industry index
- `setInterval()` handles auto-advance (12-second interval)
- Videos: `autoPlay`, `loop`, `muted`, `playsInline` for seamless playback
- Poster images provide fallback during loading
- Gradient overlay: `from-black/60 via-black/30 to-transparent`

**Video Assets:**
- `car.mov` / `car.jpg` - Automotive industry
- `car-2.mov` / `car.jpg` - Alternative automotive (used in Home2)
- `bank.mov` / `bank.jpg` - Financial services
- `health.mov` / `health.jpg` - Pharmaceutical & medical

### 2. Homepage Variants (A/B Testing)

#### Home (/) - Full-Featured Homepage
**Best for:** Comprehensive brand presentation
**Sections:**
- Hero (full-screen video)
- What is Mutation Testing (with "Learn More" link)
- Benefits grid (4 cards)
- Industry Solutions (3 industry cards)
- Features section (6 feature cards)
- Company Story (team bios + mission)
- Testimonials (customer quotes)
- Pricing plans
- Call-to-action section
- Footer

#### Home2 (/home2) - Variant Testing
**Best for:** Testing alternative visual approaches
**Differences from Home:**
- Uses `/car-2.mov` instead of `/car.mov` for automotive content
- Otherwise identical to Home
- Useful for A/B testing video impact

#### Home3 (/home3) - Product-Focused Edition
**Best for:** Converting prospects with streamlined messaging
**Key Differences:**
- **Removed:** Industry Solutions, Company Story, Pricing sections
- **Replaced:** Features grid with "Product Benefits" (3 cards):
  - Save Developer Time
  - Release with Confidence
  - Refactor without Fear
- Condensed feature cards (6 features)
- Direct CTA: "Improve Your Feedback Loop Today"
- Simplified footer

### 3. Industry-Specific Pages

#### Bank.tsx (/bank)
**Content Type:** Financial services industry overview
**Sections:**
- Back navigation button
- Hero: "Banking Security at Scale"
- Key Challenges (regulatory compliance, risk management)
- How ArcMutate Helps
- Stress Testing Analogy (banking industry comparison)

#### Health.tsx (/health)
**Content Type:** Pharmaceutical & medical focus
**Sections:**
- Back navigation button
- Hero: "Medical Software Quality"
- Key Challenges (regulatory requirements, patient safety)
- How ArcMutate Helps
- Manufacturing Quality Control Analogy

#### Car.tsx (/car)
**Content Type:** Automotive industry focus
**Sections:**
- Back navigation button
- Hero: "Automotive Safety Standards (ISO 26262)"
- Key Challenges (safety-critical software, compliance)
- How ArcMutate Helps
- Safety Testing Analogy

**Navigation:** "More info" buttons on homepage route to these pages:
- "More info on car safety" → `/car`
- "More info on bank security" → `/bank`
- "More info on medical" → `/health`

### 4. Educational Content

#### MutationTesting.tsx (/mutation-testing)
**Purpose:** Explain mutation testing concept to non-technical audiences
**Sections:**
1. **Definition** - What mutation testing is
2. **How It Works** - 4-step process explanation
3. **Key Concepts** - Killed mutants, surviving mutants, mutation score
4. **Benefits** - 4 key advantages
5. **Real-World Example** - Banking use case walkthrough
6. **Myth Busting** - 3 common misconceptions debunked
7. **Getting Started** - Call-to-action for ArcMutate
8. **Navigation** - Back to home button

**Link Integration:**
- "Learn more about mutation testing →" button appears after hero on all homepage variants
- Styled with `variant="link"` in primary color
- Navigates to `/mutation-testing`

### 5. Responsive Design

**Viewport Breakpoints:**
- Mobile: < 768px
- Desktop: ≥ 768px

**Hero Typography:**
- Question text: `text-4xl` on mobile, `text-5xl` on desktop
- Answer text: `text-3xl` on mobile, `text-4xl` on desktop

**Component Responsiveness:**
- Grid layouts adapt (1-2-3 columns based on viewport)
- Navigation collapses on mobile
- Video hero scales to fill screen on all devices

---

## Component System

### Custom Components

#### ErrorBoundary.tsx (62 lines)
- **Type:** Class component error boundary
- **Purpose:** Catch React rendering errors
- **UI:** Shows error stack trace with reload button
- **Icon:** AlertTriangle from lucide-react

#### ManusDialog.tsx
- **Type:** Custom dialog wrapper
- **Purpose:** Consistent dialog styling across app

### UI Component Library

**shadcn/ui Components (55+ pre-built):**

**Layout & Structure:**
- Accordion, Card, Collapsible, Drawer, Sheet, Sidebar

**Forms & Inputs:**
- Button, Checkbox, Input, Label, RadioGroup, Select, Switch, Textarea

**Data Display:**
- Badge, Table, Pagination, Progress, Skeleton, Avatar

**Overlays & Popups:**
- AlertDialog, Dialog, HoverCard, Popover, Tooltip

**Navigation:**
- Breadcrumb, Command, Menubar, NavigationMenu

**Content:**
- Alert, Calendar, Carousel, Tabs, AspectRatio, Carousel

**Advanced:**
- Form (with react-hook-form integration)
- Charts (with recharts)
- ScrollArea, Resizable

**Adding New Components:**
```bash
npx shadcn-ui@latest add [component-name]
```

Components auto-install to `client/src/components/ui/` with proper styling.

### Context Providers

#### ThemeContext.tsx
- **Purpose:** Light/dark theme management
- **Provider:** `ThemeProvider` wrapper component
- **Hook:** `useTheme()` for accessing theme state
- **Features:**
  - localStorage persistence when enabled
  - Optional theme switching capability
  - Default: light theme
  - CSS class toggle on document root element

**Usage:**
```typescript
const { theme, setTheme } = useTheme();
// Switch theme: setTheme('dark') or setTheme('light')
```

### Custom Hooks

#### useTheme() (from ThemeContext)
Returns `{ theme, setTheme }`
Manages light/dark mode

#### useMobile.tsx (22 lines)
- **Purpose:** Mobile device detection
- **Implementation:** Uses `matchMedia()` API
- **Returns:** `boolean` true if viewport < 768px
- **Use Case:** Responsive UI logic

#### useComposition.ts
- **Purpose:** Composition API compatibility helper
- **Size:** 2,333 bytes

#### usePersistFn.ts
- **Purpose:** Memoize functions across renders
- **Size:** 470 bytes

### Utilities

#### lib/utils.ts
```typescript
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
- **Purpose:** Combine Tailwind classes with conflict resolution
- **Dependencies:** clsx, tailwind-merge
- **Use Case:** Conditional class merging in components

#### Constants

**Shared (shared/const.ts):**
```typescript
COOKIE_NAME = "app_session_id"
ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365
```

**Client (client/src/const.ts):**
```typescript
APP_TITLE = import.meta.env.VITE_APP_TITLE
APP_LOGO = import.meta.env.VITE_APP_LOGO
getLoginUrl() → OAuth portal integration URL
```

---

## Build & Deployment

### Development

**Start Dev Server:**
```bash
pnpm dev
```
- Starts Vite dev server with hot module replacement (HMR)
- Port: 3000 (fallback to next available if busy)
- Auto-refresh on file changes

**Type Checking:**
```bash
pnpm check
```
- Runs TypeScript compiler in no-emit mode
- Validates types without generating output

### Production Build

**Build Command:**
```bash
pnpm build
```

**Build Process:**
1. **Vite Client:** Compiles `client/src/` to `dist/public/`
   - Bundles JavaScript/TypeScript
   - Optimizes CSS with Tailwind
   - Generates HTML with asset references
   - Output includes `index.html` and `/assets/` folder

2. **esbuild Server:** Bundles `server/index.ts` to `dist/index.js`
   - Format: ESM (ES Modules)
   - External packages: Not bundled (node_modules)
   - Platform: Node.js

**Generated Output:**
```
dist/
├── public/               # Static client files
│   ├── index.html       # Entry HTML
│   ├── assets/          # JS/CSS bundles
│   ├── *.mov, *.jpg     # Media assets
│   └── favicon.ico
└── index.js             # Bundled Express server
```

### Deployment Options

#### Option 1: Traditional Node.js (Express)

**Start Server:**
```bash
pnpm start
```

**Process:**
1. Runs compiled `dist/index.js`
2. Serves static files from `dist/public/`
3. Fallback: All non-static routes serve `index.html`
4. Port: `PORT` env var (default: 3000)

**Environment:**
- Self-hosted (VPS, Docker, Kubernetes)
- Traditional Node.js hosting
- Full server control

#### Option 2: Vercel Serverless (Recommended)

**Configuration (vercel.json):**
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/public",
  "installCommand": "pnpm install --frozen-lockfile",
  "rewrites": [{
    "source": "/(.*)",
    "destination": "/api"
  }]
}
```

**Deployment Flow:**
1. Static files: `dist/public/` deployed to CDN
2. Dynamic requests: Routed to `/api` serverless function
3. Handler: `api/index.ts` processes requests
4. Auto-scaling: No server management needed

**Handler (api/index.ts):**
- Serves static files from `/dist/public` (path-traversal protection)
- Falls back to `index.html` for client-side routing
- MIME type detection with `mime-types` library
- Responds with appropriate `Content-Type` headers

**Deployment to Vercel:**
```bash
vercel deploy
# or connect GitHub for auto-deployment
```

---

## Styling & Theming

### CSS Framework: Tailwind CSS v4

**Configuration:**
- Custom color palette with CSS variables
- Responsive design utilities
- Built-in dark mode support
- Animation utilities with tailwindcss-animate

**Global Styles (client/src/index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Color palette - CSS variables */
  --primary: ...
  --secondary: ...
  --destructive: ...
  /* ... more theme variables ... */
}

[data-theme="dark"] {
  /* Dark mode color overrides */
}
```

### Theme System

**Light Mode (Default):**
- Bright background, dark text
- Primary colors: Blues, greens
- High contrast for readability

**Dark Mode:**
- Dark background, light text
- Primary colors: Adjusted for eye comfort
- CSS class `dark` applied to document root

**Theme Switching:**
```typescript
const { theme, setTheme } = useTheme();
setTheme('dark');   // Switch to dark
setTheme('light');  // Switch to light
```

**Persistence:**
- Stored in localStorage as `theme-preference`
- Persists across page reloads
- Optional (controlled by `ThemeProvider` props)

### shadcn/ui Configuration (components.json)

```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "baseColor": "neutral",
  "cssVariables": true,
  "aliases": {
    "@/components": "client/src/components",
    "@/lib": "client/src/lib",
    "@/hooks": "client/src/hooks",
    "@shared/*": "shared/*"
  }
}
```

### Responsive Typography

**Tailwind Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

**Homepage Typography Example:**
```html
<!-- Hero Question -->
<h1 class="text-4xl lg:text-5xl font-bold">
  Question text here
</h1>

<!-- Hero Answer -->
<p class="text-3xl lg:text-4xl text-gray-200">
  Answer text here
</p>
```

**Result:** Text scales up on larger screens while remaining readable on mobile.

---

## Development Workflow

### Package Manager: pnpm

**Why pnpm?**
- Fast: Optimized package installation
- Space-efficient: Shared package store
- Strict: Prevents phantom dependencies

**Version Required:** 10.4.1+

**Common Commands:**
```bash
pnpm install              # Install dependencies
pnpm install pkg-name     # Add new package
pnpm add -D pkg-name      # Add dev dependency
pnpm remove pkg-name      # Remove package
pnpm update               # Update packages
```

### NPM Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start Vite dev server (port 3000) |
| `pnpm build` | Build client + server for production |
| `pnpm start` | Run compiled Express server |
| `pnpm preview` | Preview Vite build output locally |
| `pnpm check` | Run TypeScript type checker |
| `pnpm format` | Format code with Prettier |

### Code Formatting

**Prettier Configuration (.prettierrc):**
- Consistent code formatting across project
- Run before committing

**Format All Files:**
```bash
pnpm format
```

### TypeScript Configuration

**tsconfig.json Key Settings:**
```json
{
  "compilerOptions": {
    "target": "ESNext",           // Use latest JavaScript
    "module": "ESNext",           // Output ESM
    "strict": true,               // Strict type checking
    "jsx": "preserve",            // React handles JSX
    "moduleResolution": "bundler",// Bundle-aware resolution
    "baseUrl": ".",
    "paths": {
      "@/*": ["./client/src/*"],     // Client alias
      "@shared/*": ["./shared/*"]    // Shared alias
    }
  },
  "include": ["client/src/**/*", "shared/**/*", "server/**/*"]
}
```

### Vite Configuration (vite.config.ts)

**Key Settings:**
- **Root:** `client/` directory
- **Dev Server Port:** 3000 (strictPort: false for fallback)
- **Output Directory:** `dist/public/`
- **Plugins:**
  - React plugin
  - Tailwind CSS plugin
  - JSX location plugin
  - Manus runtime plugin
- **Component Aliases:** `@/*`, `@shared/*`, `@assets/*`

**Dev Server Allowed Hosts:**
- Manus.local
- localhost

### Hot Module Replacement (HMR)

During development (`pnpm dev`):
- Edit React components → instant refresh
- Edit CSS → styles update without reload
- Edit TypeScript → type errors shown in console
- Perfect for rapid iteration

---

## Environment Configuration

### Environment Variables

**Location:** `.env` file (create from `.env.example`)

**Available Variables:**
```bash
# Application Metadata
VITE_APP_ID=                     # Unique application identifier
VITE_APP_TITLE=                  # App title in header/meta tags
VITE_APP_LOGO=                   # Logo image URL

# Analytics (optional)
VITE_ANALYTICS_ENDPOINT=         # Analytics service URL
VITE_ANALYTICS_WEBSITE_ID=       # Tracking ID

# OAuth (future use)
VITE_OAUTH_PORTAL_URL=          # OAuth provider portal
```

**Exposure Rules:**
- Variables prefixed with `VITE_` are exposed to browser at build time
- Accessible via `import.meta.env.VITE_*`
- Do NOT put secrets here (they're public in built code)
- Used in `client/src/const.ts`:
  ```typescript
  export const APP_TITLE = import.meta.env.VITE_APP_TITLE
  export const APP_LOGO = import.meta.env.VITE_APP_LOGO
  ```

### Shared Constants (shared/const.ts)

```typescript
export const COOKIE_NAME = "app_session_id"
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365
```

Used for session management and time calculations.

---

## Recent Changes

### Vercel Serverless Refactoring

**Commit:** a5cd490 - "Refactor Express server to Vercel serverless functions"

**Changes Made:**

1. **New Serverless Handler** (`api/index.ts`)
   - Replaces traditional Express routing on Vercel
   - Serves static files with path-traversal protection
   - Falls back to `index.html` for SPA routing
   - MIME type detection for correct `Content-Type` headers

2. **Updated vercel.json**
   ```json
   {
     "buildCommand": "pnpm build",
     "outputDirectory": "dist/public",
     "installCommand": "pnpm install --frozen-lockfile",
     "rewrites": [{
       "source": "/(.*)",
       "destination": "/api"
     }]
   }
   ```
   - Removed deprecated `nodeVersion` property
   - Added rewrites to route all requests to `/api` handler
   - Static files served from `dist/public` CDN

3. **Dual Deployment Support**
   - Express server: Still available in `server/index.ts` for self-hosted deployments
   - Vercel serverless: Modern deployment via `/api` function
   - Both serve the same built client files from `dist/public/`

**Benefits:**
- Auto-scaling on Vercel (no server management)
- Lower latency with CDN + edge computing
- Cost-efficient (pay per request)
- Keep Express option for flexibility

### Previous Commits

- **59d9e62** - with vercel build info
- **2a8a160** - added home3 and readme
- **a2a8517** - added home2 and home3 plus corrections
- **201dd9f** - first commit

---

## Public Assets

### Video Files

**Automotive Industry:**
- `car.mov` - Primary automotive video
- `car-2.mov` - Alternative automotive video (used in Home2)
- `car-1.mov` - Additional variant

**Financial Services:**
- `bank.mov` - Banking industry video
- `bank-1.mov` - Alternative banking video

**Pharmaceutical & Medical:**
- `health.mov` - Medical industry video
- `health-1.mov` - Alternative medical video

**Location:** `client/public/` (served at build time)

### Image Assets

**Industry Posters & Backgrounds:**
- `car.jpg` - Automotive poster image
- `car.png` - Automotive PNG variant
- `bank.jpg` - Financial services poster
- `health.png` - Medical industry poster
- `pharma-medical.png` - Pharmaceutical imagery

**Feature Images:**
- `operators.jpg`, `operators2.png` - Team/operations imagery
- `git-integration.png` - Git integration feature
- `canary.png` - Canary deployment visualization

**Technology Logos:**
- `kotlin_icon.png` - Kotlin language
- `logo-kotlin.svg` - Kotlin SVG version
- `maven-logo.svg` - Maven build tool
- `git_icon.png` - Git version control

**Favicon:**
- `favicon.ico` - Browser tab icon
- `favicon.png` - Fallback favicon

---

## Summary

**arcmutate-redesign** is a modern, production-ready marketing website showcasing enterprise mutation testing. It features:

✅ **Three homepage variants** for A/B testing different messaging
✅ **Full-screen video heroes** with rotating industry content
✅ **Educational pages** explaining mutation testing and industry use cases
✅ **Responsive design** that works on mobile to desktop
✅ **Dual deployment** (Express + Vercel serverless)
✅ **Modern tech stack** (React 18, Vite, TypeScript, Tailwind CSS v4)
✅ **Component library** (55+ shadcn/ui components)
✅ **Theme system** (light/dark mode)
✅ **Type-safe** (TypeScript strict mode)
✅ **SEO-friendly** (clean URLs, proper meta tags)

The codebase is clean, well-organized, and ready for development or deployment to production.

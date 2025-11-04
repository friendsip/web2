# ArcMutate

Enterprise mutation testing built on PiTest, bringing advanced mutation testing to professional teams.

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (v10.4.1+)

### Development

Start the development server:

```bash
pnpm dev
```

This starts the Vite dev server with hot reload on port 3000 (or the next available port if busy).

### Build

Build for production:

```bash
pnpm build
```

Builds both the Vite client and bundles the server with esbuild to `dist/`.

### Start Production Server

```bash
pnpm start
```

Runs the compiled server from `dist/index.js`.

### Type Checking

Check for TypeScript errors:

```bash
pnpm check
```

### Code Formatting

Format all code using Prettier:

```bash
pnpm format
```

## Project Structure

```
arc2/
├── client/              # React frontend (Vite + TypeScript)
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   ├── contexts/   # React contexts
│   │   ├── hooks/      # Custom hooks
│   │   ├── lib/        # Utilities
│   │   └── main.tsx    # Entry point
│   └── index.html      # HTML template
├── server/             # Express backend
│   └── index.ts        # Server entry point
├── shared/             # Shared types and constants
└── package.json        # Root package configuration
```

## Tech Stack

### Client
- React 18
- Vite 7 (build tool)
- TypeScript 5.6
- Tailwind CSS 4
- shadcn/ui (component library)
- wouter (client-side routing)

### Server
- Express 4
- Node.js with ESM

### Development Tools
- Prettier (code formatting)
- TypeScript (type checking)

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```
VITE_APP_ID=proj_abc123def456
VITE_APP_TITLE="ArcMutate"
VITE_APP_LOGO="https://your-logo-url.com/logo.png"
VITE_ANALYTICS_ENDPOINT=https://your-analytics-endpoint
VITE_ANALYTICS_WEBSITE_ID=your_analytics_id
```

## Key Pages

- `/` - Main homepage
- `/mutation-testing` - Educational page on mutation testing
- `/car` - Automotive industry page
- `/health` - Healthcare/pharmaceutical industry page
- `/bank` - Financial services industry page
- `/404` - 404 page

## Features

- **Full-screen video hero** with rotating industry content
- **Responsive design** with Tailwind CSS and shadcn/ui
- **Git integration** ready
- **Enterprise-grade features** (when using ArcMutate service)

## More Information

For detailed development guidance, see `CLAUDE.md`.

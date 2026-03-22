# AGENTS.md

## Cursor Cloud specific instructions

### Repository overview

This is a monorepo (`reg-product-v1`) with three service directories and a docs folder.

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js 15 frontend (App Router, TypeScript) |
| `workers/` | Background workers (placeholder, not yet scaffolded) |
| `supabase/` | Supabase backend (placeholder, not yet scaffolded) |
| `docs/` | Architecture and product documentation |

### App service (`app/`)

- **Package manager:** npm (lockfile: `app/package-lock.json`)
- **Framework:** Next.js 15 with App Router, React 19, TypeScript
- **Build output:** `standalone` mode (for Render / containerized deployment)
- **Source:** `app/src/app/` (layout, pages)

| Command | Working directory | Description |
|---------|-------------------|-------------|
| `npm run dev` | `app/` | Start dev server (port 3000) |
| `npm run build` | `app/` | Production build |
| `npm run start` | `app/` | Start production server |
| `npm run lint` | `app/` | Run ESLint via next lint |

### Caveats

- `next lint` prints a deprecation warning (will be removed in Next.js 16). It still works; no action needed now.
- TypeScript types (`@types/react`, `@types/node`) are auto-installed on first lint/build if missing, but are already in devDependencies.

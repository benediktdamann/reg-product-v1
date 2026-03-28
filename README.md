# reg-product-v1

Minimal operating structure for a regulatory product MVP monorepo.

## Current repository state

- `app/`: Next.js 15 frontend (App Router, TypeScript).
- `workers/orchestrator/`: Express service with `GET /health` and `POST /create-issue`.
- `supabase/`: Placeholder directory; backend assets not scaffolded yet.
- `docs/`: Project and workflow documentation (partially filled, partially placeholder).

## Current application state

- Home page renders a single "Regulatory Product MVP" heading.
- `/sources` page renders a static in-code table of three example sources.
- No authenticated flows, API routes in `app/`, or dynamic data persistence confirmed.

## Quick start

### Frontend app

1. `cd app`
2. `npm install`
3. `npm run dev`

### Repo validation

1. `npm install` (repo root)
2. `npm run validate`

## Known unknowns (to confirm)

- Production deployment pipeline details beyond documented Render post-merge note.
- Supabase schema, migrations, and environment configuration.
- End-to-end test coverage strategy and ownership.

## Operating documents

- `PRODUCT.md`
- `ARCHITECTURE.md`
- `ROADMAP.md`
- `TASKS.md`
- `docs/work-orders/template.md`
- `docs/qa-checklist.md`
- `docs/agent-rules.md`

# ARCHITECTURE

## Current topology

- `app/`: Next.js 15 web frontend (App Router).
- `workers/orchestrator/`: Node.js + Express worker service.
- `supabase/`: Reserved backend area (unknown/to be confirmed).
- `docs/`: Documentation and process artifacts.

## Implemented components

### Frontend (`app/`)

- Root page (`/`) renders a static heading.
- `sources` page (`/sources`) renders a static table from an in-file array.
- No dynamic API integration in the frontend is currently confirmed.

### Worker (`workers/orchestrator/`)

- `GET /health` returns `{ ok: true }`.
- `POST /create-issue` creates GitHub issues using environment variables:
  - `GITHUB_TOKEN`
  - `GITHUB_OWNER`
  - `GITHUB_REPO`
  - optional `PORT` (default `3001`)

### Backend (`supabase/`)

- No schema, migrations, or runtime services confirmed in-repo.

## Main architectural assumptions (explicit)

1. Frontend remains deployable as a standalone Next.js app.
2. Worker orchestration is an auxiliary operational service, not primary user-facing logic.
3. Supabase will eventually provide persistence and backend services, but implementation details are unknown.
4. Documentation-led work orders are the primary mechanism to manage implementation scope.

## Unknowns / to confirm

- Production runtime topology (single service vs multi-service deployment boundaries).
- Authentication and authorization architecture.
- Data model ownership (frontend, worker, or backend-first).
- Observability stack (logs, metrics, tracing) and incident workflow.

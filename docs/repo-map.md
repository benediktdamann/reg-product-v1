# Repository map

## Top-level layout

- `app/` - Next.js 15 frontend app (TypeScript, App Router).
- `workers/` - Background worker services (currently includes `orchestrator/`).
- `supabase/` - Supabase backend area (currently placeholder docs only).
- `docs/` - Product and architecture documentation.
- `.github/` - GitHub automation metadata (workflows).
- `work-orders/` - Two-layer workflow work orders (`open/` and `done/`).
- `scripts/` - Repo-level helper scripts (includes validation entrypoint).
- `AGENTS.md` - Cursor Cloud instructions for repository workflows and testing.
- `.cursor/rules/` - Cursor project and workspace rule definitions.

## Major parts and what they do

### `app/`

- User-facing web app.
- Entry pages:
  - `src/app/page.tsx` - landing page.
  - `src/app/sources/page.tsx` - sources table page.
- Runtime/build config:
  - `next.config.mjs` uses `output: "standalone"` for container-style deployment.
- Validation currently available:
  - `npm run lint`
  - `npm run build`

### `workers/`

- `workers/orchestrator/` is an Express service.
- Exposes:
  - `GET /health`
  - `POST /create-issue` (creates GitHub issues using env-configured repo and token).
- Uses env vars: `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`, `PORT`.

### `supabase/`

- Placeholder directory for Supabase project assets.
- No schema/migrations/functions/config are present yet.

### `docs/`

- Product and architecture documents exist but many files are currently placeholders.
- Includes `automation-workflow.md` describing GitHub-to-Cursor handoff steps.

## Deployment-related files

- `app/next.config.mjs` - Next.js standalone output (deployment-friendly build artifact mode).
- `app/package.json` scripts include `build` and `start`.
- No root-level Docker, Compose, CI, or deployment manifests found.
- No `render.yaml` file is present in the repository.

## Automation-related files

- `.github/workflows/dispatch-cursor-from-work-order-file.yml` watches `work-orders/open/*.md` updates on `main`, creates `[Work Order]` issues from file content, and posts the Cursor implementation handoff comment.
- `.cursor/rules/project-workflow.mdc` captures implementation guardrails for Cursor.

## Supabase-related files

- `supabase/README.md` exists (currently empty).
- No detected Supabase CLI/config files (`config.toml`, migrations, seed scripts, edge functions, SQL schema files).

## Render-related files

- No `render.yaml` or other Render-specific manifest found.
- Standalone Next.js output in `app/` suggests deployment intent, but Render wiring is not configured in-repo.

## Missing pieces / setup gaps

- No non-empty README coverage for `supabase/`, `workers/`, and most docs files.
- No centralized root validation script existed before this setup (now added via `scripts/validate.sh` + root `npm run validate`).
- No automated tests present for `app/` or `workers/orchestrator/`.
- No deployment manifests (Render/Docker/CI) detected.
- No Supabase project scaffolding yet (schema/migrations/functions/config).
- `work-orders/open/` and `work-orders/done/` are process scaffolding for file-based handoff and currently start empty.

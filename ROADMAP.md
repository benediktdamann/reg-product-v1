# ROADMAP

## Stage 0 - Current baseline (now)

- Minimal Next.js MVP shell is running.
- Static sources table exists.
- Worker orchestrator service exists with GitHub issue creation endpoint.
- Supabase area is not scaffolded.

## Stage 1 - Foundation hardening

- Define and confirm backend scaffolding in `supabase/`.
- Establish environment configuration standards per service.
- Add minimum automated checks for worker and app behavior.
- Confirm deployment path and required manifests.

## Stage 2 - Core product workflows

- Replace static source data with persisted backend-backed data.
- Define source ingestion and status lifecycle.
- Add basic user workflows (scope unknown, to be confirmed).

## Stage 3 - Operational maturity

- Add observability baselines (error logging, health signals, alerts).
- Add release checklists and rollback guidance.
- Formalize regression coverage for critical flows.

## Non-goals for current stage

- Broad feature expansion without validated backend/data model.
- Large refactors of existing logic without a specific work order.

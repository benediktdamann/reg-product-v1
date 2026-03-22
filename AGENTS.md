# AGENTS.md

## Cursor Cloud specific instructions

### Repository overview

This is a greenfield monorepo scaffold (`reg-product-v1`) with three intended service directories and a docs folder. As of the initial setup, **all files are empty placeholders**; there is no source code, configuration, or dependency manifests yet.

| Directory | Intended purpose |
|-----------|-----------------|
| `app/` | Frontend application (likely Next.js or similar) |
| `workers/` | Background workers (likely Cloudflare Workers or similar) |
| `supabase/` | Supabase backend (Postgres, Auth, Edge Functions) |
| `docs/` | Architecture and product documentation |

### Tooling available in the VM

- **Node.js** v22 (via nvm)
- **pnpm** v10 (global install via nvm)
- **npm** v10, **npx** v10
- **git** v2.43

### Development environment status

No `package.json` or dependency manifests exist yet, so there is nothing to install, build, lint, or test. Once code is scaffolded:

- Prefer `pnpm` as the package manager (already available).
- Run `pnpm install` from the workspace root (or per-package) after a `package.json` is added.
- Supabase local development will likely require `supabase` CLI (`npx supabase`) and Docker.
- Workers development may require `wrangler` CLI.

### Lint / Test / Build / Run

No commands are available yet. When they are added, check `package.json` `scripts` for standard commands (`dev`, `build`, `lint`, `test`).

# Agent Rules for Future Coding Tasks

## Core execution rules

1. Keep changes small and scoped to the approved work order.
2. State explicit assumptions when information is missing.
3. List all affected files in the implementation summary or PR.
4. Preserve existing behavior unless a change is explicitly requested.
5. Update related documentation after implementation.

## Change discipline

- Avoid broad refactors unless explicitly requested.
- Do not add or remove features outside task scope.
- Prefer minimal diffs that are easy to review and revert.

## Verification discipline

- Run relevant validation checks for changed areas.
- Report pass/fail clearly, including any environment limitations.
- If something is unverified, mark it as unknown or pending confirmation.

## Documentation discipline

- Keep docs concise, factual, and current.
- Do not invent system behavior that is not implemented.
- Capture follow-up work in `TASKS.md` when discovered.

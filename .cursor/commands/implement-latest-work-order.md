Implement the latest approved work order from `work-orders/open/` using this exact flow:

1. Identify and open the newest file in `work-orders/open/`.
2. Implement exactly the scope defined by that work order (no extra features).
3. Keep code changes minimal and avoid unrelated refactors.
4. If repository structure changed, update `docs/repo-map.md`.
5. Run available validation/tests for impacted areas (or the repo-level validation command if applicable).
6. Summarize changed files and what each change does.
7. Propose a commit message.
8. Show the diff before finalizing.
9. Stop before push unless explicitly asked.

Safety constraints:

- Never store secrets in the repository.
- If no open work order exists, stop and report that no implementation can proceed.

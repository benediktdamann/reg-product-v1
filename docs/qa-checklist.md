# QA Checklist (Lightweight)

Use this checklist before merging a feature or fix.

## 1) Feature validation

- [ ] Change matches the work-order scope.
- [ ] Primary happy path works as expected.
- [ ] Relevant edge cases are checked (or marked unknown).

## 2) Regression risk

- [ ] Existing behavior remains unchanged unless explicitly requested.
- [ ] Affected files and dependent flows were reviewed for side effects.
- [ ] Known risks are documented in PR or work-order completion notes.

## 3) Build and checks

- [ ] Relevant lint/test/build commands pass.
- [ ] Any skipped checks are explained with reason.

## 4) Deployment readiness

- [ ] Required environment variables/config updates are documented.
- [ ] No secrets are committed.
- [ ] Rollback approach is defined for risky changes.

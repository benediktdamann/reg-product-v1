# Automation workflow

This repository uses a file-based GitHub-to-Cursor handoff flow for implementation work.

1. ChatGPT discusses ideas with the user.
2. After explicit user approval, ChatGPT writes a work-order markdown file in `work-orders/open/`.
3. A GitHub Action triggers on push to `main` when `work-orders/open/*.md` files are added or changed.
4. The Action creates a GitHub issue from the work-order file body and prefixes the issue title with `[Work Order]`.
5. The Action immediately comments on that issue with `@cursor` implementation instructions.
6. Cursor implements the issue, creates a branch, and opens a pull request.
7. A human reviews and merges the pull request.
8. Render deploys only after merge.

No manual GitHub issue creation is part of the active flow, and no approval label is used.

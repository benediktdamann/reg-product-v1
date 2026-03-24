# Automation workflow

This repository uses a GitHub-to-Cursor handoff flow for implementation work.

1. ChatGPT is used for idea discussion and drafting work-order content.
2. A GitHub issue is used as the handoff artifact.
3. Creating a new issue with the title prefix `[Work Order]` acts as approval and triggers automation.
4. Cursor performs implementation and opens a pull request.
5. A human reviews the pull request and merges it.
6. Render deployment happens only after merge.

No approval label is used in this workflow.

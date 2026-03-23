# Orchestrator

## Required env vars
- GITHUB_TOKEN
- GITHUB_OWNER
- GITHUB_REPO
- PORT

## Run locally
npm install
npm start

## Test
POST /create-issue
Body:
{
  "title": "Test issue",
  "body": "Created by orchestrator",
  "labels": ["product"]
}

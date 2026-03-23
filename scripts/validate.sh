#!/usr/bin/env bash
set -euo pipefail

echo "==> Repo validation: app lint"
npm --prefix app run lint

echo "==> Repo validation: app build"
npm --prefix app run build

echo "==> Validation complete"

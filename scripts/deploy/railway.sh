#!/usr/bin/env bash
set -euo pipefail

app="${1:?Usage: railway.sh <investments|help-center|settings> [environment]}"
environment="${2:-production}"

case "$app" in
  investments)
    source_dir="apps/investments"
    project_id="${RAILWAY_INVESTMENTS_PROJECT_ID:-}"
    service_id="${RAILWAY_INVESTMENTS_SERVICE_ID:-}"
    ;;
  help-center)
    source_dir="apps/help-center"
    project_id="${RAILWAY_HELP_CENTER_PROJECT_ID:-}"
    service_id="${RAILWAY_HELP_CENTER_SERVICE_ID:-}"
    ;;
  settings)
    source_dir="apps/settings"
    project_id="${RAILWAY_SETTINGS_PROJECT_ID:-}"
    service_id="${RAILWAY_SETTINGS_SERVICE_ID:-}"
    ;;
  *)
    printf 'Unknown app: %s. Use investments, help-center or settings.\n' "$app" >&2
    exit 2
    ;;
esac

: "${RAILWAY_TOKEN:?RAILWAY_TOKEN is required}"
: "${project_id:?Project ID secret is required for $app}"
: "${service_id:?Service ID secret is required for $app}"

printf 'Deploying %s from %s to Railway environment %s\n' "$app" "$source_dir" "$environment"

exec npx --yes @railway/cli@5.41.2 up "$source_dir" \
  --path-as-root \
  --ci \
  --project "$project_id" \
  --service "$service_id" \
  --environment "$environment" \
  --message "${app} deployment from ${GITHUB_SHA:-local}"

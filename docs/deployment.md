# Deploys via GitHub Actions → Make → Railway

Each app has an independent workflow. The workflow validates its own app, then invokes the same Make target used locally. Provider-specific behavior stays in `scripts/deploy/railway.sh`.

## Required GitHub Actions secrets

- `RAILWAY_TOKEN`
- `RAILWAY_INVESTMENTS_PROJECT_ID`
- `RAILWAY_INVESTMENTS_SERVICE_ID`
- `RAILWAY_HELP_CENTER_PROJECT_ID`
- `RAILWAY_HELP_CENTER_SERVICE_ID`

The IDs must refer to the already-created Railway projects/services. The workflow deploys to the Railway environment named `production`.

## Commands

```txt
make deploy APP=investments
make deploy APP=help-center
```

For a local deploy, export the same relevant Railway variables first. Never commit these values.

## Release ownership

- `.github/workflows/ci-investments-web.yml` owns validation and deployment of Investments.
- `.github/workflows/ci-help-center-web.yml` owns validation and deployment of Help Center.
- `scripts/deploy/railway.sh` is the Railway-specific adapter.

Before enabling this flow, disable Railway's direct GitHub auto-deploy for these services. Otherwise one push can create two deployments: Railway's native GitHub deployment and the Action-driven deployment.

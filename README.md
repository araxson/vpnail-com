This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

Run `npm run build` and `npm run start` locally to smoke test.

### One‑click Vercel Provisioning (Automated)

This repo includes a workflow to create/link the Vercel project, set env vars, and add your domain automatically via the Vercel API.

1. In GitHub → Settings → Secrets and variables → Actions → Secrets, add:
   - `VERCEL_TOKEN` (Vercel Personal Token)
   - `VERCEL_TEAM_ID` (optional, for team scope)
   - `GTM_ID` = `GTM-PPQ6WBNQ`
   - `GSC_TOKEN` = `ui2QmsBUe9UxFkSEGhEoVgoy_V2K-qRywpR7hLEMZko`
2. Go to Actions → "Provision Vercel" → Run workflow
   - `project_name`: `vpnail-ca` (default)
   - `domain`: `vpnail.com` (default)
3. Ensure the Vercel GitHub App is installed and has access to `araxson/vpnail.ca`.
4. On push to `main`, Vercel will auto‑deploy and attach the domain.

Alternatively, you can run the provisioning script locally:

```
export VERCEL_TOKEN=...          # required
export VERCEL_TEAM_ID=team_...   # optional
export VERCEL_PROJECT_NAME=vpnail-ca
export VERCEL_DOMAIN=vpnail.com
export GH_REPO=araxson/vpnail.ca
export GTM_ID=GTM-PPQ6WBNQ
export GSC_TOKEN=ui2QmsBUe9UxFkSEGhEoVgoy_V2K-qRywpR7hLEMZko
node scripts/provision-vercel.mjs
```

# Carpintería Artesanal Hermanos Peláez — Corporate Website

Production corporate website for a local carpentry business, live at **[hermanospelaez.com](https://hermanospelaez.com/)**.


![Carpintería Artesanal Hermanos Peláez — Desktop Preview](./docs/preview.png)

## Context & Architectural Decisions

This project migrated the company's web presence from **WordPress** to a **Static Site Generation (SSG)** architecture to meet a tight delivery schedule, eliminate CMS and backend maintenance overhead, and prioritize performance and technical SEO.

- **Zero-backend static showcase:** As an informational showcase for a local SME that requires no authentication or dynamic transactions, backend infrastructure was intentionally omitted. Customer inquiries are handled directly via **WhatsApp** and **`mailto:`** links.
- **JSON-driven catalog:** Showcase entries (asset paths and descriptions) are decoupled into a local JSON data source, keeping occasional client updates simple and version-controlled without a CMS.
- **Full static prerendering (SSG):** All routes are prerendered at build time with Nuxt and served through Cloudflare.
- **Privacy-first analytics (GDPR):** Configured with `nuxt-gtag` and **Google Consent Mode v2**, defaulting storage and analytics signals to `denied` until explicit user consent is granted.
- **Unstyled UI architecture:** Uses **PrimeVue 5** in `unstyled` mode alongside **Tailwind CSS** for full styling control.

## Tech Stack

- **Framework:** Nuxt 4 · Vue 3 · Vue Router 5
- **Language:** TypeScript (strict mode + `nuxi typecheck` / `vue-tsc`)
- **UI & Styling:** Tailwind CSS · PrimeVue 5 (`unstyled: true`)
- **SEO & Analytics:** `@nuxtjs/sitemap`, `robots.txt`, `nuxt-gtag` (Consent Mode v2)
- **Deployment:** Static output (`nuxt generate`) served by Cloudflare Workers (static assets)

## Auditoría

Estado inicial del repositorio y hallazgos priorizados: [`docs/audit.md`](./docs/audit.md). Mediciones Lighthouse previas: [`docs/lighthouse/before/`](./docs/lighthouse/before/README.md).

## Local Development

### Setup

```bash
git clone https://github.com/v-pelaez/hnospelaez.git
cd hnospelaez
npm install
```

### Environment Variables

Optional `.env` file in the project root to enable Google Analytics locally:

```env
NUXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX
```

### Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the local development server |
| `npm run typecheck` | Run TypeScript type checking (`nuxi typecheck`) |
| `npm run lint` | Run ESLint |
| `npm run format:check` | Check Prettier formatting (`npm run format` to fix) |
| `npm run check` | Run lint, format check and typecheck |
| `npm run generate` | Generate the static site for production |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |

## Deployment

**CI:** [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) runs `npm run check` and `npm run generate` (Node 22) on every pull request and on pushes to `main` and `dev`. It is only a quality gate and never deploys; deployment is handled by Cloudflare's Git integration.

The site is deployed on **Cloudflare Workers with static assets**, using Cloudflare's Git integration (Worker/project `hnospelaez`, custom domain `hermanospelaez.com`). The configuration is versioned in [`wrangler.jsonc`](./wrangler.jsonc).

- Push to `main` → Cloudflare builds (`npm run generate`) and publishes to production.
- Push to any other branch → Cloudflare builds a preview deployment.
- Build output directory: `.output/public`.
- Optional local validation (no login needed): `npm run generate && npx wrangler deploy --dry-run`.
- Observability: `observability` is intentionally not enabled in `wrangler.jsonc`. This is a static-assets-only Worker with no code, so asset requests do not invoke the Worker and Workers Logs/traces would capture nothing useful. Use Workers Metrics in the dashboard and Cloudflare Web Analytics instead (see D4 in [`docs/audit.md`](./docs/audit.md)).

**Needs owner:** confirm in the Cloudflare dashboard (Workers & Pages → `hnospelaez` → Settings → Build) that the build command is `npm run generate` and the output directory is `.output/public`, and that hermanospelaez.com keeps being served after this change.

### Security headers and canonical domain

Security and cache headers live in [`public/_headers`](./public/_headers) (CSP, HSTS, nosniff, referrer, permissions, immutable cache for `/_nuxt/*`). The canonical domain is the apex `https://hermanospelaez.com`; `www` must redirect to it.

**Needs owner:** create a Cloudflare Redirect Rule `www.hermanospelaez.com/*` → `https://hermanospelaez.com/${1}` (301, preserve query string), with the `www` DNS record proxied. Details in [`docs/audit.md`](./docs/audit.md).

### Hosting history

WordPress → GitHub Pages (GitHub Actions workflow, now removed, together with the `CNAME` file) → Cloudflare Workers (current).

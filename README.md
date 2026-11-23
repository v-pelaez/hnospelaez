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
- **Deployment:** Static output (`nuxt generate`) hosted on Cloudflare

## Local Development

### Setup

```bash
git clone [https://github.com/v-pelaez/hnospelaez.git](https://github.com/v-pelaez/hnospelaez.git)
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

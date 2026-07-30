# Hermanos Peláez - Corporate Website 🚀

**[🌐 View Live Project](https://hermanospelaez.com)**

## Overview

A modern, high-performance corporate web application designed to establish a strong digital presence. The architecture prioritizes ultra-fast loading times, automated technical SEO, and strict adherence to European data protection regulations (GDPR).

## Technical Stack

- **Framework:** Nuxt 3 (SSG) / Vue.js
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **UI Library:** PrimeVue
- **Analytics:** Google Analytics 4
- **Infrastructure:** Cloudflare Pages (Automated CI/CD)

## Technical Highlights

- **Privacy-First Analytics:** Engineered a custom integration with GA4 using Consent Mode v2. It ensures strict cookie blocking by default while leveraging cookieless pings for unconsented traffic to maintain accurate behavioral modeling.
- **Automated SEO:** Implemented dynamic XML sitemap generation and strict search engine directives (robots.txt) directly within the build process.
- **Type Safety:** Enforced robust data typing and strict interfaces across the application using TypeScript, eliminating runtime errors and ensuring high maintainability.
- **Server-Side Generation:** Deployed using Nuxt's SSG capabilities to serve highly optimized static assets globally via Cloudflare's edge network.
To build the application locally for production:
npm run build

Important Note: Production deployment is automatically handled via Cloudflare Pages upon merging into the 'main' branch. Repository secrets are isolated; therefore, environment variables (such as NUXT_PUBLIC_GTAG_ID) must be explicitly declared within the Cloudflare Pages Dashboard.

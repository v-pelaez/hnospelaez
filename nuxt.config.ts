// Configuración base de Nuxt para generar el sitio estático (SSG)
export default defineNuxtConfig({

  // // Ajuste temporal para ver la web en la URL de GitHub
  // app: {
  //   baseURL: '/hnospelaez/' // IMPORTANTE
  // },

  // Establezco la fecha de compatibilidad para evitar cambios abruptos en futuras actualizaciones
  compatibilityDate: "2026-07-29",

  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@primevue/nuxt-module", "nuxt-gtag", "@nuxtjs/sitemap",'@nuxtjs/sitemap'],

  // Dominio canónico (apex); lo usa @nuxtjs/sitemap
  site: {
    url: "https://hermanospelaez.com",
  },

  // Páginas legales con noindex: fuera del sitemap
  sitemap: {
    exclude: ["/aviso-legal", "/cookies", "/politica-privacidad"],
  },

  primevue: {
    options: {
      unstyled: true,
    },
  },

  // Fuerzo el modo de pre-renderizado para todas las rutas para garantizar el mejor SEO
  routeRules: {
    "/**": { prerender: true },
  },

  // typeCheck se mantiene en false en dev para no bloquear Vite; el chequeo se hace con `npm run typecheck` (y `npm run check`)
  // Mantengo TypeScript estricto, pero delego el chequeo en tiempo real para evitar bloqueos del servidor Vite
  typescript: {
    strict: true,
    typeCheck: false,
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID || "",
    // No cargar gtag.js hasta que el usuario acepte (lo hace useCookieConsent)
    initMode: "manual",
    initCommands: [
      [
        "consent",
        "default",
        {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied",
          wait_for_update: 500,
        },
      ],
    ],
  },
  // nitro: { preset: "github-pages" },

  devtools: { enabled: false },
});
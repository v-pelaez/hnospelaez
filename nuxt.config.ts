// Configuración base de Nuxt para generar el sitio estático (SSG)
export default defineNuxtConfig({

  

  // Establezco la fecha de compatibilidad para evitar cambios abruptos en futuras actualizaciones
  compatibilityDate: "2026-07-29",

  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "nuxt-gtag", "@nuxtjs/sitemap",'@nuxtjs/sitemap'],

  primevue: {
    options: {
      unstyled: true,
    },
  },

  // Fuerzo el modo de pre-renderizado para todas las rutas para garantizar el mejor SEO
  routeRules: {
    "/**": { prerender: true },
  },

  // Mantengo TypeScript estricto, pero delego el chequeo en tiempo real para evitar bloqueos del servidor Vite
  typescript: {
    strict: true,
    typeCheck: false,
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID || "",
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
  nitro: { preset: "github-pages" },

  devtools: { enabled: false },
});
// Configuración base de Nuxt para generar el sitio estático (SSG) de mi carpintería
export default defineNuxtConfig({
  // Establezco la fecha de compatibilidad para evitar cambios abruptos en futuras actualizaciones
  compatibilityDate: '2026-07-29',

  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module'
  ],

  // Configuro PrimeVue para utilizar el sistema de temas moderno y evitar conflictos de CSS
  primevue: {
    options: {
      unstyled: true
    }
  },

  // Fuerzo el modo de pre-renderizado para todas las rutas para garantizar el mejor SEO
  routeRules: {
    '/**': { prerender: true }
  },

  // Mantengo TypeScript estricto, pero delego el chequeo en tiempo real para evitar bloqueos del servidor Vite
  typescript: {
    strict: true,
    typeCheck: false 
  },

  devtools: { enabled: true }
})
declare module '@nuxt/schema' {
  interface NuxtConfig {
    gtag?: {
      id: string;
      initialConsent?: boolean;
      config?: Record<string, string | number | boolean>;
    }
  }
}

// Exportamos un objeto vacío para asegurar que TypeScript lo trate como un módulo externo
export {}
<template>
  <!-- 
    Cambio el fondo a neutral-950 (casi negro), el texto base a neutral-200 (gris claro para no fatigar la vista) 
    y aumento el tamaño base de la fuente usando text-lg o antialiased para mayor nitidez.
  -->
  <div
    class="min-h-screen bg-neutral-950 font-sans text-neutral-200 text-lg antialiased flex flex-col relative"
  >
    <TheHeader />

    <main class="flex-grow">
      <NuxtPage />
    </main>

    <TheFooter />

    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
import { useHead } from "#imports";

// Definicion de los datos estructurados para Google (LocalBusiness)
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hnos. Peláez Carpinteria Artesanal",
  image: "https://www.hermanospelaez.com/images/hero-bg.webp",
  "@id": "https://www.hermanospelaez.com",
  url: "https://www.hermanospelaez.com",
  telephone: "+34635518659",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Juan de la Plaza 1",
    addressLocality: "Huelva",
    postalCode: "21007",
    addressRegion: "Andalucía",
    addressCountry: "ES",
  },
};

// Inyeccion de metadatos y schema en el head del documento
useHead({
  title: "Hnos. Peláez | Ebanistería y Carpintería en Huelva",
  meta: [
    {
      name: "description",
      content:
        "Carpintería artesanal en Huelva. Diseñamos y fabricamos muebles a medida, locales comerciales y proyectos de ebanistería con maderas nobles y técnicas tradicionales.",
    },
    {
      name: "geo.region",
      content: "ES-H",
    },
    {
      name: "geo.placename",
      content: "Huelva",
    },
  ],
  htmlAttrs: {
    lang: "es",
  },
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(businessSchema),
    },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Kill-switch PrimeUI */
div[style*="z-index: 99999"],
div[style*="z-index: 2147483647"] {
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
}
</style>

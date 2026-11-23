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
import { useHead, useSeoMeta } from "#imports";

// Datos estructurados para Google (LocalBusiness). Dirección y teléfono idénticos
// al aviso legal y a ContactSection; horario tomado de ContactSection.
// Pendiente del dueño (no constan en el código, no se inventan): sameAs (redes), geo, priceRange.
const SITE_URL = "https://hermanospelaez.com";
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Hnos. Peláez Carpintería Artesanal",
  legalName: "Carpinteria Artesanal Hermanos Peláez S.L.",
  description:
    "Carpintería artesanal en Huelva. Muebles a medida, locales comerciales y ebanistería con maderas nobles.",
  image: `${SITE_URL}/images/seoimage.webp`,
  url: `${SITE_URL}/`,
  telephone: "+34635518659",
  email: "carpinteriahermanospelaez@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Juan de la Plaza 1, 3º B",
    addressLocality: "Huelva",
    postalCode: "21007",
    addressRegion: "Andalucía",
    addressCountry: "ES",
  },
  areaServed: { "@type": "City", name: "Huelva" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

// Metadatos globales; title/description/canonical/og:title/og:url los define cada página (usePageSeo)
useHead({
  htmlAttrs: { lang: "es" },
  meta: [
    { name: "geo.region", content: "ES-H" },
    { name: "geo.placename", content: "Huelva" },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(businessSchema),
    },
  ],
});

useSeoMeta({
  ogSiteName: "Hnos. Peláez",
  ogLocale: "es_ES",
  ogType: "website",
  ogImage: `${SITE_URL}/images/seoimage.webp`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Hnos. Peláez, carpintería artesanal en Huelva",
  twitterCard: "summary_large_image",
  twitterImage: `${SITE_URL}/images/seoimage.webp`,
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

<template>
  <!-- 
    Cambio el fondo a neutral-950 (casi negro), el texto base a neutral-200 (gris claro para no fatigar la vista) 
    y aumento el tamaño base de la fuente usando text-lg o antialiased para mayor nitidez.
  -->
  <div class="min-h-screen bg-neutral-950 font-sans text-neutral-200 text-lg antialiased flex flex-col relative">
    <TheHeader />
    
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <TheFooter />
    
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
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
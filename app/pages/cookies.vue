<template>
  <div class="container mx-auto px-4 py-32 max-w-4xl min-h-[70vh]">
    <!-- Botón de retorno al inicio -->
    <div class="mb-10">
      <NuxtLink 
        to="/" 
        class="inline-flex items-center text-neutral-400 hover:text-white transition-colors text-lg font-medium group"
      >
        <span class="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
        Volver al inicio
      </NuxtLink>
    </div>
    <h1 class="text-5xl font-bold text-white mb-12 tracking-tight">
      Política de Cookies
    </h1>
    
    <div class="text-neutral-300 text-lg leading-relaxed space-y-10">
      <section>
        <h2 class="text-2xl font-bold text-white mb-4">1. ¿Qué son las cookies?</h2>
        <p>
          Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-4">2. ¿Qué tipos de cookies utiliza esta web?</h2>
        <ul class="list-disc pl-6 space-y-4 mt-4 text-neutral-400">
          <li><strong class="text-neutral-200">Cookies técnicas:</strong> Son aquellas necesarias para el correcto funcionamiento de la página web.</li>
          <li><strong class="text-neutral-200">Cookies de análisis (Google Analytics):</strong> Son aquellas que, tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-4">3. Revocación y eliminación de cookies</h2>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador. Alternativamente, puedes gestionar tus preferencias a través del panel de configuración de cookies habilitado en este sitio web.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
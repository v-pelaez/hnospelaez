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
    <h1 class="text-5xl font-bold text-white mb-12 tracking-tight">Política de Cookies</h1>

    <div class="text-neutral-300 text-lg leading-relaxed space-y-10">
      <section>
        <h2 class="text-2xl font-bold text-white mb-4">1. ¿Qué son las cookies?</h2>
        <p>
          Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas
          web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar
          información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de
          la información que contengan y de la forma en que utilice su equipo, pueden utilizarse
          para reconocer al usuario.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-4">
          2. ¿Qué tipos de cookies utiliza esta web?
        </h2>
        <ul class="list-disc pl-6 space-y-4 mt-4 text-neutral-400">
          <li>
            <strong class="text-neutral-200">Cookies técnicas:</strong> Son aquellas necesarias para
            el correcto funcionamiento de la página web. Esta web no instala cookies técnicas
            propias; guarda su elección de cookies en el almacenamiento local del navegador (clave
            <code>hnos_pelaez_cookie_consent</code>).
          </li>
          <li>
            <strong class="text-neutral-200"
              >Cookies de análisis (Google Analytics 4, Google LLC):</strong
            >
            Solo se cargan si las acepta. Nos permiten cuantificar el número de usuarios y realizar
            la medición y análisis estadístico del uso de la web. Cookies habituales:
            <code>_ga</code> y <code>_ga_&lt;ID&gt;</code> (2 años). Solo se concede el permiso
            <code>analytics_storage</code>.
          </li>
        </ul>
        <p class="mt-4">
          Esta web no utiliza cookies publicitarias ni de personalización: los permisos
          <code>ad_storage</code>, <code>ad_user_data</code> y
          <code>ad_personalization</code> permanecen siempre denegados.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-4">3. Revocación y eliminación de cookies</h2>
        <p>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la
          configuración de las opciones del navegador instalado en tu ordenador. Además, puedes
          cambiar o retirar tu consentimiento en cualquier momento con el botón siguiente (o desde
          el enlace "Configurar cookies" del pie de página).
        </p>
        <p class="mt-4 text-neutral-400">
          Estado actual:
          <strong class="text-neutral-200">{{
            choice === "accepted"
              ? "cookies analíticas aceptadas"
              : choice === "rejected"
                ? "cookies analíticas rechazadas"
                : "sin elección"
          }}</strong>
        </p>
        <button
          type="button"
          class="mt-4 px-6 py-2.5 rounded-lg bg-white text-neutral-900 font-bold hover:bg-neutral-200 transition-colors text-sm"
          @click="openSettings"
        >
          Configurar cookies
        </button>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: "Política de Cookies | Hnos. Peláez",
  description:
    "Información sobre las cookies técnicas y analíticas que utiliza hermanospelaez.com y cómo gestionarlas.",
  path: "/cookies",
  noindex: true,
});

const { choice, openSettings } = useCookieConsent();
</script>

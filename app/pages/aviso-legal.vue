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
    <!-- Titulo principal en blanco puro -->
    <h1 class="text-5xl font-bold text-white mb-12 tracking-tight">
      Aviso Legal
    </h1>
    
    <!-- Contenedor semantico con texto gris claro y tipografia grande -->
    <div class="text-neutral-300 text-lg leading-relaxed space-y-10">
      <section>
        <h2 class="text-2xl font-bold text-white mb-4">1. Datos Identificativos</h2>
        <p class="mb-4">
          En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), los datos identificativos de la empresa son los siguientes:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-neutral-400">
          <li><strong class="text-neutral-200">Denominación social:</strong> Hnos. Peláez S.L. [Reemplazar]</li>
          <li><strong class="text-neutral-200">CIF/NIF:</strong> B-XXXXXXXX [Reemplazar]</li>
          <li><strong class="text-neutral-200">Domicilio social:</strong> Calle del Artesano 12, Madrid [Reemplazar]</li>
          <li><strong class="text-neutral-200">Correo electrónico:</strong> carpinteriahermanospelaez@gmail.com</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-4">2. Propiedad Intelectual e Industrial</h2>
        <p>
          Los derechos de propiedad intelectual de la página web, su código fuente, diseño, estructuras de navegación y los distintos elementos en ella contenidos son titularidad de Hnos. Peláez, a quien corresponde el ejercicio exclusivo de los derechos de explotación de los mismos en cualquier forma.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-4">3. Exclusión de Responsabilidad</h2>
        <p>
          Hnos. Peláez no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
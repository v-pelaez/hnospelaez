<template>
  <!-- Usamos bg-neutral-900 para contrastar ligeramente con el 950 del Portfolio -->
  <section id="about" class="py-24 bg-neutral-900">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-white mb-10 tracking-tight">
          Nuestra Filosofía
        </h2>
        
        <!-- Textos más grandes (text-xl) y legibles (leading-relaxed) -->
        <div class="text-xl text-neutral-300 space-y-8 leading-relaxed mb-16 text-center">
          <p>
            En Hnos. Peláez no fabricamos muebles; creamos piezas con alma. Llevamos más de dos décadas trabajando con arquitectos, interioristas y clientes particulares que buscan la excelencia en cada veta de la madera.
          </p>
          <p>
            Nuestro taller combina la ebanistería tradicional a mano con la precisión de la maquinaria contemporánea, asegurando acabados impecables y estructuras construidas para durar toda la vida.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Tarjetas oscuras con bordes sutiles -->
          <div class="bg-neutral-950 p-8 rounded-xl shadow-lg border border-neutral-800 text-center">
            <h3 class="text-2xl font-bold text-white mb-4">Tradición</h3>
            <p class="text-neutral-400 text-lg">Técnicas de ensamblaje clásicas que garantizan la máxima resistencia estructural.</p>
          </div>
          <div class="bg-neutral-950 p-8 rounded-xl shadow-lg border border-neutral-800 text-center">
            <h3 class="text-2xl font-bold text-white mb-4">Materiales</h3>
            <p class="text-neutral-400 text-lg">Selección rigurosa de maderas nobles de origen sostenible y certificado.</p>
          </div>
          <div class="bg-neutral-950 p-8 rounded-xl shadow-lg border border-neutral-800 text-center">
            <h3 class="text-2xl font-bold text-white mb-4">A Medida</h3>
            <p class="text-neutral-400 text-lg">Cada proyecto se dibuja, prototipa y construye de forma totalmente exclusiva.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
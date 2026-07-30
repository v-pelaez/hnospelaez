<template>
  <section class="relative pt-24 pb-32 flex items-center min-h-[80vh] border-b border-neutral-900">
    
    <div class="absolute inset-0 z-0 bg-neutral-900 overflow-hidden">
      <!-- 
        Aplicamos un degradado vertical que aumenta su opacidad en la zona central e inferior 
        para maximizar el contraste de los textos sin perder el contexto visual superior.
      -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black/95 z-10"></div>
      <img 
        src="/images/hero-bg.webp" 
        alt="Trabajos de carpintería y ebanistería a medida" 
        class="absolute inset-0 w-full h-full object-cover z-0"
        fetchpriority="high"
      />
    </div>

    <div class="container mx-auto px-4 z-20 relative text-center max-w-5xl mt-12">
      
      <div class="mb-8">
        <img 
          src="/images/logo.svg" 
          alt="Hnos. Peláez Logo" 
          class="h-72 w-auto mx-auto block" 
        />
      </div>

      <h1 class="text-3xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-md">
        Carpintería a medida y ebanistería de autor
      </h1>
      
      
      <p class="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
        Desde soluciones funcionales para su hogar o negocio hasta piezas únicas de madera noble. Fabricación e instalación directa desde nuestro taller en <strong>Huelva</strong>.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-6">
        <a href="#portfolio" class=" bg-white text-neutral-950 font-bold px-10 py-4 rounded-full text-xl hover:bg-neutral-200 transition-colors shadow-lg">
          Ver trabajos
        </a>
        <a href="#contact" class=" bg-[#F3A328] text-neutral-950 font-bold px-10 py-4 rounded-full text-xl hover:bg-[#FFBD17] transition-colors shadow-lg">
          Hablar con el taller
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Componente estructural, sin dependencias reactivas
</script>
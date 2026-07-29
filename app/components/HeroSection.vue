<template>
  <section class="relative pt-24 pb-32 flex items-center min-h-[80vh] border-b border-neutral-900">
    
    <div class="absolute inset-0 z-0 bg-neutral-900 overflow-hidden">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <img 
        src="../../images/hero-bg.webp" 
        alt="Trabajo de ebanistería a medida" 
        class="absolute inset-0 w-full h-full object-cover z-0"
        fetchpriority="high"
      />
    </div>

    <div class="container mx-auto px-4 z-20 relative text-center max-w-5xl mt-12">
      
      <div class="mb-8">
        <img 
          src="../../images/logo.svg" 
          alt="Hnos. Peláez Logo" 
          class="h-72 w-auto mx-auto" 
        />
      </div>

      <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
        Ebanistería de autor para espacios únicos
      </h1>
      
      <p class="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed">
        Tradición, precisión y maderas nobles. Transformamos tus ideas en piezas que perduran generaciones.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-6">
        <a href="#portfolio" class="bg-white text-neutral-950 font-bold px-10 py-4 rounded-full text-xl hover:bg-neutral-200 transition-colors shadow-lg">
          Ver trabajos
        </a>
        <a href="#contact" class="bg-transparent border border-white text-white font-bold px-10 py-4 rounded-full text-xl hover:bg-white/10 transition-colors">
          Hablar con el taller
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
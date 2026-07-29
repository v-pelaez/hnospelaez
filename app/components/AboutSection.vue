<template>
  <section id="about" class="py-24 bg-neutral-900 border-t border-neutral-800">
    <div class="container mx-auto px-4 max-w-7xl">
      
      <h2 class="text-4xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight">
        Nuestra Filosofía
      </h2>

      <!-- Contenedor superior: Textos historicos + Collage fotografico rectificado -->
      <div class="flex flex-col lg:flex-row gap-16 items-center mb-20">
        
        <!-- Columna izquierda: Copy optimizado con herencia familiar -->
        <div class="lg:w-1/2 text-xl text-neutral-300 space-y-8 leading-relaxed">
          <p>
            En Hnos. Peláez no fabricamos muebles; creamos piezas con alma. Como empresa familiar fundada en 1983 por nuestro padre, llevamos décadas trabajando con arquitectos, interioristas y clientes que buscan la excelencia en cada veta de la madera.
          </p>
          <p>
            Nuestro taller combina la herencia de la ebanistería tradicional a mano con la precisión de la maquinaria contemporánea, asegurando acabados impecables y estructuras construidas para durar generaciones.
          </p>
        </div>

        <!-- Columna derecha: Grid asimetrico con la foto del fundador -->
        <div class="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
          
    
          <div class="space-y-4 mt-8 lg:mt-12">
  <div class="space-y-4 mt-8 lg:mt-12">
  <!-- Tarjeta con imagen del fundador y overlay de texto -->
  <div class="relative group overflow-hidden rounded-sm shadow-lg border border-neutral-800">
    <img 
      src="/images/alfonsoPelaez.jpg" 
      alt="Alfonso Peláez, fundador de la ebanistería" 
      class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
    />
    
    <!-- Degradado más contenido -->
    <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
    
    <!-- Texto que separa la identidad del fundador de la fecha de la foto -->
    <div class="absolute bottom-0 left-0 p-6">
      <p class="text-white font-bold text-2xl tracking-tight">Alfonso Peláez</p>
      <p class="text-neutral-300 text-sm uppercase tracking-[0.2em] mt-1">Fundador, 2005</p>
    </div>
  </div>
</div>
</div>
          
          <!-- Segunda columna: Imagenes del taller actual para equilibrar -->
          <div class="space-y-4">
            <img 
              src="/images/taller-3.jpg" 
              alt="Maderas nobles en el taller" 
              class="w-full h-48 object-cover rounded-sm shadow-lg border border-neutral-800" 
            />
            <img 
              src="/images/taller-4.jpg" 
              alt="Ensamblaje final a medida" 
              class="w-full h-64 object-cover rounded-sm shadow-lg border border-neutral-800" 
            />
          </div>
        </div>
      </div>

      <!-- Contenedor inferior: Tarjetas de valor -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="feature in workshopFeatures" 
          :key="feature.id" 
          class="bg-neutral-950 p-8 rounded-sm shadow-lg border border-neutral-800 text-center hover:border-neutral-700 transition-colors"
        >
          <h3 class="text-2xl font-bold text-white mb-4">{{ feature.title }}</h3>
          <p class="text-neutral-400 text-lg">{{ feature.description }}</p>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Interfaz estricta para definir la estructura de las tarjetas de filosofia
interface WorkshopFeature {
  id: string;
  title: string;
  description: string;
}

// Inicializacion de las caracteristicas del taller
const workshopFeatures = ref<WorkshopFeature[]>([
  {
    id: 'tradition',
    title: 'Tradición',
    description: 'Técnicas de ensamblaje clásicas que garantizan la máxima resistencia estructural.'
  },
  {
    id: 'materials',
    title: 'Materiales',
    description: 'Selección rigurosa de maderas nobles de origen sostenible y certificado.'
  },
  {
    id: 'custom',
    title: 'A Medida',
    description: 'Cada proyecto se dibuja, prototipa y construye de forma totalmente exclusiva.'
  }
]);
</script>
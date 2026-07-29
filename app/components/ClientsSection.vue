<template>
  <section id="clients" class="py-24 bg-neutral-950 overflow-hidden">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-white mb-16 tracking-tight">
        Empresas que confían en nosotros
      </h2>
      
      <div class="relative flex overflow-hidden mask-edges">
        <div class="flex gap-8 w-max animate-marquee hover:pause-animation">
          <!-- Bucle 1: Contenido original -->
          <div 
            v-for="client in trustedClients" 
            :key="'first-' + client.id"
            class="w-56 flex-shrink-0 flex items-center justify-center p-8 border border-neutral-800 rounded-xl bg-neutral-900 aspect-[3/2] grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img 
              :src="client.logoUrl" 
              :alt="client.name" 
              class="max-w-full max-h-full object-contain  opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>

          <!-- Bucle 2: Contenido duplicado para crear el loop infinito -->
          <div 
            v-for="client in trustedClients" 
            :key="'second-' + client.id"
            class="w-56 flex-shrink-0 flex items-center justify-center p-8 border border-neutral-800 rounded-xl bg-neutral-900 aspect-[3/2] grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img 
              :src="client.logoUrl" 
              :alt="client.name" 
              class="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { trustedClients } from '~/data/clients';
</script>

<style scoped>
.mask-edges {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.pause-animation {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Ajuste fino: calcula el desplazamiento basado en la mitad de los elementos */
    transform: translateX(calc(-50% - 1rem));
  }
}
</style>
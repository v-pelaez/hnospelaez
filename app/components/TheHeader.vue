<template>
  <header class="fixed w-full top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 transition-all duration-300">
    <div class="container mx-auto px-4 h-24 flex items-center justify-between">
      
      <NuxtLink to="/" class="text-3xl font-bold text-white tracking-widest uppercase">
        Hnos. Peláez
      </NuxtLink>

      <!-- Utilizamos NuxtLink para que maneje correctamente las rutas + anclas (hashes) -->
      <nav class="hidden md:flex gap-10 text-xl font-medium text-neutral-400">
        <NuxtLink to="/#portfolio" class="hover:text-white transition-colors">Trabajos</NuxtLink>
        <NuxtLink to="/#about" class="hover:text-white transition-colors">El Taller</NuxtLink>
        <NuxtLink to="/#clients" class="hover:text-white transition-colors">Clientes</NuxtLink>
        <NuxtLink to="/#contact" class="hover:text-white transition-colors">Contacto</NuxtLink>
      </nav>

      <button class="md:hidden text-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

    </div>
  </header>
</template>

<script setup lang="ts">
</script>
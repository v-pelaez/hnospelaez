<template>
  <footer class="bg-neutral-900 text-neutral-400 py-8 border-t border-neutral-800">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
      <div class="text-sm">
        &copy; {{ currentYear }} Hnos. Peláez. Todos los derechos reservados.
      </div>
      
      <nav>
        <ul class="flex space-x-6 text-sm">
          <li>
            <NuxtLink to="/aviso-legal" class="hover:text-white transition-colors">Aviso Legal</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/politica-privacidad" class="hover:text-white transition-colors">Política de Privacidad</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/cookies" class="hover:text-white transition-colors">Cookies</NuxtLink>
          </li>
        </ul>
      </nav>
      
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Calculo el año actual dinamicamente para que el copyright nunca quede desactualizado
const currentYear = computed(() => new Date().getFullYear());
</script>
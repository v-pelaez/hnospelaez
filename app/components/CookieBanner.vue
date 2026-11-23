<template>
  <Transition name="fade">
    <div 
      v-if="isBannerVisible" 
      role="dialog"
      aria-label="Preferencias de cookies"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-neutral-900 text-white shadow-2xl border-t border-neutral-800"
    >
      <div class="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div class="text-sm text-neutral-300 flex-1 leading-relaxed">
          <p>
            Utilizamos cookies técnicas y, solo si usted lo acepta, cookies analíticas de terceros (Google Analytics) para medir el uso de la web. No utilizamos cookies publicitarias. 
            Puede obtener más información en nuestra 
            <NuxtLink to="/cookies" class="text-white underline hover:text-gray-200 transition-colors">
              Política de Cookies
            </NuxtLink>.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
          <button 
            @click="reject" 
            class="px-6 py-2.5 rounded-lg bg-white text-neutral-900 font-bold hover:bg-neutral-200 transition-colors text-sm"
          >
            Rechazar
          </button>
          
          <button 
            @click="accept" 
            class="px-6 py-2.5 rounded-lg bg-white text-neutral-900 font-bold hover:bg-neutral-200 transition-colors text-sm"
          >
            Aceptar
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// La logica de consentimiento vive en el composable useCookieConsent
const { isBannerVisible, init, accept, reject } = useCookieConsent();

onMounted(() => {
  init();
});
</script>

<style scoped>
/* Transicion suave para la aparicion y desaparicion del banner */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
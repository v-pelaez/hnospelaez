<template>
  <Transition name="fade">
    <div 
      v-if="isBannerVisible" 
      class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-neutral-900 text-white shadow-2xl border-t border-neutral-800"
    >
      <div class="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div class="text-sm text-neutral-300 flex-1 leading-relaxed">
          <p>
            Utilizamos cookies propias y de terceros (Google Analytics) para fines analíticos y para mostrarle publicidad personalizada en base a un perfil elaborado a partir de sus hábitos de navegación. 
            Puede obtener más información en nuestra 
            <NuxtLink to="/cookies" class="text-white underline hover:text-gray-200 transition-colors">
              Política de Cookies
            </NuxtLink>.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
          <!-- Boton para rechazar: aspecto secundario para no destacar sobre la aceptacion -->
          <button 
            @click="rejectCookies" 
            class="px-6 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 font-medium hover:bg-neutral-800 transition-colors text-sm"
          >
            Rechazar
          </button>
          
          <!-- Boton para aceptar: aspecto primario para incentivar el click -->
          <button 
            @click="acceptCookies" 
            class="px-6 py-2.5 rounded-lg bg-white text-neutral-900 font-bold hover:bg-neutral-200 transition-colors text-sm"
          >
            Aceptar todas
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Defino una constante estricta para la clave del LocalStorage para evitar errores tipograficos
const COOKIE_CONSENT_KEY = 'hnos_pelaez_cookie_consent';

const isBannerVisible = ref<boolean>(false);

// Metodo para comprobar si ya existe una eleccion previa almacenada en el navegador
const checkConsent = (): void => {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!consent) {
    isBannerVisible.value = true;
  }
};

// Metodo ejecutado al aceptar: oculta el banner y guarda la confirmacion
const acceptCookies = (): void => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
  isBannerVisible.value = false;
  // TODO: Aqui inicializaremos la etiqueta de Google Analytics en la siguiente fase
};

// Metodo ejecutado al rechazar: oculta el banner y guarda la denegacion
const rejectCookies = (): void => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
  isBannerVisible.value = false;
};

// Verifico el estado una vez que el componente se ha montado en el cliente (navegador)
onMounted(() => {
  checkConsent();
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
<template>
  <section id="contact" class="py-24 bg-neutral-900 border-t border-neutral-800">
    <div class="container mx-auto px-4 text-center max-w-5xl">
      <h2 class="text-5xl font-bold text-white mb-8 tracking-tight">
        Hablemos de su proyecto
      </h2>
      <p class="text-xl text-neutral-300 mb-16 leading-relaxed max-w-2xl mx-auto">
        Cuéntenos su idea o solicite presupuesto sin compromiso. Tratamos cada proyecto con la misma atención y precisión con la que trabajamos la madera.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
        
        <!-- Card de Contacto -->
        <div class="bg-neutral-950 p-8 rounded-2xl shadow-lg border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-center gap-8">
          
          <!-- Telefono -->
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-neutral-400">
              <!-- Icono de Telefono -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-neutral-500 font-medium mb-1">Teléfono</p>
              <p class="text-xl text-white font-medium tracking-wide">{{ formattedPhone }}</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-neutral-400">
              <!-- Icono de Correo -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            
            <!-- Aplico min-w-0 para que el flexbox respete el truncate -->
            <div class="flex-1 min-w-0">
              <p class="text-sm text-neutral-500 font-medium mb-1">Email</p>
              <p class="text-lg text-white font-medium truncate" :title="emailAddress">
                {{ emailAddress }}
              </p>
            </div>
            
            <!-- Boton de accion minimalista con iconos dinámicos -->
            <button 
              @click="copyEmailToClipboard"
              :title="isEmailCopied ? '¡Copiado!' : 'Copiar al portapapeles'"
              :class="[
                'p-3 rounded-xl transition-colors flex-shrink-0 border',
                isEmailCopied 
                  ? 'bg-green-900/30 text-green-400 border-green-800' 
                  : 'bg-neutral-900 text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-white'
              ]"
            >
              <!-- Icono de Copiar -->
              <svg v-if="!isEmailCopied" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
              </svg>
              <!-- Icono de Check -->
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Card de Horario -->
        <div class="bg-neutral-950 p-8 rounded-2xl shadow-lg border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-center gap-8">
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-neutral-400">
              <!-- Icono de Reloj -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-neutral-500 font-medium mb-1">Horario de atención</p>
              <p class="text-xl text-white font-medium">Lunes - Viernes</p>
              <p class="text-neutral-400 mt-1">08:00 - 18:00</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Ajusto el boton de WhatsApp para usar los mismos estilos y un verde mas formal -->
      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-3 bg-[#25D366] text-neutral-950 px-10 py-5 rounded-full font-bold text-xl hover:bg-[#20b858] transition-colors shadow-lg shadow-green-900/20 transform hover:-translate-y-1"
      >
        <svg viewBox="0 0 24 24" class="w-7 h-7 fill-current">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.666.598 1.236.784 1.41.87.174.086.275.072.376-.043l.417-.505c.116-.145.232-.116.39-.058.159.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
        </svg>
        Contactar por WhatsApp
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// Mantengo la variable raw para la URL, y creo una formateada para la vista
const rawPhone: string = '34635518659';
const formattedPhone: string = '+34 635 51 86 59';
const emailAddress: string = 'carpinteriahermanospelaez@gmail.com';
const defaultMessage: string = 'Hola, me gustaría solicitar información sobre un proyecto de carpintería.';

const isEmailCopied = ref<boolean>(false);

// Genero la URL para la API de WhatsApp de forma reactiva
const whatsappLink = computed<string>(() => {
  const encodedMessage = encodeURIComponent(defaultMessage);
  return `https://wa.me/${rawPhone}?text=${encodedMessage}`;
});

// Metodo asincrono para interactuar con la API del portapapeles
const copyEmailToClipboard = async (): Promise<void> => {
  try {
    await navigator.clipboard.writeText(emailAddress);
    
    isEmailCopied.value = true;
    
    setTimeout(() => {
      isEmailCopied.value = false;
    }, 2500);
    
  } catch (error: unknown) {
    console.error('Error copying email to clipboard:', error);
  }
};
</script>
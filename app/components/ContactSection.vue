<template>
  <section id="contact" class="py-24 bg-neutral-900 border-t border-neutral-800">
    <div class="container mx-auto px-4 text-center max-w-4xl">
      <h2 class="text-5xl font-bold text-white mb-8 tracking-tight">
        Hablemos de su proyecto
      </h2>
      <p class="text-xl text-neutral-300 mb-16 leading-relaxed max-w-2xl mx-auto">
        Cuéntenos su idea o solicite presupuesto sin compromiso. Tratamos cada proyecto con la misma atención y precisión con la que trabajamos la madera.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
        <!-- Tarjetas informativas en modo oscuro -->
        <div class="bg-neutral-950 p-10 rounded-2xl shadow-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
          <h3 class="text-2xl font-bold text-white mb-6">Información</h3>
          <ul class="space-y-4 text-neutral-400 text-lg">
            <li><strong class="text-neutral-200">Teléfono:</strong> +34 635 51 86 59</li>
            <li><strong class="text-neutral-200">Email:</strong> carpinteriahermanospelaez@gmail.com</li>
          </ul>
        </div>
        
        <div class="bg-neutral-950 p-10 rounded-2xl shadow-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
          <h3 class="text-2xl font-bold text-white mb-6">Horario</h3>
          <ul class="space-y-4 text-neutral-400 text-lg">
            <li><strong class="text-neutral-200">Lunes - Viernes:</strong> 08:00 - 18:00</li>
          </ul>
        </div>
      </div>

      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-500 transition-colors shadow-lg shadow-green-900/50 hover:shadow-green-900/80 transform hover:-translate-y-1"
      >
        Contactar por WhatsApp
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const phoneNumber = '+34635518659';
const defaultMessage = 'Hola, me gustaría solicitar información sobre un proyecto de carpintería.';

// Generacion de la URL para la API de WhatsApp
const whatsappLink = computed<string>(() => {
  const encodedMessage = encodeURIComponent(defaultMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
});
</script>
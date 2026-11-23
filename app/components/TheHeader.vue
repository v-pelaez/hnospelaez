<template>
  <!-- Cabecera principal -->
  <header
    class="fixed w-full top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 transition-all duration-300"
  >
    <div class="container mx-auto px-4 h-24 flex items-center justify-between">
      <!-- Enlace al inicio y logo -->
      <NuxtLink
        to="/"
        class="relative z-50 flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F3A328] focus-visible:outline-offset-4"
      >
        <img
          src="/images/logohorizontal.svg"
          alt="Hnos. Peláez Logo"
          width="656"
          height="156"
          class="h-12 w-auto"
        />
      </NuxtLink>

      <!-- Navegacion de Escritorio -->
      <nav class="hidden md:flex gap-10 text-lg font-medium text-neutral-400 items-center h-full">
        <!-- <div 
          class="relative group h-full flex items-center" 
          @mouseenter="isDropdownOpen = true" 
          @mouseleave="isDropdownOpen = false"
        >
          <NuxtLink to="/#portfolio" class="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
            Trabajos
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 transition-transform duration-300" 
              :class="{ 'rotate-180': isDropdownOpen }" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </NuxtLink>

          <div
            v-show="isDropdownOpen"
            class="absolute top-full left-0 w-64 bg-neutral-950 border border-t-0 border-neutral-900 rounded-b-md shadow-2xl overflow-hidden transition-opacity duration-300"
          >
            <NuxtLink to="/?category=all#portfolio" class="block px-6 py-4 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors">Todos los trabajos</NuxtLink>
            <NuxtLink to="/?category=custom_furniture#portfolio" class="block px-6 py-4 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors">Muebles a Medida</NuxtLink>
            <NuxtLink to="/?category=commercial#portfolio" class="block px-6 py-4 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors">Locales Comerciales</NuxtLink>
            <NuxtLink to="/?category=restoration#portfolio" class="block px-6 py-4 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors">Restauración</NuxtLink>
            <NuxtLink to="/?category=special_projects#portfolio" class="block px-6 py-4 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors">Proyectos Especiales</NuxtLink>
          </div>
        </div> -->

        <NuxtLink to="/#about" class="hover:text-white transition-colors">El Taller</NuxtLink>
        <NuxtLink to="/#clients" class="hover:text-white transition-colors">Clientes</NuxtLink>
        <NuxtLink to="/#contact" class="hover:text-white transition-colors">Contacto</NuxtLink>
      </nav>

      <!-- Boton hamburguesa para Movil (Solo se muestra cuando esta cerrado) -->
      <button
        class="md:hidden text-neutral-300 hover:text-white p-2 relative z-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F3A328] transition-colors"
        ref="openButton"
        aria-label="Abrir Menu"
        aria-haspopup="dialog"
        :aria-expanded="isMobileMenuOpen"
        @click="openMobileMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </header>

  <!-- Usamos Teleport para renderizar la capa en el <body> y evitar bloqueos de CSS -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        class="fixed inset-0 bg-neutral-950/95 backdrop-blur-xl z-50 md:hidden flex flex-col pt-32 px-8"
        @keydown.esc="closeMobileMenu"
      >
        <!-- Boton de cierre de la navegacion movil -->
        <button
          ref="closeButton"
          class="absolute top-8 right-6 text-neutral-300 hover:text-white p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F3A328] transition-colors"
          aria-label="Cerrar Menu"
          @click="closeMobileMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav class="flex flex-col gap-8 text-2xl font-medium text-neutral-300 mt-4">
          <!-- <NuxtLink to="/#portfolio" @click="closeMobileMenu" class="hover:text-white transition-colors border-b border-neutral-800 pb-4">Trabajos</NuxtLink> -->
          <NuxtLink
            to="/#about"
            class="hover:text-white transition-colors border-b border-neutral-800 pb-4"
            @click="closeMobileMenu"
            >El Taller</NuxtLink
          >
          <NuxtLink
            to="/#clients"
            class="hover:text-white transition-colors border-b border-neutral-800 pb-4"
            @click="closeMobileMenu"
            >Clientes</NuxtLink
          >
          <NuxtLink
            to="/#contact"
            class="hover:text-white transition-colors pb-4"
            @click="closeMobileMenu"
            >Contacto</NuxtLink
          >
        </nav>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";

// Estado de visualizacion para los menus
const isDropdownOpen = ref<boolean>(false);
const isMobileMenuOpen = ref<boolean>(false);
const openButton = ref<HTMLButtonElement | null>(null);
const closeButton = ref<HTMLButtonElement | null>(null);

// Abre el menu movil y bloquea el desplazamiento vertical del documento
const openMobileMenu = (): void => {
  isMobileMenuOpen.value = true;
  document.body.style.overflow = "hidden";
  // Lleva el foco al boton de cierre para que el teclado opere dentro del menu
  void nextTick(() => closeButton.value?.focus());
};

// Cierra el menu movil y restaura el comportamiento normal del scroll
const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
  // Devuelve el foco al boton que abrio el menu
  void nextTick(() => openButton.value?.focus());
};
</script>

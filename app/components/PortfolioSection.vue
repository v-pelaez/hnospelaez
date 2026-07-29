<template>
  <!-- Cambio el fondo base a bg-neutral-950 (negro casi absoluto) -->
  <section id="portfolio" class="py-24 bg-neutral-950">
    <div class="container mx-auto px-4">
      <h2 class="text-5xl font-bold text-center text-white mb-16 tracking-tight">
        Nuestro Trabajo
      </h2>

      <!-- Filtros actualizados a modo oscuro -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button
          v-for="category in filterCategories"
          :key="category.value"
          @click="activeCategory = category.value"
          :class="[
            'px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium',
            activeCategory === category.value
              ? 'bg-white text-neutral-950 shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white'
          ]"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- Tarjetas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          @click="openProjectDetails(project)"
          class="group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
        >
          <div class="aspect-video bg-neutral-800 relative overflow-hidden">
            <div v-if="project.clientName" class="absolute top-4 right-4 z-10 bg-black/80 text-white text-sm font-bold px-4 py-1.5 rounded-full backdrop-blur-sm">
              {{ project.clientName }}
            </div>
            <!-- Simulación de imagen -->
            <div class="absolute inset-0 flex items-center justify-center text-neutral-600 bg-neutral-800">
              <span class="text-lg">{{ project.images[0] }}</span>
            </div>
          </div>
          <!-- Textos de tarjeta ampliados -->
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-3 text-white">
              {{ project.title }}
            </h3>
            <p class="text-neutral-400 text-lg leading-relaxed line-clamp-2">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal (Dialog) refactorizado para el modo oscuro absoluto -->
    <Dialog 
      v-model:visible="isDialogVisible" 
      modal 
      :header="selectedProject?.title" 
      :style="{ width: '85vw', maxWidth: '1200px' }" 
      :breakpoints="{ '1199px': '90vw', '575px': '100vw' }"
      dismissableMask
      :pt="{
        mask: { class: 'bg-black/90 backdrop-blur-md' },
        root: { class: 'bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-neutral-800' },
        header: { class: 'px-8 py-6 border-b border-neutral-800 flex justify-between items-center bg-neutral-900 z-10 text-2xl text-white font-bold' },
        content: { class: 'p-0 overflow-y-auto bg-neutral-900 flex-1' },
        closeButton: { class: 'text-neutral-400 hover:bg-neutral-800 hover:text-white p-3 rounded-full transition-colors focus:outline-none' }
      }"
    >
      <div v-if="selectedProject" class="flex flex-col lg:flex-row min-h-[60vh]">
        
        <div class="lg:w-2/3 bg-neutral-950 flex flex-col border-r border-neutral-800">
          <div class="flex-1 relative aspect-video lg:aspect-auto flex items-center justify-center">
            <span class="text-neutral-600 font-medium text-xl">
              {{ selectedProject.images[activeImageIndex] }}
            </span>
          </div>
          
          <div class="flex gap-4 p-6 bg-neutral-900 border-t border-neutral-800 overflow-x-auto">
            <button
              v-for="(img, index) in selectedProject.images"
              :key="index"
              @click="activeImageIndex = index"
              :class="[
                'w-28 h-24 flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center transition-all',
                activeImageIndex === index ? 'ring-2 ring-white ring-offset-2 ring-offset-neutral-900 opacity-100' : 'opacity-40 hover:opacity-100 bg-neutral-800'
              ]"
            >
              <span class="text-sm text-neutral-500">Img {{ index + 1 }}</span>
            </button>
          </div>
        </div>

        <div class="lg:w-1/3 p-10 flex flex-col bg-neutral-900">
          <div v-if="selectedProject.clientName" class="mb-8">
            
            <div class="inline-block bg-neutral-800 text-neutral-300 text-sm font-bold px-5 py-2.5 rounded-xl uppercase tracking-wide">
              {{ selectedProject.clientName }}
            </div>
          </div>
          
          <h3 class="text-3xl font-bold text-white mb-6">Detalles del Proyecto</h3>
          <p class="text-neutral-300 leading-relaxed flex-1 text-xl">
            {{ selectedProject.description }}
          </p>
          
          <div class="mt-10 pt-8 border-t border-neutral-800">
            <button @click="isDialogVisible = false" class="w-full bg-white text-neutral-900 font-bold py-5 rounded-xl hover:bg-neutral-200 transition-colors text-lg">
              Cerrar detalles
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ProjectCategory, type Project } from '~/types/index';
import { portfolioProjects } from '~/data/projects';

type FilterOption = ProjectCategory | 'all';

const activeCategory = ref<FilterOption>('all');
const isDialogVisible = ref<boolean>(false);
const selectedProject = ref<Project | null>(null);
const activeImageIndex = ref<number>(0);

const filterCategories: { label: string; value: FilterOption }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Muebles a Medida', value: ProjectCategory.CUSTOM_FURNITURE },
  { label: 'Locales Comerciales', value: ProjectCategory.COMMERCIAL },
  { label: 'Restauración', value: ProjectCategory.RESTORATION },
  { label: 'Proyectos Especiales', value: ProjectCategory.SPECIAL_PROJECTS }
];

const filteredProjects = computed<Project[]>(() => {
  if (activeCategory.value === 'all') {
    return portfolioProjects;
  }
  return portfolioProjects.filter(project => project.category === activeCategory.value);
});

// Metodo para inicializar la vista del modal
const openProjectDetails = (project: Project): void => {
  selectedProject.value = project;
  activeImageIndex.value = 0; 
  isDialogVisible.value = true;
};
</script>
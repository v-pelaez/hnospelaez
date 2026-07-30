<template>
  <div class="container mx-auto px-4 py-32 max-w-4xl min-h-[70vh]">
    <!-- Botón de retorno al inicio -->
    <div class="mb-10">
      <NuxtLink 
        to="/" 
        class="inline-flex items-center text-neutral-400 hover:text-white transition-colors text-lg font-medium group"
      >
        <span class="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
        Volver al inicio
      </NuxtLink>
    </div>
    <h1 class="text-5xl font-bold text-white mb-12 tracking-tight">
      Política de Privacidad
    </h1>
    
    <div class="text-neutral-300 text-lg leading-relaxed space-y-10">
      <section>
        <h2 class="text-2xl font-bold text-white mb-4">1. Responsable del Tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos personales recogidos a través de este sitio web es Hnos. Peláez, con domicilio en Calle Juan de la Plz., Huelva, y correo electrónico de contacto: carpinteriahermanospelaez@gmail.com.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-4">2. Finalidad del Tratamiento</h2>
        <p>
          Los datos personales que nos facilite a través de los canales de contacto (como WhatsApp o correo electrónico) serán utilizados exclusivamente para gestionar su solicitud de presupuesto, responder a sus consultas o establecer la relación comercial solicitada.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-4">3. Conservación de los Datos</h2>
        <p>
          Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales. 
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-4">4. Derechos del Usuario</h2>
        <p>
          Usted tiene derecho a obtener confirmación sobre si en Hnos. Peláez estamos tratando sus datos personales. Por tanto, tiene derecho a acceder a sus datos, rectificar los inexactos o solicitar su supresión cuando los datos ya no sean necesarios, dirigiéndose por escrito a la dirección postal o electrónica arriba indicada.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
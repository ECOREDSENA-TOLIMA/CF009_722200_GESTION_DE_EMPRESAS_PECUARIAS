<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La producción pecuaria se identifica como un proceso de transformación de los recursos entregados por el sector primario de la economía que va ligado a la naturaleza, específicamente en la actividad pecuaria se obtienen productos como carne, leche, lana, huevos, miel y entre otros productos para satisfacer necesidades básicas como la alimentación, este proceso de producción se da como resultado del trabajo del ser humano y utilización de recursos económicos.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/m26NkUtVFg0" title="Programa de producción en la empresa pecuaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

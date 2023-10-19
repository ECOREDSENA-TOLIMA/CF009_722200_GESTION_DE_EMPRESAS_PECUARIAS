<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describen los temas principales del componente formativo, Programa de producción en la empresa pecuaria, en el cual, se relacionan las diferentes etapas del proceso de producción pecuaria, desde la elección de las especies hasta la comercialización de los productos finales propios de la actividad. En los primeros apartados se describen los aspectos a tener en cuenta en la etapa de crecimiento y alimentación para, posteriormente, encaminarse a la reproducción de los animales y el manejo de los productos finales (leche, carne, pieles, etc.).

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la figura se relacionan las diferentes etapas del proceso de producción pecuaria, desde la elección de las especies hasta la comercialización de los productos finales propios de la actividad. En los primeros apartados se describen los aspectos a tener en cuenta en la etapa de crecimiento y alimentación para, posteriormente, encaminarse a la reproducción de los animales y el manejo de los productos finales.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

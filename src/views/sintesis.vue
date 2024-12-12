<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") El desarrollo sostenible y el turismo sostenible son pilares fundamentales para garantizar un equilibrio entre crecimiento económico, preservación ambiental y bienestar social en los destinos turísticos. Este enfoque incluye modelos de gestión que priorizan la sostenibilidad, herramientas para la planificación estratégica, criterios de valoración y códigos éticos como guías clave. Asimismo, el análisis de mercado permite identificar tendencias, segmentar la demanda y diseñar estrategias adaptadas a las necesidades del sector. La innovación tecnológica, a través de herramientas digitales y tendencias como el turismo inteligente y regenerativo, transforma la experiencia turística, mientras que la participación comunitaria y la evaluación de impactos aseguran que el turismo sea una fuerza positiva para las comunidades locales .

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo “Desarrollo de oportunidades turísticas en el territorio”, se destacan los fundamentos del turismo sostenible, la planificación estratégica, y la innovación tecnológica. Se abordan modelos de gestión, impactos del turismo, participación comunitaria, análisis de mercado y tendencias digitales, promoviendo un desarrollo equilibrado y responsable en los destinos turísticos.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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

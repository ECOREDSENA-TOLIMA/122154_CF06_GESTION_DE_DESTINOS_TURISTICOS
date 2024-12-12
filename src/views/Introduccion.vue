<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            p.mb-3 Esta unidad temática se centra en el desarrollo de oportunidades turísticas en el territorio, ofreciendo una visión integral que combina sostenibilidad, planificación estratégica, innovación y participación comunitaria. Se abordan modelos y enfoques clave del desarrollo sostenible, junto con herramientas para la gestión eficiente de los destinos turísticos. Además, se analizan los impactos y efectos del turismo, resaltando la importancia de incorporar criterios de valoración y normativas como el código y las cartas de turismo sostenible.
            .cajon.cajon.color-primario.p-4.mb-3
              p.mb-0 La planificación turística se presenta como un componente esencial, con métodos y herramientas que facilitan la toma de decisiones informadas y responsables. Asimismo, se destacan la medición de la sostenibilidad y el turismo regenerativo como tendencias necesarias para garantizar un equilibrio entre el desarrollo económico y la protección del entorno.
            p Por último, se incorpora el análisis de mercados turísticos y las innovaciones tecnológicas como elementos estratégicos que potencian la competitividad de los territorios. Este enfoque permite identificar tendencias, segmentar la demanda y aprovechar herramientas digitales para la promoción de destinos, consolidando el turismo como un motor de desarrollo sostenible y transformador. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/introduccion/img-01.svg', alt='Imagen decorativa')
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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

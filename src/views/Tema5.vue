<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Estrategia aplicada al turismo

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema5/img-01.png', alt='')

    p.mb-5 La estrategia aplicada al turismo se enfoca en establecer enfoques integrales que permitan gestionar el desarrollo de actividades turísticas, maximizando los beneficios económicos, sociales y culturales, al tiempo que se minimizan los impactos negativos. Esto implica diseñar, implementar y evaluar planes que fortalezcan el posicionamiento del destino, potencien su atractivo y aseguren un crecimiento equilibrado.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1. Proceso de manejo estratégico en los territorios

    p.mb-5 El manejo estratégico en el turismo es un proceso integral que busca coordinar esfuerzos para alcanzar objetivos comunes en el desarrollo del sector. Este proceso incluye:

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-down")
        ImagenInfografica.color-acento-botones.mb-4.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img-02-01.svg', alt='Imagen decorativa')

          .tarjeta.tarjeta--blanca.p-3(x="12.7%" y="61%" numero="+")(style="background-color: #E2F5F1")
            p Especificar un marco que refleje los valores, objetivos y metas del destino turístico, orientado hacia un desarrollo sostenible que integre las expectativas de las comunidades receptoras, los turistas y los actores económicos.

          .tarjeta.tarjeta--blanca.p-3(x="42%" y="17.5%" numero="+")(style="background-color: #E2F5F1")
            p Realizar un diagnóstico de las condiciones internas y externas, evaluando recursos naturales, infraestructura, tendencias de mercado, y aspectos culturales y sociales. Este análisis permite anticipar desafíos, identificar oportunidades y definir prioridades de acción.

          .tarjeta.tarjeta--blanca.p-3(x="58.5%" y="84%" numero="+")(style="background-color: #E2F5F1")
            p Diseñar planes estratégicos que optimicen el uso de recursos y fortalezcan la competitividad del destino. Esto incluye estrategias de marketing, manejo de la capacidad de carga y diversificación de productos turísticos.

          .tarjeta.tarjeta--blanca.p-3(x="87.5%" y="38%" numero="+")(style="background-color: #E2F5F1")
            p Promover la cooperación entre el sector público, privado y la comunidad local para garantizar la implementación efectiva de las estrategias.

        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-sm-9.col-md-8.col-10.movil
            figure
              img(src='@/assets/curso/temas/tema5/img-02-02.svg', alt='Imagen decorativa')

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2. Toma de decisiones

    p.mb-5 La toma de decisiones en turismo es fundamental para garantizar que las estrategias implementadas sean efectivas y alineadas con los objetivos de desarrollo sostenible. Los elementos clave de este proceso incluyen:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/img-03.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Uso de datos objetivos
            p.text-center.mb-0.px-3 Basar las decisiones en estudios de mercado, análisis de tendencias y evaluaciones de impacto que permitan diseñar estrategias informadas y adaptadas a las necesidades del destino.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/img-04.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Participación de actores clave
            p.text-center.mb-0.px-3 Incluir en el proceso de decisión a comunidades locales, empresas del sector, turistas y autoridades gubernamentales, promoviendo el consenso y el apoyo a los proyectos.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/img-05.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Flexibilidad y adaptación
            p.text-center.mb-0.px-3 Implementar mecanismos que permitan ajustar las estrategias ante cambios en las condiciones del mercado, el entorno o las regulaciones, asegurando la resiliencia del destino.

    Separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3. Herramientas

    p.mb-5 El uso de herramientas específicas potencia la efectividad de las estrategias. Algunas de las más utilizadas incluyen:

    .col-xl-12.mx-auto.mb-5
      .d-flex.flex-wrap.align-items-center.mb-5
        .col-xl-6.order-2.order-xl-1.pe-xl-4
          LineaTiempoD.color-secundario.linea-tiempo-edit.mb-4(data-aos="zoom-in-down")
            p.text-small(numero="1" titulo="Planes de <em>marketing</em>") Documentos estratégicos que establecen cómo posicionar el destino, atraer visitantes y mejorar su experiencia, considerando aspectos como campañas de promoción, segmentación de mercados y fortalecimiento de la identidad del destino.

            p.text-small(numero="2" titulo="Indicadores de desempeño") Métricas como ocupación hotelera, satisfacción de los turistas, impacto económico y preservación ambiental permiten evaluar el éxito de las estrategias y tomar decisiones basadas en datos.

            p.text-small(numero="3" titulo="Tecnología y plataformas digitales") Las herramientas digitales facilitan la promoción del destino, la interacción con los turistas y la gestión de la reputación <em>online.</em> Aplicaciones móviles y sitios <em>web</em> mejoran la experiencia de los visitantes, facilitando el acceso a información y servicios.

            p.text-small(numero="4" titulo="Mapeo de recursos") Identificación de atractivos y recursos clave del destino, evaluando su potencial para diversificar y fortalecer la oferta turística.

            p.text-small(numero="5" titulo="Modelos de proyección") Herramientas predictivas que ayudan a anticipar tendencias y planificar estrategias de largo plazo.

        img.col-xl-6.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src='@/assets/curso/temas/tema5/img-06.svg', alt='Rutinas de limpieza')

    p.mb-5 La combinación de estos enfoques y herramientas permite crear estrategias sólidas que contribuyan al desarrollo turístico sostenible, garantizando la competitividad y el bienestar de los territorios y sus comunidades.













</template>

<script>
export default {
  name: 'Tema5',
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

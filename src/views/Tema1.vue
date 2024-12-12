<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Desarrollo sostenible

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='')

    p.mb-5 El desarrollo sostenible se fundamenta en satisfacer las necesidades del presente sin comprometer la capacidad de las generaciones futuras para cubrir las suyas. Este enfoque integral exige un equilibrio entre tres pilares fundamentales: el crecimiento económico, la inclusión social y la sostenibilidad ambiental, trabajando de manera conjunta para garantizar un futuro equitativo y resiliente.

    PasosA.color-acento-contenido.mb-5(tipo="l")
      div
        h3 Crecimiento económico
        p El desarrollo sostenible impulsa un modelo económico innovador que busca prosperidad sin agotar los recursos naturales. Esto incluye el fomento de actividades productivas que generen empleo estable y oportunidades económicas locales, mientras se minimizan los impactos negativos en el entorno. La economía circular y la transición hacia energías renovables son ejemplos de estrategias que refuerzan este pilar.

      div
        h3 Inclusión social
        p Este modelo promueve una sociedad justa e inclusiva, donde se reduzcan las desigualdades y se garantice el acceso universal a derechos fundamentales como salud, educación, vivienda y empleo digno. Además, se reconoce la diversidad cultural y el rol esencial de las comunidades vulnerables, asegurando su participación activa en la toma de decisiones y su beneficio del desarrollo.

      div
        h3 Sostenibilidad ambiental
        p La preservación de los recursos naturales y la biodiversidad es vital. Este pilar engloba acciones como la gestión sostenible de los recursos, la mitigación del cambio climático, la protección de hábitats y la implementación de prácticas regenerativas que restauren los ecosistemas afectados.

    p.mb-5 En su conjunto, el desarrollo sostenible busca construir un modelo equilibrado y adaptable, capaz de responder a los desafíos globales y garantizar un futuro próspero, inclusivo y ecológicamente responsable.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1. Modelos

    p.mb-3 El desarrollo sostenible se basa en diversos modelos que guían las estrategias para equilibrar el crecimiento económico, la inclusión social y la sostenibilidad ambiental. Algunos de los modelos más destacados incluyen:

    .row.justify-content-center.p-md-5.p-4(data-aos="flip-up")
      .col-12
        .tarjeta.tarjeta--BG08.p-4
          SlyderB.p-4(:datos="datosSlyder")

    p.mb-5 Los criterios de valoración del turismo sostenible permiten identificar cómo las actividades turísticas pueden influir positivamente en los destinos y comunidades receptoras. Estos criterios no solo buscan minimizar los efectos negativos, sino también potenciar beneficios tangibles en términos ambientales, sociales y económicos.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Modelo del desarrollo sostenible</i>
        figure.mb-3
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema1/img-05-01.svg', alt='En la figura 1, se presentan las dimensiones interrelacionadas del desarrollo sostenible: social, económico y medioambiental. Estas dimensiones sirven como base para implementar los modelos mencionados y crear un enfoque integral hacia la sostenibilidad.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema1/img-05-02.svg', alt='En la figura 1, se presentan las dimensiones interrelacionadas del desarrollo sostenible: social, económico y medioambiental. Estas dimensiones sirven como base para implementar los modelos mencionados y crear un enfoque integral hacia la sostenibilidad.') 
          figcaption Nota. Cuales.FM (2016).
    
    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2. Gestión en los destinos turísticos

    .row.fondo3-t3.justify-content-center.align-items-center.py-3.px-lg-5.px-4(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        p.mb-5 La gestión sostenible de destinos turísticos es esencial para garantizar que el turismo beneficie tanto a la comunidad local como al entorno natural, sin comprometer los recursos para futuras generaciones. Para lograr una gestión efectiva, se deben tener en cuenta varias estrategias clave:
        .col-lg-4.col-6.order-lg-1.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img-06.svg', alt='Imagen decorativa')
        .col-lg-8.col-12.order-lg-2.order-2
          ul.lista-ul.mb-2
            li.mb-0
              i.fas.fa-circle(style="color:#544403")
              h4 #[b(style="color: #544403 !important") Planificación integrada]
          p Implica la participación activa de la comunidad local en todas las etapas del desarrollo turístico, desde la concepción del proyecto hasta su ejecución. Este enfoque asegura que las necesidades y expectativas de los residentes se integren, fomentando el apoyo local y reduciendo los posibles conflictos. La planificación también debe incluir una evaluación del impacto ambiental y social del turismo, para evitar la sobrecarga de recursos o la pérdida de identidad cultural.
          ul.lista-ul.mb-2
            li.mb-0
              i.fas.fa-circle(style="color:#544403")
              h4 #[b(style="color: #544403 !important") Monitoreo y evaluación]
          p Establecer indicadores claros y medibles es fundamental para seguir el impacto del turismo en el medio ambiente y la comunidad. Esto incluye la medición de factores como el uso del agua, la gestión de residuos, la huella de carbono, y los efectos económicos y sociales sobre los habitantes locales. La evaluación continua permite ajustar las políticas y las estrategias de gestión en tiempo real para garantizar un equilibrio sostenible.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-circle(style="color:#544403")
            h4 #[b(style="color: #544403 !important") Formación y sensibilización]
        p.mb-4 Capacitar a los actores locales, incluidos empresarios, guías turísticos, y autoridades municipales, en prácticas sostenibles es crucial para la preservación del patrimonio natural y cultural. Además, la sensibilización de los turistas sobre el respeto al medio ambiente y la cultura local puede contribuir significativamente a la conservación de los destinos.

        .cajon.cajon.color-secundario.p-4(style="background-color:#FFE9DF")
          p.mb-0 Estas estrategias deben estar interconectadas para crear un modelo de gestión que promueva el desarrollo económico y social de las comunidades, al mismo tiempo que protege y conserva los recursos naturales y culturales para el disfrute de futuras generaciones.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Modelo de capital natural',
        texto:
          'Este enfoque prioriza la gestión responsable de los recursos naturales, asegurando que su uso no supere la capacidad regenerativa de los ecosistemas. Promueve prácticas sostenibles en sectores como la agricultura, la silvicultura y la gestión del agua, considerando estos recursos como un patrimonio esencial para las generaciones futuras.',
        imagen: require('@/assets/curso/temas/tema1/img-02.png'),
      },
      {
        titulo: 'Modelo de desarrollo humano',
        texto:
          'Este modelo pone énfasis en mejorar la calidad de vida de las personas. Sus pilares incluyen el acceso a la educación, la salud y recursos básicos, permitiendo que las comunidades desarrollen capacidades que les permitan prosperar de manera sostenible.',
        imagen: require('@/assets/curso/temas/tema1/img-03.png'),
      },
      {
        titulo: 'Modelo de economía circular',
        texto:
          'Este enfoque económico busca transformar la forma en que se producen y consumen bienes, minimizando los residuos y maximizando el uso de los recursos. Se centra en diseñar productos reciclables, reutilizar materiales y fomentar procesos industriales más eficientes para reducir el impacto ambiental.',
        imagen: require('@/assets/curso/temas/tema1/img-04.png'),
      },
    ],
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

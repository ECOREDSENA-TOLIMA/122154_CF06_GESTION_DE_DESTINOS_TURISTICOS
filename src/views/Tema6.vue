<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Análisis de mercado turístico

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema6/img-01.png', alt='')

    p.mb-5 El análisis de mercado turístico es un proceso esencial que permite comprender las dinámicas, necesidades y comportamientos del sector. Este análisis sirve como base para tomar decisiones estratégicas informadas, diseñar productos y servicios innovadores, y mejorar la competitividad de los destinos turísticos.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1. Identificación de tendencias

    p.mb-5 El estudio de tendencias en el mercado turístico facilita prever cambios y responder a las nuevas demandas de los viajeros. Estas tendencias, impulsadas por factores sociales, tecnológicos, económicos y ambientales, orientan el desarrollo de experiencias adaptadas a un entorno dinámico, como se presenta a continuación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.mb-md-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="A" titulo="Tendencias tecnológicas")
            .col-12.mb-4.mb-md-0
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul(style="color: #FFCE73")
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Uso de inteligencia artificial para personalizar servicios.

                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Realidad virtual y aumentada para promocionar destinos y enriquecer la experiencia del visitante.

                  li.mb-3 
                    i.lista-ul__vineta
                    p.mb-0 Plataformas de reserva inteligentes que integran sostenibilidad como criterio clave.

              figure.mb-3
                img(src='@/assets/curso/temas/tema6/img-02.png', alt='Imagen decorativa')

          .row(numero="B" titulo="Tendencias sociales y culturales")
            .col-12.mb-4.mb-md-0
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul(style="color: #FFCE73")
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Incremento en viajes por motivos de bienestar, como yoga, meditación y spas.

                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Mayor interés por destinos emergentes y menos masificados.

                  li.mb-3 
                    i.lista-ul__vineta
                    p.mb-0 Enfoque en el turismo gastronómico, con énfasis en comida local y sostenible.

              figure.mb-3
                img(src='@/assets/curso/temas/tema6/img-03.png', alt='Imagen decorativa')

          .row(numero="C" titulo="Tendencias ambientales")
            .col-12.mb-4.mb-md-0
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul(style="color: #FFCE73")
                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Creciente interés por destinos con certificación ecológica.

                  li.mb-0 
                    i.lista-ul__vineta
                    p.mb-0 Demanda de transporte con menor huella de carbono, como trenes eléctricos o bicicletas.

              figure.mb-3
                img(src='@/assets/curso/temas/tema6/img-04.png', alt='Imagen decorativa')

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2. Segmentación y demanda turísticos

    p.mb-5 La segmentación es una herramienta estratégica para identificar las características de diferentes grupos de turistas y adaptar la oferta de un destino a sus necesidades específicas.

    ol.lista-ol--cuadro.mb-4
      li 
        .lista-ol--cuadro__vineta(style="color: #000")
          span #[b a]
        | #[b(style="color: #544403 !important") Planificación integrada]

    .row.mb-5
      .col-xl-12.m-auto
        .row.justify-content-center
          .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="900")
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.d-flex.align-content-center.align-items-end.text-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img-05v.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                  .w-100.text-center
                    h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#09614D;border-radius:20px;max-width:fit-content;color:#fff") Geográficos
                .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                  p.text-center #[b Geográficos]
                  p Procedencia de los turistas.

          .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="900")
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.d-flex.align-content-center.align-items-end.text-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img-06v.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                  .w-100.text-center
                    h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#09614D;border-radius:20px;max-width:fit-content;color:#fff") Demográficos
                .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                  p.text-center #[b Demográficos]
                  p Edad, género, ingresos y estado civil.

          .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="900")
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.d-flex.align-content-center.align-items-end.text-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img-07v.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                  .w-100.text-center
                    h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#09614D;border-radius:20px;max-width:fit-content;color:#fff") Psicográficos
                .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                  p.text-center #[b Psicográficos]
                  p Estilo de vida, valores e intereses personales.

          .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in" data-aos-duration="900")
            .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.d-flex.align-content-center.align-items-end.text-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img-08v.png')})`}" style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                  .w-100.text-center
                    h4.mb-4.p-1.ps-5.pe-5.m-auto(style="background-color:#09614D;border-radius:20px;max-width:fit-content;color:#fff") Conductuales
                .tarjeta-flip__contenido.p-4.p-xl-5.bg-white.text-center(style="box-shadow:0px 4px 20px rgba(0,0,0,.18);")
                  p.text-center #[b Conductuales]
                  p Frecuencia de viaje, actividades preferidas y sensibilidad al precio.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            ol.lista-ol--cuadro.mb-4
              li 
                .lista-ol--cuadro__vineta(style="color: #000")
                  span #[b b]
                | #[b(style="color: #544403 !important") Planificación integrada]

            p Este análisis examina la capacidad de atracción de un destino y su impacto económico, social y ambiental. Considera variables como:
            ul.lista-ul.mb-4
              li(data-aos="fade-down")
                i.fas.fa-check(style="color: #FFB937")
                p.mb-0 #[b Motivaciones principales:] negocios, ocio, aventura, cultura o bienestar.

              li(data-aos="fade-down")
                i.fas.fa-check(style="color: #FFB937")
                p.mb-0 #[b Estacionalidad:] identificación de temporadas altas y bajas para planificar estrategias de promoción.
              
              li(data-aos="fade-down")
                i.fas.fa-check(style="color: #FFB937")
                p.mb-0 #[b Duración de la estancia:] para ajustar la oferta de actividades y alojamientos.
              
              li(data-aos="fade-down")
                i.fas.fa-check(style="color: #FFB937")
                p.mb-0 #[b Gasto promedio:] información clave para diseñar paquetes turísticos atractivos y rentables.
            
            .cajon.cajon.color-primario.p-4.mb-3
              p.mb-0 #[b Ejemplo práctico:] en un destino con alta demanda de turismo cultural, como Cartagena, se pueden diseñar paquetes que incluyan recorridos históricos, experiencias gastronómicas locales y visitas a comunidades artesanales, segmentados por grupos de edad e intereses.

          .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img-09.svg', alt='Imagen decorativa')














</template>

<script>
export default {
  name: 'Tema6',
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

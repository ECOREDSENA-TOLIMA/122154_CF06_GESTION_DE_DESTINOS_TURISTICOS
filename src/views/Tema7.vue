<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Innovación y tecnología en turismo

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema7/img-01.png', alt='')

    p.mb-5 La innovación y la tecnología desempeñan un papel central en la transformación de la industria turística, redefiniendo la manera en que los destinos se promocionan y las experiencias de los viajeros se diseñan. Estas herramientas no solo mejoran la eficiencia operativa, sino que también permiten crear ofertas únicas, personalizadas y sostenibles que responden a las expectativas del turista moderno.

    Separador

    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1. Herramientas digitales para la promoción de destinos

    p.mb-5 La promoción turística ha evolucionado gracias a la digitalización, que permite conectar a los destinos con audiencias globales de manera más efectiva. Algunas de las herramientas más destacadas incluyen:

    .row.justify-content-center.p-md-5.p-4(data-aos="flip-up")
      .col-12
        .tarjeta.tarjeta--BG08.p-4
          SlyderB.p-4(:datos="datosSlyder")

    Separador

    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2. Tendencias innovadoras en la industria turística

    p.mb-5 La innovación no solo impulsa la promoción, sino también las experiencias y la sostenibilidad en el turismo. Entre las tendencias más significativas se encuentran:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Turismo inteligente")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p Ciudades como Barcelona y Singapur están implementando tecnologías IoT (Internet de las cosas) para ofrecer servicios inteligentes, como información en tiempo real sobre transporte, afluencia en atracciones y rutas recomendadas. Estas iniciativas optimizan la experiencia del visitante y minimizan el impacto ambiental.

            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema7/img-06.png', alt='Imagen decorativa')

          .row(numero="2" titulo="Personalización mediante IA")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p Plataformas como Booking.com o Expedia utilizan algoritmos de inteligencia artificial para sugerir destinos, actividades y hoteles basados en las búsquedas y el historial de reservas del usuario, mejorando la satisfacción del cliente.

            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema7/img-07.png', alt='Imagen decorativa')

          .row(numero="3" titulo="Turismo sostenible y regenerativo")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p Innovaciones como el uso de blockchain para rastrear la huella de carbono de un viaje o proyectos como "Rewilding Europe" están revolucionando la forma en que los turistas contribuyen a la conservación ambiental y a la regeneración de ecosistemas.

            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema7/img-08.png', alt='Imagen decorativa')

          .row(numero="4" titulo="Experiencias inmersivas")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p La gamificación está irrumpiendo en el turismo con experiencias como búsquedas del tesoro temáticas o recorridos interactivos en parques culturales. Además, destinos como Dubái están adoptando atracciones que combinan tecnología avanzada, como drones para espectáculos de luces, con historias locales.

            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema7/img-09.png', alt='Imagen decorativa')

          .row(numero="5" titulo="Tecnologías de pago digital")
            .col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
              p La integración de criptomonedas y métodos de pago sin contacto, como las billeteras virtuales, facilita transacciones rápidas y seguras, atrayendo a un público más joven y tecnológicamente conectado.

            .col-12.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema7/img-010.png', alt='Imagen decorativa')
 
    p.mb-5 La incorporación de innovación y tecnología no solo redefine el turismo tradicional, sino que también abre puertas a nuevas formas de explorar y experimentar el mundo. Destinos que adoptan estas herramientas y tendencias fortalecen su competitividad y garantizan un desarrollo más inclusivo y sostenible para el futuro.







</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Plataformas de redes sociales',
        texto:
          'Sitios como Instagram, TikTok y Facebook permiten a los destinos mostrar su oferta a través de contenido visual atractivo, utilizando estrategias como <em>influencers</em> y transmisiones en vivo para generar mayor alcance. Por ejemplo, campañas virales como las de Visit Norway han logrado aumentar el interés turístico mediante historias auténticas y paisajes impactantes.',
        imagen: require('@/assets/curso/temas/tema7/img-02.png'),
      },
      {
        titulo: 'Sistemas de gestión de relaciones con el cliente (CRM)',
        texto:
          'Estas plataformas recopilan datos de los turistas para personalizar experiencias y fortalecer la fidelización. Un destino puede enviar ofertas específicas según las preferencias de un viajero frecuente, aumentando la probabilidad de repetición.',
        imagen: require('@/assets/curso/temas/tema7/img-03.png'),
      },
      {
        titulo: 'Realidad virtual y aumentada',
        texto:
          'Herramientas como Google Expeditions o aplicaciones personalizadas de destinos ofrecen recorridos virtuales que permiten al turista explorar atractivos antes de viajar, aumentando su deseo de visita. Por ejemplo, destinos como Machu Picchu ya cuentan con visitas virtuales inmersivas para captar la atención de viajeros potenciales.',
        imagen: require('@/assets/curso/temas/tema7/img-04.png'),
      },
      {
        titulo: 'Sitios <em>web</em> interactivos',
        texto:
          'Los portales oficiales de turismo, como el de Nueva Zelanda, integran mapas interactivos, planificación de itinerarios y reservas directas, mejorando la experiencia del usuario desde el primer contacto.',
        imagen: require('@/assets/curso/temas/tema7/img-05.png'),
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

<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Desarrollo turístico

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema3/img-01.png', alt='')

    p El desarrollo turístico implica la planificación, creación y mejora de infraestructuras, servicios y actividades destinadas a incrementar la atracción de visitantes a un destino. Este proceso debe llevarse a cabo bajo principios de sostenibilidad, asegurando un equilibrio en los beneficios para los turistas y las comunidades locales.
    p.mb-5 Para garantizar su efectividad, es esencial identificar y trabajar sobre los componentes clave del desarrollo turístico:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="A" titulo="Infraestructuras y servicios") 
                p La construcción y mantenimiento de carreteras, aeropuertos, alojamientos, restaurantes y centros de información turística son fundamentales para mejorar la experiencia del visitante. Estas infraestructuras deben estar diseñadas para ser funcionales y respetuosas con el medio ambiente.

              .row(numero="B" titulo="Actividades y experiencias turísticas") 
                p La oferta de actividades como visitas culturales, deportes de aventura, recorridos gastronómicos y eventos locales enriquece la estancia de los visitantes, promoviendo un turismo diversificado y atractivo.

              .row(numero="C" titulo="Planificación estratégica") 
                p Para un desarrollo turístico efectivo requiere de una planificación integrada que considere:
                p.mb-0 #[b El impacto ambiental:] minimizar la degradación del entorno natural.
                p.mb-0 #[b La participación comunitaria:] incluir a los residentes locales en el diseño y gestión del turismo.
                p #[b La viabilidad económica:] garantizar que las inversiones sean sostenibles a largo plazo y generen beneficios económicos para la región.
                
              .row(numero="D" titulo="Beneficios del desarrollo turístico") 
                p.mb-0 #[b Impulso a la economía local:] genera empleos, mejora los ingresos y diversifica la economía.
                p.mb-0 #[b Promoción cultural y social:] ayuda a conservar y difundir tradiciones y valores locales.
                p #[b Fortalecimiento de la identidad regional:] aumenta el reconocimiento del destino a nivel nacional e internacional.
          
          .col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img-02.svg', alt='Imagen decorativa')

    p.mb-5 Un desarrollo turístico planificado y equilibrado no solo aumenta la competitividad del destino, sino que también contribuye al bienestar de las comunidades locales, preservando su entorno y cultura para las generaciones futuras

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1. Impactos del turismo

    p.mb-5 El turismo es una actividad de gran relevancia económica, social y ambiental que puede generar tanto beneficios como desafíos en los destinos receptores. A continuación, se analizan sus principales impactos:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span #[b a]
            | #[b(style="color: #544403 !important") Impactos económicos]
        
        p El turismo contribuye significativamente al crecimiento económico mediante:
        ul.lista-ul.mb-4
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #FFB937")
            p.mb-0 #[b Creación de empleo:] genera oportunidades laborales directas e indirectas en sectores como la hostelería, el transporte y el comercio.

          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #FFB937")
            p.mb-0 #[b Aumento de ingresos locales:] impulsa el consumo de bienes y servicios producidos en la región, fortaleciendo las economías locales.
          
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #FFB937")
            p.mb-0 #[b Desarrollo regional:] estimula la inversión en infraestructura y servicios básicos, beneficiando tanto a turistas como a residentes.

        .cajon.cajon.color-primario.p-4.mb-5
          p.mb-0 Sin embargo, estos beneficios pueden ir acompañados de desafíos como la dependencia económica de la actividad turística, la estacionalidad que afecta los ingresos y las desigualdades en la distribución de los beneficios.
    
      .col-lg-3.col-12.mb-5.d-lg-flex.d-none(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img-03.svg', alt='Imagen decorativa')
      
      .col-lg-7.col-12.mb-3(data-aos="fade-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span #[b b]
            | #[b(style="color: #544403 !important") Impactos sociales y culturales]

        p El turismo influye en las comunidades receptoras al:
        ul.lista-ul.mb-4
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #FFB937")
            p.mb-0 #[b Promover la conservación cultural:] estimula la preservación de tradiciones, prácticas y monumentos históricos, al hacer de la cultura un atractivo para los visitantes.

          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #FFB937")
            p.mb-0 #[b Fomentar el intercambio cultural:] facilita el diálogo y la comprensión entre personas de diferentes culturas.

        .cajon.cajon.color-secundario.p-4.mb-3
          p.mb-0 Por otro lado, puede generar efectos negativos como la erosión cultural, pérdida de identidad local y saturación de espacios, afectando la calidad de vida de los residentes.

      .col-lg-10(data-aos="fade-down-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span #[b c]
            | #[b(style="color: #544403 !important") Impactos ambientales]
        
        p El turismo tiene efectos significativos sobre el medio ambiente, entre ellos:
        ul.lista-ul.mb-4
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #FFB937")
            p.mb-0 #[b Impactos negativos:] la contaminación, la sobreexplotación de recursos naturales y la pérdida de biodiversidad son problemas comunes cuando no se gestiona adecuadamente.

          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #FFB937")
            p.mb-0 #[b Impactos positivos:] puede incentivar la conservación ambiental mediante la creación de áreas protegidas y el desarrollo de proyectos de ecoturismo.

        .cajon.cajon.color-primario.p-4.mb-5
          p.mb-0 La clave para maximizar los beneficios y mitigar los impactos negativos del turismo radica en una gestión responsable, que equilibre el desarrollo económico, el bienestar social y la conservación del entorno natural.

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2. Efectos del turismo

    p.mb-5 Los efectos del turismo se manifiestan tanto a corto como a largo plazo, afectando diversos aspectos del destino. Estos efectos pueden ser tanto positivos como negativos:

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.p-5(style="background-color: #FEEBCF")
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema3/icono-01.svg', alt='Texto que describa la imagen')
          
        h2.text-center Efectos positivos
        p El desarrollo turístico puede generar un aumento significativo en la inversión en infraestructuras, como carreteras, alojamientos y servicios públicos. Además, fomenta el crecimiento del sector de la hospitalidad y puede contribuir a la mejora de servicios como salud y educación. En términos culturales y ambientales, el turismo puede incentivar la preservación del patrimonio natural y cultural, promoviendo su conservación a través de programas de educación y sensibilización

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.p-5(style="background-color: #FECAB2")
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema3/icono-02.svg', alt='Texto que describa la imagen')
          
        h2.text-center Efectos negativos
        p Sin una adecuada planificación, el turismo puede provocar la saturación de ciertos destinos, lo que afecta la calidad de la experiencia tanto para los turistas como para los residentes. Esto puede dar lugar a conflictos entre ambos grupos, así como a la alteración de la vida cotidiana de las comunidades locales. Además, el aumento de la demanda de recursos y servicios puede generar presión sobre los ecosistemas y los recursos naturales, lo que podría desencadenar efectos adversos a largo plazo, como la degradación ambiental.

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3. Participación comunitaria en el desarrollo turístico

    p.mb-5 La participación comunitaria es un componente esencial para garantizar que el desarrollo turístico sea inclusivo, equitativo y sostenible. Este enfoque reconoce el papel central de las comunidades locales como actores clave en la planificación, implementación y gestión de las actividades turísticas en sus territorios. A continuación, se describen los aspectos fundamentales que destacan la importancia de este enfoque:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12.mb-md-0
        PasosA.color-acento-contenido.mb-3(tipo="l")
          div
            h3 Empoderamiento local
            p La participación activa de las comunidades en la toma de decisiones permite que sus necesidades, intereses y valores culturales sean respetados y representados. Esto asegura que el turismo beneficie a los residentes y minimice los impactos negativos en su calidad de vida.

          div
            h3 Fortalecimiento económico
            p Cuando las comunidades locales son incluidas en la cadena de valor del turismo, como en la creación de empresas, servicios y productos, se fomenta el empleo, la generación de ingresos y el desarrollo económico local. Esto contribuye a una distribución más equitativa de los beneficios

          div
            h3 Conservación cultural y ambiental
            p La inclusión de las comunidades en la gestión turística favorece la conservación de su patrimonio cultural y natural. Las comunidades actúan como guardianes del entorno, promoviendo prácticas sostenibles y sensibilizando a los visitantes sobre la importancia de proteger los recursos locales.
          
          div
            h3 Sensibilización y educación
            p Participar en actividades turísticas también fortalece la identidad cultural y el conocimiento de las comunidades sobre el valor de sus recursos. Esto promueve una visión a largo plazo que prioriza el bienestar colectivo y la sostenibilidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in-up")
        .cajon.cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema3/icono-03.svg', alt='Imagen decorativa')
            .col-lg-9
              p La participación comunitaria no solo enriquece la experiencia turística, sino que también contribuye a un modelo de desarrollo más justo y resiliente, en el que las comunidades locales desempeñan un rol activo en la definición de su futuro.














</template>

<script>
export default {
  name: 'Tema3',
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

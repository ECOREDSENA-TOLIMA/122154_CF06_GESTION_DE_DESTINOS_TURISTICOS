<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Planificación turística

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='')

    p La planificación turística es un proceso estratégico integral orientado a coordinar, organizar y gestionar el desarrollo de actividades turísticas de manera sostenible. Este enfoque busca maximizar los beneficios económicos, sociales y culturales, al tiempo que minimiza los impactos negativos en el entorno y las comunidades receptoras. A través de este proceso, se elaboran planes que no solo atienden las necesidades actuales de los destinos, sino que también se anticipan a las demandas futuras, equilibrando el desarrollo con la conservación de los recursos naturales y el respeto por las dinámicas locales.
    p.mb-5 La planificación turística sostenible incluye los siguientes elementos clave:

    .row.justify-content-center.mb-3(data-aos="zoom-in")
      .col-lg-3.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema4/img-02.svg', alt='Imagen decorativa')
      .col-lg-9.col-12.mb-3
        TabsA.color-acento-botones.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4(titulo="Análisis del entorno")
            p Se realiza una evaluación exhaustiva de los recursos naturales, culturales, económicos y sociales del destino. Este análisis considera también los intereses y expectativas de los actores involucrados, como la comunidad local, las autoridades, los empresarios y los turistas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Formulación de objetivos y estrategias")
            p Este paso define metas específicas para el desarrollo turístico, alineadas con la visión de sostenibilidad del destino. Incluye estrategias para atraer turistas, preservar el patrimonio, fortalecer la economía local y garantizar un crecimiento equilibrado.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="Participación de la comunidad")
            p Es esencial integrar a las comunidades locales en el proceso de planificación, asegurando que sus intereses sean considerados y que los beneficios del turismo mejoren su calidad de vida.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde

          .tarjeta.color-acento-botones--borde.p-4(titulo="Implementación de prácticas sostenibles")
            p Se incorporan políticas y métodos que minimicen el impacto ambiental, como el uso eficiente de los recursos, el diseño de infraestructuras respetuosas con el entorno y la promoción de actividades turísticas responsables.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde

          .tarjeta.color-acento-botones--borde.p-4(titulo="Monitoreo y evaluación continua")
            p Se realiza un seguimiento de los resultados obtenidos, ajustando las estrategias según las necesidades emergentes y las tendencias del mercado. Este enfoque asegura la mejora continua y la adaptabilidad del plan.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde

    p.mb-5 La planificación turística sostenible es fundamental para garantizar un desarrollo armónico y equilibrado, que respalde el bienestar de las comunidades locales, proteja los recursos naturales y brinde experiencias enriquecedoras a los visitantes.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1. Enfoques

    p.mb-5 La planificación turística puede abordarse desde diferentes enfoques, cada uno con objetivos y principios específicos que guían el desarrollo y la gestión de las actividades turísticas. Estos enfoques permiten adaptar las estrategias a las características del destino y a las necesidades de los actores involucrados, promoviendo un turismo más eficiente y equitativo.

    .col-xl-12.mx-auto.mb-5
      .d-flex.flex-wrap.align-items-center.mb-5
        .col-xl-8.order-2.order-xl-1.pe-xl-4
          LineaTiempoD.color-secundario.linea-tiempo-edit.mb-4(data-aos="zoom-in-down")
            p.text-small(numero="1" titulo="Enfoque global") Este enfoque integra el turismo como parte del desarrollo regional, considerándolo una actividad que interactúa con otros sectores económicos, sociales y culturales. Se busca coordinar esfuerzos entre las partes interesadas, como gobiernos, empresarios y comunidades locales, para fomentar un desarrollo equilibrado. Este enfoque promueve una visión amplia que abarca desde la infraestructura hasta el impacto económico y social del turismo en la región.

            p.text-small(numero="2" titulo="Enfoque sostenible") Prioriza la preservación del medio ambiente, la conservación del patrimonio cultural y la inclusión social en todas las etapas del desarrollo turístico. Este enfoque se centra en garantizar que las actividades turísticas no comprometan la capacidad de los recursos naturales ni las dinámicas sociales locales. Además, busca distribuir los beneficios de manera equitativa, promoviendo un equilibrio entre las necesidades de los turistas, la comunidad y el entorno.

            p.text-small(numero="3" titulo="Enfoque participativo") Este enfoque destaca la importancia de la participación activa de la comunidad local en el proceso de planificación turística. A través de consultas, talleres y reuniones, se incorporan las necesidades, opiniones y expectativas de los residentes en el diseño de estrategias y proyectos. Esto no solo fortalece el sentido de pertenencia, sino que también garantiza que los beneficios del turismo respondan a los intereses locales y se minimicen los impactos negativos.

            p.text-small(numero="4" titulo="Enfoque cultural") Considera la identidad, tradiciones y patrimonio del destino como ejes centrales de la planificación turística. Este enfoque fomenta la valorización de la cultura local, asegurando que las actividades turísticas sean compatibles con las prácticas culturales de las comunidades. También busca proteger los sitios históricos y promover el intercambio respetuoso entre turistas y residentes.

            p.text-small(numero="5" titulo="Enfoque económico") Se enfoca en maximizar los beneficios financieros del turismo, creando empleos, aumentando los ingresos locales y promoviendo inversiones. Este enfoque incluye la diversificación de actividades turísticas para asegurar ingresos sostenibles y la implementación de políticas que fomenten la equidad económica.

        img.col-xl-4.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src='@/assets/curso/temas/tema4/img-03.svg', alt='Rutinas de limpieza')
    
    p.mb-5 Al combinar estos enfoques, la planificación turística puede adaptarse de manera integral, logrando un equilibrio entre el desarrollo económico, la sostenibilidad ambiental y el bienestar social. Esto permite que los destinos sean atractivos, responsables y resilientes a largo plazo.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2. Métodos y herramientas

    p.mb-5 La planificación turística requiere la aplicación de métodos y herramientas que permitan analizar, organizar y proyectar las estrategias de desarrollo. Estas herramientas facilitan una comprensión integral de las dinámicas turísticas, optimizando la toma de decisiones y garantizando un desarrollo sostenible. A continuación, se describen los principales métodos y herramientas utilizados:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <i>Métodos y herramientas utilizados</i>
        .tabla-a.clstabla.color-acento-contenido.mb-5(alt='En la tabla 1 se presentan las herramientas empleadas en la planificación turística, tales como: la Matriz DOFA, la investigación de mercado, el mapeo de recursos y modelos de proyección para analizar, planificar y gestionar destinos de manera estratégica y sostenible.')
          table
            thead
              tr
                th(style="width:20%") Métodos y herramientas
                th(style="width:50%") Características

            tbody
              tr(style="background-color: #F6F6F6")
                td.text-center #[b Matriz DOFA (FODA)]
                td Permite identificar las fortalezas, oportunidades, debilidades y amenazas relacionadas con el destino turístico. Esta matriz proporciona una visión estratégica de los factores internos (fortalezas y debilidades) y externos (oportunidades y amenazas) que pueden influir en el éxito del destino, orientando las acciones hacia la maximización de ventajas y la mitigación de riesgos.

              tr
                td.text-center #[b Investigación de mercado]
                td Consiste en la recopilación y análisis sistemático de datos sobre los turistas, incluyendo sus preferencias, motivaciones, comportamientos y perfiles demográficos. Esta información es esencial para diseñar estrategias alineadas con las demandas del mercado y para anticiparse a cambios en las tendencias turísticas.

              tr(style="background-color: #F6F6F6")
                td.text-center #[b Mapeo de recursos]
                td Identifica, clasifica y evalúa los recursos naturales, culturales y económicos disponibles en el destino. Esta herramienta ayuda a determinar el potencial de cada recurso para enriquecer la oferta turística, promoviendo la diversificación y una gestión responsable de los recursos.

              tr
                td.text-center #[b Modelos de proyección]
                td Utiliza técnicas predictivas, como análisis de tendencias y simulaciones, para anticipar el crecimiento del turismo y sus impactos en el destino. Estos modelos son fundamentales para la planificación estratégica a corto, mediano y largo plazo, ayudando a prever escenarios y a establecer medidas proactivas.

              tr(style="background-color: #F6F6F6")
                td.text-center #[b Sistemas de Información Geográfica (SIG)]
                td Proveen mapas y análisis espaciales que permiten visualizar la distribución de recursos, identificar zonas vulnerables o de alto potencial turístico, y gestionar el uso del suelo. Esta herramienta facilita la planificación territorial y asegura un desarrollo equilibrado y sostenible.
              
              tr
                td.text-center #[b Indicadores de sostenibilidad]
                td Miden el impacto del turismo en aspectos clave como el medio ambiente, la economía y la sociedad. Estos indicadores permiten evaluar la efectividad de las estrategias implementadas y realizar ajustes para garantizar la sostenibilidad del destino.

    p.mb-5 El uso combinado de estos métodos y herramientas proporciona una base sólida para la planificación turística, asegurando que las decisiones se tomen de manera informada, estratégica y orientada al logro de un desarrollo sostenible.

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3. Medición de sostenibilidad turística

    p La medición de la sostenibilidad turística es esencial para evaluar el impacto de las actividades turísticas en los ámbitos económico, social y ambiental, y para garantizar un desarrollo responsable. Este proceso se basa en el uso de indicadores clave que permiten identificar áreas de mejora, evaluar el desempeño y establecer estrategias que equilibren el crecimiento turístico con la conservación de los recursos y el bienestar de las comunidades.
    p.mb-5 A continuación, se describen indicadores clave de sostenibilidad:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-04.svg' alt='AvatarTop')
          h4.text-center Consumo de recursos naturales
          p.text-center Monitoreo del uso de agua, energía y otros recursos esenciales. Por ejemplo, el seguimiento del consumo hídrico en hoteles permite implementar medidas de eficiencia.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-05.svg' alt='AvatarTop')
          h4.text-center Emisiones de carbono
          p.text-center Medición de la huella de carbono generada por el transporte, alojamientos y actividades turísticas. Un destino puede reducir emisiones promoviendo el uso de transporte público o bicicletas.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-06.svg' alt='AvatarTop')
          h4.text-center Generación de empleo
          p.text-center Evaluación de la cantidad y calidad de los empleos generados por el turismo, asegurando que sean inclusivos y beneficien a la comunidad local.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-4
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img-07.svg' alt='AvatarTop')
          h4.text-center Preservación cultural
          p.text-center Análisis del impacto del turismo en tradiciones locales, artesanías y patrimonio histórico. Por ejemplo, la creación de rutas turísticas en sitios arqueológicos puede incluir programas de conservación y educación para los visitantes.
      
    p.mb-5 La medición de la sostenibilidad turística es esencial para evaluar el impacto de las actividades turísticas en los ámbitos económico, social y ambiental, y garantizar un desarrollo responsable. En este contexto, es importante identificar las herramientas de medición más utilizadas:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img-08.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Índice de Sostenibilidad Turística
            p.text-center.mb-0.px-3 Permite analizar el desempeño de un destino en términos de gestión ambiental, impacto social y beneficios económicos.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img-09.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Evaluaciones de Impacto Ambiental (EIA)
            p.text-center.mb-0.px-3 Identifican los efectos de las actividades turísticas sobre el medio ambiente y sugieren medidas correctivas.

      .col-xxl-4.col-lg-6.col-sm-10.col-md-8.mb-xxl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema4/img-010.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG04
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 Encuestas de percepción comunitaria
            p.text-center.mb-0.px-3 Recogen opiniones de la población local sobre los beneficios y problemas asociados al turismo, permitiendo ajustes en la planificación.

    p.mb-5 Al complementar estas herramientas con indicadores clave como el consumo de recursos naturales, las emisiones de carbono y la preservación cultural, es posible diseñar estrategias que equilibren el crecimiento turístico con la conservación de los recursos y el bienestar de las comunidades.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        .cajon.cajon.color-primario.p-4
          p.mb-0 #[b Ejemplo práctico:] un destino que integra la medición de sostenibilidad podría implementar sistemas de reciclaje en hoteles, medir el impacto económico del turismo en la economía local y promover actividades como visitas guiadas por residentes, que conecten a los turistas con la cultura local mientras generan ingresos para la comunidad.




</template>

<script>
export default {
  name: 'Tema4',
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

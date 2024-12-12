export default {
  global: {
    componenteFormativo:
      'Desarrollo de oportunidades turísticas en el territorio',
    descripcionCurso:
      'Esta unidad temática explora estrategias sostenibles para desarrollar oportunidades turísticas en el territorio, abarcando modelos de gestión, criterios de valoración, planificación y manejo estratégico. Además, analiza impactos, efectos y enfoques innovadores como el turismo regenerativo, proporcionando herramientas para la toma de decisiones responsables y efectivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Modelos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gestión en los destinos turísticos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Turismo sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Criterios de valoración',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Código de turismo',
            hash: 't_3_2',
          },
          {
            numero: '2.3',
            titulo: 'Cartas de turismo sostenible',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Turismo regenerativo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Desarrollo turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Impactos del turismo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Efectos del turismo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Participación comunitaria en el desarrollo turístico',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planificación turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Enfoques',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Métodos y herramientas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Medición de sostenibilidad turística',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrategia aplicada al turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Proceso de manejo estratégico en los territorios',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Toma de decisiones',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Herramientas',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Análisis de mercado turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Identificación de tendencias',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Segmentación y demanda turística',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Innovación y tecnología en turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Herramientas digitales para la promoción de destinos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tendencias innovadoras en la industria turística',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Turismo sostenible',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2024). Turismo sostenible y competitivo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I9o_FeS2oGM',
    },
    {
      tema: '6.2. Segmentación y demanda turística',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Los tipos de demanda en el mercado [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kmVVqcr17hM',
    },
    {
      tema: '7. Innovación y tecnología en turismo',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Estrategia de innovación [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fI8HASIil-s',
    },
  ],
  glosario: [
    {
      termino: 'Desarrollo sostenible',
      significado:
        'modelo de crecimiento que satisface las necesidades actuales sin comprometer los recursos necesarios para futuras generaciones.',
    },
    {
      termino: 'Economía circular',
      significado:
        'modelo económico que reduce el desperdicio y mantiene los recursos en uso, promoviendo la eficiencia y la sostenibilidad.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'efecto de las actividades humanas sobre el medio ambiente, incluyendo el uso de recursos, emisiones y residuos generados.',
    },
    {
      termino: 'Inclusión social',
      significado:
        'principio que promueve la participación equitativa de todos los grupos en la sociedad, reduciendo desigualdades y asegurando acceso a servicios básicos.',
    },
    {
      termino: 'Indicadores de desempeño',
      significado:
        'métricas usadas para evaluar el éxito de iniciativas turísticas en áreas como ocupación, ingresos y satisfacción del visitante.',
    },
    {
      termino: 'Modelo de Capital Natural',
      significado:
        'enfoque que sugiere gestionar los recursos naturales manteniendo su capacidad regenerativa para un uso sostenible a largo plazo.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'integración de las comunidades locales en la toma de decisiones sobre proyectos que afectan su territorio y cultura.',
    },
    {
      termino: 'Planificación turística',
      significado:
        'proceso de organizar y gestionar el desarrollo turístico para maximizar beneficios y minimizar efectos negativos en el entorno y la comunidad.',
    },
    {
      termino: 'Turismo regenerativo',
      significado:
        'enfoque turístico que busca no solo minimizar el impacto ambiental, sino restaurar y mejorar los ecosistemas y comunidades locales afectadas.',
    },
    {
      termino: 'Turismo sostenible',
      significado:
        'turismo que minimiza el impacto negativo en el entorno natural y cultural, promoviendo beneficios económicos y sociales para las comunidades locales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asana.com. (2022). 6 pasos para crear la mejor estrategia creativa.',
      link: 'https://asana.com/es/resources/creative-strategy',
    },
    {
      referencia:
        'Avecintel. (s. f.). ¿Qué debemos entender por turismo sostenible?',
      link:
        'https://www.misrevistas.com/avecintel/notas/241/que-debemos-entender-por-turismo-sostenible',
    },
    {
      referencia:
        'Comisión Mundial sobre el Medio Ambiente y el Desarrollo. (1987). Nuestro futuro común. Oxford University Press.',
    },
    {
      referencia: 'Cuales.FM. (2016). Dimensiones del desarrollo sustentable.',
      link:
        'https://www.cuales.fm/wp-content/uploads/2016/02/dimensiones-desarrollo-sustentable.png',
    },
    {
      referencia:
        'Ramírez, J. (2021). Desarrollo turístico en Colombia: Un enfoque estratégico. Editorial Pontificia Universidad Javeriana.',
    },
    {
      referencia:
        'Rojas, C. (2017). Territorio y desarrollo sostenible en Colombia. Editorial Pontificia Universidad Javeriana.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Carlos Camargo Solano',
          cargo: 'Experto temático',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

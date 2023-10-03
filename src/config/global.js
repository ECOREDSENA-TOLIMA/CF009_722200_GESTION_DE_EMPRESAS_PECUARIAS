export default {
  global: {
    componenteFormativo: 'Programa de producción en la empresa pecuaria',
    descripcionCurso:
      'La producción pecuaria es un proceso de transformación de los recursos entregados por el sector primario de la economía que va ligado a la naturaleza, específicamente se obtienen productos como carne, leche, lana, huevos, miel, entre otros, para satisfacer necesidades como la alimentación, este proceso de producción es resultado del trabajo del ser humano y utilización de recursos económicos.',
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
        titulo: 'Programa de producción pecuaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Procesos y procedimientos de producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plan de mercadeo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cronograma de actividades',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Presupuesto',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Evaluación e indicadores',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Control de calidad',
            hash: 't_1_6',
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/CFA_09_722200.zip',
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
      tema: '1.7. Evaluación e indicadores',
      referencia:
        'Hoyos, E., y Henao, I. (2020). Propuesta de plan de mercadeo para una empresa agroavícola para el periodo 2020',
      tipo: 'Trabajo de Grado',
      link:
        'https://www.engormix.com/agricultura/gerenciar-empresa-agropecuaria/como-armar-plan-negocios_a27599/',
    },
  ],
  glosario: [
    {
      termino: 'Estrategia',
      significado:
        'Proceso o actividad en la cual se centrar todos los recursos y por medio del cual la empresa logra los resultados esperados.',
    },
    {
      termino: 'Indicador',
      significado:
        'Instrumento que permite la medición del cumplimiento de una condición, actividad o resultado especifico, un indicador debe tener relación entre dos variables, ya que a partir de allí se puede determinar si obtuvo resultados o no.',
    },
    {
      termino: 'KPI',
      significado:
        'Indicadores que permiten evaluar las acciones y el desempeño de una estrategia de <em>marketing.</em>',
    },
    {
      termino: 'Mapas de proceso',
      significado:
        'Diagrama de valor que representa, a manera de inventario gráfico.',
    },
    {
      termino: 'Plan de mercadeo',
      significado:
        'Documento escrito donde se plantea la manera en la que la organización pretende alcanzar sus objetivos de mercadeo, involucrando actividades, estrategias, costos, recursos y talento.',
    },
    {
      termino: 'Procedimiento',
      significado: 'Método o modo de tramitar o ejecutar una cosa.',
    },
    {
      termino: 'Reproducción',
      significado:
        'Proceso biológico que permite la producción de nuevos organismos y que es común a todas las formas de vida.',
    },
    {
      termino: 'Silvopastoreo',
      significado:
        'Manejo de árboles, ganado y pastos en un sistema integrado.',
    },
  ],
  referencias: [
    {
      referencia: 'Abolafio, M. (s.f.). Qué es un mapa de procesos.',
      link: 'https://blog.edenred.es/que-es-mapa-de-procesos/',
    },
    {
      referencia:
        'Hernández Malueños, L. G. (2020). Los sistemas pecuarios: recursos, procesos y productos (1a ed.). Managua: UNA.',
      link: 'https://repositorio.una.edu.ni/4325',
    },
    {
      referencia:
        'Hoyos, R. (2019). Plan de marketing. Diseño, implementación y control con enfoque en gerencia de mercadeo. Ecoe Ediciones.',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=&pg=&ed',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2019). Principios de marketing. Pearson.',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=&pg=&ed',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2017). Marco nacional de cualificaciones Colombia. Sector agropecuario. Ministerio de Educación Nacional.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Marcela Luis Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñadora y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyborad e Ilustración',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelsón Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Livtin',
          cargo: 'Animador',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
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

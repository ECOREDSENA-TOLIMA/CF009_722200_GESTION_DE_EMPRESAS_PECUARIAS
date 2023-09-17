<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Programa de producción

    p.mb-5 Para lograr el éxito productivo en los sistemas pecuarios, es necesaria la mejora continua de las prácticas productivas implementadas con el uso de la tecnología, de esta manera se garantiza que los procesos de formación y capacitación a los trabajadores sean más eficaces, la planeación de la producción tenga metas claras, y que el aprovechamiento de los recursos naturales sea el adecuado para no afectar los ecosistemas presentes en las fincas de producción. Todo este proceso garantizará una producción exitosa, mejorando los ingresos de los productores y mejorando la calidad de vida de sus colaboradores. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-8.col-12
        .cajon.color-primario.p-3(style="background-color:#E4E8E1")
          p.mb-0 Los programas se deben establecer de acuerdo con el alcance de cada productor, ya sea para la producción destinada al autoconsumo, como también, una producción a mayor escala para llegar a un consumo regional o nacional, o la producción para exportación. En los tres casos, se necesitan conocimientos previos y una política nacional que garantice, que, en los tres ejes destinados a la producción pecuaria, existan oportunidades reales para el ejercicio productivo y que tenga un fin beneficioso para los productores.
      .col-md-4.col-12 
        img(src="@/assets/curso/temas/tema1/img-1.png")

    Separador 

    #t_1_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.1 Procesos y procedimientos de producción

    .row.mb-5
      .col-md-2(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img-2.png' alt='')
      .col-md-10(data-aos="fade-right")
        p Para la planificación de los procesos se hace necesario diseñar e implementar sistemas de trabajo que generen los productos deseados en las cantidades y tiempos previstos, y con costos aceptables. Durante el desarrollo de los procesos intervienen factores del ambiente de mercado y tecnología de la organización, lo que se fusionan en una actividad eficiente.
        .cajon.color-primario.p-4(style="background-color:#E4E8E1")
          p.mb-0 Un análisis de los sistemas pecuarios y sus procesos, debería ayudar a establecer las combinaciones de actividades que permitan obtener utilidades satisfactorias durante un periodo determinado. Esto implica conocer las relaciones que deben existir entre ellas para analizar si estudiar el conflicto, o competencia entre ciertas actividades. Por ejemplo, se requiere analizar la competencia entre forrajes por el uso del suelo a cultivar, así para aumentar la superficie dedicada a otro. Otro caso similar puede ser la competencia entre rubros por mano de obra en la época de mayor producción.

    p.mb-5 Para complementar la información sobre procesos y procedimientos de producción, ver el siguiente vídeo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/G9x5U2UKRzo" title="Programa de producción en la empresa pecuaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row
      .col-lg-7
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2(data-aos="fade-left")(style="color:#ffff") Etapas proceso de producción

    p.mb-4 Las etapas para el proceso de producción en la gestión de empresas pecuarias para con base en la capacidad de proceso y los requerimientos de mercadeo, a tener en cuenta son:

    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | <strong>Alimentación</strong>

    p.mb-5 Es el proceso mediante el cual los animales consumen los alimentos previamente establecidos por el productor para proporcionar los nutrientes necesarios que garanticen un crecimiento sano de los animales en ciclos establecidos en la planificación de los sistemas de producción.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Factores del proceso de alimentación</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-3-1.svg', alt='')  

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Factores del proceso de alimentación</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-3-2.svg', alt='')  

    p.mb-5 Entre los factores que influyen en la alimentación se encuentran la digestión y la nutrición, es por eso importante conocer cómo estos inciden en el desarrollo de los animales.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1" data-aos="fade-down-left")
      .row(titulo="Necesidades nutritivas del animaL")
        .col-md-8.mb-4.mb-md-0
          p Se debe establecer la cantidad de alimento que necesita el animal para garantizar el desarrollo fisiológico y elevar el potencial de producción. 
          p Para ello, se establecen dos tipos de necesidades, la primera de mantenimiento y la segunda de producción.
          p Las necesidades de mantenimiento son los requerimientos de nutrición que las especies requieren para su desarrollo óptimo, es decir, la cantidad de nutrientes necesarios para las actividades diarias del animal. 
          p Por otra parte, las necesidades de producción son los requerimientos de nutrición para el desarrollo de los productos (leche, lana, huevos, músculos, etc.) que son la fase final del proceso ya sea para consumo o venta.
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img-4.png', alt='')

      .row(titulo="Digestión")
        .col-md-7.mb-4.mb-md-0
          p En la digestión de los alimentos no solo está direccionado el accionar del aparato digestivo, ya que para el procesamiento de los nutrientes se necesita la intervención de cuatro sistemas (sistema digestivo, sistema respiratorio, sistema circulatorio y sistema excretor).
          .tarjeta.color-acento-contenido.p-3.my-3(style="background-color:#FFFFFF")
            ul.lista-ul.mb-3
              li(style="color:#000")
                i.lista-ul__vineta(style="color:#000")
                | Sistema digestivo: encargado de realizar la captura, la ingestión, la digestión, la absorción y la expulsión de los sobrantes y desechos no necesarios para el proceso.
              li(style="color:#000") 
                i.lista-ul__vineta(style="color:#000")
                | Sistema respiratorio: encargado de realizar el intercambio gaseoso para la respiración celular. 
              li(style="color:#000") 
                i.lista-ul__vineta(style="color:#000")
                | Sistema circulatorio: encargado de realizar el transporte de los nutrientes a las células y de retirar los residuos metabólicos hacia los órganos excretores. 
              li(style="color:#000") 
                i.lista-ul__vineta(style="color:#000")
                | Sistema excretor: encargado de expulsar los residuos tóxicos, también regula el nivel de sales minerales y otros nutrientes al interior del cuerpo.
          
          p Es importante tener en cuenta el sistema digestivo de la especie a implementar, ya que se dividen en dos grupos, los monogástricos o de estómagos simples como los equinos, los cerdos y las aves en los que la fermentación microbiana tiene lugar en la parte distal del tracto digestivo (fermentación posgástrica); y los rumiantes como la vaca, las ovejas y cabras en los que la mayor parte de la fermentación microbiana de las plantas ingeridas tiene lugar en una región especializada del tracto anterior (fermentación pregástrica).
          p Los animales monogástricos consumen alimentos de muy alto valor nutritivo, pues son los que más van a aprovechar. Normalmente la dieta de estos es a base de cereales y harina de soya. En las aves el sistema digestivo es diferente ya que poseen un buche en el que almacenan y maceran el alimento, y una molleja que lo tritura y lo fragmenta.
          p En los rumiantes la digestión es diferente, ya que son capaces de utilizar alimentos bastos o fibrosos que no pueden digerir otros animales, poseen un aparato digestivo especializado en el que se destaca el rumen o panza.
            
          .bloque-texto-c.color-secundario.p-4(style="background-color:#E4E8E1")
            i.fas.fa-quote-right
            p.mb-2 Los alimentos fibrosos contienen gran proporción celulosa que es atacada y digerida en el rumen debido a la acción de los microorganismos que existen dentro de la panza. Como resultado de esta digestión se producen unidades más sencillas que pueden ser asimiladas y utilizadas por el animal.
            span - Reece, 2010
        
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/img-5.png', alt='')

      .row(titulo="Los alimentos")
        .col-md-8.mb-4.mb-md-0
          p Existen gran cantidad de alimentos que se pueden seleccionar dependiendo de la especie definida para la producción, entre los que se destacan los forrajes, alimentos proteínicos, complementos vitamínicos, complementos minerales y alimentos energéticos. 
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img-6.png', alt='')
      
    p.mb-5 En la producción pecuaria incorporar el consumo de pasto o especies de forraje en la alimentación, es una de las herramientas para mejorar la alimentación y la productividad, algunas de sus ventajas son:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Ventajas de la implementación del forraje</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-7-1.svg', alt='')  

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Ventajas de la implementación del forraje</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-7-2.svg', alt='') 

    p.mb-5 La implementación de un sistema de silvopastoreo,  mejorará la diversidad de alimentación y el aporte de los nutrientes a los animales.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em> Beneficios de implementación de árboles como alimento</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-8-1.svg', alt='')  

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em> Beneficios de implementación de árboles como alimento</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-8-2.svg', alt='') 

    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | <strong>Reproducción</strong>

    p.mb-5 La reproducción es el proceso fisiológico en el que los animales que han desarrollado sus aparatos reproductores se aparean para la perpetuación de la especie. Este proceso tiene varias fases y se da inicio en la gametogénesis, siguiendo con la fecundación, implantación del cigoto, gestación, lactancia, terminando con el destete en los mamíferos.

    TabsB.color-primario.mb-5
      .py-3.py-md-4(titulo="El ciclo estral")
        .row
          .col-md-6.mb-4.mb-md-0
            p <strong>Es el periodo de tiempo de celo,</strong> periodo en el cual el macho puede aparearse ya que la hembra está receptiva sexualmente. Los tiempos de este ciclo en algunas especies se relacionan a continuación. 
          
            .row.align-items-center
              .col-auto
                a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
                  span Ver tabla
                  .indicador--click(v-if="mostrarIndicador")

            ModalA(:abrir-modal.sync="modal1")
              .row 
                .col-md-12
                  .titulo-sexto.color-primario
                    p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Ciclo estral y ovulación en animales domésticos</em>
                  figure
                    img(src='@/assets/curso/temas/tema1/tabla-1.svg', alt='') 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-9.png', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Pubertad")
        .row
          .col-md-6.mb-4.mb-md-0
            p <strong>La pubertad</strong> es la etapa en la que el desarrollo de los órganos reproductores de los animales llega a la capacidad de reproducción, aunque no estén totalmente desarrollados así haya ovulación en las hembras y producción de esperma en los machos.
            p Existen procesos naturales que hacen variar los tipos de llegada de la pubertad en los animales jóvenes y tiene que ver con la interacción del sexo opuesto, niveles de nutrición adecuados, un clima propicio donde no exista un clima adverso. 
            p Otro factor determinante es la raza del animal, por ejemplo, en las razas bovinas los periodos de pubertad se presentan entre los 8 y 13 meses siendo más largo en razas como la <em>Holstein</em> y la <em>Aushire</em> que corresponde a 11 y 13 meses, respectivamente.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-9.png', alt='Texto que describa la imagen')
      
      .py-3.py-md-4(titulo="Fecundación")
        .row
          .col-md-6.mb-4.mb-md-0
            p Esta etapa del proceso se puede realizar de forma natural (monta del macho) o de forma artificial (inseminación), en los dos casos se debe garantizar que la hembra esté preparada para ello y que su producción de óvulos sea óptima. 
            p Los <strong>tiempos de fecundación</strong> son propios de cada especie, por ejemplo, en las cerdas pasan entre 14 y 16 días para que el embrión se instale en el útero, el mismo tiempo pasa en las ovejas y cabras; en las yeguas el periodo es más amplio llegando a los 60 días y en las vacas en tan solo de un mes (30 días).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-10.png', alt='Texto que describa la imagen')
      
      .py-3.py-md-4(titulo="Parto")
        .row
          .col-md-6.mb-4.mb-md-0
            p Un <strong>parto</strong> normal ocurre cuando las fuerzas expulsivas son suficientes para sacar al feto del canal pélvico, esto ocurre normalmente cuando el feto está en condiciones normales sin alteraciones genéticas y con el tamaño adecuado. En el parto se presentan tres procesos los cuales inician con las contracciones, seguido de la expulsión del feto y terminando con la expulsión de las membranas fetales.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-11.png', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Reproducción en aves")
        .row
          .col-md-6.mb-4.mb-md-0
            p En la industria avícola la <strong>reproducción de las aves</strong> se realiza de manera natural, en cambio la incubación de los huevos se hace de manera mecánica con la ayuda de máquinas que ayudan en el proceso, a diferencia de los productores pequeños en los que la incubación se realiza de manera natural. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-12.png', alt='Texto que describa la imagen')

    .tarjeta.color-acento-contenido.p-3.mb-5(data-aos="fade-down")(style="background-color:#DBF9BD")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/decorador-1.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color:#000") Los sistemas pecuarios: recursos, procesos y productos 
              p.text-small(style="color:#000") Los cambios de comportamiento para la reproducción varían de acuerdo a la especie. Más información en el siguiente documento: 

            .col-sm-auto
              a.boton.color-acento-contenido.texto-negro(:href="obtenerLink('/downloads/Copia_de_Los_sistemas_pecuarios_recursos_procesos_y_productos_hernandez_Malueños.pdf')" target="_blank")
                span Descargar
                i.fas.fa-download

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Proceso reproductivo en aves de corral </em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-13-1.svg', alt='')  

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Proceso reproductivo en aves de corral </em>
        figure
          img(src='@/assets/curso/temas/tema1/img-13-2.svg', alt='') 

    .row
      .col-lg-5
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2(data-aos="fade-left")(style="color:#ffff") Tipos de procesos

    p.mb-5 El tipo de proceso depende de la especie la cual se va a aprovechar, en la producción pecuaria existe una gran variedad de especies, las cuales necesitan sistemas de producción diferentes y del producto final que se busca obtener, ya sea leche, carne, pieles, lanas, etc.

    .row.mb-3.mb-5
      .col-md-4
        img(src='@/assets/curso/temas/tema1/img-14.png' alt='')
      .col-md-8
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | <strong>Procesos lácteos</strong>
        p Para entender el proceso del producto, se deberán conocer todas las fases del ciclo animal, iniciando por la lactación, que es el proceso fisiológico en el cual la hembra, a través de su glándula mamaria segrega un producto que se denomina leche.
        
        .cajon.color-primario.p-4(style="background-color:#E4E8E1")
          p.mb-0 La leche es un producto nutritivo tanto para las crías como para los seres humanos que se ha usado desde el inicio de la humanidad, al descubrir sus cualidades en el aporte de nutrientes. Los procesos de manejo se han ido modernizando, lo cual ha conllevado a la producción de diferentes clases de leches y derivados, como se describe a continuación.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Tabla 2.
        span <em>Tipos de leches</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/tabla-2.svg" data-aos="fade-left")

    p.mb-5 La calidad de la leche está relacionada directamente con la especie y la raza del animal, el proceso de crecimiento y la alimentación al que se expuso el animal es por eso que, desde la planificación de la cría se debe garantizar su nutrición para que el resultado sea el esperado. La leche, al ser un producto orgánico, está expuesta a diversos factores que pueden alterar su calidad. 

    .col-xl-10.mx-auto.mb-5.desktop
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 5.
        span <em>Factores que afectan la calidad de la leche</em>
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img-15.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-3(x="84%" y="53.5%" numero="+")
          p(style="color:#000") Tiene un efecto sobre el volumen de producción.

        .tarjeta.color-acento-contenido.p-3(x="92.5%" y="65%" numero="+")
          p(style="color:#000") Varía el promedio de concentración de grasa y proteína.

        .tarjeta.color-acento-contenido.p-3(x="92.5%" y="77.5%" numero="+")
          p(style="color:#000") Las enfermedades afectan la producción.

        .tarjeta.color-acento-contenido.p-3(x="84%" y="90%" numero="+")
          p(style="color:#000") Acción de la insulina que afecta el crecimiento.

        .tarjeta.color-acento-contenido.p-3(x="14%" y="53.5%" numero="+")
          p(style="color:#000") Aumento de temperaturas reducción en nutrientes y volumen de producción.

        .tarjeta.color-acento-contenido.p-3(x="8%" y="71%" numero="+")
          p(style="color:#000") Afecta directamente la concentración de nutrientes de leche.

        .tarjeta.color-acento-contenido.p-3(x="15%" y="89%" numero="+")
          p(style="color:#000") Cambiar la rutina de ordeño o el estrés del animal afecta la producción.

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Factores que afectan la calidad de la leche</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-16.svg', alt='') 

    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | <strong>Procesos cárnicos</strong>

    p La producción de carne tiene una alta demanda, ya que las necesidades de proteína son suplidas con la adición de este producto a la dieta diaria de una persona, por tal razón es el producto pecuario de mayor producción.
    p.mb-5 La carne contiene proteínas y aminoácidos, minerales, grasas y ácidos grasos, vitaminas y otros componentes básicos, así como pequeñas cantidades de carbohidratos. Desde el punto de vista nutricional, la importancia de la carne deriva de sus propiedades de alta calidad que contienen todos los aminoácidos esenciales, así como de sus minerales y vitaminas de elevada biodisponibilidad (FAO, 2019).  

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Tipos de carne</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-17-1.svg', alt='')  

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Tipos de carne</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-17-2.svg', alt='') 

    .row
      .col-lg-5
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2(data-aos="fade-left")(style="color:#ffff") Mapas del proceso

    p.mb-5 Los mapas de procesos son un mecanismo que representa gráficamente las relaciones que tienen los procesos en un sistema productivo; su principal objetivo es definir todas las acciones a realizar con sus respectivas responsabilidades y la información relevante de cómo llegar al producto final. 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 7.] <em>Ejemplo de mapa de proceso de la actividad agropecuaria</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-18.svg', alt='')
          figcaption Nota. Tomada de Ministerio de Educación (2017)

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/mapa_de_procesos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Descargar figura 7:</strong> Ejemplo de mapa de proceso de la actividad agropecuaria.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 8.] <em>Ejemplo de mapa de proceso de producción pecuaria</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-19.svg', alt='')
          figcaption Nota. Tomada de Ministerio de Educación (2017)

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/ganaderia_bovina.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Descargar figura 8:</strong> Ejemplo de mapa de proceso de producción pecuaria.

    #t_1_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.2 Plan de mercadeo

    p.mb-4 El plan de mercadeo define los objetivos a alcanzar, así como las estrategias,  que se entienden como las actividades a desarrollar para cumplir los objetivos; el plan de mercadeo va más allá de la publicidad y las ventas, pues busca satisfacer las necesidades del segmento de mercado definido al iniciar con el diseño del plan.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-md-8.col-12
        .cajon.color-primario.p-3.mb-4(style="background-color:#E4E8E1")
          p.mb-0 De esta manera el plan de mercadeo enfoca a cada organización en la definición idónea del mercado, invita a la organización a ser consciente del comportamiento del mercado al que se está enfrentando, conocerlo a profundidad y tener muy claro la demanda que tendrá su producto o servicio, dado que a partir de allí se proyecta la producción para dar respuesta al mercado definido.
        p Básicamente se puede concluir que el plan de mercadeo es el punto de partida del plan de producción y a partir de allí se inicia un proceso de comunicación de doble vía entre el área de mercadeo y producción, el área de mercadeo a partir del estudio e investigación de mercado realizada de manera pre operativa es quien pasa la información al área de producción de cuál es la cantidad de productos o servicios que debe realizar para satisfacer la demanda de los clientes proyectados de la organización, a su vez el área de producción identifica su capacidad instalada y define la cantidad real con la que puede responder a la demanda de mercado y a partir de allí se puede realizar ajustes o rediseñar estrategias establecidas por el área de mercadeo.
        p Para complementar la información sobre el plan de mercadeo, ver el siguiente vídeo:      
      .col-md-4.col-12 
        img(src="@/assets/curso/temas/tema1/img-20.png")

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/lpS6sY69J1E" title="Programa de producción en la empresa pecuaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_1_3.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.3 Cronograma de actividades 
    
    p El cronograma de actividades es la ruta de trabajo necesaria para cumplir con los objetivos del plan de mercadeo, el cronograma debe proyectarse para cada uno de los objetivos, debe ser definido en un periodo de tiempo anual, establecer actividades, relacionar fechas de inicio y de finalización de cada uno de las actividades y objetivos; finalmente el cronograma de actividades de mercadeo facilita la planeación y evita que se escape alguna información importante e incumplimiento en los tiempos.
    p.mb-5 Los objetivos y metas deben tener definidas y asociadas las acciones de marketing, esto facilita la construcción del cronograma, seguimiento y evaluación de los resultados alcanzados por el plan de mercadeo, los objetivos y metas deben ser realistas, de lo contrario será un poco importante el planteamiento del cronograma. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-10.col-12
        .cajon.color-primario.p-3(style="background-color:#E4E8E1")
          p.mb-0 Cuando las actividades están definidas y tienen responsables asignados a través de un cronograma es más probable que estas se cumplan a tiempo, ya que cada persona se encarga específicamente de su tarea teniendo al día cada una de ellas y facilitando la secuencia de las demás, impactando de manera positiva la productividad, no habrá actividades duplicadas, los tiempos y cuellos de botella reducirán y aumentara la eficiencia evidenciando todos estos factores en los resultados esperados.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Tabla 3.
        span <em>Diseño cronograma de actividades</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-21.svg" data-aos="fade-left")
      figcaption Nota. Tomada de “Propuesta plan de mercadeo para una empresa AGROAVÍCOLA” 

    Separador 

    #t_1_4.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.4  Presupuesto 

    p.mb-5 Diseñar un plan de mercadeo, establecer estrategias y definir actividades genera una elevada inversión para la organización, de esta manera se hace necesario diseñar un presupuesto, definir el costo y asignar el presupuesto a cada rubro del plan, esto garantiza el cumplimiento de los objetivos y una rentabilidad al máximo de la inversión realizada.

    .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El punto de partida y más importante de la creación del presupuesto es tener definidos los objetivos bajo el método SMART (específicos, medibles, alcanzable, realistas y definidos en el tiempo), a partir de allí la empresa debe hacer una estimación de los beneficios que tendrá a partir de la implementación de las estrategias, así como tener claro cuáles serán los ingresos y los egresos a partir de la implementación de estas para hacer un balance y una evaluación de los resultados. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-22.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El diseño del presupuesto debe hacerse desglosando cada una de las actividades y el gasto estimado para ellas, el valor asignado a cada una de estas debe incluir el valor del personal involucrado, software, herramientas, viáticos, creación de contenidos, mantenimientos y demás valores asociados específicos para cada actividad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-23.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En el momento que se aprueba el presupuesto por la dirección de la organización, este se debe implementar y apoyar el desarrollo de cada una las actividades, sin embargo, es necesario tener un plan B en caso de ser necesario, pues es importante crear una reserva del presupuesto que ha sido aprobado.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-24.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            p Por si se debe hace un cambio de estrategias o un nuevo direccionamiento del plan, este tipo de acciones no son usuales, pero probablemente pueden generar algunos comportamientos en la economía o en el mercado que obligue a hacer este cambio. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-25.png', alt='')
    
    p.mb-5 La mejor manera de diseñar el presupuesto es proyectando los recursos utilizados mes a mes, de esta manera se puede hacer un seguimiento al porcentaje utilizado y restante de cada actividad, se puede tomar decisiones respecto a los recursos en cuanto a trasladarlos de una actividad a otra o suspender alguna de ellas.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Tabla 4.
        span <em>Presupuesto</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-26.svg" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-md-10.col-12
        .cajon.color-primario.p-3(style="background-color:#E4E8E1")
          p.mb-0 Para finalizar se sugiere que antes de dar inicio a la implementación del presupuesto, se genere un documento donde se explique cuáles son los valores asociados a cada actividad, cuál será el objetivo alcanzado con esta y los beneficios esperados en la ejecución de cada una de ellas.

    Separador 

    #t_1_5.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.5  Evaluación e indicadores

    p Es importante conocer y evaluar los factores que inciden en la producción pecuaria, porque permiten aplicar a tiempo acciones de mejorar, como también establecer estrategias. 
    p.mb-5 En la siguiente información puede observar aspectos importantes sobre evaluación e indicadores:

    .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El plan de mercado al tener definido un cronograma de actividades según lo establecen los pasos del <em>marketing</em> operativo, permite que el mismo se convierte en la hoja de ruta para hacer la evaluación de la ejecución el plan de <em>marketing,</em> algunos autores reconocen este proceso como auditoría de <em>“marketing”.</em> Esta auditoría permite hacer una evaluación amplia y sistemática de los objetivos, las estrategias y actividades implementadas, además de tenerlas en cuenta para elaborar el plan del año siguiente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-27.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Por ello, se hace necesario definir los mecanismos de control, los cuales se clasifican en tres tipos de controles básicos:
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | <strong>Control preventivo:</strong> Se hace antes del desarrollo de las actividades, anticipándose de alguna manera a futuros problemas.
              li 
                i.lista-ul__vineta
                | <strong>Control concurrente:</strong> Se realiza en el momento que se está desarrollando la actividad, permite corregir los errores de forma inmediata antes de que tengan un impacto negativo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-28.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | <strong>Control de retroalimentación:</strong> Se efectúa luego de finalizada la actividad, en este caso ya no se puede hacer ningún cambio ni corregir los problemas presentados, pero abre la puerta para implementar un plan de mejora para el desarrollo de actividades futuras.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-29.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | <strong>Plan de contingencia:</strong> Dentro de la evaluación y seguimiento como parte del control se sugiere diseñar también un plan de contingencia, también conocido como plan de emergencia. El diseño de este plan permitirá reaccionar de forma inmediata ante imprevistos que se presenten en la ejecución del plan de mercado y que pueden afectar de manera negativa y en gran medida a la empresa.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-30.png', alt='')

    h3 Indicadores de gestión

    p La manera en la que se debe evaluar y medir si la empresa está cumpliendo las metas y objetivos propuestos es a través de los KPI (Indicadores de gestión o indicador de desempeño). Los KPI se convierten en los instrumentos de evaluación que darán paso a la toma de decisiones correctas respecto a la implementación de las estrategias.
    p.mb-5 Los KIPI de <em>“marketing”</em> son necesarios para la empresa ya que permiten conocer si las estrategias diseñadas en el plan de mercado son las correctas, la adquisición de nuevos clientes y la interacción con los futuros clientes, estos indicadores están divididos en 4 categorías:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul2")
      .row(titulo="Indicadores por campaña")
        .col-md-6.mb-4.mb-md-0
          p Estos miden el comportamiento del público objetivo respecto a la campaña diseñada por la empresa ejemplo: costo por lead o prospecto, el lead es un cliente potencial del cual se ha obtenido el contacto.
      
        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img-31.png', alt='Texto que describa la imagen')
      
      .row(titulo="Indicadores de producto")
        .col-md-6.mb-4.mb-md-0
          p Este indicador muestra la aceptación de un producto o servicio de la empresa respecto a la competencia, el indicador más utilizado es el porcentaje de participación del producto en el mercado.

        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img-32.png', alt='Texto que describa la imagen')

      .row(titulo="Indicadores de “marketing” digital")
        .col-md-6.mb-4.mb-md-0
          p La tendencia actual es realizar inversión en estrategias de marketing digital para tener presencia en la web y atraer nuevos clientes por este canal de comunicación. Entre los indicadores más utilizados de esta categoría están: porcentaje de clientes influenciados por marketing, alcance de las redes sociales.

        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img-33.png', alt='Texto que describa la imagen')
      
      .row(titulo="Indicadores generales")
        .col-md-6.mb-4.mb-md-0
          p Estos se centran en medir la relación que existe entre el esfuerzo de la empresa y la inversión respecto a la adquisición de clientes, por ejemplo: costo de adquisición de un nuevo cliente e índice de satisfacción de los clientes con la marca.

        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema1/img-34.png', alt='Texto que describa la imagen')

    p.mb-5 A continuación, se muestra un ejemplo de dos indicadores de un plan de mercado de granjas avícolas.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Tabla 5.
        span <em>Indicadores de evaluación plan de mercado</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema1/img-35.svg" data-aos="fade-left")
      figcaption Nota. Tomada de Propuesta plan de mercadeo para una empresa AGROAVÍCOLA 

    p.mb-5 Como ejemplo de indicadores, se invita a ver el siguiente vídeo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/olkrrqKWp5E" title="Programa de producción en la empresa pecuaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador 

    #t_1_6.titulo-segundo.color-primario(data-aos="fade-right")
      h2 1.6.	Control de calidad

    p La calidad de un producto o servicio va ligado directamente al éxito de una organización, es necesario que sus procesos estén encaminados a brindar lo mejor de cada uno de estos a los clientes, esto garantiza procesos de recompra, recomendación y posicionamiento en el mercado.
    p.mb-5 El control de calidad en el sector pecuario debe realizarse de manera consciente e involucrando colaboradores con un alto compromiso, pues los productos resultantes de las actividades comerciales pecuarias están direccionados a satisfacer necesidades de primera línea como lo es la alimentación. Existen varios parámetros relacionados con la calidad dependiendo del tipo del producto, a continuación, se presentan algunos:

    SlyderB.mb-5(:datos="datosSlyder")

    p Una vez definidas e identificadas las etapas de producción se formulan las estrategias para la inclusión en el mercado local, nacional e internacional, de esta manera se establece la necesidad de un plan de mercadeo que tendrá como objetivo la llegada al consumidor final propendiendo por el mejoramiento continuo y el aseguramiento de la calidad de los productos ofertados, lo cual a la larga garantiza que el ciclo productivo sea eficaz y que la actividad pecuaria sea viable para el productor.





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    datosSlyder: [
      {
        titulo: 'Calidad de miel',
        texto:
          'Para este tipo de producto, se recomienda tener en cuenta los puntos críticos de pérdida de calidad los cuales se centran en la extracción para evitar una fermentación y pérdida de calidad, el análisis de calidad de miel debe hacerse por personas capacitadas estrictamente en esta actividad y es importante conocer que el color y el sabor de esta varía dependiendo la zona y el tipo de flor de donde es extraída.',
        imagen: require('@/assets/curso/temas/tema1/img-36.png'),
      },
      {
        titulo: 'Calidad de carnes',
        texto:
          'Para definir la calidad esperada por el consumidor, se sugiere tener en cuenta técnicas de evaluación de la calidad basadas en modalidad de muestreo y utilización de las muestras de carne, teniendo en cuenta factores de transporte, congelamiento y descongelamiento y preparación de las muestras, sin dejar de lado los atributos que determinan la calidad sensorial: color, aroma, sabor, terneza, jugosidad.',
        imagen: require('@/assets/curso/temas/tema1/img-37.png'),
      },
      {
        titulo: 'Calidad de productos lácteos',
        texto:
          'Para definir la calidad esperada por el consumidor, se sugiere tener en cuenta técnicas de evaluación de la calidad se basan en factores que afectan la calidad de quesos y los atributos que determinan la calidad sensorial: color, aroma, sabor, granulosidad.',
        imagen: require('@/assets/curso/temas/tema1/img-38.png'),
      },
      {
        titulo: 'Calidad de huevos',
        texto:
          'Se debe asegurar la calidad interna y externa; identificar cuáles son las causas de las posibles alteraciones en la calidad interna es una de las actividades más importantes para garantizar la calidad del huevo.',
        imagen: require('@/assets/curso/temas/tema1/img-39.png'),
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

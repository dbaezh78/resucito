// Este archivo contendrá la "base de datos" de todos los cantos.
/*Categorias Aceptadas.
- Vírgen María

- precatecumenado - catecumenado - eleccion - liturgia - entrada - paz - fraccion-del-pan 
- comunion        - final        - adviento - navidad  - pascua  - pentecostes
- aclamacion      - laudes       - penitencial         - salmodia
- nuevo-testamento               - antiguo-testamento  - cuaresma

*/
// Cada objeto en el array representa un canto.

/*
╔═══════════════════════════════════════════════════════════╗
║                A LA VICTIMA PASCUAL                       ║
╚═══════════════════════════════════════════════════════════╝  */

const allCantosData = [
    {
        id: "alavictimapascual", // Un ID único para el canto
        tt: "A la Víctima Pascual",
        title: "A la Víctima Pascual",
        subtitle: "Secuencia de Pascua - Himno lat. «Victimae paschall laudes»",
        category: ["Precatecumenado", "Pascua", "Pentecostés"],
        cejilla: "5",
        nCan: "", //Nota del canto = nCan
        dbno: "1",
        notes: "Este canto se usa en la liturgia de Pascua.",
        mant: "No",
        audioSrc: "/audio/alavictimapascual.mp3",
        // Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        // Propiedades para navegación entre cantos
        ant: "/resucito/", // No hay canto anterior para el primero
        sig: "/resucito/src/index.html?canto=anadiedemosocasiondetropiezo", // URL del siguiente canto
        // Datos específicos del canto, ahora referenciados aquí
         lizq: [
            { line: "A la víctima pascual, (La,m,18)(La,7,200)", sC: "tc" },
            { line: "ofrecemos hoy"},
            { line: "el sacrificio de alabanza. (Re,m9,186)"},
            { line: "El cordero ha redimido el rebaño, (Fa,maj7,27)(Mi,,280)"},
            { line: "el inocente ha reconciliado, (Re,m9,18)(Fa,,225)"},
            { line: "los pecadores al Padre, (Mi,,176)"},

            { line: "Muerte y vida se han enfrentado, (La,m,15)(La,7,101)", sC: "mt"},
            { line: "en un prodigioso duelo:, (Re,m9,186)"},
            { line: "el Señor de la Vida estaba muerto, (Fa,maj7,27)(Mi,,290)"},
            { line: "mas ahora está vivo y triunfa. (Re,m9,78)(Fa,,143)(Mi,,229)"},

            { line: "Dinos tú, María: (La,7,15)", sC: "mt"},
            { line: "¿qué has visto en el camino?, "},
            { line: "«La tumba de Cristo vacía, (Fa,maj7,27)(Mi,,228)"},
            { line: "la Gloria del Señor y vivo Cristo, (Re,m9,21)(Fa,,158)(Mi,,263)"},
            { line: "los ángeles, las vendas y el sudario». (Fa,,10)(Mi,,303)"},

        ], lder: [
            { line: "PORQUE CRISTO, MI ESPERANZA, (Fa,,115)", sC: "ta as"},
            { line: "¡HA RESUCITADO! (Mi,,130)", sC: "as"},
            { line: "Y NOS PRECEDE EN GALILEA, (Fa,,8)(Mi,,257)", sC: "as"},
            { line: "Y NOS PRECEDE EN GALILEA. (Fa,,8)(Mi,,257)", sC: "as"},

            { line: "SÍ QUE ES CIERTO,   (Re,m,15)(Mi,,125)", sC: "as mt"},
            { line: "CRISTO HA RESUCITADO. (Fa,maj 7,28)(Fa,,128)(Mi,,195)", sC: "as"},
            { line: "SÍ QUE ES CIERTO, (Re,m,10)(Mi,,198)", sC: "as"},
            { line: "CRISTO HA RESUCITADO. (Fa,,10)(Mi,,122)", sC: "as"},
            { line: "Y NOS PRECEDE EN GALILEA, (Fa,,10)(Mi,,254)", sC: "as"},
            { line: "Y NOS PRECEDE EN GALILEA. (Fa,,10)(Mi,,254)", sC: "as"},
            { line: "Tú, Rey victorioso, danos tú la salvación. (Fa,,10)(Mi,,356)", sC: "mt tc"},
        ]}
    ,
    /*
╔════════════════════════════════════════════════════════════════╗
║                A NADIE DEMOS OCASIÓN DE TROPIEZO               ║
╚════════════════════════════════════════════════════════════════╝  */
    {
        id: "anadiedemosocasiondetropiezo", // Un ID único para el canto
        tt: "A nadie demos ocasión de tropiezo",
        title: "A NADIE DEMOS OCASIÓN DE TROPIEZO",
        subtitle: "2ª Corintios 6,3ss",
        category: ["PreCatecumenado", "Pascua", "Pentecostés", "Comunión"],
        cejilla: "",
        // propiedad para la velocidad de desplazamiento segun equipo
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 },
            tablet: { velocidad: 7, incremento: 1 },
            desktop: { velocidad: 7, incremento: 1 }
        },
        // Propiedades para navegación entre cantos
        ant: "/resucito/src/index.html?canto=alavictimapascual",
        sig: "/resucito/src/html/atlmos.html?canto=atilevantomisojos",
        nCan: "Notas",
        dbno: "2",
        notes: "Este canto se usa en la liturgia de Pascua.",
        mant: "No",
        audioSrc: "/audio/anadiedemosocasiondetropiezo.mp3",
        lizq: [
            { line: "Hermanos, a nadie demos ocasión de tropiezo, (La,m,16)(Re,m,410)", sC: "tc" },
            { line: "hermanos, vivamos aceptando las tribulaciones, (Mi,,61) (La,m,412)" },
            { line: "necesidades, angustias y fatigas,   (Re,m,16) (Mi,,278)" },
            { line: "viviendo en pureza, paciencia y bondad, (Re,m,16) (Mi,,359)" },
            { line: "en el Espíritu Santo, y en el poder de Dios, (Fa,,152)(Mi,,381)" },
            { line: "con las armas de la justicia, (Fa,,229)" },
            { line: "las de la derecha y las de la izquierda. (Mi,,321)" },
            
            { line: "HERMANOS, A NADIE DEMOS (La,m,18)", sC: "mt ta as" },
            { line: "OCASIÓN DE TROPIEZO,    (Re,m,186)", sC: "as" },
            { line: "HERMANOS, VIVAMOS ACEPTANDO (Mi,,63)", sC: "as" },
            { line: "LAS TRIBULACIONES,  (La,m,149)", sC: "as" },
            { line: "NECESIDADES, ANGUSTIAS Y FATIGAS. (Re,m,18)(Mi,,322)", sC: "as" },

            { line: "En calumnias y en buena fama, (Re,m,15)(Mi,,257)", sC: "mt tc" },
            { line: "en gloria e ignominia, (Re,m,15) (Mi,,169)" },
            { line: "como pobres, aunque enriqueciendo a muchos; (Re,m,66) (Mi,,254)" },
            { line: "como quienes nada tienen, (Fa,,205)" },
            { line: "aunque lo poseemos todo. (Mi,,212)" },

            {   type: "collapsible-block",
                id: "asamblea_anadie_1",
                initialState: "collapsed",
                triggerLine: "HERMANOS, A NADIE DEMOS (La,m,18)", sC: "mt as ta",
                lines: [
                    { line: "OCASIÓN DE TROPIEZO, (Re,m,186)", sC: "as" },
                    { line: "HERMANOS, VIVAMOS ACEPTANDO (Mi,,63)", sC: "as" },
                    { line: "LAS TRIBULACIONES,  (La,m,148)", sC: "as" },
                    { line: "NECESIDADES, ANGUSTIAS Y FATIGAS. (Re,m,18)(Mi,,322)", sC: "as" },
                ]},
        ],
        lder: [
            { line: "Hermanos, os hemos hablado con franqueza, (La,7,13)(Re,m,392)", sC: "tc" },
            { line: "os hemos hablado en toda verdad. (Mi,,301)", sC: "" },
            { line: "No unciros al yugo desigual con los paganos. (Re,m,15) (Mi,,385)" },
            { line: "¿Qué participación hay entre el fiel y el infiel? (Re,m,15) (Mi,,414)" },
            { line: "¿Qué unión entre el santuario de Dios (Fa,,342) " },
            { line: "y el santuario de los ídolos? (Mi,,202)" },
            { line: "Porque somos el santuario de Dios. (Re,m,15) (Mi,,314) " },
            // Bloque de asamblea colapsado en lder
            
            {
                type: "collapsible-block",
                id: "asamblea_anadie_2",
                initialState: "collapsed",
                triggerLine: "HERMANOS, A NADIE DEMOS (La,m,18)", sC: "as mt ta",
                lines: [
                    { line: "OCASIÓN DE TROPIEZO, (Re,m,186)", sC: "as" },
                    { line: "HERMANOS, VIVAMOS ACEPTANDO (Mi,,63)", sC: "as" },
                    { line: "LAS TRIBULACIONES,  (La,m,148)", sC: "as" },
                    { line: "NECESIDADES, ANGUSTIAS Y FATIGAS. (Re,m,18)(Mi,,322)", sC: "as" },
                ]},

            { line: "Tengo plena confianza en el hablaros, (La,7,15) (Re,m,307)", sC: "mt tc" },
            { line: "porque estoy orgulloso de vosotros. (Mi,,283)" },
            { line: "No unciros al yugo desigual con los paganos. (Re,m,15) (Mi,,382)" },
            { line: "¿Qué participación hay entre el fiel y el infiel? (Re,m,15) (Mi,,415)" },
            { line: "¿Qué unión entre el santuario de Dios (Fa,,343)" },
            { line: "y el santuario de los ídolos? (Mi,,201)"  },

            {   type: "collapsible-block",
                id: "asamblea_anadie_2",
                initialState: "collapsed",
                triggerLine: "HERMANOS, A NADIE DEMOS (La,m,18)", sC: "as mt ta", lines: [
                    { line: "OCASIÓN DE TROPIEZO, (Re,m,186)", sC: "as" },
                    { line: "HERMANOS, VIVAMOS ACEPTANDO (Mi,,63)", sC: "as" },
                    { line: "LAS TRIBULACIONES,  (La,m,148)", sC: "as" },
                    { line: "NECESIDADES, ANGUSTIAS Y FATIGAS. (Re,m,18)(Mi,,322)", sC: "as" },
                ]},

            { line: "En pureza, paciencia y bondad, (Re,m,15) (Mi,,271)", sC: "mt tc" },
            { line: "en el Espíritu Santo, y en el poder de Dios. (Fa,,141) (Mi,,375)" },
        ]},
        /*
╔════════════════════════════════════════════════════╗
║                A TI LEVANTO MIS OJOS               ║
╚════════════════════════════════════════════════════╝  */

        //  
    {
        id: "atilevantomisojos", // Un ID único para el canto
        tt: "A ti levanto mis ojos",
        title: "A TI LEVANTO MIS OJOS",
        subtitle: "Salmo 123 (122)",
        category: ["PreCatecumenado", "Cuaresma", "Penitencial"],
        cejilla: "",
        // propiedad para la velocidad de desplazamiento segun equipo
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 },
            tablet: { velocidad: 7, incremento: 1 },
            desktop: { velocidad: 7, incremento: 1 },
        },
        // Propiedades para navegación entre cantos
        ant: "/resucito/src/index.html?canto=anadiedemosocasiondetropiezo",
        sig: "/resucito/src/index.html?canto=atisenorenmiclamorimploro",
        nCan: "Notas",
        dbno: "2",
        notes: "Este canto se usa en la liturgia de Pascua.",
        mant: "No",
        audioSrc: "/audio/atilevantomisojos.mp3",

        lizq: [
            { line: "A TI LEVANTO MIS OJOS, (Re,m,16)(La,7,189)", sC: "as tc" },
            { line: "A TI QUE HABITAS EN EL CIELO. (Sol,m,28)(La,7,260)", sC: "r1 as" },

            { line: "Como los ojos de los siervos,  (Re,m,15)", sC: "tc mt" },
            { line: "miran a las manos de sus señores,  (La,7,287)"},

            { line: "como los ojos de la esclava,(Sol,m,105)", sC: "mt"},
            { line: "a las manos de su señora,(La,7,216)"},

            { line: "así nuestros ojos miran al Señor,(Si♭,,12)(La,7,290)", sC: "mt"},

            { line: "esperando que tenga piedad, (Si♭,7,59)(La,7,255)", sC: "mt"},
            { line: "esperando que tenga piedad. (Si♭,7,59)(La,7,255)"},

            { line: "¡PIEDAD DE NOSOTROS, SEÑOR! (Re,m,86)(La,7,315)", sC:"mujeres as mt"},
            { line: "¡PIEDAD DE NOSOTROS, SEÑOR! (Si♭,,86)(La,7,315)", sC:"hombres as"},

            { line: "¡QUE DEMASIADO SE HAN BURLADO DE NOSOTROS (Re,m,130)(La,7,435)", sC:"mujeres as mt"},
            { line: "QUE NUESTRA ALMA ESTÁ SACIADA DE DESPRECIOS! (Si♭,7,150)(La,7,456)", sC:"hombres as"},

            { line: "¡DE LAS BURLAS DE LOS SATISFECHOS,(Re,m,100)(La,7,313)", sC:"mujeres as mt"},
            { line: "DEL DESPRECIO DE LOS SOBERBIOS!(Si♭,7,119)(La,7,282)", sC:"hombres as"},

            { line: "¡PIEDAD DE NOSOTROS, SEÑOR!, (Re,m,57)(La,7,286)", sC:"mujeres as mt"},
            { line: "¡PIEDAD DE NOSOTROS, SEÑOR!, (Si♭,7,57)(La,7,286)", sC:"hombres as"},

            {   type: "collapsible-block",
                id: "asamblea_anadie_1",
                initialState: "collapsed",
                triggerLine: "A TI LEVANTO MIS OJOS (Re,m,16)(La,7,189)", sC: "mt as ta",
                lines: [
                    { line: "A TI QUE HABITAS EN EL CIELO. (Sol,m,28)(La,7,260)", sC: "as" },
                ]},
        ],
        lder: [

        ]
    }
    ,
/*
╔════════════════════════════════════════════════════════════════╗
║                A TI, SEÑOR, EN MI CLAMOR IMPLORO               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "atisenorenmiclamorimploro",
        tt: "A ti, Señor, en mi clamor imploro",
        title: "A ti, Señor, en mi clamor imploro",
        subtitle: "Salmo 142 (141)",
        category: ["PreCatecumenado","Cuaresma","Antiguo Testamento"],
        cejilla: "2",
        nCan: "",
        dbno: "4",
        notes: "",
        mant: "No",
        audioSrc: "/audio/atisenorenmiclamorimploro.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/html/atlmos.html?canto=atilevantomisojos",
        sig: "/resucito/src/index.html?canto=atisenorlevantomialma",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "A TI, SEÑOR, EN MI CLAMOR IMPLORO,, (La,m,15)(Re,m,327)", sC: "as ta"},
            { line: "A TI, SEÑOR, EN MI CLAMOR SUPLICO,, (La,m,327)", sC: "as"},
            { line: "A TI DERRAMO MI LAMENTO,, (La,7,29)", sC: "as"},
            { line: "A TI MI ANGUSTIA EXPONGO. , (Fa,,29)(Mi,,222)", sC: "as"},
            
            { line: "Siento que el espíritu en mí se apaga, , (Re,m,15)", sC: "mt tc"},
            { line: "más tú conoces mi sendero. , (Mi,7,239)", sC: ""},
            { line: "Mira, Señor, que en el camino,, (La,m,15)(Re,m,250)", sC: "mt"},
            { line: "mira, Señor, que me han tendido un lazo. , (La,m,263)", sC: ""},
            { line: "Mira, Señor, que a la derecha no hay ninguno,, (Mi,,95)(Mi,7,401)", sC: ""},
            { line: "ninguno que me conozca. , (Fa,m,55)(La,m,214)", sC: ""},
            { line: "Que huye de mí todo consuelo,, (Re,m,15)", sC: ""},
            { line: "que no hay nadie que se cuide de mi alma., (Fa,m,135)(Mi,7,370)", sC: ""},

            { line: "A TI, YO CLAMO SEÑOR,, (La,m,15)(Sol,,199)", sC: "ta as mt"},
            { line: "A TI, YO DIGO: TÚ SOLO ERES MI REFUGIO,, (Mi,7,250)", sC: "as"},
            { line: "TÚ ERES MI PORCIÓN EN ESTA TIERRA,, (Fa,,15)", sC: "as"},
            { line: "MI ÚNICA FELICIDAD., (Mi,,178)", sC: "as"},
    ], lder: [
            { line: "Escúchame, Señor, que estoy llorando,, (Re,m,15)(Mi,,318)", sC: "tc"},
            { line: "estoy tan deprimido., (Fa,,32)(Mi,,166)", sC: ""},
            { line: "¡Líbrame tú de estos enemigos, (Fa,,15)", sC: ""},
            { line: "que son más fuertes que yo!, (Sol,,58)(Mi,,258)", sC: ""},
            { line: "¡Saca mi alma de esta cárcel, (La,m,15)", sC: ""},
            { line: "y yo daré gracias a tu Nombre!, (Sol,,11)(Mi,,228)", sC: ""},
            { line: "En torno a mí los santos harán corro,, (Re,m,48)", sC: ""},
            { line: "me felicitarán por tu favor hacia mí. , (Fa,,115)(Mi,,331)", sC: ""},
  
            { type: "collapsible-block",
                id: "asamblea_anadie_1",
          initialState: "collapsed",
           triggerLine: "A TI, SEÑOR, EN MI CLAMOR IMPLORO,, (La,m,15)(Re,m,327)", sC: "mt as ta", lines: [
            { line: "A TI, SEÑOR, EN MI CLAMOR SUPLICO,, (La,m,327)", sC: "as"},
            { line: "A TI DERRAMO MI LAMENTO,, (Mi,7,29)", sC: "as"},
            { line: "A TI MI ANGUSTIA EXPONGO. , (Fa,m,29)(Mi,,222)", sC: "as"},  ]},
 
            { type: "collapsible-block",
                id: "asamblea_anadie_2",
          initialState: "collapsed",
       triggerLine: "A TI, YO CLAMO SEÑOR,, (La,m,15)(Sol,,199)", sC: "mt as ta", lines: [
            { line: "A TI, YO DIGO: TÚ SOLO ERES MI REFUGIO,, (Mi,7,250)", sC: "as"},
            { line: "TÚ ERES MI PORCIÓN EN ESTA TIERRA,, (Fa,,15)", sC: "as"},
            { line: "MI ÚNICA FELICIDAD., (Mi,,178)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: A Ti, Señor, En Mi Clamor Imploro
// SIGUIENTE CANTO DEBAJO 

/*
╔════════════════════════════════════════════════════════════════╗
║                A TI, SEÑOR, LEVANTO MI ALMA                    ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "atisenorlevantomialma",
        tt: "A Ti, Señor, Levanto Mi Alma",
        title: "A Ti, Señor, Levanto Mi Alma",
        subtitle: "Salmo 25 (24)",
        category: ["PreCatecumenado","Cuaresma","Antiguo Testamento"],
        cejilla: "3",
        nCan: "",
        dbno: "5",
        notes: "",
        mant: "No",
        audioSrc: "/audio/atisenorlevantomialma.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=atisenorenmiclamorimploro",
        sig: "/resucito/src/index.html?canto=atisenorsedebelaalabanzaension",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "A TI, SEÑOR, LEVANTO MI ALMA,, (La,m,15)(Mi,,250)", sC: "ta as"},
            { line: "A TI, OH DIOS MÍO., (Re,m,60)(Fa,,94)(Mi,,159)", sC: "as"},

            { line: "En ti confío, Señor,, (La,m,16)(Mi,,154)", sC: "mt tc"},
            { line: "no triunfen sobre mí mis enemigos., (Re,m,215)(Fa,,250)(Mi,,293)", sC: ""},
            { line: "Muéstrame, Señor, tu camino,, (La,m,15)(Mi,,255)", sC: ""},
            { line: "enséñame, Señor, tu sendero., (Re,m,186)(Fa,,222)(Mi,,254)", sC: ""},

            { type: "collapsible-block",
                id: "asamblea_anadie_1",
          initialState: "collapsed",
           triggerLine: "A TI, SEÑOR, LEVANTO MI ALMA, (La,m,15)(Mi,,250)", sC: "mt as ta", lines: [
                { line: "A TI, OH DIOS MÍO., (Re,m,60)(Fa,,94)(Mi,,159)", sC: "as"},  ]},            

            { line: "Acuérdate, Señor, de tu ternura,, (La,m,15)(Mi,,270)", sC: "mt tc"},
            { line: "de tu inmensa compasión, que son de siempre., (Re,m,275)(Fa,,315)(Mi,,393)", sC: ""},
            { line: "De mis pecados, Señor, no te acuerdes,, (La,m,15)(Mi,,322)", sC: ""},
            { line: "acuérdate, Señor, que eres misericordia., (Re,m,192)(Fa,,239)(Mi,,339)", sC: ""},
            { line: "Rocíame, Señor, de tu misericordia., (Fa,,37)(Mi,,291)", sC: "mt"},
            { line: "Sumérgeme, Señor, en tu misericordia., (Fa,,51)(Mi,,323)", sC: ""},

            { type: "collapsible-block",
                id: "asamblea_anadie_2",
          initialState: "collapsed",
           triggerLine: "A TI, SEÑOR, LEVANTO MI ALMA, (La,m,15)(Mi,,250)", sC: "mt as ta", lines: [
                { line: "A TI, OH DIOS MÍO., (Re,m,60)(Fa,,94)(Mi,,159)", sC: "as"},  ]},

    ], lder: [

]}, // ULTIMA LINEA DEL CANTO: A TI, SEÑOR, LEVANTO MI ALMA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                A TI, SEÑOR, SE DEBE LA ALABANZA EN SIÓN               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "atisenorsedebelaalabanzaension",
        tt: "A Ti, Señor, Se Debe La Alabanza En Sión",
        title: "A Ti, Señor, Se Debe La Alabanza En Sión",
        subtitle: "Salmo 65 (64)",
        category: ["PreCatecumenado","Penitencial"],
        cejilla: "3",
        nCan: "",
        dbno: "6",
        notes: "",
        mant: "No",
        audioSrc: "/audio/atisenorsedebelaalabanzaension.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=atisenorlevantomialma",
        sig: "/resucito/src/index.html?canto=abbapadre",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "A ti, Señor, se debe la alabanza, en Sión., (Re,m,15)(La,7,364)", sC: ""},
            { line: "A ti se te cumple el voto, en Jerusalén., (Re,m,342)", sC: ""},
            { line: "A ti que escuchas la oración,, (Sol,m,28)(Re,m,246)", sC: ""},
            { line: "viene todo mortal, viene todo mortal., (La,7,156)(Re,m,330)", sC: ""},

            { line: "A TI QUE ESCUCHAS LA ORACIÓN, (Si♭,,8)(La,7,297)", sC: "mt as"},
            { line: "VIENE TODO MORTAL,, (Si♭,,25)", sC: "as"},
            { line: "VIENE TODO MORTAL., (La,7,189)", sC: "as"},

            { line: "Pesan sobre nosotros nuestros pecados,, (Re,m,15)(La,7,340)", sC: "mt"},
            { line: "mas tú perdonas nuestras culpas., (Re,m,273)", sC: ""},
            { line: "Dichoso el que tú eliges, el que tú llamas,, (La,7,345)", sC: ""},
            { line: "vivirá en tus atrios., (Re,m,137)", sC: ""},
            { line: "A ti que escuchas la oración,, (Sol,m,31)(Re,m,247)", sC: "mt"},
            { line: "viene todo mortal, viene todo mortal., (La,7,158)(Re,m,333)", sC: ""},
  
            { type: "collapsible-block",
                id: "asamblea_anadie_1",
          initialState: "collapsed",
           triggerLine: "A TI QUE ESCUCHAS LA ORACIÓN, (Si♭,,8)(La,7,297)", sC: "mt as ta", lines: [
            { line: "VIENE TODO MORTAL,, (Si♭,,25)", sC: "as"},
            { line: "VIENE TODO MORTAL., (La,7,189)", sC: "as"},  ]},
 
    ], lder: [
            { line: "Nos saciaremos de los bienes de tu casa,, (Re,m,15)(La,7,361)", sC: ""},
            { line: "de la santidad de tu templo., (Re,m,214)", sC: ""},
            { line: "Con los prodigios de tu amor tú nos hablas,, (La,7,360)", sC: ""},
            { line: "con los portentos de tu justicia nos respondes., (Re,m,380)", sC: ""},

            { line: "A ti que escuchas la oración,, (Sol,m,31)(Re,m,246)", sC: "mt"},
            { line: "viene todo mortal, viene todo mortal., (La,7,156)(Re,m,331)", sC: ""},
  
            { type: "collapsible-block",
                id: "asamblea_anadie_1",
          initialState: "collapsed",
           triggerLine: "A TI QUE ESCUCHAS LA ORACIÓN, (Si♭,,8)(La,7,297)", sC: "mt as ta", lines: [
            { line: "VIENE TODO MORTAL,, (Si♭,,25)", sC: "as"},
            { line: "VIENE TODO MORTAL., (La,7,189)", sC: "as"},  ]},
 
]}, // ULTIMA LINEA DEL CANTO: A TI, SEÑOR, SE DEBE LA ALABANZA EN SIÓN
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════╗
║                ABBÁ, PADRE               ║
╚══════════════════════════════════════════╝  */
   {
        id: "abbapadre",
        tt: "Abbá, Padre",
        title: "Abbá, Padre",
        subtitle: "Romanos 8,15–17",
        category: ["PreCatecumenado","Laudes/Visperas","Comunión","Nuevo Testamento"],
        cejilla: "3",
        nCan: "",
        dbno: "7",
        notes: "",
        mant: "Si",
        audioSrc: "/audio/abbapadre.mp3",
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=atisenorsedebelaalabanzaension",
        sig: "/resucito/src/index.html?canto=abraham",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡ABBÁ, PADRE, PADRE!, (Do,,9)(Sol,,90)(Fa,,174)(Do,,220)", sC: "as"},
            { line: "No hemos recibido, (La,m,17)", sC: "mt"},
            { line: "el espíritu de siervos, (Re,m,56)(La,m,147)", sC: ""},
            { line: "para recaer en el temor,, (Fa,,10)(Mi,,209)", sC: ""},
            { line: "para recaer en el temor., (Fa,,10)(Mi,,209)", sC: ""},

            { line: "ESTE MISMO ESPÍRITU, (La,m,15)", sC: "mt as"},
            { line: "DA TESTIMONIO A NUESTRO ESPÍRITU, (Re,m,15)(La,m,111)(Fa,,165)(Mi,,320)", sC: "as"},
            { line: "DE QUE SOMOS HIJOS DE DIOS., (Mi,7,15)(La,m,278)", sC: "as"},
            { line: "Y, SI HIJOS, TAMBIÉN HEREDEROS,, (Sol,7,61)(Do,,281)", sC: "mt as"},
            { line: "COHEREDEROS DE CRISTO,, (Mi,7,214)", sC: "as"},
            { line: "HEREDEROS DE DIOS., (La,m,189)", sC: "as"},
            { line: "Y, SI HIJOS, TAMBIÉN HEREDEROS,, (Sol,7,63)(Do,,284)", sC: "mt as"},
            { line: "COHEREDEROS DE CRISTO,, (Mi,7,213)", sC: "as"},
            { line: "HEREDEROS DE DIOS., (La,m,179)", sC: "as"},
            { line: "¡ABBÁ, PADRE, PADRE!, (Do,,15)(Sol,,89)(Fa,,173)(Do,,214)", sC: "as mt"},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: ABBÁ, PADRE
// SIGUIENTE CANTO DEBAJO



]

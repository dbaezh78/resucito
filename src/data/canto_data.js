// Info del archivo en dbaezh.docx
// resucito\src\data\Explicacion Cantos.docx
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
        category: ["PreCatecumenado","Pascua","Pentecostés","Comunión"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "5",
        nCan: "", //Nota del canto = nCan
        nCanURL: "",
        /*      nCanURL: "/resucito/src/index.html?canto=cantodemoises1",*/

        dbno: "1",
        notes: "Este canto se usa en la liturgia de Pascua.",
        mant: "No",
        audioSrc: "/audio/alavictimapascual.mp3",
        // Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
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
            { line: "en un prodigioso duelo: (Re,m9,186)"},
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
        category: ["PreCatecumenado","Fracción del Pan","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        // propiedad para la velocidad de desplazamiento segun equipo
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 },
            tablet: { velocidad: 7, incremento: 1 },
            desktop: { velocidad: 7, incremento: 1 },
            desktopsmall: { velocidad: 7, incremento: 1 }},
        // Propiedades para navegación entre cantos
        ant: "/resucito/src/index.html?canto=alavictimapascual",
        sig: "/resucito/src/index.html?canto=atilevantomisojos",
        nCan: "",
        nCanURL: "",
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

            {   type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
                triggerLine: "HERMANOS, A NADIE DEMOS (La,m,18)", sC: "mt as ta", lines: [
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
                type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
                triggerLine: "HERMANOS, A NADIE DEMOS (La,m,18)", sC: "as mt ta", lines: [
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

            {   type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
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
        category: ["PreCatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        // propiedad para la velocidad de desplazamiento segun equipo
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 },
            tablet: { velocidad: 7, incremento: 1 },
            desktop: { velocidad: 7, incremento: 1 },
            desktopsmall: { velocidad: 7, incremento: 1 },
        },
        // Propiedades para navegación entre cantos
        ant: "/resucito/src/index.html?canto=anadiedemosocasiondetropiezo",
        sig: "/resucito/src/index.html?canto=atisenorenmiclamorimploro",
        nCan: "",
        nCanURL: "",
        dbno: "2",
        notes: "Este canto se usa en la liturgia de Pascua.",
        mant: "No",
        audioSrc: "/audio/atilevantomisojos.mp3",

        lizq: [
            { line: "A TI LEVANTO MIS OJOS, (Re,m,16)(La,7,189)", sC: "as tc" },
            { line: "A TI QUE HABITAS EN EL CIELO. (Sol,m,28)(La,7,260)", sC: "b2 as" },

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

            { line: "¡PIEDAD DE NOSOTROS, SEÑOR!, (Re,m,57)(La,7,286)", sC:"mujeres as mt ndb"},
            { line: "¡PIEDAD DE NOSOTROS, SEÑOR!, (Si♭,7,57)(La,7,286)", sC:"hombres as"},

            {   type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
                triggerLine: "A TI LEVANTO MIS OJOS (Re,m,16)(La,7,189)", sC: "mt as ta", lines: [
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
        category: ["PreCatecumenado","Cuaresma","Penitencial"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "2",
        nCan: "",
        nCanURL: "",
        dbno: "4",
        notes: "",
        mant: "No",
        audioSrc: "/audio/atisenorenmiclamorimploro.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=atilevantomisojos",
        sig: "/resucito/src/index.html?canto=atisenorlevantomialma",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "A TI, SEÑOR, EN MI CLAMOR IMPLORO,(La,m,15)(Re,m,327)", sC: "as ta"},
            { line: "A TI, SEÑOR, EN MI CLAMOR SUPLICO,(La,m,327)", sC: "as"},
            { line: "A TI DERRAMO MI LAMENTO,(La,7,29)", sC: "as"},
            { line: "A TI MI ANGUSTIA EXPONGO. , (Fa,,29)(Mi,,222)", sC: "as"},
            
            { line: "Siento que el espíritu en mí se apaga, , (Re,m,15)", sC: "mt tc"},
            { line: "más tú conoces mi sendero. , (Mi,7,239)", sC: ""},
            { line: "Mira, Señor, que en el camino,(La,m,15)(Re,m,250)", sC: "mt"},
            { line: "mira, Señor, que me han tendido un lazo. , (La,m,263)", sC: ""},
            { line: "Mira, Señor, que a la derecha no hay ninguno,(Mi,,95)(Mi,7,401)", sC: ""},
            { line: "ninguno que me conozca. , (Fa,m,55)(La,m,214)", sC: ""},
            { line: "Que huye de mí todo consuelo,(Re,m,15)", sC: ""},
            { line: "que no hay nadie que se cuide de mi alma., (Fa,m,135)(Mi,7,370)", sC: ""},

            { line: "A TI, YO CLAMO SEÑOR,(La,m,15)(Sol,,199)", sC: "ta as mt"},
            { line: "A TI, YO DIGO: TÚ SOLO ERES MI REFUGIO,(Mi,7,250)", sC: "as"},
            { line: "TÚ ERES MI PORCIÓN EN ESTA TIERRA,(Fa,,15)", sC: "as"},
            { line: "MI ÚNICA FELICIDAD., (Mi,,178)", sC: "as"},
    ], lder: [
            { line: "Escúchame, Señor, que estoy llorando,(Re,m,15)(Mi,,318)", sC: "tc"},
            { line: "estoy tan deprimido., (Fa,,32)(Mi,,166)", sC: ""},
            { line: "¡Líbrame tú de estos enemigos, (Fa,,15)", sC: ""},
            { line: "que son más fuertes que yo!, (Sol,,58)(Mi,,258)", sC: ""},
            { line: "¡Saca mi alma de esta cárcel, (La,m,15)", sC: ""},
            { line: "y yo daré gracias a tu Nombre!, (Sol,,11)(Mi,,228)", sC: ""},
            { line: "En torno a mí los santos harán corro,(Re,m,48)", sC: ""},
            { line: "me felicitarán por tu favor hacia mí. , (Fa,,115)(Mi,,331)", sC: ""},
  
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
           triggerLine: "A TI, SEÑOR, EN MI CLAMOR IMPLORO,(La,m,15)(Re,m,327)", sC: "mt as ta", lines: [
            { line: "A TI, SEÑOR, EN MI CLAMOR SUPLICO,(La,m,327)", sC: "as"},
            { line: "A TI DERRAMO MI LAMENTO,(Mi,7,29)", sC: "as"},
            { line: "A TI MI ANGUSTIA EXPONGO. , (Fa,m,29)(Mi,,222)", sC: "as"},  ]},
 
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "A TI, YO CLAMO SEÑOR,(La,m,15)(Sol,,199)", sC: "mt as ta", lines: [
            { line: "A TI, YO DIGO: TÚ SOLO ERES MI REFUGIO,(Mi,7,250)", sC: "as"},
            { line: "TÚ ERES MI PORCIÓN EN ESTA TIERRA,(Fa,,15)", sC: "as"},
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
        category: ["PreCatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "5",
        notes: "",
        mant: "No",
        audioSrc: "/audio/atisenorlevantomialma.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=atisenorenmiclamorimploro",
        sig: "/resucito/src/index.html?canto=atisenorsedebelaalabanzaension",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "A TI, SEÑOR, LEVANTO MI ALMA,(La,m,15)(Mi,,250)", sC: "ta as"},
            { line: "A TI, OH DIOS MÍO., (Re,m,60)(Fa,,94)(Mi,,159)", sC: "as"},

            { line: "En ti confío, Señor,(La,m,16)(Mi,,154)", sC: "mt tc"},
            { line: "no triunfen sobre mí mis enemigos., (Re,m,215)(Fa,,250)(Mi,,293)", sC: ""},
            { line: "Muéstrame, Señor, tu camino,(La,m,15)(Mi,,255)", sC: ""},
            { line: "enséñame, Señor, tu sendero., (Re,m,186)(Fa,,222)(Mi,,254)", sC: ""},

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
           triggerLine: "A TI, SEÑOR, LEVANTO MI ALMA, (La,m,15)(Mi,,250)", sC: "mt as ta", lines: [
                { line: "A TI, OH DIOS MÍO., (Re,m,60)(Fa,,94)(Mi,,159)", sC: "as"},  ]},            

            { line: "Acuérdate, Señor, de tu ternura,(La,m,15)(Mi,,270)", sC: "mt tc"},
            { line: "de tu inmensa compasión, que son de siempre., (Re,m,275)(Fa,,315)(Mi,,393)", sC: ""},
            { line: "De mis pecados, Señor, no te acuerdes,(La,m,15)(Mi,,322)", sC: ""},
            { line: "acuérdate, Señor, que eres misericordia., (Re,m,192)(Fa,,239)(Mi,,339)", sC: ""},
            { line: "Rocíame, Señor, de tu misericordia., (Fa,,37)(Mi,,291)", sC: "mt"},
            { line: "Sumérgeme, Señor, en tu misericordia., (Fa,,51)(Mi,,323)", sC: ""},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
           triggerLine: "A TI, SEÑOR, LEVANTO MI ALMA, (La,m,15)(Mi,,250)", sC: "mt as ta", lines: [
                { line: "A TI, OH DIOS MÍO., (Re,m,60)(Fa,,94)(Mi,,159)", sC: "as"},  ]},

    ], lder: [

]}, // ULTIMA LINEA DEL CANTO: A TI, SEÑOR, LEVANTO MI ALMA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                A TI, SEÑOR, SE DEBE LA ALABANZA EN SIÓN        ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "atisenorsedebelaalabanzaension",
        tt: "A Ti, Señor, Se Debe La Alabanza En Sión",
        title: "A Ti, Señor, Se Debe La Alabanza En Sión",
        subtitle: "Salmo 65 (64)",
        category: ["PreCatecumenado","Cuaresma","Penitencial"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "6",
        notes: "",
        mant: "No",
        audioSrc: "/audio/atisenorsedebelaalabanzaension.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=atisenorlevantomialma",
        sig: "/resucito/src/index.html?canto=abbapadre",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "A ti, Señor, se debe la alabanza, en Sión., (Re,m,15)(La,7,364)", sC: "tc"},
            { line: "A ti se te cumple el voto, en Jerusalén., (Re,m,342)", sC: ""},
            { line: "A ti que escuchas la oración,(Sol,m,28)(Re,m,246)", sC: ""},
            { line: "viene todo mortal, viene todo mortal., (La,7,156)(Re,m,330)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A TI QUE ESCUCHAS LA ORACIÓN, (Si♭,,8)(La,7,297)", sC: "ta as"},
            { line: "VIENE TODO MORTAL,(Si♭,,25)", sC: "as"},
            { line: "VIENE TODO MORTAL., (La,7,189)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Pesan sobre nosotros nuestros pecados,(Re,m,15)(La,7,340)", sC: "tc"},
            { line: "mas tú perdonas nuestras culpas., (Re,m,273)", sC: ""},
            { line: "Dichoso el que tú eliges, el que tú llamas,(La,7,345)", sC: ""},
            { line: "vivirá en tus atrios., (Re,m,137)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A ti que escuchas la oración,(Sol,m,31)(Re,m,247)", sC: ""},
            { line: "viene todo mortal, viene todo mortal., (La,7,158)(Re,m,333)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
  
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
           triggerLine: "A TI QUE ESCUCHAS LA ORACIÓN, (Si♭,,8)(La,7,297)", sC: "as ta", lines: [
            { line: "VIENE TODO MORTAL,(Si♭,,25)", sC: "as"},
            { line: "VIENE TODO MORTAL., (La,7,189)", sC: "as"},  ]},
 
    ], lder: [
            { line: "Nos saciaremos de los bienes de tu casa,(Re,m,15)(La,7,361)", sC: "tc"},
            { line: "de la santidad de tu templo., (Re,m,214)", sC: ""},
            { line: "Con los prodigios de tu amor tú nos hablas,(La,7,360)", sC: ""},
            { line: "con los portentos de tu justicia nos respondes., (Re,m,380)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A ti que escuchas la oración,(Sol,m,31)(Re,m,246)", sC: ""},
            { line: "viene todo mortal, viene todo mortal., (La,7,156)(Re,m,331)", sC: ""},
  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
           triggerLine: "A TI QUE ESCUCHAS LA ORACIÓN, (Si♭,,8)(La,7,297)", sC: "as ta", lines: [
            { line: "VIENE TODO MORTAL,(Si♭,,25)", sC: "as"},
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
        subtitle: "Rm 8,15–17",
        category: ["PreCatecumenado","Entrada","Pascua","Pentecostés","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "7",
        notes: "",
        mant: "No",
        audioSrc: "/audio/abbapadre.mp3",
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=atisenorsedebelaalabanzaension",
        sig: "/resucito/src/index.html?canto=abraham",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡ABBÁ, PADRE, PADRE!, (Do,,9)(Sol,,90)(Fa,,174)(Do,,220)", sC: "ta as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "No hemos recibido, (La,m,17)", sC: "tc"},
            { line: "el espíritu de siervos, (Re,m,56)(La,m,147)", sC: ""},
            { line: "para recaer en el temor,(Fa,,10)(Mi,,209)", sC: ""},
            { line: "para recaer en el temor., (Fa,,10)(Mi,,209)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "ESTE MISMO ESPÍRITU, (La,m,15)", sC: "as ta"},
            { line: "DA TESTIMONIO A NUESTRO ESPÍRITU, (Re,m,15)(La,m,111)(Fa,,165)(Mi,,320)", sC: "as"},
            { line: "DE QUE SOMOS HIJOS DE DIOS., (Mi,7,15)(La,m,278)", sC: "as"},
            { line: "Y, SI HIJOS, TAMBIÉN HEREDEROS,(Sol,7,61)(Do,,281)", sC: "mt as"},
            { line: "COHEREDEROS DE CRISTO,(Mi,7,214)", sC: "as"},
            { line: "HEREDEROS DE DIOS., (La,m,189)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Y, SI HIJOS, TAMBIÉN HEREDEROS,(Sol,7,63)(Do,,284)", sC: "as"},
            { line: "COHEREDEROS DE CRISTO,(Mi,7,213)", sC: "as"},
            { line: "HEREDEROS DE DIOS., (La,m,179)", sC: "as"},
            { line: "¡ABBÁ, PADRE, PADRE!, (Do,,15)(Sol,,89)(Fa,,173)(Do,,214)", sC: "as mt"},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: ABBÁ, PADRE
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════╗
║                ABRAHAM               ║
╚══════════════════════════════════════╝  */
   {
        id: "abraham",
        tt: "Abraham",
        title: "Abraham",
        subtitle: "Génesis 18,1–5 – Teofanía de Mambré",
        category: ["PreCatecumenado","Entrada","Antiguo Testamento"],
        cejilla: "",
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        nCan: "",
        nCanURL: "",
        dbno: "8",
        notes: "",
        mant: "No",
        audioSrc: "/audio/abraham.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=abbapadre",
        sig: "/resucito/src/index.html?canto=aclamadalsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Hacía calor aquel día, (La,m,15)m", sC: "tc"},
            { line: "cuando Abraham, (Re,m,28)(Mi,,139)", sC: ""},
            { line: "estaba sentado delante de su tienda., (La,m,307)", sC: ""},
            { line: "Hacía calor aquel día, ", sC: "mt"},
            { line: "cuando Abraham, (Re,m,27)(Mi,,137)", sC: ""},
            { line: "estaba sentado, ", sC: ""},
            { line: "cerca del encinar de Mambré., (La,m,266)", sC: ""},
            { line: "Alzando los ojos, miró, (Sol,,125)(Fa,,201)", sC: "mt"},
            { line: "y tres hombres de pie, (Mi,,199)", sC: ""},
            { line: "estaban delante., (La,m,121)", sC: ""},
            { line: "En cuanto los vio,(Mi,,154)", sC: "mt"},
            { line: "se inclinó hasta el suelo y dijo: (La,m,267)", sC: ""},
            { line: "«Oh Señor mío,(Sol,,123)", sC: "mt"},
            { line: "no pases, te ruego, sin detenerte., (Fa,,143)(Mi,,284)", sC: ""},
            { line: "«SIN DETENERTE,(La,m,119)", sC: "ta as mt"},
            { line: "NO PASES, TE RUEGO,(Sol,,168)", sC: "as"},
            { line: "SIN DETENERTE, SIN DETENERTE»., (Fa,,112)(Mi,,274)", sC: "as"},
    ], lder: [
            { line: "«Os traeré un poco de agua,(La,m,15)(Mi,,221)", sC: "tc"},
            { line: "os lavaré los pies, ", sC: ""},
            { line: "y reposaréis a la sombra., (La,m,180)", sC: ""},
            { line: "Os traeré un bocado,(Mi,,167)", sC: "mt"},
            { line: "os reconfortaréis, ", sC: ""},
            { line: "y lúego seguiréis adelante., (La,m,214)", sC: ""},
            { line: "No por casualidad, (Sol,,154)", sC: "mt"},
            { line: "habéis pasado hoy delante de mí., (Fa,,161)(Mi,,310)", sC: ""},

            { line: "«OH SEÑOR MÍO,(La,m,135)", sC: "ta as mt"},
            { line: "NO PASES, TE RUEGO,(Sol,,171)", sC: "as"},
            { line: "SIN DETENERTE, SIN DETENERTE., (Fa,,106)(Mi,,270)", sC: "as"},
            { line: "SIN DETENERTE,(La,m,110)", sC: "as mt"},
            { line: "NO PASES, TE RUEGO,(Sol,,170)", sC: "as"},
            { line: "SIN DETENERTE, SIN DETENERTE»., (Fa,,108)(Mi,,273)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: ABRAHAM
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                ACLAMAD AL SEÑOR               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "aclamadalsenor",
        tt: "Aclamad Al Señor",
        title: "Aclamad Al Señor",
        subtitle: "Salmo 100 (99)",
        category: ["PreCatecumenado","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Melisma",
        dbno: "9",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aclamadalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=abraham",
        sig: "/resucito/src/index.html?canto=aldespertar",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "ta as"},
            { line: "TODA LA TIERRA,(Sol,m,15)(Re,m,118)", sC: "as"},
            { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,58)(Sol,,154)(La,,297)", sC: "as"},

            { line: "Acercaos a Él, (Re,m,55)(La,7,138)", sC: "tc mt"},
            { line: "con gritos de júbilo., (Re,m,175)", sC: "ast91"},
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,(Sol,m,15)(Re,m,118)", sC: "as"},
                { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,15)(Sol,,154)(La,,297)", sC: "as"},  ]},

            { line: "Porque el Señor es nuestro Dios, (Re,m,15)(La,7,250)", sC: "tc mt"},
            { line: "y nosotros su pueblo., (Re,m,15)", sC: "ast92"},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,(Sol,m,15)(Re,m,118)", sC: "as"},
                { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,15)(Sol,,154)(La,,297)", sC: "as"},  ]},

            { line: "¡Entrad por sus puertas , (Re,m,15)(La,7,234)", sC: "tc mt"},
            { line: "con himnos de alegría!, (Re,m,205)", sC: "ast93"},

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,(Sol,m,15)(Re,m,118)", sC: "as"},
                { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,15)(Sol,,154)(La,,297)", sC: "as"},  ]},
    ], lder: [
            { line: "Bendecid su nombre, (Re,m,73)(La,7,207)", sC: "mt tc"},
            { line: "dándole gracias, (Re,m,135)", sC: "ast94"},

            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,(Sol,m,15)(Re,m,118)", sC: "as"},
                { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,15)(Sol,,154)(La,,297)", sC: "as"},  ]},

            { line: "Porque es bueno el Señor,(Re,m,15)(La,7,254)", sC: "mt tc"},
            { line: "es eterno su amor, (Re,m,15)(La,7,138)", sC: "ast95"},
            { line: "con nosotros., (Re,m,103)", sC: "ast96"},

            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,(Sol,m,15)(Re,m,118)", sC: "as"},
                { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,15)(Sol,,154)(La,,297)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ACLAMAD AL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔═══════════════════════════════════════════╗
║                AL DESPERTAR               ║
╚═══════════════════════════════════════════╝ */
   {
        id: "aldespertar",
        tt: "Al Despertar",
        title: "Al Despertar",
        subtitle: "Salmo 17 (16) ",
        category: ["PreCatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",   // Notas del canto
        nCanURL: "",
        dbno: "10",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aldespertar.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aclamadalsenor",
        sig: "/resucito/src/index.html?canto=alabadalsenorenelcielo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "AL DESPERTAR, (Si,m,15)", sC: "mt as ta"},
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Sol,,115)(Si,m,262)", sC: "as"},
            { line: "AL DESPERTAR, (Mi,m,127)", sC: "as"},
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Si,m,261)", sC: "as"},

            { line: "Escucha, Señor, mi oración,(Mi,m,15)(Si,m,241)", sC: "mt tc"},
            { line: "atiende, Señor, a mi clamor., (Mi,m,15)(Si,m,250)", sC: ""},
            { line: "Presta oídos a mi súplica,(Sol,,11)(Fa#,,188)", sC: ""},
            { line: "que mis labios no traicionan, Señor,(Sol,,96)(Fa#,,322)", sC: ""},
            { line: "salga de ti la sentencia., (Sol,,11)(Fa#,,175)", sC: ""},
            { line: "Porque tus ojos ven, tus ojos ven mi rectitud., (Mi,m,119)(Fa#,,404)", sC: ""},

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "AL DESPERTAR, (Si,m,15)", sC: "mt as ta", lines: [
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Sol,,115)(Si,m,262)", sC: "as"},
            { line: "AL DESPERTAR, (Mi,m,127)", sC: "as"},
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Si,m,261)", sC: "as"},  ]},

            { line: "Sondea, Señor, mi corazón,(Mi,m,15)(Si,m,238)", sC: "mt tc"},
            { line: "escrútalo de noche, Señor,(Mi,m,15)(Si,m,233)", sC: ""},
            { line: "pruébame al crisol, pruébame al crisol., (Sol,,15)(Fa#,,229)", sC: ""},
            { line: "Porque tú sabes que no hay malicia en mí,(Sol,,15)(Fa#,,394)", sC: ""},
            { line: "que mi boca no miente como hacen los hombres., (Sol,,15)(Fa#,,299)", sC: ""},
            { line: "Que he guardado tu palabra,(Mi,m,136)", sC: ""},
            { line: "que no he seguido los caminos del violento,(Fa#,,377)", sC: ""},
            { line: "que a tus huellas he ajustado mis pasos,(Sol,,123)(Fa#,,342)", sC: ""},
            { line: "que no vacilaré, que no vacilaré., (Mi,m,58)(Fa#,,294)", sC: ""},


            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "AL DESPERTAR, (Si,m,15)", sC: "mt as ta", lines: [
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Sol,,115)(Si,m,262)", sC: "as"},
            { line: "AL DESPERTAR, (Mi,m,127)", sC: "as"},
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Si,m,261)", sC: "as"},  ]},
    ], lder: [
            { line: "A Ti te invoco, Señor,(Mi,m,15)(Si,m,178)", sC: "mt tc"},
            { line: "concédeme, Señor, una respuesta,(Mi,m,51)(Si,m,294)", sC: ""},
            { line: "muéstrame los prodigios de tu amor., (Sol,,13)(Fa#,,196)", sC: ""},
            { line: "Porque tú salvas al que se apoya en ti,(Sol,,112)(Fa#,,356)", sC: ""},
            { line: "porque tú ayudas, (Sol,,125)", sC: ""},
            { line: "al que se refugia a tu derecha., (Fa#,,244)", sC: ""},
            { line: "Como a la niña de tus ojos guárdame,(Mi,m,15)(Fa#,,291)", sC: ""},
            { line: "a la sombra de tus alas escóndeme,(Mi,m,53)(Fa#,,265)", sC: ""},
            { line: "mira que quieren matarme., (Sol,,21)(Fa#,,210)", sC: ""},

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "AL DESPERTAR, (Si,m,15)", sC: "mt as ta", lines: [
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Sol,,115)(Si,m,262)", sC: "as"},
            { line: "AL DESPERTAR, (Mi,m,127)", sC: "as"},
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Si,m,261)", sC: "as"},  ]},

            { line: "Míralos, están cerrados en su orgullo,(Mi,m,15)(Si,m,322)", sC: "mt tc"},
            { line: "hablan, la arrogancia está en su boca., (Mi,m,15)(Si,m,330)", sC: ""},
            { line: "Avanzan contra mí, avanzan contra mí., (Sol,,15)(Fa#,,216)", sC: ""},
            { line: "Ayúdame tú, Señor,(Sol,,15)(Fa#,,167)", sC: ""},
            { line: "líbrame de los hombres de este mundo,(Sol,,15)(Fa#,,332)", sC: ""},
            { line: "de los hombres cuyo premio es esta vida., (Mi,m,80)(Fa#,,362)", sC: ""},
            { line: "Cólmalos de tus bienes, Señor,(Sol,,15)(Fa#,,273)", sC: ""},
            { line: "llénales el vientre y que sus hijos se sacien., (Sol,,11)(Fa#,,361)", sC: ""},
            { line: "Que yo al despertar, que yo por tu amor, (Mi,m,58)", sC: ""},
            { line: "me saciaré de tu rostro, Señor., (Sol,,96)(Fa#,,272)", sC: ""},

            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "AL DESPERTAR, (Si,m,15)", sC: "mt as ta", lines: [
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Sol,,115)(Si,m,262)", sC: "as"},
            { line: "AL DESPERTAR, (Mi,m,127)", sC: "as"},
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Si,m,261)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: AL DESPERTAR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                ALABAD AL SEÑOR EN EL CIELO                     ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "alabadalsenorenelcielo",
        tt: "Alabad Al Señor En El Cielo",
        title: "Alabad Al Señor En El Cielo",
        subtitle: "Salmo 148 ",
        category: ["PreCatecumenado","Salmodias","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "11",
        notes: "",
        mant: "",
        audioSrc: "/audio/alabadalsenorenelcielo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aldespertar",
        sig: "/resucito/src/index.html?canto=alegriahanacidoelsalvador",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Alabad al Señor en el Cielo,(La,,8)", sC: "tc"},
            { line: "¡ALABADLO!, ", sC: "as ta"},
            { line: "alabad al Señor en lo alto,(Fa#,m,219)", sC: "tc"},
            { line: "¡ALABADLO!, ", sC: "as ta"},
            { line: "Alabadlo, todos sus ángeles;, (La,,10)", sC: "tc"},
            { line: "¡ALABADLO!, ", sC: "as ta"},
            { line: "alabadlo, todos sus ejércitos., (Fa#,m,213)", sC: "tc"},
            { line: "¡ALABADLO!, ", sC: "as ta"},

            { line: "Alabadlo, sol y luna;", sC: "tc ptop0 alabadlo2"},
            { line: "alabadlo, estrellas lucientes. ", sC: "ptop0 alabadlo"},
            { line: "Alabadlo, espacios celestes, ", sC: "ptop0 alabadlo"},
            { line: "y aguas que cuelgan en el cielo. ", sC: "sdb ptop0 alabadlo"},

            { line: "Alaben el nombre del Señor, ", sC: "alabadlo"},
            { line: "porque Él lo mandó, y existieron. ", sC: "ptop0 alabadlo"},
            { line: "Les dio consistencia perpetua, ", sC: "ptop0 alabadlo"},
            { line: "y una ley que no pasará. ", sC: "ptop0 alabadlo sdb"},
    ], lder: [
            { line: "Alabad al Señor en la tierra, ", sC: "ptop0 alabadlo"},
            { line: "cetáceos y abismos del mar, ", sC: "ptop0 alabadlo"},
            { line: "rayos, granizo, nieve y bruma, ", sC: "ptop0 alabadlo"},
            { line: "viento huracanado, ", sC: "ptop1 ptop0"},
            { line: "que cumple sus órdenes, ", sC: "alabadlo sdb"},

            { line: "montes y todas las sierras, ", sC: "ptop0 alabadlo"},
            { line: "árboles frutales y cedros, ", sC: "ptop0 alabadlo"},
            { line: "fieras y animales domésticos, ", sC: "ptop0 alabadlo"},
            { line: "reptiles y pájaros que vuelan. ", sC: "alabadlo sdb"},

            { line: "Reyes y pueblos del orbe, ", sC: "ptop0 alabadlo"},
            { line: "príncipes y jefes del mundo, ", sC: "ptop0 alabadlo"},
            { line: "los jóvenes, ", sC: "ptop1 ptop0"},
            { line: "y también las doncellas, ", sC: "ptop0 alabadlo"},
            { line: "los viejos a una con los niños, ", sC: "alabadlo sdb"},

            { line: "alaben el nombre del Señor, ", sC: "ptop0 alabadlo"},
            { line: "el único nombre sublime. ", sC: "ptop0 sdb alabadlo"},
            { line: "Su majestad,", sC: "ptop1"},
            { line: "sobre el cielo y la tierra; ", sC: "ptop0 alabadlo1 mleft"},
            { line: "Él da fuerza y vigor a su pueblo. ", sC: "alabadlo sdb"},

            { line: "Alabanza de todos sus fieles,", sC: "ptop0 alabadlo"},
            { line: "de Israel, su pueblo elegido., ", sC: "ptop0 alabadlo"},
]}, // ULTIMA LINEA DEL CANTO: ALABAD AL SEÑOR EN EL CIELO
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════════════════════════╗
║                ALEGRÍA, HA NACIDO EL SALVADOR               ║
╚═════════════════════════════════════════════════════════════╝  */
   {
        id: "alegriahanacidoelsalvador",
        tt: "Alegría, Ha Nacido El Salvador",
        title: "Alegría, Ha Nacido El Salvador",
        subtitle: "Villancico (Kiko Argüello)",
        category: ["PreCatecumenado","Niños","Adviento","Adviento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "12",
        notes: "",
        mant: "No",
        audioSrc: "/audio/alegriahanacidoelsalvador.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=alabadalsenorenelcielo",
        sig: "/resucito/src/index.html?canto=aleluyaalabadalsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Un ángel vino del cielo, (Re,m,18)", sC: "b12-1"},
            { line: "trayendo una gran noticia: ", sC: "tc"},

            { line: "¡Hoy os ha nacido,(Sol,m,15)(Re,m,139)", sC: "b12-1"},
            { line: "ha nacido el Salvador!, (La,,64)(Re,m,194)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,(Fa,,75)(La,,264)", sC: "as ta" },
            { line: "HA NACIDO EL SALVADOR, (Si♭,,78)", sC: "as b12-2"},
            { line: "ACOSTADO EN UN PESEBRE!, (Do,,68)", sC: "as"},
            { line: "¡ÉL ES EL CRISTO, EL SEÑOR!, (Do,7,252)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¡Fajado con lindos pañales, (Re,m,15)", sC: "b12-1"},
            { line: "y acostado en un pesebre!, ", sC: "sdb"},

            { line: "Esta será la señal, (Sol,m,20)(Re,m,151)", sC: "b12-1"},
            { line: "de que Él es el Señor. (La,,79)(Re,m,187)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,(Fa,,75)(La,,264)", sC: "as ta", lines: [
            { line: "HA NACIDO EL SALVADOR, (Si♭,,78)", sC: "as b12-2"},
            { line: "ACOSTADO EN UN PESEBRE!, (Do,,68)", sC: "as"},
            { line: "¡ÉL ES EL CRISTO, EL SEÑOR!, (Do,7,252)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Al establo de Belén, (Re,m,15)", sC: "b12-1"},
            { line: "han llegado los pastores., ", sC: "sdb"},

            { line: "Vienen trayendo regalos, (Sol,m,15)(Re,m,195)", sC: "b12-1"},
            { line: "a Jesús el Salvador., (La,,52)(Re,m,168)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,(Fa,,75)(La,,264)", sC: "as ta", lines: [
            { line: "HA NACIDO EL SALVADOR, (Si♭,,78)", sC: "as b12-2"},
            { line: "ACOSTADO EN UN PESEBRE!, (Do,,68)", sC: "as"},
            { line: "¡ÉL ES EL CRISTO, EL SEÑOR!, (Do,7,252)", sC: "as"},  ]},
    ], lder: [
            { line: "Encontraron a María,(Re,m,15)", sC: "b12-1"},
            { line: "encontraron a José., ", sC: ""},

            { line: "El buey, el asno y el niño,(Sol,m,15)(Re,m,208)", sC: "b12-1"},
            { line: "que se llamará Emmanuel., (La,,85)(Re,m,234)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,(Fa,,75)(La,,264)", sC: "as ta", lines: [
            { line: "HA NACIDO EL SALVADOR, (Si♭,,78)", sC: "as b12-2"},
            { line: "ACOSTADO EN UN PESEBRE!, (Do,,68)", sC: "as"},
            { line: "¡ÉL ES EL CRISTO, EL SEÑOR!, (Do,7,252)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El buey reconoce a su dueño,(Re,m,15)", sC: "b12-1"},
            { line: "el borrico su pesebre., ", sC: ""},
            
            { line: "Pero Israel no conoce,(Sol,m,15)(Re,m,174)", sC: "b12-1"},
            { line: "no conoce a su Señor., (La,,71)(Re,m,189)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,(Fa,,75)(La,,264)", sC: "as ta", lines: [
            { line: "HA NACIDO EL SALVADOR, (Si♭,,78)", sC: "as b12-2"},
            { line: "ACOSTADO EN UN PESEBRE!, (Do,,68)", sC: "as"},
            { line: "¡ÉL ES EL CRISTO, EL SEÑOR!, (Do,7,252)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ALEGRÍA, HA NACIDO EL SALVADOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                ALELUYA, ALABAD AL SEÑOR               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "aleluyaalabadalsenor",
        tt: "Aleluya, Alabad Al Señor",
        title: "Aleluya, Alabad Al Señor",
        subtitle: "Salmo 150",
        category: ["PreCatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "13",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aleluyaalabadalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },  // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=alegriahanacidoelsalvador",
        sig: "/resucito/src/index.html?canto=aleluyabendecidalsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡ALELUYA, ALELUYA, ALELUYA!, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(La,,248)(Mi,,275)", sC: "as ta"},
            { line: "¡ALELUYA, ALELUYA, ALELUYA!, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(Mi,,275)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Alabad al Señor en su templo,(MI,,10)(La,,139)(Re,,170)(La,,228)", sC: "tc"},
            { line: "alabadlo en su fuerte firmamento,(Re,,52)(La,,173)(Mi,,286)", sC: ""},
            { line: "Alabadlo por sus obras estupendas,(La,,52)(Re,,178)(La,,236)(Mi,,284)", sC: ""},
            { line: "alabadlo por su inmensa grandeza., (La,,52)(Re,,198)(Mi,,309)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡ALELUYA, ALELUYA, ALELUYA, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(La,,248)(Mi,,275)", sC: "as ta", lines: [
            { line: "¡ALELUYA, ALELUYA, ALELUYA!, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(Mi,,275)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Alabadlo al son de trompetas,(Mi,,10)(La,,128)(Re,,168)(La,,245)", sC: "tc"},
            { line: "alabadlo con arpas y guitarras,(Re,,45)(La,,140)(Mi,,243)", sC: ""},
            { line: "alabadlo con tambores y con danzas,(La,,45)(Re,,182)(La,,237)(Mi,,298)", sC: ""},
            { line: "alabadlo con trompas y flautas., (La,,45)(Re,,143)(Mi,,257)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "¡ALELUYA, ALELUYA, ALELUYA, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(La,,248)(Mi,,275)", sC: "as ta", lines: [
            { line: "¡ALELUYA, ALELUYA, ALELUYA!, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(Mi,,275)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Alabadlo con platillos sonoros,(Mi,,15)(La,,169)(Re,,195)(La,,251)", sC: "tc"},
            { line: "alabadlo con platillos vibrantes., (Re,,48)(La,,166)(Mi,,249)", sC: ""},
            { line: "¡TODO SER ALABE AL SEÑOR,(La,,10)(Re,,81)(La,,137)(Mi,,254)", sC: "as ta"},
            { line: "ALABE, ALABE AL SEÑOR!, (La,,31)(Re,,102)(MI,,222)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "¡ALELUYA, ALELUYA, ALELUYA, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(La,,248)(Mi,,275)", sC: "as ta", lines: [
            { line: "¡ALELUYA, ALELUYA, ALELUYA! (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(Mi,,275)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA, ALABAD AL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════════════════════════╗
║                ALELUYA, BENDECID AL SEÑOR                    ║
╚══════════════════════════════════════════════════════════════╝  */
   {
        id: "aleluyabendecidalsenor",
        tt: "Aleluya, Bendecid Al Señor",
        title: "Aleluya, Bendecid Al Señor",
        subtitle: "Salmo 1.34 (1.33) - Melodía hebraica",
        category: ["PreCatecumenado","Pascua","Pentecostés","Niños","Paz","Comunión"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "14",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aleluyabendecidalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aleluyaalabadalsenor",
        sig: "/resucito/src/index.html?canto=aleluyayallegoelreino",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ALELÚ, ALELÚ, ALE E LU U YA., (La,,10)(Si♭,,178)(La,,272)", sC: "niño as"},
            { line: "ALELÚ, ALELÚ, ALE E LU U YA., (Si♭,,180)(La,,271)", sC: "as b14"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Bendecid al Señor, bendecid al Señor,(Re,m,20)", sC: "niño"},
            { line: "vosotros los siervos del Señor., (La7,,266)", sC: ""},
            { line: "Bendecid al Señor, bendecid al Señor, ", sC: ""},
            { line: "vosotros que estáis en la casa del Señor., (Re,m,366)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Alzad a Él las manos, alzad a Él las manos, (Re,m,21)", sC: ""},
            { line: "y bendecid al Señor,(La7,,172)", sC: ""},
            { line: "vosotros que estáis en la casa del Señor, ", sC: ""},
            { line: "durante la noche., (Re,m,159)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "ALELUYA, ALELUYA, A A LE E LU U YA., (Re,m,15)(La,7,108)(Si♭,,218)(La,,250)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, A A LE E LU U YA., (Re,m,15)(La,7,108)(Si♭,,218)(La,,250)", sC: "as"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALELÚ, ALELÚ, ALE E LU U YA., (La,,10)(Si♭,,178)(La,,272)", sC: "as ta", lines: [
            { line: "ALELÚ, ALELÚ, ALE E LU U YA., (Si♭,,180)(La,,271)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "BENDECID AL SEÑOR, BENDECID AL SEÑOR,(Re,m,20)", sC: "as ta", lines: [
            { line: "VOSOTROS LOS SIERVOS DEL SEÑOR., (La7,,327)", sC: "as"},
            { line: "BENDECID AL SEÑOR, BENDECID AL SEÑOR,", sC: "as"},
            { line: "VOSOTROS QUE ESTÁIS EN LA CASA DEL SEÑOR., (Re,m,439)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "ALZAD A ÉL LAS MANOS, ALZAD A ÉL LAS MANOS, (Re,m,21)", sC: "as ta"} ,
            { line: "Y BENDECID AL SEÑOR,(La7,,172)", sC: "as"},
            { line: "VOSOTROS QUE ESTÁIS EN LA CASA DEL SEÑOR, ", sC: "as"},
            { line: "DURANTE LA NOCHE., (Re,m,159)", sC: "as"},  ]},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Aalelú, alelú uuu ... uuya., (Si♭,,59)(La,7,226)", sC: "tc"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ALELÚ, ALELÚ, ALE E LU U YA., (La,,10)(Si♭,,178)(La,,272)", sC: "as ta", lines: [
            { line: "ALELÚ, ALELÚ, ALE E LU U YA., (Si♭,,180)(La,,271)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA, BENDECID AL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                ALELUYA, YA LLEGÓ EL REINO               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "aleluyayallegoelreino",
        tt: "Aleluya, Ya Llegó El Reino",
        title: "Aleluya, Ya Llegó El Reino",
        subtitle: "Apocalipsis 19,6-9",
        category: ["PreCatecumenado","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "15",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aleluyayallegoelreino.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aleluyabendecidalsenor",
        sig: "/resucito/src/index.html?canto=alzaospuertas",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ALELUYA,ALELUYA,ALELUYA., (Do,,15)(Mi,,149)(La,m,262)", sC: "as ta"},
            { line: "ALELUYA,ALELUYA,ALELUYA., (Do,,53)(Mi,,148)(La,m,262)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Ya llegó el Reino, (Do,,11)(Mi,,124)", sC: "tc"},
            { line: "del Señor y su Cristo., (La,m,159)", sC: ""},
            { line: "Ya llegó el Reino, (Do,,11)(Mi,,121)", sC: ""},
            { line: "del Señor nuestro Dios., (La,m,202)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALELUYA,ALELUYA,ALELUYA., (Do,,15)(Mi,,149)(La,m,262)", sC: "as ta", lines: [
            { line: "ALELUYA,ALELUYA,ALELUYA., (Do,,53)(Mi,,149)(La,m,262)", sC: "as"},  ]},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Démosle gloria,(Do,,10)(Mi,,113)", sC: "tc"},
            { line: "han llegado las bodas., (La,m,170)", sC: ""},
            { line: "Démosle gloria,(Do,,10)(Mi,,112)", sC: ""},
            { line: "las bodas con nuestro Dios., (La,m,240)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ALELUYA,ALELUYA,ALELUYA., (Do,,15)(Mi,,149)(La,m,262)", sC: "as ta", lines: [
            { line: "ALELUYA,ALELUYA,ALELUYA., (Do,,53)(Mi,,149)(La,m,262)", sC: "as"},  ]},
    ], lder: [
            { line: "Bienaventurados, (Do,,10)", sC: "tc"},
            { line: "los invitados a bodas,(Mi,,10)", sC: ""},
            { line: "a las bodas del Cordero., (La,m,201)", sC: ""},
            { line: "Bienaventurados, (Do,,10)", sC: "mt"},
            { line: "los invitados a bodas,(Mi,,10)", sC: ""},
            { line: "a las bodas con el Señor., (La,m,222)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ALELUYA,ALELUYA,ALELUYA., (Do,,15)(Mi,,149)(La,m,262)", sC: "as ta", lines: [
            { line: "ALELUYA,ALELUYA,ALELUYA., (Do,,53)(Mi,,149)(La,m,262)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ALELUYA, YA LLEGÓ EL REINO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                ALZAOS, PUERTAS               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "alzaospuertas",
        tt: "Alzaos, Puertas",
        title: "Alzaos, Puertas",
        subtitle: "Salmo 24 (23)",
        category: ["PreCatecumenado","Entrada","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "16",
        notes: "",
        mant: "`No",
        audioSrc: "/audio/alzaospuertas.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aleluyayallegoelreino",
        sig: "/resucito/src/index.html?canto=amenamenamen",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Del Señor es la tierra,(Mi,,10)", sC: "tc"},
            { line: "DEL SEÑOR ES LA TIERRA,", sC: "ta as"},
            { line: "y todo aquello que contiene,(Sol,,10)", sC: "tc"},
            { line: "Y TODO AQUELLO QUE CONTIENE,", sC: "ta as"},
            { line: "el orbe y sus habitantes., (La,,10)(Si,7,183)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALZAOS, PUERTAS,(Mi,,10)", sC: "ta as"},
            { line: "ALZAD LOS DINTELES,(Sol,,45)", sC: "as"},
            { line: "PUERTAS ETERNAS,(La,,125)", sC: "as"},
            { line: "DEBE ENTRAR EL REY, (Mi,,195)", sC: "as"},
            { line: "DE LA GLORIA, DE LA GLORIA., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Quién es ese Rey de la gloria?, (Mi,m,15)(La,m,92)(Mi,m,258)", sC: "tc"},
            { line: "¿QUIÉN ES ESE REY DE LA GLORIA?, (La,m,94)(Mi,m,288)", sC: "ta as"},
            { line: "El Señor, el fuerte, el valiente,(Si,m,17)", sC: "tc"},
            { line: "EL SEÑOR, EL FUERTE, EL VALIENTE,", sC: "ta as"},
            { line: "el Señor, valiente en la batalla,(Sol,,63)(La,,254)", sC: "tc"},
            { line: "VALIENTE EN LA BATALLA., (Si,,200)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor de los ejércitos,(Mi,m,15)(Si,m,177)", sC: "tc"},
            { line: "EL SEÑOR DE LOS EJÉRCITOS., (Mi,m,75)(Si,m,209)", sC: "ta as"},
    ], lder: [
            { line: "Él es el Rey de la gloria,(Sol,,31)(La,,187)", sC: "tc"},
            { line: "EL REY DE LA GLORIA., (Si,,168)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALZAOS, PUERTAS,(Mi,,10)", sC: "as ta", lines: [
            { line: "ALZAD LOS DINTELES,(Sol,,45)", sC: "as"},
            { line: "PUERTAS ETERNAS,(La,,125)", sC: "as"},
            { line: "DEBE ENTRAR EL REY, (Mi,,195)", sC: "as"},
            { line: "DE LA GLORIA, DE LA GLORIA., ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Quién subirá al monte del Señor?, (Mi,m,15)(La,m,124)(Mi,m,307)", sC: "tc"},
            { line: "¿QUIÉN SUBIRÁ AL MONTE DEL SEÑOR?, (La,m,138)(Mi,m,350)", sC: "ta as"},
            { line: "El de manos inocentes y puro corazón,(Si,m,20)", sC: "tc"},
            { line: "EL DE MANOS INOCENTES, ", sC: "ta as"},
            { line: "Y PURO CORAZÓN,", sC: "as"},
            { line: "el que no conduce su vida por vanidad,(Sol,,14)(La,,348)", sC: "tc"},
            { line: "POR VANIDAD., (Si,,114)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y nosotros somos su Iglesia,(Mi,m,15)(Si,m,233)", sC: "tc"},
            { line: "Y NOSOTROS SOMOS SU IGLESIA,(Mi,m,65)(Si,m,280)", sC: "ta as"},
            { line: "que hoy viene a tu presencia,(Mi,m,99)(Si,m,228)", sC: "tc"},
            { line: "QUE HOY VIENE A TU PRESENCIA,(Mi,m,112)(Si,m,258)", sC: "ta as"},
            { line: "que busca tu rostro, oh Dios de Jacob,(Sol,,55)(La,,335)", sC: "tc"},
            { line: "OH DIOS DE JACOB., (Si,,163)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ALZAOS, PUERTAS,(Mi,,10)", sC: "as ta", lines: [
            { line: "ALZAD LOS DINTELES,(Sol,,45)", sC: "as"},
            { line: "PUERTAS ETERNAS,(La,,125)", sC: "as"},
            { line: "DEBE ENTRAR EL REY, (Mi,,195)", sC: "as"},
            { line: "DE LA GLORIA, DE LA GLORIA., ", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ALZAOS, PUERTAS
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════════════╗
║                AMÉN, AMÉN, AMÉN                 ║
╚═════════════════════════════════════════════════╝  */
   {
        id: "amenamenamen",
        tt: "Amén, Amén, Amén",
        title: "Amén, Amén, Amén",
        subtitle: "Apocalipsis 7,12-14 ",
        category: ["PreCatecumenado","Cuaresma","Salmodias", "Visperas","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "17",
        notes: "",
        mant: "No",
        audioSrc: "/audio/amenamenamen.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=alzaospuertas",
        sig: "/resucito/src/index.html?canto=amoalsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "AMÉN, AMÉN, AMÉN., (Do,,10)", sC: "ta as"},
            { line: "AMÉN, AMÉN, AMÉN., (La,m,41)", sC: "as"},
            { line: "AMÉN, AMÉN, AMÉN., (Sol,,38)(Do,,181)", sC: "as"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "BENDICIÓN Y GLORIA,(Do,,10)", sC: "as"},
            { line: "SABIDURÍA,(Sol,,92)", sC: "as"},
            { line: "ACCIÓN DE GRACIAS,", sC: "as"},
            { line: "DEMOS A DIOS., (Do,,123)", sC: "as"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "AMÉN, AMÉN, AMÉN, (Do,,10)", sC: "ta as", lines: [
            { line: "AMÉN, AMÉN, AMÉN., (La,m,41)", sC: "as"},
            { line: "AMÉN, AMÉN, AMÉN., (Sol,,38)(Do,,181)", sC: "as"},  ]},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Honor y poder, (Fa,,40)", sC: "tc"},
            { line: "y fortaleza,(Mi,,71)", sC: ""},
            { line: "honor y poder, (Fa,,37)", sC: ""},
            { line: "demos a Dios., (Mi,,113)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "BENDICIÓN Y GLORIA, (Do,,10)", sC: "ta as", lines: [
            { line: "SABIDURÍA,(Sol,,92)", sC: "as"},
            { line: "ACCIÓN DE GRACIAS, ", sC: "as"},
            { line: "DEMOS A DIOS., (Do,,123)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "AMÉN, AMÉN, AMÉN, (Do,,10)", sC: "ta as", lines: [
            { line: "AMÉN, AMÉN, AMÉN., (La,m,41)", sC: "as"},
            { line: "AMÉN, AMÉN, AMÉN., (Sol,,38)(Do,,181)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

    ], lder: [
            { line: "¿Quiénes son, (Fa,,108)", sC: "tc"},
            { line: "y de dónde vienen?, (Mi,,130)", sC: ""},
            { line: "¿QUIÉNES SON, (Fa,,123)", sC: "ta as"},
            { line: "Y DE DÓNDE VIENEN?, (Mi,,151)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "ESTOS SON LOS QUE VIENEN, (Sol,7,22)(Do,,228)", sC: "ta as"},
            { line: "DE LA GRAN TRIBULACIÓN., (Sol,,99)(Do,,235)", sC: "as b17"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Y LAVARON SUS TÚNICAS, (Fa,,62)", sC: "ta as"},
            { line: "Y LAS BLANQUEARON, (Do,,165)", sC: "as"},
            { line: "EN LA SANGRE DEL CORDERO,(Fa,,85)(Mi,,261)", sC: "as"},
            { line: "EN LA SANGRE DEL CORDERO., (Fa,,85)(Mi,,261)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESTOS SON LOS QUE VIENEN, (Sol,7,22)(Do,,228)", sC: "ta as", lines: [
            { line: "DE LA GRAN TRIBULACIÓN., (Sol,,99)(Do,,235)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Y LAVARON SUS TÚNICAS, (Fa,,62)", sC: "as"},
            { line: "Y LAS BLANQUEARON, (Do,,165)", sC: "as"},
            { line: "EN LA SANGRE DEL CORDERO,(Fa,,85)(Mi,,261)", sC: "as"},
            { line: "EN LA SANGRE DEL CORDERO., (Fa,,85)(Mi,,261)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "AMÉN, AMÉN, AMÉN, (Do,,10)", sC: "ta as", lines: [
            { line: "AMÉN, AMÉN, AMÉN., (La,m,41)", sC: "as"},
            { line: "AMÉN, AMÉN, AMÉN., (Sol,,38)(Do,,181)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: AMÉN, AMÉN, AMÉN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════╗
║                AMO AL SEÑOR                    ║
╚════════════════════════════════════════════════╝  */
   {
        id: "amoalsenor",
        tt: "Amo Al Señor",
        title: "Amo Al Señor",
        subtitle: "Salmo 116 (114-115)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "18",
        notes: "",
        mant: "No",
        audioSrc: "/audio/amoalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=amenamenamen",
        sig: "/resucito/src/index.html?canto=aquedah",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Amo al Señor, porque escucha, (Re,,10)(Fa#,m,253)", sC: "tc"},
            { line: "mi voz suplicante;, (Sol,,127)", sC: "b18"},
            { line: "inclina hacia mí su oído, (Mi,m6,38)(La,7,201)", sC: ""},
            { line: "el día en que lo invoco., (Re,,188)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Me envolvían redes de muerte,(Re,,11)", sC: "tc"},
            { line: "me alcanzaron los lazos del infierno;, (Fa#,m,300)", sC: ""},
            { line: "me rodeaban tristeza y angustia,(Sol,,87)(Mi,m6,268)", sC: ""},
            { line: "invoqué el nombre del Señor:, (La,7,68)", sC: ""},
            { line: "«¡Te ruego, Señor, sálvame!»., (Re,,193)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "RECOBRA, ALMA MÍA, TU REPOSO,(Re,,11)(Fa#,m,297)", sC: "ta as"},
            { line: "PORQUE EL SEÑOR FUE BUENO CONTIGO., (Sol,,15)(Mi,m6,214)(La,7,364)", sC: "as"},
            { line: "ÉL TE HA SALVADO DE LA MUERTE,(Sol,,13)(Re,,293)", sC: "as"},
            { line: "HA PRESERVADO TUS PIES DE LA CAÍDA., (La,7,243)(Re,,358)", sC: "as"},
            { line: "ÉL TE HA SALVADO DE LA MUERTE,(Sol,,14)(Re,,284)", sC: "as"},
            { line: "HA PRESERVADO TUS PIES DE LA CAÍDA., (La,7,246)(Re,,359)", sC: "as"},
    ], lder: [
            { line: "¡Tenía fe, aun cuando dije:, (Re,,10)(Fa#,m,231)", sC: "tc"},
            { line: "«Yo soy un desgraciado»!,", sC: ""},
            { line: "y pensaba lleno de angustia:, (Sol,,229)", sC: ""},
            { line: "«todo hombre es falso»., (Mi,m6,26)(La,7,176)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¿Cómo pagaré al Señor, (Re,,14)", sC: "tc"},
            { line: "todo el bien que me ha hecho?, (Fa#,m,248)", sC: ""},
            { line: "Alzaré la copa de la bendición, (Sol,,53)(Mi,m6,267)", sC: ""},
            { line: "e invocaré el nombre del Señor., (La,7,89)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "RECOBRA, ALMA MÍA, TU REPOSO,(Re,,11)(Fa#,m,297)", sC: "ta as", lines: [
            { line: "PORQUE EL SEÑOR FUE BUENO CONTIGO., (Sol,,15)(Mi,m6,214)(La,7,364)", sC: "as"},
            { line: "ÉL TE HA SALVADO DE LA MUERTE,(Sol,,13)(Re,,293)", sC: "as"},
            { line: "HA PRESERVADO TUS PIES DE LA CAÍDA., (La,7,243)(Re,,358)", sC: "as"},
            { line: "ÉL TE HA SALVADO DE LA MUERTE,(Sol,,14)(Re,,284)", sC: "as"},
            { line: "HA PRESERVADO TUS PIES DE LA CAÍDA., (La,7,246)(Re,,359)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: AMO AL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                AQUEDAH               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "aquedah",
        tt: "Aquedah",
        title: "Aquedah",
        subtitle: "Gn 22,1-19 - Del Targum Neofiti sobre el sacrificio de Isaac",
        category: ["PreCatecumenado","Cuaresma"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "19",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aquedah.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=amoalsenor",
        sig: "/resucito/src/index.html?canto=asihablaelamen",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Era todavía de noche cuando Abraham, (La,m,22)(Re,m9,351)", sC: "tc"},
            { line: "se disponía a sacrificar a su hijo;, (La,m,288)", sC: ""},
            { line: "los dos se miraban fijamente, (Re,m9,251)", sC: ""},
            { line: "cuando le dijo su hijo Isaac:, (Mi,,241)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "AQUEDAH, AQUEDAH,(La,m,73)(Re,m9,183)", sC: "ta as"},
            { line: "AQUEDAH, AQUEDAH., (La,m,179)", sC: "as b19"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "«Átame, átame fuerte, padre mío,(La,m,21)(Re,m9,303)", sC: "tc"},
            { line: "no sea que por el miedo me resista, (La,m,308)", sC: ""},
            { line: "y no sea válido tu sacrificio, (Re,m9,236)", sC: ""},
            { line: "y los dos seamos rechazados.», (Mi,,238)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "AQUEDAH, AQUEDAH,(La,m,73)(Re,m9,183)", sC: "ta as", lines: [
            { line: "AQUEDAH, AQUEDAH., (La,m,179)", sC: "as b19"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "«ÁTAME, ÁTAME FUERTE,(La,m,21)(Re,m9,182)", sC: "ta as"},
            { line: "PADRE MÍO, QUE YO NO ME RESISTA.», (La,m,315)", sC: "as b19b"},
    ], lder: [
            { line: "Venid y ved la fe sobre la tierra,(La,m,18)", sC: "tc"},
            { line: "venid y ved la fe sobre la tierra,(Re,m,258)", sC: ""},
            { line: "el Padre que sacrifica a su hijo,(Re,m9,276)", sC: ""},
            { line: "y el hijo querido que le ofrece su cuello., (Mi,7,342)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "AQUEDAH, AQUEDAH,(La,m,73)(Re,m9,183)", sC: "ta as", lines: [
            { line: "AQUEDAH, AQUEDAH., (La,m,179)", sC: "as b19"},  ]},
]}, // ULTIMA LINEA DEL CANTO: AQUEDAH
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                ASÍ HABLA EL AMÉN               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "asihablaelamen",
        tt: "Así Habla El Amén",
        title: "Así Habla El Amén",
        subtitle: "Ap 3,14-20",
        category: ["Precatecumenado","Cuaresma","Penitencial","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "20",
        notes: "",
        mant: "No",
        audioSrc: "/audio/asihablaelamen.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aquedah",
        sig: "/resucito/src/index.html?canto=avemariai",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ASÍ HABLA EL AMÉN,(Mi,m,15)", sC: "ta as"},
            { line: "EL TESTIGO FIEL Y VERAZ,(Do,,79)(Re,7,223)", sC: "as"},
            { line: "EL PRINCIPIO, ", sC: "as"},
            { line: "DE LAS CRIATURAS DE DIOS., (Mi,m,248)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Conozco tu conducta:, (Mi,m,20)", sC: "tc"},
            { line: "no eres ni frío ni caliente., (Sol,,38)", sC: ""},
            { line: "¡Ojalá fueras frío o caliente, (Re,7,221)", sC: ""},
            { line: "y no tibio!, (Si,7,58)", sC: ""},
            { line: "Porque voy a vomitarte de mi boca., (Mi,m,304)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Tú dices: «Yo soy rico, nada me falta»,(Mi,m,22)", sC: ""},
            { line: "y no te das cuenta, (Sol,,15)", sC: ""},
            { line: "que eres un desgraciado,(Re,7,203)", sC: ""},
            { line: "digno de compasión,(Si,7,177)", sC: ""},
            { line: "pobre, ciego y desnudo., (Mi,m,192)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ASÍ HABLA EL AMÉN,(Mi,m,15)", sC: "ta as", lines: [
            { line: "EL TESTIGO FIEL Y VERAZ,(Do,,79)(Re,7,223)", sC: "as"},
            { line: "EL PRINCIPIO, ", sC: "as"},
            { line: "DE LAS CRIATURAS DE DIOS., (Mi,m,248)", sC: "as"},  ]},
    ], lder: [
            { line: "Te aconsejo que me compres, (Mi,m,15)", sC: "tc"},
            { line: "oro acrisolado al fuego,(Sol,,10)", sC: ""},
            { line: "para que te enriquezcas,(Re,7,183)", sC: ""},
            { line: "y vestidos blancos, (Si,7,126)", sC: ""},
            { line: "para cubrir tu desnudez., (Mi,m,211)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Mira que estoy a la puerta y llamo;, (Mi,m,21)", sC: ""},
            { line: "si alguno oye mi voz y me abre,(Sol,,12)", sC: ""},
            { line: "entraré en su casa,(Re,7,147)(Si,7,195)", sC: ""},
            { line: "y cenaré con él y él conmigo., (Mi,m,240)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ASÍ HABLA EL AMÉN,(Mi,m,15)", sC: "ta as", lines: [
            { line: "EL TESTIGO FIEL Y VERAZ,(Do,,79)(Re,7,223)", sC: "as"},
            { line: "EL PRINCIPIO, ", sC: "as"},
            { line: "DE LAS CRIATURAS DE DIOS., (Mi,m,248)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ASÍ HABLA EL AMÉN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                AVE MARÍA I               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "avemariai",
        tt: "Ave María I",
        title: "Ave María I",
        subtitle: "Lc 1,28ss",
        category: ["PreCatecumenado","Virgen Maria","Final","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "21",
        notes: "",
        mant: "No",
        audioSrc: "/audio/avemariai.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=asihablaelamen",
        sig: "/resucito/src/index.html?canto=avemariaii(1984)",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Ave María,(Do,,10)(Mi,,77)(La,m,110)", sC: "tc"},
            { line: "llena de gracia,(Do,,10)(Mi,,105)(La,m,142)", sC: ""},
            { line: "el Señor es contigo,(Fa,,10)(Mi,,155)", sC: ""},
            { line: "bendita tú eres, (La,m,121)", sC: ""},
            { line: "entre todas las mujeres,(Rem,,73)(Mi,,189)", sC: ""},
            { line: "y bendito es el fruto, (La,m,163)", sC: ""},
            { line: "de tu vientre, Jesús., (Rem,,72)(Mi,,167)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "SANTA MARÍA,(Do,,10)(Mi,,112)(La,m,151)", sC: "ta as"},
            { line: "MADRE DE DIOS,(Do,,10)(Mi,,133)(La,m,169)", sC: "as"},
            { line: "RUEGA POR NOSOTROS, (Fa,,10)(Mi,,172)", sC: "as"},
            { line: "QUE SOMOS PECADORES,(La,m,196)", sC: "as"},
            { line: "RUEGA AHORA, (Rem,,106)", sC: "as"},
            { line: "Y EN LA HORA DE NUESTRA MUERTE., (Mi,,308)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "AMÉN, AMÉN, AMÉN., (La,m,36)(Fa,,78)(Mi,,111)(La,m,175)", sC: "as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: AVE MARÍA I
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                AVE MARÍA II (1984)               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "avemariaii(1984)",
        tt: "Ave María II (1984)",
        title: "Ave María II",
        subtitle: "Lc 1,28ss - 1984 ",
        category: ["PreCatecumenado","Cuaresma","Salmodias","Visperas","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "22",
        notes: "",
        mant: "No",
        audioSrc: "/audio/avemariaii.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=avemariai",
        sig: "/resucito/src/index.html?canto=babiloniacriminal",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Ave       María,(Do,,10)(Mi,,42)(Fa,,72)(Mi,,124)", sC: "tc"},
            { line: "llena     de gracia,(Do,,10)(Mi,,45)(Fa,,72)(Mi,,135)", sC: ""},
            { line: "el Señor es contigo,(Fa,,64)(Mi,,157)", sC: ""},
            { line: "bendita tú eres, (Fa,,52)", sC: ""},
            { line: "entre todas las mujeres,(Mi,,192)", sC: ""},
            { line: "y bendito es el fruto, (Fa,,67)", sC: ""},
            { line: "de tu vientre, Jesús., (Mi,,169)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "SANTA MARÍA,(Do,,10)(Mi,,39)(Fa,,65)(Mi,,129)", sC: "ta as"},
            { line: "MADRE DE DIOS,(Do,,10)(Mi,,42)(Fa,,68)(Mi,,138)", sC: "as"},
            { line: "RUEGA POR NOSOTROS, (Fa,,129(Mi,,172)", sC: "as"},
            { line: "QUE SOMOS PECADORES,(Fa,,68)(Mi,,200)", sC: "as"},
            { line: "RUEGA AHORA, (Fa,,111)", sC: "as"},
            { line: "Y EN LA HORA DE NUESTRA MUERTE., (Mi,,311)(Fa,,343)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "AMÉN., (Mi,,42)", sC: "as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: AVE MARÍA II (1984)
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                BABILONIA CRIMINAL               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "babiloniacriminal",
        tt: "Babilonia Criminal",
        title: "Babilonia Criminal",
        subtitle: "Sal 137 (136)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "23",
        notes: "",
        mant: "No",
        audioSrc: "/audio/babiloniacriminal.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=avemariaii(1984)",
        sig: "/resucito/src/index.html?canto=balaam",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "JUNTO A LOS CANALES DE BABILONIA,(Mi,m,15)(La,m,177)(Mi,m,321)", sC: "ta as"},
            { line: "ACORDÁNDONOS DE TI,(Si,7,222)", sC: "as"},
            { line: "NOS SENTAMOS A LLORAR., (Mi,m,240)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "DE LOS SAUCES COLGABAN, (La,m,221)", sC: "as"},
            { line: "LAS GUITARRAS,(Mi,m,96)", sC: "as"},
            { line: "ACORDÁNDONOS DE TI,(Si,7,222)", sC: "as"},
            { line: "NOS SENTAMOS A LLORAR., (Mi,m,238)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "«CANTADNOS», NOS DECÍAN, (La,m,242)", sC: "as"},
            { line: "NUESTROS ENEMIGOS., (Mi,m,170)", sC: "as"},
            { line: "«CANTADNOS», NOS DECÍAN, (La,m,241)", sC: "as"},
            { line: "NUESTROS OPRESORES., (Mi,m,184)", sC: "as"},
            { line: "ELLOS QUERÍAN QUE NOSOTROS, (Si,7,263)", sC: "as"},
            { line: "LES DIVIRTIÉRAMOS., (Mi,m,118)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¿Cómo cantar un cántico del Señor, (Re,,13)", sC: "tc"},
            { line: "en tierra extraña?, (Mi,m,128)", sC: ""},
            { line: "Si de Ti yo me olvidare,(Si,7,191)", sC: ""},
            { line: "que se me seque la mano derecha, (Mi,m,292)", sC: ""},
    ], lder: [
            { line: "Que se me pegue la lengua al paladar,(Mi,m,15)(La,m,216)(Mi,m,351)", sC: ""},
            { line: "si de ti yo me olvidare, Jerusalén,(Si,7,183)", sC: ""},
            { line: "en la cumbre de mi alegría., (Mi,m,241)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "SEÑOR, TOMA CUENTAS, (Mi,m,18)(La,m,179)", sC: "ta as"},
            { line: "A NUESTROS ENEMIGOS., (Mi,m,196)", sC: "as"},
            { line: "SEÑOR, TOMA CUENTAS, (La,m,180)", sC: "as"},
            { line: "A NUESTROS OPRESORES., (Mi,m,207)", sC: "as"},
            { line: "CUANDO ELLOS SE DECÍAN:, (Si,7,233)", sC: "as"},
            { line: "¡ARRASADLA HASTA EL CIMIENTO!, (Mi,m,279)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Capital de Babilonia criminal,(Re,,10)(Mi,m,266)", sC: "tc"},
            { line: "¡quién pudiera pagarte, (Re,,110)", sC: ""},
            { line: "los males que nos has hecho!, (Mi,m,237)", sC: ""},
            { line: "¡Quién pudiera estrellar, (Si,7,213)", sC: ""},
            { line: "tus hijos contra la piedra!, (Mi,m,198)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "JUNTO A LOS CANALES DE BABILONIA,(Mi,m,15)(La,m,177)(Mi,m,321)", sC: "ta as", lines: [
            { line: "ACORDÁNDONOS DE TI,(Si,7,222)", sC: "as"},
            { line: "NOS SENTAMOS A LLORAR., (Mi,m,240)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: BABILONIA CRIMINAL
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                BALAAM               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "balaam",
        tt: "Balaam",
        title: "Balaam",
        subtitle: "Nm 23,7-24",
        category: ["PreCatecumenado","Paz","Comunión","Final","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "24",
        notes: "",
        mant: "No",
        audioSrc: "/audio/balaam.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=babiloniacriminal",
        sig: "/resucito/src/index.html?canto=bendecirealsenorentodotiempo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "De Aram me ha hecho venir, (Mi,m,22)(Re,,255)", sC: "tc"},
            { line: "Balaq, el rey de Moab,(Mi,m,41)(Re,,192)", sC: ""},
            { line: "desde los montes de Oriente:, (Mi,m,238)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "«Ven y maldice a Jacob;, (Re,,25)(Mi,m,204)", sC: ""},
            { line: "ven y profetiza contra Israel»., (Re,,15)(Mi,m,250)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¿Cómo maldeciré, si Dios no quiere?, (Sol,,10)(Re,,168)(Sol,,216)(Si,m,258)(Mi,m,310)", sC: ""},
            { line: "¿Cómo profetizaré, si Dios no me deja?, (Sol,,10)(Re,,168)(Sol,,216)(Si,m,258)(Mi,m,342)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "De lo alto de esta cima yo diviso,(Re,,67)(Mi,m,284)", sC: ""},
            { line: "desde lo alto de esta roca yo contemplo:, (Re,,94)(Mi,m,330)", sC: ""},
            { line: "este es un pueblo distinto, (Re,,11)", sC: ""},
            { line: "a todas las naciones., (Mi,m,155)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¡QUÉ BELLAS SON TUS TIENDAS,(Mi,m,19)(Re,,246)", sC: "ta as"},
            { line: "QUÉ BELLAS SON, ISRAEL!, (Mi,m,230)", sC: "as b24"},
            { line: "¡QUÉ BELLAS SON TUS TIENDAS,(Re,,245)", sC: "as"},
            { line: "QUÉ BELLAS SON, ISRAEL!, (Mi,m,229)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¿Quién contará, contará tu multitud?, (Sol,,15)(Re,,142)(Sol,,224)(Si,m,262)(Mi,m,324)", sC: "tc"},
            { line: "JACOB, JACOB, JACOB, JACOB., (Re,,44)(Mi,m,112)(Re,,191)(Mi,m,262)", sC: "ta as"},
    ], lder: [
            { line: "Sea, sea mi muerte, (Sol,,13)(Re,,160)", sC: "tc"},
            { line: "como la muerte de su Justo., (Sol,,121)(Si,m,154)(Mi,m,232)", sC: ""},
            { line: "Vaya mi vida donde Él,(Re,,15)(Mi,m,209)", sC: ""},
            { line: "VAYA MI VIDA DONDE ÉL., (Re,,15)(Mi,m,226)", sC: "ta as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡QUÉ BELLAS SON TUS TIENDAS,(Mi,m,19)(Re,,246)", sC: "ta as", lines: [
            { line: "QUÉ BELLAS SON, ISRAEL!, (Mi,m,230)", sC: "as b24"},
            { line: "¡QUÉ BELLAS SON TUS TIENDAS,(Re,,245)", sC: "as"},
            { line: "QUÉ BELLAS SON, ISRAEL!, (Mi,m,229)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "«¿Pero qué es lo que estás haciendo?, (Mi,m,15)(Re,,305)", sC: "tc"},
            { line: "¡Tú lo estás bendiciendo!, (Mi,m,190)", sC: ""},
            { line: "Ven, quizá desde otra parte, (Re,,10)", sC: ""},
            { line: "Dios lo quiera maldecir»., (Mi,m,205)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Escucha, hijo de Sippor, pon el oído rey Balaq;, (Sol,,13)(Re,,205)(Sol,,312)(Si,m,346)(Mi,m,419)", sC: "tc"},
            { line: "que Dios no es un hombre, (Re,,67)", sC: ""},
            { line: "que dice y se arrepiente., (Mi,m,197)", sC: ""},
            { line: "Una estrella surge de Jacob,(Re,,86)(Mi,m,241)", sC: ""},
            { line: "se oyen aclamaciones por su Rey., (Re,,36)(Mi,m,300)", sC: ""},
            { line: "Dios es su Padre., (Re,,25)(Mi,m,123)", sC: ""},
            { line: "Se acuesta como león,(Re,,68)(Mi,m,193)", sC: ""},
            { line: "se echa como leona, nadie lo hará levantar»., (Re,,36)(Mi,m,159)(Re,,221)(Mi,m,399)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡QUÉ BELLAS SON TUS TIENDAS,(Mi,m,19)(Re,,246)", sC: "ta as", lines: [
            { line: "QUÉ BELLAS SON, ISRAEL!, (Mi,m,230)", sC: "as b24"},
            { line: "¡QUÉ BELLAS SON TUS TIENDAS,(Re,,245)", sC: "as"},
            { line: "QUÉ BELLAS SON, ISRAEL!, (Mi,m,229)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: BALAAM
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                BENDECIRÉ AL SEÑOR EN TODO TIEMPO               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "bendecirealsenorentodotiempo",
        tt: "Bendeciré Al Señor En Todo Tiempo",
        title: "Bendeciré Al Señor En Todo Tiempo",
        subtitle: "Sal 34 (33)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Comunión","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "25",
        notes: "",
        mant: "No",
        audioSrc: "/audio/bendecirealsenorentodotiempo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=balaam",
        sig: "/resucito/src/index.html?canto=bendicealmamiaayahveh",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "BENDECIRÉ AL SEÑOR EN TODO TIEMPO,(Re,m,20)", sC: "ta as"},
            { line: "EN MI BOCA SIEMPRE SU ALABANZA;, (Do,,86)(La,,311)", sC: "as"},
            { line: "YO ME GLORÍO EN EL SEÑOR,(Si♭,,131)(La,7,265)", sC: "as"},
            { line: "LO ESCUCHEN LOS HUMILDES, (Si♭,,81)", sC: "as"},
            { line: "Y SE ALEGREN., (La,7,79)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Cantad conmigo al Señor,(Re,m,20)", sC: "tc"},
            { line: "cantemos juntos a su Nombre., (Do,,47)(La,,222)", sC: ""},
            { line: "Porque este pobre grita, el Señor le escucha,(Si♭,,144)(La,,386)", sC: ""},
            { line: "y le libra de todas sus angustias., (Si♭,,50)(La,,259)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BENDECIRÉ AL SEÑOR EN TODO TIEMPO,(Re,m,20)", sC: "ta as", lines: [
            { line: "EN MI BOCA SIEMPRE SU ALABANZA;, (Do,,86)(La,,311)", sC: "as"},
            { line: "YO ME GLORÍO EN EL SEÑOR,(Si♭,,131)(La,7,265)", sC: "as"},
            { line: "LO ESCUCHEN LOS HUMILDES, (Si♭,,81)", sC: "as"},
            { line: "Y SE ALEGREN., (La,7,79)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Porque el ángel del Señor acampa, (Re,m,20)", sC: "tc"},
            { line: "en torno a aquellos que le temen y les salva., (Do,,41)(La,,379)", sC: ""},
            { line: "Gritan ellos, y el Señor les escucha, (Si♭,,77)", sC: ""},
            { line: "y los libra de todas sus angustias., (Si♭,,62)(La,,268)", sC: ""},
    ], lder: [
            { line: "Gustad y ved, (Re,m,20)", sC: "tc"},
            { line: "qué bueno es el Señor,(Do,,77)(La,,195)", sC: ""},
            { line: "dichoso el hombre, (Si♭,,122)", sC: ""},
            { line: "que se refugia en Él., (La,,182)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "GUSTAD Y VED, (Re,m,20)", sC: "ta as"},
            { line: "QUÉ BUENO ES EL SEÑOR,(Do,,83)(La,,227)", sC: "as"},
            { line: "DICHOSO EL HOMBRE, (Si♭,,149)", sC: "as"},
            { line: "QUE SE REFUGIA EN ÉL., (La,,206)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Porque muchas son las pruebas, (Re,m,20)", sC: "tc"},
            { line: "que le esperan al Justo,", sC: ""},
            { line: "mas de todas le libra el Señor., (Do,,90)(La,,267)", sC: ""},
            { line: "Gritan ellos, y el Señor les escucha, (Si♭,,77)(La,,299)", sC: ""},
            { line: "y los libra de todas sus angustias., (Si♭,,62)(La,,268)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BENDECIRÉ AL SEÑOR EN TODO TIEMPO,(Re,m,20)", sC: "ta as", lines: [
            { line: "EN MI BOCA SIEMPRE SU ALABANZA;, (Do,,86)(La,,311)", sC: "as"},
            { line: "YO ME GLORÍO EN EL SEÑOR,(Si♭,,131)(La,7,265)", sC: "as"},
            { line: "LO ESCUCHEN LOS HUMILDES, (Si♭,,81)", sC: "as"},
            { line: "Y SE ALEGREN., (La,7,79)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: BENDECIRÉ AL SEÑOR EN TODO TIEMPO
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════════════════════╗
║                BENDICE, ALMA MÍA, A YAHVEH               ║
╚══════════════════════════════════════════════════════════╝  */
   {
        id: "bendicealmamiaayahveh",
        tt: "Bendice, Alma Mía, A Yahveh",
        title: "Bendice, Alma Mía, A Yahveh",
        subtitle: "Sal 103 (102)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "26",
        notes: "",
        mant: "No",
        audioSrc: "/audio/bendicealmamiaayahveh.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
        desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=bendecirealsenorentodotiempo",
        sig: "/resucito/src/index.html?canto=benditaerestumaria",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "BENDICE, ALMA MÍA, A YAHVEH,(La,m,19)(Mi,,285)", sC: "ta as"},
            { line: "DEL FONDO DE MI SER, SU NOMBRE., (La,m,284)", sC: "as"},
            { line: "BENDICE, ALMA MÍA, A YAHVEH,(Mi,,281)", sC: "as"},
            { line: "NO OLVIDES SUS AMORES., (La,m,209)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Él, que tus culpas perdona,(Re,m,22)", sC: "tc"},
            { line: "que todas tus dolencias cura,(La,m,251)", sC: ""},
            { line: "saca tu vida de la muerte,(Mi,,209)", sC: ""},
            { line: "te colma de gracia y amor., (La,m,235)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Él, que te hace justicia,(Re,m,21)", sC: ""},
            { line: "que defiende a los más pobres,(La,m,246)", sC: ""},
            { line: "a Moisés enseñó sus caminos,(Mi,,245)", sC: ""},
            { line: "a Israel sus hazañas mostró., (La,m,262)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BENDICE, ALMA MÍA, A YAHVEH,(La,m,19)(Mi,,285)", sC: "ta as", lines: [
            { line: "DEL FONDO DE MI SER, SU NOMBRE., (La,m,284)", sC: "as"},
            { line: "BENDICE, ALMA MÍA, A YAHVEH,(Mi,,281)", sC: "as"},
            { line: "NO OLVIDES SUS AMORES., (La,m,209)", sC: "as"},  ]},
    ], lder: [
  
]}, // ULTIMA LINEA DEL CANTO: BENDICE, ALMA MÍA, A YAHVEH
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════════════════╗
║                BENDITA ERES TÚ, MARÍA               ║
╚═════════════════════════════════════════════════════╝  */
   {
        id: "benditaerestumaria",
        tt: "Bendita Eres Tú, María",
        title: "Bendita Eres Tú, María",
        subtitle: "Lucas 1,42-45",
        category: ["PreCatecumenado","Entrada","Virgen Maria","Final"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "27",
        notes: "",
        mant: "No",
        audioSrc: "/audio/benditaerestumaria.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=bendicealmamiaayahveh",
        sig: "/resucito/src/index.html?canto=benditoeressenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Bendita eres tú, María,(La,m,15)(Sol,,138)(La,m,196)", sC: "tc"},
            { line: "entre todas las mujeres, María., (Sol,,193)(La,m,278)", sC: ""},
            { line: "Y bendito es el fruto, María,(Sol,,166)(La,m,242)", sC: ""},
            { line: "el fruto de tu seno, Jesús., (Sol,,141)(La,m,222)", sC: ""},
            { line: "María, tú has creído., (Fa,,41)(Mi,,165)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Y CÓMO ES QUE LA MADRE DEL SEÑOR, (La,m,15)", sC: "ta as"},
            { line: "VIENE A MÍ, VIENE A MÍ., (Sol,,99)(La,m,211)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Porque apenas he sentido tu voz,(La,m,21)(Mi,,293)", sC: "tc"},
            { line: "algo se ha movido dentro de mí,(Re,m,21)(Mi,,298)", sC: ""},
            { line: "mi niño ha exultado de gozo., (Re,m,48)(Mi,,242)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "MARÍA, BENDITA MARÍA,(La,m,18)(Fa,,217)", sC: "ta as"},
            { line: "TÚ HAS CREÍDO LA PALABRA DEL SEÑOR., (Mi,,376)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Y CÓMO ES QUE LA MADRE DEL SEÑOR, (La,m,15)", sC: "ta as", lines: [
            { line: "VIENE A MÍ, VIENE A MÍ., (Sol,,99)(La,m,211)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Porque apenas he sentido tu voz, (La,m,21)(Fa,,291)", sC: "tc", lines: [
            { line: "algo se ha movido dentro de mí,(Re,m,21)(Mi,,298)", sC: ""},
            { line: "mi niño ha exultado de gozo., (Re,m,48)(Mi,,242)", sC: ""},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "MARÍA, BENDITA MARÍA,(La,m,18)(Fa,,217)", sC: "ta as", lines: [
            { line: "TÚ HAS CREÍDO LA PALABRA DEL SEÑOR., (Mi,,376)", sC: "as"},]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: BENDITA ERES TÚ, MARÍA
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════════════╗
║                BENDITO ERES, SEÑOR               ║
╚══════════════════════════════════════════════════╝  */
   {
        id: "benditoeressenor",
        tt: "Bendito Eres, Señor",
        title: "Bendito Eres, Señor",
        subtitle: "Daniel 3,52-57",
        category: ["PreCatecumenado","Salmodias","Visperas"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "28",
        notes: "",
        mant: "No",
        audioSrc: "/audio/benditoeressenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=benditaerestumaria",
        sig: "/resucito/src/index.html?canto=benditoseadios",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Bendito eres, Señor,(Sol,,13)(Fa#,m,104)(Mi,,177)", sC: "tc"},
            { line: "Dios de nuestros padres:, (Sol,,13)(La,,108)(Si,,176)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A TI GLORIA Y ALABANZA,(Mi,m,36)(Re,,78)(Mi,m,197)", sC: "ta as"},
            { line: "A TI GLORIA POR LOS SIGLOS., (Re,,28)(So,,78)(Si,7,230)(Mi,m,302)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Bendito sea tu nombre,(Sol,,13)(Fa#,m,104)(Mi,,157)", sC: "tc"},
            { line: "tu nombre santo y glorioso:, (Sol,,39)(La,,115)(Si,,230)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A ÉL GLORIA Y ALABANZA,(Mi,m,37)(Re,,85)(Mi,m,203)", sC: "ta as"},
            { line: "A ÉL GLORIA POR LOS SIGLOS., (Re,,30)(Do,,84)(Si,7,234)(Mi,m,315)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Bendito eres en el templo,(Sol,,14)(Fa#,m,103)(Mi,,195)", sC: "tc"},
            { line: "en el templo de tu santa gloria:, (Sol,,65)(La,,195)(Si,,262)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "A TI GLORIA Y ALABANZA,(Mi,m,37)(Re,,85)(Mi,m,203)", sC: "ta as", lines: [
            { line: "A TI GLORIA POR LOS SIGLOS., (Re,,30)(Do,,84)(Si,7,234)(Mi,m,315)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Bendito eres sobre el trono,(Sol,,14)(Fa#,m,104)(Mi,,227)", sC: "tc"},
            { line: "sobre el trono de tu reino:, (Sol,,102)(La,,156)(Si,,217)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "A TI GLORIA Y ALABANZA,(Mi,m,37)(Re,,85)(Mi,m,203)", sC: "ta as", lines: [
            { line: "A TI GLORIA POR LOS SIGLOS., (Re,,30)(Do,,84)(Si,7,234)(Mi,m,315)", sC: "as"},  ]},
    ], lder: [
            { line: "Bendito entre querubines,(Sol,,15)(Fa#,m,106)(Mi,,201)", sC: "tc"},
            { line: "tú, que sondeas los abismos:, (Sol,,15)(La,,123)(Si,,213)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "A TI GLORIA Y ALABANZA,(Mi,m,37)(Re,,85)(Mi,m,203)", sC: "ta as", lines: [
            { line: "A TI GLORIA POR LOS SIGLOS., (Re,,30)(Do,,84)(Si,7,234)(Mi,m,315)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Bendito eres, Señor,(Sol,,12)(Fa#,m,100)(Mi,,176)", sC: "tc"},
            { line: "en la bóveda del cielo., (Sol,,12)(La,,70)(Si,,185)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A TI HONOR Y ALABANZA,(Mi,m,31)(Re,,91)(Mi,m,194)", sC: "ta as"},
            { line: "A TI GLORIA POR LOS SIGLOS., (Re,,29)(Do,,76)(Si,7,227)(Mi,m,302)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Criaturas todas del Señor,(Sol,,12)(Fa#,m,113)(Mi,,227)", sC: "tc"},
            { line: "BENDECID AL SEÑOR., (Sol,,79)(La,,113)(Si,,186)", sC: "ta as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Ensalzadlo con himnos por los siglos,(Mi,m,67)(Re,,159)(Mi,m,311)", sC: "tc"},
            { line: "ENSALZADLO, (Re,,81)", sC: "ta as"},
            { line: "CON HIMNOS POR LOS SIGLOS., (Do,,61)(Si,7,241)(Mi,m,316)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: BENDITO ERES, SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔═══════════════════════════════════════════════╗
║                BENDITO SEA DIOS               ║
╚═══════════════════════════════════════════════╝  */
   {
        id: "benditoseadios",
        tt: "Bendito Sea Dios",
        title: "Bendito Sea Dios",
        subtitle: "Efesios 1,3-13",
        category: ["PreCatecumenado","Adviento","Navidad","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "29",
        notes: "",
        mant: "No",
        audioSrc: "/audio/benditoseadios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=benditoeressenor",
        sig: "/resucito/src/index.html?canto=benedictus",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "BENDITO SEA DIOS, (Re,,10)(Mi,m,75)(La,7,122)(Re,,163)", sC: "ta as"},
            { line: "Y PADRE DE JESUCRISTO., (Mi,m,69)(La,7,115)(Re,,199)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que nos ha bendecido, (Fa#,,15)", sC: "tc"},
            { line: "con toda clase de amor;, (Si,m,214)", sC: ""},
            { line: "y nos ha elegido, (Fa#,,129)", sC: ""},
            { line: "antes de la creación,(Si,m,174)", sC: ""},
            { line: "para ser santos e inmaculados, (La,,63)(Sol,,259)", sC: ""},
            { line: "en el amor., (Fa#,,90)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PARA SER ALABANZA DE SU GLORIA,(Si,m,81)", sC: "ta as"},
            { line: "DE LA GLORIA DE SU GRACIA,(La,,243)", sC: "as"},
            { line: "DE LA GRACIA DE SU AMOR,(Sol,,244)", sC: "as"},
            { line: "CON LA QUE NOS AMÓ EN JESUCRISTO., (Fa#,,331)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BENDITO SEA DIOS, (Re,,10)(Mi,m,75)(La,7,122)(Re,,163)", sC: "ta as", lines: [
            { line: "Y PADRE DE JESUCRISTO., (Mi,m,69)(La,7,115)(Re,,199)", sC: "as"},  ]},
    ], lder: [
            { line: "En Él tenemos la redención,(Fa#,,15)(Si,m,248)", sC: "tc"},
            { line: "el perdón de los pecados,(Fa#,,76)", sC: ""},
            { line: "según la riqueza de su amor,(Si,m,259)", sC: ""},
            { line: "para que en la plenitud de los tiempos, (La,,79)(Sol,,310)", sC: ""},
            { line: "Cristo sea todo en todos., (Fa#,,191)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "PARA SER ALABANZA DE SU GLORIA,(Si,m,81)", sC: "ta as", lines: [
            { line: "DE LA GLORIA DE SU GRACIA,(La,,243)", sC: "as"},
            { line: "DE LA GRACIA DE SU AMOR,(Sol,,244)", sC: "as"},
            { line: "CON LA QUE NOS AMÓ EN JESUCRISTO., (Fa#,,331)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "BENDITO SEA DIOS, (Re,,10)(Mi,m,75)(La,7,122)(Re,,163)", sC: "ta as", lines: [
            { line: "Y PADRE DE JESUCRISTO., (Mi,m,69)(La,7,115)(Re,,199)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En Él también nosotros,(Fa#,,15)", sC: "tc"},
            { line: "tras haber escuchado la Palabra de la verdad,(Si,m,415)", sC: ""},
            { line: "la Buena Nueva, (Fa#,,115)", sC: ""},
            { line: "de nuestra salvación,(Si,m,179)", sC: ""},
            { line: "fuimos sellados con el Espíritu Santo,(La,,109)(Sol,,311)", sC: ""},
            { line: "garantía de nuestra resurrección., (Fa#,,296)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "PARA SER ALABANZA DE SU GLORIA,(Si,m,81)", sC: "ta as", lines: [
            { line: "DE LA GLORIA DE SU GRACIA,(La,,243)", sC: "as"},
            { line: "DE LA GRACIA DE SU AMOR,(Sol,,244)", sC: "as"},
            { line: "CON LA QUE NOS AMÓ EN JESUCRISTO., (Fa#,,331)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: BENDITO SEA DIOS
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════╗
║                BENEDICTUS               ║
╚═════════════════════════════════════════╝  */
   {
        id: "benedictus",
        tt: "Benedictus",
        title: "Benedictus",
        subtitle: "Lucas 1,67-80",
        category: ["PreCatecumenado","Antiguo Testamento","Salmodias"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "30",
        notes: "",
        mant: "No",
        audioSrc: "/audio/benedictus.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=benditoseadios",
        sig: "/resucito/src/index.html?canto=cantadadios",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Bendito sea el Señor,(Re,m,21)", sC: "tc"},
            { line: "DIOS DE ISRAEL,(Sol,m,27)(Re,m,138)", sC: "ta as"},
            { line: "porque ha visitado y redimido a su pueblo,", sC: "tc"},
            { line: "SUSCITÁNDONOS, (Sol,m,78)", sC: "ta as"},
            { line: "UNA FUERZA DE SALVACIÓN, (Re,m,250)", sC: "as"},
            { line: "EN LA CASA DE DAVID, SU SIERVO., (La,7,81)(Re,m,286)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Según lo había predicho desde antiguo, (Sol,m,23)(Re,m,336)", sC: "tc"},
            { line: "por boca de sus santos profetas., (Sol,m,56)(Re,m,270)", sC: ""},
            { line: "Es la salvación que nos libra de nuestros enemigos, (La,7,19)", sC: ""},
            { line: "y de la mano de todos los que nos odian., (Re,m,350)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Realizando así la misericordia, (Sol,m,66)", sC: ""},
            { line: "que tuvo con nuestros padres,(Re,m,235)", sC: ""},
            { line: "recordando su santa alianza, (Sol,m,70)(Re,m,231)", sC: ""},
            { line: "y el juramento que juró, (La,7,103)", sC: ""},
            { line: "a nuestro padre Abraham,(Re,m,220)", sC: ""},
            { line: "para concedernos que, libres de todo temor,(Sol,m,129)(Re,m,400)", sC: ""},
            { line: "arrancados de la mano de nuestros enemigos,(Sol,m,69)(Re,m,396)", sC: ""},
            { line: "le sirvamos con santidad y justicia,(La,7,62)", sC: ""},
            { line: "en su presencia, todos nuestros días., (Re,m,104)(La,7,179)(Re,m,327)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
    ], lder: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BENDITO SEA EL SEÑOR, (Re,m,21)", sC: "ta as", lines: [
            { line: "DIOS DE ISRAEL,(Sol,m,27)(Re,m,138)", sC: "as"},
            { line: "porque ha visitado y redimido a su pueblo,", sC: "tc"},
            { line: "SUSCITÁNDONOS, (Sol,m,78)", sC: "ta as"},
            { line: "UNA FUERZA DE SALVACIÓN, (Re,m,250)", sC: "as"},
            { line: "EN LA CASA DE DAVID, SU SIERVO., (La,7,81)(Re,m,286)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y a ti, niño,(Sol,m,22)", sC: "tc"},
            { line: "te llamarán profeta del Altísimo,(Re,m,251)", sC: ""},
            { line: "porque irás delante del Señor, (Sol,m,95)", sC: ""},
            { line: "a preparar sus caminos,(Re,m,189)", sC: ""},
            { line: "anunciando a su pueblo la salvación,(La,7,68)", sC: ""},
            { line: "el perdón de todos sus pecados., (Re,m,259)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Por la entrañable misericordia, (Sol,m,136)", sC: ""},
            { line: "de nuestro Dios,(Re,m,131)", sC: ""},
            { line: "nos visitará el sol que nace de lo alto,(Sol,m,102)(Re,m,335)", sC: ""},
            { line: "para iluminar a los que viven en tinieblas, (La,7,115)", sC: ""},
            { line: "y en sombra de muerte,(Re,m,185)", sC: ""},
            { line: "para guiar nuestros pasos, (La,7,87)", sC: ""},
            { line: "por el camino de la paz., (Re,m,207)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "BENDITO SEA EL SEÑOR, (Re,m,21)", sC: "ta as", lines: [
            { line: "DIOS DE ISRAEL,(Sol,m,27)(Re,m,138)", sC: "as"},
            { line: "porque ha visitado y redimido a su pueblo,", sC: "tc"},
            { line: "SUSCITÁNDONOS, (Sol,m,78)", sC: "ta as"},
            { line: "UNA FUERZA DE SALVACIÓN, (Re,m,250)", sC: "as"},
            { line: "EN LA CASA DE DAVID, SU SIERVO., (La,7,81)(Re,m,286)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: BENEDICTUS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════╗
║                CANTAD A DIOS               ║
╚════════════════════════════════════════════╝  */
   {
        id: "cantadadios",
        tt: "Cantad A Dios",
        title: "Cantad A Dios",
        subtitle: "Salmo 67 (68) 2.4-7",
        category: ["PreCatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "31",
        notes: "",
        mant: "No",
        audioSrc: "/audio/cantadadios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=benedictus",
        sig: "/resucito/src/index.html?canto=cantadalsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "CANTAD A DIOS,(Mi,,10)", sC: "ta as"},
            { line: "SALMODIAD PARA SU NOMBRE., ", sC: "as b31"},
            { line: "CANTAD A DIOS,", sC: "as"},
            { line: "ALLANAD EL CAMINO, (Re,m9,180)", sC: "as"},
            { line: "AL QUE CABALGA EN LAS NUBES., (Mi,,273)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Señor es su Nombre, alegraos ante Él., (Mi,,12)(Re,m9,262)", sC: "tc"},
            { line: "Padre de los huérfanos,", sC: ""},
            { line: "defensor de las viudas, es Dios., (Mi,,279)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "A los más pobres hace habitar en su casa,(Re,m9,128)(Mi,,372)", sC: ""},
            { line: "a los cautivos Él los libra con amor., (Re,m9,107)(Mi,,321)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SE LEVANTA DIOS,(Mi,,11)", sC: "ta as"},
            { line: "SUS ENEMIGOS SE DISPERSAN;, ", sC: "as"},
            { line: "LOS JUSTOS SE ALEGRAN, ", sC: "as"},
            { line: "Y CANTAN DE ALEGRÍA., (Re,m9,45)(Mi,,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "CANTAD A DIOS,(Mi,,10)", sC: "ta as", lines: [
            { line: "SALMODIAD PARA SU NOMBRE., ", sC: "as b31"},
            { line: "CANTAD A DIOS,", sC: "as"},
            { line: "ALLANAD EL CAMINO, (Re,m9,180)", sC: "as"},
            { line: "AL QUE CABALGA EN LAS NUBES., (Mi,,273", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: CANTAD A DIOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════════════╗
║                CANTAD AL SEÑOR               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "cantadalsenor",
        tt: "Cantad Al Señor",
        title: "Cantad Al Señor",
        subtitle: "Salmo 117 (116)",
        category: ["PreCatecumenado","Salmodias","Visperas","Entrada","Final"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Melisma",
        dbno: "32",
        notes: "",
        mant: "No",
        audioSrc: "/audio/cantadalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=cantadadios",
        sig: "/resucito/src/index.html?canto=canticodelostresjovenes",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "CANTAD AL SEÑOR,(Sol,,15)(La,m,207)", sC: "ta as"},
            { line: "PUEBLOS TODOS DE LA TIERRA,", sC: "as"},
            { line: "NACIONES, DADLE GLORIA., (Do,,57)(Si,7,217)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque grande es su amor hacia nosotros,(Sol,,15)(La,m,421)", sC: "tc a321"},
            { line: "es eterna su misericordia, ", sC: "a322"},
            { line: "naciones, dadle gloria., (Do,,46)(Si,7,186)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "CANTAD AL SEÑOR,(Sol,,15)(La,m,207)", sC: "ta as", lines: [
            { line: "PUEBLOS TODOS DE LA TIERRA,", sC: "as"},
            { line: "NACIONES, DADLE GLORIA., (Do,,57)(Si,7,217)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque firme es su amor hacia nosotros,(Sol,,15)(La,m,405)", sC: "tc a323"},
            { line: "su fidelidad dura por siempre,", sC: "a324"},
            { line: "naciones, dadle gloria., (Do,,46)(Si,7,184)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "CANTAD AL SEÑOR, (Sol,,15)(La,m,207)", sC: "ta as", lines: [
            { line: "PUEBLOS TODOS DE LA TIERRA, ", sC: "as"},
            { line: "NACIONES, DADLE GLORIA., (Do,,57)(Si,7,217)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: CANTAD AL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════════════════════╗
║                CÁNTICO DE LOS TRES JÓVENES               ║
╚══════════════════════════════════════════════════════════╝  */
   {
        id: "canticodelostresjovenes",
        tt: "Cántico De Los Tres Jóvenes",
        title: "Cántico De Los Tres Jóvenes",
        subtitle: "Daniel 3,57-58",
        category: ["PreCatecumenado","Salmodias","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",       //Nota del canto = nCan
        nCanURL: "",    //URL de la nota del canto
        dbno: "33",
        notes: "",
        mant: "No",
        audioSrc: "/audio/canticodelostresjovenes.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=cantadalsenor",
        sig: "/resucito/src/index.html?canto=cantodemoises",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Criaturas todas del Señor,(La,m,15)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "BENDECID AL SEÑOR., (Mi,7,88)(La,m,181)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ensalzadlo, (Mi,7,69)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CON HIMNOS POR LOS SIGLOS., (La,m,242)", sC: "ta as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Ángeles del Señor, ", sC: "bdcd"},
            { line: "Cielos,", sC: "bdcd"},
            { line: "", sC: "tc1"}, // Espacio Generado para separar contenido
            { line: "", sC: "ta1"}, // Espacio Generado para separar contenido

            { line: "Aguas del espacio,", sC: "bdcd"},
            { line: "Ejércitos del Señor,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Sol y Luna,", sC: "bdcd"},
            { line: "Astros del Cielo,", sC: "bdcd"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Fuego y calor,", sC: "bdcd"},
            { line: "Fríos y heladas,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Rocíos y nevadas,", sC: "bdcd"},
            { line: "Témpanos y hielos,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Escarchas y nieves,", sC: "bdcd"},
            { line: "Noche y día,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Luz y tinieblas,", sC: "bdcd"},
            { line: "Rayos y nubes,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Bendiga la tierra al Señor, (Mi,7,56)", sC: "tc"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "LO ENSALCE, ", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CON HIMNOS POR LOS SIGLOS., (La,m,242)", sC: "as"},
    ], lder: [
            { line: "Montes y cumbres,(La,m,21)(Mi,7,359)", sC: "bdcd"},
            { line: "Cuanto germina en la tierra,", sC: "bdga"},
            { line: "", sC: "tc1"}, // Espacio Generado para separar contenido
            { line: "", sC: "ta1"}, // Espacio Generado para separar contenido
            

            { line: "Manantiales,", sC: "bdcd"},
            { line: "Mares y ríos,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Cetáceos y peces,", sC: "bdcd"},
            { line: "Aves del cielo,", sC: "bdcd"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Fieras y ganados,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Ensalzadlo, (Mi,7,69)", sC: "tc"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "CON HIMNOS POR LOS SIGLOS, (La,m,241)", sC: "ta as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Hijos de los hombres,(La,m,15)(Mi,7,390)", sC: "bdcd"},
            { line: "Bendiga Israel al Señor,", sC: "bdga"},
            { line: "", sC: "tc1"}, // Espacio Generado para separar contenido
            { line: "", sC: "ta1"}, // Espacio Generado para separar contenido
            
            { line: "Sacerdotes del Señor,", sC: "bdcd"},
            { line: "Siervos del Señor,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Almas y espíritus justos,", sC: "bdcd"},
            { line: "Santos y humildes de corazón,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Ananías, Azarías y Misael,", sC: "bdcd"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Ensalzadlo, (Mi,7,70)", sC: "tc"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "CON HIMNOS POR LOS SIGLOS, (La,m,243)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: CÁNTICO DE LOS TRES JÓVENES
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════════╗
║                CANTO DE MOISÉS               ║
╚══════════════════════════════════════════════╝  */
   {
        id: "cantodemoises",
        tt: "Canto De Moisés",
        title: "Canto De Moisés",
        subtitle: "Éxodo 15,1-18",
        category: ["PreCatecumenado","Pascua","Pentecostés","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "Version 2",
        nCanURL: "index.html?canto=cantodemoises1",
        dbno: "34",
        notes: "",
        mant: "No",
        audioSrc: "/audio/cantodemoises.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=canticodelostresjovenes",
        sig: "/resucito/src/index.html?canto=caritaschristiurgetnos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cantemos al Señor,(Do,7,19)(Fa,,167)", sC: "tc"},
            { line: "cantemos al Señor,(La,7,164)", sC: ""},
            { line: "que se cubrió de gloria,(Re,7,188)", sC: ""},
            { line: "de gloria, de gloria,", sC: ""},
            { line: "precipitó en el mar, (Sol,7,161)", sC: ""},
            { line: "caballo y caballero., (Do,7,156)", sC: ""},
// ---------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "ta as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ---------------------------------------------------------------------------------------------------
            { line: "El Señor es un guerrero,(Fa,,196)", sC: "tc"},
            { line: "su nombre es Yahveh., (La,7,187)", sC: ""},
            { line: "Precipitó en el mar a los valientes,(Re,7,167)", sC: ""},
            { line: "la flor del Faraón., (Sol,7,144)", sC: ""},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
    ], lder: [
            { line: "Tu diestra poderosa,", sC: "tc nSpace"},
            { line: "gloriosa por su fuerza, ", sC: "nSpace"},
            { line: "tu diestra, oh Señor, aplasta al enemigo,", sC: "nSpace"},
            { line: "aplasta al enemigo., ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
            { line: "El enemigo había dicho:, ", sC: "nSpace"},
            { line: "«Les perseguiré y alcanzaré,", sC: "nSpace"},
            { line: "desnudaré la espada, se saciará mi alma,", sC: "nSpace"},
            { line: "los aniquilaré.», ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
            { line: "Soplaste con tu aliento, ", sC: "nSpace"},
            { line: "y el mar los sepultó., ", sC: "nSpace"},
            { line: "Se hundieron como plomo, ", sC: "nSpace"},
            { line: "en las aguas de la muerte,", sC: "nSpace"},
            { line: "en las aguas formidables., ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
            { line: "¿Quién como tú, Señor,", sC: "nSpace"},
            { line: "glorioso en santidad,", sC: "nSpace"},
            { line: "terrible en las empresas, autor de maravillas,", sC: "nSpace"},
            { line: "autor de maravillas?, ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
            { line: "Rescatas a tu pueblo,", sC: "nSpace"},
            { line: "lo llevas a tu casa., ", sC: "nSpace"},
            { line: "Los príncipes de Edom, se estremecen, ", sC: "nSpace"},
            { line: "al paso de Jacob., ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
            { line: "Lo llevas y lo plantas, ", sC: "nSpace"},
            { line: "en el lugar sagrado, ", sC: "nSpace"},
            { line: "sobre tu monte santo, el santuario, ", sC: "nSpace"},
            { line: "que tus manos prepararon., ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_6", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
]}, // ULTIMA LINEA DEL CANTO: CANTO DE MOISÉS
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════════╗
║                CANTO DE MOISÉS               ║
╚══════════════════════════════════════════════╝  */
   {
        id: "cantodemoises1",
        tt: "Canto De Moisés",
        title: "Canto De Moisés",
        subtitle: "Éxodo 15,1-18",
        category: ["PreCatecumenado","Pascua","Pentecostés","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "34",
        notes: "",
        mant: "No",
        audioSrc: "/audio/cantodemoises.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=canticodelostresjovenes",
        sig: "/resucito/src/index.html?canto=caritaschristiurgetnos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cantemos al Señor,(Do,7,19)(Fa,,167)", sC: "tc"},
            { line: "cantemos al Señor,(La,7,164)", sC: ""},
            { line: "que se cubrió de gloria,(Re,7,188)", sC: ""},
            { line: "de gloria, de gloria,", sC: ""},
            { line: "precipitó en el mar, (Sol,7,161)", sC: ""},
            { line: "caballo y caballero., (Do,7,156)", sC: ""},
// ---------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "ta as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ---------------------------------------------------------------------------------------------------
            { line: "El Señor es un guerrero,(Fa,,196)", sC: "tc"},
            { line: "su nombre es Yahveh., (La,7,187)", sC: ""},
            { line: "Precipitó en el mar a los valientes,(Re,7,167)", sC: ""},
            { line: "la flor del Faraón., (Sol,7,144)", sC: ""},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
    ], lder: [
            { line: "Tu diestra poderosa,", sC: "tc nSpace"},
            { line: "gloriosa por su fuerza, ", sC: "nSpace"},
            { line: "tu diestra, oh Señor, aplasta al enemigo,", sC: "nSpace"},
            { line: "aplasta al enemigo., ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as nSpace", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
            { line: "El enemigo había dicho:, ", sC: "nSpace"},
            { line: "«Les perseguiré y alcanzaré,", sC: "nSpace"},
            { line: "desnudaré la espada, se saciará mi alma,", sC: "nSpace"},
            { line: "los aniquilaré.», ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as nSpace", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
            { line: "Soplaste con tu aliento, ", sC: "nSpace"},
            { line: "y el mar los sepultó., ", sC: "nSpace"},
            { line: "Se hundieron como plomo, ", sC: "nSpace"},
            { line: "en las aguas de la muerte,", sC: "nSpace"},
            { line: "en las aguas formidables., ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as nSpace", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
            { line: "¿Quién como tú, Señor,", sC: "nSpace"},
            { line: "glorioso en santidad,", sC: "nSpace"},
            { line: "terrible en las empresas, autor de maravillas,", sC: "nSpace"},
            { line: "autor de maravillas?, ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as nSpace", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
            { line: "Rescatas a tu pueblo,", sC: "nSpace"},
            { line: "lo llevas a tu casa., ", sC: "nSpace"},
            { line: "Los príncipes de Edom, se estremecen, ", sC: "nSpace"},
            { line: "al paso de Jacob., ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_6", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as nSpace", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
            { line: "Lo llevas y lo plantas, ", sC: "nSpace"},
            { line: "en el lugar sagrado, ", sC: "nSpace"},
            { line: "sobre tu monte santo, el santuario, ", sC: "nSpace"},
            { line: "que tus manos prepararon., ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_7", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as nSpace", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS, (Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO,", sC: "as nSpace"},
            { line: "CABALLO Y CABALLERO., ", sC: "as nSpace"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
]}, // ULTIMA LINEA DEL CANTO: CANTO DE MOISÉS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║                CARITAS CHRISTI URGET NOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "caritaschristiurgetnos",
        tt: "Caritas Christi Urget Nos",
        title: "Caritas Christi Urget Nos",
        subtitle: "2ª Corintios 5,14.15.17.21",
        category: ["PreCatecumenado","Cuaresma","Penitencial","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "35",
        notes: "",
        mant: "No",
        audioSrc: "/audio/caritaschristiurgetnos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=cantodemoises",
        sig: "/resucito/src/index.html?canto=carmen63",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡CARITAS CHRISTI URGET NOS!, (La,m,19)(Do,,184)(Mi,,271)", sC: "ta as"},
            { line: "¡CARITAS CHRISTI URGET NOS!, (Fa,,11)(Mi,,273)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El amor de Cristo, (La,m,20)", sC: "tc"},
            { line: "nos apremia al pensar,, (Do,,12)(Mi,,198)", sC: ""},
            { line: "EL AMOR DE CRISTO, (Fa,,12)", sC: "ta as"},
            { line: "NOS APREMIA AL PENSAR,, (Mi,,229)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "que si uno murió por todos,, (La,m,21)", sC: "tc"},
            { line: "todos por tanto murieron., (Do,,12)(Mi,,200)", sC: ""},
            { line: "QUE SI CRISTO MURIÓ POR TODOS,, (Fa,,11)", sC: "ta as"},
            { line: "TODOS MURIERON., (Mi,,129)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y murió por todos para que los que viven, (Re,m,15)(Mi,,356)", sC: "tc"},
            { line: "no vivan más para sí,, (Re,m,21)(Mi,,189)", sC: ""},
            { line: "sino para aquel que murió, (Fa,,15)(Re,m9,250)", sC: ""},
            { line: "y resucitó por ellos., (Sol,,11)(Mi,,140)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡CARITAS CHRISTI URGET NOS!, (La,m,19)(Do,,184)(Mi,,271)", sC: "ta as", lines: [
            { line: "¡CARITAS CHRISTI URGET NOS!, (Fa,,11)(Mi,,273)", sC: "as"},  ]},
    ], lder: [
            { line: "El que está en Cristo es una nueva creación;, (Re,m,20)(Mi,,397)", sC: "tc"},
            { line: "pasó lo viejo, todo es nuevo., (Re,m,21)(Mi,,231)", sC: ""},
            { line: "A quien no conoció pecado,, (Fa,,10)(Re,m9,229)", sC: ""},
            { line: "Dios le hizo pecado,, ", sC: ""},
            { line: "para que fuésemos justicia de Dios en Él., (Sol,,12)(Mi,,381)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Ay de mí si no anunciase, (La,m,15)(La,7,82)", sC: "tc"},
            { line: "el Evangelio!, (Re,m,90)", sC: ""},
            { line: "¡Ay de mí! ¡Ay de mí!, (Mi,,83)(La,m,182)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡AY DE MÍ SI NO ANUNCIASE, (La,7,81)", sC: "ta as"},
            { line: "EL EVANGELIO!, (Re,m,99)", sC: "as"},
            { line: "¡AY DE MÍ! ¡AY DE MÍ!, (Mi,,100)(La,m,189)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "¡CARITAS CHRISTI URGET NOS!, (La,m,19)(Do,,184)(Mi,,271)", sC: "ta as", lines: [
            { line: "¡CARITAS CHRISTI URGET NOS!, (Fa,,11)(Mi,,273)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: CARITAS CHRISTI URGET NOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           CARMEN 63 - (ESTÁN ROTAS MIS ATADURAS )      ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "carmen63",
        tt: "Carmen 63 - (Están Rotas Mis Ataduras )",
        title: "Carmen 63",
        subtitle: "(Rabindranath Tagore)*",
        category: ["PreCatecumenado","Comunión","Final","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* La Cosecha, poema 74, Antes: Están rotas mis ataduras",
        nCanURL: "/docs/Tagore La Cosecha.pdf",
        dbno: "36",
        notes: "",
        mant: "No",
        audioSrc: "/audio/carmen63.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=caritaschristiurgetnos",
        sig: "/resucito/src/index.html?canto=comocondenadosamuerte",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Están rotas mis ataduras,, (La,m,15)(Mi,,55)(Fa,,204)", sC: "tc"},
            { line: "pagadas mis deudas,, (Re,m,43)(Mi,,146)", sC: ""},
            { line: "mis puertas de par en par ..., (Fa,,68)", sC: ""},
            { line: "¡me voy a todas partes!, (Mi,,173)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ellos, acurrucados en su rincón,, (Re,m,21)(Mi,,284)", sC: ""},
            { line: "siguen tejiendo, (Re,m,19)", sC: ""},
            { line: "el pálido lienzo de sus horas;, (Mi,,239)", sC: ""},
            { line: "o vuelven a sentarse en el polvo,, (Fa,,44)", sC: ""},
            { line: "a contar sus monedas., (Mi,,171)", sC: ""},
            { line: "Y me llaman, y me llaman, (Fa,,66)(Mi,,199)", sC: ""},
            { line: "para que no siga., (Fa,,21)(Mi,,134)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Pero ya mi espada está forjada,, (La,m,21)(Mi,m,278)", sC: ""},
            { line: "ya tengo puesta mi armadura,, (La,m,22)(Mi,m,250)", sC: ""},
            { line: "ya mi caballo se impacienta!..., (Sol,,15)(Si,,232)", sC: ""},
            { line: "¡Y yo ganaré mi reino!, (Re,,14)(La,,70)(Fa#,,170)", sC: ""},
            { line: "¡Y yo ganaré mi reino!, (Si,m,16)(Sol,,69)(Fa#,,170)", sC: ""},
    ], lder: [
            { line: "¡GANARÉ MI REINO,, (Re,,12)(La,,149)", sC: "ta as"},
            { line: "GANARÉ MI REINO,, (Re,,24)(La,,145)", sC: "as"},
            { line: "ME VOY A TODAS PARTES!, (Mi,,57)(La,,193)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡GANARÉ MI REINO,, (Re,,15)(La,,149)", sC: "as"},
            { line: "GANARÉ MI REINO,, (Re,,21)(La,,142)", sC: "as"},
            { line: "ME VOY A TODAS PARTES!, (Mi,,56)(La,,192)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ESTÁN ROTAS MIS ATADURAS,, (La,m,19)(Mi,,59)(Fa,,241)", sC: "ta as"},
            { line: "PAGADAS MIS DEUDAS,, (Re,m,46)(Mi,,167)", sC: "as"},
            { line: "MIS PUERTAS DE PAR EN PAR ..., (Fa,,79)", sC: "as"},
            { line: "¡ME VOY A TODAS PARTES!, (Mi,,196)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡GANARÉ MI REINO,, (Re,,12)(La,,149)", sC: "ta as", lines: [
            { line: "GANARÉ MI REINO,, (Re,,24)(La,,145)", sC: "as"},
            { line: "ME VOY A TODAS PARTES!, (Mi,,57)(La,,193)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: CARMEN 63 - (ESTÁN ROTAS MIS ATADURAS )
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           COMO CONDENADOS A MUERTE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "comocondenadosamuerte",
        tt: "Como Condenados A Muerte",
        title: "Como Condenados A Muerte",
        subtitle: "1ª Corintios 4,9-13",
        category: ["PreCatecumenado","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "37",
        notes: "",
        mant: "No",
        audioSrc: "/audio/comocondenadosamuerte.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=carmen63",
        sig: "/resucito/src/index.html?canto=comoesmaravilloso",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Hasta el presente, pasamos hambre,, (La,m,15)(Sol,,287)", sC: "tc"},
            { line: "pasamos sed y desnudez., (La,m,227)", sC: ""},
            { line: "Somos abofeteados,, (Sol,,13)", sC: ""},
            { line: "y andamos errantes., (La,m,144)", sC: ""},
            { line: "SOMOS ABOFETEADOS,, (Sol,,12)", sC: "ta as"},
            { line: "Y ANDAMOS ERRANTES., (La,m,170)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Insultados, bendecimos,, (Sol,,59)(La,m,183)", sC: "tc"},
            { line: "perseguidos, lo soportamos., (Sol,,84)(La,m,217)", sC: ""},
            { line: "Si somos difamados,, (Sol,,15)", sC: ""},
            { line: "respondemos con amor., (La,m,216)", sC: ""},
            { line: "SI SOMOS DIFAMADOS,, (Sol,,15)", sC: "ta as"},
            { line: "RESPONDEMOS CON AMOR., (La,m,247)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HEMOS VENIDO A SER,, (La,m,13)(Sol,,196)", sC: "ta as"},
            { line: "HEMOS VENIDO A SER,, (La,m,198)", sC: "as"},
            { line: "HEMOS VENIDO A SER,, (Sol,,195)", sC: "as"},
            { line: "LA BASURA DEL MUNDO,, (La,m,187)", sC: "as"},
            { line: "EL ESTROPAJO DE TODOS., (Sol,,13)(La,m,200)", sC: "as"},
    ], lder: [
            { line: "Porque pienso que a nosotros,, (La,m,21)(Sol,,243)", sC: "tc"},
            { line: "los apóstoles,, (La,m,66)", sC: ""},
            { line: "Dios nos ha asignado, (Sol,,175)", sC: ""},
            { line: "el último lugar., (La,m,126)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "COMO CONDENADOS A MUERTE,, (Sol,,11)", sC: "ta as"},
            { line: "COMO CONDENADOS A MUERTE., (La,m,19)", sC: "as"},
            { line: "COMO CONDENADOS A MUERTE,, (Sol,,11)", sC: "as"},
            { line: "COMO CONDENADOS A MUERTE., (La,m,19)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Puestos como espectáculo, (La,m,15)(Sol,,209)", sC: "tc"},
            { line: "para el mundo,, (La,m,96)", sC: ""},
            { line: "para los ángeles,, (Sol,,94)", sC: ""},
            { line: "para los hombres,, (Fa,,97)", sC: ""},
            { line: "para los hombres., (Mi,,98)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "COMO CONDENADOS A MUERTE,, (Sol,,11)", sC: "ta as", lines: [
            { line: "COMO CONDENADOS A MUERTE., (La,m,19)", sC: "as"},
            { line: "COMO CONDENADOS A MUERTE,, (Sol,,11)", sC: "as"},
            { line: "COMO CONDENADOS A MUERTE., (La,m,19)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "HEMOS VENIDO A SER,, (La,m,13)(Sol,,196)", sC: "ta as", lines: [
            { line: "HEMOS VENIDO A SER,, (La,m,198)", sC: "as"},
            { line: "HEMOS VENIDO A SER,, (Sol,,195)", sC: "as"},
            { line: "LA BASURA DEL MUNDO,, (La,m,187)", sC: "as"},
            { line: "EL ESTROPAJO DE TODOS., (Sol,,13)(La,m,200)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: COMO CONDENADOS A MUERTE
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════════╗
║           CÓMO ES MARAVILLOSO               ║
╚═════════════════════════════════════════════╝  */
   {
        id: "comoesmaravilloso",
        tt: "Cómo Es Maravilloso",
        title: "Cómo Es Maravilloso",
        subtitle: "Salmo 133 (132)",
        category: ["PreCatecumenado","Paz","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Puede intercalarse el estribillo en hebreo: HINNEH MAH TOV UMAH NA 'IYM, SHEVETH Af;IIYM GAM YAf;IADH",
        /*nCan: "en hebreo: HINNEH MAH TOV UMAH NA 'IYM, SHEVETH Af;IIYM GAM YAf;IADH",*/
        nCanURL: "",
        dbno: "38",
        notes: "",
        mant: "No",
        audioSrc: "/audio/comoesmaravilloso.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=comocondenadosamuerte",
        sig: "/resucito/src/index.html?canto=comolacierva",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡Cómo es maravilloso, (Mi,m,15)(La,m,177)(Mi,m,216)", sC: "tc"},
            { line: "estar con los hermanos!, (Si,7,15)(Mi,m,190)", sC: ""},
            { line: "¡CÓMO ES MARAVILLOSO, (La,m,197)(Mi,m,240)", sC: "ta as"},
            { line: "ESTAR CON LOS HERMANOS!, (Si,7,15)(Mi,m,228)", sC: "as"},
            { line: "Maravilloso estar con los hermanos., (Do,,44)(Re,,83)(Mi,m,114)(Sol,,148)(Si,m,227)(Mi,m,302)", sC: "tc"},
            { line: "MARAVILLOSO ESTAR CON LOS HERMANOS., (Do,,55)(Re,,100)(Mi,m,131)(Sol,,165)(Si,m,281)(Mi,m,367)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Es como aceite que baja, (La,m,197)(Mi,m,242)", sC: "tc"},
            { line: "por la barba de Aarón., (Si,7,15)(Mi,m,198)", sC: ""},
            { line: "ES COMO ACEITE QUE BAJA, (La,m,223)(Mi,m,264)", sC: "ta as"},
            { line: "POR LA BARBA DE AARÓN., (Si,7,23)(Mi,m,237)", sC: "as"},
            { line: "Como aceite por la barba de Aarón., (Do,,50)(Re,,88)(Mi,m,124)(Sol,,160)(Si,m,233)(Mi,m,318)", sC: "tc"},
            { line: "COMO ACEITE POR LA BARBA DE AARÓN., (Do,,50)(Re,,88)(Mi,m,124)(Sol,,160)(Si,m,275)(Mi,m,370)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Como rocío del Hermón que baja sobre Sión., (La,m,171)(Mi,m,214)(Si,7,264)(Mi,m,394)", sC: "tc"},
            { line: "COMO ROCÍO DEL HERMÓN, (La,m,198)(Mi,m,247)", sC: "ta as"},
            { line: "QUE BAJA SOBRE SIÓN., (Si,7,37)(Mi,m,189)", sC: "as"},
            { line: "Como rocío que baja sobre Sión., (Do,,46)(Re,,85)(Mi,m,124)(Sol,,158)(Si,m,218)(Mi,m,278)", sC: "tc"},
            { line: "COMO ROCÍO QUE BAJA SOBRE SIÓN., (Do,,52)(Re,,100)(Mi,m,134)(Sol,,169)(Si,m,251)(Mi,m,320)", sC: "ta as"},
    ], lder: [
            { line: "Allí Yahveh nos ha dado, (Mi,m,15)(La,m,188)(Mi,m,230)", sC: "tc"},
            { line: "toda su bendición., (Si,7,15)(Mi,m,151)", sC: ""},
            { line: "ALLÍYAHVEH NOS HA DADO, (La,m,217)(Mi,m,258)", sC: "ta as"},
            { line: "TODA SU BENDICIÓN., (Si,7,27)(Mi,m,176)", sC: "as"},
            { line: "Nos ha dado toda su bendición., (Do,,46)(Re,,85)(Mi,m,124)(Sol,,158)(Si,m,218)(Mi,m,278)", sC: "tc"},
            { line: "NOS HA DADO TODA SU BENDICIÓN., (Do,,52)(Re,,100)(Mi,m,134)(Sol,,169)(Si,m,251)(Mi,m,320)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Allí Yahveh nos ha dado, (La,m,183)(Mi,m,224)", sC: "tc"},
            { line: "la Vida para siempre., (Si,7,15)(Mi,m,140)", sC: ""},
            { line: "ALLÍ YAHVEH NOS HA DADO, (La,m,217)(Mi,m,259)", sC: ""},
            { line: "LA VIDA PARA SIEMPRE., (Si,7,15)(Mi,m,166)", sC: "ta as"},
            { line: "Nos ha dado la Vida para siempre., (Do,,46)(Re,,85)(Mi,m,124)(Sol,,158)(Si,m,218)(Mi,m,278)", sC: "tc"},
            { line: "NOS HA DADO LA VIDA PARA SIEMPRE., (Do,,52)(Re,,100)(Mi,m,134)(Sol,,169)(Si,m,251)(Mi,m,320)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡CÓMO ES MARAVILLOSO, (Mi,m,15)(La,m,192)(Mi,m,234)", sC: "ta as"},
            { line: "ESTAR CON LOS HERMANOS!, (Si,7,15)(Mi,m,226)", sC: "as a321"},
]}, // ULTIMA LINEA DEL CANTO: CÓMO ES MARAVILLOSO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           COMO LA CIERVA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "comolacierva",
        tt: "Como La Cierva",
        title: "Como La Cierva",
        subtitle: "Salmo 42-43 (41-42)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "39",
        notes: "",
        mant: "No",
        audioSrc: "/audio/comolacierva.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=comoesmaravilloso",
        sig: "/resucito/src/index.html?canto=comoovejaqueve",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Como la cierva anhela las corrientes de agua,, (Mi,,11)", sC: "tc"},
            { line: "así mi alma te anhela a ti, Dios mío;, (Fa#,m,325)", sC: ""},
            { line: "mi alma tiene sed de Dios, del Dios vivo,, (Si,7,354)", sC: ""},
            { line: "¿cuándo podré ver el rostro de Dios?, (Mi,,319)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mis lágrimas son mi pan noche y día,, ", sC: ""},
            { line: "mientras mis enemigos me dicen todo el día:, ", sC: ""},
            { line: "«¿Dónde está tu Dios? ¿Dónde está tu Dios?, (Fa#,m,184)", sC: ""},
            { line: "¿Dónde está tu Dios?», ", sC: ""},
            { line: "Y cuando yo recuerdo, (Si,7,170)", sC: ""},
            { line: "el alma se me llena de tristeza,", sC: ""},
            { line: "cómo marchaba en medio, ", sC: ""},
            { line: "de un pueblo en fiesta., (Mi,,180)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Por qué te abates, alma mía,, (Sol#,,15)", sC: ""},
            { line: "por qué tú gimes dentro de mí?, (Do#,m,286)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ESPERA EN DIOS, ESPERA EN DIOS,, (Fa#,m,143)(Si,7,322)", sC: "ta as"},
            { line: "QUE VOLVERÁS A ALABARLO. (Mi,,233)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque Él, Él es tu salvación,, (Do#,m,27)(Do#,7,117)(Fa#,m,249)", sC: "tc"},
            { line: "Él es tu Dios, Él es tu Dios., (Si,7,15)(Do#,m,102)(La,,141)(Sol#,,227)", sC: ""},
    ], lder: [
            { line: "ESPERA EN DIOS, ESPERA EN DIOS,, (La,,143)(Sol#,,318)", sC: "ta as"},
            { line: "ESPERA EN DIOS, ESPERA EN DIOS,, (La,,141)(Si,,319)(Si,,360)(Si♭,,386)(La,,412)", sC: "as"},
            { line: "QUE VOLVERÁS A ALABARLO. (Sol#,,231)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Cuántas veces le he dicho a mi roca:, (Mi,,15)", sC: "tc"},
            { line: "¿Por qué me has abandonado?!, ", sC: ""},
            { line: "¿Por qué camino triste,, ", sC: ""},
            { line: "oprimido por mis enemigos?, (Fa#,m,226)", sC: ""},
            { line: "Se me rompen los huesos", sC: ""},
            { line: "de escuchar todo el día:, (Si,7,211)", sC: ""},
            { line: "¿Dónde está tu Dios? ¿Dónde está ese Dios?, (Mi,,403)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Señor, envíame tu luz y tu verdad,, (Fa#,m,299)", sC: ""},
            { line: "que ellas me guíen hasta tu monte santo., (Si,7,359)", sC: ""},
            { line: "Entonces podré cantar, ", sC: ""},
            { line: "un canto de alegría con mi guitarra., (Mi,,301)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_1", initialState: "collapsed",
       triggerLine: "¿Por qué te abates, alma mía, (Sol#,,15)", sC: "tc", lines: [
            { line: "por qué tú gimes dentro de mí?, (Do#,m,286)", sC: ""},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_2", initialState: "collapsed",
       triggerLine: "ESPERA EN DIOS, ESPERA EN DIOS,, (Fa#,m,143)(Si,7,322)", sC: "ta as", lines: [
            { line: "QUE VOLVERÁS A ALABARLO. (Mi,,233)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_3", initialState: "collapsed",
       triggerLine: "Porque Él, Él es tu salvación, (Do#,m,27)(Do#,7,117)(Fa#,m,249)", sC: "tc", lines: [
            { line: "Él es tu Dios, Él es tu Dios., (Si,7,15)(Do#,m,102)(La,,141)(Sol#,,227)", sC: ""},  ]},
            { type: "collapsible-block", id: "asamblea_4", initialState: "collapsed",
       triggerLine: "ESPERA EN DIOS, ESPERA EN DIOS,, (La,,143)(Sol#,,318)", sC: "ta as", lines: [
            { line: "ESPERA EN DIOS, ESPERA EN DIOS,, (La,,141)(Si,,319)(Si,,360)(Si♭,,386)(La,,412)", sC: "as"},
            { line: "QUE VOLVERÁS A ALABARLO. (Sol#,,231)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: COMO LA CIERVA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           COMO OVEJA QUE VE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "comoovejaqueve",
        tt: "Como Oveja Que Ve",
        title: "Como Oveja Que Ve",
        subtitle: "Kontáklon (Romano el Meloda)",
        category: ["Precatecumenado","Vírgen María","Cuaresma","Penitencial","Pascua","Pentecostés","Fracción Del Pan"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "2",
        nCan: "",
        nCanURL: "",
        dbno: "40",
        notes: "",
        mant: "No",
        audioSrc: "/audio/comoovejaqueve.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=comolacierva",
        sig: "/resucito/src/index.html?canto=consoladamipueblo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Como oveja que ve cómo se llevan, (Mi,m,15)", sC: "tc"},
            { line: "su corderito al matadero,, (La,m,211)", sC: ""},
            { line: "María lo seguía consumida de dolor., (Mi,m,328)", sC: ""},
            { line: "Y le decía: «¿Dónde te llevan, Hijo mío?, (La,m,349)", sC: ""},
            { line: "¿Cómo se acaba tan pronto, ", sC: ""},
            { line: "el curso de tu vida?, (Si,7,149)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Háblame: no pases, te ruego, sin hablarme., (Do,,11)(Si,7,379)", sC: ""},
            { line: "Hijo mío, Hijo mío y Dios mío!, (La,m,20)(Si,7,261)", sC: ""},
            { line: "¡HIJO MÍO, HIJO MÍO Y DIOS MÍO!, (La,m,20)(Si,7,295)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Nunca hubiera podido imaginar, (Mi,m,21)", sC: "tc"},
            { line: "que llegaría a verte en este estado,, (La,m,304)", sC: ""},
            { line: "nunca hubiera creído, ", sC: ""},
            { line: "que llegarían a tal punto de odio y de furor,, (Mi,m,394)", sC: ""},
            { line: "apresándote contra toda justicia., (Si,7,284)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Quisiera comprender! ¡Ay de mí!, (Do,,59)(La,m,304)", sC: "tc"},
            { line: "¡QUISIERA COMPRENDER! ¡AY DE MÍ!, (Do,,67)(La,m,347)", sC: "ta as"},
            { line: "¡Cómo es posible que la luz se apague!, (Si,7,327)", sC: "tc"},
            { line: "¡CÓMO ES POSIBLE QUE LA LUZ SE APAGUE!, (La,m,18)(Si,7,372)", sC: "ta as"},
    ], lder: [
            { line: "¡Cómo es posible que te claven en una cruz!, (La,m,131)(Si,7,399)", sC: "tc"},
            { line: "Hijo mío, Hijo mío y Dios mío!, (La,m,19)(Si,7,267)", sC: ""},
            { line: "¡HIJO MÍO, HIJO MÍO Y DIOS MÍO!»., (La,m,22)(Si,7,294)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«¿Por qué lloras, por qué lloras, madre mía?, (Mi,m,20)(La,m,294)", sC: "tc"},
            { line: "¿Por qué lloras, por qué lloras, madre mía?, (Mi,m,386)", sC: ""},
            { line: "¿Acaso no debería sufrir?, (La,m6,218)", sC: ""},
            { line: "¿Acaso no debo morir?, (Si,7,199)", sC: ""},
            { line: "Entonces, ¿cómo podría salvar a Adán?, (Do,,36)(Si,7,346)", sC: ""},
            { line: "Entonces, ¿cómo podrías ver a Eva, (La,m,15)", sC: ""},
            { line: "que vuelve a la vida?»., (Si,7,162)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "COMO OVEJA QUE VE CÓMO SE LLEVAN, (Mi,m,21)", sC: "ta as", lines: [
            { line: "SU CORDERITO AL MATADERO,, (La,m,254)", sC: "as"},
            { line: "MARÍA LO SEGUÍA CONSUMIDA DE DOLOR., (Mi,m,375)", sC: "as"},
            { line: "Y LE DECÍA: «¿DÓNDE TE LLEVAN, HIJO MÍO?, (La,m,397)", sC: "as"},
            { line: "¿CÓMO SE ACABA TAN PRONTO, ", sC: "as"},
            { line: "EL CURSO DE TU VIDA?, (Si,7,185)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Háblame: no pases, te ruego, sin hablarme,, (Do,,11)(Si,7,377)", sC: ""},
            { line: "Hijo mío, Hijo mío y Dios mío!, (La,m,21)(Si,7,265)", sC: ""},
            { line: "¡HIJO MÍO, HIJO MÍO Y DIOS MÍO!, (La,m,20)(Si,7,297)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: COMO OVEJA QUE VE
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════════╗
║           CONSOLAD A MI PUEBLO               ║
╚══════════════════════════════════════════════╝  */
   {
        id: "consoladamipueblo",
        tt: "Consolad A Mi Pueblo",
        title: "Consolad A Mi Pueblo",
        subtitle: "Isaías 40,1-11 - Melodía hebraica ",
        category: ["PreCatecumenado","Entrada","Paz","Final","Adviento","Navidad","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "41",
        notes: "",
        mant: "No",
        audioSrc: "/audio/consoladamipueblo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=comoovejaqueve",
        sig: "/resucito/src/index.html?canto=cristoeslaluz",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "CONSOLAD A MI PUEBLO, (Mi,m,15)", sC: "ta as"},
            { line: "Y HABLAD AL CORAZÓN DE JERUSALÉN,, (La,m,79)(Si,7,365)", sC: "as"},
            { line: "Y DECIDLE QUE SE ACABA SU ESCLAVITUD., (Mi,m,383)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Ohey!, una voz en el desierto grita:, (Sol,,15)(La,,303)(Si,7,329)", sC: "tc"},
            { line: "«Preparad el camino, la senda al Señor»., (La,m,21)(Si,7,246)(Mi,m,361)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PORQUE EL SEÑOR VIENE CON POTENCIA,, (La,m,161)(Mi,m,348)", sC: "ta as"},
            { line: "TRAE CONSIGO EL PREMIO., (Si,7,215)", sC: "as"},
            { line: "COMO EL PASTOR REÚNE A SU REBAÑO,, (La,m,151)(Mi,m,321)", sC: "as"},
            { line: "LLEVA AL CORDERILLO EN SUS BRAZOS., (Si,7,176)(Mi,m,336)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Como el pastor conduce con cuidado, (La,m,129)(Mi,m,322)", sC: "tc"},
            { line: "las ovejas que van a ser madres,, (Si,7,260)", sC: ""},
            { line: "como el pastor que lleva sobre sus hombros, (La,m,128)", sC: "melisma"},
            { line: "la oveja perdida., (Si,7,126)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "CONSOLAD A MI PUEBLO, (Mi,m,15)", sC: "ta as", lines: [
            { line: "Y HABLAD AL CORAZÓN DE JERUSALÉN,, (La,m,79)(Si,7,365)", sC: "as"},
            { line: "Y DECIDLE QUE SE ACABA SU ESCLAVITUD., (Mi,m,383)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: CONSOLAD A MI PUEBLO
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════╗
║           CRISTO ES LA LUZ               ║
╚══════════════════════════════════════════╝  */
   {
        id: "cristoeslaluz",
        tt: "Cristo Es La Luz",
        title: "Cristo Es La Luz",
        subtitle: "Himno - Juan 8,12; 14,6",
        category: ["PreCatecumenado","Pascua","Pentecostés","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "42",
        notes: "",
        mant: "No",
        audioSrc: "/audio/cristoeslaluz.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=consoladamipueblo",
        sig: "/resucito/src/index.html?canto=cuandoelsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cristo es la Luz., (Do,,10)", sC: "tc"},
            { line: "CRISTO ES LA LUZ., (La,m,20)", sC: "ta as"},
            { line: "Cristo es la Luz., (Re,m,22)", sC: "tc"},
            { line: "CRISTO ES LA LUZ., (Sol,,13)", sC: "ta as"},
            { line: "ÉL ES LA SALVACIÓN., (Do,,179)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo es el Camino., (Do,,10)", sC: "tc"},
            { line: "CRISTO ES EL CAMINO., (La,m,20)", sC: "ta as"},
            { line: "Cristo es el Camino., (Re,m,22)", sC: "tc"},
            { line: "CRISTO ES EL CAMINO., (Sol,,13)", sC: "ta as"},
            { line: "ÉL ES LA SALVACIÓN., (Do,,179)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo es la Verdad., (Do,,10)", sC: "tc"},
            { line: "CRISTO ES LA VERDAD., (La,m,20)", sC: "ta as"},
            { line: "Cristo es la Verdad., (Re,m,22)", sC: "tc"},
            { line: "CRISTO ES LA VERDAD., (Sol,,13)", sC: "ta as"},
            { line: "ÉL ES LA SALVACIÓN., (Do,,179)", sC: "as"},
    ], lder: [
            { line: "Cristo es la Vida., (Do,,10)", sC: "tc"},
            { line: "CRISTO ES LA VID, (La,m,20)", sC: "ta as"},
            { line: "Cristo es la Vida., (Re,m,22)", sC: "tc"},
            { line: "CRISTO ES LA VID, (Sol,,13)", sC: "ta as"},
            { line: "ÉL ES LA SALVACIÓN., (Do,,179)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo es la Luz., (Do,,10)", sC: "tc"},
            { line: "CRISTO ES EL CAMINO., (La,m,20)", sC: "ta as"},
            { line: "Cristo es la Verdad., (Re,m,22)", sC: "tc"},
            { line: "CRISTO ES LA VID, (Sol,,13)", sC: "ta as"},
            { line: "ÉL ES LA SALVACIÓN., (Do,,179)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: CRISTO ES LA LUZ
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════╗
║           CUANDO EL SEÑOR               ║
╚═════════════════════════════════════════╝  */
   {
        id: "cuandoelsenor",
        tt: "Cuando El Señor",
        title: "Cuando El Señor",
        subtitle: "Salmo 126 (125)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Adviento","Navidad","Antiguo Testamento","Entrada"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "43",
        notes: "",
        mant: "No",
        audioSrc: "/audio/cuandoelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=cristoeslaluz",
        sig: "/resucito/src/index.html?canto=cuandoisraelsaliodeegipto",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cuando el Señor, (Re,,15)", sC: "tc"},
            { line: "hizo volver, (Mi,m,85)", sC: ""},
            { line: "a los cautivos, (Re,,95)", sC: ""},
            { line: "de Sión,, (Mi,m,55)", sC: ""},
            { line: "nos parecía soñar;, (Re,,155)", sC: ""},
            { line: "la boca, (Mi,m,40)", sC: ""},
            { line: "se nos llenaba de risas,, (Re,,183)", sC: ""},
            { line: "la lengua, (Mi,m,36)", sC: ""},
            { line: "de cantares., (Re,,76)(Re,7,137)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PORQUE AL IR,, (Sol,,127)", sC: "ta as"},
            { line: "SE VA LLORANDO,, (La,,21)(Re,,164)", sC: "as"},
            { line: "LLEVANDO LA SEMILLA;, (Mi,m,58)(Re,,184)(Re,7,239)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MAS AL VOLVER,, (Sol,,132)", sC: "as"},
            { line: "SE VIENE CANTANDO,, (La,,53)(Re,,203)", sC: "as"},
            { line: "TRAYENDO LAS GAVILLAS., (Mi,m,63)(Re,,197)", sC: "as"},
    ], lder: [
            { line: "¡Grandes cosas ha hecho,, (Re,,15)", sC: "tc"},
            { line: "maravillas,, (Mi,m,62)", sC: ""},
            { line: "ha hecho el Señor con nosotros!, (Re,,254)", sC: ""},
            { line: "Por eso, (Mi,m,53)", sC: ""},
            { line: "estamos alegres., (Re,,110)(Re,7,185)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",

       triggerLine: "PORQUE AL IR,, (Sol,,127)", sC: "ta as", lines: [
            { line: "SE VA LLORANDO,, (La,,21)(Re,,164)", sC: "as"},
            { line: "LLEVANDO LA SEMILLA;, (Mi,m,58)(Re,,184)(Re,7,239)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MAS AL VOLVER,, (Sol,,132)", sC: "as"},
            { line: "SE VIENE CANTANDO,, (La,,53)(Re,,203)", sC: "as"},
            { line: "TRAYENDO LAS GAVILLAS., (Mi,m,63)(Re,,197)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: CUANDO EL SEÑOR
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           CUANDO ISRAEL SALIÓ DE EGIPTO                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "cuandoisraelsaliodeegipto",
        tt: "Cuando Israel Salió De Egipto",
        title: "Cuando Israel Salió De Egipto",
        subtitle: "Salmo 114 (113)",
        category: ["PreCatecumenado","Pascua","Pentecostés","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Se repite todo el canto en un tono más alto.",
        nCanURL: "",
        dbno: "44",
        notes: "",
        mant: "No",
        audioSrc: "/audio/cuandoisraelsaliodeegipto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=cuandoelsenor",
        sig: "/resucito/src/index.html?canto=dayenu",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cuando Israel salió de Egipto,, (Mi,,10)(Fa,,123)(Mi,,246)", sC: "tc"},
            { line: "la casa de Jacob de un pueblo bárbaro,, (Fa,,236)(Mi,,314)", sC: ""},
            { line: "Judá fue su santuario,, (Fa,,179)", sC: ""},
            { line: "Israel fue su dominio., (Mi,,165)", sC: ""},
            { line: "A JUDÁ FUE SU SANTUARIO,, (Mi,,15)(Fa,,250)", sC: "ta as"},
            { line: "ISRAEL FUE SU DOMINIO., (Mi,,198)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Lo vio el mar y huyó,, (La,m,20)", sC: "tc"},
            { line: "retrocedió el Jordán,, (Sol,,92)", sC: ""},
            { line: "los montes saltaron como carneros,, (Fa,,57)", sC: ""},
            { line: "las colinas como corderos., (Mi,,213)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿QUÉ ES LO QUE TIENES, OH MAR, PARA HUIR,, (La,m,26)", sC: "ta as"},
            { line: "Y TÚ JORDÁN, PARA RETROCEDER,, (Sol,,105)", sC: "as"},
            { line: "VOSOTROS, MONTES QUE SALTÁIS COMO CARNEROS,, (Fa,,142)", sC: "as"},
            { line: "COLINAS, COMO CORDEROS?, (MI,,228)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "TIEMBLA TIERRA, TIEMBLA,, (La,,12)", sC: "as"},
            { line: "DELANTE DE DIOS QUE PASA,, (Fa#,m,154)Si(m,,250)", sC: "as"},
            { line: "DELANTE DEL DIOS DE JACOB,, (Re,,12)(La,,266)", sC: "as"},
            { line: "QUE HACE BROTAR DE LA ROCA EL AGUA., (Sol,,63)(Fa#,,352)", sC: "as a321"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: CUANDO ISRAEL SALIÓ DE EGIPTO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════╗
║           DAYENÚ               ║
╚════════════════════════════════╝  */
   {
        id: "dayenu",
        tt: "Dayenú",
        title: "Dayenú",
        subtitle: "De la Hagadá de Pésaj hebrea",
        category: ["PreCatecumenado","Paz","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "45",
        notes: "",
        mant: "No",
        audioSrc: "/audio/dayenu.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=cuandoisraelsaliodeegipto",
        sig: "/resucito/src/index.html?canto=dayenu2",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cuántos bienes nos ha dado el Señor., (Mi,m,18)(La,m,107)(Mi,m,343)", sC: "tc"},
            { line: "CUÁNTOS BIENES, (La,m,126)", sC: "ta as"},
            { line: "NOS HA DADO EL SEÑOR., (Mi,m,218)", sC: "as"},
            { line: "Cuántos bienes nos ha dado el Señor., (Re,,108)(Do,,240)(Mi,m,344)", sC: "tc"},
            { line: "CUÁNTOS BIENES, (Re,,123)", sC: "ta as"},
            { line: "NOS HA DADO EL SEÑOR., (Do,,106)(Mi,m,219)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si Cristo nos hubiera hecho salir de Egipto, (La,m,222)(Si,7,370)", sC: "tc"},
            { line: "y no hubiera hecho justicia del Faraón:, (Mi,m,345)", sC: ""},
            { line: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as"},
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Si hubiera hecho justicia del Faraón, (Re,,122)(Do,,324)", sC: "tc"},
            { line: "y no nos hubiera librado de todos los ídolos:, (Si,7,202)(Mi,m,372)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera librado de todos los ídolos, (Mi,m,15)(La,m,175)(Si,7,350)", sC: ""},
            { line: "y no nos hubiera dado todas sus riquezas:, (Mi,m,358)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera dado todas sus riquezas, (Re,,161)(Do,,303)", sC: ""},
            { line: "y no hubiera abierto el mar para nosotros:, (Si,7,158)(Mi,m,357)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
    ], lder: [
            { line: "Si hubiera abierto el mar para nosotros, (Mi,m,15)(La,m,136)(Si,7,333)", sC: "tc"},
            { line: "y no hubiera hundido a nuestros opresores:, (Mi,m,376)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si hubiera hundido a nuestros opresores, (Re,,150)(Do,,353)", sC: "tc"},
            { line: "y no nos hubiera abierto un camino en el desierto:, (Si,7,199)(Mi,m,440)", sC: "full"},
            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera abierto un camino en el desierto, (Mi,m,11)(La,m,175)(Si,7,423)", sC: "tc"},
            { line: "y no nos hubiera nutrido con el pan de la vida:, (Mi,m,411)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_6", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera nutrido con el pan de la vida, (Re,,10)(Do,,184)", sC: "tc"},
            { line: "y no nos hubiera dado el día del Señor:, (Si,7,183)(Mi,m,351)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_7", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera dado el día del Señor, (Mi,m,20)(La,m,162)(Si,7,331)", sC: "tc"},
            { line: "y no nos hubiera sellado una nueva Alianza:, (Mi,m,376)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_8", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si hubiera hecho con nosotros una nueva Alianza, (Re,,245)(Do,,428)", sC: "tc"},
            { line: "y no nos hubiera hecho entrar en su Iglesia:, (Si,7,182)(Mi,m,376)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_9", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera hecho entrar en su Iglesia, (Mi,m,20)(La,m,163)(Si,7,358)", sC: "tc"},
            { line: "y no hubiera construido en nosotros su templo:, (Mi,m,393)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_10", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: DAYENÚ
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════╗
║           DAYENÚ               ║
╚════════════════════════════════╝  */
   {
        id: "dayenu2",
        tt: "Dayenú",
        title: "Dayenú",
        subtitle: "De la Hagadá de Pésaj hebrea",
        category: ["PreCatecumenado","Paz","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "45",
        notes: "",
        mant: "No",
        audioSrc: "/audio/dayenu.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=dayenu",
        sig: "/resucito/src/index.html?canto=deprofundis",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Si hubiera construido en nosotros su templo, (Re,,178)(Do,,366)", sC: "tc"},
            { line: "y no lo hubiera llenado de su Santo Espíritu:, (Si,7,186)(Mi,m,375)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO,, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cuánto más tenemos que dar gracias al Señor., (La,m,150)(Mi,m,426)", sC: "tc"},
            { line: "CUÁNTO MÁS TENEMOS, (La,m,180)", sC: "ta as"},
            { line: "QUE DAR GRACIAS AL SEÑOR., (Mi,m,261)", sC: "as"},
            { line: "Cuánto más tenemos que dar gracias al Señor., (Re,,153)(Do,,314)(Mi,m,432)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CUÁNTO MÁS TENEMOS, (Re,,176)", sC: "ta as"},
            { line: "QUE DAR GRACIAS AL SEÑOR., (Do,,123)(Mi,m,261)", sC: "as"},
            { line: "", sC: "tc1"}, // Espacio Generado para separar contenido
            { line: "Que nos ha hecho salir de Egipto., (La,m,130)(Mi,m,280)", sC: "r1"},
            { line: "Que ha hecho justicia del Faraón., (La,m,91)(Mi,m,291)", sC: "r1"},
            { line: "Que nos ha librado de todos los enemigo, (Re,,150)(Do,,226)(Mi,m,359)", sC: "r1"},
            { line: "", sC: "tc1"}, // Espacio Generado para separar contenido
            { line: "Que nos ha dado todas sus riqueza, (La,m,132)(Mi,m,303)", sC: "r1"},
            { line: "Que ha abierto el mar para nosotro, (La,m,106)(Mi,m,301)", sC: "r1"},
            { line: "Que ha hundido a nuestros opresore, (Re,,122)(Do,,203)(Mi,m,316)", sC: "r1"},
            { line: "", sC: "tc1"}, // Espacio Generado para separar contenido
            { line: "Que nos ha dado un camino en el desierto., (La,m,131)(Mi,m,368)", sC: "r1"},
            { line: "Que nos ha nutrido con el pan de la vida., (La,m,152)(Mi,m,360)", sC: "r1"},
            { line: "Que nos ha dado el día del Señor., (Re,,130)(Do,,202)(Mi,m,301)", sC: "r1"},
    ], lder: [
            { line: "Que nos ha hecho una nueva Alianza., (La,m,129)(Mi,m,316)", sC: "r1"},
            { line: "Que nos ha hecho entrar en su Iglesia., (La,m,129)(Mi,m,325)", sC: "r1"},
            { line: "Que ha construido en nosotros su templo., (Re,,149)(Do,,250)(Mi,m,339)", sC: "r1"},
            { line: "Y lo ha llenado de su Espíritu Santo, (Re,,106)(Do,,296)", sC: "tc"},
            { line: "en el perdón de los pecados., (Si,7,102)(Mi,m,237)", sC: ""},
            { line: "", sC: "tc2"}, // Espacio Generado para separar contenido
            { line: "Cristo nuestra Pascua está resucitado., (Mi,m,21)(La,m,159)(Mi,m,332)", sC: "tc"},
            { line: "CRISTO NUESTRA PASCUA, (La,m,193)", sC: "ta as"},
            { line: "ESTÁ RESUCITADO., (Mi,m,144)", sC: "as"},
            { line: "Cristo nuestra Pascua está resucitado., (Re,,154)(Do,,247)(Mi,m,332)", sC: "tc"},
            { line: "CRISTO NUESTRA PASCUA, (Re,,191)", sC: "ta as"},
            { line: "ESTÁ RESUCITADO., (Do,,45)(Mi,m,144)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Aleluya, aleluya., (La,m,43)(Mi,m,95)", sC: "tc"},
            { line: "ALELUYA, ALELUYA., (La,m,55)(Mi,m,113)", sC: "ta as"},
            { line: "Aleluya, aleluya, aleluya, (La,m,94)(Mi,m,176)", sC: "tc"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (La,m,112)(Mi,m,206)", sC: "ta as"},
            { line: "Aleluya, aleluya, aleluya., (Re,,86)(Do,,166)(Mi,m,217)", sC: "tc"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Re,,101)(Do,,200)(Mi,m,269)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: DAYENÚ
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════╗
║           DE PROFUNDIS               ║
╚══════════════════════════════════════╝  */
   {
        id: "deprofundis",
        tt: "De Profundis",
        title: "De Profundis",
        subtitle: "Salmo 130 (129)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Adviento","Navidad","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "47",
        notes: "",
        mant: "No", // Mantenimiento
        audioSrc: "/audio/deprofundis.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=dayenu",
        sig: "/resucito/src/index.html?canto=decidlealosdecorazoncansado",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "De lo profundo a ti grito, Señor:, (La,m,19)(Fa,7,200)(Mi,,277)(La,m,316)", sC: "tc"},
            { line: "Señor escucha mi voz., (Fa,,43)(Mi,7,196)", sC: ""},
            { line: "¡Estén tus oídos atentos, (La,m,28)(Fa,7,115)(Mi,,181)(La,m,238)", sC: ""},
            { line: "a la voz de mi súplica!, (Fa,,56)(Mi,,156)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DE LO PROFUNDO A TI GRITO, SEÑOR:, (La,m,20)(Fa,7,252)(Mi,,332)(La,m,369)", sC: "ta as"},
            { line: "SEÑOR ESCUCHA MI VOZ., (Fa,,46)(Mi,7,221)", sC: "as"},
            { line: "¡ESTÉN TUS OÍDOS ATENTOS, (la,m,18)(Fa,7,133)(Mi,,212)(La,m,272)", sC: "as"},
            { line: "A LA VOZ DE MI SÚPLICA!, (Fa,,70)(Mi,,178)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si llevas cuentas de los pecados, Señor,, (Sol,,14)(Fa,,355)(La,m,393)", sC: "tc"},
            { line: "¿quién se salvará?, ¿quién se salvará?, (Fa,7,355)(Mi,7,388)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mas cerca de ti está el perdón,, (Fa,m,15)(Mi,7,250)", sC: "tc"},
            { line: "sólo en ti se encuentra el amor., (Fa,7,85)la(La,m,283)", sC: ""},
            { line: "MAS CERCA DE TI ESTÁ EL PERDÓN,, (Fa,,69)(Mi,7,324)", sC: "tc as"},
            { line: "SÓLO EN TI SE ENCUENTRA EL AMOR., (Fa,7,103)(La,m,337)", sC: "as"},
    ], lder: [
            { line: "Yo espero en el Señor, (Sol,,12)", sC: "tc"},
            { line: "mi alma espera en su palabra;, (Fa,,38)(La,m,257)", sC: ""},
            { line: "mi alma aguarda al Señor, (Sol,,41)", sC: ""},
            { line: "más que el centinela la aurora;, (Fa,,24)(La,m,272)", sC: ""},
            { line: "Israel espera al Señor", sC: ""},
            { line: "más que el centinela espera a la aurora.(Fa,7,174)(Mi,7,355)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque solo en el Señor está el amor,, (Fa,,85)(Mi,7,343)", sC: "tc"},
            { line: "sólo en él se encuentra el perdón., (Fa,7,89)(La,m,300)", sC: ""},
            { line: "PORQUE SOLO EN EL SEÑOR ESTÁ EL AMOR,, (Fa,,110)(Mi,7,404)", sC: "ta as"},
            { line: "SÓLO EN ÉL SE ENCUENTRA EL PERDÓN., (Fa,7,105)(La,m,366)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor redime a Israel,, (La,m,22)", sC: "tc"},
            { line: "EL SEÑOR REDIME A ISRAEL, (Mi,,77)", sC: "ta as"},
            { line: "DE TODOS SUS PECADOS., (La,m,195)", sC: "ta as"},
            { line: "", sC: "r1"}, // Espacio Generado para separar contenido
            { line: "¡Ay!, (La,m,22)(Re,m,70)(La,m,120)", sC: "melisma"},
            { line: "", sC: "tc1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: DE PROFUNDIS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           DECIDLE A LOS DE CORAZÓN CANSADO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "decidlealosdecorazoncansado",
        tt: "Decidle A Los De Corazón Cansado",
        title: "Decidle A Los De Corazón Cansado",
        subtitle: "Isaías 35,4ss",
        category: ["Precatecumenado","Cuaresma","Penitencial","Adviento","Navidad","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "48",
        notes: "",
        mant: "No",
        audioSrc: "/audio/decidlealosdecorazoncansado.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=deprofundis",
        sig: "/resucito/src/index.html?canto=delantedelosangeles",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Decidle a los de corazón cansado,, (La,m,15)(Re,m9,286)", sC: "tc"},
            { line: "decídselo, decídselo a los pobres:, (La,m,267)", sC: ""},
            { line: "«¡Ánimo, no temáis!, (Fa,,75)(Mi,,155)", sC: ""},
            { line: "que vuestro Dios viene a salvaros»., (Fa,,144)(Mi,,283)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ya se abren los ojos de los ciegos,, (La,m,19)(Re,m9,280)", sC: ""},
            { line: "se abren los oídos de los sordos., (La,m,258)", sC: ""},
            { line: "El cojo salta como un ciervo,, (Fa,,62)(Mi,,230)", sC: ""},
            { line: "grita de júbilo la lengua del mudo., (Fa,,88)(Mi,,287)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PORQUE SE ABRIRÁ UN CAMINO,, (Do,,10)(Mi,m,180)(Do,,282)", sC: "ta as"},
            { line: "UN CAMINO DE SALVACIÓN;, (Mi,m,81)(La,m,236)", sC: "as"},
            { line: "UNA SENDA, UNA VÍA, (Do,,77)(Mi,m,191)", sC: "as"},
            { line: "PARA LOS POBRES., (La,m,123)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y por ella retornarán, (Mi,m,70)", sC: "tc"},
            { line: "los rescatados del Señor., (La,m,98)", sC: ""},
            { line: "Y POR ELLA RETORNARÁN, (Mi,m,81)", sC: "ta as"},
            { line: "LOS RESCATADOS DEL SEÑOR., (La,m,127)", sC: "as"},
    ], lder: [
            { line: "Todos los pobres, ciegos y cojos,, (Mi,m,109)", sC: "tc"},
            { line: "los alejados del Señor., (La,m,75)", sC: ""},
            { line: "TODOS LOS POBRES, CIEGOS Y COJOS,, (Mi,m,136)", sC: "ta as"},
            { line: "LOS ALEJADOS DEL SEÑOR., (La,m,101)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Los pecadores!, (Mi,m,108)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y CANTARÁN FELICIDAD,, (Fa,,100)(Mi,,206)", sC: "ta as"},
            { line: "Y CANTARÁN FELICIDAD., (Fa,,100)(Mi,,206)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA., (Fa,,100)(Mi,,174)", sC: "as"},
            { line: "ALELUYA, ALELUYA., (Fa,,100)(Mi,,174)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA., (Fa,,100)(Mi,,174)", sC: "as"},
            { line: "ALELUYA, ALELUY, (Fa,,100)(Mi,,174)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: DECIDLE A LOS DE CORAZÓN CANSADO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           DELANTE DE LOS ÁNGELES               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "delantedelosangeles",
        tt: "Delante De Los Ángeles",
        title: "Delante De Los Ángeles",
        subtitle: "Salmo 138 (137)",
        category: ["PreCatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "49",
        notes: "",
        mant: "No",
        audioSrc: "/audio/delantedelosangeles.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=decidlealosdecorazoncansado",
        sig: "/resucito/src/index.html?canto=diadereposo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "DELANTE DE LOS ÁNGELES, (Do,,15)(Mi,,181)", sC: "ta as"},
            { line: "PARA TI YO CANTARÉ, SEÑOR., (Re,m9,191)", sC: "as"},
            { line: "DELANTE DE LOS ÁNGELES, (Sol,,47)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Mi,,210)", sC: "as"},
            { line: "DARÉ GRACIAS A TU NOMBRE,, (Re,m9,227)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Fa,,69)(Mi,,209)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Te doy gracias, Señor, de todo corazón,, (Do,,12)(Mi,,190)(Re,m9,345)", sC: "tc"},
            { line: "porque tus promesas han superado tu fama., (Sol,,159)(Mi,,380)", sC: ""},
            { line: "Cuando te invoqué, tú me escuchaste,, (Re,m9,323)", sC: ""},
            { line: "diste fuerza y vigor a mi alma., (Fa,,80)(Mi,,241)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "DELANTE DE LOS ÁNGELES, (Do,,15)(Mi,,181)", sC: "ta as", lines: [
            { line: "PARA TI YO CANTARÉ, SEÑOR., (Re,m9,191)", sC: "as"},
            { line: "DELANTE DE LOS ÁNGELES, (Sol,,47)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Mi,,210)", sC: "as"},
            { line: "DARÉ GRACIAS A TU NOMBRE,, (Re,m9,227)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Fa,,15)(Mi,,209)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Te darán gracias, Señor,, (Do,,11)(Mi,,212)", sC: "tc"},
            { line: "los reyes de la tierra,, (Re,m9,164)", sC: ""},
            { line: "al escuchar las palabras de tu boca;, (Sol,,95)(Mi,,312)", sC: ""},
            { line: "y cantarán en el camino del Señor,, (Re,m9,312)", sC: ""},
            { line: "dirán: «¡Qué grande es tu amor!»., (Fa,,32)(Mi,,282)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "DELANTE DE LOS ÁNGELES, (Do,,15)(Mi,,181)", sC: "ta as", lines: [
            { line: "PARA TI YO CANTARÉ, SEÑOR., (Re,m9,191)", sC: "as"},
            { line: "DELANTE DE LOS ÁNGELES, (Sol,,47)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Mi,,210)", sC: "as"},
            { line: "DARÉ GRACIAS A TU NOMBRE,, (Re,m9,227)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Fa,,15)(Mi,,209)", sC: "as"},  ]},
    ], lder: [
            { line: "Sublime es el Señor,, (Do,,10)(Mi,,177)", sC: "tc"},
            { line: "que mira hacia el humilde,, (Re,m9,213)", sC: ""},
            { line: "conoce al soberbio, le mira desde lejos., (Sol,,34)(Mi,,337)", sC: ""},
            { line: "Mas cuando yo camino, ", sC: ""},
            { line: "en medio de la angustia,, (Re,m9,193)", sC: ""},
            { line: "extiende su mano y su diestra me salva., (Fa,,11)(Mi,,342)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "DELANTE DE LOS ÁNGELES, (Do,,15)(Mi,,181)", sC: "ta as", lines: [
            { line: "PARA TI YO CANTARÉ, SEÑOR., (Re,m9,191)", sC: "as"},
            { line: "DELANTE DE LOS ÁNGELES, (Sol,,47)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Mi,,210)", sC: "as"},
            { line: "DARÉ GRACIAS A TU NOMBRE,, (Re,m9,227)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Fa,,15)(Mi,,209)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor terminará en mí lo comenzado,, (Do,,12)(Mi,,231)(Re,m9,346)", sC: "tc"},
            { line: "porque es eterno su amor., (Sol,,13)(Mi,,230)", sC: ""},
            { line: "No abandona la obra de sus manos., (Re,m9,295)", sC: ""},
            { line: "¡Señor, no nos abandones!, (Fa,,20)(Mi,,206)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "DELANTE DE LOS ÁNGELES, (Do,,15)(Mi,,181)", sC: "ta as", lines: [
            { line: "PARA TI YO CANTARÉ, SEÑOR., (Re,m9,191)", sC: "as"},
            { line: "DELANTE DE LOS ÁNGELES, (Sol,,47)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Mi,,210)", sC: "as"},
            { line: "DARÉ GRACIAS A TU NOMBRE,, (Re,m9,227)", sC: "as"},
            { line: "PARA TI SALMODIARÉ., (Fa,,15)(Mi,,209)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: DELANTE DE LOS ÁNGELES
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           DÍA DE REPOSO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "diadereposo",
        tt: "Día De Reposo",
        title: "Día De Reposo",
        subtitle: "Juan 8,52",
        category: ["Precatecumenado","Final","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "50",
        notes: "",
        mant: "No",
        audioSrc: "/audio/diadereposo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=delantedelosangeles",
        sig: "/resucito/src/index.html?canto=diceelsenoramisenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Si alguno guarda mi Palabra, (Mi,m,15)(La,m,131)(Mi,m,237)", sC: "tc"},
            { line: "no gustará la muerte, ¡no!, ", sC: ""},
            { line: "TÚ ERES ÚNICO, EL ÚNICO CON ALEGRÍA., (Mi,m,19)(La,m,203)(Mi,m,374)", sC: "ta as"},
            { line: "¿QUIÉN ES COMO EL SEÑOR?, ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Corona de salvación,, (Mi,m,21)(La,m,63)(Mi,m,107)", sC: "tc"},
            { line: "MEMORIAL DE ALEGRÍA., (La,m,21)(Mi,m,92)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DÍA DE REPOSO Y DE SANTIDAD, (Mi,m,20)(La,m,171)", sC: "ta as"},
            { line: "HAS DADO A TU PUEBLO. (Mi,m,70)", sC: "as r1"},
            { line: "DÍA DE REPOSO Y DE SANTIDAD (La,m,175), ", sC: "as"},
            { line: "HAS DADO A TU PUEBLO., (Mi,m,68)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Abraham vio este día, (Mi,m,15)(La,m,65)(Mi,m,112)", sC: "tc"},
            { line: "Y EN ISAAC SE ALEGRÓ., (La,m,15)(Mi,m,94)", sC: "ta as"},
            { line: "Jacob y sus hijos en él descansaron., (La,m,67)(Mi,m,203)", sC: "tc"},
            { line: "JACOB Y SUS HIJOS EN ÉL DESCANSARON., (La,m,80)(Mi,m,236)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "DÍA DE REPOSO Y DE SANTIDAD, (Mi,m,20)(La,m,171)", sC: "ta as", lines: [
            { line: "HAS DADO A TU PUEBLO., (Mi,m,70)", sC: "as r1"},
            { line: "DÍA DE REPOSO Y DE SANTIDAD, (La,m,175) ", sC: "as"},
            { line: "HAS DADO A TU PUEBLO., (Mi,m,68)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: DÍA DE REPOSO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           DICE EL SEÑOR A MI SEÑOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "diceelsenoramisenor",
        tt: "Dice El Señor A Mi Señor",
        title: "Dice El Señor A Mi Señor",
        subtitle: "Salmo 110 (109)",
        category: ["Precatecumenado","Pascua","Pentecostés","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "51",
        notes: "",
        mant: "No",
        audioSrc: "/audio/diceelsenoramisenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=diadereposo",
        sig: "/resucito/src/index.html?canto=dichosoelhombre",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "DICE EL SEÑOR A MI SEÑOR:, (Mi,,10)", sC: "ta as"},
            { line: "«SIÉNTATE A MI DERECHA,, (Sol#,,39)", sC: "as"},
            { line: "HASTA QUE PONGA A TUS ENEMIGOS, (La,,21)", sC: "as"},
            { line: "COMO ESCABEL DE TUS PIES;, (Mi,,10)", sC: "as"},
            { line: "DEBAJO DE TUS PIES,, (Si,7,47)(Mi,,184)", sC: "as"},
            { line: "DEBAJO DE TUS PIES»., (Si,7,49)(Mi,,186)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El cetro de tu poder, (Do#,m,27)(Sol#,,173)", sC: "tc"},
            { line: "extiende el Señor desde Sión:, (Si,,10)(Sol#,,266)", sC: ""},
            { line: "¡domina en medio de tus enemigos,, (La,,10)(Mi,,301)", sC: ""},
            { line: "domina en medio de tus enemigos!, (Si,7,15)(Mi,,295)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«Desde el seno de la aurora, (Do#,m,31)(Sol#,,243)", sC: ""},
            { line: "como rocío yo te he engendrado;, (Si,,10)(Sol#,,280)", sC: ""},
            { line: "desde antes de la aurora, (La,,10)(Mi,,209)", sC: ""},
            { line: "como rocío yo te he engendrado»., (Si,7,15)(Mi,,277)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "DICE EL SEÑOR A MI SEÑOR:, (Mi,,10)", sC: "ta as", lines: [
            { line: "«SIÉNTATE A MI DERECHA,, (Sol#,,39)", sC: "as"},
            { line: "HASTA QUE PONGA A TUS ENEMIGOS, (La,,21)", sC: "as"},
            { line: "COMO ESCABEL DE TUS PIES;, (Mi,,10)", sC: "as"},
            { line: "DEBAJO DE TUS PIES,, (Si,7,47)(Mi,,184)", sC: "as"},
            { line: "DEBAJO DE TUS PIES»., (Si,7,49)(Mi,,186)", sC: "as"},  ]},
    ], lder: [
            { line: "El Señor ha jurado y no se arrepiente:, (Do#,m,26)(Sol#,,323)", sC: "tc"},
            { line: "Tú eres sacerdote para siempre,, (Si,,10)(Sol#,,255)", sC: ""},
            { line: "a semejanza de Melquisedec,, (La,,12)(Mi,,218)", sC: ""},
            { line: "a semejanza de Melquisedec»., (Si,7,15)(Mi,,220)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque el Señor está a tu derecha,, (Do#,m,25)(Sol#,,291)", sC: ""},
            { line: "destruirá tus enemigos,, (Si,,10)(Sol#,,182)", sC: ""},
            { line: "tú juzgarás los pueblos,, (La,,10)(Mi,,170)", sC: ""},
            { line: "sentenciarás a las naciones., (Si,7,15)(Mi,,227)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En el camino bebe del torrente,, (Do#,m,27)(Sol#,,250)", sC: ""},
            { line: "y levanta la cabeza,, (Si,,7)(Sol#,,156)", sC: ""},
            { line: "levanta la cabeza,, (La,,10)(Mi,,136)", sC: ""},
            { line: "levanta la cabeza., (Si,7,15)(Mi,,135)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "DICE EL SEÑOR A MI SEÑOR:, (Mi,,10)", sC: "ta as", lines: [
            { line: "«SIÉNTATE A MI DERECHA,, (Sol#,,39)", sC: "as"},
            { line: "HASTA QUE PONGA A TUS ENEMIGOS, (La,,21)", sC: "as"},
            { line: "COMO ESCABEL DE TUS PIES;, (Mi,,10)", sC: "as"},
            { line: "DEBAJO DE TUS PIES,, (Si,7,47)(Mi,,184)", sC: "as"},
            { line: "DEBAJO DE TUS PIES»., (Si,7,49)(Mi,,186)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: DICE EL SEÑOR A MI SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           DICHOSO EL HOMBRE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "dichosoelhombre",
        tt: "Dichoso El Hombre",
        title: "Dichoso El Hombre",
        subtitle: "Salmo 1",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "52",
        notes: "",
        mant: "No",
        audioSrc: "/audio/dichosoelhombre.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=diceelsenoramisenor",
        sig: "/resucito/src/index.html?canto=elcombateescatologico",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "DICHOSO EL HOMBRE, (La,m,22)(Fa,,218)", sC: "ta as"},
            { line: "QUE NO SIGUE EL CONSEJO DE LOS IMPÍOS,, (La,m,361)(Fa,,422)", sC: "as"},
            { line: "NI EN LA SENDA DE LOS PECADORES SE DETIENE,, (La,m,439)", sC: "as"},
            { line: "NI EN EL BANCO DE LOS BURLONES SE SIENTA., (Fa,,105)(La,m,400)", sC: "as"},
            { line: "Mas se complace en la palabra del Señor,, (Sol,,13)(Mi,,376)", sC: "tc"},
            { line: "sus salmos susurra día y noche., (Sol,,48)(Fa,,148)(Mi,,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Será como árbol plantado, (La,m,22)(Fa,,212)", sC: ""},
            { line: "junto a corrientes de agua., (La,m,215)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SERÁ COMO ÁRBOL PLANTADO, (Fa,,261)", sC: "ta as"},
            { line: "JUNTO A CORRIENTES DE AGUA,, (La,m,257)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "que da fruto a su tiempo,, (Fa,,89)(Mi,,183)", sC: "tc"},
            { line: "nunca se marchitarán sus hojas;, (Fa,,11)(Mi,,262)", sC: ""},
            { line: "todo lo que emprende le sale bien,, (Sol,,12)(Fa,,164)(Mi,,302)", sC: ""},
            { line: "todo lo que emprende le sale bien., (Sol,,13)(Fa,,164)(Mi,,302)", sC: ""},
    ], lder: [
            { line: "¡No así los impíos, no así!, (La,m,25)", sC: "tc"},
            { line: "Que son como la paja, (Fa,,58)", sC: ""},
            { line: "que se lleva el viento., (La,m,157)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡NO ASÍ LOS IMPÍOS, NO ASÍ!, (La,m,25)", sC: "ta as"},
            { line: "QUE SON COMO LA PAJA, (Fa,,63)", sC: "as"},
            { line: "QUE SE LLEVA EL VIENTO., (La,m,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No resistirán en el juicio los impíos,, (Fa,,10)(Mi,,303)", sC: "tc"},
            { line: "ni los pecadores, (Fa,,120)", sC: ""},
            { line: "en la comunidad de los santos., (Mi,,233)", sC: ""},
            { line: "Porque el Señor cuida, (Sol,,14)", sC: ""},
            { line: "el camino de sus fieles,, (Fa,,65)(Mi,,181)", sC: ""},
            { line: "mas el camino de los impíos, (Fa,,111)", sC: ""},
            { line: "acaba mal, acaba mal, acaba mal., (Mi,,84)(Fa,,133)(Mi,,305)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "DICHOSO EL HOMBRE, (La,m,22)(Fa,,218)", sC: "ta as", lines: [
            { line: "QUE NO SIGUE EL CONSEJO DE LOS IMPÍOS,, (La,m,361)(Fa,,422)", sC: "as"},
            { line: "NI EN LA SENDA DE LOS PECADORES SE DETIENE,, (La,m,439)", sC: "as"},
            { line: "NI EN EL BANCO DE LOS BURLONES SE SIENTA., (Fa,,104)(La,m,400)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: DICHOSO EL HOMBRE
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL COMBATE ESCATOLÓGICO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "elcombateescatologico",
        tt: "El Combate Escatológico",
        title: "El Combate Escatológico",
        subtitle: "Apocalipsis 19,11-20",
        category: ["Precatecumenado","Pascua","Pentecostés","Entrada","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "53",
        notes: "",
        mant: "No",
        audioSrc: "/audio/elcombateescatologico.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=dichosoelhombre",
        sig: "/resucito/src/index.html?canto=elespiritudelsenorestasobremi",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Veo el cielo abierto,, (Mi,,10)", sC: "tc"},
            { line: "y un caballo blanco,, (Fa,,143)", sC: ""},
            { line: "el que lo monta lleva un manto,, (Sol,,111)(Fa,,259)", sC: ""},
            { line: "lleno de sangre, lleno de sangre., (Mi,,95)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sus ojos, llamas de fuego,, (Fa,,213)", sC: ""},
            { line: "y en su boca hay una espada, (Sol,,87)(Fa,,241)", sC: ""},
            { line: "para herir, para herir., (Mi,,83)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Cuál es su nombre?, (Do,,12)", sC: "tc"},
            { line: "¿Cuál es su nombre?, ", sC: "r1"},
            { line: "SU NOMBRE ES,, (Mi,,135)", sC: "ta as"},
            { line: "SU NOMBRE ES,", sC: "as"},
            { line: "PALABRA DE DIOS., (La,m,157)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Veo una bestia y un profeta, (Mi,,10)(Fa,,233)", sC: "tc"},
            { line: "que se reúnen para un combate,, (Sol,,92)(Fa,,282)", sC: ""},
            { line: "para un combate,, (Mi,,135)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "contra el que monta en el caballo, (Fa,,288)", sC: ""},
            { line: "y lleva el manto lleno de sangre,, (Sol,,112)(Fa,,250)", sC: ""},
            { line: "lleno de sangre., (Mi,,96)", sC: ""},
    ], lder: [
            { line: "ÉL PISA SOLO EN EL LAGAR, (La,m,20)", sC: "ta as"},
            { line: "DE LA FURIOSA CÓLERA DE DIOS., (Mi,,117)(La,m,294)", sC: "as r2"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Veo la bestia que es capturada,, (Do,,10)(Mi,,263)", sC: "tc"},
            { line: "y con ella el profeta,, (La,m,159)", sC: ""},
            { line: "por el que monta en el caballo, (Mi,,259)", sC: ""},
            { line: "y lleva el manto lleno de sangre., (La,m,253)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA,, (La,m,18)(Mi,,154)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA,, (La,m,153)", sC: "as"},
            { line: "ALELUYA, ALELUYA,, (Mi,,151)", sC: "as"},
            { line: "¡ALELUYA!, (La,m,84)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Cuál es su nombre?, (Do,,12)", sC: "tc"},
            { line: "¿Cuál es su nombre?, ", sC: "r1"},
            { line: "SU NOMBRE ES,, (Mi,,133)", sC: "ta as"},
            { line: "SU NOMBRE ES,", sC: "as"},
            { line: "PALABRA DE DIOS., (La,m,156)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: EL COMBATE ESCATOLÓGICO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "elespiritudelsenorestasobremi",
        tt: "El Espíritu Del Señor Está Sobre Mí",
        title: "El Espíritu Del Señor Está Sobre Mí",
        subtitle: "Lucas 4,18 – Isaías 61,1-3",
        category: ["Precatecumenado","Pascua","Pentecostés","Entrada","Comunión","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "54",
        notes: "",
        mant: "No",
        audioSrc: "/audio/elespiritudelsenorestasobremi.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=elcombateescatologico",
        sig: "/resucito/src/index.html?canto=eljacaldelospastores",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ,, (La,m,19)(Mi,,215)(La,m,388)", sC: "ta as"},
            { line: "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ., (Mi,,214)(La,m,389)", sC: "as"},
            { line: "PUES ME HA UNGIDO,, (Sol,,172)", sC: "as"},
            { line: "ME HA ENVIADO,, (Fa,,121)", sC: "as"},
            { line: "PARA ANUNCIAR LA SALVACIÓN., (Mi,,287)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PARA ANUNCIAR LA SALVACIÓN,, (La,m,294)", sC: "as"},
            { line: "PARA ANUNCIAR LA SALVACIÓN, (Sol,,286)", sC: "as"},
            { line: "A LOS POBRES, (Fa,,77)", sC: "as"},
            { line: "DE QUEBRANTADO CORAZÓN., (Mi,,262)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Para que los ciegos vean,, (La,m,206)", sC: "tc"},
            { line: "los cojos anden,, (Sol,,99)", sC: ""},
            { line: "los leprosos queden limpios,, (Fa,,203)", sC: ""},
            { line: "para anunciar la salvación., (Mi,,233)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ,, (La,m,19)(Mi,,215)(La,m,388)", sC: "ta as", lines: [
            { line: "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ., (Mi,,214)(La,m,389)", sC: "as"},
            { line: "PUES ME HA UNGIDO,, (Sol,,172)", sC: "as"},
            { line: "ME HA ENVIADO,, (Fa,,121)", sC: "as"},
            { line: "PARA ANUNCIAR LA SALVACIÓN., (Mi,,287)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PARA ANUNCIAR LA SALVACIÓN,, (La,m,294)", sC: "as"},
            { line: "PARA ANUNCIAR LA SALVACIÓN, (Sol,,286)", sC: "as"},
            { line: "A LOS POBRES, (Fa,,77)", sC: "as"},
            { line: "DE QUEBRANTADO CORAZÓN., (Mi,,262)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL JACAL DE LOS PASTORES               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "eljacaldelospastores",
        tt: "El Jacal De Los Pastores",
        title: "El Jacal De Los Pastores",
        subtitle: "Cantar de los Cantares 1,2-8",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "55",
        notes: "",
        mant: "No",
        audioSrc: "/audio/eljacaldelospastores.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=elespiritudelsenorestasobremi",
        sig: "/resucito/src/index.html?canto=ellagarero",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Que me bese con besos de su boca,,(Re,m,21)", sC: "tc"},
            { line: "mejores son que el vino tus amores. (Si♭,,89)(La,,278)", sC: ""},
            { line: "Tu nombre es ungüento que se vierte,", sC: ""},
            { line: "por eso te aman las doncellas., (Re,m,254)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LLÉVAME EN POS DE TI, SALGAMOS., (Re,m,21)", sC: "ta as"},
            { line: "LLÉVAME TRAS DE TI, CORRAMOS., (Si♭,,89)(La,,278)", sC: "as"},
            { line: "CELEBRAREMOS TUS AMORES MÁS QUE EL VINO, ", sC: "as"},
            { line: "CON CUÁNTA RAZÓN ERES AMADO., (Re,m,300)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HAZME SABER, AMADO DE MI ALMA,, (Re,m,23)", sC: "as r1"},
            { line: "DÓNDE APACIENTAS EL REBAÑO,, (La,,280)", sC: "as"},
            { line: "PARA QUE YO NO ANDE VAGABUNDA, ", sC: "as"},
            { line: "DETRÁS DE OTROS COMPAÑEROS., (Re,m,280)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si no lo sabes, oh bella entre las bellas,, (Re,m,15)", sC: "tc"},
            { line: "sigue la senda de mis ovejas, (Si♭,,15)(La,,250)", sC: ""},
            { line: "y lleva por allí tus cabras, ", sC: ""},
            { line: "hasta el jacal de los pastores., (Re,m,15)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "LLÉVAME EN POS DE TI, SALGAMOS., (Re,m,21)", sC: "ta as", lines: [
            { line: "LLÉVAME TRAS DE TI, CORRAMOS., (Si♭,,89)(La,,278)", sC: "as"},
            { line: "CELEBRAREMOS TUS AMORES MÁS QUE EL VINO, ", sC: "as"},
            { line: "CON CUÁNTA RAZÓN ERES AMADO., (Re,m,300)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HAZME SABER, AMADO DE MI ALMA,, (Re,m,23)", sC: "as r1"},
            { line: "DÓNDE APACIENTAS EL REBAÑO,, (La,,280)", sC: "as"},
            { line: "PARA QUE YO NO ANDE VAGABUNDA, ", sC: "as"},
            { line: "DETRÁS DE OTROS COMPAÑEROS., (Re,m,280)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: EL JACAL DE LOS PASTORES
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL LAGARERO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "ellagarero",
        tt: "El Lagarero",
        title: "El Lagarero",
        subtitle: "Isaías 63,1-6",
        category: ["Precatecumenado","Fracción Del Pan","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "56",
        notes: "",
        mant: "No",
        audioSrc: "/audio/ellagarero.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=eljacaldelospastores",
        sig: "/resucito/src/index.html?canto=elmesiasleon",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¿QUIÉN ES ESE QUE VIENE DE EDOM?, (Mi,m,21)", sC: "ta as"},
            { line: "¿QUIÉN ES ESE TODO MANCHADO DE ROJO,, (La,m,122)(Mi,m,382)", sC: "as"},
            { line: "ESE DEL VESTIDO ESPLENDOROSO,, (Si,7,17)", sC: "as"},
            { line: "Y DE ANDAR TAN ESFORZADO?, (Mi,m,252)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Soy yo, soy yo que hablo con justicia,, (Re,,10)(Mi,m,315)", sC: "tc"},
            { line: "soy yo un gran libertador., (Si,7,53)(Mi,m,225)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y ¿POR QUÉ,, (Mi,m,18)", sC: "ta as"},
            { line: "POR QUÉ ESTÁ DE ROJO TU VESTIDO?, ", sC: "as"},
            { line: "¿POR QUÉ PARECES UN LAGARERO?, (La,m,94)(Mi,m,305)", sC: "as"},
            { line: "¿POR QUÉ? ¿POR QUÉ?, (Si,7,102)(Mi,m,207)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El lagar, el lagar, he pisado yo solo,, (Re,,11)(Mi,m,309)", sC: "tc"},
            { line: "de mi pueblo, no hubo nadie conmigo., (Si,7,91)(Mi,m,332)", sC: ""},
            { line: "Miré bien, miré bien, y no había auxiliador,, (Re,,11)(Mi,m,387)", sC: ""},
            { line: "me asombré, de que ninguno me ayudase., (Si,7,116)(Mi,m,376)", sC: ""},
    ], lder: [
            { line: "POR ESO, LA FUERZA MÍA,, (La,m,67)", sC: "ta as"},
            { line: "FUERZA MÍA ME SOSTUVO., (Mi,m,220)", sC: "as"},
            { line: "EL DÍA DE LA VENGANZA ERA LLEGADO, (Si,7,344)", sC: "as"},
            { line: "PISOTEÉ LOS PUEBLOS EN MI IRA., (Mi,m,301)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LOS PISÉ, LOS PISÉ CON FURIA,, (La,m,81)(Mi,m,261)", sC: "as"},
            { line: "E HICE CORRER, ", sC: "as"},
            { line: "POR LA TIERRA SU SANGRE,, (Si,7,216)", sC: "as"},
            { line: "Y TODOS MIS VESTIDOS HE MANCHADO., (Mi,m,351)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¿QUIÉN ES ESE QUE VIENE DE EDOM?, (Mi,m,21)", sC: "ta as", lines: [
            { line: "¿QUIÉN ES ESE TODO MANCHADO DE ROJO,, (La,m,122)(Mi,m,382)", sC: "as"},
            { line: "ESE DEL VESTIDO ESPLENDOROSO,, (Si,7,17)", sC: "as"},
            { line: "Y DE ANDAR TAN ESFORZADO?, (Mi,m,252)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: EL LAGARERO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL MESÍAS LEÓN               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "elmesiasleon",
        tt: "El Mesías León",
        title: "El Mesías León",
        subtitle: "Comentario al Apocalipsis (Victorino de Pettau)",
        category: ["Precatecumenado","Pascua","Pentecostés","Fracción Del Pan"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "57",
        notes: "",
        mant: "No",
        audioSrc: "/audio/elmesiasleon.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=ellagarero",
        sig: "/resucito/src/index.html?canto=elneciopiensaquediosnoexiste",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "El Mesías, león para vencer,, (La,m,22)(Mi,,250)", sC: "tc"},
            { line: "se hizo Cordero para sufrir., (La,m,237)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "EL MESÍAS, LEÓN PARA VENCER,, (La,m,20)(Mi,,295)", sC: "ta as"},
            { line: "SE HIZO CORDERO PARA SUFRIR., (La,m,301)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Subió al leño para ser, (Do,,10)(Mi,,192)", sC: "tc"},
            { line: "esposo, para morir., (Fa,,40)(Mi,,171)", sC: ""},
            { line: "Y su Sangre dejó, (Re,m,20)(Mi,,152)", sC: ""},
            { line: "dote para su esposa virgen., (Fa,,15)(Mi,,213)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL MESÍAS, LEÓN PARA VENCER,, (La,m,22)(Mi,,250)", sC: "ta as", lines: [
            { line: "SE HIZO CORDERO PARA SUFRIR., (La,m,301)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y descendió a los infiernos, (Do,,11)(Mi,,208)", sC: "tc"},
            { line: "en busca de la oveja perdida., (Fa,,43)(Mi,,246)", sC: ""},
            { line: "Y con ella subió al Cielo,, (Re,m,19)(Mi,,201)", sC: ""},
            { line: "y la hizo entrar en la casa del Padre., (Fa,,50)(Mi,,303)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL MESÍAS, LEÓN PARA VENCER,, (La,m,22)(Mi,,250)", sC: "ta as", lines: [
            { line: "SE HIZO CORDERO PARA SUFRIR., (La,m,301)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: EL MESÍAS LEÓN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL NECIO PIENSA QUE DIOS NO EXISTE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "elneciopiensaquediosnoexiste",
        tt: "El Necio Piensa Que Dios No Existe",
        title: "El Necio Piensa Que Dios No Existe",
        subtitle: "Salmo 14 (13)",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "58",
        notes: "",
        mant: "No",
        audioSrc: "/audio/elneciopiensaquediosnoexiste.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=elmesiasleon",
        sig: "/resucito/src/index.html?canto=elpuebloquecaminabaenlastinieblas",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EL NECIO PIENSA, (Re,m,21)", sC: "tc as"},
            { line: "QUE DIOS NO EXISTE,, (La,7,164)", sC: "as r1"},
            { line: "SE HAN CORROMPIDO, ", sC: "as"},
            { line: "Y HACEN COSAS ABOMINABLES., (Re,m,250)", sC: "as"},
            { line: "NO HAY QUIEN OBRE EL BIEN,, (Sol,m,59)(La,7,263)", sC: "as"},
            { line: "NO HAY QUIEN OBRE EL BIEN., (Si♭,,49)(La,7,260)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor desde el cielo, (Re,m,21)", sC: "tc"},
            { line: "se inclina hacia los hombres,, (La,7,205)", sC: ""},
            { line: "para ver si hay alguno que sea justo,, (Re,m,314)", sC: ""},
            { line: "un hombre que busque a Dios,, (Sol,m,53)(La,7,268)", sC: ""},
            { line: "un hombre que busque a Dios., (Si♭,,48)(La,7,269)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Todos se han desviado,, (Fa,,10)", sC: ""},
            { line: "están pervertidos., (La,m,20)", sC: ""},
            { line: "Nadie que haga el bien, (Si♭,,11)", sC: ""},
            { line: "ni siquiera uno., (La,7,114)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL NECIO PIENSA, (Re,m,21)", sC: "ta as", lines: [
            { line: "QUE DIOS NO EXISTE,, (La,7,164)", sC: "as r1"},
            { line: "SE HAN CORROMPIDO, ", sC: "as"},
            { line: "Y HACEN COSAS ABOMINABLES., (Re,m,250)", sC: "as"},
            { line: "NO HAY QUIEN OBRE EL BIEN,, (Sol,m,59)(La,7,263)", sC: "as"},
            { line: "NO HAY QUIEN OBRE EL BIEN., (Si♭,,49)(La,7,260)", sC: "as"},  ]},
    ], lder: [
            { line: "No entienden nada los malvados, (Sol,m,23)(La,7,274)", sC: "tc"},
            { line: "que devoran a mi pueblo como pan., (Sol,m,24)(La,7,320)", sC: ""},
            { line: "No invocan nunca al Señor,, (Si♭,,13)", sC: ""},
            { line: "mas temblarán de espanto., (La,7,222)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque Dios está con el justo:, (Fa,,10)(La,7,247)", sC: ""},
            { line: "el Señor es su refugio., (Si♭,,11)(La,7,178)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque Dios está con el justo:, (Re,m,22)(Do,,131)(La,7,244)", sC: "tc"},
            { line: "el Señor es su refugio., (Si♭,,15)(La,7,175)", sC: ""},
            { line: "PORQUE DIOS ESTÁ CON EL JUSTO:, (Re,m,22)(Do,,152)(La,7,288)", sC: "ta as"},
            { line: "EL SEÑOR ES SU REFUGIO., (Si♭,,15)(La,7,211)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "EL NECIO PIENSA, (Re,m,21)", sC: "ta as", lines: [
            { line: "QUE DIOS NO EXISTE,, (La,7,164)", sC: "as r1"},
            { line: "SE HAN CORROMPIDO, ", sC: "as"},
            { line: "Y HACEN COSAS ABOMINABLES., (Re,m,250)", sC: "as"},
            { line: "NO HAY QUIEN OBRE EL BIEN,, (Sol,m,59)(La,7,263)", sC: "as"},
            { line: "NO HAY QUIEN OBRE EL BIEN., (Si♭,,49)(La,7,260)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: EL NECIO PIENSA QUE DIOS NO EXISTE
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL PUEBLO QUE CAMINABA EN LAS TINIEBLAS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "elpuebloquecaminabaenlastinieblas",
        tt: "El Pueblo Que Caminaba En Las Tinieblas",
        title: "El Pueblo Que Caminaba En Las Tinieblas",
        subtitle: "Isaías 9,1-5",
        category: ["Precatecumenado","Adviento","Navidad","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "59",
        notes: "",
        mant: "No",
        audioSrc: "/audio/elpuebloquecaminabaenlastinieblas.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=elneciopiensaquediosnoexiste",
        sig: "/resucito/src/index.html?canto=elsenoranunciaunanoticia",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "El pueblo que caminaba en las tinieblas, (Do,,12)(La,m,333)", sC: "tc"},
            { line: "ha visto una gran luz., (Fa,,41)(La,m,187)", sC: ""},
            { line: "Sobre los que vivían en tierras tenebrosas,, (Sol,,15)(La,m,360)", sC: ""},
            { line: "una gran luz ha brillado., (Sol,,15)(La,m,195)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Has acrecentado el gozo,, (Do,,13)(La,m,211)", sC: ""},
            { line: "hiciste grande la alegría., (Fa,,94)(La,m,216)", sC: ""},
            { line: "Se han alegrado cuando te han visto,, (Sol,,12)(La,m,323)", sC: ""},
            { line: "como se alegran durante la siega,, (Sol,,110)(La,m,288)", sC: ""},
            { line: "como se alegran al reparto del botín., (Sol,,110)(La,m,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "EL DOMINIO ESTARÁ, (Do,,11)", sC: "ta as"},
            { line: "SOBRE SUS HOMBROS,, (La,m,139)", sC: "as"},
            { line: "Y SU NOMBRE SERÁ,, (Sol#,,199)", sC: "as"},
            { line: "Y SU NOMBRE SERÁ:, (Sol,,192)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CONSEJERO MARAVILLOSO,, (Do,,12)(La,m,228)", sC: "as"},
            { line: "DIOS FUERTE, PADRE ETERNO,, (Do,,88)(La,m,246)", sC: "as"},
            { line: "PRÍNCIPE DE PAZ,, (Sol,,27)(La,m,150)", sC: "as"},
            { line: "PRÍNCIPE DE PAZ., (Sol,,28)(La,m,150)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
    ], lder: [
            { line: "Porque el yugo que pesaba sobre el pueblo,, (Do,,12)(La,m,383)", sC: "tc"},
            { line: "el yugo que oprimía sus espaldas,, (Fa,,47)(La,m,273)", sC: ""},
            { line: "la vara del opresor, (Sol,,13)(La,m,168)", sC: ""},
            { line: "tú la has quebrado, como en Madián., (Sol,,14)(La,m,337)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y todo el que pisa con dominio,, (Do,,11)(La,m,262)", sC: ""},
            { line: "todo manto manchado de sangre, (Fa,,76)(La,m,270)", sC: ""},
            { line: "será para la quema, pasto del fuego., (Sol,,33)(La,m,316)", sC: ""},
            { line: "Porque nos ha nacido un niño,, (Sol,,58)(La,m,260)", sC: ""},
            { line: "porque un hijo se nos ha dado., (Sol,,58)(La,m,256)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL DOMINIO ESTARÁ, (Do,,11)", sC: "ta as", lines: [
            { line: "SOBRE SUS HOMBROS,, (La,m,139)", sC: "as"},
            { line: "Y SU NOMBRE SERÁ,, (Sol#,,199)", sC: "as"},
            { line: "Y SU NOMBRE SERÁ:, (Sol,,192)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CONSEJERO MARAVILLOSO,, (Do,,12)(La,m,228)", sC: "as"},
            { line: "DIOS FUERTE, PADRE ETERNO,, (Do,,88)(La,m,246)", sC: "as"},
            { line: "PRÍNCIPE DE PAZ,, (Sol,,27)(La,m,150)", sC: "as"},
            { line: "PRÍNCIPE DE PAZ., (Sol,,27)(La,m,150)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: EL PUEBLO QUE CAMINABA EN LAS TINIEBLAS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL SEÑOR ANUNCIA UNA NOTICIA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "elsenoranunciaunanoticia",
        tt: "El Señor Anuncia Una Noticia",
        title: "El Señor Anuncia Una Noticia",
        subtitle: "Salmo 68 (67)",
        category: ["Precatecumenado","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "60",
        notes: "",
        mant: "No",
        audioSrc: "/audio/elsenoranunciaunanoticia.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=elpuebloquecaminabaenlastinieblas",
        sig: "/resucito/src/index.html?canto=elsenoresmipastor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EL SEÑOR ANUNCIA UNA NOTICIA,, (Sol,,14)(Mi,m,292)", sC: "tc as"},
            { line: "LOS MENSAJEROS SON UN EJÉRCITO INMENSO., (La,m,134)(Mi,m,202)", sC: "as r1"},
            { line: "LOS REYES ENEMIGOS HUYEN, HUYEN,, (La,m,64)(Mi,m,243)", sC: "as"},
            { line: "LA BELLA DE LA CASA REPARTE EL BOTÍN., (Sol,,47)(Si,m,263)(Mi,m,388)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y mientras vosotros dormís, (Sol,,11)", sC: "tc"},
            { line: "entre las tapias del aprisco,, (Si,m,21)", sC: ""},
            { line: "se cubren de plata las alas de la paloma,, (La,m,48)(Mi,m,233)", sC: ""},
            { line: "sus plumas de destellos de oro., (La,m,60)(Mi,m,197)", sC: ""},
            { line: "Por ella cae la nieve sobre el Monte,, (Sol,,51)(Si,m,305)", sC: ""},
            { line: "sobre el Monte Umbrío., (La,,107)(Mi,m,202)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL SEÑOR ANUNCIA UNA NOTICIA,, (Sol,,14)(Mi,m,292)", sC: "ta as", lines: [
            { line: "LOS MENSAJEROS SON UN EJÉRCITO INMENSO., (La,m,134)(Mi,m,202)", sC: "as r1"},
            { line: "LOS REYES ENEMIGOS HUYEN, HUYEN,, (La,m,64)(Mi,m,243)", sC: "as"},
            { line: "LA BELLA DE LA CASA REPARTE EL BOTÍN., (Sol,,47)(Si,m,263)(Mi,m,388)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cantad a Dios, cantad,, (Sol,,15)", sC: "tc"},
            { line: "salmodiad todos al Señor,, (Si,m,17)", sC: ""},
            { line: "que cabalga los cielos, los antiguos cielos., (La,m,22)(Mi,m,238)", sC: ""},
            { line: "Ved que viene sobre las nubes,, (Sol,,17)", sC: ""},
            { line: "él lanza su voz, su voz potente., (Si,m,39)(La,,196)(Mi,m,251)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "EL SEÑOR ANUNCIA UNA NOTICIA,, (Sol,,15)(Mi,m,250)", sC: "ta as", lines: [
            { line: "LOS MENSAJEROS SON UN EJÉRCITO INMENSO., (La,m,15)(Mi,m,250)", sC: "as r1"},
            { line: "LOS REYES ENEMIGOS HUYEN, HUYEN,, (La,m,15)(Mi,m,250)", sC: "as"},
            { line: "LA BELLA DE LA CASA REPARTE EL BOTÍN., (Sol,,15)(Si,m,250)(Mi,m,388)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: EL SEÑOR ANUNCIA UNA NOTICIA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL SEÑOR ES MI PASTOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "elsenoresmipastor",
        tt: "El Señor Es Mi Pastor",
        title: "El Señor Es Mi Pastor",
        subtitle: "Salmo 23 (22)",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "2",
        nCan: "",
        nCanURL: "",
        dbno: "61",
        notes: "",
        mant: "No",
        audioSrc: "/audio/elsenoresmipastor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=elsenoranunciaunanoticia",
        sig: "/resucito/src/index.html?canto=elsenormehadado",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "El Señor es mi pastor,, (La,m,21)(Fa,,186)", sC: "tc"},
            { line: "nada me falta., (Mi,,107)", sC: ""},
            { line: "En prados de fresca hierba, ", sC: ""},
            { line: "me apacienta., (La,m,93)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "EL SEÑOR ES MI PASTOR,, (La,m,19)(Fa,,217)", sC: "ta as"},
            { line: "NADA ME FALTA., (Mi,,118)", sC: "as"},
            { line: "HACIA LAS AGUAS DE LA VIDA, ", sC: "as"},
            { line: "ME CONDUCE., (La,m,97)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Repara mis fuerzas y me lleva, (Sol,,40)(Fa,,259)", sC: "tc"},
            { line: "por el camino del amor., (Mi,,206)", sC: ""},
            { line: "Repara mis fuerzas y me lleva, (Sol,,40)(Fa,,260)", sC: ""},
            { line: "para la gloria de su nombre., (Mi,,212)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL SEÑOR ES MI PASTOR,, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
            { line: "NADA ME FALTA., (Mi,,118)", sC: "as"},
            { line: "HACIA LAS AGUAS DE LA VIDA, ", sC: "as"},
            { line: "ME CONDUCE., (La,m,97)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Aunque camine por valle oscuro,, (Sol,,15)(Fa,,285)", sC: "tc"},
            { line: "no temeré,, (Mi,,93)", sC: ""},
            { line: "porque Tú, porque Tú, porque Tú, ", sC: "melisma"},
            { line: "vas conmigo;, (La,m,92)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
    ], lder: [
            { line: "Tu vara y tu cayado me consuelan,, (Sol,,41)(Fa,,287)", sC: "tc"},
            { line: "me consuelan., (Mi,,96)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL SEÑOR ES MI PASTOR,, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
            { line: "NADA ME FALTA., (Mi,,118)", sC: "as"},
            { line: "HACIA LAS AGUAS DE LA VIDA, ", sC: "as"},
            { line: "ME CONDUCE., (La,m,97)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Preparas una mesa ante mí, (Sol,,48)(Fa,,261)", sC: "tc"},
            { line: "frente a mis enemigos., (Mi,,178)", sC: ""},
            { line: "Me unges la cabeza con perfume,, (Sol,,15)(Fa,,279)", sC: ""},
            { line: "mi copa rebosa., (Mi,,125)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL SEÑOR ES MI PASTOR,, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
            { line: "NADA ME FALTA., (Mi,,118)", sC: "as"},
            { line: "HACIA LAS AGUAS DE LA VIDA, ", sC: "as"},
            { line: "ME CONDUCE., (La,m,97)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sí, tu amor y tu alegría, (Sol,,14)(Fa,,199)", sC: "tc"},
            { line: "me acompañarán., (Mi,,153)", sC: ""},
            { line: "Sí, yo viviré, (Sol,,13)(Fa,,99)", sC: ""},
            { line: "en tu casa eternamente., (Mi,,191)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL SEÑOR ES MI PASTOR,, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
            { line: "NADA ME FALTA., (Mi,,118)", sC: "as"},
            { line: "HACIA LAS AGUAS DE LA VIDA, ", sC: "as"},
            { line: "ME CONDUCE., (La,m,97)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SÍ, TU AMOR Y TU ALEGRÍA, (Sol,,14)(Fa,,230)", sC: "ta as", lines: [
            { line: "ME ACOMPAÑARÁN., (Mi,,172)", sC: "as"},
            { line: "SÍ, YO VIVIRÉ, (Sol,,13)(Fa,,112)", sC: "as"},
            { line: "EN TU CASA ETERNAMENTE., (Mi,,218)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL SEÑOR ES MI PASTOR,, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
            { line: "NADA ME FALTA., (Mi,,118)", sC: "as"},
            { line: "HACIA LAS AGUAS DE LA VIDA, ", sC: "as"},
            { line: "ME CONDUCE., (La,m,97)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: EL SEÑOR ES MI PASTOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EL SEÑOR ME HA DADO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "elsenormehadado",
        tt: "El Señor Me Ha Dado",
        title: "El Señor Me Ha Dado",
        subtitle: "Isaías 50,4-10  - Tercer canto del Siervo de Yahveh",
        category: ["Precatecumenado","Penitencial","Fracción Del Pan","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "62",
        notes: "",
        mant: "No",
        audioSrc: "/audio/elsenormehadado.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=elsenoresmipastor",
        sig: "/resucito/src/index.html?canto=elielilamasabactani",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "El Señor me ha dado, (Si,m,15)(Do,,168)", sC: "tc"},
            { line: "lengua de discípulo,, (Si,m,141)", sC: ""},
            { line: "para que pueda llevar al cansado, (Do,,287)", sC: ""},
            { line: "una palabra alentadora., (Si,m,200)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mañana tras mañana, (Do,,179)", sC: ""},
            { line: "despiertas tú mi oído,, (Si,m,179)", sC: ""},
            { line: "para hacerme escuchar, (Do,,212)", sC: ""},
            { line: "como un discípulo., (Si,m,134)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "EL SEÑOR, EL SEÑOR, (Re,,12)(Fa#,m,188)", sC: "ta as"},
            { line: "EL SEÑOR ME HA ABIERTO EL OÍDO., (Sol,,78)(Fa#,,306)", sC: "as r1"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y yo no me resistí, no me resistí., (Re,,10)(Fa#,m,166)", sC: "tc"},
            { line: "Ofrecí mis espaldas a los que me pegaban., (Re,,54)(Sol,,143)(Fa#,,365)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y YO NO ME RESISTÍ, NO ME RESISTÍ., (Re,,10)(Fa#,m,185)", sC: "ta as"},
            { line: "Ofrecí mis mejillas a los que mesaban mi barba., (Re,,12)(Sol,,142)(Fa#,,418)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y YO NO ME RESISTÍ, NO ME RESISTÍ., (Re,,10)(Fa#,m,185)", sC: "ta as"},
            { line: "Mi rostro no esquivó insultos ni salivazos., (Re,,12)(Fa#,m,364)", sC: "tc"},
    ], lder: [
            { line: "Porque yo ya sabía, (Si,m,19)(Do,,165)", sC: "tc"},
            { line: "que tú habrías de ayudarme,, (Si,m,227)", sC: ""},
            { line: "por eso puse mi cara, (Do,,174)", sC: ""},
            { line: "dura como la piedra,, (Si,m,159)", sC: ""},
            { line: "estaba yo seguro, (Do,,159)", sC: ""},
            { line: "que no quedaría avergonzado., (Si,m,259)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CERCA ESTÁS, CERCA ESTÁS TÚ,, (Re,,10)(Fa#,m,297)", sC: "ta as"},
            { line: "SI TÚ SALVAS, ¿QUIÉN PELEARÁ CONMIGO?, (Sol,,74)(Fa#,,372)", sC: "as"},
            { line: "SI TÚ AYUDAS, SI TÚ ME AYUDAS,, (Re,,88)(Fa#,m,269)", sC: "as"},
            { line: "SI TÚ SÁLVAS, ¿QUIÉN ME CONDENARÁ?, (Sol,,78)(Fa#,,366)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Vosotros que teméis a Dios,, (Si,m,18)(Do,,245)", sC: "tc"},
            { line: "escuchad la voz de su siervo., (Si,m,236)", sC: ""},
            { line: "Y si alguno se encuentra en las tinieblas, (Do,,340)", sC: ""},
            { line: "ponga su confianza en Él,, (Si,m,233)", sC: ""},
            { line: "que se apoye, (Do,,103)", sC: ""},
            { line: "en su Nombre., (Si,m,79)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "CERCA ESTÁS, CERCA ESTÁS TÚ,, (Re,,10)(Fa#,m,297)", sC: "ta as", lines: [
            { line: "SI TÚ SALVAS, ¿QUIÉN PELEARÁ CONMIGO?, (Sol,,74)(Fa#,,372)", sC: "as"},
            { line: "SI TÚ AYUDAS, SI TÚ ME AYUDAS,, (Re,,88)(Fa#,m,269)", sC: "as"},
            { line: "SI TÚ SÁLVAS, ¿QUIÉN ME CONDENARÁ?, (Sol,,78)(Fa#,,366)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: EL SEÑOR ME HA DADO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           ELÍ, ELÍ, LAMÁ SABACTANÍ                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "elielilamasabactani",
        tt: "Elí, Elí, Lamá Sabactaní ",
        title: "Elí, Elí, Lamá Sabactaní ",
        subtitle: "Salmo 22 (21)",
        category: ["Precatecumenado","Antiguo Testamento","Adviento","Navidad","Cuaresma","Penitencial"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "63",
        notes: "",
        mant: "No",
        audioSrc: "/audio/elielilamasabactani.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 5, incremento: 0.5 }, // Para celular
            tablet: { velocidad: 3, incremento: 0.4 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=elsenormehadado",
        sig: "/resucito/src/index.html?canto=enmediodeaquelgentio",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ELÍ, ELÍ, LAMÁ SABACTANÍ., (Mi,m,15)(La,m,125)(Mi,m,251)", sC: "ta as"},
            { line: "DIOS MÍO, DIOS MÍO,, ", sC: "as"},
            { line: "¿POR QUÉ ME HAS ABANDONADO?, (La,m,91)(Mi,m,292)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "¡Qué lejos te siento de mis gritos!, (Si,7,15)", sC: "tc ptop00"},
            { line: "De día clamo, y no respondes,", sC: "ptop00"},
            { line: "grito de noche, y no hay reposo para mí.,(Mi,m,372) ", sC: "ptop00"},
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ELÍ, ELÍ, LAMÁ SABACTANÍ..., (Mi,m,15)(La,m,125)(Mi,m,251)", sC: "ta as", lines: [
            { line: "DIOS MÍO, DIOS MÍO,, ", sC: "as"},
            { line: "¿POR QUÉ ME HAS ABANDONADO?, (La,m,91)(Mi,m,292)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Mas tú eres el Santo,, (Si,7,15)", sC: "tc ptop00"},
            { line: "tú que vives en medio de mi pueblo!, ", sC: "ptop00"},
            { line: "A ti clamaron nuestros padres, ", sC: "ptop00"},
            { line: "y tú les ayudaste,", sC: "ptop00"},
            { line: "en ti confiaron y nunca quedaron confundidos.(Mi,m,398)", sC: "ptop00"},


            { line: "Entonces yo, ¿por qué no me ayudas?, (La,m,313)", sC: ""},
            { line: "¿Acaso no soy un hombre?, (Mi,m,192)", sC: ""},

            { line: "Eso soy yo: soy un gusano,, (Si,7,15)", sC: ""},
            { line: "desprecio de la gente, asco del pueblo,, ", sC: "ptop00"},
            { line: "todos los que me ven de mí se ríen, ", sC: "ptop00"},
            { line: "menean la cabeza y dicen:, ", sC: "ptop00"},
            { line: "«Se confió a Dios, ¡que él lo libre,", sC: "ptop00"},
            { line: "que él le salve, si tanto dice que le ama!»,  (Mi,m,351)", sC: "ptop00"},
            { line: "Sí, que tú me amas, sí, que tú me quieres,, (La,m,358)", sC: ""},

            { line: "en el seno de mi madre me formaste;, (Mi,m,319)", sC: ""},
            { line: "cuando me dio a luz ya me ofreció a ti,, (Si,7,183)", sC: ""},
            { line: "desde el vientre de mi madre tú ya eras mi Dios., (Mi,m,436)", sC: "ptop00"},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ELÍ, ELÍ, LAMÁ SABACTANÍ..., (Mi,m,15)(La,m,125)(Mi,m,251)", sC: "ta as", lines: [
            { line: "DIOS MÍO, DIOS MÍO,, ", sC: "as"},
            { line: "¿POR QUÉ ME HAS ABANDONADO?, (La,m,91)(Mi,m,292)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Soy agua sucia que se tira,, (Si,7,15)", sC: "tc "},
            { line: "todos mis huesos se dislocan, ", sC: "ptop00"},
    ], lder: [
            { line: "mi corazón como cera, se derrite en mis entrañas.", sC: "font15"},
            { line: "Mi paladar está seco como teja,", sC: "ptop00"},
            { line: "y mi lengua está pegada a la garganta. (Mi,m,333)", sC: "ptop00"},

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ELÍ, ELÍ, LAMÁ SABACTANÍ..., (Mi,m,15)(La,m,125)(Mi,m,251)", sC: "ta as", lines: [
            { line: "DIOS MÍO, DIOS MÍO,, ", sC: "as"},
            { line: "¿POR QUÉ ME HAS ABANDONADO?, (La,m,91)(Mi,m,292)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Perros innumerables me rodean,, (Si,7,15)", sC: "tc"},
            { line: "una banda de malhechores me acomete,, ", sC: "ptop00"},
            { line: "taladran mis manos y mis pies., ", sC: "ptop00"},
            { line: "Se pueden contar mis huesos;, ", sC: "ptop00"},
            { line: "me observan y me miran,", sC: "ptop00"},
            { line: "se reparten mis vestidos, se sortean mi túnica. (Mi,m,397)", sC: "ptop00"},
            { line: "¡Mas tú, Dios mío, no estés lejos!, (La,m,278)", sC: ""},
            { line: "Ven en mi ayuda, fuerza mía,, (Mi,m,253)", sC: ""},
            { line: "libra mi alma de la espada,, (Si,7,15)", sC: ""},
            { line: "libra mi vida de las fauces del león,", sC: "ptop00"},
            { line: "libra mi alma de los cuernos de los búfalos.(Mi,m,362) ", sC: "ptop00"},
            { line: "¡Anunciaré, yo, tu nombre a mis hermanos,, (La,m,362)", sC: ""},
            { line: "en medio de la asamblea te cantaré!:, (Mi,m,338)", sC: ""},
            { line: "«Los que a Yahveh amáis, dadle alabanza,, (Si,7,218)", sC: ""},
            { line: "raza de Jacob, glorificad a Yahveh,, ", sC: "ptop00"},
            { line: "temedle, pueblo de Israel»., (Mi,m,229)", sC: ""},

            { line: "Porque ha sido el único,", sC: ""},
            { line: "que no ha tenido asco de este pobre, (La,m,262)", sC: ""},
            { line: "ni ha desdeñado la miseria de mi vida;(Mi,m,341)", sC: ""},
            { line: "no me ha ocultado su rostro cuando le invocaba, (Si,7,227)", sC: ""},
            { line: "por eso, yo ahora sé que los pobres vivirán. (Mi,m,388)", sC: ""},
            { line: "Los pobres comerán, serán saciados, (La,m,305)", sC: ""},
            { line: "los que buscan a Yahveh lo encontrarán:, (Mi,m,376)", sC: "ptop00"},
            { line: "¡su corazón, su corazón, vivirá para siempre!, (Si,7,91)(Mi,m,359) ", sC: ""},
]}, // ULTIMA LINEA DEL CANTO: ELÍ, ELÍ, LAMÁ SABACTANÍ 
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EN MEDIO DE AQUEL GENTÍO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "enmediodeaquelgentio",
        tt: "En Medio De Aquel Gentío",
        title: "En Medio De Aquel Gentío",
        subtitle: "Lucas 8,42b-48",
        category: ["Precatecumenado","Comunión","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "64",
        notes: "",
        mant: "No",
        audioSrc: "/audio/enmediodeaquelgentio.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=elielilamasabactani",
        sig: "/resucito/src/index.html?canto=enunanocheoscura",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EN MEDIO DE AQUEL GENTÍO,, (La,m,21)", sC: "tc"},
            { line: "EN MEDIO DE TODA AQUELLA GENTE, (Sol,,316)", sC: "as r1"},
            { line: "UNA MUJER, UNA MUJER LE TOCÓ., (Mi,,97)(Fa,,216)(Mi,,319)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«¿Quién es el que me ha tocado?, (La,m,19)", sC: "tc"},
            { line: "¿Quién es el que me ha tocado?», (Sol,,265)", sC: ""},
            { line: "dijo Cristo, dijo Cristo y se paró., (Mi,,12)(Fa,,170)(Mi,,288)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Una mujer temblorosa,, (La,m,20)", sC: ""},
            { line: "una mujer temblorosa, (Sol,,186)", sC: ""},
            { line: "dijo a Cristo: «¡He sido yo!, (Fa,,10)(Mi,,231)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«Que soy una mujer impura,, (La,m,24)", sC: ""},
            { line: "que soy una mujer impura, (Sol,,224)", sC: ""},
            { line: "que sufro flujo de sangre., (Fa,,57)(Mi,,194)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "QUE SOY UNA MUJER IMPURA,, (La,m,22)", sC: "ta as"},
            { line: "QUE SOY UNA MUJER IMPURA, (Sol,,252)", sC: "as"},
            { line: "QUE SUFRO FLUJO DE SANGRE., (Fa,,68)(Mi,,236)", sC: "as"},
    ], lder: [
            { line: "Mas al tocar tu vestido,, (La,m,22)", sC: ""},
            { line: "mas al tocar tu vestido, (Sol,,193)", sC: ""},
            { line: "el flujo de sangre se curó»., (Fa,,40)(Mi,,233)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«Hija, tu fe,, (La,m,27)Sol", sC: ""},
            { line: "tu fe te ha salvado»., (Fa,,38)(Mi,,149)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EN MEDIO DE AQUEL GENTÍO,, (La,m,21)", sC: "ta as", lines: [
            { line: "EN MEDIO DE TODA AQUELLA GENTE, (Sol,,316)", sC: "as r1"},
            { line: "UNA MUJER, UNA MUJER LE TOCÓ., (Mi,,97)(Fa,,216)(Mi,,319)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si quieres tú tocar a Cristo,, (La,m,19)", sC: "tc"},
            { line: "si quieres tú tocar a Cristo,, (Sol,,217)", sC: ""},
            { line: "lo puedes tocar con la fe., (Fa,,51)(Mi,,224)", sC: ""},
            { line: "Que Él es el Hijo de Dios,, (La,m,21)", sC: ""},
            { line: "que Él es el Hijo de Dios, (Sol,,214)", sC: ""},
            { line: "que ha venido para curarte,, (Fa,,106)", sC: ""},
            { line: "para salvarte., (Mi,,93)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EN MEDIO DE AQUEL GENTÍO,, (La,m,21)", sC: "ta as", lines: [
            { line: "EN MEDIO DE TODA AQUELLA GENTE, (Sol,,316)", sC: "as r1"},
            { line: "UNA MUJER, UNA MUJER LE TOCÓ., (Mi,,97)(Fa,,216)(Mi,,319)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: EN MEDIO DE AQUEL GENTÍO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EN UNA NOCHE OSCURA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "enunanocheoscura",
        tt: "En Una Noche Oscura",
        title: "En Una Noche Oscura",
        subtitle: "Subida al Monte Carmelo – San Juan de la Cruz",
        category: ["Precatecumenado","Comunión","Fracción del Pan","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "65",
        notes: "",
        mant: "No",
        audioSrc: "/audio/enunanocheoscura.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=enmediodeaquelgentio",
        sig: "/resucito/src/index.html?canto=eresdignodetomarellibro",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EN UNA NOCHE OSCURA,, (La,m,21)", sC: "ta as"},
            { line: "CON ANSIAS, EN AMORES INFLAMADA,, (Re,m,60)(Mi,,337)", sC: "as r1"},
            { line: "¡OH DICHOSA VENTURA!,, (Re,m,22)(Fa,,190)", sC: "as"},
            { line: "SALÍ SIN SER NOTADA,, (Re,m,180)", sC: "as"},
            { line: "ESTANDO YA MI CASA SOSEGADA., (Mi,,289)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "A oscuras y segura,, (La,m,89)", sC: "tc"},
            { line: "por la secreta escala, disfrazada,, (Re,m,105)(Mi,,277)", sC: ""},
            { line: "¡oh dichosa ventura!,, (Re,m,21)(Fa,,161)", sC: ""},
            { line: "a oscuras y en celada,, (Re,m,176)", sC: ""},
            { line: "estando ya mi casa sosegada., (Mi,,254)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En la noche dichosa,, (Re,m,21)(Mi,,163)", sC: ""},
            { line: "en secreto, que nadie me veía,, (Re,m,74)(Fa,,273)", sC: ""},
            { line: "ni yo miraba cosa,, ", sC: ""},
            { line: "sin otra luz y guía,, (Re,m,149)", sC: ""},
            { line: "sino la que en el corazón ardía., (Mi,,279)", sC: ""},
    ], lder: [
            { line: "Aquésta me guiaba, (La,m,15)(Re,m,153)", sC: "tc"},
            { line: "más cierto que la luz del mediodía,, (La,m,312)", sC: ""},
            { line: "adonde me esperaba, (Mi,,170)", sC: ""},
            { line: "quien yo bien me sabía,, (La,m,206)", sC: ""},
            { line: "en parte donde nadie parecía., (Re,m,46)(Mi,,266)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Oh noche que guiaste!, (La,m,24)(Re,m,182)", sC: "tc"},
            { line: "¡oh noche amable más que la alborada!, (La,m,344)", sC: ""},
            { line: "¡oh noche que juntaste, (Mi,,185)", sC: ""},
            { line: "Amado con amada,, (Fa,,34)", sC: ""},
            { line: "amada en el Amado transformada!, (Re,m,45)(Mi,,297)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡OH NOCHE QUE GUIASTE!, (La,m,19)(Re,m,201)", sC: "ta as"},
            { line: "¡OH NOCHE AMABLE MÁS QUE LA ALBORADA!, (La,m,401)", sC: "as"},
            { line: "¡OH NOCHE QUE JUNTASTE, (Mi,,215)", sC: "as"},
            { line: "AMADO CON AMADA,, (Fa,,41)", sC: "as"},
            { line: "AMADA EN EL AMADO TRANSFORMADA!, (Re,m,39)(Mi,,349)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EN UNA NOCHE OSCURA, (La,m,21)", sC: "ta as", lines: [
            { line: "CON ANSIAS, EN AMORES INFLAMADA,, (Re,m,60)(Mi,,337)", sC: "as r1"},
            { line: "¡OH DICHOSA VENTURA!,, (Re,m,22)(Fa,,190)", sC: "as"},
            { line: "SALÍ SIN SER NOTADA,, (Re,m,180)", sC: "as"},
            { line: "ESTANDO YA MI CASA SOSEGADA. (Mi,,289)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: EN UNA NOCHE OSCURA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           ERES DIGNO DE TOMAR EL LIBRO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "eresdignodetomarellibro",
        tt: "Eres Digno De Tomar El Libro",
        title: "Eres Digno De Tomar El Libro",
        subtitle: "Apocalipsis 5,9ss",
        category: ["Precatecumenado","Pascua","Pentecostés","Fracción Del Pan","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "66",
        notes: "",
        mant: "No",
        audioSrc: "/audio/eresdignodetomarellibro.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=enunanocheoscura",
        sig: "/resucito/src/index.html?canto=ereshermoso",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Eres digno de tomar el libro, (Re,m,22)", sC: "tc"},
            { line: "y abrir sus sellos, (Sol,m,45)(La,,119)", sC: ""},
            { line: "porque tú has sido inmolado, (La,7,88)(Re,m,246)", sC: ""},
            { line: "y has comprado con tu sangre, (La,,237)", sC: ""},
            { line: "hombres de toda raza, (Re,m,22)", sC: ""},
            { line: "lengua, pueblo y nación;, ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y HAS HECHO DE ELLOS, (Fa,,8)(La,m,182)", sC: "ta as"},
            { line: "PARA NUESTRO DIOS, (Fa,,182)", sC: "as"},
            { line: "UN REINO DE SACERDOTES,, (La,m,54)(Fa,,222)", sC: "as"},
            { line: "Y REINAN, Y REINAN, (La,m,143)", sC: "as"},
            { line: "SOBRE LA TIERRA., (Re,m,127)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Eres digno, Cordero degollado,, (Re,m,15)", sC: "tc"},
            { line: "de tomar el libro, (Sol,m,72)(La,,126)", sC: ""},
            { line: "y abrir sus sellos, (La,7,50)(Re,m,120)", sC: ""},
            { line: "porque has comprado con tu sangre, (La,,296)", sC: ""},
            { line: "hombres de toda raza,, (Re,m,21)", sC: ""},
            { line: "lengua, pueblo y nación;, ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Y HAS HECHO DE ELLOS, (Fa,,8)(La,m,182)", sC: "ta as", lines: [
            { line: "PARA NUESTRO DIOS, (Fa,,182)", sC: "as"},
            { line: "UN REINO DE SACERDOTES,, (La,m,54)(Fa,,222)", sC: "as"},
            { line: "Y REINAN, Y REINAN, (La,m,143)", sC: "as"},
            { line: "SOBRE LA TIERRA., (Re,m,127)", sC: "as"},  ]},
    ], lder: [
            { line: "Digno eres, Cordero degollado,, (Re,m,15)", sC: "tc"},
            { line: "de recibir el poder, la riqueza y la gloria,, (Sol,m,81)(La,,344)", sC: ""},
            { line: "la sabiduría, el honor y la alabanza,, (La,7,100)(Re,m,293)", sC: ""},
            { line: "porque has comprado con tu sangre, (La,7,296)", sC: ""},
            { line: "hombres de toda raza,, (Re,m,23)", sC: ""},
            { line: "lengua, pueblo y nación;, ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Y HAS HECHO DE ELLOS, (Fa,,8)(La,m,182)", sC: "ta as", lines: [
            { line: "PARA NUESTRO DIOS, (Fa,,182)", sC: "as"},
            { line: "UN REINO DE SACERDOTES,, (La,m,54)(Fa,,222)", sC: "as"},
            { line: "Y REINAN, Y REINAN, (La,m,143)", sC: "as"},
            { line: "SOBRE LA TIERRA., (Re,m,127)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ERES DIGNO DE TOMAR EL LIBRO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           ERES HERMOSO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "ereshermoso",
        tt: "Eres Hermoso",
        title: "Eres Hermoso",
        subtitle: "Salmo 45 (44) ",
        category: ["Precatecumenado","Comunión","Final","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "67",
        notes: "",
        mant: "No",
        audioSrc: "/audio/ereshermoso.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=eresdignodetomarellibro",
        sig: "/resucito/src/index.html?canto=espaciente",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ERES HERMOSO, EL MÁS HERMOSO, (Mi,,11)", sC: "ta as"},
            { line: "DE LOS HIJOS DE ADÁN, ", sC: "as"},
            { line: "DE LOS HIJOS DE ADÁN. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LA GRACIA ESTÁ EN TUS LABIOS. ", sC: "as"},
            { line: "ERES BENDITO, ", sC: "as"},
            { line: "EL BENDITO PARA SIEMPRE. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ciñe la espada a tu flanco, oh valiente,, (Do#,m,28)(Sol#,,335)", sC: "tc"},
            { line: "y marcha lleno de gloria y esplendor,, (La,,46)(Sol#,,334)", sC: ""},
            { line: "cabalga por la verdad,, (Fa#,m,26)", sC: ""},
            { line: "la mansedumbre, la justicia., (Sol#,,233)", sC: ""},
            { line: "¡Tensa tu arco,, ", sC: ""},
            { line: "que hace temible tu derecha!, (La,,15)(Sol#,,230)", sC: ""},
            { line: "Agudas son tus flechas,, (Fa#,m,27)(Sol#,,170)", sC: ""},
            { line: "te han sido entregados los pueblos., (Si,,8)(La,,179)(Sol#,,290)", sC: ""},
            { line: "TE HAN SIDO ENTREGADOS, (Si,,8)(La,,218)", sC: "ta as"},
            { line: "LOS PUEBLOS., (Sol#,,76)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ERES HERMOSO, EL MÁS HERMOSO, (Mi,,11)", sC: "ta as", lines: [
            { line: "DE LOS HIJOS DE ADÁN, ", sC: "as"},
            { line: "DE LOS HIJOS DE ADÁN. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LA GRACIA ESTÁ EN TUS LABIOS. ", sC: "as"},
            { line: "ERES BENDITO, ", sC: "as"},
            { line: "EL BENDITO PARA SIEMPRE. ", sC: "as"},  ]},
    ], lder: [
            { line: "Desde los palacios de marfil, (Do#,m,26)(Sol#,,264)", sC: "tc"},
            { line: "las cítaras cantan para ti., (La,,46)(Sol#,,234)", sC: ""},
            { line: "Hijas de reyes son tus favoritas;, (Fa#,m,25)(Sol#,,264)", sC: ""},
            { line: "a tu derecha está la reina, (Si,,80)(La,,207)", sC: ""},
            { line: "en oro de Ofir. (Sol#,,123)", sC: ""},
            { line: "A TU DERECHA ESTÁ LA REINA, (Si,,100)(La,,259)", sC: "ta as"},
            { line: "EN ORO DE OFIR. (Sol#,,148)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ERES HERMOSO, EL MÁS HERMOSO, (Mi,,11)", sC: "ta as", lines: [
            { line: "DE LOS HIJOS DE ADÁN, ", sC: "as"},
            { line: "DE LOS HIJOS DE ADÁN. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LA GRACIA ESTÁ EN TUS LABIOS. ", sC: "as"},
            { line: "ERES BENDITO, ", sC: "as"},
            { line: "EL BENDITO PARA SIEMPRE. ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Escucha, hija, y mira, inclina el oído,, (Do#,m,29)(Sol#,,171)(La,,243)(Sol#,,315)", sC: "tc"},
            { line: "olvida tu pueblo y la casa de tu padre,, (Fa#,m,34)(Sol#,,318)", sC: ""},
            { line: "y el rey se prendará de tu belleza., (Si,,54)(La,,179)(Sol#,,288)", sC: ""},
            { line: "Y EL REY SE PRENDARÁ, (Si,,70)(La,,222)", sC: "ta as"},
            { line: "DE TU BELLEZA. (Sol#,,119)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El es tu Señor, ¡entrégate a él!, (Fa#,m,27)(Sol#,,119)(Fa#,m,193)(Sol#,,272)", sC: "tc"},
            { line: "Y en lugar de padres, tendrás hijos,, (Si,,8)(La,,298)", sC: ""},
            { line: "que serán príncipes sobre la tierra., (Sol#,,297)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ERES HERMOSO, EL MÁS HERMOSO, (Mi,,11)", sC: "ta as", lines: [
            { line: "DE LOS HIJOS DE ADÁN, ", sC: "as"},
            { line: "DE LOS HIJOS DE ADÁN. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LA GRACIA ESTÁ EN TUS LABIOS. ", sC: "as"},
            { line: "ERES BENDITO, ", sC: "as"},
            { line: "EL BENDITO PARA SIEMPRE. ", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ERES HERMOSO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           ES PACIENTE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "espaciente",
        tt: "Es paciente",
        title: "Es paciente",
        subtitle: "Himno al Espíritu Santo (Kiko Argüello) ",
        category: ["Precatecumenado","Pascua","Pentecostés","Entrada","Comunión"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "68",
        notes: "",
        mant: "No",
        audioSrc: "/audio/espaciente.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=ereshermoso",
        sig: "/resucito/src/index.html?canto=escondemeenloocultodetutienda",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "El Espíritu Santo es el yugo suave,, (La,m,20)(Mi,,298)", sC: "tc"},
            { line: "es el yugo suave y ligero., (La,m,205)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "EL ESPÍRITU SANTO ES EL YUGO SUAVE,, (La,m,21)(Mi,,349)", sC: "ta as"},
            { line: "ES EL YUGO SUAVE Y LIGERO., (La,m,244)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Lleno de comprensión,, (Re,m,21)(Mi,,196)", sC: "tc"},
            { line: "lleno de misericordia con nuestras faltas,, (Re,m,21)(Mi,,348)", sC: ""},
            { line: "lleno de ternura y compasión, (Fa,,11)", sC: ""},
            { line: "y de amor sin límites., (Mi,,145)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ES PACIENTE, ES BENIGNO,, (La,m,19)", sC: "ta as"},
            { line: "ES EL SUMO BIEN,, (Mi,,151)", sC: "as"},
            { line: "ES EL DON DE DIOS,, (La,m,165)", sC: "as"},
            { line: "ES LA GARANTÍA DE LA VIDA ETERNA,, (Re,m,22)(Mi,,310)", sC: "as"},
            { line: "ES EL «PARÁCLITO»., (Re,m,21)(Mi,,116)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Habitando en el hombre,, (La,m,21)", sC: "tc"},
            { line: "nos perdona siempre,, (Mi,,148)", sC: ""},
            { line: "habitando en el hombre,, ", sC: ""},
            { line: "espera siempre., (La,m,96)", sC: ""},
    ], lder: [
            { line: "Lo comprende todo, lo excusa todo., (Re,m,21)(Mi,,307)", sC: ""},
            { line: "Nos defiende siempre,, (Re,m,21)", sC: ""},
            { line: "y nos enseña a ser pacientes, (Fa,,230)", sC: ""},
            { line: "con nuestros pecados., (Mi,,195)", sC: ""},
            { line: "Nos dice quiénes somos,, (Re,m,23)(Mi,,186)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "y nos dice dónde andamos,, (Re,m,19)(Mi,,209)", sC: ""},
            { line: "cuál es el camino y porqué sufrimos., (Fa,,10)(Mi,,299)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ES PACIENTE, ES BENIGNO,, (La,m,19)", sC: "ta as", lines: [
            { line: "ES EL SUMO BIEN,, (Mi,,151)", sC: "as"},
            { line: "ES EL DON DE DIOS,, (La,m,165)", sC: "as"},
            { line: "ES LA GARANTÍA DE LA VIDA ETERNA,, (Re,m,22)(Mi,,310)", sC: "as"},
            { line: "ES EL «PARÁCLITO»., (Re,m,21)(Mi,,116)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Nos dice que en nuestra vida todo es santo,, (La,m,20)(Mi,,374)", sC: "tc"},
            { line: "que nuestra historia es santa,, (La,m,242)", sC: ""},
            { line: "y nos conduce al abandono total en Cristo., (Re,m,20)(Mi,,366)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En Él nada se pretende,, (Re,m,22)(Mi,,181)", sC: ""},
            { line: "se acepta todo, se soporta todo., (Fa,,57)(Mi,,274)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque parecerse al Señor sobre la Cruz, (Re,m,22)(Mi,,366)", sC: ""},
            { line: "es nuestra gloria, es la verdad,, (Re,m,129)", sC: ""},
            { line: "es la Santidad, es nuestro ser Cristiano., (Fa,,116)(Mi,,341)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ES PACIENTE, ES BENIGNO,, (La,m,19)", sC: "ta as", lines: [
            { line: "ES EL SUMO BIEN,, (Mi,,151)", sC: "as"},
            { line: "ES EL DON DE DIOS,, (La,m,165)", sC: "as"},
            { line: "ES LA GARANTÍA DE LA VIDA ETERNA,, (Re,m,22)(Mi,,310)", sC: "as"},
            { line: "ES EL «PARÁCLITO»., (Re,m,21)(Mi,,116)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: ES PACIENTE
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           ESCÓNDEME EN LO OCULTO DE                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "escondemeenloocultodetutienda",
        tt: "Escóndeme en lo oculto de tu tienda ",
        title: "Escóndeme en lo oculto de tu tienda",
        subtitle: "Salmo 27 (26)",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "69",
        notes: "",
        mant: "No",
        audioSrc: "/audio/escondemeenloocultodetutienda.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=espaciente",
        sig: "/resucito/src/index.html?canto=escuchadislaslejanas",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ESCÓNDEME, (La,m,20)", sC: "ta as"},
            { line: "EN LO OCULTO DE TU TIENDA,, (Sol,,220)", sC: "as r1"},
            { line: "SOBRE TU ROCA LEVÁNTAME., (Fa,,121)(Mi,,273)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yahveh es mi luz y mi salvación,, (La,m,19)(Fa,,282)", sC: "tc"},
            { line: "¿a quién he de temer?, (Mi,,190)", sC: ""},
            { line: "Yahveh es el refugio de mi vida,, (La,m,20)(Fa,,271)", sC: ""},
            { line: "¿por quién he de temblar?, (Mi,,227)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESCÓNDEME, (La,m,20)", sC: "ta as", lines: [
            { line: "EN LO OCULTO DE TU TIENDA,, (Sol,,220)", sC: "as r1"},
            { line: "SOBRE TU ROCA LEVÁNTAME., (Fa,,121)(Mi,,273)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cuando se acercan contra mí los malvados, (La,m,21)(Fa,,368)", sC: "tc"},
            { line: "a devorar mi carne,, (Mi,,144)", sC: ""},
            { line: "son ellos, mis adversarios y enemigos,, (La,m,19)(Fa,,322)", sC: ""},
            { line: "los que tropiezan y sucumben., (Mi,,221)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESCÓNDEME, (La,m,20)", sC: "ta as", lines: [
            { line: "EN LO OCULTO DE TU TIENDA,, (Sol,,220)", sC: "as r1"},
            { line: "SOBRE TU ROCA LEVÁNTAME., (Fa,,121)(Mi,,273)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Aunque acampe un ejército contra mí,, (La,m,20)(Fa,,356)", sC: "tc"},
            { line: "mi corazón no teme;, (Mi,,155)", sC: ""},
            { line: "aunque estalle una guerra contra mí,, (La,m,20)(Fa,,345)", sC: ""},
            { line: "estoy seguro en ella., (Mi,,164)", sC: ""},
    ], lder: [
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESCÓNDEME, (La,m,20)", sC: "ta as", lines: [
            { line: "EN LO OCULTO DE TU TIENDA,, (Sol,,220)", sC: "as r1"},
            { line: "SOBRE TU ROCA LEVÁNTAME., (Fa,,121)(Mi,,273)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Una cosa he pedido a Yahveh,, (La,m,20)(Fa,,259)", sC: "tc"},
            { line: "eso solo estoy buscando:, (Mi,,188)", sC: ""},
            { line: "habitar en la Casa de Yahveh,, (La,m,20)(Fa,,256)", sC: ""},
            { line: "todos los días de mi vida., (Mi,,208)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESCÓNDEME, (La,m,20)", sC: "ta as", lines: [
            { line: "EN LO OCULTO DE TU TIENDA,, (Sol,,220)", sC: "as r1"},
            { line: "SOBRE TU ROCA LEVÁNTAME., (Fa,,121)(Mi,,273)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Él me dará cobijo en su cabaña, (La,m,20)(Fa,,264)", sC: "tc"},
            { line: "el día de la desdicha;, (Mi,,157)", sC: ""},
            { line: "me esconderá en lo oculto de su tienda,, (La,m,20)(Fa,,333)", sC: ""},
            { line: "sobre su roca me levantará., (Mi,,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESCÓNDEME, (La,m,20)", sC: "ta as", lines: [
            { line: "EN LO OCULTO DE TU TIENDA,, (Sol,,220)", sC: "as r1"},
            { line: "SOBRE TU ROCA LEVÁNTAME., (Fa,,121)(Mi,,273)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Escucha, Yahveh, mi voz que clama,, (La,m,20)(Fa,,299)", sC: "tc"},
            { line: "¡tenme piedad, respóndeme!, (Mi,,262)", sC: ""},
            { line: "Sí, Yahveh, tu rostro busco:, (La,m,21)(Fa,,208)", sC: ""},
            { line: "no me ocultes tu rostro., (Mi,,177)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESCÓNDEME, (La,m,20)", sC: "ta as", lines: [
            { line: "EN LO OCULTO DE TU TIENDA,, (Sol,,220)", sC: "as r1"},
            { line: "SOBRE TU ROCA LEVÁNTAME., (Fa,,121)(Mi,,273)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ESCÓNDEME EN LO OCULTO DE 
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           ESCUCHAD, ISLAS LEJANAS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "escuchadislaslejanas",
        tt: "Escuchad, Islas Lejanas",
        title: "Escuchad, Islas Lejanas",
        subtitle: "Isaias 49,1-16 - Segundo canto de Siervo de Yahveh",
        category: ["Precatecumenado","Adviento","Navidad","Entrada","Comunión","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "70",
        notes: "",
        mant: "No",
        audioSrc: "/audio/escuchadislaslejanas.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=escondemeenloocultodetutienda",
        sig: "/resucito/src/index.html?canto=esteeseldiaenqueactuoelsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Escuchad, islas lejanas,, (La,7,15)", sC: "tc"},
            { line: "prestad atención, naciones,, ", sC: ""},
            { line: "así habla el Señor, el Santo de Israel:, ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Aquel que tiene la vida despreciada, (Re,,10)", sC: ""},
            { line: "y es el abominio de las gentes,, (Fa#,,16)(Sol,,245)", sC: ""},
            { line: "al esclavo de los dominadores:, (Fa#,,16)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "TE VERÁN LOS REYES,, (Re,,10)", sC: "ta as"},
            { line: "SE PONDRÁN EN PIE., ", sC: "as r1"},
            { line: "LOS PRÍNCIPES DE LA TIERRA, (Fa#,m,75)", sC: "as"},
            { line: "SE INCLINARÁN,, (Sol,,135)", sC: "as"},
            { line: "YO TE HE ELEGIDO,, ", sC: "as"},
            { line: "TE HE ELEGIDO., (Fa#,,111)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En el día favorable te ayudaré,, (Re,,11)", sC: "tc"},
            { line: "en el día de la muerte te asistiré,, (Fa#,m,75)(Sol,,302)", sC: ""},
            { line: "pues te he elegido, ", sC: ""},
            { line: "como alianza a las naciones., (Fa#,,233)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TE VERÁN LOS REYES,, (Re,,10)", sC: "ta as", lines: [
            { line: "SE PONDRÁN EN PIE., ", sC: "as r1"},
            { line: "LOS PRÍNCIPES DE LA TIERRA, (Fa#,m,75)", sC: "as"},
            { line: "SE INCLINARÁN,, (Sol,,135)", sC: "as"},
            { line: "YO TE HE ELEGIDO,, ", sC: "as"},
            { line: "TE HE ELEGIDO., (Fa#,,111)", sC: "as"},  ]},
    ], lder: [
            { line: "Dirás a los prisioneros: «Salid»;, (Re,,12)", sC: "tc"},
            { line: "dirás a los ciegos: «Mirad»;, (Fa#,m,27)(Sol,,217)", sC: ""},
            { line: "conducirás a los pueblos, ", sC: ""},
            { line: "por el camino de la vida., (Fa#,,200)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TE VERÁN LOS REYES,, (Re,,10)", sC: "ta as", lines: [
            { line: "SE PONDRÁN EN PIE., ", sC: "as r1"},
            { line: "LOS PRÍNCIPES DE LA TIERRA, (Fa#,m,75)", sC: "as"},
            { line: "SE INCLINARÁN,, (Sol,,135)", sC: "as"},
            { line: "YO TE HE ELEGIDO,, ", sC: "as"},
            { line: "TE HE ELEGIDO., (Fa#,,111)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mas Sión dice: «Yahveh me ha abandonado,, (Si,m,20)(Mi,m,202)(Si,m,383)", sC: "tc"},
            { line: "Yahveh me ha olvidado»., (Mi,m,51)(Si,m,193)", sC: ""},
            { line: "¿Acaso una madre olvida a su hijo de pecho,, (Sol,,13)(Fa#,,381)", sC: ""},
            { line: "es que se olvida del hijo de su seno?, (Sol,,13)(Fa#,,307)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PUES AUNQUE UNA MADRE, (Re,,12)(Fa#,m,214)", sC: "ta as"},
            { line: "SE OLVIDASE DE SU HIJO,, (Sol,,208)", sC: "as"},
            { line: "YO JAMÁS TE OLVIDARÉ., (Fa#,,221)", sC: "as"},
            { line: "MÍRAME, EN LAS PALMAS DE MIS MANOS, (Sol,,15)", sC: "as"},
            { line: "TE LLEVO TATUADA., (Fa#,,147)", sC: "as"},
            { line: "MÍRAME, EN LAS PALMAS DE MIS MANOS, (Sol,,15)", sC: "as"},
            { line: "TE LLEVO TATUADA., (Fa#,,158)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TE VERÁN LOS REYES,, (Re,,10)", sC: "ta as", lines: [
            { line: "SE PONDRÁN EN PIE., ", sC: "as r1"},
            { line: "LOS PRÍNCIPES DE LA TIERRA, (Fa#,m,75)", sC: "as"},
            { line: "SE INCLINARÁN,, (Sol,,135)", sC: "as"},
            { line: "YO TE HE ELEGIDO,, ", sC: "as"},
            { line: "TE HE ELEGIDO., (Fa#,,111)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ESCUCHAD, ISLAS LEJANAS
// SIGUIENTE CANTO DEBAJO

// CANTO ESPECIAL, ESTE ES EL DIA EN QUE ACTUO EL SEÑOR

/*
╔════════════════════════════════════════════════════════╗
║           ESTE ES EL DÍA EN QUE ACTUÓ EL SEÑOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "esteeseldiaenqueactuoelsenor",
        tt: "Este Es El Día En Que Actuó El Señor",
        title: "Este Es El Día En Que Actuó El Señor",
        subtitle: "Salmo 118 (117)",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "71",
        notes: "",
        mant: "No",
        audioSrc: "/audio/esteeseldiaenqueactuoelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=escuchadislaslejanas",
        sig: "/resucito/src/index.html?canto=esteeselmandamientomio",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "No he de morir,, (La,m,19)", sC: "tc"},
            { line: "QUE VIVIRÉ,", sC: "ta as ab1"},

            { line: "No he de morir,", sC: "tc"},
            { line: "QUE VIVIRÉ, ", sC: "ta as ab1"},

            { line: "para cantar, (Fa,,96)", sC: ""},
            { line: "LAS HAZAÑAS DEL SEÑOR., (Mi,,236)", sC: "as ab2"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Me castigó,, (La,m ,20)", sC: ""},
            { line: "ME CASTIGÓ. ", sC: "as ab3"},

            { line: "Me castigó, ", sC: ""},
            { line: "ME CASTIGÓ, ", sC: "as ab3"},

            { line: "pero no, (Fa,,64)", sC: ""},
            { line: "ME DEJÓ EN LA MUERTE., (Mi,,193)", sC: "as ab4"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Dad gracias al Señor porque es bueno,, (La,m,20)", sC: ""},
            { line: "PORQUE ES ETERNA SU MISERICORDIA., (Fa,,146)(Mi,,325)", sC: "as"},

            { line: "Que lo diga la casa de Israel:, (La,m,20)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ES ETERNA, (Fa,,63)", sC: "as ab5", lines: [
            { line: "SU MISERICORDIA., (Mi,,123)", sC: "as ab6"},  ]},


            { line: "Que lo diga la casa de Aarón:, (La,m,15)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ES ETERNA, (Fa,,63)", sC: "as ab5", lines: [
            { line: "SU MISERICORDIA., (Mi,,123)", sC: "as ab6"},  ]},

            { line: "Que lo digan los fieles del Señor:, (La,m,15)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ES ETERNA, (Fa,,63)", sC: "as ab7", lines: [
            { line: "SU MISERICORDIA., (Mi,,123)", sC: "as ab8"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mejor es confiar en el Señor, (Do,,10)", sC: ""},
            { line: "QUE FIARSE DE LOS HOMBRES,, (Fa,,68)(Mi,,221)", sC: "as"},
            { line: "mejor es apoyarse en el Señor, (Do,,10)", sC: ""},
            { line: "QUE CONFIAR EN LOS INTELIGENTES., (Fa,,111)(Mi,,297)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "me rodeaban,,(La,m,20)", sC: ""},
            { line: "ME RODEABAN, ", sC: "as ab9"},

            { line: "me rodeaban, ", sC: ""},
            { line: "ME RODEABAN, ", sC: "as ab9"},

            { line: "en el nombre del Señor, (Fa,,66)", sC: ""},
            { line: "LOS RECHACÉ., (Mi,,129)", sC: "as ab10"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
    ], lder: [
            { line: "Me empujaban,, (Lam,,15)", sC: ""},
            { line: "ME EMPUJABAN, ", sC: "as ab11"},

            { line: "Me empujaban, ", sC: ""},
            { line: "ME EMPUJABAN, ", sC: "as ab11"},

            { line: "pero el Señor, (Fa,,112)", sC: ""},
            { line: "ME AYUDÓ., (Mi,,97)", sC: "as ab12"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Escuchad: hay cantos de victoria, (Do,,10)", sC: ""},
            { line: "EN LAS TIENDAS DE LOS JUSTOS:, (Fa,,96)(Mi,,258)", sC: "as"},
            { line: "«La diestra del Señor es poderosa,, (Do,,10)", sC: ""},
            { line: "ES EXCELSA LA DIESTRA DEL SEÑOR»., (Fa,,74)(Mi,,333)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            // No he de morir... . .. EN LA MUERTE. 

            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "No he de morir...    ...EN LA MUERTE.  (La,m,19)", sC: "tc as", lines: [

            { line: "QUE VIVIRÉ,", sC: "as ab14 bgtop"},
            
            { line: "No he de morir,", sC: "tc"},
            { line: "QUE VIVIRÉ, ", sC: "as ab14"},

            { line: "para cantar, (Fa,,96)", sC: ""},
            { line: "LAS HAZAÑAS DEL SEÑOR., (Mi,,236)", sC: "as ab2"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Me castigó,, (La,m ,20)", sC: ""},
            { line: "ME CASTIGÓ. ", sC: "as ab3"},

            { line: "Me castigó, ", sC: ""},
            { line: "ME CASTIGÓ, ", sC: "as ab3"},

            { line: "pero no, (Fa,,64)", sC: ""},
            { line: "ME DEJÓ EN LA MUERTE., (Mi,,193)", sC: "as ab4"},

        ]},     // No he de morir... . .. EN LA MUERTE. 

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Abridme las puertas del triunfo, (La,m,21)", sC: ""},
            { line: "Y ENTRARÉ PARA DAR GRACIAS AL SEÑOR., (Fa,,108)(Mi,,394)", sC: "as"},
            { line: "Esta es la puerta del Señor:, (Fa,,10)(Mi,,244)", sC: ""},
            { line: "LOS VENCEDORES ENTRARÁN POR ELLA., (Fa,,130)(Mi,,348)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "La piedra que desecharon los arquitectos, (Do,,10)", sC: ""},
            { line: "ES AHORA LA PIEDRA ANGULAR., (Fa,,67)(Mi,,289)", sC: "as"},
            { line: "Es el Señor quien lo ha hecho,, (Fa,,10)(Mi,,238)", sC: ""},
            { line: "HA SIDO UN MILAGRO PATENTE., (Fa,,46)(Mi,,259)", sC: "as"},
            { line: "Este es el día en que actuó el Señor:, (Do,,10)", sC: ""},
            { line: "SEA NUESTRA ALEGRÍA Y NUESTRO GOZO., (Fa,,20)(Mi,,369)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            // No he de morir... . .. EN LA MUERTE. 

            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "No he de morir...    ...EN LA MUERTE.  (La,m,19)", sC: "tc as", lines: [

            { line: "QUE VIVIRÉ,", sC: "as ab14 bgtop"},
            
            { line: "No he de morir,", sC: "tc"},
            { line: "QUE VIVIRÉ, ", sC: "as ab14"},

            { line: "para cantar, (Fa,,96)", sC: ""},
            { line: "LAS HAZAÑAS DEL SEÑOR., (Mi,,236)", sC: "as ab2"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Me castigó,, (La,m ,20)", sC: ""},
            { line: "ME CASTIGÓ. ", sC: "as ab3"},

            { line: "Me castigó, ", sC: ""},
            { line: "ME CASTIGÓ, ", sC: "as ab3"},

            { line: "pero no, (Fa,,64)", sC: ""},
            { line: "ME DEJÓ EN LA MUERTE., (Mi,,193)", sC: "as ab4"},

        ]},     // No he de morir... . .. EN LA MUERTE. 

]}, // ULTIMA LINEA DEL CANTO: ESTE ES EL DÍA EN QUE ACTUÓ EL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           ESTE ES EL MANDAMIENTO MÍO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "esteeselmandamientomio",
        tt: "Este Es El Mandamiento Mío",
        title: "Este Es El Mandamiento Mío",
        subtitle: "Juan 15,12ss",
        category: ["Precatecumenado","Pascua","Pentecostés","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* La nota Re m que se indica en esta frase, es un tono disonante de la melodía que refuerza el sentido del texto, tal y como Kiko indicó durante el ensayo del canto; no es, por tanto, un error de la transcripción.",
        nCanURL: "",
        dbno: "72",
        notes: "",
        mant: "No",
        audioSrc: "/audio/esteeselmandamientomio.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=esteeseldiaenqueactuoelsenor",
        sig: "/resucito/src/index.html?canto=evenushalomalejem",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ESTE ES EL MANDAMIENTO MÍO:, (La,m,21)(Do,,62)(Mi,,290)", sC: "ta as"},
            { line: "QUE OS AMÉIS., (La,m,119)", sC: "as"},
            { line: "ESTE ES EL MANDAMIENTO MÍO:, (Do,,11)(Mi,,288)", sC: "as"},
            { line: "QUE OS AMÉIS, (La,m,120)", sC: "as"},
            { line: "LOS UNOS A LOS OTROS, (Do,,12)(Mi,,175)", sC: "as"},
            { line: "COMO YO OS HE AMADO,, (La,m,203)", sC: "as"},
            { line: "COMO YO OS HE AMADO,, (Fa,,10)(Mi,,200)", sC: "as"},
            { line: "COMO YO OS HE AMADO., (Fa,,10)(Mi,,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Nadie tiene mayor amor, (La,7,19)", sC: "tc"},
            { line: "que el que da su vida por sus amigos., (Re,m,316)", sC: ""},
            { line: "Vosotros sois mis amigos,, (Mi,,204)", sC: ""},
            { line: "vosotros sois mis amigos., (Fa,,10)(Mi,,202)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Vosotros sois mis amigos,, (La,m,20)(Sol,,201)", sC: ""},
            { line: "vosotros sois mis amigos., (Fa,,101)(Mi,,203)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No me habéis elegido vosotros a mí,, (Re,m,23)(Mi,,339)", sC: "tc"},
            { line: "NO ME HABÉIS ELEGIDO, (Re,m,23)", sC: "ta as"},
            { line: "VOSOTROS A MÍ,, (Mi,,153)", sC: "as"},
    ], lder: [
            { line: "sino que yo os he elegido a vosotros,, (Re,m,20)(Mi,,301)", sC: "tc"},
            { line: "SINO QUE YO, (Re,m,222)", sC: "ta as"},
            { line: "OS HE ELEGIDO A VOSOTROS., (Mi,,18)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si el mundo os odia, (La,7,17)", sC: "tc"},
            { line: "sabed que antes me ha odiado a mí;, (Re,m,339)", sC: ""},
            { line: "si el mundo os odia., (Mi,,153)", sC: ""},
            { line: "Padre, como tú estás en mí y yo estoy en ti,, (La,7,18)(Re,m,255)(Mi,,403)", sC: ""},
            
            { line: "", sC: "ast"}, // Espacio Generado para separar contenido

            { line: "que ellos sean uno en nosotros,, (Re,m,159)(Mi,,251)", sC: ""},
            { line: "QUE ELLOS SEAN UNO EN NOSOTROS,, (Re,m,20)(Mi,,301)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "para que el mundo crea, (Fa,,10)", sC: "tc"},
            { line: "que tú me has enviado,, (Mi,,186)", sC: ""},
            { line: "PARA QUE EL MUNDO CREA, (Fa,,10)", sC: "ta as"},
            { line: "QUE TÚ ME HAS ENVIADO., (Mi,,209)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ESTE ES EL MANDAMIENTO MÍO:, (Re,m,20)(Mi,,286)", sC: "ta as"},
            { line: "QUE OS AMÉIS COMO YO OS HE AMADO,, (Re,m,20)(Mi,,347)", sC: "as"},
            { line: "QUE OS AMÉIS COMO YO OS HE AMADO., (Fa,,12)(Mi,,342)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: ESTE ES EL MANDAMIENTO MÍO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EVENU SHALOM ALEJEM               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "evenushalomalejem",
        tt: "Evenu Shalom Alejem",
        title: "Evenu Shalom Alejem",
        subtitle: "Melodía hebraica",
        category: ["Precatecumenado","Paz"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "73",
        notes: "",
        mant: "No",
        audioSrc: "/audio/evenushalomalejem.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=esteeselmandamientomio",
        sig: "/resucito/src/index.html?canto=extiendomismanos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EVENU SHALOM ALEJEM,, (Re,m,21)", sC: "ta as"},
            { line: "EVENU SHALOM ALEJEM,, (Sol,m,105)", sC: "as"},
            { line: "EVENU SHALOM ALEJEM,, (La,,102)(Re,m,214)", sC: "as"},
            { line: "EVENU SHALOM, SHALOM,, (La,7,105)", sC: "as"},
            { line: "SHALOM ALEJEM., (Re,m,144)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "QUE SEA LA PAZ CON NOSOTROS,, (Re,m,21)", sC: "as"},
            { line: "QUE SEA LA PAZ CON NOSOTROS,, (Sol,m,142)", sC: "as"},
            { line: "QUE SEA LA PAZ CON NOSOTROS,, (La,,141)(Re,m,260)", sC: "as"},
            { line: "EVENU SHALOM, SHALOM,, (La,7,107)", sC: "as"},
            { line: "SHALOM ALEJEM., (Re,m,147)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EVENU SHALOM ALEJEM, (Re,m,21)", sC: "ta as", lines: [
            { line: "EVENU SHALOM ALEJEM,, (Sol,m,105)", sC: "as"},
            { line: "EVENU SHALOM ALEJEM,, (La,,102)(Re,m,214)", sC: "as"},
            { line: "EVENU SHALOM, SHALOM,, (La,7,105)", sC: "as"},
            { line: "SHALOM ALEJEM., (Re,m,144)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "E SIA LA PACE CON NOI,, (Re,m,21)", sC: "as"},
            { line: "E SIA LA PACE CON NOI,, (Sol,m,104)", sC: "as"},
            { line: "E SIA LA PACE CON NOI,, (La,,108)(Re,m,205)", sC: "as"},
            { line: "EVENU SHALOM, SHALOM,, (La,7,105)", sC: "as"},
            { line: "SHALOM ALEJEM., (Re,m,147)", sC: "as"},
    ], lder: [
            { line: "ET LA PAIX SOIT AVEC NOUS... ", sC: "as"},
            { line: "AND MAY PEACE BE WITH US... ", sC: "as"},
            { line: "UND SEi DER FRIEDE MIT UNS... ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "EVENU SHALOM ALEJEM, (Re,m,21)", sC: "ta as", lines: [
            { line: "EVENU SHALOM ALEJEM,, (Sol,m,105)", sC: "as"},
            { line: "EVENU SHALOM ALEJEM,, (La,,102)(Re,m,214)", sC: "as"},
            { line: "EVENU SHALOM, SHALOM,, (La,7,105)", sC: "as"},
            { line: "SHALOM ALEJEM., (Re,m,144)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DIGAMOS LA PAZ AL MUNDO,, (Re,m,22)", sC: "as"},
            { line: "CANTEMOS LA PAZ AL MUNDO,, (Sol,m,129)", sC: "as"},
            { line: "QUE NUESTRA VIDA SEA GLORIOSA,, (La,,156)(Re,m,302)", sC: "as"},
            { line: "YO TE SALUDO: LA PAZ,, (La,7,104)", sC: "as"},
            { line: "LA PAZ SEA CONTIGO., (Re,m,172)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "EVENU SHALOM ALEJEM, (Re,m,21)", sC: "ta as", lines: [
            { line: "EVENU SHALOM ALEJEM,, (Sol,m,105)", sC: "as"},
            { line: "EVENU SHALOM ALEJEM,, (La,,102)(Re,m,214)", sC: "as"},
            { line: "EVENU SHALOM, SHALOM,, (La,7,105)", sC: "as"},
            { line: "SHALOM ALEJEM., (Re,m,144)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: EVENU SHALOM ALEJEM
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EXTIENDO MIS MANOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "extiendomismanos",
        tt: "Extiendo Mis Manos",
        title: "Extiendo Mis Manos",
        subtitle: "Oda XXVII de Salomón",
        category: ["Precatecumenado","Adviento","Navidad","Cuaresma","Penitencial","Fracción Del Pan"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "74",
        notes: "",
        mant: "No",
        audioSrc: "/audio/extiendomismanos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=evenushalomalejem",
        sig: "/resucito/src/index.html?canto=exultadjustosenelsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EXTIENDO MIS MANOS,, (Re,,10)(Si,m,86)(Sol,,171)", sC: "at as "},
            { line: "EXTIENDO MIS MANOS,, (Mi,,50)(La,,170)", sC: "as r1"},
            { line: "Y GRITO AL SEÑOR ,, (Sol,,50)(Re,,161)", sC: "as"},
            { line: "Y GRITO AL SEÑOR., (La,,50)(Re,,161)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Abbá, Padre mío,, (Fa#,,15)", sC: "tc"},
            { line: "Abbá, Padre mío., (Sol,,12)(Fa#,,145)", sC: ""},
            { line: "En tus manos encomiendo mi espíritu,, (Mi,,11)(La,,326)", sC: ""},
            { line: "en tus manos encomiendo mi espíritu., (Sol,,15)(Re,,88)(La,,215)(Re,,328)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EXTIENDO MIS MANOS,, (Re,,10)(Si,m,86)(Sol,,171)", sC: "ta as", lines: [
            { line: "EXTIENDO MIS MANOS,, (Mi,,50)(La,,170)", sC: "as r1"},
            { line: "Y GRITO AL SEÑOR ,, (Sol,,50)(Re,,161)", sC: "as"},
            { line: "Y GRITO AL SEÑOR., (La,,50)(Re,,161)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque el extender las manos, (Fa#,,15)(Mi,,70)", sC: "tc"},
            { line: "es el signo de su Cruz,, (La,,186)", sC: ""},
            { line: "y el estar derecho, (Sol,,12)(Re,,127)", sC: ""},
            { line: "es el leño alzado,, (La,,125)", sC: ""},
            { line: "es el leño alzado., (Re,,125)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "EXTIENDO MIS MANOS,, (Re,,10)(Si,m,86)(Sol,,171)", sC: "ta as", lines: [
            { line: "EXTIENDO MIS MANOS,, (Mi,,50)(La,,170)", sC: "as r1"},
            { line: "Y GRITO AL SEÑOR ,, (Sol,,50)(Re,,161)", sC: "as"},
            { line: "Y GRITO AL SEÑOR., (La,,50)(Re,,161)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: EXTIENDO MIS MANOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           EXULTAD, JUSTOS, EN EL SEÑOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "exultadjustosenelsenor",
        tt: "Exultad, Justos, En El Señor",
        title: "Exultad, Justos, En El Señor",
        subtitle: "Salmo 33 (32)",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "75",
        notes: "",
        mant: "No",
        audioSrc: "/audio/exultadjustosenelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=extiendomismanos",
        sig: "/resucito/src/index.html?canto=felicidadparaelhombre",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EXULTAD, JUSTOS, EN EL SEÑOR,, (Sol,,14)(Mi,m,286)", sC: "ta as"},
            { line: "DE LOS SANTOS ES PROPIA LA ALABANZA., (Do,,97)(Sol,,359)", sC: "as"},
            { line: "DAD GRACIAS AL SEÑOR CON LA CÍTARA,, (Mi,m,338)", sC: "as"},
            { line: "CON EL ARPA DE DIEZ CUERDAS, (Do,,86)", sC: "as"},
            { line: "TOCAD PARA ÉL., (Sol,,142)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cantad al Señor un cantar nuevo,, (La,m,22)(Si,7,289)", sC: "tc"},
            { line: "tocad la cítara con arte y aclamadle., (La,m,21)(Si,7,317)", sC: ""},
            { line: "Porque recta es la palabra del Señor,, (Do,,10)", sC: ""},
            { line: "verdad son todas sus obras., (Re,,10)(Si,7,222)", sC: ""},
            { line: "En Él están la justicia y el derecho,, (Do,,10)", sC: ""},
            { line: "de su amor está llena la tierra., (Re,,93)(Si,7,258)", sC: "melisma"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EXULTAD, JUSTOS, EN EL SEÑOR,, (Sol,,14)(Mi,m,286)", sC: "ta as", lines: [
            { line: "DE LOS SANTOS ES PROPIA LA ALABANZA., (Do,,97)(Sol,,359)", sC: "as"},
            { line: "DAD GRACIAS AL SEÑOR CON LA CÍTARA,, (Mi,m,338)", sC: "as"},
            { line: "CON EL ARPA DE DIEZ CUERDAS, (Do,,86)", sC: "as"},
            { line: "TOCAD PARA ÉL., (Sol,,142)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
    ], lder: [
            { line: "La Palabra del Señor hizo los cielos,, (La,m,21)(Si,7,308)", sC: "tc"},
            { line: "el aliento de su boca sus ejércitos., (La,m,18)(Si,7,267)", sC: ""},
            { line: "El Señor anula los planes de las naciones,, (Do,,10)", sC: ""},
            { line: "hace vanos los proyectos de los pueblos., (Re,,10)(Si,7,339)", sC: ""},
            { line: "Mas el proyecto del Señor,, (Do,,114)", sC: ""},
            { line: "el proyecto del Señor, (Re,,69)", sC: ""},
            { line: "subsiste por siempre., (Si,7,145)", sC: "melisma1"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "EXULTAD, JUSTOS, EN EL SEÑOR,, (Sol,,14)(Mi,m,286)", sC: "ta as", lines: [
            { line: "DE LOS SANTOS ES PROPIA LA ALABANZA., (Do,,97)(Sol,,359)", sC: "as"},
            { line: "DAD GRACIAS AL SEÑOR CON LA CÍTARA,, (Mi,m,338)", sC: "as"},
            { line: "CON EL ARPA DE DIEZ CUERDAS, (Do,,86)", sC: "as"},
            { line: "TOCAD PARA ÉL., (Sol,,142)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: EXULTAD, JUSTOS, EN EL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           FELICIDAD PARA EL HOMBRE                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "felicidadparaelhombre",
        tt: "Felicidad Para El Hombre ",
        title: "Felicidad Para El Hombre ",
        subtitle: "Salmo 128 (127)",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "76",
        notes: "",
        mant: "No",
        audioSrc: "/audio/felicidadparaelhombre.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=exultadjustosenelsenor",
        sig: "/resucito/src/index.html?canto=graciasayahveh",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "FELICIDAD PARA EL HOMBRE, (La,m,20)", sC: "ta as"},
            { line: "QUE TEME AL SEÑOR,, (Mi,m,20)(La,m,180)", sC: "as r1"},
            { line: "FELICIDAD PARA EL HOMBRE, (Re,m9,28)", sC: "as"},
            { line: "QUE CAMINA POR SU SENDERO., (Fa,,91)(Mi,,273)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Vivirá del trabajo de sus manos,, (Re,m,20)(Mi,,257)", sC: "tc"},
            { line: "será feliz y gozará de todo bien;, (Re,m,75)(Mi,,277)", sC: ""},
            { line: "su esposa como vid fecunda en medio de su casa;, (Fa,,66)(Mi,,440)", sC: ""},
            { line: "sus hijos, como brotes de olivo en torno a su mesa., (Fa,,52)(Mi,,453)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "FELICIDAD PARA EL HOMBRE, (La,m,20)", sC: "ta as", lines: [
            { line: "QUE TEME AL SEÑOR,, (Mi,m,20)(La,m,180)", sC: "as r1"},
            { line: "FELICIDAD PARA EL HOMBRE, (Re,m9,28)", sC: "as"},
            { line: "QUE CAMINA POR SU SENDERO., (Fa,,91)(Mi,,273)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Así será bendecido el hombre que teme al Señor., (Re,m,19)(Mi,,452)", sC: "tc"},
            { line: "¡Que te bendiga Dios desde Sión,, (Re,m,124)(Mi,,292)", sC: ""},
            { line: "que puedas tú ver la prosperidad de Jerusalén,, (Fa,,68)(Mi,,421)", sC: ""},
            { line: "que puedas tú ver a los hijos de tus hijos!, (Fa,,68)", sC: ""},
            { line: "¡Paz a Israel!, (Mi,,104)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "FELICIDAD PARA EL HOMBRE, (La,m,20)", sC: "ta as", lines: [
            { line: "QUE TEME AL SEÑOR,, (Mi,m,20)(La,m,180)", sC: "as r1"},
            { line: "FELICIDAD PARA EL HOMBRE, (Re,m9,28)", sC: "as"},
            { line: "QUE CAMINA POR SU SENDERO., (Fa,,91)(Mi,,273)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: FELICIDAD PARA EL HOMBRE 
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           GRACIAS A YAHVEH               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "graciasayahveh",
        tt: "Gracias A Yahveh",
        title: "Gracias A Yahveh",
        subtitle: "Salmo 136 (135) - Melodía hebraica",
        category: ["Precatecumenado","Pascua","Pentecostés","Paz","Comunión","Final","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "77",
        notes: "",
        mant: "No",
        audioSrc: "/audio/graciasayahveh.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=felicidadparaelhombre",
        sig: "/resucito/src/index.html?canto=gritadjubilosos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Demos gracias al Dios de los dioses,, (Do,,10)(Mi,m,95)(Re,7,160)(Sol,,302)", sC: "tc"},
            { line: "PORQUE ETERNA ES SU MISERICORDIA,, (Do,,10)(Mi,m,118)(Re,7,218)(Sol,,318)", sC: "ta as"},
            { line: "demos gracias al Señor de los Señores., (Si,m,96)(Mi,m,338)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "GRACIAS A YAHVEH, ALELUYA., (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Él ha abierto en dos partes el Mar Rojo,, (Do,,10)(Mi,m,85)(Re,7,212)(Sol,,342)", sC: "tc"},
            { line: "PORQUE ETERNA ES SU MISERICORDIA,, (Do,,10)(Mi,m,117)(Re,7,215)(Sol,,320)", sC: "ta as"},
            { line: "hizo pasar por en medio a su pueblo., (Si,m,83)(Mi,m,310)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "GRACIAS A YAHVEH, ALELUYA., (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "as"},  ]},
    ], lder: [
            { line: "Él ha abierto un camino en el desierto,, (Do,,10)(Mi,m,84)(Re,7,198)(Sol,,333)", sC: "tc"},
            { line: "PORQUE ETERNA ES SU MISERICORDIA,, (Do,,10)(Mi,m,118)(Re,7,216)(Sol,,318)", sC: "ta as"},
            { line: "e hizo con el pueblo una alianza para siempre., (Si,m,157)(Mi,m,380)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "GRACIAS A YAHVEH, ALELUYA., (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Él los condujo a la tierra prometida,, (Do,,10)(Mi,m,109)(Re,7,193)(Sol,,305)", sC: "tc"},
            { line: "PORQUE ETERNA ES SU MISERICORDIA,, (Do,,10)(Mi,m,115)(Re,7,218)(Sol,,319)", sC: "ta as"},
            { line: "una tierra que mana leche y miel., (Si,m,59)(Mi,m,302)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "GRACIAS A YAHVEH, ALELUYA., (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En la angustia no nos abandona,, (Do,,10)(Mi,m,97)(Re,7,154)(Sol,,272)", sC: "tc"},
            { line: "PORQUE ETERNA ES SU MISERICORDIA,, (Do,,10)(Mi,m,120)(Re,7,218)(Sol,,319)", sC: "ta as"},
            { line: "Él nos libra de nuestros enemigos., (Si,m,78)(Mi,m,285)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "GRACIAS A YAHVEH, ALELUYA., (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: GRACIAS A YAHVEH
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           GRITAD JUBILOSOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "gritadjubilosos",
        tt: "Gritad Jubilosos",
        title: "Gritad Jubilosos",
        subtitle: "Isaías 12,1ss",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión","Final","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "78",
        notes: "",
        mant: "No",
        audioSrc: "/audio/gritadjubilosos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=graciasayahveh",
        sig: "/resucito/src/index.html?canto=haciatimoradasanta",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "GRITAD JUBILOSOS:, (La,m,22)", sC: "ta as"},
            { line: "«QUÉ GRANDE ES EN MEDIO DE TI, (Sol,,326)", sC: "as r1"},
            { line: "EL SANTO DE ISRAEL»., (Fa,,43)(Mi,,191)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor es mi Dios y mi Salvador,, (Mi,,10)", sC: "tc"},
            { line: "confiaré y no temeré,, (La,m,70)", sC: ""},
            { line: "porque mi fuerza y mi canto es el Señor,, (Fa,,125)(Sol,,366)", sC: ""},
            { line: "Él es mi salvación., (Fa,,31)(Mi,,151)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "GRITAD JUBILOSOS, (La,m,22)", sC: "ta as", lines: [
            { line: "«QUÉ GRANDE ES EN MEDIO DE TI, (Sol,,326)", sC: "as r1"},
            { line: "EL SANTO DE ISRAEL»., (Fa,,43)(Mi,,191)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sacaréis agua con gozo, (Mi,,10)(La,m,202)", sC: "tc"},
            { line: "de las fuentes de la salvación., (Mi,,84)(La,m,263)", sC: ""},
            { line: "Dad gracias al Señor,, (Sol,,73)", sC: ""},
            { line: "invocad su nombre,, (Fa,,123)", sC: ""},
            { line: "proclamad entre los pueblos sus hazañas., (Mi,,353)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "GRITAD JUBILOSOS, (La,m,22)", sC: "ta as", lines: [
            { line: "«QUÉ GRANDE ES EN MEDIO DE TI, (Sol,,326)", sC: "as r1"},
            { line: "EL SANTO DE ISRAEL»., (Fa,,43)(Mi,,191)", sC: "as"},  ]},
    ], lder: [
            { line: "Cantad al Señor, que hizo proezas,, (Mi,,12)(La,m,292)", sC: "tc"},
            { line: "anunciadlas por toda la tierra,, (Fa,,70)(Sol,,248)", sC: ""},
            { line: "gritad jubilosos,, (Fa,,107)", sC: ""},
            { line: "exultad, habitantes de Sión., (Mi,,244)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "GRITAD JUBILOSOS, (La,m,22)", sC: "ta as", lines: [
            { line: "«QUÉ GRANDE ES EN MEDIO DE TI, (Sol,,326)", sC: "as r1"},
            { line: "EL SANTO DE ISRAEL»., (Fa,,43)(Mi,,191)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: GRITAD JUBILOSOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HACIA TI, MORADA SANTA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "haciatimoradasanta",
        tt: "Hacia Ti, Morada Santa",
        title: "Hacia Ti, Morada Santa",
        subtitle: "Himno procesional eucarístico (Kiko Argüello)",
        category: ["Precatecumenado","Entrada"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "79",
        notes: "",
        mant: "No",
        audioSrc: "/audio/haciatimoradasanta.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=gritadjubilosos",
        sig: "/resucito/src/index.html?canto=hastacuando",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "HACIA TI, MORADA SANTA,, (La,m,19)(Mi,,211)", sC: "ta as"},
            { line: "HACIA TI, TIERRA DEL SALVADOR,, (La,m,295)", sC: "as"},
            { line: "PEREGRINOS, CAMINANTES,, (Sol,,80)(Fa,,210)", sC: "as"},
            { line: "VAMOS HACIA TI., (Mi,,152)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Venimos a tu mesa,, (La,m,155)", sC: "tc"},
            { line: "sellaremos tu pacto,, (Sol,,153)", sC: ""},
            { line: "comeremos tu carne,, (Fa,,165)", sC: ""},
            { line: "tu sangre nos limpiará., (Mi,,209)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Reinaremos contigo, (La,m,166)", sC: ""},
            { line: "en tu morada santa,, (Sol,,151)", sC: ""},
            { line: "beberemos tu sangre,, (Fa,,156)", sC: ""},
            { line: "tu Fe nos salvará., (Mi,,155)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HACIA TI, MORADA SANTA,..., (La,m,19)(Mi,,211)", sC: "ta as", lines: [
            { line: "HACIA TI, TIERRA DEL SALVADOR,, (La,m,295)", sC: "as"},
            { line: "PEREGRINOS, CAMINANTES,, (Sol,,80)(Fa,,210)", sC: "as"},
            { line: "VAMOS HACIA TI., (Mi,,152)", sC: "as"},  ]},
    ], lder: [
            { line: "Somos tu pueblo santo,, (La,m,185)", sC: "tc"},
            { line: "que hoy camina unido,, (Sol,,183)", sC: ""},
            { line: "tú vas entre nosotros,, (Fa,,155)", sC: ""},
            { line: "tu amor nos guiará., (Mi,,173)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú eres el Camino,, (La,m,143)", sC: ""},
            { line: "tú eres la esperanza,, (Sol,,150)", sC: ""},
            { line: "hermano de los pobres., (Fa,,170)", sC: ""},
            { line: "Amén. Aleluya., (Mi,,129)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HACIA TI, MORADA SANTA,..., (La,m,19)(Mi,,211)", sC: "ta as", lines: [
            { line: "HACIA TI, TIERRA DEL SALVADOR,, (La,m,295)", sC: "as"},
            { line: "PEREGRINOS, CAMINANTES,, (Sol,,80)(Fa,,210)", sC: "as"},
            { line: "VAMOS HACIA TI., (Mi,,152)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: HACIA TI, MORADA SANTA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HASTA CUÁNDO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "hastacuando",
        tt: "Hasta Cuándo",
        title: "Hasta Cuándo",
        subtitle: "Salmo 13 (12)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "80",
        notes: "",
        mant: "No",
        audioSrc: "/audio/hastacuando.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=haciatimoradasanta",
        sig: "/resucito/src/index.html?canto=heaquimisiervo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¿Hasta cuándo,, (La,m,20)", sC: "tc"},
            { line: "por fin te acordarás, Yahveh, de mí,, (Mi,,328)", sC: ""},
            { line: "y tu rostro, ", sC: ""},
            { line: "a mí lo volverás?, (La,m,133)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CANTARÉ A YAHVEH,, (Mi,,88)(La,m,173)", sC: "ta as"},
            { line: "CANTARÉ AL QUE ES MI REDENTOR., (Mi,,88)(La,m,319)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mírame,, (La,m,20)", sC: "tc"},
            { line: "respóndeme, Yahveh, amor de mí,, (Mi,,319)", sC: ""},
            { line: "alumbra mis ojos,, ", sC: ""},
            { line: "no me duerma yo en la muerte., (La,m,267)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "CANTARÉ A YAHVEH,..., (Mi,,88)(La,m,173)", sC: "ta as", lines: [
            { line: "CANTARÉ AL QUE ES MI REDENTOR., (Mi,,88)(La,m,319)", sC: "as"},  ]},
    ], lder: [
            { line: "Que no puedan,, (La,m,20)", sC: "tc"},
            { line: "decir mis enemigos: «le vencí»,, (Mi,,274)", sC: ""},
            { line: "mis enemigos, ", sC: ""},
            { line: "se alegrarán si yo cayera., (La,m,212)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "CANTARÉ A YAHVEH,..., (Mi,,88)(La,m,173)", sC: "ta as", lines: [
            { line: "CANTARÉ AL QUE ES MI REDENTOR., (Mi,,88)(La,m,319)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pero yo, (La,m,20)", sC: "tc"},
            { line: "espero en tu piedad,, (Mi,,171)", sC: ""},
            { line: "y mi corazón, ", sC: ""},
            { line: "se alegrará en tu salvación., (La,m,238)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "CANTARÉ A YAHVEH,..., (Mi,,88)(La,m,173)", sC: "ta as", lines: [
            { line: "CANTARÉ AL QUE ES MI REDENTOR., (Mi,,88)(La,m,319)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: HASTA CUÁNDO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HE AQUÍ MI SIERVO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "heaquimisiervo",
        tt: "He Aquí Mi Siervo",
        title: "He Aquí Mi Siervo",
        subtitle: "Isaías 42,1-4; Mateo 12,18-21 - Primer canto de Siervo de Yahveh",
        category: ["Precatecumenado","Cuaresma","Penitencial","Fracción Del Pan","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "81",
        notes: "",
        mant: "No",
        audioSrc: "/audio/heaquimisiervo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=hastacuando",
        sig: "/resucito/src/index.html?canto=heaquiquevengopresto",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "He aquí mi siervo a quien elegí,, (La,m,20)(Re,m,223)(La,m,291)", sC: "tc"},
            { line: "he aquí mi siervo a quien elegí,, (Re,m,221)(La,m,288)", sC: ""},
            { line: "mi amado,, (Mi,,71)", sC: ""},
            { line: "en quien mi alma se complace,, (La,m,263)", sC: ""},
            { line: "mi amado, (Mi,,72)", sC: ""},
            { line: "a quien elegí., (La,m,118)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Haré descansar mi espíritu sobre Él,, (La,7,278)(Re,m,330)", sC: ""},
            { line: "y anunciará el derecho a las naciones,, (La,m,103)(Mi,,175)(La,m,319)", sC: ""},
            { line: "y anunciará el derecho a las naciones., (Mi,,101)(La,m,178)(Mi,7,254)(La,m,314)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No disputará ni gritará,, (Do,,10)", sC: ""},
            { line: "nadie oirá su voz, (Fa,,10)(Mi,,145)", sC: ""},
            { line: "en las plazas., (La,m,85)", sC: ""},
    ], lder: [
            { line: "LA CAÑA CASCADA NO LA QUEBRARÁ,, (La,m,20)(Mi,,357)", sC: "ta as"},
            { line: "LA MECHA HUMEANTE NO APAGARÁ,, (La,m,341)", sC: "as"},
            { line: "HASTA HACER TRIUNFAR EL DERECHO,, (Mi,,118)(La,m,319)", sC: "as"},
            { line: "HASTA HACER TRIUNFAR EL DERECHO., (Mi,,118)(La,m,319)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y en su nombre,, (La,m,20)", sC: "tc"},
            { line: "y en su nombre, ", sC: ""},
            { line: "pondrán las naciones, (Fa,,59)(Mi,,183)", sC: ""},
            { line: "su esperanza., (La,m,87)", sC: ""},
]}, // ULTIMA LINEA DEL CANTO: HE AQUÍ MI SIERVO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HE AQUÍ QUE VENGO PRESTO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "heaquiquevengopresto",
        tt: "He Aquí Que Vengo Presto",
        title: "He Aquí Que Vengo Presto",
        subtitle: "Apocalipsis 22,12-16",
        category: ["Precatecumenado","Adviento","Navidad","Entrada","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "82",
        notes: "",
        mant: "No",
        audioSrc: "/audio/heaquiquevengopresto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=heaquimisiervo",
        sig: "/resucito/src/index.html?canto=heesperadoenelsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "He aquí que vengo presto, (La,,10)", sC: "tc"},
            { line: "y conmigo mi recompensa, (Mi,,69)", sC: ""},
            { line: "para dar a cada uno, (Si,7,68)", sC: ""},
            { line: "según sus obras, (Mi,,112)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo soy el Alfa y la Omega,, (Mi,7,17)(La,,207)", sC: ""},
            { line: "el Primero y el Último,, (Mi,,154)", sC: ""},
            { line: "el Primero y el Último, (Si,7,158)", sC: ""},
            { line: "el Principio y el Fin., (Mi,,163)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "BIENAVENTURADOS, (Mi,7,18)(La,,114)", sC: "ta as"},
            { line: "LOS QUE LAVAN SUS TÚNICAS, (Mi,,227)", sC: "as r1"},
            { line: "PARA TENER DERECHO, (Si,7,182)", sC: "as"},
            { line: "AL ÁRBOL DE LA VIDA., (Mi,,185)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo soy la raíz y el linaje de David, (Do#,,14)(Fa#,,189)", sC: "tc"},
            { line: "la Estrella de la mañana., (Sol#,,65)(Fa#,,196)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BIENAVENTURADOS, (Mi,7,18)(La,,114)", sC: "ta as", lines: [
            { line: "LOS QUE LAVAN SUS TÚNICAS, (Mi,,227)", sC: "as r1"},
            { line: "PARA TENER DERECHO, (Si,7,182)", sC: "as"},
            { line: "AL ÁRBOL DE LA VIDA., (Mi,,185)", sC: "as"}, ]},
        ], lder: [
]}, // ULTIMA LINEA DEL CANTO: HE AQUÍ QUE VENGO PRESTO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HE ESPERADO EN EL SEÑOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "heesperadoenelsenor",
        tt: "He Esperado En El Señor",
        title: "He Esperado En El Señor",
        subtitle: "Salmo 40 (39)",
        category: ["Precatecumenado","Cuaresma","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "83",
        notes: "",
        mant: "No",
        audioSrc: "/audio/heesperadoenelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=heaquiquevengopresto",
        sig: "/resucito/src/index.html?canto=hijasdejerusalen",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "HE ESPERADO,, (La,m,20)", sC: "ta as"},
            { line: "HE ESPERADO EN EL SEÑOR,, (Mi,m,251)", sC: "as r1"},
            { line: "Y ÉL HACIA MÍ SE HA INCLINADO,, (La,m,33)(Mi,m,277)", sC: "as"},
            { line: "HA ESCUCHADO MI GRITO,, (Fa,,116)(Mi,7,222)", sC: "as"},
            { line: "ME HA SACADO, (Fa,,118)", sC: "as"},
            { line: "DE LA FOSA DE LA MUERTE., (Mi,,222)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Me ha sacado del fango de la ciénaga,, (La,m,20)(Mi,m,310)", sC: "tc"},
            { line: "ha puesto mis pies sobre la roca,, (La,m,66)(Mi,m,283)", sC: ""},
            { line: "ha establecido mis pasos, (Fa,,113)(Mi,7,201)", sC: ""},
            { line: "en un camino, en un camino de salvación., (Fa,,99)(Mi,,380)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HE ESPERADO,, (La,m,20)", sC: "ta as", lines: [
            { line: "HE ESPERADO EN EL SEÑOR,, (Mi,m,251)", sC: "as r1"},
            { line: "Y ÉL HACIA MÍ SE HA INCLINADO,, (La,m,33)(Mi,m,277)", sC: "as"},
            { line: "HA ESCUCHADO MI GRITO,, (Fa,,116)(Mi,7,222)", sC: "as"},
            { line: "ME HA SACADO, (Fa,,118)", sC: "as"},
            { line: "DE LA FOSA DE LA MUERTE., (Mi,,222)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ha puesto en mi boca un cantar nuevo,, (La,m,20)(Mi,m,336)", sC: "tc"},
            { line: "una alabanza, una alabanza a nuestro Dios., (La,m,90)(Mi,m,393)", sC: ""},
            { line: "Muchos vendrán y lo verán,, (Fa,,22)(Mi,7,237)", sC: ""},
            { line: "y tantos en Él confiarán., (Fa,,26)(Mi,,203)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "HE ESPERADO,, (La,m,20)", sC: "ta as", lines: [
            { line: "HE ESPERADO EN EL SEÑOR,, (Mi,m,251)", sC: "as r1"},
            { line: "Y ÉL HACIA MÍ SE HA INCLINADO,, (La,m,33)(Mi,m,277)", sC: "as"},
            { line: "HA ESCUCHADO MI GRITO,, (Fa,,116)(Mi,7,222)", sC: "as"},
            { line: "ME HA SACADO, (Fa,,118)", sC: "as"},
            { line: "DE LA FOSA DE LA MUERTE., (Mi,,222)", sC: "as"},  ]},
    ], lder: [
            { line: "Dios mío, ¡cuántas maravillas,, (La,m,20)(Mi,m,250)", sC: "tc"},
            { line: "cuántos prodigios en nuestro favor!, (La,m,35)(Mi,m,320)", sC: ""},
            { line: "Si los quiero anunciar y proclamar,, (Fa,,97)(Mi,7,314)", sC: ""},
            { line: "son tantos que me superan en número., (Fa,,53)(Mi,,316)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "HE ESPERADO,, (La,m,20)", sC: "ta as", lines: [
            { line: "HE ESPERADO EN EL SEÑOR,, (Mi,m,251)", sC: "as r1"},
            { line: "Y ÉL HACIA MÍ SE HA INCLINADO,, (La,m,33)(Mi,m,277)", sC: "as"},
            { line: "HA ESCUCHADO MI GRITO,, (Fa,,116)(Mi,7,222)", sC: "as"},
            { line: "ME HA SACADO, (Fa,,118)", sC: "as"},
            { line: "DE LA FOSA DE LA MUERTE., (Mi,,222)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No quisiste sacrificios ni oblación,, (La,m,20)(Mi,m,301)", sC: "tc r2"},
            { line: "por eso me has abierto el oído., (La,m,51)(Mi,m,262)", sC: ""},
            { line: "No has querido víctima por la culpa,, (Fa,,117)(Mi,7,304)", sC: ""},
            { line: "por eso he dicho: he aquí que vengo, (Fa,,119)", sC: ""},
            { line: "para hacer tu voluntad., (Mi,7,201)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HE ESPERADO,, (La,m,20)", sC: "ta as", lines: [
            { line: "HE ESPERADO EN EL SEÑOR,, (Mi,m,251)", sC: "as r1"},
            { line: "Y ÉL HACIA MÍ SE HA INCLINADO,, (La,m,33)(Mi,m,277)", sC: "as"},
            { line: "HA ESCUCHADO MI GRITO,, (Fa,,116)(Mi,7,222)", sC: "as"},
            { line: "ME HA SACADO, (Fa,,118)", sC: "as"},
            { line: "DE LA FOSA DE LA MUERTE., (Mi,,222)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "De mí está escrito en tu libro, (La,m,20)(Mi,m,247)", sC: "tc"},
            { line: "que yo haga, Señor, tu voluntad., (La,m,86)(Mi,m,280)", sC: ""},
            { line: "Dios mío, eso sólo quiero:, (Fa,,68)(Mi,7,214)", sC: ""},
            { line: "tu palabra, tu palabra en mis entrañas., (Fa,,60)(Mi,,325)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HE ESPERADO,, (La,m,20)", sC: "ta as", lines: [
            { line: "HE ESPERADO EN EL SEÑOR,, (Mi,m,251)", sC: "as r1"},
            { line: "Y ÉL HACIA MÍ SE HA INCLINADO,, (La,m,33)(Mi,m,277)", sC: "as"},
            { line: "HA ESCUCHADO MI GRITO,, (Fa,,116)(Mi,7,222)", sC: "as"},
            { line: "ME HA SACADO, (Fa,,118)", sC: "as"},
            { line: "DE LA FOSA DE LA MUERTE., (Mi,,222)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: HE ESPERADO EN EL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HIJAS DE JERUSALÉN               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "hijasdejerusalen",
        tt: "Hijas De Jerusalén",
        title: "Hijas De Jerusalén",
        subtitle: "Lucas 23,28-46",
        category: ["Precatecumenado","Cuaresma","Penitencial","Fracción Del Pan","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "84",
        notes: "",
        mant: "No",
        audioSrc: "/audio/hijasdejerusalen.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=heesperadoenelsenor",
        sig: "/resucito/src/index.html?canto=himnoacristoluz",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "HIJAS DE JERUSALÉN,, (La,m,20)", sC: "ta as"},
            { line: "NO LLORÉIS,, (Fa,,95)", sC: "as"},
            { line: "NO LLORÉIS POR MÍ., (La,m,189)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que si esto hacen con el leño verde,, (La,m,20)(Fa,,128)", sC: "tc"},
            { line: "con el seco, ¿qué se hará?,, (Sol,,76)(La,m,233)", sC: ""},
            { line: "con el seco, ¿qué se hará?, (Fa,,77)(Mi,,235)", sC: ""},
            { line: "¡Aaaay!, (La,m,52)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HIJAS DE JERUSALÉN,, (La,m,20)", sC: "ta as", lines: [
            { line: "NO LLORÉIS,, (Fa,,95)", sC: "as"},
            { line: "NO LLORÉIS POR MÍ., (La,m,189)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Padre, perdónales,, (La,m,20)", sC: "tc"},
            { line: "porque no saben qué es lo que hacen., (Fa,,118)(La,m,318)", sC: ""},
            { line: "Perdónales, perdónales., (Fa,,51)(Mi,,169)", sC: ""},
            { line: "¡Aaaay!, (La,m,55)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HIJAS DE JERUSALÉN,, (La,m,20)", sC: "ta as", lines: [
            { line: "NO LLORÉIS,, (Fa,,95)", sC: "as"},
            { line: "NO LLORÉIS POR MÍ., (La,m,189)", sC: "as"},  ]},
    ], lder: [
            { line: "Yo te aseguro:, (Fa,,10)(Mi,,107)", sC: "tc"},
            { line: "hoy estarás conmigo, (Fa,,167)", sC: ""},
            { line: "en el Paraíso., (Mi,,98)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HIJAS DE JERUSALÉN,, (La,m,20)", sC: "ta as", lines: [
            { line: "NO LLORÉIS,, (Fa,,95)", sC: "as"},
            { line: "NO LLORÉIS POR MÍ., (La,m,189)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "e ¡Padre!, ¡Padre!,, (La,m,20)(Fa,,119)", sC: "tc"},
            { line: "en tus manos, (Sol,,88)", sC: ""},
            { line: "encomiendo mi espíritu., (La,m,191)", sC: ""},
            { line: "¡Ah! ¡Ah! ¡Ah!, (Fa,,10)(Mi,,54)(La,m,107)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HIJAS DE JERUSALÉN,, (La,m,20)", sC: "ta as", lines: [
            { line: "NO LLORÉIS,, (Fa,,95)", sC: "as"},
            { line: "NO LLORÉIS POR MÍ., (La,m,189)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: HIJAS DE JERUSALÉN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HIMNO A CRISTO LUZ               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "himnoacristoluz",
        tt: "Himno A Cristo Luz",
        title: "Himno A Cristo Luz",
        subtitle: "Himno vespertino (San Gregorio Nacianceno)",
        category: ["Precatecumenado","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "85",
        notes: "",
        mant: "No",
        audioSrc: "/audio/himnoacristoluz.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=hijasdejerusalen",
        sig: "/resucito/src/index.html?canto=himnoalacaridad",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "TE BENDECIMOS EN ESTA HORA,, (Mi,m,20)", sC: "ta as"},
            { line: "¡OH CRISTO MÍO!, VERBO DE DIOS,, (La,m,138)", sC: "as"},
            { line: "LUZ DE LA LUZ SIN COMIENZO., (Mi,m,242)", sC: "as"},
            { line: "TE BENDECIMOS, VERBO DE DIOS,, (Si,7,111)(Mi,m,303)", sC: "as"},
            { line: "TE BENDECIMOS, VERBO DE DIOS., (Si,7,111)(Mi,m,303)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Te bendecimos, ¡oh triple luz, (Re,7,20)(Sol,,256)", sC: "tc"},
            { line: "de una indivisa gloria!, (Si,7,173)", sC: ""},
            { line: "Has dominado las tinieblas,, (Mi,m,211)", sC: ""},
            { line: "has hecho resurgir la luz, (Si,7,219)", sC: ""},
            { line: "resucitando de la noche., (Mi,m,188)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú eres la eterna luz, (Si,7,180)", sC: "tc"},
            { line: "que ilumina nuestras vidas., (Mi,m,222)", sC: ""},
            { line: "Tú eres la eterna luz, (Si,7,179)", sC: ""},
            { line: "que alboreas sobre el mundo., (Mi,m,240)", sC: ""},
            { line: "Tú eres la eterna luz,, (Si,7,178)", sC: ""},
            { line: "te bendecimos, Señor., (Mi,m,190)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TE BENDECIMOS EN ESTA HORA,, (Mi,m,20)", sC: "ta as", lines: [
            { line: "¡OH CRISTO MÍO!, VERBO DE DIOS,, (La,m,138)", sC: "as"},
            { line: "LUZ DE LA LUZ SIN COMIENZO., (Mi,m,242)", sC: "as"},
            { line: "TE BENDECIMOS, VERBO DE DIOS,, (Si,7,111)(Mi,m,303)", sC: "as"},
            { line: "TE BENDECIMOS, VERBO DE DIOS., (Si,7,111)(Mi,m,303)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: HIMNO A CRISTO LUZ
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════════════╗
║                HIMNO A LA CARIDAD               ║
╚═════════════════════════════════════════════════╝  */
   {
        id: "himnoalacaridad",
        tt: "Himno A La Caridad",
        title: "Himno A La Caridad",
        subtitle: "1 Corintios 13,1-7",
        category: ["PreCatecumenado","Cuaresma","Comunión","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "86",
        notes: "",
        mant: "No",
        audioSrc: "/audio/himnoalacaridad.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 4, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=himnoacristoluz",
        sig: "/resucito/src/index.html?canto=himnoalakenosis",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Aunque hablara las lenguas de los ángeles,(Do,,10)", sC: "tc"},
            { line: "si no tengo amor, nada., (La,m,19)(Fa,,154)(Sol,,185)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Aunque tuviera el don de profecía, (Do,,10)", sC: ""},
            { line: "y conociera todos los misterios,(La,m,252)", sC: ""},
            { line: "aunque tuviera plenitud de fe, (Do,,10)", sC: ""},
            { line: "y pudiera trasladar montañas,(La,m,241)", sC: ""},
            { line: "si no tengo amor, nada., (Fa,,149)(Sol,,186)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Aunque repartiera, (Do,,10)", sC: ""},
            { line: "todos mis bienes a los pobres ", sC: ""},
            { line: "y entregara mi cuerpo a las llamas,(La,m,285)", sC: ""},
            { line: "si no tengo amor, nada., (Fa,,150)(Sol,,186)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PORQUE EL AMOR,(Do,,160)", sC: "ta as"},
            { line: "EL AMOR, EL AMOR,(La,m,71)(Do,,171)", sC: "as"},
            { line: "ES PACIENTE, ES SERVICIAL, ", sC: "as"},
            { line: "NO ES ENVIDIOSO,(La,m,138)", sC: "as"},
    ], lder: [
            { line: "NO SE JACTA, NO SE ENGRÍE,(Do,,79)", sC: "as"},
            { line: "ES DECOROSO,(La,m,105)", sC: "as"},
            { line: "NO BUSCA LO SUYO, NO SE IRRITA., (Fa,,158)(Sol,,307)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "NO TOMA EN CUENTA EL MAL,(Do,,265)", sC: "as"},
            { line: "NO TOMA EN CUENTA EL MAL,(La,m,267)", sC: "as"},
            { line: "NO SE ALEGRA DE LA INJUSTICIA,(Fa,,283)", sC: "as"},
            { line: "SE ALEGRA CON LA VERDAD., (Sol,,256)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "TODO LO CREE,(Do,,127)", sC: "as r1"},
            { line: "TODO LO EXCUSA,(La,m,135)", sC: "as"},
            { line: "TODO LO ESPERA,(Do,,139)", sC: "as"},
            { line: "SOPORTA TODO, SOPORTA TODO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PORQUE EL AMOR, EL AMOR,(Do,,10)(La,m,259)", sC: "as"},
            { line: "PORQUE EL AMOR ES DIOS, (Do,,159)", sC: "as"},
            { line: "ES DIOS, ES DIOS.", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: HIMNO A LA CARIDAD
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HIMNO A LA KENOSIS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "himnoalakenosis",
        tt: "Himno A La Kenosis",
        title: "Himno A La Kenosis",
        subtitle: "Filipenses 2,1-11",
        category: ["Precatecumenado","Pascua","Pentecostés","Fracción Del Pan","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "87",
        notes: "",
        mant: "No",
        audioSrc: "/audio/himnoalakenosis.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=himnoalacaridad",
        sig: "/resucito/src/index.html?canto=himnodeadviento",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Con un mismo amor,, (Mi,m,20)", sC: "tc"},
            { line: "con un mismo espíritu,, (Si,7,183)", sC: ""},
            { line: "con los mismos sentimientos., (Mi,m,231)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Nada por rivalidad,, ", sC: ""},
            { line: "ni por vanagloria,, (Si,7,131)", sC: ""},
            { line: "mas todo con humildad., (Mi,m,210)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Considerando a los otros como superiores a ti,, (Sol,,14)", sC: ""},
            { line: "no buscando tu propio interés,, (Si,7,273)", sC: ""},
            { line: "teniendo los sentimientos de Jesús., (Mi,m,319)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El cual, siendo Dios,, (Sol,,14)", sC: ""},
            { line: "no retuvo ávidamente su dignidad,, (Si,7,308)", sC: ""},
            { line: "sino que se hizo hombre., (Mi,m,180)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y hecho hombre, se humilló a sí mismo,, (Sol,,14)", sC: ""},
            { line: "tomando condición de esclavo,, (Si,7,265)", sC: ""},
            { line: "obedeciendo hasta la muerte., (Mi,m,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Y qué muerte!:, (Sol,,14)", sC: ""},
            { line: "muerte de pecador, muerte de malhechor,, (La,m,93)(Mi,m,169)(La,m,287)(Mi,m,387)", sC: ""},
            { line: "¡muerte de cruz!, (Si,7,47)", sC: ""},
    ], lder: [
            { line: "Por eso Dios lo resucitó, lo exaltó, (Sol,,14)(La,m,217)", sC: ""},
            { line: "y le dio el Nombre más alto que existe:, (Si,7,63)", sC: ""},
            { line: "", sC: "tc1"}, // Espacio Generado para separar contenido
            { line: "Cristo Jesús es el Señor,, (Mi,m,20)", sC: "aleluya"},
            { line: "Cristo Jesús es el Señor,, (Re,,10)", sC: "aleluya"},
            { line: "Cristo Jesús es el Señor,, (Do,,10)", sC: "aleluya"},
            { line: "¡ALELUYA!, (Si,7,85)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA,ALELUYA,ALELUYA., (Mi,m,53)", sC: "ta as"},
            { line: "ALELUYA,ALELUYA,ALELUYA., (Re,,55)", sC: "as"},
            { line: "ALELUYA,ALELUYA,ALELUYA., (Do,,55)", sC: "as"},
            { line: "¡ALELUYA!, (Si,7,86)", sC: "as"},
            { line: "", sC: "tc1"}, // Espacio Generado para separar contenido
            { line: "Cristo Jesús es mi Señor,, (Mi,m,20)", sC: "aleluya"},
            { line: "Cristo Jesús es tu Señor,, (Re,,10)", sC: "aleluya"},
            { line: "Cristo Jesús es el Señor,, (Do,,10)", sC: "aleluya"},
            { line: "¡ALELUYA!, (Si,7,86)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALELUYA,ALELUYA,ALELUYA., (Mi,m,53)", sC: "ta as", lines: [
            { line: "ALELUYA,ALELUYA,ALELUYA., (Re,,55)", sC: "as"},
            { line: "ALELUYA,ALELUYA,ALELUYA., (Do,,55)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: HIMNO A LA KENOSIS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HIMNO DE ADVIENTO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "himnodeadviento",
        tt: "Himno De Adviento",
        title: "Himno De Adviento",
        subtitle: "Himno lat. «Vox clara ecce Intonat»",
        category: ["Precatecumenado","Adviento","Navidad"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "88",
        notes: "",
        mant: "No",
        audioSrc: "/audio/himnodeadviento.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=himnoalakenosis",
        sig: "/resucito/src/index.html?canto=himnodelaascension",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Una voz recia disipa con sus ecos la oscuridad,, (Re,m,20)", sC: "tc"},
            { line: "lejos el ensueño, Jesús brilla ya., (La,7,294)", sC: ""},
            { line: "Levántese el alma entorpecida, (Re,m,268)", sC: ""},
            { line: "y deje de arrastrarse por el suelo:, (La,7,293)", sC: ""},
            { line: "amanece una nueva estrella., (Re,m,240)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ved, que se nos envía un Cordero, (Sol,m,22)", sC: ""},
            { line: "para satisfacer gratuitamente nuestras deudas:, (Re,m,411)", sC: ""},
            { line: "vayamos a Él con lágrimas,, (La,7,182)", sC: ""},
            { line: "pidámosle todos perdón., (Re,m,214)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PARA QUE, CUANDO APAREZCA GLORIOSO, (Sol,m,84)", sC: "ta as"},
            { line: "EN SU SEGUNDA VENIDA,, (Re,m,205)", sC: "as"},
            { line: "Y LLENE EL MUNDO DE ESPANTO,, (La,7,273)", sC: "as"},
            { line: "ÉL NOS PROTEJA PIADOSO., (Re,m,224)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "POR ESO, (Sol,m,63)", sC: "ta as"},
            { line: "YO LE CANTO ESTA BALADA, (Re,m,229)", sC: "as r1"},
            { line: "AL PADRE, AL HIJO Y AL ESPÍRITU,, (La,7,278)", sC: "as"},
            { line: "QUE ELLOS VIVAN, AMÉN., (Re,m,223)", sC: "as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: HIMNO DE ADVIENTO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HIMNO DE LA ASCENSIÓN               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "himnodelaascension",
        tt: "Himno De La Ascensión",
        title: "Himno De La Ascensión",
        subtitle: "Himno de Laudes del tiempo Pascual, de la Ascensión a Pentecostés  / Himno de la liturgia de las horas ",
        category: ["Precatecumenado","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "89",
        notes: "",
        mant: "No",
        audioSrc: "/audio/himnodelaascension.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=himnodeadviento",
        sig: "/resucito/src/index.html?canto=himnodepascua",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EL BUEN PASTOR HA SUBIDO, (La,m,20)(Sol,,250)", sC: "ta as"},
            { line: "A LA DERECHA DEL PADRE,, (La,m,212)", sC: "as r1"},
            { line: "VELA EL PEQUEÑO REBAÑO, (Sol,,229)", sC: "as"},
            { line: "CON MARÍA EN EL CENÁCULO., (La,m,228)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Del esplendor eterno, (La,m,20)(Sol,,162)", sC: "tc"},
            { line: "desciende el crisma profético,, (La,m,245)", sC: ""},
            { line: "que consagra a los apóstoles, (Sol,,212)", sC: ""},
            { line: "en heraldos del Evangelio., (La,m,216)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL BUEN PASTOR HA SUBIDO, (La,m,20)(Sol,,250)", sC: "ta as", lines: [
            { line: "A LA DERECHA DEL PADRE,, (La,m,212)", sC: "as r1"},
            { line: "VELA EL PEQUEÑO REBAÑO, (Sol,,229)", sC: "as"},
            { line: "CON MARÍA EN EL CENÁCULO., (La,m,228)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ven, oh divino Espíritu,, (La,m,20)(Sol,,162)", sC: "tc"},
            { line: "con tus santos dones, (La,m,245)", sC: ""},
            { line: "y transforma nuestros cuerpos, (Sol,,212)", sC: ""},
            { line: "en el templo de tu santa gloria., (La,m,216)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "EL BUEN PASTOR HA SUBIDO, (La,m,20)(Sol,,250)", sC: "ta as", lines: [
            { line: "A LA DERECHA DEL PADRE,, (La,m,212)", sC: "as r1"},
            { line: "VELA EL PEQUEÑO REBAÑO, (Sol,,229)", sC: "as"},
            { line: "CON MARÍA EN EL CENÁCULO., (La,m,228)", sC: "as"},  ]},
    ], lder: [
            { line: "Oh luz de eterna sabiduría,, (La,m,20)(Sol,,233)", sC: "tc"},
            { line: "revélanos el gran misterio, (La,m,217)", sC: ""},
            { line: "del Dios uno y trino, (Sol,,155)", sC: ""},
            { line: "fuente de eterno amor., (La,m,196)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "EL BUEN PASTOR HA SUBIDO, (La,m,20)(Sol,,250)", sC: "ta as", lines: [
            { line: "A LA DERECHA DEL PADRE,, (La,m,212)", sC: "as r1"},
            { line: "VELA EL PEQUEÑO REBAÑO, (Sol,,229)", sC: "as"},
            { line: "CON MARÍA EN EL CENÁCULO., (La,m,228)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: HIMNO DE LA ASCENSIÓN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HIMNO DE PASCUA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "himnodepascua",
        tt: "Himno De Pascua",
        title: "Himno De Pascua",
        subtitle: "Himno lat. «Aurora lucis rutiiat»",
        category: ["Precatecumenado","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "90",
        notes: "",
        mant: "No",
        audioSrc: "/audio/himnodepascua.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=himnodelaascension",
        sig: "/resucito/src/index.html?canto=huyeamadomio",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "La aurora tiñe de púrpura el cielo,, (La,m,20)", sC: "tc"},
            { line: "resuena en los aires el eco de las alabanzas,, (Mi,7,373)", sC: ""},
            { line: "el mundo triunfante se alegra,, ", sC: ""},
            { line: "tenebroso el infierno brama., (La,m,226)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MIENTRAS EL REY, CRISTO,, (La,7,20)(Re,m,159)", sC: "ta as"},
            { line: "LIBRA A TODOS DE LA CÁRCEL, (La,m,242)", sC: "as r1"},
            { line: "TENEBROSA QUE ES LA MUERTE, (Mi,7,271)", sC: "as"},
            { line: "Y NOS CONDUCE A LA VIDA., (La,m,230)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Una piedra sellaba su sepulcro,, (La,m,20)", sC: "tc"},
            { line: "muchos guardias lo custodiaban,, (Mi,7,272)", sC: ""},
            { line: "pero Él triunfa glorioso, ", sC: ""},
            { line: "y de la muerte se levanta., (La,m,205)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "NO MÁS LUTOS, NI LLANTOS,, (La,7,20)(Re,m,103)", sC: "ta as"},
            { line: "NI PESARES,, (La,m,73)", sC: "as r2"},
            { line: "¡RESUCITÓ!, (Mi,,98)", sC: "as"},
            { line: "¡RESUCITÓ!, (La,m,96)", sC: "as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: HIMNO DE PASCUA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           HUYE, AMADO MÍO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "huyeamadomio",
        tt: "Huye, Amado Mío",
        title: "Huye, Amado Mío",
        subtitle: "Cantar de los Cantares 8,10-14",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión","Final","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Golpe en Fa# m, golpe al aire y Mi",
        nCanURL: "",
        dbno: "91",
        notes: "",
        mant: "No",
        audioSrc: "/audio/huyeamadomio.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=himnodepascua",
        sig: "/resucito/src/index.html?canto=idyanunciadamishermanos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Tú, que vives en los jardines,, (La,m,20)Re(m,,218)", sC: "tc"},
            { line: "donde tus compañeros te están escuchando:, (Mi,7,384)", sC: ""},
            { line: "hazme oír tu voz,, (Fa,,14)", sC: ""},
            { line: "hazme oír tu voz., (Mi,,140)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HUYE, AMADO MÍO,, (La,,10)", sC: "ta as"},
            { line: "COMO UNA GACELA,, (Mi,,162)", sC: "as"},
            { line: "COMO UN CERVATILLO,, (Fa#,m,23)", sC: "as ast"},
            { line: "HASTA EL MONTE DE LAS BALSAMERAS., (Mi,,25)(La,,342)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo soy para mi amado, (La,m,20)Re(m,,179)", sC: "tc"},
            { line: "como aquella que encontró la paz., (La,m,310)", sC: ""},
            { line: "Mi viña está aquí, está ante mí,, (Mi,,161)(La,m,288)", sC: ""},
            { line: "mi viña está aquí, está ante mí., (Mi,,161)(La,m,287)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HUYE, AMADO MÍO,, (La,,10)", sC: "ta as", lines: [
            { line: "COMO UNA GACELA,, (Mi,,162)", sC: "as"},
            { line: "COMO UN CERVATILLO,, (Fa#,m,23)", sC: "as ast"},
            { line: "HASTA EL MONTE DE LAS BALSAMERAS., (Mi,,25)(La,,342)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: HUYE, AMADO MÍO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           ID Y ANUNCIAD A MIS HERMANOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "idyanunciadamishermanos",
        tt: "Id Y Anunciad A Mis Hermanos",
        title: "Id Y Anunciad A Mis Hermanos",
        subtitle: "Mateo 28,10.16-20",
        category: ["Precatecumenado","Pascua","Pentecostés","Final","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "92",
        notes: "",
        mant: "No",
        audioSrc: "/audio/idyanunciadamishermanos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=huyeamadomio",
        sig: "/resucito/src/index.html?canto=improperios",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "«ID Y ANUNCIAD A MIS HERMANOS, (La,m,20)", sC: "ta as"},
            { line: "QUE VAYAN A GALILEA., (Sol,,14)(La,m,196)", sC: "as r1"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que allí me verán,, (Mi,,69)", sC: "tc"},
            { line: "QUE ALLÍ ME VERÁN»., (La,m,175)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los discípulos fueron a Galilea,, (La,m,20)(Re,m,162)(La,m,275)", sC: "tc"},
            { line: "al monte que Jesús les había indicado., (Re,m,172)(La,m,340)", sC: ""},
            { line: "Cuando lo vieron le adoraron., (Mi,,125)(La,m,238)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y Jesús les dijo:, (Fa,,55)(Mi,,122)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«Me ha sido dado todo poder, (Do,,10)(Sol,,257)", sC: ""},
            { line: "en el cielo y en la tierra., (Do,,194)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ME HA SIDO DADO TODO PODER, (Do,,10)(Sol,,291)", sC: "ta as"},
            { line: "EN EL CIELO Y EN LA TIERRA., (Do,,232)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Id, pues, y haced discípulos, (Do,,10)(Sol,,205)", sC: "tc"},
            { line: "a todas las gentes, (Do,,125)", sC: ""},
            { line: "bautizándolas en el nombre del Padre, (La,m,67)(Mi,,329)", sC: ""},
            { line: "y del Hijo y del Espíritu Santo,, (La,m,242)", sC: ""},
    ], lder: [
            { line: "y enseñándoles a poner en práctica,, (Fa,,10)", sC: ""},
            { line: "todo lo que yo os he mandado., (Mi,,260)(La,m,311)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "«ID Y ANUNCIAD A MIS HERMANOS, (La,m,20)", sC: "ta as", lines: [
            { line: "QUE VAYAN A GALILEA., (Sol,,63)(La,m,196)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ved que yo estoy con vosotros,, (La,m,20)", sC: "tc"},
            { line: "ved que yo estoy con vosotros, (Sol,,238)", sC: ""},
            { line: "todos los días., (La,m,109)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "VED QUE YO ESTOY CON VOSOTROS,, (La,m,20)", sC: "ta as"},
            { line: "VED QUE YO ESTOY CON VOSOTROS, (Sol,,278)", sC: "as"},
            { line: "TODOS LOS DÍAS., (La,m,139)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hasta el fin del mundo,, (Mi,,20)", sC: "tc"},
            { line: "HASTA EL FIN DEL MUNDO, (La,m,207)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "«ID Y ANUNCIAD A MIS HERMANOS, (La,m,20)", sC: "ta as", lines: [
            { line: "QUE VAYAN A GALILEA., (Sol,,63)(La,m,196)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: ID Y ANUNCIAD A MIS HERMANOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           IMPROPERIOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "improperios",
        tt: "Improperios",
        title: "Improperios",
        subtitle: "Adoración de la santa Cruz el Viernes santo",
        category: ["Precatecumenado","Cuaresma","Penitencial","Fracción Del Pan"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "93",
        notes: "",
        mant: "No",
        audioSrc: "/audio/improperios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=idyanunciadamishermanos",
        sig: "/resucito/src/index.html?canto=jerusalenreconstruida",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡OH PUEBLO MÍO! ¡OH PUEBLO MÍO!, (Mi,m,20)", sC: "ta as"},
            { line: "¿QUÉ MAL YO TE HE HECHO?, ", sC: "as"},
            { line: "¿QUÉ MAL YO TE HE HECHO?, (La,m,45)", sC: "as"},
            { line: "¿EN QUÉ TE HE CONTRISTADO?, ", sC: "as"},
            { line: "RESPÓNDEME., ", sC: "as"},
            { line: "¿EN QUÉ TE HE CONTRISTADO?, (Si,7,28)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo te he hecho salir de Egipto,, (La,m,20)(La,m6,248)", sC: "tc"},
            { line: "yo te he abierto el mar en dos partes,, (La,m,18)", sC: ""},
            { line: "yo te he liberado del Faraón, (La,m,18)", sC: ""},
            { line: "y tú, y tú, me has preparado la cruz., (Si,7,30)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡OH PUEBLO MÍO! ¡OH PUEBLO MÍO!, (Mi,m,20)", sC: "ta as", lines: [
            { line: "¿QUÉ MAL YO TE HE HECHO?, ", sC: "as"},
            { line: "¿QUÉ MAL YO TE HE HECHO?, (La,m,45)", sC: "as"},
            { line: "¿EN QUÉ TE HE CONTRISTADO?, ", sC: "as"},
            { line: "RESPÓNDEME., ", sC: "as"},
            { line: "¿EN QUÉ TE HE CONTRISTADO?, (Si,7,28)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo te he abierto un camino en el desierto,, (La,m,20)(La,m6,359)", sC: ""},
            { line: "yo te he alimentado con el maná,, (La,m,20)(La,m6,300)", sC: ""},
            { line: "te he introducido en la Tierra Prometida,, (La,m,20)", sC: ""},
            { line: "y tú, y tú, me has preparado la cruz., (Si,7,28)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡OH PUEBLO MÍO! ¡OH PUEBLO MÍO!, (Mi,m,20)", sC: "ta as", lines: [
            { line: "¿QUÉ MAL YO TE HE HECHO?, ", sC: "as"},
            { line: "¿QUÉ MAL YO TE HE HECHO?, (La,m,45)", sC: "as"},
            { line: "¿EN QUÉ TE HE CONTRISTADO?, ", sC: "as"},
            { line: "RESPÓNDEME., ", sC: "as"},
            { line: "¿EN QUÉ TE HE CONTRISTADO?, (Si,7,28)", sC: "as"},  ]},
    ], lder: [
            { line: "¿Qué más he podido hacer por ti, (La,m,20)", sC: "tc"},
            { line: "que no haya hecho?, (La,m6,147)", sC: ""},
            { line: "Yo te llamé: «Mi viña amada»,, (La,m,20)", sC: ""},
            { line: "y tú, y tú me has dado fruto amargo., (Si,7,31)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hágios o Théos,, (La,m,20)", sC: "tc"},
            { line: "SANCTUS DEUS., (Si,7,112)", sC: "ta as"},
            { line: "Hágios lschyrós,, (La,m,21)", sC: "tc"},
            { line: "SANCTUS FORTIS., (Si,7,114)", sC: "ta as"},
            { line: "Hágios Athánatos,, (La,m,20)", sC: "tc"},
            { line: "ELÉISON HIMÁS., (Si,7,134)", sC: "ta as"},
            { line: "Sanctus et inmortalis,, (La,m,20)", sC: "tc"},
            { line: "MISERERE NOBIS., (Si,7,128)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡OH PUEBLO MÍO! ¡OH PUEBLO MÍO!, (Mi,m,20)", sC: "ta as", lines: [
            { line: "¿QUÉ MAL YO TE HE HECHO?, ", sC: "as"},
            { line: "¿QUÉ MAL YO TE HE HECHO?, (La,m,45)", sC: "as"},
            { line: "¿EN QUÉ TE HE CONTRISTADO?, ", sC: "as"},
            { line: "RESPÓNDEME., ", sC: "as"},
            { line: "¿EN QUÉ TE HE CONTRISTADO?, (Si,7,28)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: IMPROPERIOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           JERUSALÉN RECONSTRUIDA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "jerusalenreconstruida",
        tt: "Jerusalén Reconstruida",
        title: "Jerusalén Reconstruida",
        subtitle: "Tobias 13,11-17",
        category: ["Precatecumenado","Pascua","Pentecostés","Paz","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "5",
        nCan: "",
        nCanURL: "",
        dbno: "94",
        notes: "",
        mant: "No",
        audioSrc: "/audio/jerusalenreconstruida.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=improperios",
        sig: "/resucito/src/index.html?canto=jesusrecorriatodaslasciudades",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Bendice, alma mía al Señor,, (Mi,m,20)(Re,,250)", sC: "tc"},
            { line: "bendice, alma mía, al gran Rey,, (Mi,m,283)", sC: ""},
            { line: "porque será reconstruida, (Re,,216)", sC: ""},
            { line: "Jerusalén, Jerusalén., (Mi,m,177)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "JERUSALÉN, JERUSALÉN,, (Mi,m,20)(Re,,217)", sC: "ta as"},
            { line: "JERUSALÉN, JERUSALÉN., (Mi,m,216)", sC: "as"},
            { line: "JERUSALÉN RECONSTRUIDA,, (Re,,239)", sC: "as"},
            { line: "JERUSALÉN PARA SIEMPRE., (Mi,m,207)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Jerusalén será reconstruida,, (Mi,m,20)(Re,,250)", sC: "tc"},
            { line: "con zafiros y esmeraldas,, (Mi,m,193)", sC: ""},
            { line: "de piedras preciosas sus murallas,, (Re,,287)", sC: ""},
            { line: "sus torres con oro puro., (Mi,m,194)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sus plazas serán de rubí,, (Re,,232)", sC: ""},
            { line: "sus calles de oro de Ofir,, (Mi,m,220)", sC: ""},
            { line: "sobre sus puertas se exultará, (Re,,275)", sC: ""},
            { line: "y en sus casas se cantará., (Mi,m,238)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "JERUSALÉN, JERUSALÉN,, (Mi,m,20)(Re,,217)", sC: "ta as", lines: [
            { line: "JERUSALÉN, JERUSALÉN., (Mi,m,216)", sC: "as"},
            { line: "JERUSALÉN RECONSTRUIDA,, (Re,,239)", sC: "as"},
            { line: "JERUSALÉN PARA SIEMPRE., (Mi,m,207)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Brillará tu luz hasta los confines de la tierra,, (Mi,m,20)(Re,,383)", sC: ""},
            { line: "vendrán a ti pueblos numerosos,, (Mi,m,270)", sC: ""},
    ], lder: [
            { line: "vendrán a ti todas las naciones,, (Re,,260)", sC: ""},
            { line: "hasta la casa de tu Nombre., (Mi,m,207)", sC: ""},
            { line: "Las generaciones te cantarán,, (Re,,267)", sC: ""},
            { line: "todos los pueblos exultarán, (Mi,m,243)", sC: ""},
            { line: "y en ella el nombre de tu Elegido, (Re,,283)", sC: ""},
            { line: "será para siempre, será para siempre., (Mi,m,300)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "JERUSALÉN, JERUSALÉN,, (Mi,m,20)(Re,,217)", sC: "ta as", lines: [
            { line: "JERUSALÉN, JERUSALÉN., (Mi,m,216)", sC: "as"},
            { line: "JERUSALÉN RECONSTRUIDA,, (Re,,239)", sC: "as"},
            { line: "JERUSALÉN PARA SIEMPRE., (Mi,m,207)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Malditos sean los que te dicen palabras crueles,, (Mi,m,20)(Re,,421)", sC: "tc"},
            { line: "malditos sean los que te destruyen,, (Mi,m,293)", sC: ""},
            { line: "todos los que derriban tus murallas,, (Re,,299)", sC: ""},
            { line: "y tiran por tierra tus torres., (Mi,m,211)", sC: ""},
            { line: "Mas sean benditos, benditos para siempre,, (Re,,149)(Mi,m,352)", sC: ""},
            { line: "los que te construyen, los que te edifican., (Re,,163)(Mi,m,356)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Benditos los que te aman,, (Re,,197)", sC: ""},
            { line: "los que lloran por tus castigos,, (Mi,m,248)", sC: ""},
            { line: "porque en tus puertas exultarán,, (Re,,288)", sC: ""},
            { line: "porque en sus casas te cantarán., (Mi,m,293)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "JERUSALÉN, JERUSALÉN,, (Mi,m,20)(Re,,217)", sC: "ta as", lines: [
            { line: "JERUSALÉN, JERUSALÉN., (Mi,m,216)", sC: "as"},
            { line: "JERUSALÉN RECONSTRUIDA,, (Re,,239)", sC: "as"},
            { line: "JERUSALÉN PARA SIEMPRE., (Mi,m,207)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA, ALELUYA., (Mi,m,20)(Re,,154)(Mi,m,347)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA, ALELUYA., (Re,,155)(Mi,m,347)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: JERUSALÉN RECONSTRUIDA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           JESÚS RECORRÍA TODAS LAS                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "jesusrecorriatodaslasciudades",
        tt: "Jesús Recorría Todas Las Ciudades ",
        title: "Jesús recorría todas las ciudades",
        subtitle: "Mateo 9,35ss; 10 ",
        category: ["Precatecumenado","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "95",
        notes: "",
        mant: "No",
        audioSrc: "/audio/jesusrecorriatodaslasciudades.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=jerusalenreconstruida",
        sig: "/resucito/src/index.html?canto=lacorderadedios",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Jesús recorría todas las ciudades., (La,m,20)(Fa,,121)(La,m,279)", sC: "tc"},
            { line: "Jesús de pueblo en pueblo, (Fa,,216)", sC: ""},
            { line: "anunciaba el Reino., (La,m,151)", sC: ""},
            { line: "Y viendo las gentes que lo seguían, (Re,m,39)(Mi,7,306)", sC: ""},
            { line: "se conmovió., (La,m,113)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ESTABAN CANSADOS,, (Mi,m,20)", sC: "tc as"},
            { line: "ESTABAN ABATIDOS, (Fa,,149)", sC: "as r1"},
            { line: "COMO OVEJAS SIN PASTOR., (Mi,,242)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Entonces Jesús dijo a sus discípulos:, (La,m,20)(Fa,,130)(Mi,7,293)", sC: "tc"},
            { line: "«La mies es grande,, (La,m,20)", sC: ""},
            { line: "es verdaderamente grande,, (Sol,,216)", sC: ""},
            { line: "y los obreros son pocos., (La,m,87)(Mi,,185)", sC: ""},
            { line: "Rogad, hermanos, al dueño de la mies, (La,m,129)(Sol,,352)", sC: ""},
            { line: "que envíe obreros a su mies., (La,m,84)(Mi,,255)", sC: ""},
            { line: "Mirad que yo os envío, (Do,,10)(Sol,,192)", sC: ""},
            { line: "como ovejas entre lobos., (La,m,84)(Sol,,195)", sC: ""},
            { line: "Sed prudentes como serpientes, (Do,,92)(Sol,,256)", sC: ""},
            { line: "y sencillos como palomas,, (La,m,63)(Sol,,199)", sC: ""},
            { line: "COMO PALOMAS., (La,m,20)", sC: "ta as"},
    ], lder: [
            { line: "No llevéis ni bolsa ni dinero,, (Do,,10)(Sol,,234)", sC: "tc"},
            { line: "ni alforja, ni calzado., (La,m,57)(Sol,,159)", sC: ""},
            { line: "Y anunciad que el Reino está cerca,, (Do,,89)(Sol,,298)", sC: ""},
            { line: "Cristo ha resucitado y viene con nosotros,, (La,m,20)(Sol,,345)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "VIENE CON NOSOTROS., (La,m,157)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El que ama a su padre o a su madre más que a mí,, (Do,,10)", sC: "tc txcant"},

            { line: "NO ES DIGNO DE MÍ, NO ES DIGNO DE MÍ., (Sol,,82)(La,m,288)", sC: "ta as"},
            { line: "El que ama a su hijo o a su hija más que a mí, (Do,,10)", sC: "tc"},
            { line: "NO ES DIGNO DE MÍ, NO ES DIGNO DE MÍ., (Sol,,82)(La,m,285)", sC: "ta as"},
            { line: "El que no tome su cruz y me siga,, (Do,,10)", sC: "tc"},
            { line: "NO ES DIGNO DE MÍ, NO ES DIGNO DE MÍ., (Sol,,81)(La,m,285)", sC: "ta as"},
            { line: "Porque el que busca en este mundo su vida,, (Do,,10)", sC: "tc"},
            { line: "LA PERDERÁ, LA PERDERÁ., (Sol,,122)(La,m,256)", sC: "ta as"},
            { line: "Y el que pierda su vida por el amor mío,, (Do,,107)", sC: "tc"},
            { line: "LA ENCONTRARÁ, LA ENCONTRARÁ., (Sol,,159)(La,m,334)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Quien os escucha,, (Sol,,124)", sC: "tc"},
            { line: "ME ESCUCHA A MÍ., (La,m,171)", sC: "ta as tleft"},

            { line: "Quien os acoge,, (Sol,m,126)", sC: "tc"},
            { line: "ME ACOGE A MÍ., (La,m,147)", sC: "ta as tleft"},

            { line: "QUIEN ME ACOGE A MÍ,, (Sol,,215)", sC: "ta as"},
            { line: "ACOGE A DIOS, ACOGE A DIOS»., (Fa,,122)(Mi,,272)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: JESÚS RECORRÍA TODAS LAS 
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LA CORDERA DE DIOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "lacorderadedios",
        tt: "La Cordera De Dios",
        title: "La Cordera De Dios",
        subtitle: "Mateo 1,18s; 2,13s.18",
        category: ["Precatecumenado","Vírgen María","Adviento","Navidad","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "96",
        notes: "",
        mant: "No",
        audioSrc: "/audio/lacorderadedios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=jesusrecorriatodaslas",
        sig: "/resucito/src/index.html?canto=laespada",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Era la Virgen María prometida de José,, (Mi,m,20)(La,m,209)", sC: "tc"},
            { line: "cuando antes de que vivieran juntos,, (Do,,10)", sC: ""},
            { line: "se encontró encinta por obra, ", sC: ""},
            { line: "del Espíritu Santo., (Si,7,132)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y José, como era justo, (Mi,m,20)", sC: ""},
            { line: "y no quería repudiarla,, (La,m,90)", sC: ""},
            { line: "decidió abandonarla en secreto., (Do,,64)(Si,7,279)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "QUÉ AMARGA ES EL AGUA, MARÍA, (Mi,m,315)", sC: "ta as"},
            { line: "CORDERA DE DIOS, HUMILDE CORDERA,, (Do,,10)", sC: "as"},
            { line: "QUE NO TE RESISTES AL MAL., (Mi,m,20)", sC: "as"},
            { line: "MADRE DE JESÚS Y MADRE NUESTRA,, (La,m,20)", sC: "as"},
            { line: "RUEGA POR NOSOTROS,, (Si,7,172)", sC: "as"},
            { line: "RUEGA POR NOSOTROS., (Mi,m,176)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "María dio a luz a su hijo,, (Mi,m,20)", sC: "tc"},
            { line: "lo envolvió en pañales, (La,m,20)", sC: ""},
            { line: "y lo acostó en un pesebre, ", sC: ""},
            { line: "porque no había sitio para ellos en la posada., (Do,,10)(Si,7,400)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "QUÉ AMARGA ES EL AGUA, MARÍA, (Mi,m,315)", sC: "ta as", lines: [
            { line: "CORDERA DE DIOS, HUMILDE CORDERA,, (Do,,10)", sC: "as"},
            { line: "QUE NO TE RESISTES AL MAL., (Mi,m,20)", sC: "as"},
            { line: "MADRE DE JESÚS Y MADRE NUESTRA,, (La,m,20)", sC: "as"},
            { line: "RUEGA POR NOSOTROS,, (Si,7,172)", sC: "as"},
            { line: "RUEGA POR NOSOTROS., (Mi,m,176)", sC: "as"},  ]},
    ], lder: [
            { line: "Y una noche José se levantó,, (Mi,m,20)", sC: "tc"},
            { line: "tomó al niño y a su madre, (La,m,20)", sC: ""},
            { line: "y huyó a Egipto, (Do,,10)", sC: ""},
            { line: "porque querían matar al niño., (Si,7,251)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "QUÉ AMARGA ES EL AGUA, MARÍA, (Mi,m,315)", sC: "ta as", lines: [
            { line: "CORDERA DE DIOS, HUMILDE CORDERA,, (Do,,10)", sC: "as"},
            { line: "QUE NO TE RESISTES AL MAL., (Mi,m,20)", sC: "as"},
            { line: "MADRE DE JESÚS Y MADRE NUESTRA,, (La,m,20)", sC: "as"},
            { line: "RUEGA POR NOSOTROS,, (Si,7,172)", sC: "as"},
            { line: "RUEGA POR NOSOTROS., (Mi,m,176)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Un grito se siente en Ramá, ¡Ay Ayaay!, (Mi,m,20)", sC: "tc"},
            { line: "un llanto y un lamento grande:, (La,m,20)", sC: ""},
            { line: "es Raquel que llora a sus hijos,, (Do,,10)", sC: ""},
            { line: "y no quiere ser consolada,, (La,m,213)", sC: ""},
            { line: "porque ya no existen., (Si,7,156)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "QUÉ AMARGA ES EL AGUA, MARÍA, (Mi,m,315)", sC: "ta as", lines: [
            { line: "CORDERA DE DIOS, HUMILDE CORDERA,, (Do,,10)", sC: "as"},
            { line: "QUE NO TE RESISTES AL MAL., (Mi,m,20)", sC: "as"},
            { line: "MADRE DE JESÚS Y MADRE NUESTRA,, (La,m,20)", sC: "as"},
            { line: "RUEGA POR NOSOTROS,, (Si,7,172)", sC: "as"},
            { line: "RUEGA POR NOSOTROS., (Mi,m,176)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Ángel del Señor le dijo a José en Egipto:, (Mi,m,20)", sC: "tc"},
            { line: "«Levántate, toma contigo al niño y a su madre, (La,m,20)", sC: ""},
            { line: "y vuelve a la tierra de Israel,, (Do,,44)(Si,7,254)", sC: ""},
            { line: "porque \"de Egipto llamé a mi Hijo\"»., (Mi,m,303)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "CORDERA DE DIOS, (Do,,10)", sC: "ta as", lines: [
            { line: "HUMILDE CORDERA, ", sC: "as"},
            { line: "QUE NO TE RESISTES AL MAL., (Mi,m,20)", sC: "as"},
            { line: "MADRE DE JESÚS Y MADRE NUESTRA,, (La,m,20)", sC: "as"},
            { line: "RUEGA POR NOSOTROS,, (Si,7,172)", sC: "as"},
            { line: "RUEGA POR NOSOTROS., (Mi,m,176)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: LA CORDERA DE DIOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LA ESPADA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "laespada",
        tt: "La Espada",
        title: "La Espada",
        subtitle: "Ezequiel 21,14-22",
        category: ["Precatecumenado","Vírgen María","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Se puede sustituir por Sol# dim 7",
        nCanURL: "",
        dbno: "97",
        notes: "",
        mant: "No",
        audioSrc: "/audio/laespada.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=lacorderadedios",
        sig: "/resucito/src/index.html?canto=lamarchaesdura",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Espada, espada, bruñida para matar., (La,m,20)(Mi,7,121)(Fa,,208)(Mi,7,338)", sC: "tc"},
            { line: "ESPADA, ESPADA, BRUÑIDA PARA MATAR., (La,m,20)(Mi,7,133)(Fa,,239)(Mi,7,382)", sC: "ta as"},
            { line: "María, María, madre de Dios., (Do,,10)(Mi,7,105)(Fa,,153)(Mi,7,254)", sC: "tc"},
            { line: "MARÍA, MARÍA, MADRE DE DIOS., (Do,,10)(Mi,7,125)(Fa,,181)(Mi,7,296)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Grita, hijo de hombre,, (La,m,20)(Mi,7,146)", sC: "tc"},
            { line: "grita, hijo de hombre:, (La,m,142)", sC: ""},
            { line: "la espada es para mi pueblo,, (Re,m,61)(Mi,7,234)", sC: ""},
            { line: "espada para mi pueblo., (Fa,,38)(Mi,7,187)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESPADA, ESPADA, , (La,m,20)(Mi,7,134)", sC: "ta as", lines: [
            { line: "BRUÑIDA PARA MATAR., (Fa,,60)(Mi,7,202)", sC: "as"},
            { line: "ESPADA, ESPADA, BRUÑIDA PARA MATAR., (La,m,20)(Mi,7,133)(Fa,,237)(Mi,7,382)", sC: "as"},  ]},
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "MARÍA, MARÍA,, (Do,,10)(Mi,7,125)", sC: "as", lines: [
            { line: "MADRE DE DIOS., (Fa,,29)(Mi,7,143)", sC: "as"},
            { line: "MARÍA, MARÍA, MADRE DE DIOS., (Do,,10)(Mi,7,127)(Fa,,182)(Mi,7,295)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Gira a tu derecha,, (La,m,20)(Mi,7,131)", sC: "tc"},
            { line: "gira hacia tu izquierda,, (Re,m,22)(Mi,7,174)", sC: ""},
            { line: "allí donde tus filos quedarán saciados,, (Re,m,22)(Mi,7,318)", sC: ""},
            { line: "allí donde se saciará mi alma., (Fa,,20)(Mi,7,243)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
triggerLine: "ESPADA, ESPADA, (La,m,20)(Mi,7,134)", sC: "ta as", lines: [
            { line: "BRUÑIDA PARA MATAR., (Fa,,60)(Mi,7,202)", sC: "as"},
            { line: "ESPADA, ESPADA, BRUÑIDA PARA MATAR., (La,m,20)(Mi,7,133)(Fa,,237)(Mi,7,382)", sC: "as"},  ]},
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "MARÍA, MARÍA, (Do,,10)(Mi,7,125)", sC: "as", lines: [
            { line: "MADRE DE DIOS., (Fa,,29)(Mi,7,143)", sC: "as"},
            { line: "MARÍA, MARÍA, MADRE DE DIOS., (Do,,10)(Mi,7,127)(Fa,,182)(Mi,7,295)", sC: "as"},  ]},
    ], lder: [
            { line: "Bruñida para matar,, (Re,m,22)(Mi,7,176)", sC: "tc"},
            { line: "bruñida para matar., (Fa,,44)(Mi,7,177)", sC: ""},
            { line: "Grita, hijo de hombre,, (La,m,20)(Mi,7,145)", sC: ""},
            { line: "Grita, hijo de hombre:, (La,m,149)", sC: ""},
            { line: "La espada es para mi pueblo,, (Re,m,70)(Mi,7,246)", sC: ""},
            { line: "espada para mi pueblo., (Fa,,39)(Mi,7,186)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
triggerLine: "ESPADA, ESPADA, (La,m,20)(Mi,7,134)", sC: "ta as", lines: [
            { line: "BRUÑIDA PARA MATAR., (Fa,,60)(Mi,7,202)", sC: "as"},
            { line: "ESPADA, ESPADA, BRUÑIDA PARA MATAR., (La,m,20)(Mi,7,133)(Fa,,237)(Mi,7,382)", sC: "as"},  ]},
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "MARÍA, MARÍA, (Do,,10)(Mi,7,125)", sC: "as", lines: [
            { line: "MADRE DE DIOS., (Fa,,29)(Mi,7,143)", sC: "as"},
            { line: "MARÍA, MARÍA, MADRE DE DIOS., (Do,,10)(Mi,7,127)(Fa,,182)(Mi,7,295)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: LA ESPADA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LA MARCHA ES DURA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "lamarchaesdura",
        tt: "La Marcha Es Dura",
        title: "La Marcha Es Dura",
        subtitle: "Espiritual negro «Go down, Moses»",
        category: ["Precatecumenado","Cuaresma","Penitencial"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "98",
        notes: "",
        mant: "No",
        audioSrc: "/audio/lamarchaesdura.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=laespada",
        sig: "/resucito/src/index.html?canto=lasalve",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "La marcha es dura, recio el sol,, (Mi,m,20)(Si,7,154)(Mi,m,281)", sC: "tc"},
            { line: "lento el caminar., (Si,7,92)(Mi,m,142)", sC: ""},
            { line: "Moisés caudillo de Israel, (Si,7,126)(Mi,m,221)", sC: ""},
            { line: "lo va a liberar., (Si,7,80)(Mi,m,121)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "OYE, PADRE, EL GRITO DE TU PUEBLO., (Mi,m,20)(La,m,70)(Si,7,143)(Mi,m,316)", sC: "ta as"},
            { line: "OYE, PADRE, MANDA AL SALVADOR., (Si,7,256)(Mi,m,318)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El pueblo anhela vida y paz,, (Mi,m,20)(Si,7,135)(Mi,m,244)", sC: "tc"},
            { line: "quiere resurgir., (Si,7,82)(Mi,m,128)", sC: ""},
            { line: "Moisés caudillo de Israel, (Si,7,124)(Mi,m,222)", sC: ""},
            { line: "va a librarlo al fin., (Si,7,77)(Mi,m,152)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "OYE, PADRE (Mi,m,20)(La,m,70)", sC: "ta as", lines: [
            { line: "EL GRITO DE TU PUEBLO., (Si,7,16)(Mi,m,191)", sC: "as"},
            { line: "OYE, PADRE, MANDA AL SALVADOR., (Si,7,256)(Mi,m,316)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: LA MARCHA ES DURA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LA SALVE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "lasalve",
        tt: "La Salve",
        title: "La Salve",
        subtitle: "Himno lat. «Salve Regina»",
        category: ["Precatecumenado","Vírgen María","Cuaresma","Penitencial"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "99",
        notes: "",
        mant: "No",
        audioSrc: "/audio/lasalve.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=lamarchaesdura",
        sig: "/resucito/src/index.html?canto=lasiegadelasnaciones",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Dios te salve,, (Mi,m,20)", sC: "tc"},
            { line: "Reina y Madre de misericordia,, (La,m,97)(Mi,m,247)", sC: ""},
            { line: "vida, dulzura y esperanza nuestra., (Fa,,10)(Mi,,276)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Dios te salve., (Mi,m,20)", sC: ""},
            { line: "A ti llamamos los desterrados hijos de Eva,, (La,m,84)(Mi,m,382)", sC: ""},
            { line: "a ti suspiramos, gimiendo y llorando, (La,m,102)(Mi,m,301)", sC: ""},
            { line: "en este valle de lágrimas,, (Fa,,35)(Mi,,165)", sC: ""},
            { line: "en este valle de lágrimas., (Fa,,35)(Mi,,165)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ea, pues, Señora, abogada nuestra,, (La,m,20)(Fa,,177)(Mi,,289)", sC: ""},
            { line: "vuelve a nosotros, (Fa,,10)", sC: ""},
            { line: "esos tus ojos misericordiosos,, (Mi,,241)", sC: ""},
            { line: "y después de este destierro, (Fa,,10)", sC: ""},
            { line: "muéstranos a Jesús,, (Mi,,172)", sC: ""},
            { line: "fruto bendito de tu vientre.", sC: ""},
    ], lder: [
            { line: "¡Oh, clementísima!, (Mi,m,20)", sC: ""},
            { line: "¡Oh, piadosa!, (La,m,94)", sC: ""},
            { line: "¡Oh, dulce Virgen María!, (Mi,m,209)", sC: ""},
            { line: "Ruega por nosotros,, (Fa,,29)", sC: ""},
            { line: "Santa Madre de Dios,, (Mi,,183)", sC: ""},
            { line: "para que seamos dignos, ", sC: ""},
            { line: "de alcanzar las promesas, (Fa,,200)", sC: ""},
            { line: "de Jesucristo,, (Mi,,92)", sC: ""},
            { line: "de Jesucristo. ", sC: ""},
]}, // ULTIMA LINEA DEL CANTO: LA SALVE
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LA SIEGA DE LAS NACIONES               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "lasiegadelasnaciones",
        tt: "La Siega De Las Naciones",
        title: "La Siega De Las Naciones",
        subtitle: "Juan 4,31-38",
        category: ["Precatecumenado","Final","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "100",
        notes: "",
        mant: "No",
        audioSrc: "/audio/lasiegadelasnaciones.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=lasalve",
        sig: "/resucito/src/index.html?canto=lavozdemiamado",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Llegaron sus discípulos y le dijeron:, (Re,m,20)", sC: "tc"},
            { line: "«Rabbí, come, Rabbí, come»., (Sol,m,51)(La,,90)(Sol,m,180)(La,,227)", sC: ""},
            { line: "Pero Él les dijo: «Yo tengo para comer, (Si♭,,13)", sC: ""},
            { line: "un alimento que vosotros no conocéis:, (La,,344)", sC: ""},
            { line: "mi alimento es hacer la voluntad, (Si♭,,13)", sC: ""},
            { line: "de Aquel que me ha enviado, (La,,242)", sC: ""},
            { line: "y llevar a cabo su obra»., (Sol,m,49)(La,,179)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿NO DECÍS VOSOTROS:, (Re,m,157)(La,,198)", sC: "ta as"},
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,170)", sC: "as"},
            { line: "¿NO DECÍS VOSOTROS:, (Do,,95)(Si♭,,129)(La,,160)", sC: "as"},
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,176)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pues bien, yo os digo:, (Sol,m,23)", sC: "tc"},
            { line: "alzad vuestros ojos y ved los campos, (Do,,10)", sC: ""},
            { line: "que ya blanquean para la siega,, (La,,269)", sC: ""},
            { line: "QUE YA BLANQUEAN PARA LA SIEGA., (Si♭,,170)(La,,320)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¿NO DECÍS VOSOTROS:..., (Re,m,157)(La,,198)", sC: "ta as", lines: [
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,170)", sC: "as"},
            { line: "¿NO DECÍS VOSOTROS:, (Do,,95)(Si♭,,129)(La,,160)", sC: "as"},
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,176)", sC: "as"},  ]},
    ], lder: [
            { line: "Ya se reúnen los segadores,, (Si♭,,10)(La,,225)", sC: "tc"},
            { line: "YA SE REÚNEN LOS SEGADORES,, (Si♭,,10)(La,,268)", sC: "ta as"},
            { line: "y reciben el salario y recogen fruto, (Sol,m,51)", sC: "tc"},
            { line: "para la vida eterna,, (La,,143)", sC: ""},
            { line: "A PARA LA VIDA ETERNA., (Si♭,,10)(La,,194)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "¿NO DECÍS VOSOTROS:..., (Re,m,157)(La,,198)", sC: "ta as", lines: [
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,170)", sC: "as"},
            { line: "¿NO DECÍS VOSOTROS:, (Do,,95)(Si♭,,129)(La,,160)", sC: "as"},
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,176)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo os he mandado a segar, (Sol,m,20)", sC: "tc"},
            { line: "lo que vosotros no habéis trabajado;, (Do,,10)(La,,312)", sC: ""},
            { line: "otros se fatigaron, (Si♭,,11)", sC: ""},
            { line: "y vosotros os aprovecháis de su fatiga;, (La,,334)", sC: ""},
            { line: "de modo que el sembrador, (Sol,m,22)", sC: ""},
            { line: "se alegra, se alegra con el segador., (Do,,10)(Si♭,,153)(La,,320)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¿NO DECÍS VOSOTROS:..., (Re,m,157)(La,,198)", sC: "ta as", lines: [
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,170)", sC: "as"},
            { line: "¿NO DECÍS VOSOTROS:, (Do,,95)(Si♭,,129)(La,,160)", sC: "as"},
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,176)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: LA SIEGA DE LAS NACIONES
// SIGUIENTE CANTO DEBAJO
























// LETRA S

/*
╔════════════════════════════════════════════════════════╗
║           SI HOY ESCUCHÁIS SU VOZ                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "sihoyescuchaissuvoz",
        tt: "Si Hoy Escucháis Su Voz ",
        title: "Si Hoy Escucháis Su Voz ",
        subtitle: "Salmo 95 (94)",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "152",
        notes: "",
        mant: "No",
        audioSrc: "/audio/sihoyescuchaissuvoz.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=sihabeisresucitadoconcristo",
        sig: "/resucito/src/index.html?canto=simeherefugiadoenelsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SI HOY ESCUCHÁIS SU VOZ, (Mi,,10)(Fa#,m,249)", sC: "ta as"},
            { line: "NO ENDUREZCÁIS EL CORAZÓN., (Si,7,153)(Mi,,285)", sC: "as r1"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Venid, aclamemos al Señor,, (Do#,m,26)(Fa#,m,242)", sC: "tc"},
            { line: "demos vítores a la roca que nos salva;, (Si,7,82)(Mi,,327)", sC: ""},
            { line: "entremos a su presencia dándole gracias,, (Do#,m,195)(Sol#,,349)", sC: ""},
            { line: "aclamándolo con cantos y salmos., (Do#,m,280)(Mi,,331)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SI HOY ESCUCHÁIS SU VOZ..., (Mi,,10)(Fa#,m,249)", sC: "ta as", lines: [
            { line: "NO ENDUREZCÁIS EL CORAZÓN., (Si,7,153)(Mi,,285)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque el Señor es un Dios grande,, (Do#,m,26)(Fa#,m,290)", sC: "tc"},
            { line: "más grande que todos los dioses;, (Si,7,66)(Mi,,280)", sC: ""},
            { line: "suyo es el mar, suya es la tierra,, (Do#,m,26)(Sol#,,269)", sC: ""},
            { line: "son suyas las cumbres de los montes., (Do#,m,310)(Mi,,361)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SI HOY ESCUCHÁIS SU VOZ..., (Mi,,10)(Fa#,m,249)", sC: "ta as", lines: [
            { line: "NO ENDUREZCÁIS EL CORAZÓN., (Si,7,153)(Mi,,285)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Entrad, postrémonos por tierra,, (Do#,m,26)(Fa#,m,264)", sC: "tc"},
            { line: "bendiciendo al Señor, creador nuestro., (Si,7,27)(Mi,,264)", sC: ""},
            { line: "Porque El es nuestro Dios y nosotros su pueblo,, (Do#,m,81)(Sol#,,321)", sC: ""},
            { line: "el rebaño que Él conduce., (Do#,m,227)(MI,,416)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SI HOY ESCUCHÁIS SU VOZ..., (Mi,,10)(Fa#,m,249)", sC: "ta as", lines: [
            { line: "NO ENDUREZCÁIS EL CORAZÓN., (Si,7,153)(Mi,,285)", sC: "as r1"},  ]},
    ], lder: [
            { line: "¡Ojalá! ¡Ojalá escuchéis hoy su voz, (Do#,m,26)(Sol#,,113)", sC: "tc"},
            { line: "y no endurezcáis el corazón!, (Do#,m,245)", sC: ""},
            { line: "Como en Meribá,, (Fa#,m,25)", sC: ""},
            { line: "como el día de Masá en el desierto,, (Si,7,99)(Mi,,298)", sC: ""},
            { line: "donde vuestros padres dudaron de mí,, (Do#,m,177)(Sol#,,353)", sC: ""},
            { line: "aunque habían visto mis obras, ", sC: ""},
            { line: "me obligaron a hacer su voluntad., (Do#,m,299)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Durante cuarenta años, (Fa#,m,25)", sC: ""},
            { line: "me disgustó aquella generación., (Si,7,110)(Mi,,285)", sC: ""},
            { line: "Y dije «Este es un pueblo, (Do#,m,25)", sC: ""},
            { line: "de corazón extraviado,, (Sol#,,180)", sC: ""},
            { line: "no quiere conocer mis caminos,, ", sC: ""},
            { line: "por eso no entrarán en mi descanso»., (Do#,m,305)(Mi,,362)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SI HOY ESCUCHÁIS SU VOZ..., (Mi,,10)(Fa#,m,249)", sC: "ta as", lines: [
            { line: "NO ENDUREZCÁIS EL CORAZÓN., (Si,7,153)(Mi,,285)", sC: "as r1"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SI HOY ESCUCHÁIS SU VOZ 
// SIGUIENTE CANTO DEBAJO









/*
╔═════════════════════════════════════════════════╗
║           PLEGARIA EUCARÍSTICA II               ║
╚═════════════════════════════════════════════════╝  */
   {
        id: "plegariaeucaristicaiimodeloip1",
        tt: "Plegaria Eucarística II",
        title: "Plegaria Eucarística II",
        subtitle: "Modelo I",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "Melodía adaptable para los prefacios de solemnidades o de varios tiempos litúrgicos, Ver: Tablet.",
        nCanURL: "/resucito/src/index.html?canto=plegariaeucaristicaiimodeloi",
        dbno: "194",
        notes: "",
        mant: "No",
        audioSrc: "/audio/plegariaeucaristicaiimodeloip1.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=padrenuestro",
        sig: "/resucito/src/index.html?canto=plegariaeucaristicaiimodeloip2",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "PREFACIO", sC: "sp2", color: "#9D9580"},
            { line: "El Señor esté con vosotros., (Sol,,11)(La,m,211)", sC: "pa"},
            { line: "Y CON TU ESPÍRITU., (Sol,,12)(La ,m,142)", sC: "ta"},
            { line: "Levantemos el corazón., (Fa,,12)(Mi,,206)", sC: "pa"},
            { line: "LO TENEMOS LEVANTADO HACIA EL SEÑOR., (Fa,,10)(Mi,,393)", sC: "as"},
            { line: "Demos gracias al Señor, nuestro Dios., (La ,m,335)", sC: "ta"},
            { line: "A ES JUSTO Y NECESARIO., (Sol,,66)(La ,m,202)", sC: "as sb194"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En verdad es justo y necesario,, (La ,m,15)(Sol,,254)", sC: "pa"},
            { line: "es nuestro deber y salvación, (La ,m,251)", sC: ""},
            { line: "darte gracias,, (Do,,80)", sC: ""},
            { line: "siempre y en todo lugar,, (La ,m,213)", sC: ""},
            { line: "a ti, Padre Santo,, (Sol,,28)", sC: ""},
            { line: "por Jesucristo, tu Hijo amado., (La ,m,245)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Por Él, que es tu Palabra,, (Sol,,197)", sC: ""},
            { line: "hiciste todas las cosas., (La ,m,177)", sC: ""},
            { line: "Tú nos lo enviaste hecho hombre, (Do,,138)", sC: ""},
            { line: "por obra del Espíritu Santo,, (La ,m,219)", sC: ""},
            { line: "para que, nacido de María la Virgen,, (Sol,,297)", sC: ""},
            { line: "fuera nuestro Salvador y Redentor., (La ,m,285)", sC: ""},
    ], lder: [
            { line: "Él, en cumplimiento de tu voluntad,, (Fa,,11)(Mi,,315)", sC: ""},
            { line: "para destruir la muerte, (Fa,,15)", sC: "as"},
            { line: "y manifestar la resurrección,, (Mi,,247)", sC: "as"},
            { line: "extendió sus brazos en la cruz,, (La,m,74)(Sol,,269)", sC: ""},
            { line: "y así adquirió para ti, (Fa,,197)", sC: ""},
            { line: "un pueblo santo., (Mi,7,116)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MURIENDO, (La,,11)", sC: "pa as r1"},
            { line: "DESTRUYÓ NUESTRA MUERTE,, (Sol,,243)", sC: "as"},
            { line: "RESUCITANDO, (Fa,,91)", sC: "as"},
            { line: "RESTAURÓ NUESTRA VIDA., (Mi,,223)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Por eso, con los ángeles y los santos,, (La ,m,15)(Sol,,297)", sC: "pa"},
            { line: "cantamos tu gloria diciendo:, (La ,m,220)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SANTO, SANTO, SANTO, ", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "TRANSICIÓN, ", sC: "sp1", color: "#9D9580"},
            { line: "Santo eres en verdad, Señor,, ", sC: "nSpace", color: "#C24F4D"},
            { line: "fuente de toda santidad:, ", sC: "nSpace", color: "#C24F4D"},
            { line: "EPÍCLESIS. ORACIÓN CONSECRATORIA, ", sC: "sp1", color: "gray"},
            { line: "Santifica estos dones con la efusión, ", sC: "pa nSpace", color: "#C24F4D"},
            { line: "de tu Espíritu, de manera que sean para, ", sC: "nSpace", color: "#C24F4D"},
            { line: "nosotros Cuerpo y ✠ Sangre, ", sC: "nSpace", color: "#C24F4D"},
            { line: "de Jesucristo,nuestro Señor., ", sC: "nSpace", color: "#C24F4D"},
]}, // ULTIMA LINEA DEL CANTO: PLEGARIA EUCARÍSTICA II
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════════════╗
║           PLEGARIA EUCARÍSTICA II               ║
╚═════════════════════════════════════════════════╝  */
   {
        id: "plegariaeucaristicaiimodeloip2",
        tt: "Plegaria Eucarística Ii",
        title: "Plegaria Eucarística Ii",
        subtitle: "Modelo I",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "195",
        notes: "",
        mant: "No",
        audioSrc: "/audio/plegariaeucaristicaiimodeloip2.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=plegariaeucaristicaiimodeloip1",
        sig: "/resucito/src/index.html?canto=plegariaeucaristicaiimodeloip3",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "RELATO DE LA INSTITUCIÓN,", sC: "sp1", color: "#9D9580"},
            { line: "El cual, cuando iba a ser entregado a su Pasión,, (Re,m,21)", sC: "pa"},
            { line: "voluntariamente aceptada, tomó el pan,, ", sC: ""},
            { line: "y elevando los ojos a Ti, Padre, Padre,, ", sC: ""},
            { line: "pronunció la bendición,, (Fa,,10)", sC: ""},
            { line: "lo partió y lo dio a sus discípulos, diciendo:, (Sol,m,72)(Re,m,360)", sC: ""},
            { line: "Tomad y comed todos de él,, (La,7,262)", sC: ""},
            { line: "porque esto es mi Cuerpo,, (Re,m,91)", sC: ""},
            { line: "que será entregado por vosotros., (La,7,157)(Re,m,270)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Del mismo modo, acabada la cena,, (Re,m,20)", sC: ""},
            { line: "tomó el cáliz, lleno del fruto de la vid,, ", sC: ""},
            { line: "y elevando los ojos a Ti, Padre, Padre,, ", sC: ""},
            { line: "pronunció la bendición,, (Fa,,10)", sC: ""},
            { line: "lo pasó a sus discípulos, diciendo:, (Sol,m,71)(Re,m,274)", sC: ""},
            { line: "Tomad y bebed todos de él,, (La,7,255)", sC: ""},
            { line: "porque este es el cáliz de mi Sangre,, (Re,m,91)", sC: ""},
            { line: "Sangre de la alianza nueva y eterna,, ", sC: ""},
            { line: "que será derramada por muchos, (La,7,269)", sC: ""},
            { line: "para el perdón de los pecados., (Re,m,255)", sC: ""},
            { line: "Haced esto como mi memorial., (La,7,83)(Re,m,280)", sC: ""},
    ], lder: [
            { line: "ACLAMACIÓN,", sC: "sp1", color: "#9D9580"},
            { line: "Este es el sacramento de nuestra fe., (Sol,m,23)(La,7,339)", sC: "pa"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ANUNCIAMOS TU MUERTE, SEÑOR,, (Re,m,19)", sC: "ta as"},
            { line: "PROCLAMAMOS TU RESURRECCIÓN., (Sol,m,23)", sC: "as"},
            { line: "¡MARANA THÁ! ¡MARANA THÁ!, (La,7,126)(Sol,m,274)", sC: "as"},
            { line: "¡MARANA THÁ!, (La,7,126)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Ven, Señor Jesús!, (Re,m,19)", sC: "tc"},
            { line: "MEMORIAL Y OFRENDA,", sC: "sp1", color: "#9D9580"},
            { line: "Así, pues, Padre, al celebrar ahora, (Sol,,15)", sC: "pa"},
            { line: "el memorial de la muerte, ", sC: ""},
            { line: "y resurrección de tu Hijo,, (Mi,m,215)", sC: ""},
            { line: "te ofrecemos el pan de vida, (La,m,21)", sC: ""},
            { line: "y el cáliz de salvación,, (Mi,m,19)", sC: ""},
            { line: "y te damos gracias porque nos haces dignos, (La,m,19)(Mi,m,206)", sC: ""},
            { line: "de servirte en tu presencia., ", sC: ""},
            { line: "EPÍCLESIS, ", sC: "sp1", color: "#9D9580"},
            { line: "Te pedimos humildemente, (Sol,,13)", sC: ""},
            { line: "que el Espíritu Santo congregue en la unidad, (Si,m,15)", sC: ""},
            { line: "a cuantos participamos, (La,m,15)", sC: ""},
            { line: "del Cuerpo y Sangre de Cristo., (Mi,m,247)", sC: ""},
]}, // ULTIMA LINEA DEL CANTO: PLEGARIA EUCARÍSTICA II
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════════════╗
║           PLEGARIA EUCARÍSTICA II               ║
╚═════════════════════════════════════════════════╝  */
   {
        id: "plegariaeucaristicaiimodeloip3",
        tt: "Plegaria Eucarística Ii",
        title: "Plegaria Eucarística Ii",
        subtitle: "Modelo I",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "Me lodía adaptable para los prefacios de solemnidade s o de varios tiempos litúrgicos.",
        nCanURL: "",
        dbno: "194",
        notes: "",
        mant: "No",
        audioSrc: "/audio/plegariaeucaristicaiimodeloip3.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=plegariaeucaristicaiimodeloip2",
        sig: "/resucito/src/index.html?canto=plegariaeucaristicaiimodeloiip1",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Acuérdate, Señor, de tu Iglesia (Sol,,15)", sC: "pa"},
            { line: "extendida por toda la tierra; (Mi,m,228)", sC: ""},
            { line: "y con el Papa ... N/., con nuestro obispo ... N/., (La,m,15)(Mi,m,275)", sC: ""},
            { line: "N/", sC: "n1", color: "#C24F4D" },
            { line: "N/", sC: "n2", color: "#C24F4D" },
            { line: "y de todos los que en ella cuidan de tu pueblo,, (La,m,15)", sC: ""},
            { line: "llévala a su perfección por la caridad., (Sol,,15)(Si,m,195)(Mi,m,333)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Acuérdate también de nuestros hermanos, (Sol,,13)", sC: ""},
            { line: "que durmieron en la esperanza, (Si,m,20)", sC: ""},
            { line: "de la resurrección, ", sC: ""},
            { line: "y de todos los que han muerto, (La,m,19)", sC: ""},
            { line: "en tu misericordia; (Mi,m,132)", sC: ""},
            { line: "admítelos a contemplar la luz de tu rostro., (Sol,,13)(Si,m,212)(Mi,m,360)", sC: ""},
            { line: "CONMEMORACIÓN DE LOS SANTOS", sC: "sp1 space1943", color: "#9D9580"},
            { line: "Ten misericordia de todos nosotros,, (Sol,,15)(Mi,m,250)", sC: ""},
            { line: "y así, con María, la Virgen Madre de Dios,, (La,m,15)", sC: ""},
            { line: "su esposo San José, los apóstoles,(Mi,m,15)(La,m,250)", sC: ""},
            { line: "y cuantos vivieron en tu amistad, (Mi,m,15) ", sC: ""},
            { line: "a través de los tiempos", sC: ""},
            { line: "merezcamos, por tu Hijo Jesucristo,, (Sol,,15)", sC: ""},
            { line: "compartir la vida eterna, (Si,m,15)", sC: ""},
            { line: "y cantar tus alabanzas., (La,,15)(Mi,m,167) ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
    ], lder: [
            { line: "DOXOLOGÍA Y CONCLUSIÓN DE LA PLEGARIA EUCARÍSTICA", sC: "sp1", color: "#9D9580"},
            { line: "Por Cristo, con Cristo y en Cristo,(Sol,,15)", sC: "pa"},
            { line: "a ti, Dios Padre omnipotente, (Si,m,15)", sC: ""},
            { line: "en la unidad del Espíritu Santo, (La,m,15)", sC: ""},
            { line: "todo honor y toda gloria, (Mi,m,15)", sC: ""},
            { line: "por los siglos de los siglos., (Sol,,15)", sC: ""},
            { line: "AMÉN, AMÉN, AMÉN., (Sol,,15)(Si,m,101)(La,,135)(Mi,m,181)", sC: "ta as"},
            { line: "", sC: "space1941"}, // Espacio Generado para separar contenido

            { line: "Cuando el 'MEMORIAL y LA OFRENDA' se hace recitada,", sC: "sp3", color: "#9D9580"},
            { line: "puede cantarse la Doxología con la siguiente melodía:", sC: "sp3 space1942", color: "#9D9580"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Por Cristo, con Cristo y en Cristo,, (Sol,,15)(Re,7,272)", sC: "pa"},
            { line: "a ti, Dios Padre omnipotente,, (Sol,,235)", sC: ""},
            { line: "en la unidad del Espíritu Santo,, (Mi,m,15)(Si,7,250)", sC: ""},
            { line: "todo honor y toda gloria, (Mi,m,194)", sC: ""},
            { line: "por los siglos de los siglos., (Do,,12)(Si,7,210)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "AMÉN, AMÉN, AMÉN., (Sol,,13)", sC: "ta as"},
            { line: "AMÉN, AMÉN, AMÉN., (Mi,m,42)", sC: "as"},
            { line: "AMÉN, AMÉN, AMÉN., (Re,,35)(Sol,,176)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: PLEGARIA EUCARÍSTICA II
// SIGUIENTE CANTO DEBAJO
















//***************************************************** */
// Plegaria Completa
// Plegaria Eucaristica solo para Tablet y Celulares
/*
╔═════════════════════════════════════════════════╗
║           PLEGARIA EUCARÍSTICA II               ║
╚═════════════════════════════════════════════════╝  */
   {
        id: "plegariaeucaristicaiimodeloi",
        tt: "Plegaria Eucarística II",
        title: "Plegaria Eucarística II",
        subtitle: "Modelo I",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "Melodía adaptable para los prefacios de solemnidades o de varios tiempos litúrgicos.",
        nCanURL: "",
        dbno: "194",
        notes: "",
        mant: "No",
        audioSrc: "/audio/plegariaeucarísticaiimodeloi.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 4.5, incremento: 0.4 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=padrenuestro",
        sig: "/resucito/src/index.html?canto=plegariaeucaristicaiimodeloip2",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PREFACIO", sC: "sp1", color: "#9D9580"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor esté con vosotros., (Sol,,11)(La,m,211)", sC: "pa"},
            { line: "Y CON TU ESPÍRITU., (Sol,,12)(La ,m,142)", sC: "ta"},
            { line: "Levantemos el corazón., (Fa,,12)(Mi,,206)", sC: "pa"},
            { line: "LO TENEMOS LEVANTADO HACIA EL SEÑOR., (Fa,,10)(Mi,,393)", sC: "as"},
            { line: "Demos gracias al Señor, nuestro Dios., (La ,m,335)", sC: "ta"},
            { line: "A ES JUSTO Y NECESARIO., (Sol,,66)(La ,m,202)", sC: "as sb194"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En verdad es justo y necesario,, (La ,m,15)(Sol,,254)", sC: "pa"},
            { line: "es nuestro deber y salvación, (La ,m,251)", sC: ""},
            { line: "darte gracias,, (Do,,80)", sC: ""},
            { line: "siempre y en todo lugar,, (La ,m,213)", sC: ""},
            { line: "a ti, Padre Santo,, (Sol,,28)", sC: ""},
            { line: "por Jesucristo, tu Hijo amado., (La ,m,245)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Por Él, que es tu Palabra,, (Sol,,197)", sC: ""},
            { line: "hiciste todas las cosas., (La ,m,177)", sC: ""},
            { line: "Tú nos lo enviaste hecho hombre, (Do,,138)", sC: ""},
            { line: "por obra del Espíritu Santo,, (La ,m,219)", sC: ""},
            { line: "para que, nacido de María la Virgen,, (Sol,,297)", sC: ""},
            { line: "fuera nuestro Salvador y Redentor., (La ,m,285)", sC: ""},
            { line: "Él, en cumplimiento de tu voluntad,, (Fa,,11)(Mi,,315)", sC: ""},
            { line: "para destruir la muerte, (Fa,,15)", sC: "as"},
            { line: "y manifestar la resurrección,, (Mi,,247)", sC: "as"},
            { line: "extendió sus brazos en la cruz,, (La,m,74)(Sol,,269)", sC: ""},
            { line: "y así adquirió para ti, (Fa,,197)", sC: ""},
            { line: "un pueblo santo., (Mi,7,116)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MURIENDO, (La,,11)", sC: "pa as r1"},
            { line: "DESTRUYÓ NUESTRA MUERTE,, (Sol,,243)", sC: "as"},
            { line: "RESUCITANDO, (Fa,,91)", sC: "as"},
            { line: "RESTAURÓ NUESTRA VIDA., (Mi,,223)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Por eso, con los ángeles y los santos,, (La ,m,15)(Sol,,297)", sC: "pa"},
            { line: "cantamos tu gloria diciendo:, (La ,m,220)", sC: ""},

            { line: "SANTO, SANTO, SANTO...", sC: "sp5"},

            //************************************ */
            //      SANTO, SANTO, SANTO...
            //************************************ */

// SANTO PALOMERA 65 - COMPLETADO
            { type: "collapsible-block", id: "santopalomeras65", initialState: "collapsed", triggerLine: "SANTO Palomeras 65", sC: "Santo", color: "red", lines: [
            { line: "SANTO, SANTO, SANTO,, (Mi,,11)(Si,7,169)", sC: "ta as"},
            { line: "SANTO ES EL SEÑOR,, (Mi,,181)", sC: "as"},
            { line: "DIOS DEL UNIVERSO,, (Si,7,154)", sC: "as"},
            { line: "SANTO ES EL SEÑOR., (Mi,,180)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Llenos están los cielos, (Do,,11)", sC: "tc"},
            { line: "y la tierra de tu gloria., (Si,7,178)", sC: ""},
            { line: "Hosanna, hosanna, hosanna,, (Do,,11)", sC: ""},
            { line: "hosanna en las alturas., (Si7,,180)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "SANTO, SANTO, SANTO,, (Mi,,11)(Si,7,169)", sC: "ta as"},
            { line: "SANTO ES EL SEÑOR,, (Mi,,181)", sC: "as"},
            { line: "DIOS DEL UNIVERSO,, (Si,7,154)", sC: "as"},
            { line: "SANTO ES EL SEÑOR., (Mi,,180)", sC: "as"},

            { line: "Bendito es el que viene, (Mi,m,15)", sC: "tc"},
            { line: "en nombre del Señor,, (Si,7,15)", sC: ""},
            { line: "bendito es el que viene, ", sC: ""},
            { line: "en nombre del Señor., (Mi,m,15)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA EN LAS ALTURAS,, (Mi,m,15)", sC: "ta as"},
            { line: "BENDITO ES EL QUE VIENE,, (Si,7,219)", sC: "as"},
            { line: "BENDITO ES EL QUE VIENE, ", sC: "as"},
            { line: "EN NOMBRE DEL SEÑOR., (Mi,,215)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "SANTO, SANTO, SANTO,, (Mi,,11)(Si,7,169)", sC: "ta as"},
            { line: "SANTO ES EL SEÑOR,, (Mi,,181)", sC: "as"},
            { line: "DIOS DEL UNIVERSO,, (Si,7,154)", sC: "as"},
            { line: "SANTO ES EL SEÑOR., (Mi,,180)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: SANTO PALOMERAS 65 


// SANTO Melodía hebraica - COMPLETO
            { type: "collapsible-block", id: "SANTOMelodíahebraica", initialState: "collapsed", triggerLine: "SANTO Melodía hebraica", sC: "Santo", color: "red", lines: [
            { line: "SANTO, SANTO, SANTO,, (Mi,,11)(Si,7,169)", sC: "ta as"},
            { line: "SANTO ES EL SEÑOR,, (Mi,,181)", sC: "as"},
            { line: "DIOS DEL UNIVERSO,, (Si,7,154)", sC: "as"},
            { line: "SANTO ES EL SEÑOR., (Mi,,180)", sC: "as"},

            { line: "SANTO, ES SANTO, SANTO, ES SANTO;, (Re,m,23)", sC: "ta as"},
            { line: "SANTO, ES SANTO, SANTO, ES SANTO;, (Fa,,15)", sC: "as"},
            { line: "SANTO, ES SANTO; YAHVEH SEBAOTH., (Sol,m,24)(Re,m,326)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos y la tierra, (Re,m,20)(Sol,m,110)(Re,m,164)", sC: "tc"},
            { line: "están llenos de Ti., (Sol,m,24)(Re,m,163)", sC: ""},
            { line: "LOS CIELOS Y LA TIERRA, (Sol,m,129)(Re,m,189)", sC: "ta as"},
            { line: "ESTÁN LLENOS DE TI., (Sol,m,23)(Re,m,197)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hosanna en el cielo,, (Sol,m,104)(Re,m,165)", sC: "tc"},
            { line: "hosanna., (Sol,m,21)(Re,m,75)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA EN EL CIELO,, (Sol,m,122)(Re,m,187)", sC: "ta as"},
            { line: "HOSANNA., (Sol,m,21)(Re,m,90)", sC: "as"},

            { line: "SANTO, ES SANTO, SANTO, ES SANTO..., (Re,m,23)", sC: "ta as"},
            { line: "SANTO, ES SANTO, SANTO, ES SANTO;, (Fa,,15)", sC: "as"},
            { line: "SANTO, ES SANTO; YAHVEH SEBAOTH., (Sol,m,24)(Re,m,326)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Bendito el que viene,, (Re,m,21)(Sol,m,97)(Re,m,162)", sC: "tc"},
            { line: "en el nombre del Señor., (Sol,m,22)(Re,m,210)", sC: ""},
            { line: "A BENDITO EL QUE VIENE,, (Re,m,20)(Sol,m,123)(Re,m,208)", sC: "ta as"},
            { line: "EN EL NOMBRE DEL SEÑOR., (Sol,m,24)(Re,m,242)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hosanna en el cielo,, (Sol,m,104)(Re,m,165)", sC: "tc"},
            { line: "hosanna., (Sol,m,22)(Re,m,75)", sC: ""},
            { line: "HOSANNA EN EL CIELO,, (Sol,m,126)(Re,m,190)", sC: "ta as"},
            { line: "HOSANNA., (Sol,m,22)(Re,m,89)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "SANTO, ES SANTO, SANTO, ES SANTO..., (Re,m,23)", sC: "ta as"},
            { line: "SANTO, ES SANTO, SANTO, ES SANTO;, (Fa,,15)", sC: "as"},
            { line: "SANTO, ES SANTO; YAHVEH SEBAOTH., (Sol,m,24)(Re,m,326)", sC: "as"},


]}, // ULTIMA LINEA DEL CANTO: // SANTO Melodía hebraica

// SANTO Palestina 74 - PENDIENTE

            { type: "collapsible-block", id: "SANTOPalestina74", initialState: "collapsed", triggerLine: "SANTO Palestina 74", sC: "Santo", color: "red", lines: [
            { line: "SANTO, SANTO, SANTO,, (Re,m,22)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO,, (Sol,m,21)", sC: "as"},
            { line: "SANTO, SANTO, SANTO,, (La,,18)", sC: "as"},
            { line: "SANTO ES EL SEÑOR., (Sol,m,22)(La,,175)", sC: "as"},
            { line: "YAHVEH SEBAOTH,, (Sol,m,22)(La,,144)", sC: "as"},
            { line: "YAHVEH SEBAOTH., (Sol,m,21)(La,,143)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos, (Re,m,21)(Sol,m,74)", sC: "tc"},
            { line: "y la tierra, (Re,m,58)", sC: ""},
            { line: "están llenos,, (Sol,m,77)", sC: ""},
            { line: "están llenos de Ti., (La,,160)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA,, (Re,m,20)", sC: "ta as"},
            { line: "HOSANNA, HOSANNA., (La,,25)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (Re,m,21)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (La,,23)", sC: "as"},
            { line: "HOSANNA EN LO ALTO DEL CIELO,, (Sol,m,52)(La,,293)", sC: "as"},
            { line: "HOSANNA, HOSANNA., (Sol,m,49)(La,,209)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Bendito, (Re,m,21)(Sol,m,72)", sC: "tc"},
            { line: "es el que viene,, (Re,m,111)", sC: ""},
            { line: "en el nombre,, (Sol,m,65)", sC: ""},
            { line: "en el nombre del Señor., (La,,205)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA,, (Re,m,20)", sC: "ta as"},
            { line: "HOSANNA, HOSANNA., (La,,25)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (Re,m,21)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (La,,23)", sC: "as"},
            { line: "HOSANNA EN LO ALTO DEL CIELO,   (Sol,m,52)(La,m,293)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (Sol,m,49)(La,,209)", sC: "as"}, 

]}, // ULTIMA LINEA DEL CANTO: // SANTO Palestina 74


// SANTO Roma 77 - PENDIENTE
            { type: "collapsible-block", id: "SANTORoma77", initialState: "collapsed", triggerLine: "SANTO Roma 77", sC: "Santo", color: "red", lines: [
            
            { line: "SANTO, SANTO, SANTO, (La,m,18)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO. (Sol,,16)(La,m,173)", sC: "as r11"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos y la tierra, (La,m,21)(Sol,,63)(La,m,158)", sC: "tc"},
            { line: "están llenos, están llenos de Ti., (Sol,,75)(La,m,287)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "ta as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Sol,,157)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO. (Fa,,71)(Mi,,188)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Sol,,157)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO. (La,m,185)", sC: "as"},
            
            { line: "SANTO, SANTO, SANTO, (La,m,18)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO. (Sol,,16)(La,m,173)", sC: "as r11"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Bendito es el que viene,, (La,m,18)(Sol,,55)(La,m,189)", sC: "tc"},
            { line: "en el nombre, en el nombre del Señor., (Sol,,67)(La,m,346)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "ta as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Sol,,157)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,71)(Mi,,188)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "HOSANNA, HOSANNA, (Fa,,15)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,15)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,15)(Sol,,157)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (La,m,185)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "SANTO, SANTO, SANTO, (La,m,18)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO. (Sol,,16)(La,m,173)", sC: "as r11"},

]}, // ULTIMA LINEA DEL CANTO: // SANTO 1982

// SANTO 1982 - PENDIENTE
            { type: "collapsible-block", id: "SANTO1982", initialState: "collapsed", triggerLine: "SANTO 1982", sC: "Santo", color: "red", lines: [

            { line: "SANTO,SANTO,SANTO, (La,m,20)", sC: "ta as"},
            { line: "ES EL SEÑOR., (Sol,,13)(La,m,106)", sC: "as"},
            { line: "SANTO,SANTO,SANTO, (La,m,20)", sC: "as"},
            { line: "ES EL SEÑOR,, (Sol,,10)(La,m,106)", sC: "as"},
            { line: "DIOS DEL UNIVERSO., (Sol,,27)(La,m,150)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos y la tierra, (Fa,,13)(Mi,,157)", sC: "tc"},
            { line: "están llenos de tu Gloria., (Fa,,76)(Mi,,205)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA,, (La,m,19)", sC: "ta as"},
            { line: "HOSANNA,HOSANNA, (Re,m,22)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,71)(Mi,,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA,, (La,m,19)", sC: "as"},
            { line: "HOSANNA,HOSANNA, (Re,m,21)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,72)(Mi,,188)", sC: "as"},

            { line: "Bendito es el que viene, (La,m,21)", sC: "tc"},
            { line: "en el nombre del Señor,, (Re,m,72)(Mi,,211)", sC: ""},
            { line: "en el nombre del Señor., (Re,m,72)(Mi,,211)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA, (La,m,19)", sC: "ta as"},
            { line: "HOSANNA,HOSANNA, (Rem,,22)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,71)(Mi,,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA,, (La,m,19)", sC: "as"},
            { line: "HOSANNA,HOSANNA, (Rem,,21)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,72)(Mi,,188)", sC: "as"},

]}, // ULTIMA LINEA DEL CANTO: // SANTO 1982

// SANTO 1988  - COMPLETADO
            { type: "collapsible-block", id: "salmo_1988", initialState: "collapsed", triggerLine: "SANTO 1988", sC: "Santo", color: "red", lines: [
            { line: "", sC: ""}, // Espacio Generado para separar contenido
            { line: "Santo, Santo, Santo., (La,m,18)(Sol,,78)(La,m,152)", sC: "tc"},
            { line: "SANTO, SANTO, SANTO., (Sol,,84)(La,m,162)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos y la tierra, (La,m,19)(Sol,,150)", sC: "tc"},
            { line: "están llenos de tu Gloria., (La,m,15)", sC: ""},
            { line: "LOS CIELOS Y LA TIERRA, (Sol,,197)", sC: "ta as"},
            { line: "ESTÁN LLENOS DE TU GLORIA., (La,m,181)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hosanna en lo alto del Cielo., (Fa,,45)(Mi,,240)", sC: "tc"},
            { line: "HOSANNA EN LO ALTO DEL CIELO., (Fa,,46)(Mi,,288)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SANTO, SANTO, SANTO., (La,m,20)(Sol,,90)(La,m,173)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO., (Sol,,90)(La,m,175)", sC: "as"},

            { line: "Bendito es el que viene, (La,m,15)(Sol,,193)", sC: "tc"},
            { line: "en el nombre del Señor., (La,m,212)", sC: ""},
            { line: "BENDITO ES EL QUE VIENE, (Sol,,223)", sC: "ta as"},
            { line: "EN EL NOMBRE DEL SEÑOR., (La,m,244)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hosanna en lo alto del Cielo., (Fa,,38)(Mi,,242)", sC: "tc"},
            { line: "HOSANNA EN LO ALTO DEL CIELO., (Fa,,48)(Mi,,291)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SANTO, SANTO, SANTO., (La,m,20)(Sol,,90)(La,m,173)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO., (Sol,,90)(La,m,175)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Santo, Santo, Santo., (Fa,,14)(Mi,,143)", sC: "tc"},
            { line: "SANTO, SANTO, SANTO., (Fa,,13)(Mi,,163)", sC: "ta as"},
]}, // SANTO 1988





// FIN PROCLAMACIÓN DEL SANTO


            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "TRANSICIÓN, ", sC: "sp1", color: "#9D9580"},
            
            { line: "Santo eres en verdad, Señor,, ", sC: "nSpace atext", color: "#C24F4D"},
            { line: "fuente de toda santidad:, ", sC: "nSpace atext", color: "#C24F4D"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "EPÍCLESIS. ORACIÓN CONSECRATORIA, ", sC: "sp1", color: "gray"},
            { line: "Santifica estos dones con la efusión, ", sC: "pa nSpace atext", color: "#C24F4D"},
            { line: "de tu Espíritu, de manera que sean para, ", sC: "nSpace atext", color: "#C24F4D"},
            { line: "nosotros Cuerpo y ✠ Sangre, ", sC: "nSpace atext", color: "#C24F4D"},
            { line: "de Jesucristo,nuestro Señor., ", sC: "nSpace atext", color: "#C24F4D"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "RELATO DE LA INSTITUCIÓN,", sC: "sp1", color: "#9D9580"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El cual, cuando iba a ser entregado a su Pasión,, (Re,m,21)", sC: "pa"},
            { line: "voluntariamente aceptada, tomó el pan,, ", sC: ""},
            { line: "y elevando los ojos a Ti, Padre, Padre,, ", sC: ""},
            { line: "pronunció la bendición,, (Fa,,10)", sC: ""},
            { line: "lo partió y lo dio a sus discípulos, diciendo:, (Sol,m,72)(Re,m,360)", sC: ""},
            { line: "Tomad y comed todos de él,, (La,7,262)", sC: ""},
            { line: "porque esto es mi Cuerpo,, (Re,m,91)", sC: ""},
            { line: "que será entregado por vosotros., (La,7,157)(Re,m,270)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Del mismo modo, acabada la cena,, (Re,m,20)", sC: ""},
            { line: "tomó el cáliz, lleno del fruto de la vid,, ", sC: ""},
            { line: "y elevando los ojos a Ti, Padre, Padre,, ", sC: ""},
            { line: "pronunció la bendición,, (Fa,,10)", sC: ""},
            { line: "lo pasó a sus discípulos, diciendo:, (Sol,m,71)(Re,m,274)", sC: ""},
            { line: "Tomad y bebed todos de él,, (La,7,255)", sC: ""},
            { line: "porque este es el cáliz de mi Sangre,, (Re,m,91)", sC: ""},
            { line: "Sangre de la alianza nueva y eterna,, ", sC: ""},
            { line: "que será derramada por muchos, (La,7,269)", sC: ""},
            { line: "para el perdón de los pecados., (Re,m,255)", sC: ""},
            { line: "Haced esto como mi memorial., (La,7,83)(Re,m,280)", sC: ""},

            { line: "ACLAMACIÓN,", sC: "sp1", color: "#9D9580"},
            { line: "Este es el sacramento de nuestra fe., (Sol,m,23)(La,7,339)", sC: "pa"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ANUNCIAMOS TU MUERTE, SEÑOR,, (Re,m,19)", sC: "ta as"},
            { line: "PROCLAMAMOS TU RESURRECCIÓN., (Sol,m,23)", sC: "as"},
            { line: "¡MARANA THÁ! ¡MARANA THÁ!, (La,7,126)(Sol,m,274)", sC: "as"},
            { line: "¡MARANA THÁ!, (La,7,126)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Ven, Señor Jesús!, (Re,m,19)", sC: "tc"},
            { line: "MEMORIAL Y OFRENDA,", sC: "sp1", color: "#9D9580"},
            { line: "Así, pues, Padre, al celebrar ahora, (Sol,,15)", sC: "pa"},
            { line: "el memorial de la muerte, ", sC: ""},
            { line: "y resurrección de tu Hijo,, (Mi,m,215)", sC: ""},
            { line: "te ofrecemos el pan de vida, (La,m,21)", sC: ""},
            { line: "y el cáliz de salvación,, (Mi,m,19)", sC: ""},
            { line: "y te damos gracias porque nos haces dignos, (La,m,19)(Mi,m,206)", sC: ""},
            { line: "de servirte en tu presencia., ", sC: ""},
            { line: "EPÍCLESIS, ", sC: "sp1", color: "#9D9580"},
            { line: "Te pedimos humildemente, (Sol,,13)", sC: ""},
            { line: "que el Espíritu Santo congregue en la unidad, (Si,m,15)", sC: ""},
            { line: "a cuantos participamos, (La,m,15)", sC: ""},
            { line: "del Cuerpo y Sangre de Cristo., (Mi,m,247)", sC: ""},

            { line: "Acuérdate, Señor, de tu Iglesia (Sol,,15)", sC: "pa"},
            { line: "extendida por toda la tierra; (Mi,m,228)", sC: ""},
            { line: "y con el Papa ... N/., con nuestro obispo ... N/., (La,m,15)(Mi,m,275)", sC: ""},
            { line: "N/", sC: "n1", color: "#C24F4D" },
            { line: "N/", sC: "n2", color: "#C24F4D" },
            { line: "y de todos los que en ella cuidan de tu pueblo,, (La,m,15)", sC: ""},
            { line: "llévala a su perfección por la caridad., (Sol,,15)(Si,m,195)(Mi,m,333)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Acuérdate también de nuestros hermanos, (Sol,,13)", sC: ""},
            { line: "que durmieron en la esperanza, (Si,m,20)", sC: ""},
            { line: "de la resurrección, ", sC: ""},
            { line: "y de todos los que han muerto, (La,m,19)", sC: ""},
            { line: "en tu misericordia; (Mi,m,132)", sC: ""},
            { line: "admítelos a contemplar la luz de tu rostro., (Sol,,13)(Si,m,212)(Mi,m,360)", sC: ""},
            { line: "CONMEMORACIÓN DE LOS SANTOS", sC: "sp1 space1943", color: "#9D9580"},
            { line: "Ten misericordia de todos nosotros,, (Sol,,15)(Mi,m,250)", sC: ""},
            { line: "y así, con María, la Virgen Madre de Dios,, (La,m,15)", sC: ""},
            { line: "su esposo San José, los apóstoles,(Mi,m,15)(La,m,250)", sC: ""},
            { line: "y cuantos vivieron en tu amistad, (Mi,m,15) ", sC: ""},
            { line: "a través de los tiempos", sC: ""},
            { line: "merezcamos, por tu Hijo Jesucristo,, (Sol,,15)", sC: ""},
            { line: "compartir la vida eterna, (Si,m,15)", sC: ""},
            { line: "y cantar tus alabanzas., (La,,15)(Mi,m,167) ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "DOXOLOGÍA Y CONCLUSIÓN DE LA PLEGARIA EUCARÍSTICA", sC: "sp1 lx atext", color: "#9D9580"},

            { line: "Por Cristo, con Cristo y en Cristo,(Sol,,15)", sC: "pa"},
            { line: "a ti, Dios Padre omnipotente, (Si,m,15)", sC: ""},
            { line: "en la unidad del Espíritu Santo, (La,m,15)", sC: ""},
            { line: "todo honor y toda gloria, (Mi,m,15)", sC: ""},
            { line: "por los siglos de los siglos., (Sol,,15)", sC: ""},
            { line: "AMÉN, AMÉN, AMÉN., (Sol,,15)(Si,m,101)(La,,135)(Mi,m,181)", sC: "ta as"},
            { line: "", sC: "space1941"}, // Espacio Generado para separar contenido

            { line: "Cuando el 'MEMORIAL y LA OFRENDA' se hace recitada,", sC: "sp3 lx", color: "#9D9580"},
            { line: "puede cantarse la Doxología con la siguiente melodía:", sC: "sp3 space1942 lx", color: "#9D9580"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Por Cristo, con Cristo y en Cristo,, (Sol,,15)(Re,7,272)", sC: "pa"},
            { line: "a ti, Dios Padre omnipotente,, (Sol,,235)", sC: ""},
            { line: "en la unidad del Espíritu Santo,, (Mi,m,15)(Si,7,250)", sC: ""},
            { line: "todo honor y toda gloria, (Mi,m,194)", sC: ""},
            { line: "por los siglos de los siglos., (Do,,12)(Si,7,210)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "AMÉN, AMÉN, AMÉN., (Sol,,13)", sC: "ta as"},
            { line: "AMÉN, AMÉN, AMÉN., (Mi,m,42)", sC: "as"},
            { line: "AMÉN, AMÉN, AMÉN., (Re,,35)(Sol,,176)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

        ], lder: [
]}, // ULTIMA LINEA DEL CANTO: PLEGARIA EUCARÍSTICA II
// SIGUIENTE CANTO DEBAJO


//******************************************************** */

// SANTOS
/*
╔═════════════════════════════════════════════╗
║           SANTO PALOMERAS 65                ║
╚═════════════════════════════════════════════╝  */
   {
        id: "santopalomeras65",
        tt: "Santo Palomeras 65 ",
        title: "Santo",
        subtitle: "Palomeras 65",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "214",
        notes: "",
        mant: "No",
        audioSrc: "/audio/santopalomeras65.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=salmodiasparalaudes",
        sig: "/resucito/src/index.html?canto=santomelodiahebraica",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SANTO, SANTO, SANTO,, (Mi,,11)(Si,7,169)", sC: "ta as"},
            { line: "SANTO ES EL SEÑOR,, (Mi,,181)", sC: "as"},
            { line: "DIOS DEL UNIVERSO,, (Si,7,154)", sC: "as"},
            { line: "SANTO ES EL SEÑOR., (Mi,,180)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Llenos están los cielos, (Do,,11)", sC: "tc"},
            { line: "y la tierra de tu gloria., (Si,7,178)", sC: ""},
            { line: "Hosanna, hosanna, hosanna,, (Do,,11)", sC: ""},
            { line: "hosanna en las alturas., (Si7,,180)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SANTO, SANTO, SANTO,, (Mi,,11)(Si,7,169)", sC: "ta as", lines: [
            { line: "SANTO ES EL SEÑOR,, (Mi,,181)", sC: "as"},
            { line: "DIOS DEL UNIVERSO,, (Si,7,154)", sC: "as"},
            { line: "SANTO ES EL SEÑOR., (Mi,,180)", sC: "as"},  ]},
    ], lder: [
            { line: "Bendito es el que viene, (Mi,m,15)", sC: "tc"},
            { line: "en nombre del Señor,, (Si,7,15)", sC: ""},
            { line: "bendito es el que viene, ", sC: ""},
            { line: "en nombre del Señor., (Mi,m,15)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA EN LAS ALTURAS,, (Mi,m,15)", sC: "ta as"},
            { line: "BENDITO ES EL QUE VIENE,, (Si,7,219)", sC: "as"},
            { line: "BENDITO ES EL QUE VIENE, ", sC: "as"},
            { line: "EN NOMBRE DEL SEÑOR., (Mi,,215)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "SANTO, SANTO, SANTO,, (Mi,,11)(Si,7,169)", sC: "ta as", lines: [
            { line: "SANTO ES EL SEÑOR,, (Mi,,181)", sC: "as"},
            { line: "DIOS DEL UNIVERSO,, (Si,7,154)", sC: "as"},
            { line: "SANTO ES EL SEÑOR., (Mi,,180)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SANTO PALOMERAS 65 
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SANTO MELODÍA HEBRAICA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "santomelodiahebraica",
        tt: "Santo Melodía Hebraica",
        title: "Santo",
        subtitle: "Melodía hebraica ",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "215",
        notes: "",
        mant: "No",
        audioSrc: "/audio/santomelodiahebraica.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=santopalomeras65",
        sig: "/resucito/src/index.html?canto=santopalestina74",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SANTO, ES SANTO, SANTO, ES SANTO;, (Re,m,23)", sC: "ta as"},
            { line: "SANTO, ES SANTO, SANTO, ES SANTO;, (Fa,,15)", sC: "as"},
            { line: "SANTO, ES SANTO; YAHVEH SEBAOTH., (Sol,m,24)(Re,m,326)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos y la tierra, (Re,m,20)(Sol,m,110)(Re,m,164)", sC: "tc"},
            { line: "están llenos de Ti., (Sol,m,24)(Re,m,163)", sC: ""},
            { line: "LOS CIELOS Y LA TIERRA, (Sol,m,129)(Re,m,189)", sC: "ta as"},
            { line: "ESTÁN LLENOS DE TI., (Sol,m,23)(Re,m,197)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hosanna en el cielo,, (Sol,m,104)(Re,m,165)", sC: "tc"},
            { line: "hosanna., (Sol,m,21)(Re,m,75)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA EN EL CIELO,, (Sol,m,122)(Re,m,187)", sC: "ta as"},
            { line: "HOSANNA., (Sol,m,21)(Re,m,90)", sC: "as"},
    ], lder: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SANTO, ES SANTO, SANTO, ES SANTO..., (Re,m,23)", sC: "ta as", lines: [
            { line: "SANTO, ES SANTO, SANTO, ES SANTO;, (Fa,,15)", sC: "as"},
            { line: "SANTO, ES SANTO; YAHVEH SEBAOTH., (Sol,m,24)(Re,m,326)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Bendito el que viene,, (Re,m,21)(Sol,m,97)(Re,m,162)", sC: "tc"},
            { line: "en el nombre del Señor., (Sol,m,22)(Re,m,210)", sC: ""},
            { line: "A BENDITO EL QUE VIENE,, (Re,m,20)(Sol,m,123)(Re,m,208)", sC: "ta as"},
            { line: "EN EL NOMBRE DEL SEÑOR., (Sol,m,24)(Re,m,242)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hosanna en el cielo,, (Sol,m,104)(Re,m,165)", sC: "tc"},
            { line: "hosanna., (Sol,m,22)(Re,m,75)", sC: ""},
            { line: "HOSANNA EN EL CIELO,, (Sol,m,126)(Re,m,190)", sC: "ta as"},
            { line: "HOSANNA., (Sol,m,22)(Re,m,89)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SANTO, ES SANTO, SANTO, ES SANTO..., (Re,m,23)", sC: "ta as", lines: [
            { line: "SANTO, ES SANTO, SANTO, ES SANTO;, (Fa,,15)", sC: "as"},
            { line: "SANTO, ES SANTO; YAHVEH SEBAOTH., (Sol,m,24)(Re,m,326)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SANTO MELODÍA HEBRAICA
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           SANTO PALESTINA 74               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "santopalestina74",
        tt: "Santo Palestina 74",
        title: "Santo",
        subtitle: "Palestina 74",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "216",
        notes: "",
        mant: "No",
        audioSrc: "/audio/santopalestina74.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=santomelodiahebraica",
        sig: "/resucito/src/index.html?canto=santoroma77",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SANTO, SANTO, SANTO,, (Re,m,22)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO,, (Sol,m,21)", sC: "as"},
            { line: "SANTO, SANTO, SANTO,, (La,,18)", sC: "as"},
            { line: "SANTO ES EL SEÑOR., (Sol,m,22)(La,,175)", sC: "as"},
            { line: "YAHVEH SEBAOTH,, (Sol,m,22)(La,,144)", sC: "as"},
            { line: "YAHVEH SEBAOTH., (Sol,m,21)(La,,143)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos, (Re,m,21)(Sol,m,74)", sC: "tc"},
            { line: "y la tierra, (Re,m,58)", sC: ""},
            { line: "están llenos,, (Sol,m,77)", sC: ""},
            { line: "están llenos de Ti., (La,,160)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA,, (Re,m,20)", sC: "ta as"},
            { line: "HOSANNA, HOSANNA., (La,,25)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (Re,m,21)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (La,,23)", sC: "as"},
            { line: "HOSANNA EN LO ALTO DEL CIELO,, (Sol,m,52)(La,,293)", sC: "as"},
            { line: "HOSANNA, HOSANNA., (Sol,m,49)(La,,209)", sC: "as"},
    ], lder: [
            { line: "Bendito, (Re,m,21)(Sol,m,72)", sC: "tc"},
            { line: "es el que viene,, (Re,m,111)", sC: ""},
            { line: "en el nombre,, (Sol,m,65)", sC: ""},
            { line: "en el nombre del Señor., (La,,205)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HOSANNA, HOSANNA,, (Re,m,20)", sC: "ta as", lines: [
            { line: "HOSANNA, HOSANNA., (La,,25)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (Re,m,21)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (La,,23)", sC: "as"},
            { line: "HOSANNA EN LO ALTO DEL CIELO,   (Sol,m,52)(La,m,293)", sC: "as"},
            { line: "HOSANNA, HOSANNA,, (Sol,m,49)(La,,209)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SANTO PALESTINA 74
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           SANTO ROMA 77               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "santoroma77",
        tt: "Santo Roma 77",
        title: "Santo Roma 77",
        subtitle: "Roma 77",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "217",
        notes: "",
        mant: "No",
        audioSrc: "/audio/santoroma77.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=santopalestina74",
        sig: "/resucito/src/index.html?canto=santo1982",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SANTO, SANTO, SANTO, (La,m,18)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO. (Sol,,16)(La,m,173)", sC: "as r1"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos y la tierra, (La,m,21)(Sol,,63)(La,m,158)", sC: "tc"},
            { line: "están llenos, están llenos de Ti., (Sol,,75)(La,m,287)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "ta as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Sol,,157)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO. (Fa,,71)(Mi,,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Sol,,157)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO. (La,m,185)", sC: "as"},
    ], lder: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SANTO, SANTO, SANTO, (La,m,18)", sC: "ta as", lines: [
            { line: "SANTO, SANTO, SANTO. (Sol,,16)(La,m,173)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Bendito es el que viene,, (La,m,18)(Sol,,55)(La,m,189)", sC: "tc"},
            { line: "en el nombre, en el nombre del Señor., (Sol,,67)(La,m,346)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "ta as", lines: [
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,50)(Sol,,157)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,71)(Mi,,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA, (Fa,,15)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,15)(Mi,,157)", sC: "as"},
            { line: "HOSANNA, HOSANNA, (Fa,,15)(Sol,,157)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (La,m,185)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SANTO, SANTO, SANTO, (La,m,18)", sC: "ta as", lines: [
            { line: "SANTO, SANTO, SANTO. (Sol,,16)(La,m,173)", sC: "as r1"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SANTO ROMA 77
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           SANTO 1982               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "santo1982",
        tt: "Santo 1982",
        title: "Santo",
        subtitle: "1982",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "218",
        notes: "",
        mant: "No",
        audioSrc: "/audio/santo1982.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=santoroma77",
        sig: "/resucito/src/index.html?canto=santo1988",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SANTO,SANTO,SANTO, (La,m,20)", sC: "ta as"},
            { line: "ES EL SEÑOR., (Sol,,13)(La,m,106)", sC: "as"},
            { line: "SANTO,SANTO,SANTO, (La,m,20)", sC: "as"},
            { line: "ES EL SEÑOR,, (Sol,,10)(La,m,106)", sC: "as"},
            { line: "DIOS DEL UNIVERSO., (Sol,,27)(La,m,150)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos y la tierra, (Fa,,13)(Mi,,157)", sC: "tc"},
            { line: "están llenos de tu Gloria., (Fa,,76)(Mi,,205)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA,, (La,m,19)", sC: "ta as"},
            { line: "HOSANNA,HOSANNA, (Re,m,22)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,71)(Mi,,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA,, (La,m,19)", sC: "as"},
            { line: "HOSANNA,HOSANNA, (Re,m,21)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,72)(Mi,,188)", sC: "as"},
    ], lder: [
            { line: "Bendito es el que viene, (La,m,21)", sC: "tc"},
            { line: "en el nombre del Señor,, (Re,m,72)(Mi,,211)", sC: ""},
            { line: "en el nombre del Señor., (Re,m,72)(Mi,,211)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HOSANNA, HOSANNA, (La,m,19)", sC: "ta as", lines: [
            { line: "HOSANNA,HOSANNA, (Rem,,22)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,71)(Mi,,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HOSANNA, HOSANNA,, (La,m,19)", sC: "as"},
            { line: "HOSANNA,HOSANNA, (Rem,,21)", sC: "as"},
            { line: "EN LO ALTO DEL CIELO., (Fa,,72)(Mi,,188)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SANTO 1982
// SIGUIENTE CANTO DEBAJO


/*
╔════════════════════════════════════════════════════════╗
║           SANTO 1988               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "santo1988",
        tt: "Santo 1988",
        title: "Santo",
        subtitle: "1988",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "219",
        notes: "",
        mant: "No",
        audioSrc: "/audio/santo1988.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=santo1982",
        sig: "/resucito/src/index.html?canto=tedeum",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Santo, Santo, Santo., (La,m,18)(Sol,,78)(La,m,152)", sC: "tc"},
            { line: "SANTO, SANTO, SANTO., (Sol,,84)(La,m,162)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los cielos y la tierra, (La,m,19)(Sol,,150)", sC: "tc"},
            { line: "están llenos de tu Gloria., (La,m,15)", sC: ""},
            { line: "LOS CIELOS Y LA TIERRA, (Sol,,197)", sC: "ta as"},
            { line: "ESTÁN LLENOS DE TU GLORIA., (La,m,181)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hosanna en lo alto del Cielo., (Fa,,45)(Mi,,240)", sC: "tc"},
            { line: "HOSANNA EN LO ALTO DEL CIELO., (Fa,,46)(Mi,,288)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SANTO, SANTO, SANTO., (La,m,20)(Sol,,90)(La,m,173)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO., (Sol,,90)(La,m,175)", sC: "as"},
    ], lder: [
            { line: "Bendito es el que viene, (La,m,15)(Sol,,193)", sC: "tc"},
            { line: "en el nombre del Señor., (La,m,212)", sC: ""},
            { line: "BENDITO ES EL QUE VIENE, (Sol,,223)", sC: "ta as"},
            { line: "EN EL NOMBRE DEL SEÑOR., (La,m,244)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hosanna en lo alto del Cielo., (Fa,,38)(Mi,,242)", sC: "tc"},
            { line: "HOSANNA EN LO ALTO DEL CIELO., (Fa,,48)(Mi,,291)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SANTO, SANTO, SANTO., (La,m,20)(Sol,,90)(La,m,173)", sC: "ta as"},
            { line: "SANTO, SANTO, SANTO., (Sol,,90)(La,m,175)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Santo, Santo, Santo., (Fa,,14)(Mi,,143)", sC: "tc"},
            { line: "SANTO, SANTO, SANTO., (Fa,,13)(Mi,,163)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: SANTO 1988
// SIGUIENTE CANTO DEBAJO







// Aleluyas Segun Semana
/*
╔════════════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "ialeluyas22",
        tt: "Aleluya Interleccional Semana XXII",
        title: "Aleluya Interleccional Semana XXII",
        subtitle: "Modelo III",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "180",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aclamacionesalaoraciondelosfieles",
        sig: "/resucito/src/index.html?canto=aleluyapascual",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Aleluya, aleluya, aleluya., (Mi,m,21)(Re,,122)(Mi,m,219)", sC: "tc"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Re,,154)(Mi,m,271)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tomad sobre vosotros mi yugo y aprended de mí,, (Mi,m,21)(La,m,253)(Mi,m,468)", sC: "tc"},
            { line: "que soy manso y humilde de corazón,, (La,m,348)", sC: ""},
            { line: "y hallaréis descanso para vosotros,, (Mi,m,279)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALELUYA, ALELUYA, ALELUYA., (Mi,m,15)(Re,,144)(Mi,m,266)", sC: "ta as", lines: [
            { line: "ALELUYA, ALELUYA, ALELUYA., (Re,,160)(Mi,m,271)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA INTERLECCIONAL
// SIGUIENTE CANTO DEBAJO



] //LLAVE DE CIERRE DEL CANTO
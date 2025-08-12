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
        category: ["Precatecumenado", "Pascua", "Pentecostés"],
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
        category: ["PreCatecumenado", "Pascua", "Pentecostés", "Comunión"],
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
        category: ["PreCatecumenado", "Cuaresma", "Penitencial"],
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
        category: ["PreCatecumenado","Cuaresma","Antiguo Testamento"],
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
        category: ["PreCatecumenado","Cuaresma","Antiguo Testamento"],
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
        category: ["PreCatecumenado","Penitencial"],
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
        category: ["PreCatecumenado","Laudes", "Visperas","Comunión","Nuevo Testamento"],
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
╔════════════════════════════════════════════════════════════════╗
║                ABRAHAM               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "abraham",
        tt: "Abraham",
        title: "Abraham",
        subtitle: "Génesis 18,1–5 – Teofanía de Mambré",
        category: ["PreCatecumenado","Laudes","Visperas","Entrada","Antiguo Testamento"],
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
        category: ["PreCatecumenado","Pascua"],
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
        category: ["PreCatecumenado","Cuaresma","Antiguo Testamento","Penitencial"],
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
        category: ["PreCatecumenado","Niños","Navidad"],
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
╔════════════════════════════════════════════════════════════════╗
║                ALEGRÍA, HA NACIDO EL SALVADOR               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "alegriahanacidoelsalvador",
        tt: "Alegría, Ha Nacido El Salvador",
        title: "Alegría, Ha Nacido El Salvador",
        subtitle: "Villancico (Kiko Argüello)",
        category: ["PreCatecumenado","Adviento","Navidad"],
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
        category: ["PreCatecumenado","Laudes","Visperas"],
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
        category: ["PreCatecumenado","Cuaresma","Laudes", "Visperas","Antiguo Testamento"],
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
        category: ["PreCatecumenado","Cuaresma"],
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
        category: ["PreCatecumenado","Cuaresma","Nuevo Testamento"],
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
        category: ["PreCatecumenado","Virgen","Final","Nuevo Testamento"],
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
            { line: "Ave María,(Do,,10)(Mi,,77)(La,m,110)", sC: ""},
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
        category: ["PreCatecumenado","Cuaresma","Laudes/Visperas","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "22",
        notes: "",
        mant: "No",
        audioSrc: "/audio/avemariaii(1984).mp3",
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
        category: ["PreCatecumenado","Paz","Comunión","Final","Antiguo Testamento"],
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
        category: ["PreCatecumenado","Cuaresma","Laudes/Visperas","Antiguo Testamento"],
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
        category: ["PreCatecumenado","Cuaresma","Laudes/Visperas","Antiguo Testamento"],
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
        category: ["PreCatecumenado","Pascua"],
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
        category: ["PreCatecumenado","Penitencial"],
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
        category: ["PreCatecumenado","Virgen","Entrada","Final","Nuevo Testamento"],
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
        category: ["PreCatecumenado","Antiguo Testamento","Laudes"],
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
        category: ["PreCatecumenado","Cuaresma","Laudes/Visperas","Antiguo Testamento"],
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
╔════════════════════════════════════════════════════════════════╗
║                CÁNTICO DE LOS TRES JÓVENES               ║
╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "canticodelostresjovenes",
        tt: "Cántico De Los Tres Jóvenes",
        title: "Cántico De Los Tres Jóvenes",
        subtitle: "Daniel 3,57-58",
        category: ["PreCatecumenado","Laudes","Antiguo Testamento"],
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
        category: ["PreCatecumenado","Pascua","Pentecostes"],
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
        category: ["PreCatecumenado","Pascua","Pentecostes"],
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
        category: ["PreCatecumenado","Cuaresma"],
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
        category: ["PreCatecumenado","Pascua","Pentecostes","Comunión","Final"],
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
        category: ["PreCatecumenado","Paz"],
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
        category: ["PreCatecumenado","Pascua","Comunión","Antiguo Testamento"],
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
        category: ["PreCatecumenado","Fracción del Pan"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "40",
        notes: "",
        mant: "Si",
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
            { line: "¡Háblame: no pases, te ruego, sin hablarme., (Do,,15)(Si,7,379)", sC: ""},
            { line: "Hijo mío, Hijo mío y Dios mío!, (La,m,15)(Si,7,250)", sC: ""},
            { line: "¡HIJO MÍO, HIJO MÍO Y DIOS MÍO!, (La,m,15)(Si,7,250)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Nunca hubiera podido imaginar, (Mi,m,15)", sC: "tc"},
            { line: "que llegaría a verte en este estado,, (La,m,15)", sC: ""},
            { line: "nunca hubiera creído, ", sC: ""},
            { line: "que llegarían a tal punto de odio y de furor,, (Mi,m,15)", sC: ""},
            { line: "apresándote contra toda justicia., (Si,7,15)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Quisiera comprender! ¡Ay de mí!, (Do,,15)(La,m,250)", sC: "tc"},
            { line: "¡QUISIERA COMPRENDER! ¡AY DE MÍ!, (Do,,15)(La,m,250)", sC: "ta as"},
            { line: "¡Cómo es posible que la luz se apague!, (Si,7,15)", sC: "tc"},
            { line: "¡CÓMO ES POSIBLE QUE LA LUZ SE APAGUE!, (La,m,15)(Si,7,250)", sC: "ta as"},
    ], lder: [
            { line: "¡Cómo es posible que te claven en una cruz!, (La,m,15)(Si,7,250)", sC: "tc"},
            { line: "Hijo mío, Hijo mío y Dios mío!, (La,m,15)(Si,7,250)", sC: ""},
            { line: "¡HIJO MÍO, HIJO MÍO Y DIOS MÍO!»., (La,m,15)(Si,7,250)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«¿Por qué lloras, por qué lloras, madre mía?, (Mi,m,15)(La,m,250)", sC: "tc"},
            { line: "¿Por qué lloras, por qué lloras, madre mía?, (Mi,m,15)", sC: ""},
            { line: "¿Acaso no debería sufrir?, (La,m6,15)", sC: ""},
            { line: "¿Acaso no debo morir?, (Si,7,15)", sC: ""},
            { line: "Entonces, ¿cómo podría salvar a Adán?, (Do,,15)(Si,7,250)", sC: ""},
            { line: "Entonces, ¿cómo podrías ver a Eva, (La,m,15)", sC: ""},
            { line: "que vuelve a la vida?»., (Si,7,15)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "COMO OVEJA QUE VE CÓMO SE LLEVAN, (Mi,m,15)", sC: "ta as", lines: [
            { line: "SU CORDERITO AL MATADERO,, (La,m,15)", sC: "as"},
            { line: "MARÍA LO SEGUÍA CONSUMIDA DE DOLOR., (Mi,m,15)", sC: "as"},
            { line: "Y LE DECÍA: «¿DÓNDE TE LLEVAN, HIJO MÍO?, (La,m,15)", sC: "as"},
            { line: "¿CÓMO SE ACABA TAN PRONTO, ", sC: "as"},
            { line: "EL CURSO DE TU VIDA?, (Si,7,15)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Háblame: no pases, te ruego, sin hablarme,, (Do,,15)(Si,7,250)", sC: ""},
            { line: "Hijo mío, Hijo mío y Dios mío!, (La,m,15)(Si,7,250)", sC: ""},
            { line: "¡HIJO MÍO, HIJO MÍO Y DIOS MÍO!, (La,m,15)(Si,7,250)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: COMO OVEJA QUE VE
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
            { line: "TODO LO CREE,(Do,,127)", sC: "as"},
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
╔═════════════════════════════════════════════════╗
║           PLEGARIA EUCARÍSTICA II               ║
╚═════════════════════════════════════════════════╝  */
   {
        id: "plegariaeucaristicaiimodeloip1",
        tt: "Plegaria Eucarística Ii",
        title: "Plegaria Eucarística Ii",
        subtitle: "Modelo I",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "Melodía adaptable para los prefacios de solemnidade s o de varios tiempos litúrgicos.",
        nCanURL: "",
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
            { line: "y así adquirió para ti, (Fa,7,197)", sC: ""},
            { line: "un pueblo santo., (Mi,7,116)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MURIENDO, (Sol,,11)", sC: "pa as r1"},
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









] //LLAVE DE CIERRE DEL CANTO
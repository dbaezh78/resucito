/* Info del archivo en dbaezh.docx
resucito\src\data\Explicacion Cantos.docx

Generar espacio: \u200B   , lo que est'a entre la coma es el espacio que se generó

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
        /*      nCanURL: "/src/index.html?canto=cantodemoises1",*/

        dbno: "1",
        notes: "Este canto se usa en la liturgia de Pascua.",
        mant: "No",
        audioSrc: "https://audio.resucito.do/alavictimapascual.mp3",
        // Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        // Propiedades para navegación entre cantos
        ant: "/", // No hay canto anterior para el primero
        sig: "/src/index.html?canto=anadiedemosocasiondetropiezo", // URL del siguiente canto
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
        ant: "/src/index.html?canto=alavictimapascual",
        sig: "/src/index.html?canto=atilevantomisojos",
        nCan: "",
        nCanURL: "",
        dbno: "2",
        notes: "Este canto se usa en la liturgia de Pascua.",
        mant: "No",
        audioSrc: "https://audio.resucito.do/anadiedemosocasiondetropiezo.mp3",
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
        ant: "/src/index.html?canto=anadiedemosocasiondetropiezo",
        sig: "/src/index.html?canto=atisenorenmiclamorimploro",
        nCan: "",
        nCanURL: "",
        dbno: "3",
        notes: "Este canto se usa en la liturgia de Pascua.",
        mant: "No",
        audioSrc: "https://audio.resucito.do/atilevantomisojos.mp3",

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

            { line: "¡PIEDAD DE NOSOTROS, SEÑOR! (Re,m,86)(La,7,315)", sC:"mujeres as mt aleft"},
            { line: "¡PIEDAD DE NOSOTROS, SEÑOR! (Si♭,,86)(La,7,315)", sC:"hombres as aleft"},

            { line: "¡QUE DEMASIADO SE HAN BURLADO DE NOSOTROS (Re,m,130)(La,7,435)", sC:"mujeres as mt aleft"},
            { line: "QUE NUESTRA ALMA ESTÁ SACIADA DE DESPRECIOS! (Si♭,7,150)(La,7,456)", sC:"hombres as aleft"},

            { line: "¡DE LAS BURLAS DE LOS SATISFECHOS,(Re,m,100)(La,7,313)", sC:"mujeres as mt aleft"},
            { line: "DEL DESPRECIO DE LOS SOBERBIOS!(Si♭,7,119)(La,7,282)", sC:"hombres as aleft"},

            { line: "¡PIEDAD DE NOSOTROS, SEÑOR!, (Re,m,57)(La,7,286)", sC:"mujeres as mt ndb aleft"},
            { line: "¡PIEDAD DE NOSOTROS, SEÑOR!, (Si♭,7,57)(La,7,286)", sC:"hombres as aleft"},

            {   type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
                triggerLine: "A TI LEVANTO MIS OJOS (Re,m,16)(La,7,189)", sC: "mt as ta", lines: [
                    { line: "A TI QUE HABITAS EN EL CIELO. (Sol,m,28)(La,7,260)", sC: "as b2" },
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
        audioSrc: "https://audio.resucito.do/atisenorenmiclamorimploro.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=atilevantomisojos",
        sig: "/src/index.html?canto=atisenorlevantomialma",
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
        audioSrc: "https://audio.resucito.do/atisenorlevantomialma.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=atisenorenmiclamorimploro",
        sig: "/src/index.html?canto=atisenorsedebelaalabanzaension",
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
        audioSrc: "https://audio.resucito.do/atisenorsedebelaalabanzaension.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=atisenorlevantomialma",
        sig: "/src/index.html?canto=abbapadre",
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
        audioSrc: "https://audio.resucito.do/abbapadre.mp3",
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=atisenorsedebelaalabanzaension",
        sig: "/src/index.html?canto=abraham",
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
        audioSrc: "https://audio.resucito.do/abraham.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=abbapadre",
        sig: "/src/index.html?canto=aclamadalsenor",
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
        audioSrc: "https://audio.resucito.do/aclamadalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=abraham",
        sig: "/src/index.html?canto=aldespertar",
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
        audioSrc: "https://audio.resucito.do/aldespertar.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aclamadalsenor",
        sig: "/src/index.html?canto=alabadalsenorenelcielo",
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
        audioSrc: "https://audio.resucito.do/alabadalsenorenelcielo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aldespertar",
        sig: "/src/index.html?canto=alegriahanacidoelsalvador",
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

            { line: "", sC: "tc1"},

            { line: "Alabadlo, sol y luna;", sC: "ptop0 alabadlo"},
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
            { line: "\u200B     sobre el cielo y la tierra; ", sC: "ptop0 alabadlo"},
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
        audioSrc: "https://audio.resucito.do/alegriahanacidoelsalvador.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=alabadalsenorenelcielo",
        sig: "/src/index.html?canto=aleluyaalabadalsenor",
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
        audioSrc: "https://audio.resucito.do/aleluyaalabadalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },  // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=alegriahanacidoelsalvador",
        sig: "/src/index.html?canto=aleluyabendecidalsenor",
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
        audioSrc: "https://audio.resucito.do/aleluyabendecidalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aleluyaalabadalsenor",
        sig: "/src/index.html?canto=aleluyayallegoelreino",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ALELÚ, ALELÚ, ALE E LU U YA., (La,,10)(Si♭,,178)(La,,272)", sC: "niño as"},
            { line: "ALELÚ, ALELÚ, ALE E LU U YA., (Si♭,,180)(La,,271)", sC: "as r1"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Bendecid al Señor, bendecid al Señor,(Re,m,20)", sC: "niño"},
            { line: "vosotros los siervos del Señor., (La,7,266)", sC: ""},
            { line: "Bendecid al Señor, bendecid al Señor, ", sC: ""},
            { line: "vosotros que estáis en la casa del Señor., (Re,m,366)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Alzad a Él las manos, alzad a Él las manos, (Re,m,21)", sC: ""},
            { line: "y bendecid al Señor,(La,7,172)", sC: ""},
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
            { line: "VOSOTROS LOS SIERVOS DEL SEÑOR., (La,7,327)", sC: "as"},
            { line: "BENDECID AL SEÑOR, BENDECID AL SEÑOR,", sC: "as"},
            { line: "VOSOTROS QUE ESTÁIS EN LA CASA DEL SEÑOR., (Re,m,439)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "ALZAD A ÉL LAS MANOS, ALZAD A ÉL LAS MANOS, (Re,m,21)", sC: "as ta"} ,
            { line: "Y BENDECID AL SEÑOR,(La,7,172)", sC: "as"},
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
        audioSrc: "https://audio.resucito.do/aleluyayallegoelreino.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aleluyabendecidalsenor",
        sig: "/src/index.html?canto=alzaospuertas",
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
       triggerLine: "ALELUYA, ALELUYA, ALELUYA (Do,,15)(Mi,,149)(La,m,262)", sC: "as ta", lines: [
            { line: "ALELUYA, ALELUYA, ALELUYA. (Do,,53)(Mi,,149)(La,m,262)", sC: "as"},  ]},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Démosle gloria,(Do,,10)(Mi,,113)", sC: "tc"},
            { line: "han llegado las bodas., (La,m,170)", sC: ""},
            { line: "Démosle gloria,(Do,,10)(Mi,,112)", sC: ""},
            { line: "las bodas con nuestro Dios., (La,m,240)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ALELUYA, ALELUYA, ALELUYA., (Do,,15)(Mi,,149)(La,m,262)", sC: "as ta", lines: [
            { line: "ALELUYA, ALELUYA, ALELUYA., (Do,,53)(Mi,,149)(La,m,262)", sC: "as"},  ]},
    ], lder: [
            { line: "Bienaventurados, (Do,,10)", sC: "tc"},
            { line: "los invitados a bodas,(Mi,,10)", sC: ""},
            { line: "a las bodas del Cordero., (La,m,201)", sC: ""},
            { line: "Bienaventurados, (Do,,10)", sC: "mt"},
            { line: "los invitados a bodas,(Mi,,10)", sC: ""},
            { line: "a las bodas con el Señor., (La,m,222)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ALELUYA, ALELUYA, ALELUYA., (Do,,15)(Mi,,149)(La,m,262)", sC: "as ta", lines: [
            { line: "ALELUYA, ALELUYA, ALELUYA., (Do,,53)(Mi,,149)(La,m,262)", sC: "as"},  ]},
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
        audioSrc: "https://audio.resucito.do/alzaospuertas.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aleluyayallegoelreino",
        sig: "/src/index.html?canto=amenamenamen",
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
        audioSrc: "https://audio.resucito.do/amenamenamen.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=alzaospuertas",
        sig: "/src/index.html?canto=amoalsenor",
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
        audioSrc: "https://audio.resucito.do/amoalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=amenamenamen",
        sig: "/src/index.html?canto=aquedah",
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
        audioSrc: "https://audio.resucito.do/aquedah.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=amoalsenor",
        sig: "/src/index.html?canto=asihablaelamen",
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
        audioSrc: "https://audio.resucito.do/asihablaelamen.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aquedah",
        sig: "/src/index.html?canto=avemariai",
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
        audioSrc: "https://audio.resucito.do/avemariai.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=asihablaelamen",
        sig: "/src/index.html?canto=avemariaii(1984)",
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
        audioSrc: "https://audio.resucito.do/avemariaii.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=avemariai",
        sig: "/src/index.html?canto=babiloniacriminal",
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
        audioSrc: "https://audio.resucito.do/babiloniacriminal.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=avemariaii(1984)",
        sig: "/src/index.html?canto=balaam",
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
        audioSrc: "https://audio.resucito.do/balaam.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=babiloniacriminal",
        sig: "/src/index.html?canto=bendecirealsenorentodotiempo",
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
        audioSrc: "https://audio.resucito.do/bendecirealsenorentodotiempo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=balaam",
        sig: "/src/index.html?canto=bendicealmamiaayahveh",
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
            { line: "Gritan ellos, y el Señor les escucha, (Si♭,,77)(La,,291)", sC: ""},
            { line: "y los libra de todas sus angustias., (Si♭,,62)(La,,267)", sC: ""},
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
        audioSrc: "https://audio.resucito.do/bendicealmamiaayahveh.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
        desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=bendecirealsenorentodotiempo",
        sig: "/src/index.html?canto=benditaerestumaria",
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
        audioSrc: "https://audio.resucito.do/benditaerestumaria.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=bendicealmamiaayahveh",
        sig: "/src/index.html?canto=benditoeressenor",
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
        category: ["PreCatecumenado","Salmodias"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "28",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/benditoeressenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=benditaerestumaria",
        sig: "/src/index.html?canto=benditoseadios",
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
        audioSrc: "https://audio.resucito.do/benditoseadios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=benditoeressenor",
        sig: "/src/index.html?canto=benedictus",
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
        audioSrc: "https://audio.resucito.do/benedictus.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=benditoseadios",
        sig: "/src/index.html?canto=cantadadios",
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
        audioSrc: "https://audio.resucito.do/cantadadios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=benedictus",
        sig: "/src/index.html?canto=cantadalsenor",
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
        audioSrc: "https://audio.resucito.do/cantadalsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=cantadadios",
        sig: "/src/index.html?canto=canticodelostresjovenes",
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
        audioSrc: "https://audio.resucito.do/canticodelostresjovenes.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=cantadalsenor",
        sig: "/src/index.html?canto=cantodemoises",
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
        tt: "Canto de Moisés",
        title: "Canto de Moisés",
        subtitle: "Éxodo 15,1-18",
        category: ["PreCatecumenado","Pascua","Pentecostés","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "Version 2",
        nCanURL: "index.html?canto=cantodemoises1",
        dbno: "34",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/cantodemoises.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=canticodelostresjovenes",
        sig: "/src/index.html?canto=caritaschristiurgetnos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cantemos al Señor,, (Do,7,19)(Fa,,167)", sC: "tc"},
            { line: "cantemos al Señor,, (La,7,164)", sC: ""},
            { line: "que se cubrió de gloria,,(Re,7,188)", sC: ""},
            { line: "de gloria, de gloria,", sC: ""},
            { line: "precipitó en el mar, (Sol,7,161)", sC: ""},
            { line: "caballo y caballero. (Do,7,156)", sC: ""},
// ---------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "ta as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ. (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ---------------------------------------------------------------------------------------------------
            { line: "El Señor es un guerrero,,(Fa,,196)", sC: "tc"},
            { line: "su nombre es Yahveh., (La,7,187)", sC: ""},
            { line: "Precipitó en el mar a los valientes,(Re,7,167)", sC: ""},
            { line: "la flor del Faraón. (Sol,7,144)", sC: ""},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ. (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
    ], lder: [
            { line: "Tu diestra poderosa,", sC: "tc nSpace"},
            { line: "gloriosa por su fuerza, ", sC: "nSpace"},
            { line: "tu diestra, oh Señor, aplasta al enemigo,", sC: "nSpace"},
            { line: "aplasta al enemigo. ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ. (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
            { line: "El enemigo había dicho: ", sC: "nSpace"},
            { line: "«Les perseguiré y alcanzaré,", sC: "nSpace"},
            { line: "desnudaré la espada, se saciará mi alma,", sC: "nSpace"},
            { line: "los aniquilaré». ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ. (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ------------------------------------------------------------------------------------------------
            { line: "Soplaste con tu aliento ", sC: "nSpace"},
            { line: "y el mar los sepultó. ", sC: "nSpace"},
            { line: "Se hundieron como plomo ", sC: "nSpace"},
            { line: "en las aguas de la muerte,", sC: "nSpace"},
            { line: "en las aguas formidables. ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ. (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},  ]},
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
            { line: "CABALLO Y CABALLERO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR. (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ. (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
            { line: "Rescatas a tu pueblo,", sC: "nSpace"},
            { line: "lo llevas a tu casa., ", sC: "nSpace"},
            { line: "Los príncipes de Edom, se estremecen, ", sC: "nSpace"},
            { line: "al paso de Jacob. ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ. (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
            { line: "Lo llevas y lo plantas, ", sC: "nSpace"},
            { line: "en el lugar sagrado, ", sC: "nSpace"},
            { line: "sobre tu monte santo, el santuario, ", sC: "nSpace"},
            { line: "que tus manos prepararon. ", sC: "nSpace"},
// ------------------------------------------------------------------------------------------------
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_6", initialState: "collapsed",
       triggerLine: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "ta as", lines: [
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MI FUERZA Y MI CANCIÓN, (Fa,,229)", sC: "as"},
            { line: "ES EL SEÑOR., (La,7,110)", sC: "as"},
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ. (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO. ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
]}, // ULTIMA LINEA DEL CANTO: CANTO DE MOISÉS
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════════╗
║                CANTO DE MOISÉS               ║
╚══════════════════════════════════════════════╝  */
   {
        id: "cantodemoises1",
        tt: "Canto de Moisés",
        title: "Canto de Moisés",
        subtitle: "Éxodo 15,1-18",
        category: ["PreCatecumenado","Pascua","Pentecostés","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "34",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/cantodemoises.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=canticodelostresjovenes",
        sig: "/src/index.html?canto=caritaschristiurgetnos",
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
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
// ---------------------------------------------------------------------------------------------------
            { line: "El Señor es un guerrero,(Fa,,196)", sC: "tc"},
            { line: "su nombre es Yahveh., (La,7,187)", sC: ""},
            { line: "Precipitó en el mar a los valientes,, (Re,7,167)", sC: ""},
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
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
            { line: "Y YO LO ENSALZARÉ., (Sol,7,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PRECIPITÓ EN EL MAR, (Do,7,15)", sC: "as"},
            { line: "CABALLO Y CABALLERO,", sC: "as"},
            { line: "CABALLO Y CABALLERO., ", sC: "as"},  ]},
// ------------------------------------------------------------------------------------------------
    ], lder: [
            { line: "Tu diestra poderosa,", sC: "tc nSpace"},
            { line: "gloriosa por su fuerza,,", sC: "nSpace"},
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
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
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
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
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
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
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
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
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
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
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
            { line: "ÉL ES MI SALVACIÓN, ES MI DIOS,,(Re,7,179)", sC: "as"},
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
        audioSrc: "https://audio.resucito.do/caritaschristiurgetnos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=cantodemoises",
        sig: "/src/index.html?canto=carmen63",
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
        nCanURL: "//docs.resucito.do/Tagore La Cosecha.pdf",
        dbno: "36",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/carmen63.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=caritaschristiurgetnos",
        sig: "/src/index.html?canto=comocondenadosamuerte",
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
       triggerLine: "¡GANARÉ MI REINO, (Re,,12)(La,,149)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/comocondenadosamuerte.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=carmen63",
        sig: "/src/index.html?canto=comoesmaravilloso",
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
       triggerLine: "COMO CONDENADOS A MUERTE, (Sol,,11)", sC: "ta as", lines: [
            { line: "COMO CONDENADOS A MUERTE., (La,m,19)", sC: "as"},
            { line: "COMO CONDENADOS A MUERTE,, (Sol,,11)", sC: "as"},
            { line: "COMO CONDENADOS A MUERTE., (La,m,19)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "HEMOS VENIDO A SER, (La,m,13)(Sol,,196)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/comoesmaravilloso.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=comocondenadosamuerte",
        sig: "/src/index.html?canto=comolacierva",
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
        audioSrc: "https://audio.resucito.do/comolacierva.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=comoesmaravilloso",
        sig: "/src/index.html?canto=comoovejaqueve",
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
        audioSrc: "https://audio.resucito.do/comoovejaqueve.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=comolacierva",
        sig: "/src/index.html?canto=consoladamipueblo",
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
        audioSrc: "https://audio.resucito.do/consoladamipueblo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=comoovejaqueve",
        sig: "/src/index.html?canto=cristoeslaluz",
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
        audioSrc: "https://audio.resucito.do/cristoeslaluz.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=consoladamipueblo",
        sig: "/src/index.html?canto=cuandoelsenor",
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
        audioSrc: "https://audio.resucito.do/cuandoelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=cristoeslaluz",
        sig: "/src/index.html?canto=cuandoisraelsaliodeegipto",
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

       triggerLine: "PORQUE AL IR, (Sol,,127)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/cuandoisraelsaliodeegipto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=cuandoelsenor",
        sig: "/src/index.html?canto=dayenu",
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
        audioSrc: "https://audio.resucito.do/dayenu.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=cuandoisraelsaliodeegipto",
        sig: "/src/index.html?canto=dayenu2",
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
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera librado de todos los ídolos, (Mi,m,15)(La,m,175)(Si,7,350)", sC: ""},
            { line: "y no nos hubiera dado todas sus riquezas:, (Mi,m,358)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera dado todas sus riquezas, (Re,,161)(Do,,303)", sC: ""},
            { line: "y no hubiera abierto el mar para nosotros:, (Si,7,158)(Mi,m,357)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
    ], lder: [
            { line: "Si hubiera abierto el mar para nosotros, (Mi,m,15)(La,m,136)(Si,7,333)", sC: "tc"},
            { line: "y no hubiera hundido a nuestros opresores:, (Mi,m,376)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si hubiera hundido a nuestros opresores, (Re,,150)(Do,,353)", sC: "tc"},
            { line: "y no nos hubiera abierto un camino en el desierto:, (Si,7,199)(Mi,m,440)", sC: "full"},
            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera abierto un camino en el desierto, (Mi,m,11)(La,m,175)(Si,7,423)", sC: "tc"},
            { line: "y no nos hubiera nutrido con el pan de la vida:, (Mi,m,411)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_6", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera nutrido con el pan de la vida, (Re,,10)(Do,,184)", sC: "tc"},
            { line: "y no nos hubiera dado el día del Señor:, (Si,7,183)(Mi,m,351)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_7", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera dado el día del Señor, (Mi,m,20)(La,m,162)(Si,7,331)", sC: "tc"},
            { line: "y no nos hubiera sellado una nueva Alianza:, (Mi,m,376)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_8", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si hubiera hecho con nosotros una nueva Alianza, (Re,,245)(Do,,428)", sC: "tc"},
            { line: "y no nos hubiera hecho entrar en su Iglesia:, (Si,7,182)(Mi,m,376)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_9", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
            { line: "NOS HABRÍA BASTADO., (Mi,m,187)", sC: "as"},
            { line: "DAYENÚ, DAYENÚ, DAYENÚ., (Re,,78)(Do,,165)(Mi,m,250)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si nos hubiera hecho entrar en su Iglesia, (Mi,m,20)(La,m,163)(Si,7,358)", sC: "tc"},
            { line: "y no hubiera construido en nosotros su templo:, (Mi,m,393)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_10", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/dayenu.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=dayenu",
        sig: "/src/index.html?canto=deprofundis",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Si hubiera construido en nosotros su templo, (Re,,178)(Do,,366)", sC: "tc"},
            { line: "y no lo hubiera llenado de su Santo Espíritu:, (Si,7,186)(Mi,m,375)", sC: ""},
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESO NOS HABRÍA BASTADO, (Re,,11)(Do,,228)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/deprofundis.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=dayenu",
        sig: "/src/index.html?canto=decidlealosdecorazoncansado",
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
        audioSrc: "https://audio.resucito.do/decidlealosdecorazoncansado.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=deprofundis",
        sig: "/src/index.html?canto=delantedelosangeles",
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
        audioSrc: "https://audio.resucito.do/delantedelosangeles.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=decidlealosdecorazoncansado",
        sig: "/src/index.html?canto=diadereposo",
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
        audioSrc: "https://audio.resucito.do/diadereposo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=delantedelosangeles",
        sig: "/src/index.html?canto=diceelsenoramisenor",
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
        audioSrc: "https://audio.resucito.do/diceelsenoramisenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=diadereposo",
        sig: "/src/index.html?canto=dichosoelhombre",
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
       triggerLine: "DICE EL SEÑOR A MI SEÑOR, (Mi,,10)", sC: "ta as", lines: [
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
       triggerLine: "DICE EL SEÑOR A MI SEÑOR, (Mi,,10)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/dichosoelhombre.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=diceelsenoramisenor",
        sig: "/src/index.html?canto=elcombateescatologico",
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
        audioSrc: "https://audio.resucito.do/elcombateescatologico.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=dichosoelhombre",
        sig: "/src/index.html?canto=elespiritudelsenorestasobremi",
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
        tt: "El Espíritu del Señor Está sobre mí",
        title: "El Espíritu del Señor Está sobre mí",
        subtitle: "Lucas 4,18 – Isaías 61,1-3",
        category: ["Precatecumenado","Pascua","Pentecostés","Entrada","Comunión","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "54",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/elespiritudelsenorestasobremi.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elcombateescatologico",
        sig: "/src/index.html?canto=eljacaldelospastores",
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
       triggerLine: "EL ESPÍRITU DEL SEÑOR ESTÁ SOBRE MÍ, (La,m,19)(Mi,,215)(La,m,388)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/eljacaldelospastores.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elespiritudelsenorestasobremi",
        sig: "/src/index.html?canto=ellagarero",
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
       triggerLine: "LLÉVAME EN POS DE TI, SALGAMOS (Re,m,21)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/ellagarero.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=eljacaldelospastores",
        sig: "/src/index.html?canto=elmesiasleon",
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
        audioSrc: "https://audio.resucito.do/elmesiasleon.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ellagarero",
        sig: "/src/index.html?canto=elneciopiensaquediosnoexiste",
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
       triggerLine: "EL MESÍAS, LEÓN PARA VENCER, (La,m,22)(Mi,,250)", sC: "ta as", lines: [
            { line: "SE HIZO CORDERO PARA SUFRIR., (La,m,301)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y descendió a los infiernos, (Do,,11)(Mi,,208)", sC: "tc"},
            { line: "en busca de la oveja perdida., (Fa,,43)(Mi,,246)", sC: ""},
            { line: "Y con ella subió al Cielo,, (Re,m,19)(Mi,,201)", sC: ""},
            { line: "y la hizo entrar en la casa del Padre., (Fa,,50)(Mi,,303)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EL MESÍAS, LEÓN PARA VENCER, (La,m,22)(Mi,,250)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/elneciopiensaquediosnoexiste.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elmesiasleon",
        sig: "/src/index.html?canto=elpuebloquecaminabaenlastinieblas",
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
        audioSrc: "https://audio.resucito.do/elpuebloquecaminabaenlastinieblas.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elneciopiensaquediosnoexiste",
        sig: "/src/index.html?canto=elsenoranunciaunanoticia",
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
        audioSrc: "https://audio.resucito.do/elsenoranunciaunanoticia.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elpuebloquecaminabaenlastinieblas",
        sig: "/src/index.html?canto=elsenoresmipastor",
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
       triggerLine: "EL SEÑOR ANUNCIA UNA NOTICIA, (Sol,,14)(Mi,m,292)", sC: "ta as", lines: [
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
       triggerLine: "EL SEÑOR ANUNCIA UNA NOTICIA, (Sol,,15)(Mi,m,250)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/elsenoresmipastor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elsenoranunciaunanoticia",
        sig: "/src/index.html?canto=elsenormehadado",
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
       triggerLine: "EL SEÑOR ES MI PASTOR, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
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
       triggerLine: "EL SEÑOR ES MI PASTOR, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
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
       triggerLine: "EL SEÑOR ES MI PASTOR, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
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
       triggerLine: "EL SEÑOR ES MI PASTOR, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
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
       triggerLine: "EL SEÑOR ES MI PASTOR, (La,m,19)(Fa,,217)", sC: "ta as", lines: [
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
        tt: "El Señor me ha dado",
        title: "El Señor me ha dado",
        subtitle: "Isaías 50,4-10  - Tercer canto del Siervo de Yahveh",
        category: ["Precatecumenado","Penitencial","Fracción Del Pan","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "62",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/elsenormehadado.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elsenoresmipastor",
        sig: "/src/index.html?canto=elielilamasabactani",
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
       triggerLine: "CERCA ESTÁS, CERCA ESTÁS TÚ, (Re,,10)(Fa#,m,297)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/elielilamasabactani.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 5, incremento: 0.5 }, // Para celular
            tablet: { velocidad: 3, incremento: 0.4 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elsenormehadado",
        sig: "/src/index.html?canto=enmediodeaquelgentio",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ELÍ, ELÍ, LAMÁ SABACTANÍ., (Mi,m,15)(La,m,125)(Mi,m,251)", sC: "ta as"},
            { line: "DIOS MÍO, DIOS MÍO, ", sC: "as"},
            { line: "¿POR QUÉ ME HAS ABANDONADO?, (La,m,91)(Mi,m,292)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "¡Qué lejos te siento de mis gritos!, (Si,7,15)", sC: "tc ptop00"},
            { line: "De día clamo, y no respondes,", sC: "ptop00"},
            { line: "grito de noche, y no hay reposo para mí.,(Mi,m,372) ", sC: "ptop00"},
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ELÍ, ELÍ, LAMÁ SABACTANÍ, (Mi,m,15)(La,m,125)(Mi,m,251)", sC: "ta as", lines: [
            { line: "DIOS MÍO, DIOS MÍO, ", sC: "as"},
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
            { line: "desprecio de la gente, asco del pueblo, ", sC: "ptop00"},
            { line: "todos los que me ven de mí se ríen, ", sC: "ptop00"},
            { line: "menean la cabeza y dicen: ", sC: "ptop00"},
            { line: "«Se confió a Dios, ¡que él lo libre,", sC: "ptop00"},
            { line: "que él le salve, si tanto dice que le ama!»,  (Mi,m,351)", sC: "ptop00"},
            { line: "Sí, que tú me amas, sí, que tú me quieres,, (La,m,358)", sC: ""},

            { line: "en el seno de mi madre me formaste;, (Mi,m,319)", sC: ""},
            { line: "cuando me dio a luz ya me ofreció a ti,, (Si,7,183)", sC: ""},
            { line: "desde el vientre de mi madre tú ya eras mi Dios., (Mi,m,436)", sC: "ptop00"},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ELÍ, ELÍ, LAMÁ SABACTANÍ, (Mi,m,15)(La,m,125)(Mi,m,251)", sC: "ta as", lines: [
            { line: "DIOS MÍO, DIOS MÍO, ", sC: "as"},
            { line: "¿POR QUÉ ME HAS ABANDONADO?, (La,m,91)(Mi,m,292)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Soy agua sucia que se tira,, (Si,7,15)", sC: "tc "},
            { line: "todos mis huesos se dislocan, ", sC: "ptop00"},
    ], lder: [
            { line: "mi corazón como cera, se derrite en mis entrañas.", sC: "font15"},
            { line: "Mi paladar está seco como teja,", sC: "ptop00"},
            { line: "y mi lengua está pegada a la garganta. (Mi,m,333)", sC: "ptop00"},

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ELÍ, ELÍ, LAMÁ SABACTANÍ, (Mi,m,15)(La,m,125)(Mi,m,251)", sC: "ta as", lines: [
            { line: "DIOS MÍO, DIOS MÍO, ", sC: "as"},
            { line: "¿POR QUÉ ME HAS ABANDONADO?, (La,m,91)(Mi,m,292)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Perros innumerables me rodean,, (Si,7,15)", sC: "tc"},
            { line: "una banda de malhechores me acomete,, ", sC: "ptop00"},
            { line: "taladran mis manos y mis pies. ", sC: "ptop00"},
            { line: "Se pueden contar mis huesos; ", sC: "ptop00"},
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
        audioSrc: "https://audio.resucito.do/enmediodeaquelgentio.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elielilamasabactani",
        sig: "/src/index.html?canto=enunanocheoscura",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EN MEDIO DE AQUEL GENTÍO,, (La,m,21)", sC: "tc as"},
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
       triggerLine: "EN MEDIO DE AQUEL GENTÍO, (La,m,21)", sC: "ta as", lines: [
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
       triggerLine: "EN MEDIO DE AQUEL GENTÍO, (La,m,21)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/enunanocheoscura.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=enmediodeaquelgentio",
        sig: "/src/index.html?canto=eresdignodetomarellibro",
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
        audioSrc: "https://audio.resucito.do/eresdignodetomarellibro.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=enunanocheoscura",
        sig: "/src/index.html?canto=ereshermoso",
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
        audioSrc: "https://audio.resucito.do/ereshermoso.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=eresdignodetomarellibro",
        sig: "/src/index.html?canto=espaciente",
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
        audioSrc: "https://audio.resucito.do/espaciente.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ereshermoso",
        sig: "/src/index.html?canto=escondemeenloocultodetutienda",
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
       triggerLine: "ES PACIENTE, ES BENIGNO, (La,m,19)", sC: "ta as", lines: [
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
       triggerLine: "ES PACIENTE, ES BENIGNO, (La,m,19)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/escondemeenloocultodetutienda.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=espaciente",
        sig: "/src/index.html?canto=escuchadislaslejanas",
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
╔═════════════════════════════════════════════════╗
║           ESCUCHAD, ISLAS LEJANAS               ║
╚═════════════════════════════════════════════════╝  */
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
        audioSrc: "https://audio.resucito.do/escuchadislaslejanas.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=escondemeenloocultodetutienda",
        sig: "/src/index.html?canto=esteeseldiaenqueactuoelsenor",
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
            { line: "SE PONDRÁN EN PIE. ", sC: "as r1"},
            { line: "LOS PRÍNCIPES DE LA TIERRA, (Fa#,m,75)", sC: "as"},
            { line: "SE INCLINARÁN,, (Sol,,135)", sC: "as"},
            { line: "YO TE HE ELEGIDO, ", sC: "as"},
            { line: "TE HE ELEGIDO., (Fa#,,111)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En el día favorable te ayudaré,, (Re,,11)", sC: "tc"},
            { line: "en el día de la muerte te asistiré,, (Fa#,m,75)(Sol,,302)", sC: ""},
            { line: "pues te he elegido, ", sC: ""},
            { line: "como alianza a las naciones., (Fa#,,233)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TE VERÁN LOS REYES, (Re,,10)", sC: "ta as", lines: [
            { line: "SE PONDRÁN EN PIE. ", sC: "as r1"},
            { line: "LOS PRÍNCIPES DE LA TIERRA, (Fa#,m,75)", sC: "as"},
            { line: "SE INCLINARÁN,, (Sol,,135)", sC: "as"},
            { line: "YO TE HE ELEGIDO, ", sC: "as"},
            { line: "TE HE ELEGIDO., (Fa#,,111)", sC: "as"},  ]},
    ], lder: [
            { line: "Dirás a los prisioneros: «Salid»;, (Re,,12)", sC: "tc"},
            { line: "dirás a los ciegos: «Mirad»;, (Fa#,m,27)(Sol,,217)", sC: ""},
            { line: "conducirás a los pueblos, ", sC: ""},
            { line: "por el camino de la vida., (Fa#,,200)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "TE VERÁN LOS REYES, (Re,,10)", sC: "ta as", lines: [
            { line: "SE PONDRÁN EN PIE. ", sC: "as r1"},
            { line: "LOS PRÍNCIPES DE LA TIERRA, (Fa#,m,75)", sC: "as"},
            { line: "SE INCLINARÁN,, (Sol,,135)", sC: "as"},
            { line: "YO TE HE ELEGIDO, ", sC: "as"},
            { line: "TE HE ELEGIDO. (Fa#,,111)", sC: "as"},  ]},
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
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "TE VERÁN LOS REYES, (Re,,10)", sC: "ta as", lines: [
            { line: "SE PONDRÁN EN PIE. ", sC: "as r1"},
            { line: "LOS PRÍNCIPES DE LA TIERRA, (Fa#,m,75)", sC: "as"},
            { line: "SE INCLINARÁN,, (Sol,,135)", sC: "as"},
            { line: "YO TE HE ELEGIDO, ", sC: "as"},
            { line: "TE HE ELEGIDO. (Fa#,,111)", sC: "as"},  ]},
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
        audioSrc: "https://audio.resucito.do/esteeseldiaenqueactuoelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=escuchadislaslejanas",
        sig: "/src/index.html?canto=esteeselmandamientomio",
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
            { line: "SU MISERICORDIA., (Mi,,129)", sC: "as ab8"},  ]},

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
       triggerLine: "No he de morir...    ...EN LA MUERTE  (La,m,19)", sC: "tc as", lines: [

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
       triggerLine: "No he de morir...    ...EN LA MUERTE  (La,m,19)", sC: "tc as", lines: [

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
        audioSrc: "https://audio.resucito.do/esteeselmandamientomio.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=esteeseldiaenqueactuoelsenor",
        sig: "/src/index.html?canto=evenushalomalejem",
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
        audioSrc: "https://audio.resucito.do/evenushalomalejem.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=esteeselmandamientomio",
        sig: "/src/index.html?canto=extiendomismanos",
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
        audioSrc: "https://audio.resucito.do/extiendomismanos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=evenushalomalejem",
        sig: "/src/index.html?canto=exultadjustosenelsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "EXTIENDO MIS MANOS,, (Re,,10)(Si,m,86)(Sol,,171)", sC: "at as "},
            { line: "EXTIENDO MIS MANOS,, (Mi,,50)(La,,170)", sC: "as r1"},
            { line: "Y GRITO AL SEÑOR,, (Sol,,50)(Re,,161)", sC: "as"},
            { line: "Y GRITO AL SEÑOR., (La,,50)(Re,,161)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Abbá, Padre mío,, (Fa#,,15)", sC: "tc"},
            { line: "Abbá, Padre mío., (Sol,,12)(Fa#,,145)", sC: ""},
            { line: "En tus manos encomiendo mi espíritu,, (Mi,,11)(La,,326)", sC: ""},
            { line: "en tus manos encomiendo mi espíritu., (Sol,,15)(Re,,88)(La,,215)(Re,,328)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EXTIENDO MIS MANOS, (Re,,10)(Si,m,86)(Sol,,171)", sC: "ta as", lines: [
            { line: "EXTIENDO MIS MANOS,, (Mi,,50)(La,,170)", sC: "as r1"},
            { line: "Y GRITO AL SEÑOR,, (Sol,,50)(Re,,161)", sC: "as"},
            { line: "Y GRITO AL SEÑOR., (La,,50)(Re,,161)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque el extender las manos, (Fa#,,15)(Mi,,70)", sC: "tc"},
            { line: "es el signo de su Cruz,, (La,,186)", sC: ""},
            { line: "y el estar derecho, (Sol,,12)(Re,,127)", sC: ""},
            { line: "es el leño alzado,, (La,,125)", sC: ""},
            { line: "es el leño alzado., (Re,,125)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "EXTIENDO MIS MANOS, (Re,,10)(Si,m,86)(Sol,,171)", sC: "ta as", lines: [
            { line: "EXTIENDO MIS MANOS,, (Mi,,50)(La,,170)", sC: "as r1"},
            { line: "Y GRITO AL SEÑOR,, (Sol,,50)(Re,,161)", sC: "as"},
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
        audioSrc: "https://audio.resucito.do/exultadjustosenelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=extiendomismanos",
        sig: "/src/index.html?canto=felicidadparaelhombre",
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
       triggerLine: "EXULTAD, JUSTOS, EN EL SEÑOR, (Sol,,14)(Mi,m,286)", sC: "ta as", lines: [
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
       triggerLine: "EXULTAD, JUSTOS, EN EL SEÑOR, (Sol,,14)(Mi,m,286)", sC: "ta as", lines: [
            { line: "DE LOS SANTOS ES PROPIA LA ALABANZA., (Do,,97)(Sol,,359)", sC: "as"},
            { line: "DAD GRACIAS AL SEÑOR CON LA CÍTARA,, (Mi,m,338)", sC: "as"},
            { line: "CON EL ARPA DE DIEZ CUERDAS, (Do,,86)", sC: "as"},
            { line: "TOCAD PARA ÉL., (Sol,,142)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: EXULTAD, JUSTOS, EN EL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔═══════════════════════════════════════════════════╗
║           FELICIDAD PARA EL HOMBRE                ║
╚═══════════════════════════════════════════════════╝  */
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
        audioSrc: "https://audio.resucito.do/felicidadparaelhombre.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=exultadjustosenelsenor",
        sig: "/src/index.html?canto=graciasayahveh",
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
        audioSrc: "https://audio.resucito.do/graciasayahveh.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=felicidadparaelhombre",
        sig: "/src/index.html?canto=gritadjubilosos",
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
       triggerLine: "GRACIAS A YAHVEH, ALELUYA, (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Él ha abierto en dos partes el Mar Rojo,, (Do,,10)(Mi,m,85)(Re,7,212)(Sol,,342)", sC: "tc"},
            { line: "PORQUE ETERNA ES SU MISERICORDIA,, (Do,,10)(Mi,m,117)(Re,7,215)(Sol,,320)", sC: "ta as"},
            { line: "hizo pasar por en medio a su pueblo., (Si,m,83)(Mi,m,310)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "GRACIAS A YAHVEH, ALELUYA, (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "as"},  ]},
    ], lder: [
            { line: "Él ha abierto un camino en el desierto,, (Do,,10)(Mi,m,84)(Re,7,198)(Sol,,333)", sC: "tc"},
            { line: "PORQUE ETERNA ES SU MISERICORDIA,, (Do,,10)(Mi,m,118)(Re,7,216)(Sol,,318)", sC: "ta as"},
            { line: "e hizo con el pueblo una alianza para siempre., (Si,m,157)(Mi,m,380)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "GRACIAS A YAHVEH, ALELUYA, (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Él los condujo a la tierra prometida,, (Do,,10)(Mi,m,109)(Re,7,193)(Sol,,305)", sC: "tc"},
            { line: "PORQUE ETERNA ES SU MISERICORDIA,, (Do,,10)(Mi,m,115)(Re,7,218)(Sol,,319)", sC: "ta as"},
            { line: "una tierra que mana leche y miel., (Si,m,59)(Mi,m,302)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "GRACIAS A YAHVEH, ALELUYA, (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
            { line: "GRACIAS A YAHVEH, ALELUYA., (Re,,99)(Mi,m,169)(Re,,236)(Mi,m,281)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,34)(Mi,m,170)(Si,7,233)(Mi,m,280)", sC: "ta as"},
            { line: "GRACIAS A YAHVEH, ALELUYA., (La,m,32)(Mi,m,167)(Si,7,232)(Mi,m,281)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En la angustia no nos abandona,, (Do,,10)(Mi,m,97)(Re,7,154)(Sol,,272)", sC: "tc"},
            { line: "PORQUE ETERNA ES SU MISERICORDIA,, (Do,,10)(Mi,m,120)(Re,7,218)(Sol,,319)", sC: "ta as"},
            { line: "Él nos libra de nuestros enemigos., (Si,m,78)(Mi,m,285)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "GRACIAS A YAHVEH, ALELUYA, (Mi,m,18)(Re,,98)(Mi,m,171)(Re,,232)(Mi,m,278)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/gritadjubilosos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=graciasayahveh",
        sig: "/src/index.html?canto=haciatimoradasanta",
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
        audioSrc: "https://audio.resucito.do/haciatimoradasanta.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=gritadjubilosos",
        sig: "/src/index.html?canto=hastacuando",
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
       triggerLine: "HACIA TI, MORADA SANTA, (La,m,19)(Mi,,211)", sC: "ta as", lines: [
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
       triggerLine: "HACIA TI, MORADA SANTA, (La,m,19)(Mi,,211)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/hastacuando.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=haciatimoradasanta",
        sig: "/src/index.html?canto=heaquimisiervo",
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
            { line: "alumbra mis ojos, ", sC: ""},
            { line: "no me duerma yo en la muerte., (La,m,267)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "CANTARÉ A YAHVEH, (Mi,,88)(La,m,173)", sC: "ta as", lines: [
            { line: "CANTARÉ AL QUE ES MI REDENTOR., (Mi,,88)(La,m,319)", sC: "as"},  ]},
    ], lder: [
            { line: "Que no puedan,, (La,m,20)", sC: "tc"},
            { line: "decir mis enemigos: «le vencí»,, (Mi,,274)", sC: ""},
            { line: "mis enemigos, ", sC: ""},
            { line: "se alegrarán si yo cayera., (La,m,212)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "CANTARÉ A YAHVEH, (Mi,,88)(La,m,173)", sC: "ta as", lines: [
            { line: "CANTARÉ AL QUE ES MI REDENTOR., (Mi,,88)(La,m,319)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pero yo, (La,m,20)", sC: "tc"},
            { line: "espero en tu piedad,, (Mi,,171)", sC: ""},
            { line: "y mi corazón, ", sC: ""},
            { line: "se alegrará en tu salvación., (La,m,238)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "CANTARÉ A YAHVEH, (Mi,,88)(La,m,173)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/heaquimisiervo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=hastacuando",
        sig: "/src/index.html?canto=heaquiquevengopresto",
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
        audioSrc: "https://audio.resucito.do/heaquiquevengopresto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=heaquimisiervo",
        sig: "/src/index.html?canto=heesperadoenelsenor",
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
        audioSrc: "https://audio.resucito.do/heesperadoenelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=heaquiquevengopresto",
        sig: "/src/index.html?canto=hijasdejerusalen",
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
       triggerLine: "HE ESPERADO, (La,m,20)", sC: "ta as", lines: [
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
       triggerLine: "HE ESPERADO, (La,m,20)", sC: "ta as", lines: [
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
       triggerLine: "HE ESPERADO, (La,m,20)", sC: "ta as", lines: [
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
       triggerLine: "HE ESPERADO, (La,m,20)", sC: "ta as", lines: [
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
       triggerLine: "HE ESPERADO, (La,m,20)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/hijasdejerusalen.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=heesperadoenelsenor",
        sig: "/src/index.html?canto=himnoacristoluz",
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
       triggerLine: "HIJAS DE JERUSALÉN, (La,m,20)", sC: "ta as", lines: [
            { line: "NO LLORÉIS,, (Fa,,95)", sC: "as"},
            { line: "NO LLORÉIS POR MÍ., (La,m,189)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Padre, perdónales,, (La,m,20)", sC: "tc"},
            { line: "porque no saben qué es lo que hacen., (Fa,,118)(La,m,318)", sC: ""},
            { line: "Perdónales, perdónales., (Fa,,51)(Mi,,169)", sC: ""},
            { line: "¡Aaaay!, (La,m,55)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HIJAS DE JERUSALÉN, (La,m,20)", sC: "ta as", lines: [
            { line: "NO LLORÉIS,, (Fa,,95)", sC: "as"},
            { line: "NO LLORÉIS POR MÍ., (La,m,189)", sC: "as"},  ]},
    ], lder: [
            { line: "Yo te aseguro:, (Fa,,10)(Mi,,107)", sC: "tc"},
            { line: "hoy estarás conmigo, (Fa,,167)", sC: ""},
            { line: "en el Paraíso., (Mi,,98)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HIJAS DE JERUSALÉN, (La,m,20)", sC: "ta as", lines: [
            { line: "NO LLORÉIS,, (Fa,,95)", sC: "as"},
            { line: "NO LLORÉIS POR MÍ., (La,m,189)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "e ¡Padre!, ¡Padre!,, (La,m,20)(Fa,,119)", sC: "tc"},
            { line: "en tus manos, (Sol,,88)", sC: ""},
            { line: "encomiendo mi espíritu., (La,m,191)", sC: ""},
            { line: "¡Ah! ¡Ah! ¡Ah!, (Fa,,10)(Mi,,54)(La,m,107)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HIJAS DE JERUSALÉN, (La,m,20)", sC: "ta as", lines: [
            { line: "NO LLORÉIS,, (Fa,,95)", sC: "as"},
            { line: "NO LLORÉIS POR MÍ., (La,m,189)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: HIJAS DE JERUSALÉN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════╗
║           HIMNO A CRISTO LUZ               ║
╚════════════════════════════════════════════╝  */
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
        audioSrc: "https://audio.resucito.do/himnoacristoluz.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=hijasdejerusalen",
        sig: "/src/index.html?canto=himnoalacaridad",
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
       triggerLine: "TE BENDECIMOS EN ESTA HORA, (Mi,m,20)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/himnoalacaridad.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 4, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=himnoacristoluz",
        sig: "/src/index.html?canto=himnoalakenosis",
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
        audioSrc: "https://audio.resucito.do/himnoalakenosis.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=himnoalacaridad",
        sig: "/src/index.html?canto=himnodeadviento",
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
       triggerLine: "ALELUYA, ALELUYA, ALELUYA, (Mi,m,53)", sC: "ta as", lines: [
            { line: "ALELUYA, ALELUYA, ALELUYA., (Re,,55)", sC: "as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Do,,55)", sC: "as"},  ]},
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
        audioSrc: "https://audio.resucito.do/himnodeadviento.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=himnoalakenosis",
        sig: "/src/index.html?canto=himnodelaascension",
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
╔═══════════════════════════════════════════════╗
║           HIMNO DE LA ASCENSIÓN               ║
╚═══════════════════════════════════════════════╝  */
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
        audioSrc: "https://audio.resucito.do/himnodelaascension.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=himnodeadviento",
        sig: "/src/index.html?canto=himnodepascua",
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
        audioSrc: "https://audio.resucito.do/himnodepascua.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=himnodelaascension",
        sig: "/src/index.html?canto=huyeamadomio",
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
        audioSrc: "https://audio.resucito.do/huyeamadomio.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=himnodepascua",
        sig: "/src/index.html?canto=idyanunciadamishermanos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Tú, que vives en los jardines,, (La,m,20)(Re,m,230)", sC: "tc"},
            { line: "donde tus compañeros te están escuchando:, (Mi,7,384)", sC: ""},
            { line: "hazme oír tu voz,, (Fa,,14)", sC: ""},
            { line: "hazme oír tu voz., (Mi,,140)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "HUYE, AMADO MÍO,, (La,,10)", sC: "ta as"},
            { line: "COMO UNA GACELA,, (Mi,,162)", sC: "as"},
            { line: "COMO UN CERVATILLO,, (Fa#,m,23)", sC: "as ast"},
            { line: "HASTA EL MONTE DE LAS BALSAMERAS., (Mi,,25)(La,,342)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo soy para mi amado, (La,m,20)(Re,m,179)", sC: "tc"},
            { line: "como aquella que encontró la paz., (La,m,310)", sC: ""},
            { line: "Mi viña está aquí, está ante mí,, (Mi,,161)(La,m,288)", sC: ""},
            { line: "mi viña está aquí, está ante mí., (Mi,,161)(La,m,287)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HUYE, AMADO MÍO, (La,,10)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/idyanunciadamishermanos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=huyeamadomio",
        sig: "/src/index.html?canto=improperios",
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
        audioSrc: "https://audio.resucito.do/improperios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=idyanunciadamishermanos",
        sig: "/src/index.html?canto=jerusalenreconstruida",
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
        audioSrc: "https://audio.resucito.do/jerusalenreconstruida.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=improperios",
        sig: "/src/index.html?canto=jesusrecorriatodaslasciudades",
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
       triggerLine: "JERUSALÉN, JERUSALÉN, (Mi,m,20)(Re,,217)", sC: "ta as", lines: [
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
       triggerLine: "JERUSALÉN, JERUSALÉN, (Mi,m,20)(Re,,217)", sC: "ta as", lines: [
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
       triggerLine: "JERUSALÉN, JERUSALÉN, (Mi,m,20)(Re,,217)", sC: "ta as", lines: [
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
        audioSrc: "https://audio.resucito.do/jesusrecorriatodaslasciudades.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=jerusalenreconstruida",
        sig: "/src/index.html?canto=lacorderadedios",
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
        audioSrc: "https://audio.resucito.do/lacorderadedios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=jesusrecorriatodaslasciudades",
        sig: "/src/index.html?canto=laespada",
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
        audioSrc: "https://audio.resucito.do/laespada.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=lacorderadedios",
        sig: "/src/index.html?canto=lamarchaesdura",
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
        audioSrc: "https://audio.resucito.do/lamarchaesdura.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=laespada",
        sig: "/src/index.html?canto=lasalve",
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
        audioSrc: "https://audio.resucito.do/lasalve.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=lamarchaesdura",
        sig: "/src/index.html?canto=lasiegadelasnaciones",
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
        audioSrc: "https://audio.resucito.do/lasiegadelasnaciones.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=lasalve",
        sig: "/src/index.html?canto=lavozdemiamado",
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
       triggerLine: "¿NO DECÍS VOSOTROS (Re,m,157)(La,,198)", sC: "ta as", lines: [
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
       triggerLine: "¿NO DECÍS VOSOTROS (Re,m,157)(La,,198)", sC: "ta as", lines: [
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
       triggerLine: "¿NO DECÍS VOSOTROS (Re,m,157)(La,,198)", sC: "ta as", lines: [
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,170)", sC: "as"},
            { line: "¿NO DECÍS VOSOTROS:, (Do,,95)(Si♭,,129)(La,,160)", sC: "as"},
            { line: "TODAVÍA CUATRO MESES, ", sC: "as"},
            { line: "Y LLEGA YA LA SIEGA?, (Re,m,176)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: LA SIEGA DE LAS NACIONES
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LA VOZ DE MI AMADO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "lavozdemiamado",
        tt: "La Voz De Mi Amado",
        title: "La Voz De Mi Amado",
        subtitle: "Cantar de los Cantares 2,8-17",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "101",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/lavozdemiamado.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=lasiegadelasnaciones",
        sig: "/src/index.html?canto=lasarmasdelaluz",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡La voz de mi amado!, (Do,,10)(La,m,225)", sC: "tc"},
            { line: "Helo aquí que viene,, (Fa,,158)", sC: ""},
            { line: "saltando por los montes,, (Mi,,188)", sC: ""},
            { line: "brincando por los collados., (Fa,,53)(Mi,,214)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Semejante es mi amado a una gacela,, (Do,,10)(La,m,386)", sC: ""},
            { line: "o a un joven cervatillo,, (Fa,,182)", sC: ""},
            { line: "semejante es mi amado a una gacela., (Mi,,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Vedle que ya se para, (Do,,10)(La,m,217)", sC: ""},
            { line: "detrás de nuestra cerca,, (Fa,,190)", sC: ""},
            { line: "mira por la ventana, atisba por la reja., (Mi,,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Empieza a hablar mi amado y me dice:, (Do,,10)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡LEVÁNTATE, AMADA MÍA,, (Do,,10)(Mi,,222)", sC: "ta as"},
            { line: "LEVÁNTATE,, (Fa,,41)", sC: "as r1"},
            { line: "HERMOSA MÍA, Y VENTE!, (Mi,,189)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque, mira, ha pasado ya el invierno,, (Re,m,22)(Mi,,332)", sC: "tc"},
            { line: "han cesado las lluvias y se han ido,, (Re,m,22)(Mi,,306)", sC: ""},
            { line: "aparecen las flores en la tierra,, (Fa,,12)", sC: ""},
            { line: "el tiempo de las canciones ha llegado., (Mi,,331)", sC: ""},
    ], lder: [
            { line: "Se oye el arrullo de la tórtola,, (Re,m,20)(Mi,,222)", sC: ""},
            { line: "echa la higuera sus yemas, (Fa,,10)", sC: ""},
            { line: "y la viña exhala su fragancia., (Mi,,225)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡LEVÁNTATE, AMADA MÍA, (Do,,10)(Mi,,222)", sC: "ta as", lines: [
            { line: "LEVÁNTATE,, (Fa,,41)", sC: "as r1"},
            { line: "HERMOSA MÍA, Y VENTE!, (Mi,,187)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Paloma mía que vives en las grietas de la roca, (Re,m,22)(Mi,,417)", sC: "tc"},
            { line: "en escarpados escondrijos,, (Re,m,22)(Mi,,223)", sC: ""},
            { line: "déjame oír tu voz, déjame oír tu voz., (Fa,,20)(Mi,,329)", sC: ""},
            { line: "Cazadnos las raposas,, (Do,,10)", sC: ""},
            { line: "las pequeñas raposas, (Mi,,10)", sC: ""},
            { line: "que devastan nuestra viña,, (Fa,,79)(Mi,,221)", sC: ""},
            { line: "porque nuestra viña está ya en flor,, (Sol,,11)(Fa,,163)(Mi,,315)", sC: ""},
            { line: "PORQUE NUESTRA VIÑA ESTÁ YA EN FLOR., (Sol,,11)(Fa,,200)(Mi,,386)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mi amado es para mí,, (Re,m,20)(Mi,,199)", sC: "tc"},
            { line: "y yo soy para mi amado., (Re,m,20)(Mi,,200)", sC: ""},
            { line: "Antes que sople la brisa, (Re,m,20)(Mi,,204)", sC: ""},
            { line: "y se alarguen las sombras con la muerte,, (Re,m,20)(Mi,,352)", sC: ""},
            { line: "RETORNA, RETORNA, RETORNA., (La,m,20)(Sol,,145)(La,m,255)", sC: "la as r2"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "¡LEVÁNTATE, AMADA MÍA, (Do,,10)(Mi,,222)", sC: "ta as", lines: [
            { line: "LEVÁNTATE,, (Fa,,41)", sC: "as r1"},
            { line: "HERMOSA MÍA, Y VENTE!, (Mi,,187)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: LA VOZ DE MI AMADO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LAS ARMAS DE LA LUZ               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "lasarmasdelaluz",
        tt: "Las Armas De La Luz",
        title: "Las Armas De La Luz",
        subtitle: "cf Efesios 6,11.ss",
        category: ["Precatecumenado","Cuaresma","Penitencial","Adviento","Navidad","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "102",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/lasarmasdelaluz.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=lavozdemiamado",
        sig: "/src/index.html?canto=laudasion",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Revestíos de la armadura de Dios,, (La,m,20)(Re,m9,306)", sC: "tc"},
            { line: "empuñando las armas de la luz., (Mi,7,76)(La,m,290)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "REVESTÍOS DE LA ARMADURA DE DIOS,, (La,m,20)(Re,m9,359)", sC: "ta as"},
            { line: "EMPUÑANDO LAS ARMAS DE LA LUZ., (Mi,7,80)(La,m,336)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque nuestra lucha, (Fa,,10)", sC: ""},
            { line: "no es contra la carne ni la sangre,, (Mi,7,271)", sC: ""},
            { line: "más contra los espíritus del mal, (Fa,,10)", sC: ""},
            { line: "que viven en el mundo tenebroso., (Mi,7,258)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CEÑIDOS CON LA VERDAD,, (La,m,20)(Mi,7,228)", sC: "ta as"},
            { line: "REVESTIDOS DE LA JUSTICIA DE LA CRUZ., (La,m,376)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que no se resiste al mal,, (Fa,,58)(Mi,7,219)", sC: "tc"},
            { line: "mas lleva sobre sí los pecados de los demás., (Fa,,64)(Mi,7,408)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CALZADOS CON EL CELO, (La,m,20)", sC: "ta as"},
            { line: "POR ANUNCIAR EL EVANGELIO,, (Mi,7,253)", sC: "as"},
            { line: "MAS SOBRE TODO, ", sC: "as"},
            { line: "CON EL ESCUDO DE LA FE., (La,m,245)", sC: "as"},
    ], lder: [
            { line: "Que Cristo te ama ciertamente,, (Fa,,10)(Mi,7,256)", sC: "tc"},
            { line: "que ha dado su vida por ti, (Fa,,88)(Mi,7,248)", sC: ""},
            { line: "cuando eras malvado y pecador., (Fa,,84)(Mi,7,296)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "CON LA ESPADA DEL ESPÍRITU,, (La,m,20)", sC: "ta as"},
            { line: "QUE ES LA PALABRA DE DIOS,, (Mi,7,263)", sC: "as"},
            { line: "Y CORONADOS, ", sC: "as"},
            { line: "CON EL YELMO DE LA SALVACIÓN., (La,m,305)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que Cristo Jesús resucitó,, (Fa,,66)(Mi,7,238)", sC: "tc"},
            { line: "que él es el Señor,, (Fa,,49)(Mi,7,160)", sC: ""},
            { line: "que volverá, que volverá, (Re,m,101)", sC: ""},
            { line: "y nos llevará con él., (Mi,7,178)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELÚ, ALELÚ, ALELUYA., (La,m,79)(Mi,7,326)", sC: "ta as"},
            { line: "ALELUYA, ALELÚ, ALELÚ, ALELUYA., (La,m,87)(Mi,7,326)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: LAS ARMAS DE LA LUZ
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LAUDA SIÓN               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "laudasion",
        tt: "Lauda Sión",
        title: "Lauda Sión",
        subtitle: "Secuencia del Corpus Christi (Santo Tomas de Aquino) ",
        category: ["Precatecumenado","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "103",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/laudasion1.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=lasarmasdelaluz",
        sig: "/src/index.html?canto=laudasionc",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Alaba, Sión, al Salvador,, (La,m,20)(Re,m,216)", sC: "tc"},
            { line: "Él es tu guía y tu Pastor., (La,m,208)", sC: ""},
            { line: "Alábalo con himnos y cantos., (Mi,,25)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ESTE ES EL PAN DE LOS ÁNGELES,, (La,m,20)(Re,m,250)", sC: "ta as"},
            { line: "PAN DE LOS QUE HACEN CAMINO., (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS., (Mi,,10)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Canta con todo fervor,, (La,m,20)(Re,m,190)", sC: "tc"},
            { line: "al pan vivo que da vida:, (La,m,193)", sC: ""},
            { line: "este es el tema del canto, ", sC: ""},
            { line: "y el objeto de alabanza., (Mi,,204)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESTE ES EL PAN DE LOS ÁNGELES, (La,m,20)(Re,m,250)", sC: "ta as", lines: [
            { line: "PAN DE LOS QUE HACEN CAMINO. (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS. (Mi,,10)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ciertamente se donó,, (La,m,20)(Re,m,190)", sC: "tc"},
            { line: "al grupo de doce hermanos, (Lam,,217)", sC: ""},
            { line: "en fraterna y Santa Cena. (Mi,,209)", sC: ""},
            { line: "Esta es la fiesta solemne, (La,m,20)(Re,m,192)", sC: ""},
            { line: "en la cual celebramos, (La,m,162)", sC: ""},
            { line: "la primera y Santa Cena. (Mi,,73)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ESTE ES EL PAN DE LOS ÁNGELES, (La,m,20)(Re,m,250)", sC: "ta as", lines: [
            { line: "PAN DE LOS QUE HACEN CAMINO. (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS. (Mi,,10)", sC: "as"},  ]},
    ], lder: [
            { line: "Es el banquete del nuevo Rey, (La,m,20)(Re,m,266)", sC: "tc"},
            { line: "la nueva Pascua y nueva Ley, (La,m,256)", sC: ""},
            { line: "donde lo antiguo termina. (Mi,,120)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Lo antiguo se verá nuevo, (La,m,20)(Re,m,204)", sC: ""},
            { line: "la realidad a la sombra; (La,m,160)", sC: ""},
            { line: "¡Es todo luz, ya no hay tinieblas!, (Mi,,91)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ESTE ES EL PAN DE LOS ÁNGELES, (La,m,20)(Re,m,250)", sC: "ta as", lines: [
            { line: "PAN DE LOS QUE HACEN CAMINO. (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS. (Mi,,10)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo deja en su memoria, (La,m,20)(Re,m,216)", sC: "tc"},
            { line: "lo que hizo en Santa Cena, (La,m,215)", sC: ""},
            { line: "nosotros lo renovamos. (Mi,,167)", sC: ""},
            { line: "Obedientes a su palabra, (La,m,20)(Re,m,194)", sC: ""},
            { line: "consagramos pan y vino, (La,m,201)", sC: ""},
            { line: "¡Hostia de la salvación!, (Mi,,24)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "ESTE ES EL PAN DE LOS ÁNGELES, (La,m,20)(Re,m,250)", sC: "ta as", lines: [
            { line: "PAN DE LOS QUE HACEN CAMINO. (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS. (Mi,,10)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Es cierto a los cristianos, (La,m,20)(Re,m,188)", sC: "tc"},
            { line: "que se transforma el pan en carne,, (La,m,292)", sC: ""},
            { line: "y que el vino se hace sangre. (Mi,,88)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "ESTE ES EL PAN DE LOS ÁNGELES, (La,m,20)(Re,m,250)", sC: "ta as", lines: [
            { line: "PAN DE LOS QUE HACEN CAMINO. (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS. (Mi,,10)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: LAUDA SIÓN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════╗
║           LAUDA SIÓN               ║
╚════════════════════════════════════╝  */
   {
        id: "laudasionc",
        tt: "Lauda Sión",
        title: "Lauda Sión",
        subtitle: "Secuencia del Corpus Christi (Santo Tomas de Aquino) ",
        category: ["Precatecumenado","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "103",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/laudasion2.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=laudasion",
        sig: "/src/index.html?canto=levantomisojosalosmontes",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Tú no ves, tú no comprendes;, (La,m,20)(Re,m,220)", sC: "tc"},
            { line: "mas la fe te lo confirma, (La,m,186)", sC: ""},
            { line: "más allá de la razón., (Mi,,76)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Es signo lo que aparece,, (La,m,20)(Re,m,199)", sC: ""},
            { line: "y esconde un gran misterio,, (La,m,231)", sC: ""},
            { line: "una realidad sublime., (Mi,,104)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Comes carne, bebes sangre,, (La,m,20)(Re,m,217)", sC: ""},
            { line: "en las dos especies;, (La,m,141)", sC: ""},
            { line: "pero queda Cristo entero., (Mi,,75)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESTE ES EL PAN DE LOS ÁNGELES, (La,m,20)(Re,m,250)", sC: "ta as", lines: [
            { line: "PAN DE LOS QUE HACEN CAMINO. (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS. (Mi,,10)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El que come solo parte,, (La,m,20)(Re,m,187)", sC: "tc"},
            { line: "ni separa ni divide,, (La,m,149)", sC: ""},
            { line: "en tanto que lo recibe., (Mi,,175)", sC: ""},
            { line: "Que sean uno, que sean mil,, (La,m,20)(Re,m,253)", sC: ""},
            { line: "igualmente lo reciben, (La,m,176)", sC: ""},
            { line: "y nunca se consume., (Mi,,33)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ESTE ES EL PAN DE LOS ÁNGELES, (La,m,20)(Re,m,250)", sC: "ta as", lines: [
            { line: "PAN DE LOS QUE HACEN CAMINO. (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS. (Mi,,10)", sC: "as"},  ]},
    ], lder: [
            { line: "Buen pastor, pan verdadero,, (La,m,20)(Re,m,239)", sC: "tc"},
            { line: "de nosotros ten piedad., (La,m,203)", sC: ""},
            { line: "Danos los bienes eternos, (Mi,,194)", sC: ""},
            { line: "en la tierra de los vivos., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "ESTE ES EL PAN DE LOS ÁNGELES, (La,m,20)(Re,m,250)", sC: "ta as", lines: [
            { line: "PAN DE LOS QUE HACEN CAMINO. (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS. (Mi,,10)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Oh, Señor, que todo sabes!, (La,m,20)(Re,m,217)", sC: "tc"},
            { line: "¡Oh, Señor, que todo puedes!, (La,m,230)", sC: ""},
            { line: "¡Que nos sacias en la tierra!, (Mi,,108)", sC: ""},
            { line: "Conduce a tus hermanos, (La,m,20)(Re,m,198)", sC: ""},
            { line: "a la cena del cielo;, (La,m,150)", sC: ""},
            { line: "en el gozo de los santos., (Mi,,71)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "ESTE ES EL PAN DE LOS ÁNGELES, (La,m,20)(Re,m,250)", sC: "ta as", lines: [
            { line: "PAN DE LOS QUE HACEN CAMINO. (La,m,288)", sC: "as"},
            { line: "ESTE ES EL PAN DE LOS HIJOS. (Mi,,10)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "", sC: "sp1 nota"},
            { line: "En la convivencia de itinerantes de España del año, 2003, Kiko cantó este himno en la Eucaristía como, canto de entrada. En aquella ocasión, utilizó como, estribillo el texto en latín que reproducimos a, continuación, con el fin de que pueda ser utilizado, por los salmistas si así lo consideráis apropiado para, la celebración.", sC: "small"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "LAUDA, SION, SALVATOREM, (La,m,20)(Re,m,230)", sC: "ta as", lines: [
            { line: "LAUDA DUCEM ET PASTOREM (La,m,248)", sC: "as"},
            { line: "IN HYMNIS ET CANTICIS. (Mi,,10)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: LAUDA SIÓN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LEVANTO MIS OJOS A LOS MONTES                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "levantomisojosalosmontes",
        tt: "Levanto Mis Ojos A Los Montes",
        title: "Levanto Mis Ojos A Los Montes",
        subtitle: "Salmo 121 (120)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "105",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/levantomisojosalosmontes.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=laudasionc",
        sig: "/src/index.html?canto=lleguehastatupresenciamiclamor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "LEVANTO MIS OJOS A LOS MONTES:, (Sol,,14)(Si,m,280)", sC: "ta as"},
            { line: "¿DE DÓNDE ME VENDRÁ EL AUXILIO?, (Do,,65)(Re,7,232)(Sol,,317)", sC: "as"},
            { line: "EL AUXILIO ME VIENE DEL SEÑOR,, (Do,,69)(Sol,,297)", sC: "as"},
            { line: "QUE HIZO EL CIELO Y LA TIERRA., (Re,,65)(Do,,152)(Sol,,260)", sC: "as"},
            { line: "EL AUXILIO ME VIENE DEL SEÑOR,, (Do,,74)(Re,7,171)(Sol,,300)", sC: "as"},
            { line: "QUE HIZO EL CIELO Y LA TIERRA., (Do,,64)(Re,7,150)(Sol,,260)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No permitirá que resbale tu pie,, (Sol,,13)(Si,m,286)", sC: "tc"},
            { line: "tu guardián no duerme;, (Do,,10)(Re,7,90)(Sol,,174)", sC: ""},
            { line: "no duerme ni reposa, (Do,,57)(Sol,,167)", sC: ""},
            { line: "el guardián de Israel., (Re,,89)(Do,,128)(Sol,,184)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "LEVANTO MIS OJOS A LOS MONTES, (Sol,,14)(Si,m,280)", sC: "ta as", lines: [
            { line: "¿DE DÓNDE ME VENDRÁ EL AUXILIO?, (Do,,65)(Re,7,232)(Sol,,317)", sC: "as"},
            { line: "EL AUXILIO ME VIENE DEL SEÑOR,, (Do,,69)(Sol,,297)", sC: "as"},
            { line: "QUE HIZO EL CIELO Y LA TIERRA., (Re,,65)(Do,,152)(Sol,,260)", sC: "as"},
            { line: "EL AUXILIO ME VIENE DEL SEÑOR,, (Do,,74)(Re,7,171)(Sol,,300)", sC: "as"},
            { line: "QUE HIZO EL CIELO Y LA TIERRA., (Do,,64)(Re,7,150)(Sol,,260)", sC: "as"},  ]},
    ], lder: [
            { line: "El Señor te guarda a su sombra,, (Sol,,14)(Si,m,246)", sC: "tc"},
            { line: "Él está a tu derecha;, (Do,,10)(Re,7,55)(Sol,,143)", sC: ""},
            { line: "de día el sol no te hará daño,, (Do,,42)(Sol,,237)", sC: ""},
            { line: "ni la luna de noche., (Re,,54)(Do,,80)(Sol,,135)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "LEVANTO MIS OJOS A LOS MONTES, (Sol,,14)(Si,m,280)", sC: "ta as", lines: [
            { line: "¿DE DÓNDE ME VENDRÁ EL AUXILIO?, (Do,,65)(Re,7,232)(Sol,,317)", sC: "as"},
            { line: "EL AUXILIO ME VIENE DEL SEÑOR,, (Do,,69)(Sol,,297)", sC: "as"},
            { line: "QUE HIZO EL CIELO Y LA TIERRA., (Re,,65)(Do,,152)(Sol,,260)", sC: "as"},
            { line: "EL AUXILIO ME VIENE DEL SEÑOR,, (Do,,74)(Re,7,171)(Sol,,300)", sC: "as"},
            { line: "QUE HIZO EL CIELO Y LA TIERRA., (Do,,64)(Re,7,150)(Sol,,260)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor te guarda de todo mal,, (Sol,,14)(Si,m,287)", sC: "tc"},
            { line: "él guarda tu alma;, (Do,,10)(Re,7,51)(Sol,,123)", sC: ""},
            { line: "vigila tus entradas y salidas,, (Do,,23)(Sol,,222)", sC: ""},
            { line: "ahora y por siempre., (Re,,28)(Do,,68)(Sol,,133)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "LEVANTO MIS OJOS A LOS MONTES, (Sol,,14)(Si,m,280)", sC: "ta as", lines: [
            { line: "¿DE DÓNDE ME VENDRÁ EL AUXILIO?, (Do,,65)(Re,7,232)(Sol,,317)", sC: "as"},
            { line: "EL AUXILIO ME VIENE DEL SEÑOR,, (Do,,69)(Sol,,297)", sC: "as"},
            { line: "QUE HIZO EL CIELO Y LA TIERRA., (Re,,65)(Do,,152)(Sol,,260)", sC: "as"},
            { line: "EL AUXILIO ME VIENE DEL SEÑOR,, (Do,,74)(Re,7,171)(Sol,,300)", sC: "as"},
            { line: "QUE HIZO EL CIELO Y LA TIERRA., (Do,,64)(Re,7,150)(Sol,,260)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: LEVANTO MIS OJOS A LOS MONTES
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LLEGUE HASTA TU PRESENCIA MI CLAMOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "lleguehastatupresenciamiclamor",
        tt: "Llegue Hasta Tu Presencia Mi Clamor",
        title: "Llegue Hasta Tu Presencia Mi Clamor",
        subtitle: "Salmo 119 (118)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Adviento","Navidad","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "106",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/lleguehastatupresenciamiclamor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=levantomisojosalosmontes",
        sig: "/src/index.html?canto=llevamealcielo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡Señor, Señor Jesús!, (La,m,20)(Fa,,66)(Mi,,174)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Llegue hasta tu presencia mi clamor,, (La,m,20)", sC: ""},
            { line: "brota de mis labios tu canción,, (Fa,,10)", sC: ""},
            { line: "canta mi lengua tus palabras,, (Sol,,14)", sC: ""},
            { line: "alma mía, Jesús., (Fa,,74)(Mi,,143)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sea conmigo tu mano para ayudarme,, (La,m,20)", sC: ""},
            { line: "de ti anhelo la salvación,, (Fa,,37)", sC: ""},
            { line: "viva mi alma para alabarte,, (Sol,,12)", sC: ""},
            { line: "mírame, ando errante., (Fa,,66)(Mi,,171)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "VEN, EN BUSCA DE TU SIERVO,, (La,m,20)(Sol,,244)", sC: "ta as"},
            { line: "VEN, SEÑOR JESÚS., (Fa,,16)(Mi,,166)", sC: "as"},
            { line: "VEN, QUE YO SIN TI ME PIERDO,, (La,m,19)(Sol,,253)", sC: "as"},
            { line: "VEN, SEÑOR JESÚS., (Fa,,20)(Mi,,166)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Llegue hasta tu presencia mi clamor, (La,m,20)", sC: "tc", lines: [
            { line: "brota de mis labios tu canción,, (Fa,,10)", sC: ""},
            { line: "canta mi lengua tus palabras,, (Sol,,14)", sC: ""},
            { line: "alma mía, Jesús., (Fa,,74)(Mi,,143)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sea conmigo tu mano para ayudarme,, (La,m,20)", sC: ""},
            { line: "de ti anhelo la salvación, (Fa,,37)", sC: ""},
            { line: "viva mi alma para alabarte, (Sol,,12)", sC: ""},
            { line: "mírame, ando errante., (Fa,,66)(Mi,,171)", sC: ""},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, EN BUSCA DE TU SIERVO, (La,m,20)(Sol,,244)", sC: "ta as", lines: [
            { line: "VEN, SEÑOR JESÚS., (Fa,,16)(Mi,,166)", sC: "as"},
            { line: "VEN, QUE YO SIN TI ME PIERDO,, (La,m,19)(Sol,,253)", sC: "as"},
            { line: "VEN, SEÑOR JESÚS., (Fa,,20)(Mi,,166)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: LLEGUE HASTA TU PRESENCIA MI CLAMOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           LLÉVAME AL CIELO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "llevamealcielo",
        tt: "Llévame Al Cielo",
        title: "Llévame Al Cielo",
        subtitle: "Filipenses 1,23",
        category: ["Precatecumenado","Adviento","Navidad","Pascua","Pentecostés","Final","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "107",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/llevamealcielo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=lleguehastatupresenciamiclamor",
        sig: "/src/index.html?canto=magnificat",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "LLÉVAME AL CIELO,, (Mi,,11)", sC: "ta as"},
            { line: "LLÉVAME AL CIELO,, ", sC: "as"},
            { line: "OH, OH SEÑOR., (Do#,m,27)(Sol#,,124)", sC: "as"},
            { line: "PORQUE MORIR,, (Mi,,136)", sC: "as"},
            { line: "PORQUE MORIR,, ", sC: "as"},
            { line: "ES CON MUCHO LO MEJOR,, (Do#,m,27)(Sol#,,238)", sC: "as"},
            { line: "ES CON MUCHO LO MEJOR,, (La,,10)(Mi,,233)", sC: "as"},
            { line: "ESTAR CONTIGO,, (Si,7,124)", sC: "as"},
            { line: "ESTAR CONTIGO., (Mi,,119)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Una cosa te ruego,, (Mi,,10)", sC: "tc"},
            { line: "eso solo te pido:, ", sC: ""},
            { line: "no dudar nunca de tu amor,, (Do#,m,26)(Sol#,,246)", sC: ""},
            { line: "no dudar nunca de Ti,, (La,,10)(Mi,,196)", sC: ""},
            { line: "estar contigo,, (Si,7,95)", sC: ""},
            { line: "estar contigo., (Mi,,99)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "LLÉVAME AL CIELO, (Mi,,11)", sC: "ta as", lines: [
            { line: "LLÉVAME AL CIELO,, ", sC: "as"},
            { line: "OH, OH SEÑOR., (Do#,m,27)(Sol#,,124)", sC: "as"},
            { line: "PORQUE MORIR,, (Mi,,136)", sC: "as"},
            { line: "PORQUE MORIR,, ", sC: "as"},
            { line: "ES CON MUCHO LO MEJOR,, (Do#,m,27)(Sol#,,238)", sC: "as"},
            { line: "ES CON MUCHO LO MEJOR,, (La,,10)(Mi,,233)", sC: "as"},
            { line: "ESTAR CONTIGO,, (Si,7,124)", sC: "as"},
            { line: "ESTAR CONTIGO., (Mi,,119)", sC: "as"},  ]},
    ], lder: [
            { line: "Oh qué bueno,, (Mi,,10)", sC: "tc"},
            { line: "oh qué dulce,, ", sC: ""},
            { line: "ha sido tu amor conmigo,, (Do#,m,27)(Sol#,,211)", sC: ""},
            { line: "ha sido tu amor conmigo,, (La,,10)(Mi,,210)", sC: ""},
            { line: "oh qué bueno,, (Si,7,101)", sC: ""},
            { line: "oh qué dulce., (Mi,,89)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "LLÉVAME AL CIELO, (Mi,,11)", sC: "ta as", lines: [
            { line: "LLÉVAME AL CIELO,, ", sC: "as"},
            { line: "OH, OH SEÑOR., (Do#,m,27)(Sol#,,124)", sC: "as"},
            { line: "PORQUE MORIR,, (Mi,,136)", sC: "as"},
            { line: "PORQUE MORIR,, ", sC: "as"},
            { line: "ES CON MUCHO LO MEJOR,, (Do#,m,27)(Sol#,,238)", sC: "as"},
            { line: "ES CON MUCHO LO MEJOR,, (La,,10)(Mi,,233)", sC: "as"},
            { line: "ESTAR CONTIGO,, (Si,7,124)", sC: "as"},
            { line: "ESTAR CONTIGO., (Mi,,119)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Una cosa te ruego, (Mi,,10)", sC: "tc", lines: [
            { line: "eso solo te pido:, ", sC: ""},
            { line: "no dudar nunca de tu amor,, (Do#,m,26)(Sol#,,246)", sC: ""},
            { line: "no dudar nunca de Ti,, (La,,10)(Mi,,196)", sC: ""},
            { line: "estar contigo,, (Si,7,95)", sC: ""},
            { line: "estar contigo., (Mi,,99)", sC: ""},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "LLÉVAME AL CIELO, (Mi,,11)", sC: "ta as", lines: [
            { line: "LLÉVAME AL CIELO,, ", sC: "as"},
            { line: "OH, OH SEÑOR., (Do#,m,27)(Sol#,,124)", sC: "as"},
            { line: "PORQUE MORIR,, (Mi,,136)", sC: "as"},
            { line: "PORQUE MORIR,, ", sC: "as"},
            { line: "ES CON MUCHO LO MEJOR,, (Do#,m,27)(Sol#,,238)", sC: "as"},
            { line: "ES CON MUCHO LO MEJOR,, (La,,10)(Mi,,233)", sC: "as"},
            { line: "ESTAR CONTIGO,, (Si,7,124)", sC: "as"},
            { line: "ESTAR CONTIGO., (Mi,,119)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: LLÉVAME AL CIELO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           MAGNÍFICAT               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "magnificat",
        tt: "Magníficat",
        title: "Magníficat",
        subtitle: "Lucas 1,46-55",
        category: ["Precatecumenado","Vírgen María","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "108",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/magnificat.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=llevamealcielo",
        sig: "/src/index.html?canto=mariacasadebendicion",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "PROCLAMA MI ALMA, (Re,,11)", sC: "ta as"},
            { line: "LA GRANDEZA DEL SEÑOR,, (Mi,,236)", sC: "as r1"},
            { line: "SE ALEGRA MI ESPÍRITU, ", sC: "as"},
            { line: "EN DIOS MI SALVADOR., (Re,,194)(La,,242)(Mi,,266)(La,,292)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Desde ahora me felicitarán, (La,,11)(Mi,,245)", sC: "tc"},
            { line: "todas las generaciones., (La,,173)", sC: ""},
            { line: "DESDE AHORA ME FELICITARÁN, (Mi,,288)", sC: "ta as"},
            { line: "TODAS LAS GENERACIONES., (La,,224)", sC: "as"},
            { line: "Porque el Poderoso, (Re,,158)", sC: "tc"},
            { line: "ha hecho grandes cosas en mí,, (La,,281)", sC: ""},
            { line: "su nombre es santo., (Mi,,42)(La,,150)", sC: ""},
            { line: "PORQUE EL PODEROSO, (La,7,19)(Re,,196)", sC: "ta as"},
            { line: "HA HECHO GRANDES COSAS EN MÍ,, (La,,332)", sC: "as"},
            { line: "SU NOMBRE ES SANTO., (Mi,,58)(La,,175)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Él hace proezas con su brazo:, (La,,10)(Mi,,247)", sC: "tc"},
            { line: "dispersa a los soberbios de corazón., (La,,321)", sC: ""},
            { line: "ÉL HACE PROEZAS CON SU BRAZO:, (Mi,,299)", sC: "ta as"},
            { line: "DISPERSA A LOS SOBERBIOS DE CORAZÓN., (La,,395)", sC: "as"},
    ], lder: [
            { line: "Derriba a los poderosos, (Re,,48)(La,,187)", sC: "tc"},
            { line: "y ensalza a los humildes., (Mi,,52)(La,,191)", sC: ""},
            { line: "LOS HAMBRIENTOS, (La,7,17)(Re,,120)", sC: "ta as"},
            { line: "COLMA DE BIENES, (La,,122)", sC: "as"},
            { line: "Y A LOS RICOS DESPIDE VACÍOS., (Mi,,97)(La,,277)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Auxilia a Israel, su siervo,, (La,,10)(Mi,,203)", sC: "tc"},
            { line: "acordándose de la misericordia., (La,,257)", sC: ""},
            { line: "AUXILIA A ISRAEL, SU SIERVO,, (Mi,,236)", sC: "ta as"},
            { line: "ACORDÁNDOSE DE LA MISERICORDIA., (La,,310)", sC: "as"},
            { line: "Como lo había prometido, (Re,,120)(La,,215)", sC: "tc"},
            { line: "en favor de Abraham., (Mi,,64)(La,,172)", sC: ""},
            { line: "COMO LO HABÍA PROMETIDO, (Re,,10)(La,,247)", sC: "ta as"},
            { line: "EN FAVOR DE ABRAHAM., (Mi,,75)(La,,207)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "PROCLAMA MI ALMA, (Re,,11)", sC: "ta as", lines: [
            { line: "LA GRANDEZA DEL SEÑOR,, (Mi,,236)", sC: "as r1"},
            { line: "SE ALEGRA MI ESPÍRITU, ", sC: "as"},
            { line: "EN DIOS MI SALVADOR., (Re,,194)(La,,242)(Mi,,266)(La,,292)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: MAGNÍFICAT
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           MARÍA, CASA DE BENDICIÓN               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "mariacasadebendicion",
        tt: "María, Casa De Bendición",
        title: "María, Casa De Bendición",
        subtitle: "Juan 2,1–11 | Las Bodas de Caná",
        category: ["Precatecumenado","Vírgen María","Pascua","Comunión","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "109",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/mariacasadebendicion.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=magnificat",
        sig: "/src/index.html?canto=mariadejasnagora",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "MARÍA, CASA DE BENDICIÓN,, (Re,m,20)(Sol,m,99)(Re,m,256)", sC: "ta as"},
            { line: "SALUD DE NUESTRO SIGLO,, (Sol,m,44)(Re,m,218)", sC: "as r1"},
            { line: "MORADA TERRESTRE DEL HUMILDE., (La,7,56)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú, como en Caná de Galilea,, (Sol,m,22)(La,7,258)", sC: "tc"},
            { line: "has visto que nos faltaba el vino;, (Sol,m,24)(La,7,279)", sC: ""},
            { line: "que nuestra fiesta no era fiesta,, (Si♭,,13)", sC: ""},
            { line: "que nuestra vida no era vida,", sC: ""},
            { line: "porque la muerte reinaba en nosotros., (La,7,322)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "MARÍA, CASA DE BENDICIÓN (Re,m,20)(Sol,m,99)(Re,m,256)", sC: "ta as", lines: [
            { line: "SALUD DE NUESTRO SIGLO,, (Sol,m,44)(Re,m,218)", sC: "as r1"},
            { line: "MORADA TERRESTRE DEL HUMILDE., (La,7,56)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y tú nos has llevado hasta tu Hijo,, (Sol,m,22)(La,7,297)", sC: "tc"},
            { line: "nos has enseñado a obedecerle, (Sol,m,20)", sC: ""},
            { line: "y a hacer todo lo que nos diga Él,, (La,7,305)", sC: ""},
            { line: "para que transforme nuestra agua (Si♭,,13)", sC: ""},
            { line: "en vino nuevo.,(La,7,97)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡VICTORIA! ¡VICTORIA!, (Re,m,11)(Do,,158)", sC: "ta as"},
            { line: "¡VIDA ETERNA EN CRISTO RESUCITADO!, (Si♭,,92)(La,7,338)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Aleluya, alelú, aleluya., (Re,m,62)(Do,,121)(Re,m,200)", sC: "tc"},
            { line: "ALELUYA, ALELÚ, ALELUYA., (Do,,153)(Re,m,241)", sC: "ta as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: MARÍA, CASA DE BENDICIÓN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           MARÍA DE JASNA GÓRA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "mariadejasnagora",
        tt: "María De Jasna Góra",
        title: "María De Jasna Góra",
        subtitle: "Himno a la Virgen de Jasna Göra, Częstochowa Polonia (Kiko Argüello) ",
        category: ["Precatecumenado","Vírgen María","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Se puede decir por el texto en latín: MARIA, SANCTA MARIA",
        nCanURL: "",
        dbno: "110",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/mariadejasnagora.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=mariacasadebendicion",
        sig: "/src/index.html?canto=mariamadredelaiglesia",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "MARÍA DE JASNA GÓRA, (La,,10)", sC: "ta as"},
            { line: "MARIA, SANCTA MARIA", sC: "as msm", color: "rgb(255 0 0 / 42%)"},
            { line: "", sC: "ast"}, // Espacio Generado para separar contenido
            { line: "MATER ABSCONDITA,", sC: "as"},
            { line: "AT SEMPER SOLICITA;", sC: "as"},
            { line: "TU, REDEMPTORIS MATER,, (Sol,m,22) ", sC: "as"},
            { line: "ORA PRO NOBIS., (La,,122)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Surge como Débora,, (Re,m,22)", sC: "tc"},
            { line: "sálvanos como Judit,, (Sol,m,23)(La,,186)", sC: ""},
            { line: "canta como Ana,, (Sol,m,22)", sC: ""},
            { line: "intercede como Ester., (La,,191)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "MARÍA DE JASNA GÓRA, (La,,10)", sC: "ta as", lines: [
            { line: "MARIA, SANCTA MARIA", sC: "as msm", color: "rgb(255 0 0 / 42%)"},
            { line: "", sC: "ast"}, // Espacio Generado para separar contenido
            { line: "MATER ABSCONDITA,, ", sC: "as"},
            { line: "AT SEMPER SOLICITA; ", sC: "as"},
            { line: "TU, REDEMPTORIS MATER,, (Sol,m,22)", sC: "as"},
            { line: "ORA PRO NOBIS., (La,,122)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Madre del Cielo,, (Re,m,22)", sC: "tc"},
            { line: "enséñanos a seguir las huellas de Cristo,, (Sol,m,22)", sC: ""},
            { line: "las huellas del Siervo, ", sC: ""},
            { line: "del humilde Hijo, ", sC: ""},
            { line: "de la humilde Madre, ", sC: ""},
            { line: "de la siempre Virgen María., (La,,251)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "MARÍA DE JASNA GÓRA, (La,,10)", sC: "ta as", lines: [
            { line: "MARIA, SANCTA MARIA", sC: "as msm", color: "rgb(255 0 0 / 42%)"},
            { line: "", sC: "ast"}, // Espacio Generado para separar contenido
            { line: "MATER ABSCONDITA,, ", sC: "as"},
            { line: "AT SEMPER SOLICITA; ", sC: "as"},
            { line: "TU, REDEMPTORIS MATER,, (Sol,m,22)", sC: "as"},
            { line: "ORA PRO NOBIS., (La,,122)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: MARÍA DE JASNA GÓRA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           MARÍA, MADRE DE LA IGLESIA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "mariamadredelaiglesia",
        tt: "María, Madre De La Iglesia",
        title: "María, Madre De La Iglesia",
        subtitle: "Juan 19,26-34",
        category: ["Precatecumenado","Vírgen María","Cuaresma","Penitencial","Fracción Del Pan","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "111",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/mariamadredelaiglesia.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=mariadejasnagora",
        sig: "/src/index.html?canto=mariamadredelcaminoardiente",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "«Mujer, he ahí a tu hijo,, (Mi,,12)", sC: "tc"},
            { line: "he ahí a tu hijo, he ahí a tu hijo, ", sC: ""},
            { line: "ahí tienes a tu hijo., ", sC: ""},
            { line: "Ahí tienes a tu Madre,, (La,m,20)", sC: ""},
            { line: "ahí tienes a tu Madre»., (Re,m,22)(Mi,,166)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MARÍA, MADRE MÍA,, (La,m,20)", sC: "ta as"},
            { line: "MARÍA, MADRE NUESTRA:, (Sol,7,20)(La,m,191)", sC: "as"},
            { line: "VEN A VIVIR CONMIGO,, (Sol,,14)(Mi,,182)", sC: "as"},
            { line: "VEN A MI CASA., (Sol,,10)(Mi,,115)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y ENSÉÑANOS A AMAR A TU HIJO, (Mi,7,65)(Fa,maj7,302)", sC: "as"},
            { line: "COMO LO HAS AMADO TÚ,, (Mi,,242)", sC: "as"},
            { line: "Y ENSÉÑANOS A AMAR A TU HIJO, (Mi,7,61)(Fa,maj7,302)", sC: "as"},
            { line: "COMO LO HAS AMADO TÚ., (Mi,,244)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«Tengo sed, tengo sed,, (Mi,,17)", sC: "tc"},
            { line: "todo se ha cumplido, todo se ha cumplido,, ", sC: ""},
            { line: "todo se ha cumplido»., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "MARÍA, MADRE MÍA, (La,m,20)", sC: "ta as", lines: [
            { line: "MARÍA, MADRE NUESTRA:, (Sol,7,22)(La,m,191)", sC: "as"},
            { line: "VEN A VIVIR CONMIGO,, (Sol,,14)(Mi,,182)", sC: "as"},
            { line: "VEN A MI CASA., (Sol,,10)(Mi,,115)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y ENSÉÑANOS A AMAR A TU HIJO, (Mi,7,65)(Fa,maj7,301)", sC: "as"},
            { line: "COMO LO HAS AMADO TÚ,, (Mi,,242)", sC: "as"},
            { line: "Y ENSÉÑANOS A AMAR A TU HIJO, (Mi,7,61)(Fa,maj7,302)", sC: "as"},
            { line: "COMO LO HAS AMADO TÚ., (Mi,,244)", sC: "as"},  ]},
    ], lder: [
            { line: "Llegaron, pues, los soldados,, (Mi,,10)", sC: "tc"},
            { line: "y viendo que estaba muerto, ", sC: ""},
            { line: "no le quebraron las piernas,, ", sC: ""},
            { line: "mas uno de los soldados, ", sC: ""},
            { line: "le atravesó el costado con la lanza, ", sC: ""},
            { line: "y al instante salió sangre y agua,, (Fa,maj7,162)(Mi,,267)", sC: ""},
            { line: "sangre y agua., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MARÍA, MADRE MÍA,, (La,m,20)", sC: "ta as"},
            { line: "MARÍA, MADRE NUESTRA:, (Sol,7,20)(La,m,193)", sC: "as"},
            { line: "TÚ ERES MADRE DE LA IGLESIA,, (Sol,,12)(Mi,,270)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "QUE NACE DEL COSTADO DE CRISTO, (Mi,7,63)(Fa,maj7,308)", sC: "as"},
            { line: "COMO ESPOSA, NUEVA EVA., (Mi,,236)", sC: "as"},
            { line: "QUE NACE DEL COSTADO DE CRISTO, (Mi,7,70)(Fa,maj7,305)", sC: "as"},
            { line: "COMO ESPOSA, NUEVA EVA., (Mi,,237)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: MARÍA, MADRE DE LA IGLESIA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           MARÍA, MADRE DEL CAMINO ARDIENTE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "mariamadredelcaminoardiente",
        tt: "María, Madre Del Camino Ardiente",
        title: "María, Madre Del Camino Ardiente",
        subtitle: "Himno a la Virgen del Tercer Milenio (Kiko Argüello)",
        category: ["Precatecumenado","Vírgen María","Adviento","Navidad"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "112",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/mariamadredelcaminoardiente.mp3",

// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=mariamadredelaiglesia",
        sig: "/src/index.html?canto=mariapequenamaria",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡María, Madre del camino ardiente!, (Sol,,14)(Mi,m,57)(Do,,95)(La,,292)", sC: "tc"},
            { line: "Tú nos libras del fuego de las pasiones, (Do,,78)(Sol,,330)", sC: ""},
            { line: "con el rocío de tu intercesión,, (Re,,96)(Sol,,260)", sC: ""},
            { line: "tú nos libras del fuego de las pasiones, (Do,,75)(Sol,,326)", sC: ""},
            { line: "con el rocío de tu intercesión., (Re,,98)(Sol,,258)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡HUMILDE MARÍA, TODA INMACULADA,, (Mi,m,25)(Do,,152)(La,,198)(Re,,331)", sC: "ta as"},
            { line: "ÁNGEL DE LA GUARDA DEL TERCER MILENIO;, (Do,,10)(Sol,,392)", sC: "as"},
            { line: "LUGAR DE TODAS LAS GRACIAS;, (Re,,47)(Sol,,251)", sC: "as"},
            { line: "IMAGEN DE LA VIRTUD;, (Do,,30)(Sol,,197)", sC: "as"},
            { line: "TU BELLEZA CANTA LA JERUSALÉN CELESTE!, (Re,,137)(Sol,,382)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Tú nos has mostrado el camino!, (Mi,m,20)(Do,,58)(La,,277)", sC: "tc"},
            { line: "Bajo la cruz nos has recibido,, (Do,,96)(Sol,,244)", sC: ""},
            { line: "Madre del camino ardiente; (Re,,22)(Sol,,219)", sC: ""},
            { line: "bajo la cruz nos has recibido: (Do,,104)(Sol,,245)", sC: ""},
            { line: "¡cómo decir no a tu Hijo sufriente!, (Re,,135)(Sol,,284)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡HUMILDE MARÍA, TODA INMACULADA, (Mi,m,25)(Do,,152)(La,,198)(Re,,331)", sC: "ta as", lines: [
            { line: "ÁNGEL DE LA GUARDA DEL TERCER MILENIO;, (Do,,10)(Sol,,392)", sC: "as"},
            { line: "LUGAR DE TODAS LAS GRACIAS;, (Re,,47)(Sol,,251)", sC: "as"},
            { line: "IMAGEN DE LA VIRTUD;, (Do,,30)(Sol,,197)", sC: "as"},
            { line: "TU BELLEZA CANTA LA JERUSALÉN CELESTE!, (Re,,137)(Sol,,382)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: MARÍA, MADRE DEL CAMINO ARDIENTE
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           MARÍA, PEQUEÑA MARÍA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "mariapequenamaria",
        tt: "María, Pequeña María",
        title: "María, Pequeña María",
        subtitle: "Himno a la Virgen María (Kiko Argüello)",
        category: ["Precatecumenado","Vírgen María","Cuaresma","Penitencial"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "113",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/mariapequenamaria.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=mariamadredelcaminoardiente",
        sig: "/src/index.html?canto=meensenaraselcaminodelavida",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "María, pequeña María,, (Re,,11)(Fa#,m,199)", sC: "tc"},
            { line: "tú eres la brisa suave de Elías,, (Sol,,35)(Mim6,,259)", sC: ""},
            { line: "el susurro del Espíritu de Dios., (La,7,63)(Re,,265)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú eres la zarza ardiente de Moisés, (Fa#,m,336)", sC: ""},
            { line: "que llevas al Señor y no te consumes., (Sol,,61)(La,,304)(La,7,366)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú eres Hel lugar junto a mí», (Re,,36)(Fa#,,258)", sC: ""},
            { line: "que mostró el Señor a Moisés,, (Sol,,101)(Re,,265)", sC: ""},
            { line: "tú eres la hendidura de la roca, (Sol,,37)(Re,,263)", sC: ""},
            { line: "que Dios cubre con su mano, (La,,237)", sC: ""},
            { line: "mientras que pasa su gloria., (Sol,,31)(La,,117)(Re,,236)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "VENGA EL SEÑOR CON NOSOTROS,, (Re,,11)(Fa#,,269)", sC: "ta as"},
            { line: "SI HEMOS HALLADO GRACIA A SUS OJOS., (Sol,,40)(Re,,354)", sC: "as"},
            { line: "ES CIERTO QUE SOMOS PECADORES,, (Sol,,55)(Re,,302)", sC: "as"},
            { line: "MAS RUEGA TÚ POR NOSOTROS,, (La,,253)", sC: "as"},
            { line: "Y SEREMOS SU PUEBLO Y SU HEREDAD., (Sol,,61)(La,,188)(Re,,357)", sC: "as"},
    ], lder: [
            { line: "María, pequeña María,, (Re,,12)(Fa#,m,199)", sC: "tc"},
            { line: "hija de Jerusalén,, (Sol,,14)(Mi,m6,146)", sC: ""},
            { line: "Madre de todos los pueblos,, (Re,,10)(Fa#,m,212)", sC: ""},
            { line: "Virgen de Nazaret., (Sol,,12)(La,,157)(La,7,196)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú eres la nube del desierto, (Re,,39)(Fa#,,231)", sC: ""},
            { line: "que protege la marcha de Israel,, (Sol,,84)(Re,,291)", sC: ""},
            { line: "tú eres la tienda de la reunión,, (Sol,,31)(Re,,268)", sC: ""},
            { line: "el arca que lleva la alianza,, (La,,215)", sC: ""},
            { line: "el Santuario de la gloria del Señor., (Sol,,86)(La,,196)(Re,,309)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VENGA EL SEÑOR CON NOSOTROS, (Re,,11)(Fa#,,269)", sC: "ta as", lines: [
            { line: "SI HEMOS HALLADO GRACIA A SUS OJOS., (Sol,,40)(Re,,354)", sC: "as"},
            { line: "ES CIERTO QUE SOMOS PECADORES,, (Sol,,55)(Re,,302)", sC: "as"},
            { line: "MAS RUEGA TÚ POR NOSOTROS,, (La,,253)", sC: "as"},
            { line: "Y SEREMOS SU PUEBLO Y SU HEREDAD., (Sol,,61)(La,,188)(Re,,357)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: MARÍA, PEQUEÑA MARÍA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           ME ENSEÑARÁS EL CAMINO DE LA VIDA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "meensenaraselcaminodelavida",
        tt: "Me Enseñarás El Camino De La Vida",
        title: "Me Enseñarás El Camino De La Vida",
        subtitle: "Salmo 16 (15)",
        category: ["Precatecumenado","Pascua","Pentecostés","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "114",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/meensenaraselcaminodelavida.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=mariapequenamaria",
        sig: "/src/index.html?canto=mehasseducidosenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ME ENSEÑARÁS EL CAMINO DE LA VIDA,, (La,m,20)(Fa,,352)", sC: "tc as"},
            { line: "ME ENSEÑARÁS EL CAMINO DE LA VIDA,, (Re,m,22)(La,m,358)", sC: "as"},
            { line: "ME SACIARÁS DE GOZO EN TU PRESENCIA,, (Mi,,118)", sC: "as"},
            { line: "DE ALEGRÍA PERPETUA A TU DERECHA., (Re,m,103)(Mi,,331)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Protégeme, Dios mío, en ti me refugio., (La,m,20)(Fa,,185)(Re,m,228)(La,m,328)", sC: "tc"},
            { line: "Yo digo a Dios: «Tú eres mi Señor,, (La,m,20)(Fa,,116)(Re,m,165)(La,m,303)", sC: ""},
            { line: "sin ti no tengo nada»., (Mi,,43)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ME ENSEÑARÁS EL CAMINO DE LA VIDA, (La,m,20)(Fa,,352)", sC: "ta as", lines: [
            { line: "ME ENSEÑARÁS EL CAMINO DE LA VIDA,, (Re,m,22)(La,m,358)", sC: "as"},
            { line: "ME SACIARÁS DE GOZO EN TU PRESENCIA,, (Mi,,118)", sC: "as"},
            { line: "DE ALEGRÍA PERPETUA A TU DERECHA., (Re,m,103)(Mi,,331)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor es mi heredad y mi copa,, (La,m,20)(Fa,,289)", sC: "tc"},
            { line: "mi vida está en sus manos;, (Re,m,22)(La,m,214)", sC: ""},
            { line: "me ha tocado en suerte un lote hermoso,, (Fa,,355)", sC: ""},
            { line: "me encanta mi heredad., (Re,m,22)(Mi,,211)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Bendigo al Señor que me aconseja,, (La,m,20)(Fa,,308)", sC: "tc"},
            { line: "hasta de noche instruye mi corazón,, (Re,m,20)", sC: ""},
            { line: "tengo siempre delante de mí al Señor,, (Mi,,80)", sC: ""},
            { line: "está a mi derecha, no vacilaré., (Re,m,22)(Mi,,285)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ME ENSEÑARÁS EL CAMINO DE LA VIDA, (La,m,20)(Fa,,352)", sC: "ta as", lines: [
            { line: "ME ENSEÑARÁS EL CAMINO DE LA VIDA,, (Re,m,22)(La,m,358)", sC: "as"},
            { line: "ME SACIARÁS DE GOZO EN TU PRESENCIA,, (Mi,,118)", sC: "as"},
            { line: "DE ALEGRÍA PERPETUA A TU DERECHA., (Re,m,103)(Mi,,331)", sC: "as"},  ]},
    ], lder: [
            { line: "Por eso se alegra mi corazón,, (La,m,20)(Fa,,258)", sC: "tc"},
            { line: "exulta mi alma,, (Re,m,22)(La,m,109)", sC: ""},
            { line: "y mi carne descansa serena;, (Mi,,60)", sC: ""},
            { line: "porque no abandonarás, (Re,m,91)", sC: ""},
            { line: "mi vida en el sepulcro,, (Mi,,170)", sC: ""},
            { line: "ni dejarás que tu santo, (Re,m,79)", sC: ""},
            { line: "experimente la corrupción,, (Mi,,233)", sC: ""},
            { line: "la corrupción., (Re,m,22)(Mi,,106)", sC: "melisma"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ME ENSEÑARÁS EL CAMINO DE LA VIDA, (La,m,20)(Fa,,352)", sC: "ta as", lines: [
            { line: "ME ENSEÑARÁS EL CAMINO DE LA VIDA,, (Re,m,22)(La,m,358)", sC: "as"},
            { line: "ME SACIARÁS DE GOZO EN TU PRESENCIA,, (Mi,,118)", sC: "as"},
            { line: "DE ALEGRÍA PERPETUA A TU DERECHA., (Re,m,103)(Mi,,331)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ME ENSEÑARÁS EL CAMINO DE LA VIDA
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           ME HAS SEDUCIDO, SEÑOR                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "mehasseducidosenor",
        tt: "Me Has Seducido, Señor ",
        title: "Me Has Seducido, Señor ",
        subtitle: "Jeremias 20,7-18",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "115",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/mehasseducidosenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=meensenaraselcaminodelavida",
        sig: "/src/index.html?canto=miradqueestupendo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "ME HAS SEDUCIDO, SEÑOR,, (La,m,20)(Mi,7,242)", sC: "ta as"},
            { line: "Y ME HE DEJADO SEDUCIR., (La,m,235)", sC: "as r1"},
            { line: "HAS LUCHADO CONMIGO, (Mi,7,207)", sC: "as"},
            { line: "Y ME HAS VENCIDO., (La,m,154)", sC: "as"},
            { line: "HAS SIDO MÁS FUERTE QUE YO,, (Fa,,10)", sC: "as"},
            { line: "ME HAS PODIDO., (Mi,7,127)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cuando hablo debo gritar:, (La,m,20)(Mi,7,229)", sC: "tc"},
            { line: "«¡Violencia!», «¡Opresión!», (La,m,202)", sC: ""},
            { line: "Así tu palabra es para mí befa y oprobio., (Mi,7,95)(La,m,337)", sC: ""},
            { line: "Me decía: «No pensaré más en Él,, (Mi,7,74)", sC: ""},
            { line: "no hablaré más en su nombre•., (La,m,231)", sC: ""},
            { line: "Mas en mi corazón, (Mi,7,16)", sC: ""},
            { line: "había un fuego ardiente,, ", sC: ""},
            { line: "que corría por mis huesos., (Fa,,79)(Mi,,206)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MAS EN MI CORAZÓN, (Mi,7,17)", sC: "ta as"},
            { line: "HABÍA UN FUEGO ARDIENTE,, ", sC: "as"},
            { line: "QUE CORRÍA POR MIS HUESOS., (Fa,,107)(Mi,,255)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ME HAS SEDUCIDO, SEÑOR, (La,m,20)(Mi,7,242)", sC: "ta as", lines: [
            { line: "Y ME HE DEJADO SEDUCIR., (La,m,235)", sC: "as"},
            { line: "HAS LUCHADO CONMIGO, (Mi,7,207)", sC: "as"},
            { line: "Y ME HAS VENCIDO., (La,m,154)", sC: "as"},
            { line: "HAS SIDO MÁS FUERTE QUE YO,, (Fa,,10)", sC: "as"},
            { line: "ME HAS PODIDO., (Mi,7,124)", sC: "as"},  ]},
    ], lder: [
            { line: "Maldito el día en que nací. (Mi,7,16)", sC: "tc"},
            { line: "Maldito el hombre ", sC: ""},
            { line: "que le dio la noticia a mi padre: ", sC: ""},
            { line: "«Te ha nacido un hijo». ", sC: ""},
            { line: "¿Por qué he salido del seno de mi madre, ", sC: ""},
            { line: "si sólo debo ver penas y aflicción?, ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MAS EL SEÑOR ESTÁ CONMIGO,, (Do,,10)(Sol,,272)", sC: "ta as"},
            { line: "COMO UN HÉROE VALEROSO., (Do,,235)", sC: "as r2"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cantad himnos al Señor, alabad su Nombre, (La,m,20)(Mi,7,88)(La,m,360)", sC: "tc"},
            { line: "que ha salvado la vida de este pobre., (Fa,,114)(Mi,7,311)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MAS EL SEÑOR ESTÁ CONMIGO,, (Do,,10)(Sol,,270)", sC: "ta as"},
            { line: "COMO UN HÉROE VALEROSO., (Do,,239)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ME HAS SEDUCIDO, SEÑOR, (La,m,20)(Mi,7,242)", sC: "ta as", lines: [
            { line: "Y ME HE DEJADO SEDUCIR., (La,m,235)", sC: "as"},
            { line: "HAS LUCHADO CONMIGO, (Mi,7,207)", sC: "as"},
            { line: "Y ME HAS VENCIDO., (La,m,154)", sC: "as"},
            { line: "HAS SIDO MÁS FUERTE QUE YO,, (Fa,,10)", sC: "as"},
            { line: "ME HAS PODIDO., (Mi,7,124)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: ME HAS SEDUCIDO, SEÑOR 
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           MIRAD QUÉ ESTUPENDO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "miradqueestupendo",
        tt: "Mirad Qué Estupendo",
        title: "¡Mirad Qué Estupendo!",
        subtitle: "Salmo 133 (132)",
        category: ["Precatecumenado","Paz","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "116",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/miradqueestupendo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=mehasseducidosenor",
        sig: "/src/index.html?canto=misericordiadiosmio",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡MIRAD QUÉ ESTUPENDO,, (Mi,m,20)", sC: "ta as"},
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,66)(Si,7,275)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡MIRAD QUÉ ESTUPENDO,, (Mi,m,50)", sC: "as"},
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,68)(Si,7,252)(Do,,288)(Si,7,318)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Es ungüento perfumado que desciende,, (La,m,80)(Si,7,335)", sC: "tc"},
            { line: "que desciende por la barba de Aarón., (La,m,96)(Si,7,337)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ES UNGÜENTO PERFUMADO, (Do,,100)", sC: "ta as"},
            { line: "QUE DESCIENDE, (Si,7,110)", sC: "as"},
            { line: "HASTA EL BORDE DEL MANTO., (Do,,61)(Si,7,242)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡MIRAD QUÉ ESTUPENDO, (Mi,m,20)", sC: "ta as", lines: [
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,68)(Si,7,275)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡MIRAD QUÉ ESTUPENDO,, (Mi,m,50)", sC: "as"},
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,68)(Si,7,252)(Do,,288)(Si,7,318)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Es como rocío del Hermón, (La,m,44)(Si,7,193)", sC: "tc"},
            { line: "que desciende sobre el monte Sión;, (La,m,97)(Si,7,306)", sC: ""},
            { line: "ES ROCÍO DEL HERMÓN QUE DESCIENDE, (Do,,70)(Si,7,344)", sC: "as"},
            { line: "SOBRE EL MONTE SIÓN., (Do,,62)(Si,7,187)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡MIRAD QUÉ ESTUPENDO, (Mi,m,20)", sC: "ta as", lines: [
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,68)(Si,7,275)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡MIRAD QUÉ ESTUPENDO,, (Mi,m,50)", sC: "as"},
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,68)(Si,7,252)(Do,,288)(Si,7,318)", sC: "as"},  ]},
    ], lder: [
            { line: "Porque allí el Señor nos ha dado,, (La,m,101)(Si,7,277)", sC: "tc"},
            { line: "nos ha dado su bendición., (La,m,88)(Si,7,225)", sC: ""},
            { line: "PORQUE ALLÍ EL SEÑOR NOS HA DADO,, (Do,,126)(Si,7,339)", sC: "ta as"},
            { line: "NOS HA DADO SU AMOR., (Do,,65)(Si,7,211)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡MIRAD QUÉ ESTUPENDO, (Mi,m,20)", sC: "ta as", lines: [
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,68)(Si,7,275)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡MIRAD QUÉ ESTUPENDO,, (Mi,m,50)", sC: "as"},
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,68)(Si,7,252)(Do,,288)(Si,7,318)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque allí el Señor nos ha dado, (La,m,97)(Si,7,277)", sC: "tc"},
            { line: "la vida eternamente., (La,m,39)(Si,7,151)", sC: ""},
            { line: "PORQUE ALLÍ EL SEÑOR NOS HA DADO, (Do,,129)(Si,7,336)", sC: "ta as"},
            { line: "LA VIDA PARA SIEMPRE., (Do,,45)(Si,7,166)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡MIRAD QUÉ ESTUPENDO, (Mi,m,20)", sC: "ta as", lines: [
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,68)(Si,7,275)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡MIRAD QUÉ ESTUPENDO,, (Mi,m,50)", sC: "as"},
            { line: "GUSTAD QUÉ ALEGRÍA, ", sC: "as"},
            { line: "EL AMOR ENTRE LOS HERMANOS!, (Do,,68)(Si,7,252)(Do,,288)(Si,7,318)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: MIRAD QUÉ ESTUPENDO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════╗
║           MISERICORDIA, DIOS MÍO               ║
╚════════════════════════════════════════════════╝  */
   {
        id: "misericordiadiosmio",
        tt: "Misericordia, Dios Mío",
        title: "Misericordia, Dios Mío",
        subtitle: "Salmo 51 (50)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "117",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/misericordiadiosmio.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=miradqueestupendo",
        sig: "/src/index.html?canto=misericordiamiamisericordia",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Misericordia, Dios mío, por tu bondad, (Re,m,22)(Sol,m,346)", sC: "tc"},
            { line: "POR TU INMENSA COMPASIÓN, ", sC: "ta as"},
            { line: "BORRA MI CULPA; (Re,m,127)", sC: "as"},
            { line: "lava del todo mi delito, (Sol,m,194)", sC: "tc"},
            { line: "LIMPIA MI PECADO. (Re,m,151)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pues yo reconozco mi culpa, ", sC: "tc ptop0"},
            { line: "TENGO SIEMPRE PRESENTE MI PECADO: ", sC: "ta as ptop0"},
            { line: "contra Ti, contra Ti sólo pequé, ", sC: "tc ptop0"},
            { line: "COMETÍ LA MALDAD QUE ABORRECES. ", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En la sentencia tendrás razón, ", sC: "tc ptop0"},
            { line: "EN EL JUICIO RESULTARÁS INOCENTE. ", sC: "ta as ptop0"},
            { line: "Mira, en la culpa nací, ", sC: "tc ptop0"},
            { line: "PECADOR ME CONCIBIÓ MI MADRE. ", sC: "ta as ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Te gusta un corazón sincero, ", sC: "tc ptop0"},
            { line: "Y EN MI INTERIOR, ", sC: "ta as ptop0"},
            { line: "ME INCULCAS SABIDURÍA.", sC: "as ptop0"},
            { line: "Rocíame con el hisopo: quedaré limpio;", sC: "tc ptop0"},
            { line: "LÁVAME: QUEDARÉ, ", sC: "ta as ptop0"},
            { line: "MÁS BLANCO QUE LA NIEVE. ", sC: "as ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hazme oír el gozo y la alegría, ", sC: "tc ptop0"},
            { line: "QUE SE ALEGREN, ", sC: "ta as ptop0"},
            { line: "LOS HUESOS QUEBRANTADOS. ", sC: "as ptop0"},
            { line: "Aparta de mi pecado tu vista, ", sC: "tc ptop0"},
            { line: "BORRA EN MÍ TODA CULPA. ", sC: "ta as ptop0"},
    ], lder: [
            { line: "Oh Dios, crea en mí un corazón puro, (Re,m,22)(Sol,m,324)", sC: "tc ptop0"},
            { line: "RENUÉVAME POR DENTRO, ", sC: "ta as ptop0"},
            { line: "CON ESPÍRITU FIRME; ", sC: "as ptop0"},
            { line: "no me arrojes lejos de tu rostro, ", sC: "tc ptop0"},
            { line: "NO ME QUITES TU SANTO ESPÍRITU. ", sC: "ta as ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Devuélveme la alegría de tu salvación, ", sC: "tc ptop0"},
            { line: "AFIÁNZAME CON ESPÍRITU GENEROSO; ", sC: "ta as ptop0"},
            { line: "enseñaré a los malvados tus caminos, ", sC: "tc ptop0"},
            { line: "LOS PECADORES VOLVERÁN A TI. ", sC: "ta as ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Líbrame de la sangre, oh Dios, ", sC: "tc ptop0"},
            { line: "Dios, Salvador mío, ", sC: "ptop0"},
            { line: "Y CANTARÁ MI LENGUA TU JUSTICIA. ", sC: "ta as ptop0"},
            { line: "Señor, me abrirás los labios, ", sC: "tc ptop0"},
            { line: "Y MI BOCA PROCLAMARÁ TU ALABANZA. ", sC: "as ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los sacrificios no te satisfacen: ", sC: "tc ptop0"},
            { line: "SI TE OFRECIERA UN HOLOCAUSTO, ", sC: "ta as ptop0"},
            { line: "TÚ NO LO QUERRÍAS. ", sC: "as"},
            { line: "Mi sacrificio es un espíritu quebrantado; ", sC: "tc ptop0"},
            { line: "UN CORAZÓN QUEBRANTADO Y, ", sC: "ta as ptop0"},
            { line: "HUMILLADO, TÚ NO LO DESPRECIAS. ", sC: "as ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Señor, por tu bondad, favorece a Sión, ", sC: "tc ptop0"},
            { line: "RECONSTRUYE, ", sC: "ta as ptop0"},
            { line: "LAS MURALLAS DE JERUSALÉN: ", sC: "as ptop0"},
            { line: "Entonces aceptarás los sacrificios rituales, ", sC: "tc ptop0"},
            { line: "ofrendas y holocaustos, ", sC: "tc ptop0"},
            { line: "SOBRE TU ALTAR, ", sC: "ta as ptop0"},
            { line: "SE INMOLARÁN NOVILLOS. ", sC: "as ptop0"},
]}, // ULTIMA LINEA DEL CANTO: MISERICORDIA, DIOS MÍO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           MISERICORDIA MÍA, MISERICORDIA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "misericordiamiamisericordia",
        tt: "Misericordia Mía, Misericordia",
        title: "Misericordia Mía, Misericordia",
        subtitle: "Salmo 51 (50)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "118",
        notes: "",
        mant: "No",
        //audioSrc: "https://audio.resucito.do/misericordiamiamisericordia.mp3",
        audioSrc: "https://audio.resucito.do/misericordiadiosmio.mp3",

// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=misericordiadiosmio",
        sig: "/src/index.html?canto=muchomehanperseguido",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "MISERICORDIA MÍA, MISERICORDIA… (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "tc as r1"},
            { line: "Misericordia, Dios mío, por tu bondad, (Mi,m,20)(La,m,345)", sC: "tc"},
            { line: "por tu inmensa compasión borra mi culpa; (Mi,m,368)", sC: ""},
            { line: "lava del todo mi delito,, (La,m,196)", sC: ""},
            { line: "limpia mi pecado. (Mi,m,134)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex junte", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { line: "Pues yo reconozco mi culpa, ", sC: "junte"},
            { line: "tengo siempre presente mi pecado: ", sC: "junte"},
            { line: "contra Ti, contra Ti sólo pequé, ", sC: "junte"},
            { line: "cometí la maldad que aborreces. ", sC: "junte"},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex junte", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { line: "En la sentencia tendrás razón, ", sC: "junte"},
            { line: "en el juicio resultarás inocente. ", sC: "junte"},
            { line: "Mira, en la culpa nací, ", sC: "junte"},
            { line: "pecador me concibió mi madre. ", sC: "junte"},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { line: "Te gusta un corazón sincero, ", sC: "junte"},
            { line: "y en mi interiorme inculcas sabiduría. ", sC: "junte"},
            { line: "Rocíame con el hisopo: quedaré limpio; ", sC: "junte"},
            { line: "lávame: quedaré más blanco que la nieve. ", sC: "junte"},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { line: "Hazme oír el gozo y la alegría, ", sC: "junte"},
            { line: "que se alegren los huesos quebrantados., ", sC: "junte"},
            { line: "Aparta de mi pecado tu vista, ", sC: "junte"},
            { line: "borra en mí toda culpa., ", sC: "junte"},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
    ], lder: [
            { line: "Oh Dios, crea en mí un corazón puro, (Mi,m,20)(La,m,324)", sC: "junte"},
            { line: "renuévame por dentro con espíritu firme; ", sC: "junte"},
            { line: "no me arrojes lejos de tu rostro, ", sC: "junte"},
            { line: "no me quites tu Santo Espíritu. ", sC: "junte"},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_6", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { line: "Devuélveme la alegría de tu salvación, ", sC: "junte"},
            { line: "afiánzame con espíritu generoso; ", sC: "junte"},
            { line: "enseñaré a los malvados tus caminos, ", sC: "junte"},
            { line: "los pecadores volverán a ti., ", sC: "junte"},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_7", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { line: "Líbrame de la sangre, oh Dios, ", sC: "junte"},
            { line: "Dios, Salvador mío,, ", sC: "junte"},
            { line: "y cantará mi lengua tu justicia. ", sC: "junte"},
            { line: "Señor, me abrirás los labios, ", sC: "junte"},
            { line: "y mi boca proclamará tu alabanza. ", sC: "junte"},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_8", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { line: "Los sacrificios no te satisfacen: ", sC: "junte"},
            { line: "si te ofreciera un holocausto, tú no lo querrías. ", sC: "junte"},
            { line: "Mi sacrificio es un espíritu quebrantado; ", sC: "junte"},
            { line: "un corazón quebrantado y humillado, ", sC: "junte"},
            { line: "tú no lo desprecias., ", sC: "junte"},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_9", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { line: "Señor, por tu bondad, favorece a Sión, ", sC: "junte"},
            { line: "reconstruye las murallas de Jerusalén: ", sC: "junte"},
            { line: "Entonces aceptarás los sacrificios rituales, ", sC: "junte"},
            { line: "ofrendas y holocaustos,, ", sC: "junte"},
            { line: "sobre tu altar se inmolarán novillos. ", sC: "junte"},
            { line: "", sC: "adb1 junte"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_10", initialState: "collapsed",
       triggerLine: "MISERICORDIA MÍA (Mi,m,20)", sC: "ta as zindex", lines: [
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as sub"},
            { line: "MISERICORDIA MÍA, MISERICORDIA (Mi,m,20)(Re,,248)(Mi,m,291)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: MISERICORDIA MÍA, MISERICORDIA
// SIGUIENTE CANTO DEBAJO
/*
╔══════════════════════════════════════════════════╗
║           MUCHO ME HAN PERSEGUIDO                ║
╚══════════════════════════════════════════════════╝  */
   {
        id: "muchomehanperseguido",
        tt: "Mucho Me Han Perseguido ",
        title: "Mucho Me Han Perseguido ",
        subtitle: "Salmo 129 (128)",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "119",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/muchomehanperseguido.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=misericordiamiamisericordia",
        sig: "/src/index.html?canto=noestaaquiresucito",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Mucho me han perseguido desde mi juventud,, (La,m,20)(Mi,,422)", sC: "tc"},
            { line: "mucho me han perseguido, que lo diga Israel., (La,m,418)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MUCHO ME HAN PERSEGUIDO, (La,m,20)", sC: "ta as"},
            { line: "DESDE MI JUVENTUD,, (Mi,,178)", sC: "as"},
            { line: "MUCHO ME HAN PERSEGUIDO, ", sC: "as"},
            { line: "PERO NO HAN PODIDO CONMIGO., (La,m,286)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sobre mi espalda araron aradores,, (La,m,20)(Mi,,291)", sC: "tc"},
            { line: "sobre mi espalda alargaron sus surcos., (La,m,324)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SOBRE MI ESPALDA ARARON, (La,m,20)", sC: "ta as"},
            { line: "LOS ARADORES,, (Mi,,107)", sC: "as"},
            { line: "SOBRE MI ESPALDA ALARGARON, ", sC: "as"},
            { line: "SUS SURCOS., (La,m,63)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mas el Señor, que es justo,, (La,m,20)(Mi,,214)", sC: "tc"},
            { line: "rompió las coyundas de los malvados., (La,m,315)", sC: ""},
            { line: "Mas el Señor, que es justo,, (Mi,,214)", sC: ""},
            { line: "rompió las coyundas de los malvados., (La,m,314)", sC: ""},
    ], lder: [
            { line: "Retrocedan los que odian a Sión,, (La,m,20)(Mi,,294)", sC: "tc"},
            { line: "retrocedan los que odian a Sión., (La,m,285)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "RETROCEDAN LOS QUE ODIAN A SIÓN,, (La,m,20)(Mi,,343)", sC: "ta as"},
            { line: "RETROCEDAN LOS QUE ODIAN A SIÓN., (La,m,341)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que sean como la hierba, (La,m,20)", sC: "tc"},
            { line: "que crece en el tejado,, (Mi,,180)", sC: ""},
            { line: "como la hierba que se seca, ", sC: ""},
            { line: "antes de arrancarla., (La,m,154)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "De ella no llena el segador su mano,, (Mi,,306)", sC: ""},
            { line: "de ella no llena su regazo el gavillador., (La,m,354)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "RETROCEDAN LOS QUE ODIAN A SIÓN, (La,m,20)(Mi,,344)", sC: "ta as", lines: [
            { line: "RETROCEDAN LOS QUE ODIAN A SIÓN., (La,m,341)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "MUCHO ME HAN PERSEGUIDO, (La,m,20)", sC: "ta as", lines: [
            { line: "DESDE MI JUVENTUD,, (Mi,,178)", sC: "as"},
            { line: "MUCHO ME HAN PERSEGUIDO, ", sC: "as"},
            { line: "PERO NO HAN PODIDO CONMIGO., (La,m,286)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: MUCHO ME HAN PERSEGUIDO 
// SIGUIENTE CANTO DEBAJO

// LETRA N
/*
╔════════════════════════════════════════════════╗
║           NO ESTÁ AQUÍ, RESUCITÓ               ║
╚════════════════════════════════════════════════╝  */
   {
        id: "noestaaquiresucito",
        tt: "No Está Aquí, Resucitó",
        title: "No Está Aquí, Resucitó",
        subtitle: "Mateo 28,1-8",
        category: ["Precatecumenado","Pascua","Pentecostés","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "2",
        nCan: "",
        nCanURL: "",
        dbno: "120",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/noestaaquiresucito.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=muchomehanperseguido",
        sig: "/src/index.html?canto=nohayenelparecer",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Pasado el sábado,, (Do,,10)(Mi,,180)", sC: "tc"},
            { line: "al alba del primer día de la semana,, (Fa,,305)", sC: ""},
            { line: "María Magdalena y la otra María, (Re,m,297)", sC: ""},
            { line: "fueron al sepulcro., (Mi,,132)", sC: ""},
            { line: "Cuando de pronto se produjo un terremoto,, (Re,m,132)(Mi,,381)", sC: ""},
            { line: "el Ángel del Señor bajó del cielo,, (Fa,,11)(Sol,,199)(Sol,,321)(Mi,,353)", sC: ""},
            { line: "e hizo rodar la piedra., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y el Ángel dijo a las mujeres:, (Re,m,20)(Mi,,236)", sC: ""},
            { line: "«No temáis, sé que buscáis a Jesús,, (Re,7,22)(Do,7,132)", sC: ""},
            { line: "el Crucificado., (Re,7,20)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No está aquí, ha resucitado., (Sol,m,24)(Re,7,115)(Sol,m,234)", sC: "tc"},
            { line: "NO ESTÁ AQUÍ, HA RESUCITADO., (Re,7,130)(Sol,m,267)", sC: "ta as"},
            { line: "No está aquí, resucitó,, (Do,m,112)(Re,7,202)", sC: "tc"},
            { line: "NO ESTÁ AQUÍ, RESUCITÓ., (Do,m,128)(Re,7,241)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Id de prisa a decir a sus discípulos:, (Sol,m,24)(Re,7,274)", sC: "tc"},
            { line: "ha resucitado de entre los muertos., (Sol,m,286)", sC: ""},
            { line: "Id de prisa a decir a sus discípulos:, (Re,7,272)", sC: ""},
            { line: "ha resucitado de entre los muertos, (Sol,m,289)", sC: ""},
            { line: "y os precede en Galilea., (Do,m,21)(Re,7,207)", sC: ""},
    ], lder: [
            { line: "NO ESTÁ AQUÍ, RESUCITÓ., (Sol,m,24)(Re,7,133)(Sol,m,233)", sC: "ta as"},
            { line: "NO ESTÁ AQUÍ, RESUCITÓ., (Re,7,133)(Sol,m,233)", sC: "as"},
            { line: "NO ESTÁ AQUÍ, RESUCITÓ., (Do,m,139)(Re,7,230)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y os precede en Galilea,, (Do,m,18)(Re,7,209)", sC: "tc"},
            { line: "Y OS PRECEDE EN GALILEA;, (Do,m,18)(Re,7,241)", sC: "ta as"},
            { line: "allí le veréis,, (Do,m,21)(Re,7,92)", sC: "tc "},
            { line: "ALLÍ LE VERÉIS., (Do,m,21)(Re,7,124)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "NO ESTÁ AQUÍ, RESUCITÓ..., (Sol,m,24)(Re,7,133)(Sol,m,233)", sC: "ta as", lines: [
            { line: "NO ESTÁ AQUÍ, RESUCITÓ., (Re,7,133)(Sol,m,233)", sC: "as"},
            { line: "NO ESTÁ AQUÍ, RESUCITÓ., (Do,m,139)(Re,7,230)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y os precede en Galilea,, (Do,m,20)(Re,7,208)", sC: "tc"},
            { line: "Y OS PRECEDE EN GALILEA;, (Do,m,20)(Re,7,243)", sC: "ta as"},
            { line: "allí le veréis,, (Do,m,20)(Re,7,90)", sC: "tc"},
            { line: "ALLÍ LE VERÉIS»., (Do,m,20)(Re,7,120)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: NO ESTÁ AQUÍ, RESUCITÓ
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           NO HAY EN ÉL PARECER               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "nohayenelparecer",
        tt: "No Hay En Él Parecer",
        title: "No Hay En Él Parecer",
        subtitle: "Isaías 53,2ss - Cuarto canto del Siervo de Yahveh",
        category: ["Precatecumenado","Fracción Del Pan","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "121",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/nohayenelparecer.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=noestaaquiresucito",
        sig: "/src/index.html?canto=nolimetangere",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "No hay en Él parecer,, (Do,,10)", sC: "tc"},
            { line: "no hay hermosura, (La,m,147)", sC: ""},
            { line: "que atraiga las miradas,, (Sol,7,189)", sC: ""},
            { line: "no hay en él belleza que agrade., (Do,,271)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Despreciado,, (Do,,10)", sC: ""},
            { line: "desecho de los hombres,, (La,m,169)", sC: ""},
            { line: "varón de dolores,, (Do,,121)", sC: ""},
            { line: "conocedor de todos los quebrantos., (La,m,283)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO,, (Do,,10)", sC: "ta as"},
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO,, (La,m,277)", sC: "as"},
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO,, (Sol,7,277)", sC: "as"},
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO., (Do,,275)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Menospreciado,, (Do,,10)", sC: "tc"},
            { line: "estimado en nada., (La,m,144)", sC: ""},
            { line: "Despreciado,, (Do,,90)", sC: ""},
            { line: "desecho de los hombres,, (La,m,163)", sC: ""},
            { line: "varón de dolores,, (Do,,123)", sC: ""},
            { line: "conocedor de todos los quebrantos., (La,m,286)", sC: ""},
    ], lder: [
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ANTE QUIEN SE VUELVE EL ROSTRO, (Do,,10)", sC: "ta as", lines: [
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO,, (La,m,277)", sC: "as"},
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO,, (Sol,7,277)", sC: "as"},
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO., (Do,,275)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pero fue Él, el que cargó con los pecados., (Do,,10)(La,m,355)", sC: "tc"},
            { line: "Pero fue Él, el que cargó con los dolores., (Do,,97)(La,m,347)", sC: ""},
            { line: "TODOS NOSOTROS, (Fa,,123)", sC: "ta as"},
            { line: "ANDÁBAMOS ERRANTES., (Sol,,180)", sC: "as"},
            { line: "MALTRATADO,, (Do,,96)", sC: "as"},
            { line: "MAS ÉL SE SOMETIÓ,, (La,m,190)", sC: "as"},
            { line: "NO ABRIÓ LA BOCA,, (Do,,151)", sC: "as"},
            { line: "COMO CORDERO LLEVADO AL MATADERO., (La,m,367)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "ANTE QUIEN SE VUELVE EL ROSTRO, (Do,,10)", sC: "ta as", lines: [
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO,, (La,m,277)", sC: "as"},
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO,, (Sol,7,277)", sC: "as"},
            { line: "ANTE QUIEN SE VUELVE EL ROSTRO., (Do,,275)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡MALTRATADO!, (Do,,10)", sC: "ta as"},
            { line: "¡MALTRATADO!, ", sC: "as"},
            { line: "¡MALTRATADO!, ", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: NO HAY EN ÉL PARECER
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           NOLI ME TANGERE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "nolimetangere",
        tt: "Noli Me Tangere",
        title: "Noli Me Tangere",
        subtitle: "Juan 20,15-17",
        category: ["Precatecumenado","Pascua","Pentecostés","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "122",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/nolimetangere.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=nohayenelparecer",
        sig: "/src/index.html?canto=ohcieloslloveddeloalto",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "«Mujer, dime, ¿por qué lloras?, (Do,,12)", sC: "tc"},
            { line: "Mujer, dime, ¿por qué lloras?, (Fa,,231)", sC: ""},
            { line: "¿A quién buscas?, (Do,,104)", sC: ""},
            { line: "¿A quién buscas?, (Sol,,104)", sC: ""},
            { line: "¿A quién buscas?», (Do,,104)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«SEÑOR, SI TE LO HAS LLEVADO TÚ,, (Do,,10)", sC: "ta as"},
            { line: "SEÑOR, SI TE LO HAS LLEVADO TÚ,, (Fa,,318)", sC: "as"},
            { line: "DIME DÓNDE LO HAS PUESTO,, (Do,,239)", sC: "as"},
            { line: "Y YO ME LO LLEVARÉ,, (Sol,,37)(Do,,200)", sC: "as"},
            { line: "Y YO ME LO LLEVARÉ»., (Sol,,36)(Do,,194)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«¡María!», (Fa,m,20)", sC: "tc"},
            { line: "«¡RABBUNÍ!», (Do,m,76)", sC: "ta as"},
            { line: "«¡María!», (Fa,m,20)", sC: "tc"},
            { line: "«¡RABBUNÍ!», (Do,m,69)(Do,,106)", sC: "ta as"},
    ], lder: [
            { line: "«¡Noli me tangere! No me toques,, (Si♭,,21)(Do,,103)(Si♭,,198)(Do,,260)", sC: "tc"},
            { line: "que todavía no he subido al Padre., (Si♭,,14)(Do,,285)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ve y anuncia a mis hermanos,, (Fa,m,20)(Do,m,245)", sC: "tc"},
            { line: "Y ANUNCIA A MIS HERMANOS,, (Fa,m,20)(Do,m,238)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que subo al Padre mío, (La♭,,60)", sC: "tc"},
            { line: "y padre vuestro,, (Sol,,104)", sC: ""},
            { line: "Dios mío y Dios vuestro., (La♭,,70)(Sol,,182)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "QUE SUBO AL PADRE MÍO, (Fa,m,65)", sC: "ta as"},
            { line: "Y PADRE VUESTRO,, (Do,m,124)", sC: "as"},
            { line: "DIOS MÍO Y DIOS VUESTRO., (Fa,m,72)(Do,m,202)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que subo al Padre mío, (La♭,,58)", sC: "tc"},
            { line: "y padre vuestro,, (Sol,,106)", sC: ""},
            { line: "Dios mío y Dios vuestro»., (La♭,,71)(Sol,,181)", sC: "melisma"},
]}, // ULTIMA LINEA DEL CANTO: NOLI ME TANGERE
// SIGUIENTE CANTO DEBAJO
/*

// LETRA O

╔════════════════════════════════════════════════════════╗
║           OH CIELOS, LLOVED DE LO ALTO                 ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "ohcieloslloveddeloalto",
        tt: "Oh Cielos, Lloved De Lo Alto",
        title: "Oh Cielos, Lloved De Lo Alto",
        subtitle: "Isaías 45,8",
        category: ["Precatecumenado","Adviento","Navidad","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "123",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/ohcieloslloveddeloalto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=nolimetangere",
        sig: "/src/index.html?canto=ohdiosportunombre",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "OH CIELOS, LLOVED DE LO ALTO,, (La,m,20)(Fa,,264)", sC: "ta as"},
            { line: "OH NUBES, MANDADNOS AL SANTO., (Sol,,53)(La,m,298)", sC: "as"},
            { line: "OH TIERRA, ÁBRETE, OH TIERRA,, (Mi,,100)(La,m,263)", sC: "as"},
            { line: "Y BROTE EL SALVADOR., (Mi,,52)(La,m,197)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Somos desierto, somos arena., (La,m,20)(Sol,,254)", sC: "tc"},
            { line: "Marana thá,, (Mi,,104)", sC: "tc"},
            { line: "MARANA THÁ., (Sol,,14)(Mi,,124)", sC: "ta as jte"},
            { line: "Somos el viento, nadie nos oye., (La,m,20)(Sol,,250)", sC: "tc"},
            { line: "Marana thá,, (Mi,,104)", sC: "tc"},
            { line: "MARANA THÁ., (Sol,,14)(Mi,,124)", sC: "ta as jte"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "OH CIELOS, LLOVED DE LO ALTO, (La,m,20)(Fa,,264)", sC: "ta as", lines: [
            { line: "OH NUBES, MANDADNOS AL SANTO., (Sol,,53)(La,m,298)", sC: "as"},
            { line: "OH TIERRA, ÁBRETE, OH TIERRA,, (Mi,,100)(La,m,263)", sC: "as"},
            { line: "Y BROTE EL SALVADOR., (Mi,,52)(La,m,197)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Somos tinieblas, nadie nos guía., (La,m,20)(Sol,,250)", sC: "tc"},
            { line: "Marana thá,, (Mi,,104)", sC: "tc"},
            { line: "MARANA THÁ., (Sol,,14)(Mi,,124)", sC: "ta as jte"},
            { line: "Somos cadenas, nadie nos libra., (La,m,20)(Sol,,250)", sC: "tc"},
            { line: "Marana thá,, (Mi,,104)", sC: "tc"},
            { line: "MARANA THÁ., (Sol,,14)(Mi,,124)", sC: "ta as jte"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "OH CIELOS, LLOVED DE LO ALTO, (La,m,20)(Fa,,264)", sC: "ta as", lines: [
            { line: "OH NUBES, MANDADNOS AL SANTO., (Sol,,53)(La,m,298)", sC: "as"},
            { line: "OH TIERRA, ÁBRETE, OH TIERRA,, (Mi,,100)(La,m,263)", sC: "as"},
            { line: "Y BROTE EL SALVADOR., (Mi,,52)(La,m,197)", sC: "as"},  ]},
    ], lder: [
            { line: "Tenemos frío, nadie nos cubre., (La,m,20)(Sol,,250)", sC: "tc"},
            { line: "Marana thá,, (Mi,,104)", sC: "tc"},
            { line: "MARANA THÁ., (Sol,,14)(Mi,,124)", sC: "ta as jte"},
            { line: "Tenemos hambre, nadie nos sacia., (La,m,20)(Sol,,250)", sC: "ta as"},
            { line: "Marana thá,, (Mi,,104)", sC: "tc"},
            { line: "MARANA THÁ., (Sol,,14)(Mi,,124)", sC: "ta as jte"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "OH CIELOS, LLOVED DE LO ALTO, (La,m,20)(Fa,,264)", sC: "ta as", lines: [
            { line: "OH NUBES, MANDADNOS AL SANTO., (Sol,,53)(La,m,298)", sC: "as"},
            { line: "OH TIERRA, ÁBRETE, OH TIERRA,, (Mi,,100)(La,m,263)", sC: "as"},
            { line: "Y BROTE EL SALVADOR., (Mi,,52)(La,m,197)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Somos las lágrimas, que nadie enjuga., (La,m,20)(Sol,,250)", sC: "tc"},
            { line: "Marana thá,, (Mi,,104)", sC: "tc"},
            { line: "MARANA THÁ., (Sol,,14)(Mi,,124)", sC: "ta as jte"},
            { line: "Somos dolor, nadie nos mira., (La,m,20)(Sol,,250)", sC: "tc"},
            { line: "Marana thá,, (Mi,,104)", sC: "tc"},
            { line: "MARANA THÁ., (Sol,,14)(Mi,,124)", sC: "ta as jte"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "OH CIELOS, LLOVED DE LO ALTO, (La,m,20)(Fa,,264)", sC: "ta as", lines: [
            { line: "OH NUBES, MANDADNOS AL SANTO., (Sol,,53)(La,m,298)", sC: "as"},
            { line: "OH TIERRA, ÁBRETE, OH TIERRA,, (Mi,,100)(La,m,263)", sC: "as"},
            { line: "Y BROTE EL SALVADOR., (Mi,,52)(La,m,197)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: OH CIELOS, LLOVED DE LO ALTO
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════════════╗
║           OH DIOS, POR TU NOMBRE                ║
╚═════════════════════════════════════════════════╝  */
   {
        id: "ohdiosportunombre",
        tt: "Oh Dios, por tu nombre sálvame",
        title: "Oh Dios, por tu nombre sálvame",
        subtitle: "Salmo 54 (53)",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "124",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/ohdiosportunombresalvame.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohcieloslloveddeloalto",
        sig: "/src/index.html?canto=ohdiostueresmidios",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "OH DIOS, POR TU NOMBRE SÁLVAME,, (La,m,20)(Fa,7,286)", sC: "ta as"},
            { line: "POR TU PODER HAZME JUSTICIA., (Re,m,22)(Mi,,274)", sC: "as"},
            { line: "OH DIOS, ESCUCHA MI ORACIÓN,, (La,m,20)(Fa,7,288)", sC: "as"},
            { line: "ATIENDE A LAS PALABRAS DE MI BOCA., (Re,m,22)(Mi,,343)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque los arrogantes se han aliado contra mí,, (La,7,20)(Re,m,436)", sC: "tc"},
            { line: "los prepotentes andan buscando mi vida,, (Si♭,7,20)(La,7,361)", sC: ""},
            { line: "no tienen nunca a Dios presente,, (Sol,m,50)(La,7,272)", sC: ""},
            { line: "no tienen nunca a Dios presente., (Si♭,7,47)(La,7,272)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MAS VED, QUE DIOS VIENE EN MI AYUDA,, (Re,m,22)(La,7,354)", sC: "ta as"},
            { line: "EL SEÑOR, EL SEÑOR ME SOSTIENE., (Re,m,77)(La,7,309)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "De todo corazón le ofreceré un sacrificio,, (Sol,m,23)(La,7,355)", sC: "tc"},
            { line: "celebraré su nombre, porque es bueno,, (Sol,m,82)(La,7,343)", sC: ""},
            { line: "de toda angustia Él me ha liberado,, (Si♭,7,20)(La,7,307)", sC: ""},
            { line: "de toda angustia me ha liberado,, (Do,,10)(La,7,285)", sC: ""},
            { line: "de toda angustia me ha liberado., (Do,,10)(Mi,,173)", sC: "melisma"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "OH DIOS, POR TU NOMBRE SÁLVAME, (La,m,20)(Fa,7,286)", sC: "ta as", lines: [
            { line: "POR TU PODER HAZME JUSTICIA., (Re,m,22)(Mi,,274)", sC: "as"},
            { line: "OH DIOS, ESCUCHA MI ORACIÓN,, (La,m,20)(Fa,7,288)", sC: "as"},
            { line: "ATIENDE A LAS PALABRAS DE MI BOCA., (Re,m,22)(Mi,,343)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: OH DIOS, POR TU NOMBRE 
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           OH DIOS, TÚ ERES MI DIOS                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "ohdiostueresmidios",
        tt: "Oh Dios, Tú Eres Mi Dios ",
        title: "Oh Dios, Tú Eres Mi Dios ",
        subtitle: "Salmo 63 (62)",
        category: ["Precatecumenado","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "125",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/ohdiostueresmidios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohdiosportunombre",
        sig: "/src/index.html?canto=ohjesusamormio",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "OH DIOS, TÚ ERES MI DIOS,, (La,m,20)(Re,m,234)", sC: "ta as"},
            { line: "TE ANHELO DESDE LA AURORA,, (La,m,262)", sC: "as r1"},
            { line: "SEDIENTA DE TI ESTÁ MI ALMA., (Fa,,50)(Mi,,143)(La,m,256)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sedienta de ti está mi alma,, (Fa,,11)(Mi,,127)(La,m,232)", sC: "tc"},
            { line: "ansia de ti tiene mi carne:, (Re,m,22)(Mi,,203)", sC: ""},
            { line: "tierra reseca y árida,, (La,m,156)", sC: ""},
            { line: "tierra reseca y árida, sin agua., (Fa,,16)(Mi,,151)(La,m,248)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "OH DIOS, TÚ ERES MI DIOS, (La,m,20)(Re,m,234)", sC: "ta as", lines: [
            { line: "TE ANHELO DESDE LA AURORA,, (La,m,262)", sC: "as r1"},
            { line: "SEDIENTA DE TI ESTÁ MI ALMA., (Fa,,50)(Mi,,143)(La,m,256)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tu amor es para mí más que la vida,, (Fa,,11)(Mi,,178)(La,m,317)", sC: "tc"},
            { line: "por eso te ensalzan mis labios;, (Re,m,22)(Mi,,244)", sC: ""},
            { line: "así yo te bendigo, (La,m,134)", sC: ""},
            { line: "y en tu Nombre levanto mis manos., (Fa,,86)(Mi,,182)(La,m,288)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "OH DIOS, TÚ ERES MI DIOS, (La,m,20)(Re,m,234)", sC: "ta as", lines: [
            { line: "TE ANHELO DESDE LA AURORA,, (La,m,262)", sC: "as r1"},
            { line: "SEDIENTA DE TI ESTÁ MI ALMA., (Fa,,50)(Mi,,143)(La,m,256)", sC: "as"},  ]},
    ], lder: [
            { line: "Unida a ti está mi alma,, (Fa,,10)(Mi,,86)(La,m,189)", sC: "tc"},
            { line: "con fuerza me sostiene tu derecha, (Re,m,22)(Mi,,289)", sC: ""},
            { line: "cuando me acuerdo de ti,, (La,m,233)", sC: ""},
            { line: "cuando en medio de la noche pienso en ti., (Fa,,12)(Mi,,242)(La,m,397)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "OH DIOS, TÚ ERES MI DIOS, (La,m,20)(Re,m,234)", sC: "ta as", lines: [
            { line: "TE ANHELO DESDE LA AURORA,, (La,m,262)", sC: "as r1"},
            { line: "SEDIENTA DE TI ESTÁ MI ALMA., (Fa,,50)(Mi,,143)(La,m,256)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Saciada de ti está mi alma,, (Fa,,12)(Mi,,121)(La,m,221)", sC: "tc"},
            { line: "te canta con júbilo mi boca,, (Re,m,22)(Mi,,228)", sC: ""},
            { line: "porque tú eres mi auxilio, (La,m,212)", sC: ""},
            { line: "y a la sombra de tus alas exulto., (Fa,,70)(Mi,,208)(La,m,268)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "OH DIOS, TÚ ERES MI DIOS, (La,m,20)(Re,m,234)", sC: "ta as", lines: [
            { line: "TE ANHELO DESDE LA AURORA,, (La,m,262)", sC: "as r1"},
            { line: "SEDIENTA DE TI ESTÁ MI ALMA., (Fa,,50)(Mi,,143)(La,m,256)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: OH DIOS, TÚ ERES MI DIOS 
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════╗
║           OH JESÚS, AMOR MÍO               ║
╚════════════════════════════════════════════╝  */
   {
        id: "ohjesusamormio",
        tt: "Oh Jesús, Amor Mío",
        title: "Oh Jesús, Amor Mío",
        subtitle: "(Kiko Argüello)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Fracción Del Pan"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "Melisma",
        nCanURL: "",
        dbno: "126",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/ohjesusamormio.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohdiostueresmidios",
        sig: "/src/index.html?canto=ohmuertedondeestatuvictoria",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Oh Jesús , amor mío,, (La,m,20)(Fa,,174)", sC: "tc ast"},
            { line: "¡cuánto me has amado, ", sC: ""},
            { line: "cuánto me has amado!, (Mi,,189)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "OH JESÚS, AMOR MÍO,, (La,m,75)(Fa,,191)", sC: "ta as"},
            { line: "¡CUÁNTO ME HAS AMADO, ", sC: "as"},
            { line: "CUÁNTO ME HAS AMADO!, (Mi,,207)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú has recibido las espinas de la soberbia de mí,, (La,m,20)(Sol,,117)(La,m,451)", sC: "tc"},
            { line: "para que yo reciba la humildad de ti., (Fa,,148)(Mi,,339)", sC: ""},
            { line: "Tú has recibido los azotes de la lujuria de mí,, (La,m,20)(Sol,,116)(La,m,417)", sC: ""},
            { line: "para que yo reciba el amor y la pureza de ti., (Fa,,149)(Mi,,408)", sC: ""},
            { line: "Tú has sido por la avaricia despojado por mí,, (La,m,20)(Sol,,79)(La,m,414)", sC: ""},
            { line: "para que yo reciba la riqueza de ti., (Fa,,150)(Mi,,319)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "OH JESÚS, AMOR MÍO, (La,m,75)(Fa,,191)", sC: "ta as", lines: [
            { line: "¡CUÁNTO ME HAS AMADO, ", sC: "as"},
            { line: "CUÁNTO ME HAS AMADO!, (Mi,,207)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú has recibido la hiel y el vinagre de mí,, (La,m,20)(Sol,,119)(La,m,382)", sC: "tc"},
            { line: "para que yo reciba la dulzura de ti., (Fa,,147)(Mi,,318)", sC: ""},
            { line: "Tú has recibido el desprecio y los insultos de mí,, (La,m,20)(Sol,,119)(La,m,451)", sC: ""},
            { line: "para que yo reciba la mansedumbre de ti., (Fa,,148)(Mi,,391)", sC: ""},
    ], lder: [
            { line: "Tú has recibido, (La,m,20)(Sol,,117)", sC: ""},
            { line: "los clavos y la lanzada de mí,, (La,m,267)", sC: ""},
            { line: "para que yo reciba la obediencia de ti., (Fa,,147)(Mi,,353)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "OH JESÚS, AMOR MÍO, (La,m,75)(Fa,,191)", sC: "ta as", lines: [
            { line: "¡CUÁNTO ME HAS AMADO, ", sC: "as"},
            { line: "CUÁNTO ME HAS AMADO!, (Mi,,207)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú has sido crucificado por mí,, (La,m,20)(Sol,,111)(La,m,280)", sC: "tc"},
            { line: "para que yo reciba la salvación de ti., (Fa,,147)(Mi,,337)", sC: ""},
            { line: "Tú has recibido la muerte de mí,, (La,m,20)(Sol,,213)(La,m,286)", sC: ""},
            { line: "para que yo reciba la vida de ti., (Fa,,147)(Mi,,286)", sC: ""},
            { line: "Tú has recibido la sepultura de mí,, (La,m,20)(Sol,,238)(La,m,316)", sC: ""},
            { line: "para que yo reciba la resurrección de ti., (Fa,,147)(Mi,,367)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "OH JESÚS, AMOR MÍO, (La,m,75)(Fa,,191)", sC: "ta as", lines: [
            { line: "¡CUÁNTO ME HAS AMADO, ", sC: "as"},
            { line: "CUÁNTO ME HAS AMADO!, (Mi,,207)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "De mí, Señor, tú has recibido, (Mi,,10)(La,m,114)(Sol,,247)", sC: "tc"},
            { line: "el mal, la muerte y el pecado,, (La,m,248)", sC: ""},
            { line: "para que yo reciba de ti sólo a ti mismo., (Fa,,147)(Mi,,331)", sC: ""},
            { line: "A mí, a mí tú te has donado., (Fa,,40)(Mi,,232)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "OH JESÚS, AMOR MÍO, (La,m,75)(Fa,,191)", sC: "ta as", lines: [
            { line: "¡CUÁNTO ME HAS AMADO, ", sC: "as"},
            { line: "CUÁNTO ME HAS AMADO!, (Mi,,207)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: OH JESÚS, AMOR MÍO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           OH MUERTE ¿DÓNDE ESTÁ TU VICTORIA?           ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "ohmuertedondeestatuvictoria",
        tt: "Oh Muerte ¿Dónde Está Tu Victoria?",
        title: "Oh Muerte ¿Dónde Está Tu Victoria?",
        subtitle: "1 Corintios 15",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "127",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/ohmuertedondeestatuvictoria.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohjesusamormio",
        sig: "/src/index.html?canto=ohsenornuestrodios",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "En un instante, en un pestañear de ojos,, (Re,madd9,41)", sC: "tc"},
            { line: "al toque de la trompeta final,, (La,m,20)(La,m6,200)(Re,7,260)", sC: ""},
            { line: "porque sonará la trompeta, ", sC: ""},
            { line: "y los muertos resucitarán incorruptibles, (Sol,,14)(Si,m,151)", sC: ""},
            { line: "y nosotros seremos transformados., (Do,,55)(La,m,139)(Fa#,,293)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "POR ESO CANTAMOS:, (Re,,152)", sC: "ta as"},
            { line: "LA MUERTE ES ABSORBIDA, ", sC: "as"},
            { line: "EN LA VICTORIA. ", sC: "as"},
            { line: "ALELUYA, ALELUYA. ", sC: "as"},
            { line: "OH MUERTE, ¿DÓNDE ESTÁ TU VICTORIA?, (Fa#,,348)", sC: "as"},
            { line: "ALELUYA, ALELUYA., ", sC: "as"},
            { line: "OH MUERTE, ¿DÓNDE ESTÁ TU AGUIJÓN?, (Si,m,362)", sC: "as"},
            { line: "ALELUYA, ALELUYA., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El aguijón de la muerte es el pecado, (La,,10)", sC: "tc"},
            { line: "y la fuerza del pecado está en la Ley,, (Sol,,330)", sC: ""},
            { line: "pero nosotros vencemos en Cristo resucitado., (Fa#,,398)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "POR ESO CANTAMOS, (Re,,152)", sC: "ta as", lines: [
            { line: "LA MUERTE ES ABSORBIDA, ", sC: "as"},
            { line: "EN LA VICTORIA. ", sC: "as"},
            { line: "ALELUYA, ALELUYA. ", sC: "as"},
            { line: "OH MUERTE, ¿DÓNDE ESTÁ TU VICTORIA?, (Fa#,,330)", sC: "as"},
            { line: "ALELUYA, ALELUYA. ", sC: "as"},
            { line: "OH MUERTE, ¿DÓNDE ESTÁ TU AGUIJÓN?, (Si,m,398)", sC: "as"},
            { line: "ALELUYA, ALELUYA. ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (La,,56)(Sol,,149)(Fa#,,271)", sC: "ta as"},
    ], lder: [
            { line: "Yo os recuerdo, hermanos,, (Re,,205)", sC: "tc"},
            { line: "el Evangelio que yo os he anunciado,, (Fa#,,84)(Si,m,316)", sC: ""},
            { line: "el mismo que yo he recibido., (Sol,,44)(Fa#,,239)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "A saber:, (Re,,57)", sC: ""},
            { line: "que Cristo murió por los pecados,, ", sC: ""},
            { line: "SEGÚN LAS ESCRITURAS; ", sC: "ta as"},
            { line: "que Él ha resucitado,, (Fa#,,166)", sC: "tc"},
            { line: "SEGÚN LAS ESCRITURAS; ", sC: "ta as"},
            { line: "que se apareció primero a Pedro,, (Si,m,277)", sC: ""},
            { line: "luego a los Doce,, (La,,128)", sC: ""},
            { line: "después a más, ", sC: ""},
            { line: "de quinientos hermanos a la vez, (Sol,,189)", sC: ""},
            { line: "y por último se me apareció a mí., (Fa#,,309)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "POR ESO CANTAMOS, (Re,,152)", sC: "ta as", lines: [
            { line: "LA MUERTE ES ABSORBIDA, ", sC: "as"},
            { line: "EN LA VICTORIA. ", sC: "as"},
            { line: "ALELUYA, ALELUYA. ", sC: "as"},
            { line: "OH MUERTE, ¿DÓNDE ESTÁ TU VICTORIA?, (Fa#,,330)", sC: "as"},
            { line: "ALELUYA, ALELUYA. ", sC: "as"},
            { line: "OH MUERTE, ¿DÓNDE ESTÁ TU AGUIJÓN?, (Si,m,398)", sC: "as"},
            { line: "ALELUYA, ALELUYA. ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (La,,56)(Sol,,149)(Fa#,,271)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: OH MUERTE ¿DÓNDE ESTÁ TU VICTORIA?
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           OH SEÑOR, NUESTRO DIOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "ohsenornuestrodios",
        tt: "Oh Señor, Nuestro Dios",
        title: "Oh Señor, Nuestro Dios",
        subtitle: "Salmo 8",
        category: ["Precatecumenado","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "2",
        nCan: "",
        nCanURL: "",
        dbno: "128",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/ohSenornuestroDios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohmuerte¿dondeestatuvictoria?",
        sig: "/src/index.html?canto=ostomaredeentrelasnaciones",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡OH SEÑOR, NUESTRO DIOS,, (Re,m,22)", sC: "ta as"},
            { line: "QUÉ ADMIRABLE ES TU NOMBRE, (Fa,,117)", sC: "as"},
            { line: "POR TODA LA TIERRA, TU NOMBRE,, (La,7,160)(Sol,m,357)", sC: "as"},
            { line: "HASTA EL CIELO SE ELEVA TU AMOR!, (La,7,327)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Con la boca de los niños pequeños, (Sol,m,14)(La,7,291)", sC: "tc"},
            { line: "afirmas tu gloria, oh Señor,, (Sol,m,24)(La,7,242)", sC: ""},
            { line: "y reduces al silencio enemigos y rebeldes., (Si♭,,52)(La,7,350)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡OH SEÑOR, NUESTRO DIOS, (Re,m,22)", sC: "ta as", lines: [
            { line: "QUÉ ADMIRABLE ES TU NOMBRE, (Fa,,117)", sC: "as"},
            { line: "POR TODA LA TIERRA, TU NOMBRE,, (La,7,160)(Sol,m,357)", sC: "as"},
            { line: "HASTA EL CIELO SE ELEVA TU AMOR!, (La,7,327)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si contemplo el cielo, obra de tus manos,, (Sol,m,24)(La,7,347)", sC: "tc"},
            { line: "la luna y las estrellas que has creado,, (Sol,m,42)(La,7,325)", sC: ""},
            { line: "¿qué es el hombre para que te acuerdes de él,, (Si♭,,39)(La,7,430)", sC: ""},
            { line: "el hijo del hombre para darle poder?, (Si♭,,34)(La,7,326)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Lo hiciste, lo hiciste poco menos que los ángeles,, (Fa,,10)(La,7,156)(Re,m,406)", sC: ""},
            { line: "de gloria y de honor lo has coronado,, (Si♭,,55)(La,7,318)", sC: ""},
            { line: "todo lo has sometido bajo sus pies., (Si♭,,18)(La,7,326)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "¡OH SEÑOR, NUESTRO DIOS, (Re,m,22)", sC: "ta as", lines: [
            { line: "QUÉ ADMIRABLE ES TU NOMBRE, (Fa,,117)", sC: "as"},
            { line: "POR TODA LA TIERRA, TU NOMBRE,, (La,7,160)(Sol,m,357)", sC: "as"},
            { line: "HASTA EL CIELO SE ELEVA TU AMOR!, (La,7,327)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: OH SEÑOR, NUESTRO DIOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           OS TOMARÉ DE ENTRE LAS NACIONES               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "ostomaredeentrelasnaciones",
        tt: "Os Tomaré De Entre Las Naciones",
        title: "Os Tomaré De Entre Las Naciones",
        subtitle: "Ezequiel 36,24-28",
        category: ["Precatecumenado","Pascua","Pentecostés","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "129",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/ostomaredeentrelasnaciones.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohsenornuestrodios",
        sig: "/src/index.html?canto=palomaincorrupta",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "OS TOMARÉ DE ENTRE LAS NACIONES,, (Re,m,21)(Re,7,110)", sC: "ta as"},
            { line: "OS REUNIRÉ DE TODOS LOS PUEBLOS,, (Sol,m,309)", sC: "as"},
            { line: "OS ROCIARÉ CON AGUA PURA, (La,,119)(Re,m,253)", sC: "as"},
            { line: "Y YO OS PURIFICARÉ., (Si♭,,10)(La,,192)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Os daré un corazón nuevo,, (Re,7,19)", sC: "tc"},
            { line: "infundiré en vosotros un espíritu nuevo,, (Sol,m,338)", sC: ""},
            { line: "os quitaré el corazón de piedra,, (La,,90)(Re,m,255)", sC: ""},
            { line: "os daré un corazón de carne., (Si♭,,64)(La,,231)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "OS TOMARÉ DE ENTRE LAS NACIONES, (Re,m,21)(Re,7,110)", sC: "ta as", lines: [
            { line: "OS REUNIRÉ DE TODOS LOS PUEBLOS,, (Sol,m,309)", sC: "as"},
            { line: "OS ROCIARÉ CON AGUA PURA, (La,,119)(Re,m,253)", sC: "as"},
            { line: "Y YO OS PURIFICARÉ., (Si♭,,10)(La,,192)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pondré mi Espíritu dentro de vosotros, (Re,7,20)(Sol,m,318)", sC: "tc"},
            { line: "y haré que caminéis según mi Palabra., (La,,53)(Rem,,332)", sC: ""},
            { line: "Vosotros seréis mi pueblo, (Si♭,,12)", sC: ""},
            { line: "y yo seré vuestro Dios., (La,,184)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "OS TOMARÉ DE ENTRE LAS NACIONES, (Re,m,21)(Re,7,110)", sC: "ta as", lines: [
            { line: "OS REUNIRÉ DE TODOS LOS PUEBLOS,, (Sol,m,309)", sC: "as"},
            { line: "OS ROCIARÉ CON AGUA PURA, (La,,119)(Re,m,253)", sC: "as"},
            { line: "Y YO OS PURIFICARÉ., (Si♭,,10)(La,,192)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: OS TOMARÉ DE ENTRE LAS NACIONES
// SIGUIENTE CANTO DEBAJO

// LETRA P


/*
╔════════════════════════════════════════════════════════╗
║           PALOMA INCORRUPTA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "palomaincorrupta",
        tt: "Paloma Incorrupta",
        title: "Paloma Incorrupta",
        subtitle: "Kontákion (Romano el Meloda)",
        category: ["Precatecumenado","Vírgen María","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "130",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/palomaincorrupta.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ostomaredeentrelasnaciones",
        sig: "/src/index.html?canto=pentecostes",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Dios te salve, María,, (Mi,m,20)(Fa#,,175)", sC: "tc"},
            { line: "radiante como el sol., (Mi,m,20)(Fa#,,184)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú nos muestras el camino;, (Sol,,14)(Fa#,,230)", sC: ""},
            { line: "esperanza de los confines de la tierra;, (Sol,,13)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "tú eres la sola Paloma incorrupta., (Fa#,,283)", sC: ""},
            { line: "Está en ti toda la belleza del Espíritu;, (Mi,m,20)(Fa#,,313)", sC: ""},
            { line: "gloria que en el mundo, (Sol,,14)", sC: ""},
            { line: "hace bella la creación., (Fa#,,194)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "A DIOS TE SALVE, MARÍA, (Si,m,15)(Mi,m,225)", sC: "ta as", lines: [
            { line: "RADIANTE COMO EL SOL., (Fa#,,218)", sC: "as"},
            { line: "PALOMA INCORRUPTA;, (Mi,m,172)", sC: "as"},
            { line: "REFUGIO DE LAS ALMAS DÉBILES; ", sC: "as"},
            { line: "ARCA DEL ESPÍRITU SANTO., (Sol,,14)(Fa#,,217)", sC: "as"},  ]},
    ], lder: [
            { line: "Dios te salve, María,, (Mi,m,20)(Fa#,,172)", sC: "tc"},
            { line: "radiante como el sol., (Mi,m,20)(Fa#,,185)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú intercedes por todos los hombres;, (Sol,,14)(Fa#,,281)", sC: ""},
            { line: "tú eres el refugio de las almas débiles;, (Mi,m,20)(Fa#,,317)", sC: ""},
            { line: "filacteria de la perfecta castidad;, (Sol,,14)(Fa#,,292)", sC: ""},
            { line: "arca perfumadísima del Espíritu Santo., (Sol,,14)(Fa#,,331)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "A DIOS TE SALVE, MARÍA, (Si,m,15)(Mi,m,225)", sC: "ta as", lines: [
            { line: "RADIANTE COMO EL SOL., (Fa#,,218)", sC: "as"},
            { line: "PALOMA INCORRUPTA;, (Mi,m,172)", sC: "as"},
            { line: "REFUGIO DE LAS ALMAS DÉBILES; ", sC: "as"},
            { line: "ARCA DEL ESPÍRITU SANTO., (Sol,,14)(Fa#,,217)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Dios te salve, María,, (Mi,m,20)(Fa#,,175)", sC: "tc"},
            { line: "radiante como el sol., (Mi,m,20)(Fa#,,182)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "A ti suplican todos los hombres., (Sol,,14)(Fa#,,236)", sC: ""},
            { line: "A ti pedimos por la Iglesia:, (Sol,,14)", sC: ""},
            { line: "dale nuevo vigor de gracia y santidad., (Fa#,,337)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "A DIOS TE SALVE, MARÍA, (Si,m,15)(Mi,m,225)", sC: "ta as", lines: [
            { line: "RADIANTE COMO EL SOL., (Fa#,,218)", sC: "as"},
            { line: "PALOMA INCORRUPTA;, (Mi,m,172)", sC: "as"},
            { line: "REFUGIO DE LAS ALMAS DÉBILES; ", sC: "as"},
            { line: "ARCA DEL ESPÍRITU SANTO., (Sol,,14)(Fa#,,217)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: PALOMA INCORRUPTA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           PENTECOSTÉS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "pentecostes",
        tt: "Pentecostés",
        title: "Pentecostés",
        subtitle: "Hchos de los Apostoles 2,1-13 ",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "131",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/pentecostes.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=palomaincorrupta",
        sig: "/src/index.html?canto=porelamordemisamigos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SI SIENTES UN SOPLO DEL CIELO,, (Re,m,22)(Do,,284)", sC: "ta as"},
            { line: "UN VIENTO QUE MUEVE LAS PUERTAS,, (Re,m,60)(La,,306)", sC: "as"},
            { line: "ESCUCHA LA VOZ QUE TE LLAMA,, (Re,m,46)(Do,,273)", sC: "as"},
            { line: "TE INVITA A CAMINAR LEJOS., (Re,m,64)(La,,235)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ES FUEGO QUE NACE, (Re,m,60)(Sol,,168)", sC: "as"},
            { line: "EN QUIEN SABE ESPERAR,, (La,,72)(Re,m,227)", sC: "as"},
            { line: "EN QUIEN SABE NUTRIR, (Fa,,212)", sC: "as"},
            { line: "ESPERANZAS DE AMOR., (La,7,75)(Re,m,206)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Eran pobres hombres,, (Re,m,22)", sC: "tc"},
            { line: "como tú, como yo,, (Fa,,70)", sC: ""},
            { line: "habían echado las redes al lago,, (Si♭,,40)", sC: ""},
            { line: "recogido los impuestos a la puerta de la ciudad., (Fa,,57)(La,7,438)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que yo recuerde, (Re,m,22)", sC: ""},
            { line: "entre ellos no había ningún doctor,, (Fa,,68)", sC: ""},
            { line: "y aquel que llamaban Maestro, (Si♭,,58)", sC: ""},
            { line: "estaba muerto y sepultado., (Fa,,11)(La,7,228)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
        triggerLine: "SI SIENTES UN SOPLO DEL CIELO, (Re,m,22)(Do,,284)", sC: "ta as", lines: [
            { line: "UN VIENTO QUE MUEVE LAS PUERTAS,, (Re,m,60)(La,,306)", sC: "as"},
            { line: "ESCUCHA LA VOZ QUE TE LLAMA,, (Re,m,46)(Do,,273)", sC: "as"},
            { line: "TE INVITA A CAMINAR LEJOS., (Re,m,64)(La,,235)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ES FUEGO QUE NACE, (Re,m,60)(Sol,,168)", sC: "as"},
            { line: "EN QUIEN SABE ESPERAR,, (La,,72)(Re,m,227)", sC: "as"},
            { line: "EN QUIEN SABE NUTRIR, (Fa,,212)", sC: "as"},
            { line: "ESPERANZAS DE AMOR., (La,7,75)(Re,m,206)", sC: "as"},  ]},
    ], lder: [
            { line: "Tenían un corazón, (Re,m,22)", sC: "tc"},
            { line: "como tú, como yo,, (Fa,,71)", sC: ""},
            { line: "que una mano de hielo oprimía,, (Si♭,,112)", sC: ""},
            { line: "tenían los ojos llenos de lágrimas., (Fa,,35)(La,7,248)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pensaban sin duda en el amigo perdido,, (Re,m,22)(Fa,,351)", sC: ""},
            { line: "en la mujer dejada en la puerta de la casa,, (Si♭,,97)", sC: ""},
            { line: "en la cruz levantada en la cima del monte., (Fa,,74)(La,7,267)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
        triggerLine: "SI SIENTES UN SOPLO DEL CIELO, (Re,m,22)(Do,,284)", sC: "ta as", lines: [
            { line: "UN VIENTO QUE MUEVE LAS PUERTAS,, (Re,m,60)(La,,306)", sC: "as"},
            { line: "ESCUCHA LA VOZ QUE TE LLAMA,, (Re,m,46)(Do,,273)", sC: "as"},
            { line: "TE INVITA A CAMINAR LEJOS., (Re,m,64)(La,,235)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ES FUEGO QUE NACE, (Re,m,60)(Sol,,168)", sC: "as"},
            { line: "EN QUIEN SABE ESPERAR,, (La,,72)(Re,m,227)", sC: "as"},
            { line: "EN QUIEN SABE NUTRIR, (Fa,,212)", sC: "as"},
            { line: "ESPERANZAS DE AMOR., (La,7,75)(Re,m,206)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y el viento llamó a la puerta de la casa,, (Re,m,22)", sC: "tc"},
            { line: "entró como un rayo en toda la estancia, (Fa,,42)", sC: ""},
            { line: "y tuvieron los ojos y el corazón llenos de fuego,, (Si♭,,61)", sC: ""},
            { line: "salieron a la calle gritando de alegría., (Fa,,38)(La,7,213)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hombre que esperas escondido en las sombras,, (Re,m,20)", sC: ""},
            { line: "la voz que canta es para ti;, (Fa,,38)", sC: ""},
            { line: "te trae la alegría de una buena noticia:, (Si♭,,44)", sC: ""},
            { line: "¡EL REINO DE DIOS HA LLEGADO YA!, (Fa,,65)(La,7,277)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
        triggerLine: "SI SIENTES UN SOPLO DEL CIELO, (Re,m,22)(Do,,284)", sC: "ta as", lines: [
            { line: "UN VIENTO QUE MUEVE LAS PUERTAS,, (Re,m,60)(La,,306)", sC: "as"},
            { line: "ESCUCHA LA VOZ QUE TE LLAMA,, (Re,m,46)(Do,,273)", sC: "as"},
            { line: "TE INVITA A CAMINAR LEJOS., (Re,m,64)(La,,235)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ES FUEGO QUE NACE, (Re,m,60)(Sol,,168)", sC: "as"},
            { line: "EN QUIEN SABE ESPERAR,, (La,,72)(Re,m,227)", sC: "as"},
            { line: "EN QUIEN SABE NUTRIR, (Fa,,212)", sC: "as"},
            { line: "ESPERANZAS DE AMOR., (La,7,75)(Re,m,206)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: PENTECOSTÉS
// SIGUIENTE CANTO DEBAJO

/*
╔═══════════════════════════════════════════════════╗
║           POR EL AMOR DE MIS AMIGOS               ║
╚═══════════════════════════════════════════════════╝  */
   {
        id: "porelamordemisamigos",
        tt: "Por El Amor De Mis Amigos",
        title: "Por El Amor De Mis Amigos",
        subtitle: "Salmo 122 (121) - Melodía hebraica ",
        category: ["Precatecumenado","Paz","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "132",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/porelamordemisamigos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=pentecostes",
        sig: "/src/index.html?canto=porqueestanocheesdiferente",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Por el amor de mis amigos,, (Mi,m,20)(La,m,221)", sC: "tc"},
            { line: "por el amor de mis hermanos,, (Mi,m,246)", sC: ""},
            { line: "déjame que yo te diga:, (Si,7,188)", sC: ""},
            { line: "la paz contigo., (Mi,m,109)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Qué alegría cuando me dijeron:, (Mi,m,20)", sC: "tc"},
            { line: "vamos a la casa del Señor!, (La,m,20)(Mi,m,240)", sC: ""},
            { line: "YA ESTÁN PISANDO NUESTROS PIES, (Si,7,333)", sC: "ta as"},
            { line: "TUS UMBRALES JERUSALÉN., (Mi,m,251)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "JERUSALÉN, JERUSALÉN, (Mi,m,20)", sC: "ta as"},
            { line: "DE NUEVO REEDIFICADA., (La,m,72)(Mi,m,200)", sC: "as"},
            { line: "JERUSALÉN,JERUSALÉN, ", sC: "as"},
            { line: "DE NUEVO REEDIFICADA., (Si,7,67)(Mi,m,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "JERUSALÉN,JERUSALÉN,, (Mi,m,20)", sC: "as"},
            { line: "DE NUEVO REEDIFICADA., (La,m,68)(Mi,m,201)", sC: "as"},
            { line: "JERUSALÉN,JERUSALÉN, ", sC: "as"},
            { line: "DE NUEVO REEDIFICADA., (Si,7,65)(Mi,m,201)", sC: "as"},
    ], lder: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Por el amor... ...paz contigo, (Mi,m,20)", sC: "tc", lines: [
            { line: "Por el amor de mis amigos, (Mi,m,20)(La,m,221)", sC: "sub1"},
            { line: "por el amor de mis hermanos, (Mi,m,246)", sC: ""},
            { line: "déjame que yo te diga:, (Si,7,188)", sC: ""},
            { line: "la paz contigo. (Mi,m,109)", sC: ""},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Allá suben las tribus,, (Mi,m,20)", sC: "tc"},
            { line: "las tribus del Señor,, (La,m,51)(Mi,m,167)", sC: ""},
            { line: "SEGÚN LA COSTUMBRE DE ISRAEL,, (Si,7,317)", sC: "ta as"},
            { line: "PARA CANTAR AL SEÑOR., (Mi,m,222)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "JERUSALÉN, JERUSALÉN, (Mi,m,20)", sC: "ta as", lines: [
            { line: "DE NUEVO REEDIFICADA., (La,m,72)(Mi,m,200)", sC: "as"},
            { line: "JERUSALÉN,JERUSALÉN, ", sC: "as"},
            { line: "DE NUEVO REEDIFICADA., (Si,7,67)(Mi,m,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "JERUSALÉN,JERUSALÉN,, (Mi,m,20)", sC: "as"},
            { line: "DE NUEVO REEDIFICADA., (La,m,68)(Mi,m,201)", sC: "as"},
            { line: "JERUSALÉN,JERUSALÉN, ", sC: "as"},
            { line: "DE NUEVO REEDIFICADA., (Si,7,65)(Mi,m,201)", sC: "as"}, ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Por el amor... ...paz contigo, (Mi,m,20)", sC: "tc", lines: [
            { line: "Por el amor de mis amigos, (Mi,m,20)(La,m,221)", sC: "sub1"},
            { line: "por el amor de mis hermanos, (Mi,m,246)", sC: ""},
            { line: "déjame que yo te diga:, (Si,7,188)", sC: ""},
            { line: "la paz contigo. (Mi,m,109)", sC: ""},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pedid la paz, pedid la paz, (Mi,m,20)", sC: "tc"},
            { line: "para Jerusalén:, (La,m,20)(Mi,m,125)", sC: ""},
            { line: "QUE SEA LA PAZ, QUE SEA LA PAZ, ", sC: "ta as"},
            { line: "CON TODOS LOS QUE TE AMAN., (Si,7,20)(Mi,m,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "JERUSALÉN, JERUSALÉN, (Mi,m,20)", sC: "ta as", lines: [
            { line: "DE NUEVO REEDIFICADA., (La,m,72)(Mi,m,200)", sC: "as"},
            { line: "JERUSALÉN,JERUSALÉN, ", sC: "as"},
            { line: "DE NUEVO REEDIFICADA., (Si,7,67)(Mi,m,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "JERUSALÉN,JERUSALÉN,, (Mi,m,20)", sC: "as"},
            { line: "DE NUEVO REEDIFICADA., (La,m,68)(Mi,m,201)", sC: "as"},
            { line: "JERUSALÉN,JERUSALÉN, ", sC: "as"},
            { line: "DE NUEVO REEDIFICADA., (Si,7,65)(Mi,m,201)", sC: "as"}, ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LA LALALALALA, LA LALALALALA,, (Mi,m,20)", sC: "ta as"},
            { line: "LA LA LALALA., (La,m,20)(Mi,m,104)", sC: "as"},
            { line: "LA LALALALALA, LA LALALALALA, ", sC: "as"},
            { line: "LA LA LALALA., (Si,7,20)(Mi,m,104)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: POR EL AMOR DE MIS AMIGOS
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           POR QUÉ ESTA NOCHE ES DIFERENTE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "porqueestanocheesdiferente",
        tt: "Por Qué Esta Noche Es Diferente",
        title: "Por Qué Esta Noche Es Diferente",
        subtitle: "Haggadá de Pesaj - Melodía hebraica",
        category: ["Precatecumenado","Pascua","Pentecostés","Niños"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "5",
        nCan: "",
        nCanURL: "",
        dbno: "133",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/porqueestanocheesdiferente.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=porelamordemisamigos",
        sig: "/src/index.html?canto=porquelasgentesconjuran",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¿Por qué esta noche es diferente, (La,m,20)", sC: "tn"},
            { line: "de todas las otras noches?, (Re,m,46)(La,m,194)", sC: ""},
            { line: "DE TODAS LAS OTRAS NOCHES., (Re,m,49)(La,m,237)", sC: "ta as"},
            { line: "Que todas las otras noches, (La,m,20)", sC: "tn"},
            { line: "nos vamos a la cama pronto, ", sC: "junte"},
            { line: "y no nos quedamos levantados., (Re,m,36)(La,m,255)", sC: ""},
            { line: "Y NO NOS QUEDAMOS LEVANTADOS., (Re,m,37)(La,m,301)", sC: "ta as"},
            { line: "Mas esta noche, esta noche, (Re,m,64)(La,m,180)", sC: "tn"},
            { line: "estamos levantados., (Mi,,34)(La,m,153)", sC: ""},
            { line: "A MAS ESTA NOCHE, ESTA NOCHE, (Re,m,88)(La,m,219)", sC: "ta as"},
            { line: "ESTAMOS LEVANTADOS., (Mi,,42)(La,m,178)", sC: "as"},
            { line: "¿Por qué esta noche es diferente, (La,m,20)", sC: "tn"},
            { line: "de todas las otras noches?, (Re,m,47)(La,m,194)", sC: ""},
            { line: "DE TODAS LAS OTRAS NOCHES., (Re,m,49)(La,m,234)", sC: "ta as"},
            { line: "Que todas las otras noches, (La,m,20)", sC: "tn"},
            { line: "nos vamos a la cama pronto, ", sC: "junte"},
            { line: "después de haber cenado., (Re,m,64)(La,m,2214", sC: ""},
            { line: "DESPUÉS DE HABER CENADO., (Re,m,73)(La,m,253)", sC: "ta as"},
            { line: "Mas esta noche, esta noche hemos ayunado., (Re,m,65)(La,m,172)(Mi,,290)(La,m,398)", sC: "tn"},
            { line: "MAS ESTA NOCHE, ESTA NOCHE, (Re,m,68)(La,m,195)", sC: "ta as"},
            { line: "HEMOS AYUNADO., (Mi,,23)(La,m,135)", sC: "as"},
    ], lder: [
            { line: "¿Por qué esta noche es diferente, (La,m,20)", sC: "tn"},
            { line: "de todas las otras noches?, (Re,m,48)(La,m,194)", sC: ""},
            { line: "DE TODAS LAS OTRAS NOCHES., (Re,m,52)(La,m,236)", sC: "ta as"},
            { line: "Que todas las otras noches, (La,m,20)", sC: "tn"},
            { line: "nos vamos a la cama pronto, ", sC: "junte"},
            { line: "y no esperamos nada., (Re,m,37)(La,m,175)", sC: ""},
            { line: "Y NO ESPERAMOS NADA., (Re,m,35)(La,m,203)", sC: "ta as"},
            { line: "Mas esta noche, esta noche, (Re,m,65)(La,m,180)", sC: "tn"},
            { line: "estamos esperando., (Mi,,33)(La,m,143)", sC: ""},
            { line: "MAS ESTA NOCHE, ESTA NOCHE, (Re,m,67)(La,m,198)", sC: "ta as"},
            { line: "ESTAMOS ESPERANDO., (Mi,,46)(La,m,170)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿POR QUÉ ESTA NOCHE ES DIFERENTE, (La,m,20)", sC: "ta as"},
            { line: "DE TODAS LAS OTRAS NOCHES?, (Re,m,52)(La,m,237)", sC: "as"},
            { line: "DE TODAS LAS OTRAS NOCHES., (Re,m,53)(La,m,243)", sC: "as"},
            { line: "Para estar levantados,, (Re,m,86)", sC: "tn"},
            { line: "para haber ayunado,, (La,m,90)", sC: ""},
            { line: "para estar todos esperando., (Mi,,83)(La,m,222)", sC: ""},
            { line: "PARA ESTAR LEVANTADOS,, (Re,m,104)", sC: "ta as"},
            { line: "PARA HABER AYUNADO,, (La,m,109)", sC: "as"},
            { line: "PARA ESTAR TODOS ESPERANDO., (Mi,,103)(La,m,273)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: POR QUÉ ESTA NOCHE ES DIFERENTE
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           POR QUÉ LAS GENTES CONJURAN               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "porquelasgentesconjuran",
        tt: "Por Qué Las Gentes Conjuran",
        title: "Por Qué Las Gentes Conjuran",
        subtitle: "Salmo 2",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "134",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/porquelasgentesconjuran.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=porqueestanocheesdiferente",
        sig: "/src/index.html?canto=porquemiyugoessuave",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¿POR QUÉ LAS GENTES CONJURAN, (Mi,m,20)(La,m,289)", sC: "ta as"},
            { line: "POR QUÉ CONSPIRAN LOS PUEBLOS?, (Mi,m,296)", sC: "as"},
            { line: "SE ALZAN LOS REYES DE LA TIERRA,, (La,m,303)", sC: "as"},
            { line: "Y LOS PRÍNCIPES SE REÚNEN, (Si,7,239)", sC: "as"},
            { line: "CONTRA EL SEÑOR Y CONTRA SU MESÍAS., (Mi,m,373)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«Rompamos sus coyundas y cadenas,, (Mi,m,20)", sC: "tc"},
            { line: "alejemos de nosotros su yugo»., (La,m,255)", sC: ""},
            { line: "El que habita en los cielos se ríe,, (Si,7,295)", sC: ""},
            { line: "el Señor se burla de ellos. ", sC: ""},
            { line: "De repente les habla con ira, ", sC: ""},
            { line: "y en su cólera los espanta:, (Mi,m,213)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«PORQUE YO LE HE CONSTITUIDO SOBERANO, (La,m,113)(Mi,m,399)", sC: "ta as"},
            { line: "EN SIÓN MI SANTO MONTE,, (Si,7,61)", sC: "as"},
            { line: "EN SIÓN MI SANTO MONTE»., (Mi,m,215)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "YO LE HE CONSTITUIDO SOBERANO, (La,m,20)(Mi,m,301)", sC: "as"},
            { line: "EN SIÓN MI SANTO MONTE,, (Si,7,62)", sC: "as"},
            { line: "EN SIÓN MI SANTO MONTE»., (Mi,m,212)", sC: "as"},
    ], lder: [
            { line: "Anunciaré el decreto del Señor;, (Mi,m,20)(La,m,282)", sC: "tc"},
            { line: "Él me ha dicho: «Tú eres mi hijo;, (Si,7,107)", sC: ""},
            { line: "yo te he engendrado hoy., (Mi,m,220)", sC: ""},
            { line: "Pídeme, y te daré en herencia las naciones,, (La,m,369)", sC: ""},
            { line: "y en dominio los confines de la tierra., (Si,7,320)", sC: ""},
            { line: "Los quebrantarás con cetro de hierro,, ", sC: ""},
            { line: "como vasos de arcilla los quebrarás»., (Mi,m,328)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "«PORQUE YO LE HE CONSTITUIDO SOBERANO, (La,m,113)(Mi,m,399)", sC: "ta as", lines: [
            { line: "EN SIÓN MI SANTO MONTE,, (Si,7,61)", sC: "as"},
            { line: "EN SIÓN MI SANTO MONTE»., (Mi,m,215)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "YO LE HE CONSTITUIDO SOBERANO, (La,m,20)(Mi,m,301)", sC: "as"},
            { line: "EN SIÓN MI SANTO MONTE,, (Si,7,62)", sC: "as"},
            { line: "EN SIÓN MI SANTO MONTE»., (Mi,m,212)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y ahora, soberanos, sed sensatos,, (La,m,49)(Si,7,284)", sC: "tc"},
            { line: "instruíos, jueces de la tierra., (La,m,63)(Si,7,234)", sC: ""},
            { line: "Servid al Señor con temor,, ", sC: ""},
            { line: "y con temblor exultad., (Mi,m,189)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No sea que se irrite, ", sC: ""},
            { line: "y perezcáis en el camino, (La,m,208)", sC: ""},
            { line: "porque de pronto se enciende su ira., (Si,7,328)", sC: ""},
            { line: "¡Mas dichoso el que se refugia en Él!, (Mi,m,338)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "«PORQUE YO LE HE CONSTITUIDO SOBERANO, (La,m,113)(Mi,m,399)", sC: "ta as", lines: [
            { line: "EN SIÓN MI SANTO MONTE,, (Si,7,61)", sC: "as"},
            { line: "EN SIÓN MI SANTO MONTE»., (Mi,m,215)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "YO LE HE CONSTITUIDO SOBERANO, (La,m,20)(Mi,m,301)", sC: "as"},
            { line: "EN SIÓN MI SANTO MONTE,, (Si,7,62)", sC: "as"},
            { line: "EN SIÓN MI SANTO MONTE»., (Mi,m,212)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: POR QUÉ LAS GENTES CONJURAN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           PORQUE MI YUGO ES SUAVE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "porquemiyugoessuave",
        tt: "Porque Mi Yugo Es Suave",
        title: "Porque Mi Yugo Es Suave",
        subtitle: "Mateo 11,28ss",
        category: ["Precatecumenado","Cuaresma","Penitencial","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "135",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/porquemiyugoessuave.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=porquelasgentesconjuran",
        sig: "/src/index.html?canto=queamablessontusmoradas",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Venid a mí vosotros todos, (Do,,10)(Mi,,203)", sC: "tc"},
            { line: "que estáis cansados y agobiados,, (La,m,275)", sC: ""},
            { line: "que yo os aliviaré,, (Fa,,11)(Mi,,159)", sC: ""},
            { line: "que yo os aliviaré., (Fa,,57)(Mi,,159)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tomad sobre vosotros mi yugo, (Do,,10)", sC: ""},
            { line: "y aprended de mí,, (Mi,,163)", sC: ""},
            { line: "que soy manso y humilde de corazón,, (La,m,334)", sC: ""},
            { line: "y hallaréis descanso para vosotros,, (Fa,,20)(Mi,,284)", sC: ""},
            { line: "y encontraréis reposo para vuestras almas., (Fa,,175)(Mi,,355)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PORQUE MI YUGO ES SUAVE,, (Do,,10)(Mi,,242)", sC: "ta as"},
            { line: "PORQUE MI YUGO ES SUAVE, (Fa,,241)", sC: "as"},
            { line: "Y MI CARGA LIGERA., (Mi,,158)", sC: "as"},
            { line: "PORQUE MI YUGO ES SUAVE, (Fa,,241)", sC: "as"},
            { line: "Y MI CARGA LIGERA., (Mi,,173)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Venid a mí, (Do,,10)", sC: "tc", lines: [
            { line: "que estáis cansados y agobiados,, (La,m,275)", sC: ""},
            { line: "que yo os aliviaré,, (Fa,,11)(Mi,,159)", sC: ""},
            { line: "que yo os aliviaré., (Fa,,57)(Mi,,159)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tomad sobre vosotros mi yugo, (Do,,10)", sC: ""},
            { line: "y aprended de mí,, (Mi,,163)", sC: ""},
            { line: "que soy manso y humilde de corazón,, (La,m,334)", sC: ""},
            { line: "y hallaréis descanso para vosotros,, (Fa,,20)(Mi,,284)", sC: ""},
            { line: "y encontraréis reposo para vuestras almas., (Fa,,175)(Mi,,355)", sC: ""},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "PORQUE MI YUGO ES SUAVE, (Do,,10)(Mi,,242)", sC: "ta as", lines: [
            { line: "PORQUE MI YUGO ES SUAVE, (Fa,,241)", sC: "as"},
            { line: "Y MI CARGA LIGERA., (Mi,,158)", sC: "as"},
            { line: "PORQUE MI YUGO ES SUAVE, (Fa,,241)", sC: "as"},
            { line: "Y MI CARGA LIGERA., (Mi,,173)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: PORQUE MI YUGO ES SUAVE
// SIGUIENTE CANTO DEBAJO


// LETRA Q
/*
╔════════════════════════════════════════════════════════╗
║           QUÉ AMABLES SON TUS MORADAS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "queamablessontusmoradas",
        tt: "Qué Amables Son Tus Moradas",
        title: "Qué Amables Son Tus Moradas",
        subtitle: "Salmo 84 (83)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "136",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/queamablessontusmoradas.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=porquemiyugoessuave",
        sig: "/src/index.html?canto=queestupendoquealegria",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡Qué amables son tus moradas, Señor,, (Do,,10)(Mi,m,260)(La,m,352)", sC: "tc"},
            { line: "Señor de los ejércitos!, (Do,,37)(Mi,m,148)", sC: ""},
            { line: "Mi alma ansía y anhela, (Fa,,38)(Do,,201)", sC: ""},
            { line: "los atrios del Señor., (Sol,,167)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Hasta el pájaro encuentra una casa,, (Do,,10)(Mi,m,204)(La,m,310)", sC: ""},
            { line: "la golondrina su nido:, (Do,,10)(Mi,m,172)", sC: ""},
            { line: "¡junto a tus altares, Señor,, (Fa,,20)(Do,,172)", sC: ""},
            { line: "rey mío y Dios mío!, (Sol,,161)", sC: ""},
            { line: "¡REY MÍO Y DIOS MÍO!, (Do,,188)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DICHOSOS LOS QUE VIVEN EN TU CASA,, (Fa,,54)(Do,,341)", sC: "ta as"},
            { line: "SIEMPRE CANTAN TUS AMORES,, (Sol,,263)", sC: "as"},
            { line: "SIEMPRE CANTAN TUS AMORES., (Do,,260)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DICHOSO EL QUE ENCUENTRA, (Fa,,54)", sC: "as"},
            { line: "EN TI LA FUERZA, (Do,,116)", sC: "as"},
            { line: "Y EN SU CORAZÓN DECIDE, (Sol,,223)", sC: "as"},
            { line: "EL SANTO VIAJE., (Do,,123)", sC: "as"},
    ], lder: [
            { line: "PASANDO POR EL VALLE DEL LLANTO,, (Do,,10)(Mi,m,198)(La,m,315)", sC: "ta as"},
            { line: "ÉL LO CAMBIA EN BENDICIÓN., (Do,,10)(Mi,m,261)", sC: "as"},
            { line: "CRECE EN EL CAMINO SU VIGOR,, (Fa,,35)(Do,,289)", sC: "as"},
            { line: "HASTA LLEGAR A SIÓN,, (Sol,,194)", sC: "as"},
            { line: "HASTA LLEGAR A SIÓN., (Do,,193)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mejor es un día en tus atrios, (Fa,,39)(Do,,224)", sC: "tc"},
            { line: "que mil fuera de ellos,, (Sol,,174)", sC: ""},
            { line: "QUE MIL FUERA DE ELLOS,, (Do,,193)", sC: "ta as"},
            { line: "porque estar en el umbral de tu casa, (Fa,,111)(Do,,331)", sC: "tc"},
            { line: "es siempre mejor, (Sol,,153)", sC: ""},
            { line: "QUE HABITAR EN LOS PALACIOS., (Do,,256)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "PASANDO POR EL VALLE DEL LLANTO, (Do,,10)(Mi,m,196)(La,m,315)", sC: "ta as", lines: [
            { line: "ÉL LO CAMBIA EN BENDICIÓN., (Do,,10)(Mi,m,261)", sC: "as"},
            { line: "CRECE EN EL CAMINO SU VIGOR,, (Fa,,35)(Do,,289)", sC: "as"},
            { line: "HASTA LLEGAR A SIÓN,, (Sol,,194)", sC: "as"},
            { line: "HASTA LLEGAR A SIÓN., (Do,,193)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "DICHOSOS LOS QUE VIVEN ...  \n...EL SANTO VIAJE, (Fa,,54)", sC: "ta as", lines: [
            { line: "  EN TU CASA,, (Do,,81)", sC: "as sub1"},
            { line: "SIEMPRE CANTAN TUS AMORES,, (Sol,,257)", sC: "as sub2"},
            { line: "SIEMPRE CANTAN TUS AMORES., (Do,,260)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DICHOSO EL QUE ENCUENTRA, (Fa,,54)", sC: "as"},
            { line: "EN TI LA FUERZA, (Do,,116)", sC: "as"},
            { line: "Y EN SU CORAZÓN DECIDE, (Sol,,223)", sC: "as"},
            { line: "EL SANTO VIAJE., (Do,,123)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: QUÉ AMABLES SON TUS MORADAS
// SIGUIENTE CANTO DEBAJO
/*
╔═════════════════════════════════════════════════════╗
║           QUÉ ESTUPENDO, QUÉ ALEGRÍA                ║
╚═════════════════════════════════════════════════════╝  */
   {
        id: "queestupendoquealegria",
        tt: "Qué Estupendo, Qué Alegría ",
        title: "Qué Estupendo, Qué Alegría ",
        subtitle: "Salmo 133 (132)",
        category: ["Precatecumenado","Antiguo Testamento","Paz"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "137",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/queestupendoquealegria.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=queamablessontusmoradas",
        sig: "/src/index.html?canto=quienesestaquesubedeldesierto",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡QUÉ ESTUPENDO, QUÉ ALEGRÍA!, (La,m,20)(Re,m,123)(La,m,206)(Mi,,298)", sC: "ta as"},
            { line: "¡LOS HERMANOS SIEMPRE UNIDOS!, (La,m,20)(Re,m,114)(Mi,,196)(La,m,295)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Es como ungüento que desciende por la barba,, (Sol,,137)", sC: "tc"},
            { line: "por la barba de Aarón., (Fa,,12)(Mi,,192)", sC: ""},
            { line: "ES COMO UNGÜENTO \n QUE DESCIENDE POR LA BARBA,, (Sol,,159)", sC: "ta as"},
            { line: "POR LA BARBA DE AARÓN., (Fa,,20)(Mi,,236)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡QUÉ ESTUPENDO, QUÉ ALEGRÍA!, (La,m,20)(Re,m,123)(La,m,206)(Mi,,298)", sC: "ta as", lines: [
            { line: "¡LOS HERMANOS SIEMPRE UNIDOS!, (La,m,20)(Re,m,114)(Mi,,196)(La,m,295)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Como rocío que desciende del Hermón, (Sol,,95)", sC: "tc"},
            { line: "sobre el monte de Sión,, (Fa,,14)(Mi,,224)", sC: ""},
            { line: "COMO ROCÍO QUE DESCIENDE DEL HERMÓN, (Sol,,111)", sC: "ta as"},
            { line: "SOBRE EL MONTE DE SIÓN., (Fa,,15)(Mi,,227)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "¡QUÉ ESTUPENDO, QUÉ ALEGRÍA!, (La,m,20)(Re,m,123)(La,m,206)(Mi,,298)", sC: "ta as", lines: [
            { line: "¡LOS HERMANOS SIEMPRE UNIDOS!, (La,m,20)(Re,m,114)(Mi,,196)(La,m,295)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Nos bendice el Señor desde lo alto,, (Sol,,95)", sC: "tc"},
            { line: "la vida nos da eternamente,, (Fa,,35)(Mi,,222)", sC: ""},
            { line: "NOS BENDICE EL SEÑOR DESDE LO ALTO,, (Sol,,105)", sC: "ta as"},
            { line: "LA VIDA NOS DA ETERNAMENTE., (Fa,,39)(Mi,,263)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "¡QUÉ ESTUPENDO, QUÉ ALEGRÍA!, (La,m,20)(Re,m,123)(La,m,206)(Mi,,298)", sC: "ta as", lines: [
            { line: "¡LOS HERMANOS SIEMPRE UNIDOS!, (La,m,20)(Re,m,114)(Mi,,196)(La,m,295)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: QUÉ ESTUPENDO, QUÉ ALEGRÍA 
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           QUIÉN ES ESTA QUE SUBE DEL DESIERTO          ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "quienesestaquesubedeldesierto",
        tt: "Quién Es Esta Que Sube Del Desierto",
        title: "Quién Es Esta Que Sube Del Desierto",
        subtitle: "Cantar de los Cantares 8,5-7",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión","Final","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "138",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/quienesestaquesubedeldesierto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=queestupendoquealegria",
        sig: "/src/index.html?canto=quiennosseparara",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¿QUIÉN ES ESTA QUE SUBE DEL DESIERTO,, (La,m,20)(Re,m,227)(La,m,359)", sC: "ta as"},
            { line: "QUIÉN ES ESTA QUE SUBE DEL DESIERTO,, (Fa,,211)(La,m,349)", sC: "as"},
            { line: "APOYADA EN SU AMADO, EN SU AMADO,, (Fa,,60)(Mi,,348)", sC: "as"},
            { line: "APOYADA EN SU AMADO?, (Fa,,60)(La,m,198)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Debajo del manzano te desperté,, (Sol,,12)(Fa,,168)(La,m,305)", sC: "tc"},
            { line: "allí donde te concibió tu madre,, (Sol,,12)(Fa,,139)(La,m,257)", sC: ""},
            { line: "allí donde tu madre te dio a luz,, (Fa,,10)(Mi,,280)", sC: ""},
            { line: "allí donde tu madre te dio a luz., (Fa,,10)(La,m,285)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¿QUIÉN ES ESTA QUE SUBE DEL DESIERTO (La,m,20)(Re,m,227)(La,m,359)", sC: "ta as", lines: [
            { line: "QUIÉN ES ESTA QUE SUBE DEL DESIERTO,, (Fa,,211)(La,m,349)", sC: "as"},
            { line: "APOYADA EN SU AMADO, EN SU AMADO,, (Fa,,60)(Mi,,348)", sC: "as"},
            { line: "APOYADA EN SU AMADO?, (Fa,,60)(La,m,198)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Llévame como un sello en tu corazón,, (Sol,,14)(Fa,,191)(La,m,340)", sC: "tc"},
            { line: "como un tatuaje en tu brazo,, (Sol,,14)(Fa,,129)(La,m,238)", sC: ""},
            { line: "porque es fuerte el amor como la muerte, (Fa,,122)(Mi,,362)", sC: ""},
            { line: "y las aguas no lo pueden apagar,, (Fa,,55)(Mi,,293)", sC: ""},
            { line: "ni los ríos lo pueden anegar., (Fa,,69)(Mi,,252)", sC: ""},
            { line: "Que si tú dieras los bienes de tu casa por el amor, (Fa,,112)(Mi,,461)", sC: ""},
            { line: "sólo encontrarías el desprecio., (Fa,,10)(Mi,,253)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "¿QUIÉN ES ESTA QUE SUBE DEL DESIERTO, (La,m,20)(Re,m,227)(La,m,359)", sC: "ta as", lines: [
            { line: "QUIÉN ES ESTA QUE SUBE DEL DESIERTO,, (Fa,,211)(La,m,349)", sC: "as"},
            { line: "APOYADA EN SU AMADO, EN SU AMADO,, (Fa,,60)(Mi,,348)", sC: "as"},
            { line: "APOYADA EN SU AMADO?, (Fa,,60)(La,m,198)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: QUIÉN ES ESTA QUE SUBE DEL DESIERTO
// SIGUIENTE CANTO DEBAJO


/*
╔════════════════════════════════════════════╗
║           QUIÉN NOS SEPARARÁ               ║
╚════════════════════════════════════════════╝  */
   {
        id: "quiennosseparara",
        tt: "Quién Nos Separará",
        title: "Quién Nos Separará",
        subtitle: "Romanos 8,34-39",
        category: ["Precatecumenado","Cuaresma","Penitencial","Comunión","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "139",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/quiennosseparara.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=quienesestaquesubedeldesierto",
        sig: "/src/index.html?canto=quieroandarmadreajerusalen",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¿QUIÉN NOS SEPARARÁ,, (La,m,20)", sC: "ta as"},
            { line: "QUIÉN NOS SEPARARÁ,, (Sol,,43)", sC: "as r1"},
            { line: "DEL AMOR DE DIOS?, (Fa,,84)(Mi,,168)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Acaso Cristo Jesús,, (Mi,,10)(La,m,170)", sC: "tc"},
            { line: "el que murió, ", sC: ""},
            { line: "más aún el que resucitó,, (Sol,,222)", sC: ""},
            { line: "el que a la derecha de Dios, (Fa,,244)", sC: ""},
            { line: "intercede por nosotros?, (Mi,,172)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¿QUIÉN NOS SEPARARÁ, (La,m,20)", sC: "ta as", lines: [
            { line: "QUIÉN NOS SEPARARÁ,, (Sol,,43)", sC: "as r1"},
            { line: "DEL AMOR DE DIOS?, (Fa,,84)(Mi,,168)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿La tribulación,, (Mi,,10)(La,m,127)", sC: "tc"},
            { line: "la angustia, la persecución,, (Sol,,238)", sC: ""},
            { line: "el hambre, la desnudez,, (Fa,,207)", sC: ""},
            { line: "si en todo vencemos, ", sC: ""},
            { line: "por aquel que nos amó?, (Mi,,214)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¿QUIÉN NOS SEPARARÁ, (La,m,20)", sC: "ta as", lines: [
            { line: "QUIÉN NOS SEPARARÁ,, (Sol,,43)", sC: "as r1"},
            { line: "DEL AMOR DE DIOS?, (Fa,,84)(Mi,,168)", sC: "as"},  ]},
    ], lder: [
            { line: "Si seguros estamos, (Mi,,10)(La,m,137)", sC: "tc"},
            { line: "que ni la muerte, ni la vida, ", sC: ""},
            { line: "ni lo presente, ni lo futuro, ", sC: ""},
            { line: "ni la altura, ni la profundidad,, (Sol,,259)", sC: ""},
            { line: "ni otra criatura alguna,, (Fa,,180)", sC: ""},
            { line: "nos podrá separar de Dios., (Mi,,233)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "NOS PODRÁ SEPARAR,, (La,m,196)", sC: "ta as"},
            { line: "NOS PODRÁ SEPARAR, (Sol,,195)", sC: "as"},
            { line: "DEL AMOR DE DIOS, (Fa,,169)", sC: "as"},
            { line: "MANIFESTADO EN CRISTO JESÚS., (Mi,,298)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¿QUIÉN NOS SEPARARÁ, (La,m,20)", sC: "ta as", lines: [
            { line: "QUIÉN NOS SEPARARÁ,, (Sol,,43)", sC: "as r1"},
            { line: "DEL AMOR DE DIOS?, (Fa,,84)(Mi,,168)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: QUIÉN NOS SEPARARÁ
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           QUIERO ANDAR, MADRE, A JERUSALÉN             ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "quieroandarmadreajerusalen",
        tt: "Quiero Andar, Madre, A Jerusalén",
        title: "Quiero Andar, Madre, A Jerusalén",
        subtitle: "Canto sefardí",
        category: ["Precatecumenado","Pascua","Pentecostés","Final"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "140",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/quieroandarmadreajerusalen.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=quiennosseparara",
        sig: "/src/index.html?canto=quierocantar",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Quiero andar, madre,, (Mi,,10)(La,m,189)", sC: "tc"},
            { line: "a Jerusalén, Jerusalén., (Re,m,22)(Mi,,62)", sC: ""},
            { line: "A comer las hierbas, (La,m,20)", sC: ""},
            { line: "y a saciarme de ellas,, (Re,m,22)(Mi,,59)", sC: ""},
            { line: "saciarme de ellas. ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "EN EL SENDERO ME ENCUENTRO YO., (Fa,,10)(La,m,339)", sC: "ta as"},
            { line: "EN EL SENDERO CAMINO YO., (Fa,,10)(La,m,265)", sC: "as"},
            { line: "EN EL SEÑOR DE TODO EL MUNDO,, (Re,m,20)(Mi,,57)", sC: "as"},
            { line: "DE TODO EL MUNDO. ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LA LA, LA LA LA LA LA LA LALA ..., (Mi,,10)", sC: "as"},
            { line: "LA LA, LA ... LA, (Re,m,46)(Mi,,138)", sC: "as"},
            { line: "LA LA LA ... ", sC: "as"},
    ], lder: [
            { line: "Hazme comer las hierbas,, (Mi,,10)(La,m,223)", sC: "tc"},
            { line: "que pueda saciar mis ansias,, (Re,m,22)(Mi,,62)", sC: ""},
            { line: "que son ansias de amistad, ", sC: ""},
            { line: "que son ansias de humildad, ", sC: ""},
            { line: "que son ansias,, (Re,m,95)(Mi,,135)", sC: ""},
            { line: "que son ansias de obediencia., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "EN EL SENDERO ME ENCUENTRO YO, (Fa,,10)(La,m,339)", sC: "ta as", lines: [
            { line: "EN EL SENDERO CAMINO YO., (Fa,,10)(La,m,265)", sC: "as"},
            { line: "EN EL SEÑOR DE TODO EL MUNDO,, (Re,m,20)(Mi,,57)", sC: "as"},
            { line: "DE TODO EL MUNDO. ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ADONAI ELOHENU,, (Mi,,11)", sC: "ta as"},
            { line: "ADONAI ELOHENU,, (Re,m,63)(Mi,,140)", sC: "as"},
            { line: "ADONAI EJAD., (Fa,,62)(Mi,,108)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: QUIERO ANDAR, MADRE, A JERUSALÉN
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           QUIERO CANTAR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "quierocantar",
        tt: "Quiero Cantar",
        title: "Quiero Cantar",
        subtitle: "Salmo 57 (56)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "141",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/quierocantar.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=quieroandarmadreajerusalen",
        sig: "/src/index.html?canto=resucito",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "QUIERO CANTAR, (Re,,10)", sC: "ta as"},
            { line: "A TI QUIERO CANTAR,, (Fa#,m,34)", sC: "as r1"},
            { line: "DESPIERTA, DESPIERTA GLORIA MÍA,, (Sol,,64)", sC: "as"},
            { line: "DESPIERTA, ARPA Y CÍTARA., (La,,67)(Re,,215)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Misericordia, Dios mío, misericordia,, (Re,,12)(Fa#,m,300)", sC: "tc"},
            { line: "que mi alma se refugia en Ti., (Sol,,267)", sC: ""},
            { line: "Me refugio a la sombra de tus alas,, (Mi,m,167)", sC: ""},
            { line: "hasta que pase el peligro., (La,7,20)(Re,,207)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "QUIERO CANTAR, (Re,,10)", sC: "ta as", lines: [
            { line: "A TI QUIERO CANTAR,, (Fa#,m,34)", sC: "as r1"},
            { line: "DESPIERTA, DESPIERTA GLORIA MÍA,, (Sol,,64)", sC: "as"},
            { line: "DESPIERTA, ARPA Y CÍTARA., (La,,67)(Re,,215)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Invoco a Dios, al Dios Altísimo,, (Re,,10)(Fa#,m,242)", sC: "tc"},
            { line: "a Dios, que ha hecho tanto por mí., (Sol,,321)", sC: ""},
            { line: "Desde el cielo me envía la salvación,, (Mi,m,212)", sC: ""},
            { line: "confunde a los que ansían matarme., (La,7,49)(Re,,300)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "QUIERO CANTAR, (Re,,10)", sC: "ta as", lines: [
            { line: "A TI QUIERO CANTAR,, (Fa#,m,34)", sC: "as r1"},
            { line: "DESPIERTA, DESPIERTA GLORIA MÍA,, (Sol,,64)", sC: "as"},
            { line: "DESPIERTA, ARPA Y CÍTARA., (La,,67)(Re,,215)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Misericordia, Dios mío, misericordia,, (Re,,10)(Fa#,m,300)", sC: ""},
            { line: "que estoy echado entre leones,, (Sol,,248)", sC: ""},
            { line: "leones devoradores de hombres,, (Mi,m,146)", sC: ""},
            { line: "sus dientes son lanzas y flechas., (La,7,64)(Re,,251)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "QUIERO CANTAR, (Re,,10)", sC: "ta as", lines: [
            { line: "A TI QUIERO CANTAR,, (Fa#,m,34)", sC: "as r1"},
            { line: "DESPIERTA, DESPIERTA GLORIA MÍA,, (Sol,,64)", sC: "as"},
            { line: "DESPIERTA, ARPA Y CÍTARA., (La,,67)(Re,,215)", sC: "as"},  ]},
        ], lder: [
            { line: "Misericordia, Dios mío, misericordia,, (Re,,10)(Fa#,m,302)", sC: "tc"},
            { line: "que han tendido una red a mis pasos,, (Sol,,313)", sC: ""},
            { line: "una red a mis pasos,, ", sC: ""},
            { line: "me han cavado delante una fosa,, (Mi,m,190)", sC: ""},
            { line: "pero han sido ellos los que han caído en ella., (La,7,150)(Re,,397)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "QUIERO CANTAR, (Re,,10)", sC: "ta as", lines: [
            { line: "A TI QUIERO CANTAR,, (Fa#,m,34)", sC: "as r1"},
            { line: "DESPIERTA, DESPIERTA GLORIA MÍA,, (Sol,,64)", sC: "as"},
            { line: "DESPIERTA, ARPA Y CÍTARA., (La,,67)(Re,,215)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Mi corazón está firme, Dios mío,, (Re,,10)(Fa#,m,284)", sC: "tc"},
            { line: "para Ti, oh Dios, quiero cantar,, (Sol,,270)", sC: ""},
            { line: "a la aurora yo quiero despertar,, (Mi,m,166)", sC: ""},
            { line: "despertad, arpa y cítara., (La,7,79)(Re,,189)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "QUIERO CANTAR, (Re,,10)", sC: "ta as", lines: [
            { line: "A TI QUIERO CANTAR,, (Fa#,m,34)", sC: "as r1"},
            { line: "DESPIERTA, DESPIERTA GLORIA MÍA,, (Sol,,64)", sC: "as"},
            { line: "DESPIERTA, ARPA Y CÍTARA., (La,,67)(Re,,215)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Te daré gracias ante los pueblos, Señor,, (Re,,10)(Fa#,m,360)", sC: "tc"},
            { line: "cantaré, cantaré ante las naciones,, (Sol,,289)", sC: ""},
            { line: "porque tu amor ha sido grande conmigo,, (Mi,m,250)", sC: ""},
            { line: "tu bondad más alta que los cielos., (La,7,79)(Re,,288)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "QUIERO CANTAR, (Re,,10)", sC: "ta as", lines: [
            { line: "A TI QUIERO CANTAR,, (Fa#,m,34)", sC: "as r1"},
            { line: "DESPIERTA, DESPIERTA GLORIA MÍA,, (Sol,,64)", sC: "as"},
            { line: "DESPIERTA, ARPA Y CÍTARA., (La,,67)(Re,,215)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: QUIERO CANTAR
// SIGUIENTE CANTO DEBAJO

// LETRA R
/*
╔════════════════════════════════════════════════════════╗
║           RESUCITÓ               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "resucito",
        tt: "Resucitó",
        title: "Resucitó",
        subtitle: "(Kiko Argüello)",
        category: ["Precatecumenado","Pascua","Pentecostés","Comunión"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "142",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/resucito.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=quierocantar",
        sig: "/src/index.html?canto=resurrexit",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "RESUCITÓ, RESUCITÓ,, (La,m,20)(Sol,,199)", sC: "ta as"},
            { line: "RESUCITÓ, ALELUYA., (Fa,,89)(Mi,,186)", sC: "as"},
            { line: "ALELUYA, ALELUYA,, (La,m,80)(Sol,,179)", sC: "as"},
            { line: "ALELUYA, RESUCITÓ., (Fa,,71)(Mi,,190)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "La muerte,, (La,m,66)", sC: "tc"},
            { line: "¿dónde está la muerte?,, (Sol,,182)", sC: ""},
            { line: "¿dónde está mi muerte?,, (Fa,,187)", sC: ""},
            { line: "¿dónde su victoria?, (Mi,,144)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "RESUCITÓ, RESUCITÓ, (La,m,20)(Sol,,199)", sC: "ta as", lines: [
            { line: "RESUCITÓ, ALELUYA., (Fa,,89)(Mi,,186)", sC: "as"},
            { line: "ALELUYA, ALELUYA,, (La,m,80)(Sol,,179)", sC: "as"},
            { line: "ALELUYA, RESUCITÓ., (Fa,,71)(Mi,,190)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Gracias, (La,m,20)", sC: "tc"},
            { line: "sean dadas al Padre,, (Sol,,157)", sC: ""},
            { line: "que nos pasó a su Reino,, (Fa,,197)", sC: ""},
            { line: "donde se vive de amor., (Mi,,203)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "RESUCITÓ, RESUCITÓ, (La,m,20)(Sol,,199)", sC: "ta as", lines: [
            { line: "RESUCITÓ, ALELUYA., (Fa,,89)(Mi,,186)", sC: "as"},
            { line: "ALELUYA, ALELUYA,, (La,m,80)(Sol,,179)", sC: "as"},
            { line: "ALELUYA, RESUCITÓ., (Fa,,71)(Mi,,190)", sC: "as"},  ]},
    ], lder: [
            { line: "Alegría,, (La,m,52)", sC: "tc"},
            { line: "alegría, hermanos,, (Sol,,132)", sC: ""},
            { line: "que si hoy nos queremos, (Fa,,189)", sC: ""},
            { line: "es porque resucitó., (Mi,,172)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "RESUCITÓ, RESUCITÓ, (La,m,20)(Sol,,199)", sC: "ta as", lines: [
            { line: "RESUCITÓ, ALELUYA., (Fa,,89)(Mi,,186)", sC: "as"},
            { line: "ALELUYA, ALELUYA,, (La,m,80)(Sol,,179)", sC: "as"},
            { line: "ALELUYA, RESUCITÓ., (Fa,,71)(Mi,,190)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si con Él morimos,, (La,m,130)", sC: "tc"},
            { line: "con Él vivimos,, (Sol,,91)", sC: ""},
            { line: "con Él cantamos:, (Fa,,107)", sC: ""},
            { line: "¡Aleluya!, (Mi,,69)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "RESUCITÓ, RESUCITÓ, (La,m,20)(Sol,,199)", sC: "ta as", lines: [
            { line: "RESUCITÓ, ALELUYA., (Fa,,89)(Mi,,186)", sC: "as"},
            { line: "ALELUYA, ALELUYA,, (La,m,80)(Sol,,179)", sC: "as"},
            { line: "ALELUYA, RESUCITÓ., (Fa,,71)(Mi,,190)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: RESUCITÓ
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           RESURREXIT               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "resurrexit",
        tt: "Resurrexit",
        title: "Resurrexit",
        subtitle: "Juan 11,25s",
        category: ["Precatecumenado","Pascua","Pentecostés","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "143",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/resurrexit.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=resucito",
        sig: "/src/index.html?canto=salvereinadeloscielos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "RESURREXIT, RESURREXIT,, (La,m,20)(Mi,7,218)", sC: "ta as"},
            { line: "RESURREXIT, RESURREXIT., (Fa,,92)(Mi,,223)", sC: "as"},
            { line: "GLORIA, GLORIA, GLORIA, GLORIA., (La,m,20)(Mi,7,116)(Fa,,199)(Mi,,287)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo soy la Resurrección,, (La,m,20)(Mi,7,198)", sC: ""},
            { line: "la Resurrección, la Resurrección., (Re,m,22)(Mi,7,291)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "YO SOY LA RESURRECCIÓN,, (La,m,20)(Mi,7,238)", sC: "ta as"},
            { line: "LA RESURRECCIÓN,, (Re,m,20)", sC: "as"},
            { line: "LA RESURRECCIÓN., (Mi,7,165)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El que cree en mí, aunque muera vivirá,, (Re,m,86)(Mi,7,363)", sC: "tc"},
            { line: "y todo el que vive y cree en mí,, (Re,m,17)(Fa,,280)", sC: ""},
            { line: "no morirá jamás, no morirá jamás., (Mi,7,145)(Fa,,179)(Mi,7,311)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "RESURREXIT, RESURREXIT, (La,m,20)(Mi,7,220)", sC: "ta as", lines: [
            { line: "RESURREXIT, RESURREXIT., (Fa,,92)(Mi,,223)", sC: "as"},  ]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "GLORIA, GLORIA, (La,m,32)(Mi,7,116)", sC: "ta as", lines: [
            { line: "GLORIA, GLORIA,, (Fa,,33)(Mi,,117)", sC: "as gloria"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Crees tú esto? ¿Crees tú esto?, (Re,m,22)(Mi,,103)(Re,m,185)(Mi,,258)", sC: "tc"},
            { line: "Sí, yo creo que tú eres el Cristo,, (Fa,,10)", sC: ""},
            { line: "el Hijo de Dios, que ha de venir al mundo., (Mi,7,120)(Fa,,205)(Mi,7,347)", sC: ""},
    ], lder: [
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "RESURREXIT, RESURREXIT, (La,m,20)(Mi,7,220)", sC: "ta as", lines: [
            { line: "RESURREXIT, RESURREXIT., (Fa,,92)(Mi,,223)", sC: "as"},  ]},
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "GLORIA, GLORIA, (La,m,32)(Mi,7,116)", sC: "ta as", lines: [
            { line: "GLORIA, GLORIA,, (Fa,,33)(Mi,,117)", sC: "as gloria"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LA, LA, LA, LA,  LA LA,, (La,m,20)", sC: "as"},
            { line: "LA LA LA LA, LA LA, LA LA;, (Re,m,22)(Mi,7,178)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LA, LA, LA, LA, LA LA,, (La,m,20)", sC: "as"},
            { line: "LA, LA LA LA., (Re,m,22)(Mi,7,110)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
       triggerLine: "RESURREXIT, RESURREXIT, (La,m,20)(Mi,7,220)", sC: "ta as", lines: [
            { line: "RESURREXIT, RESURREXIT., (Fa,,92)(Mi,,223)", sC: "as"},  ]},
            { type: "collapsible-block", id: "asamblea_anadie_6", initialState: "collapsed",
       triggerLine: "GLORIA, GLORIA, (La,m,32)(Mi,7,116)", sC: "ta as", lines: [
            { line: "GLORIA, GLORIA,, (Fa,,33)(Mi,,117)", sC: "as gloria"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA,, (La,m,51)(Mi,7,155)", sC: "as"},
            { line: "ALELUYA, ALELUYA., (Fa,,55)(Mi,,150)", sC: "as"},
            { line: "ALELUYA., (La,m,79)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: RESURREXIT
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SALVE, REINA DE LOS CIELOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "salvereinadeloscielos",
        tt: "Salve, Reina De Los Cielos",
        title: "Salve, Reina De Los Cielos",
        subtitle: "Himno lat. «Ave, Regina Caelorum»",
        category: ["Precatecumenado","Vírgen María"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "144",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/salvereinadeloscielos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=resurrexit",
        sig: "/src/index.html?canto=seencontrarondosangeles",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Salve, Reina de los Cielos,, (La,m,20)", sC: "tc"},
            { line: "Señora, Señora de los Ángeles., (Sol,,40)(La,m,222)", sC: ""},
            { line: "Salve raíz, Salve puerta,, (Fa,,77)(Mi,,185)", sC: ""},
            { line: "tú, tú, tú abriste el camino a nuestra luz., (Mi,7,15)(La,m,368)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALÉGRATE, VIRGEN MARÍA,, (La,m,17)(Mi,7,238)", sC: "ta as"},
            { line: "ENTRE TODAS LA MÁS BELLA., (La,m,243)", sC: "as"},
            { line: "SALVE, ETERNA DONCELLA,, (Re,m,20)(La,m,216)", sC: "as"},
            { line: "RUEGA A CRISTO POR NOSOTROS., (Mi,7,123)(La,m,264)", sC: "as"},
            { line: "SALVE, ETERNA DONCELLA,, (Re,m,22)(La,m,216)", sC: "as"},
            { line: "RUEGA A CRISTO POR NOSOTROS., (Mi,7,123)(La,m,267)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "I..    "+" I...    I..., (La,m,20)(Sol,,57)(La,m,108)", sC: "tc melisma"},
            { line: "Salve raíz, Salve puerta,, (Fa,,78)(Mi,,186)", sC: ""},
            { line: "tú, tú, tú abriste el camino a nuestra luz., (Mi,7,17)(La,m,367)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALÉGRATE, VIRGEN MARÍA, (La,m,17)(Mi,7,238)", sC: "ta as", lines: [
            { line: "ENTRE TODAS LA MÁS BELLA., (La,m,243)", sC: "as"},
            { line: "SALVE, ETERNA DONCELLA,, (Re,m,20)(La,m,216)", sC: "as"},
            { line: "RUEGA A CRISTO POR NOSOTROS., (Mi,7,123)(La,m,264)", sC: "as"},
            { line: "SALVE, ETERNA DONCELLA,, (Re,m,22)(La,m,216)", sC: "as"},
            { line: "RUEGA A CRISTO POR NOSOTROS., (Mi,7,123)(La,m,267)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: SALVE, REINA DE LOS CIELOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SE ENCONTRARON DOS ÁNGELES               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "seencontrarondosangeles",
        tt: "Se Encontraron Dos Ángeles",
        title: "Se Encontraron Dos Ángeles",
        subtitle: "Melodía hebraica",
        category: ["Precatecumenado","Niños","Paz"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Se repite todo el canto subiendo medio tono cada vez.",
        nCanURL: "",
        dbno: "145",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/seencontrarondosangeles.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=salvereinadeloscielos",
        sig: "/src/index.html?canto=senorayudameanodudardeti",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Se encontraron dos ángeles,, (La,m,20)", sC: "tc"},
            { line: "el uno preguntó al otro:, ", sC: ""},
            { line: "«¿dónde,dónde, (Re,m,67)(La,m,131)", sC: ""},
            { line: "está la gloria de Dios?», (Mi,,31)(La,m,182)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«¿DÓNDE, DÓNDE, (Re,m,85)(La,m,159)", sC: "ta as"},
            { line: "ESTÁ LA GLORIA DE DIOS?», (Mi,,39)(La,m,221)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«En la bendición,, (La,m,20)(Re,m,133)", sC: "tc"},
            { line: "en la bendición,, (La,m,126)", sC: ""},
            { line: "en la bendición»,, (Mi,,131)", sC: ""},
            { line: "el otro le respondió., (La,m,167)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«EN LA BENDICIÓN,, (La,m,20)(Re,m,157)", sC: "ta as"},
            { line: "EN LA BENDICIÓN,, (La,m,149)", sC: "as"},
            { line: "EN LA BENDICIÓN,, (Mi,,151)", sC: "as"},
            { line: "ESTÁ LA GLORIA DE DIOS»., (La,m,221)", sC: "as ast"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: SE ENCONTRARON DOS ÁNGELES
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SEÑOR, AYÚDAME A NO DUDAR DE TI               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "senorayudameanodudardeti",
        tt: "Señor, Ayúdame A No Dudar De Ti",
        title: "Señor, Ayúdame A No Dudar De Ti",
        subtitle: "(Kiko Argüello)",
        category: ["Precatecumenado","Cuaresma","Penitencial"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "146",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/senorayudameanodudardeti.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=seencontrarondosangeles",
        sig: "/src/index.html?canto=senornomecorrijasentucolera",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "¡Señor, ayúdame, Señor!, (Si,m,20)(La,,99)(Si,m,216)", sC: "tc"},
            { line: "¡SEÑOR, AYÚDAME, SEÑOR!, (La,,119)(Si,m,240)", sC: "ta as"},
            { line: "A no dudar de Ti., (Fa#,,35)", sC: "tc"},
            { line: "A NO DUDAR DE TI., ", sC: "ta as"},
            { line: "¡Señor, ayúdame, Señor!, (Si,m,50)(La,,104)(Si,m,217)", sC: "tc"},
            { line: "¡SEÑOR, AYÚDAME, SEÑOR!, (La,,121)(Si,m,239)", sC: "ta as"},
            { line: "A no dudar nunca de tu amor., (Sol,,29)(Fa#,,263)", sC: "tc"},
            { line: "A NO DUDAR NUNCA DE TU AMOR., (Sol,,39)(Fa#,,302)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tu gracia derramando, (La,,10)(Re,,166)", sC: "tc"},
            { line: "dejó mi corazón ya florecido, (Si,m,20)(Sol,,131)(Fa#,,241)", sC: ""},
            { line: "de mil ansias de amor,, (Mi,m,49)(Fa#,,199)", sC: ""},
            { line: "de mil ansias de amor., (Mi,m,49)(Fa#,,199)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que más no puedo que sufrir, (La,,10)(Sol,,150)(Fa#,,264)", sC: ""},
            { line: "que vivir en un gemido., (Sol,,67)(Fa#,,187)", sC: ""},
    ], lder: [
            { line: "Y en esta llama de tu amor oscura,, (Re,,10)(La,,306)", sC: ""},
            { line: "en esta tela que envuelve mi alma, ", sC: ""},
            { line: "y la sofoca,, (Re,,75)", sC: ""},
            { line: "siento mi corazón que se disloca,, (Sol,,23)(Fa#,,284)", sC: ""},
            { line: "que se abre y se derrama, (Sol,,79)(Fa#,,211)", sC: ""},
            { line: "como agua que inunda tu jardín., (Mi,m,77)(Fa#,,289)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡SEÑOR, AYÚDAME, SEÑOR \n ...A NO DUDAR NUNCA DE TU AMOR., (Si,m,20)(La,,116)(Si,m,236)", sC: "ta as", lines: [
            { line: "¡SEÑOR, AYÚDAME, SEÑOR!, (La,,119)(Si,m,240)", sC: "as sub1"},
            { line: "A no dudar de Ti., (Fa#,,35)", sC: ""},
            { line: "A NO DUDAR DE TI., ", sC: "as"},
            { line: "¡Señor, ayúdame, Señor!, (Si,m,50)(La,,104)(Si,m,217)", sC: ""},
            { line: "¡SEÑOR, AYÚDAME, SEÑOR!, (La,,121)(Si,m,239)", sC: "as"},
            { line: "A no dudar nunca de tu amor., (Sol,,29)(Fa#,,263)", sC: ""},
            { line: "A NO DUDAR NUNCA DE TU AMOR., (Sol,,29)(Fa#,,302)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y EN ESTA LLAMA DE TU AMOR OSCURA,, (Re,,10)(La,,352)", sC: "ta as"},
            { line: "EN ESTA TELA QUE ENVUELVE MI ALMA, ", sC: "as"},
            { line: "Y LA SOFOCA,, (Re,,91)", sC: "as"},
            { line: "SIENTO MI CORAZÓN QUE SE DISLOCA,, (Sol,,26)(Fa#,,338)", sC: "as"},
            { line: "QUE SE ABRE Y SE DERRAMA, (Sol,,87)(Fa#,,245)", sC: "as"},
            { line: "COMO AGUA QUE INUNDA TU JARDÍN., (Mi,m,84)(Fa#,,336)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: SEÑOR, AYÚDAME A NO DUDAR DE TI
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SEÑOR, NO ME CORRIJAS EN TU CÓLERA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "senornomecorrijasentucolera",
        tt: "Señor, No Me Corrijas En Tu Cólera",
        title: "Señor, No Me Corrijas En Tu Cólera",
        subtitle: "Salmo 6",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "147",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/senornomecorrijasentucolera",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=senorayudameanodudardeti",
        sig: "/src/index.html?canto=sermondelamontana",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SEÑOR, NO ME CORRIJAS EN TU CÓLERA,, (Fa#,5/9 dim,47)(Sol,,210)(Fa#,,335)", sC: "tc as"},
            { line: "EN TU FUROR NO ME CASTIGUES., (Sol,,107)(Fa#,,258)", sC: "as r1"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ten piedad de mí, ten piedad Señor,, (Si,m,18)(La,,324)", sC: "tc"},
            { line: "que estoy sin fuerzas,, (Fa#,,158)", sC: ""},
            { line: "sáname tú, Señor,, (Si,m,18)(La,,157)", sC: ""},
            { line: "que se desmoronan mis huesos., (Fa#,,267)", sC: ""},
            { line: "Hundida tengo el alma,, (Sol,,14)(Fa#,,179)", sC: ""},
            { line: "y tú, Señor, ¿hasta cuándo?, (La,,27)(Fa#,,213)", sC: ""},
            { line: "Y TÚ, SEÑOR, ¿HASTA CUÁNDO?, (La,,36)(Fa#,,248)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SEÑOR, NO ME CORRIJAS EN TU CÓLERA, (Fa#,5/9 dim,47)(Sol,,250)(Fa#,,335)", sC: "ta as", lines: [
            { line: "EN TU FUROR NO ME CASTIGUES., (Sol,,107)(Fa#,,258)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Vuélvete, Señor, recobra mi alma,, (Si,m,17)(La,,135)(Fa#,,282)", sC: "tc"},
            { line: "sáname tú, Señor, por tu misericordia., (Si,m,18)(La,,159)(Fa#,,317)", sC: ""},
            { line: "Que nadie entre los muertos te recuerda,, (La,,58)(Fa#,,350)", sC: ""},
            { line: "ni en los infiernos se canta tu alabanza., (La,,120)(Fa#,,336)", sC: ""},
            { line: "QUE NADIE ENTRE LOS MUERTOS, (La,,20)", sC: "ta as"},
            { line: "TE RECUERDA, NI EN LOS INFIERNOS, (Fa#,,88)(La,,296)", sC: "as"},
            { line: "SE CANTA TU ALABANZA., (Fa#,,187)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "SEÑOR, NO ME CORRIJAS EN TU CÓLERA, (Fa#,5/9 dim,47)(Sol,,250)(Fa#,,335)", sC: "ta as", lines: [
            { line: "EN TU FUROR NO ME CASTIGUES., (Sol,,107)(Fa#,,258)", sC: "as r1"},  ]},
    ], lder: [
            { line: "Estoy cansado de gemir,, (Si,m,17)", sC: "tc"},
            { line: "inundo de lágrimas mi cama,, (La,,10)(Si,m,236)", sC: ""},
            { line: "mis ojos se consumen en la angustia,, (La,,313)", sC: ""},
            { line: "envejezco entre enemigos., (Fa#,,215)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Apartaos de mí, malvados,, (La,,10)(Fa#,,209)", sC: ""},
            { line: "que el Señor escucha mis sollozos,, (La,,111)(Fa#,,293)", sC: ""},
            { line: "que el Señor acoge mi oración., (La,,111)(Fa#,,275)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "SEÑOR, NO ME CORRIJAS EN TU CÓLERA, (Fa#,5/9 dim,47)(Sol,,250)(Fa#,,335)", sC: "ta as", lines: [
            { line: "EN TU FUROR NO ME CASTIGUES., (Sol,,107)(Fa#,,258)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y tú, Señor, ¿hasta cuándo?, (La,,29)(Fa#,,215)", sC: "tc"},
            { line: "Y TÚ, SEÑOR, ¿HASTA CUÁNDO?, (La,,34)(Fa#,,246)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: SEÑOR, NO ME CORRIJAS EN TU CÓLERA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SERMÓN DE LA MONTAÑA                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "sermondelamontana",
        tt: "Sermón De La Montaña ",
        title: "Sermón De La Montaña ",
        subtitle: "Lucas 6,20-38",
        category: ["Precatecumenado","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "148",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/sermondelamontana.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=senornomecorrijasentucolera",
        sig: "/src/index.html?canto=shlomlejmariam",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Alzando los ojos hacia, (Re,,10)", sC: "tc"},
            { line: "sus discípulos, Jesús decía:, (La,7,182)(Re,,239)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DICHOSOS LOS POBRES,, (Sol,,171)(Re,,212)", sC: "tca as"},
            { line: "PORQUE VUESTRO, (La,7,124)", sC: "as"},
            { line: "ES EL REINO DE DIOS., (Re,,181)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DICHOSOS LOS QUE AHORA, ", sC: "tca as"},
            { line: "TENÉIS HAMBRE,, (Sol,,93)(Re,,152)", sC: "as"},
            { line: "PORQUE SERÉIS SACIADOS., (La,7,20)(Re,,214)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DICHOSOS LOS QUE LLORÁIS AHORA,, (Sol,,321)(Re,,354)", sC: "tca as"},
            { line: "PORQUE REIRÉIS., (La,7,20)(Re,,144)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Dichosos seréis cuando os odien,, (Si,m,136)(La,,269)", sC: "tc"},
            { line: "os injurien a causa del Hijo del hombre., (Sol,,59)(Fa#,,318)", sC: ""},
            { line: "Alegraos ese día, que vuestra recompensa, (Sol,,53)", sC: ""},
            { line: "será grande en el cielo., (Fa#,,189)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡AY DE VOSOTROS, LOS RICOS!, (Re,,12)(Sol,,242)(Re,,272)", sC: "tc as"},
            { line: "PORQUE HABÉIS RECIBIDO, (La,7,227)", sC: "as"},
            { line: "VUESTRO CONSUELO., (Re,,166)", sC: "as"},
    ], lder: [
            { line: "¡AY DE LOS QUE REÍS AHORA!, (Sol,,243)(Re,,275)", sC: "tca as"},
            { line: "PORQUE TENDRÉIS AFLICIÓN, (La,7,261)", sC: "as"},
            { line: "Y LLANTO., (Re,,60)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "AMAD A VUESTROS ENEMIGOS,, (Mi,,10)(La,,252)(Mi,,279)", sC: "tca as"},
            { line: "HACED EL BIEN A LOS QUE OS ODIAN., (Si,7,129)(Mi,,304)", sC: "as"},
            { line: "AL QUE TE HIERE EN UNA MEJILLA,, (La,,191)(Mi,,320)", sC: "tca as"},
            { line: "PRESÉNTALE TAMBIÉN LA OTRA;, (Si,7,59)(Mi,,265)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "AL QUE TE QUITE EL MANTO,, (Fa#,,15)(Si,,221)(Fa#,,256)", sC: "tca as"},
            { line: "NO LE NIEGUES LA TÚNICA;, (Do#,7,88)(Fa#,,201)", sC: "as"},
            { line: "AL QUE TE QUITE LO QUE ES TUYO,, (Si,,285)(Fa#,,318)", sC: "tca as"},
            { line: "NO SE LO RECLAMES., (Do#,7,22)(Fa#,,152)", sC: "as"},
            { line: "AMAD A VUESTROS ENEMIGOS,, (Mi,,10)(La,,249)(Mi,,278)", sC: "tca as"},
            { line: "HACED EL BIEN A LOS QUE OS ODIAN., (Si,7,127)(Mi,,301)", sC: "as"},
            { line: "NO JUZGUÉIS,, (Fa#,,15)(Si,,98)(Fa#,,127)", sC: "tca as"},
            { line: "NO CONDENÉIS;, (Si,,120)(Fa#,,147)", sC: "tca as"},
            { line: "PERDONAD, (Si,,82)(Fa#,,113)", sC: "tca as"},
            { line: "Y SERÉIS PERDONADOS, (Do#,7,69)(Fa#,,181)", sC: "tca as"},
]}, // ULTIMA LINEA DEL CANTO: SERMÓN DE LA MONTAÑA 
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           SHLOM LEJ MARIAM               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "shlomlejmariam",
        tt: "Shlom Lej Mariam",
        title: "Shlom Lej Mariam",
        subtitle: "Ave María en arameo antiguo",
        category: ["Precatecumenado","Vírgen María"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "149",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/shlomlejmariam.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=sermondelamontana",
        sig: "/src/index.html?canto=sielsenornoconstruyelacasa",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SHLOM LEJ MARIAM,, (Mi,m,20)(Si,7,95)(Mi,m,170)", sC: "tc as"},
            { line: "MALIATH TAi BUTHA., (Si,7,110)(Mi,m,149)", sC: "as r1"},
            { line: "MARAN, MARAN AMEJ,, (Do,,52)(Si,7,203)", sC: "as"},
            { line: "MARAN, MARAN AMEJ., (Do,,52)(Si,7,203)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ave María, llena de gracia,, (Mi,m,20)", sC: "tc"},
            { line: "el Señor, el Señor es contigo,, (Do,,65)(Si,7,243)", sC: ""},
            { line: "bendita tú eres entre todas las mujeres,, (Do,,47)(Si,7,347)", sC: ""},
            { line: "y bendito es el fruto de tu seno, Jesús., (Do,,63)(La,m,161)(Si,7,344)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SANTA, SANTA MARÍA,, (Mi,m,20)", sC: "ta as"},
            { line: "MADRE, MADRE DE DIOS, ", sC: "as r2"},
            { line: "RUEGA, RUEGA POR NOSOTROS, (Do,,33)(Si,7,249)", sC: "as"},
            { line: "QUE SOMOS, QUE SOMOS PECADORES., (Do,,10)(Si,7,327)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡María, no llores!, (La,m,20)(Si,7,119)", sC: "tc"},
            { line: "María, María, María., (La,m,20)", sC: ""},
            { line: "¡Ayaay, ayaay, aay!, (Si,7,160)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SANTA, SANTA MARÍA, (Mi,m,20)", sC: "ta as", lines: [
            { line: "MADRE, MADRE DE DIOS, ", sC: "as r2"},
            { line: "RUEGA, RUEGA POR NOSOTROS, (Do,,33)(Si,7,249)", sC: "as"},
            { line: "QUE SOMOS, QUE SOMOS PECADORES., (Do,,10)(Si,7,327)", sC: "as"}, ]},
    ], lder: [
            { line: "María, ayúdanos,, (Sol,,14)(Si,7,93)", sC: "tc"},
            { line: "María, ayúdanos., (La,m,43)(Si,7,96)", sC: ""},
            { line: "¡Virgen María!, (La,m,113)", sC: ""},
            { line: "¡Ay ay aaay aaaaaaaaay!, ", sC: "melisma"},
            { line: "¡Ayúdanos!, (Si,7,36)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SANTA, SANTA MARÍA, (Mi,m,20)", sC: "ta as", lines: [
            { line: "MADRE, MADRE DE DIOS, ", sC: "as r2"},
            { line: "RUEGA, RUEGA POR NOSOTROS, (Do,,33)(Si,7,249)", sC: "as"},
            { line: "QUE SOMOS, QUE SOMOS PECADORES., (Do,,10)(Si,7,327)", sC: "as"}, ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SHLOM LEJ MARIAM, (Mi,m,20)(Si,7,95)(Mi,m,170)", sC: "ta as", lines: [
            { line: "MALIATH TAi BUTHA., (Si,7,110)(Mi,m,149)", sC: "as r1"},
            { line: "MARAN, MARAN AMEJ,, (Do,,52)(Si,7,203)", sC: "as"},
            { line: "MARAN, MARAN AMEJ., (Do,,52)(Si,7,203)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SHLOM LEJ MARIAM
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SI EL SEÑOR NO CONSTRUYE LA CASA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "sielsenornoconstruyelacasa",
        tt: "Si El Señor No Construye La Casa",
        title: "Si El Señor No Construye La Casa",
        subtitle: "Salmo 127 (126)",
        category: ["Precatecumenado","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "150",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/sielsenornoconstruyelacasa.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=shlomlejmariam",
        sig: "/src/index.html?canto=sihabeisresucitadoconcristo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SI EL SEÑOR, (Mi,,10)", sC: "tc as"},
            { line: "NO CONSTRUYE LA CASA,, (Do#,m,116)(La,,209)", sC: "as r1"},
            { line: "EN VANO SE CANSAN, (Si,,53)", sC: "as"},
            { line: "LOS CONSTRUCTORES., (Mi,,171)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Si el Señor no guarda la ciudad,, (Do#,m,27)(Sol#,,281)", sC: "tc"},
            { line: "en vano vigilan los centinelas,, (Do#,m,255)", sC: ""},
            { line: "si el Señor no guarda la ciudad., (La,,10)(Sol#,,279)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SI EL SEÑOR, (Mi,,10)", sC: "ta as", lines: [
            { line: "NO CONSTRUYE LA CASA,, (Do#,m,116)(La,,209)", sC: "as r1"},
            { line: "EN VANO SE CANSAN, (Si,,53)", sC: "as"},
            { line: "LOS CONSTRUCTORES., (Mi,,171)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En vano madrugáis al levantaros,, (Do#,m,26)(Sol#,,279)", sC: "tc"},
            { line: "el descanso retrasáis, ", sC: ""},
            { line: "para conseguir el pan:, (Do#,m,196)", sC: ""},
            { line: "Dios lo da a sus amigos, (La,,10)", sC: ""},
            { line: "mientras duermen., (Sol#,,126)", sC: ""},
            { line: "DIOS LO DA A SUS AMIGOS, (La,,10)", sC: "ta as"},
            { line: "MIENTRAS DUERMEN., (Sol#,,144)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "SI EL SEÑOR, (Mi,,10)", sC: "ta as", lines: [
            { line: "NO CONSTRUYE LA CASA,, (Do#,m,116)(La,,209)", sC: "as r1"},
            { line: "EN VANO SE CANSAN, (Si,,53)", sC: "as"},
            { line: "LOS CONSTRUCTORES., (Mi,,171)", sC: "as"},  ]},
    ], lder: [
            { line: "Don del Señor son los hijos,, (Do#,m,26)(Sol#,,229)", sC: "tc"},
            { line: "son como flechas en manos de un guerrero, ", sC: ""},
            { line: "los hijos de la juventud., (Do#,m,204)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Dichoso el hombre, (La,,17)", sC: ""},
            { line: "que tiene llena su aljaba!, (Sol#,,206)", sC: ""},
            { line: "No temerá cuando lleguen, (La,,97)", sC: ""},
            { line: "sus enemigos., (Sol#,,97)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "SI EL SEÑOR, (Mi,,10)", sC: "ta as", lines: [
            { line: "NO CONSTRUYE LA CASA,, (Do#,m,116)(La,,209)", sC: "as r1"},
            { line: "EN VANO SE CANSAN, (Si,,53)", sC: "as"},
            { line: "LOS CONSTRUCTORES., (Mi,,171)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SI EL SEÑOR NO CONSTRUYE LA CASA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SI HABÉIS RESUCITADO CON CRISTO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "sihabeisresucitadoconcristo",
        tt: "Si Habéis Resucitado Con Cristo",
        title: "Si Habéis Resucitado Con Cristo",
        subtitle: "Colosense 3,1-4",
        category: ["Precatecumenado","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "1",
        nCan: "* Melisma",
        nCanURL: "",
        dbno: "151",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/sihabeisresucitadoconcristo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=sielsenornoconstruyelacasa",
        sig: "/src/index.html?canto=sihoyescuchaissuvoz",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SI HABÉIS RESUCITADO CON CRISTO,, (Mi,m,20)(Si,7,308)", sC: "tc as"},
            { line: "BUSCAD LAS COSAS DE ARRIBA,, (Mi,m,276)", sC: "as r1"},
            { line: "DONDE ESTÁ CRISTO,, (Re,,20)(Do,,159)", sC: "ta as"},
            { line: "DONDE ESTÁ CRISTO, ", sC: "as"},
            { line: "SENTADO A LA DIESTRA DE DIOS., (Si,7,295)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Aspirad a las cosas del Cielo,, (Mi,m,55)(Si,7,246)", sC: "tc"},
            { line: "y no a las de la tierra., (Mi,m,167)", sC: ""},
            { line: "ASPIRAD A LAS COSAS DEL CIELO,, (Si,7,295)", sC: "ta as"},
            { line: "Y NO A LAS DE LA TIERRA., (Mi,m,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque habéis muerto,, (Re,,10)(Do,,176)", sC: "tc"},
            { line: "porque habéis muerto, ", sC: ""},
            { line: "y vuestra vida está oculta, (La,m,207)", sC: ""},
            { line: "unida con Cristo en Dios., (Si,7,210)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y cuando"+'  '+"aparezca Cristo,, (La,m,20)(Si,7,212)", sC: "ast1"},
            { line: "que es vuestra vida,, (La,m,20)(Si,7,161)", sC: ""},
            { line: "entonces vosotros, (Do,,34)", sC: ""},
            { line: "apareceréis gloriosos con Él., (Si,7,263)", sC: ""},
    ], lder: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SI HABÉIS RESUCITADO CON CRISTO, (Mi,m,20)(Si,7,250)", sC: "ta as", lines: [
            { line: "BUSCAD LAS COSAS DE ARRIBA,, (Mi,m,276)", sC: "as r1"},
            { line: "DONDE ESTÁ CRISTO,, (Re,,20)(Do,,159)", sC: "ta as"},
            { line: "DONDE ESTÁ CRISTO, ", sC: "as"},
            { line: "SENTADO A LA DIESTRA DE DIOS., (Si,7,295)", sC: "as"}, ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Aspirad a las cosas del Cielo,, (Mi,m,53)(Si,7,248)", sC: "tc"},
            { line: "y no a las de la tierra., (Mi,m,165)", sC: ""},
            { line: "ASPIRAD A LAS COSAS DEL CIELO,, (Si,7,296)", sC: "ta as"},
            { line: "Y NO A LAS DE LA TIERRA., (Mi,m,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque habéis muerto,, (Re,,10)(Do,,178)", sC: "tc"},
            { line: "y vuestra vida está oculta, (La,m,207)", sC: ""},
            { line: "unida con Cristo en Dios., (Si,7,207)", sC: ""},
            { line: "PORQUE HABÉIS MUERTO,, (Re,,10)(Do,,201)", sC: "tc as"},
            { line: "Y VUESTRA VIDA ESTÁ OCULTA, (La,m,253)", sC: "as"},
            { line: "UNIDA CON CRISTO EN DIOS., (Si,7,249)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y cuando"+'  '+"aparezca Cristo,, (La,m,20)(Si,7,214)", sC: "tc ast2"},
            { line: "que es vuestra vida,, (La,m,20)(Si,7,158)", sC: ""},
            { line: "entonces vosotros, (Do,,35)", sC: ""},
            { line: "apareceréis gloriosos con Él., (Si,7,261)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SI HABÉIS RESUCITADO CON CRISTO, (Mi,m,20)(Si,7,250)", sC: "ta as", lines: [
            { line: "BUSCAD LAS COSAS DE ARRIBA,, (Mi,m,276)", sC: "as r1"},
            { line: "DONDE ESTÁ CRISTO,, (Re,,20)(Do,,159)", sC: "ta as"},
            { line: "DONDE ESTÁ CRISTO, ", sC: "as"},
            { line: "SENTADO A LA DIESTRA DE DIOS., (Si,7,295)", sC: "as"}, ]},
]}, // ULTIMA LINEA DEL CANTO: SI HABÉIS RESUCITADO CON CRISTO
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           SI HOY ESCUCHÁIS SU VOZ                ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "sihoyescuchaissuvoz",
        tt: "Si hoy Escucháis Su Voz ",
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
        audioSrc: "https://audio.resucito.do/sihoyescuchaissuvoz.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 3.5, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=sihabeisresucitadoconcristo",
        sig: "/src/index.html?canto=simeherefugiadoenelsenor",
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
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "SI HOY ESCUCHÁIS SU VOZ (Mi,,10)(Fa#,m,249)", sC: "ta as", lines: [
            { line: "NO ENDUREZCÁIS EL CORAZÓN., (Si,7,153)(Mi,,285)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque el Señor es un Dios grande,, (Do#,m,26)(Fa#,m,290)", sC: "tc"},
            { line: "más grande que todos los dioses;, (Si,7,66)(Mi,,280)", sC: ""},
            { line: "suyo es el mar, suya es la tierra,, (Do#,m,26)(Sol#,,269)", sC: ""},
            { line: "son suyas las cumbres de los montes., (Do#,m,310)(Mi,,361)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "expanded",
       triggerLine: "SI HOY ESCUCHÁIS SU VOZ (Mi,,10)(Fa#,m,249)", sC: "ta as", lines: [
            { line: "NO ENDUREZCÁIS EL CORAZÓN., (Si,7,153)(Mi,,285)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Entrad, postrémonos por tierra,, (Do#,m,26)(Fa#,m,264)", sC: "tc"},
            { line: "bendiciendo al Señor, creador nuestro., (Si,7,27)(Mi,,264)", sC: ""},
            { line: "Porque El es nuestro Dios y nosotros su pueblo,, (Do#,m,81)(Sol#,,321)", sC: ""},
            { line: "el rebaño que Él conduce., (Do#,m,227)(MI,,275)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "SI HOY ESCUCHÁIS SU VOZ (Mi,,10)(Fa#,m,249)", sC: "ta as", lines: [
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
            { line: "no quiere conocer mis caminos, ", sC: ""},
            { line: "por eso no entrarán en mi descanso»., (Do#,m,305)(Mi,,362)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "SI HOY ESCUCHÁIS SU VOZ, (Mi,,10)(Fa#,m,249)", sC: "ta as", lines: [
            { line: "NO ENDUREZCÁIS EL CORAZÓN., (Si,7,153)(Mi,,285)", sC: "as r1"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SI HOY ESCUCHÁIS SU VOZ 
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SI ME HE REFUGIADO EN EL SEÑOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "simeherefugiadoenelsenor",
        tt: "Si Me He Refugiado En El Señor",
        title: "Si Me He Refugiado En El Señor",
        subtitle: "Salmo 11(10)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "153",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/simeherefugiadoenelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=sihoyescuchaissuvoz",
        sig: "/src/index.html?canto=sionmadredetodoslospueblos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "SI ME HE REFUGIADO EN EL SEÑOR,, (Sol,,14)(Si,7,172)", sC: "ta as"},
            { line: "¿CÓMO PODÉIS DECIRME, ", sC: "as"},
            { line: "CÓMO PODÉIS DECIRME, (Mi,m,190)", sC: "as"},
            { line: "QUE HUYA COMO EL PÁJARO AL MONTE,, (Do,,64)(Si,7,339)", sC: "as"},
            { line: "QUE HUYA COMO EL PÁJARO AL MONTE?, (Do,,64)(Si,7,339)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo sé que los malvados tensan el arco,, (Do,,10)(Si,7,335)", sC: "tc"},
            { line: "que ajustan las flechas a la cuerda,, (Do,,66)(Si,7,297)", sC: ""},
            { line: "para herir en la sombra al inocente., (Do,,64)(Si,7,303)", sC: ""},
            { line: "Mas cuando fallan los cimientos,, (La,m,20)(Si,7,263)", sC: ""},
            { line: "¿qué puede hacer el justo?,, (La,m,20)(Si,7,215)", sC: ""},
            { line: "¿qué puede hacer el justo?, (Do,,10)(Si,7,216)", sC: ""},
    ], lder: [
            { line: "Mas el Señor, el Señor, (Sol,,14)(Si,7,200)", sC: ""},
            { line: "está en su templo santo,, (Mi,m,197)", sC: ""},
            { line: "tiene su trono en el cielo;, (Do,,10)(Si,7,213)", sC: ""},
            { line: "sus ojos observan el mundo,, (Do,,46)(Si,7,226)", sC: ""},
            { line: "sus pupilas las acciones de los hombres., (Do,,77)(Si,7,318)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor escruta a los justos,, (Sol,,14)(Si,7,79)(Mi,m,230)", sC: ""},
            { line: "mas también escruta a los malvados;, (Do,,10)(Si,7,312)", sC: ""},
            { line: "y el Señor no ama la violencia,, (La,m,81)(Si,7,241)", sC: ""},
            { line: "el Señor no ama la violencia., (La,m,69)(Si,7,226)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SI ME HE REFUGIADO EN EL SEÑOR (Sol,,14)(Si,7,172)", sC: "ta as", lines: [
            { line: "¿CÓMO PODÉIS DECIRME, ", sC: "as"},
            { line: "CÓMO PODÉIS DECIRME, (Mi,m,190)", sC: "as"},
            { line: "QUE HUYA COMO EL PÁJARO AL MONTE,, (Do,,64)(Si,7,339)", sC: "as"},
            { line: "QUE HUYA COMO EL PÁJARO AL MONTE?, (Do,,64)(Si,7,339)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: SI ME HE REFUGIADO EN EL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SIÓN, MADRE DE TODOS LOS PUEBLOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "sionmadredetodoslospueblos",
        tt: "Sión, Madre De Todos Los Pueblos",
        title: "Sión, Madre De Todos Los Pueblos",
        subtitle: "Salmo 87 (86)",
        category: ["Precatecumenado","Vírgen María","Final","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "2",
        nCan: "* Punteo: al aire la 5ª cuerda, 3e, traste la 6ª cuerda, 1e, traste la 6ª cuerda, enlazando con el acorde de Fa",
        nCanURL: "",
        dbno: "154",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/sionmadredetodoslospueblos.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=simeherefugiadoenelsenor",
        sig: "/src/index.html?canto=solaasolo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Su fundación está sobre los montes santos,, (La,m,15)(Fa,,421)", sC: "tc ast"},
            { line: "el Señor ama las puertas de Sión, ", sC: ""},
            { line: "más que todas las moradas de Jacob., (Mi,,339)(Si,7,377)", sC: ""},
            { line: "De ti se dicen cosas estupendas,, ", sC: ""},
            { line: "ciudad de Dios., (Mi,,125)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Recuerdo Ráhab y Babilonia,, (La,m,15)(Fa,,286)", sC: "ast1"},
            { line: "Palestina, Tiro y Etiopía,, ", sC: ""},
            { line: "Cuando alguno nace en ellas se dice:, ", sC: ""},
            { line: "Fulano nació allí»,, (Mi,,149)(Si,7,188)", sC: ""},
            { line: "Mas de Sión se dice: Madre»., (Mi,,226)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PORQUE TODOS HAN NACIDO EN ELLA., (La,m,20)(Re,m,102)(Mi,,182)(La,m,335)", sC: "tc as r1"},
            { line: "EL SEÑOR, ÉL MISMO LA FUNDÓ., (Sol,,14)(Fa,,78)(Mi,,300)", sC: "tc as r1"},
            { line: "¡MADRE, MADRE, CIUDAD DE DIOS!, (La,m,35)(Sol,,114)(Fa,,227)(Mi,,310)", sC: "ta as r1"},
    ], lder: [
            { line: "El Señor escribe en el libro de los pueblos:, (La,m,20)(Fa,,412)", sC: "tc ast2"},
            { line: "Este ha nacido en ella»,, ", sC: ""},
            { line: "y danzando cantarán:, (Mi,,182)(Si,7,240)", sC: ""},
            { line: "Están en ti todas mis fuentes»., (Mi,,231)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y DANZANDO, DANZANDO CANTARÁN:, (La,m,20)(Re,m,80)(Mi,,203)(La,m,345)", sC: "tc as r1"},
            { line: "«TODAS MIS FUENTES ESTÁN EN TI., (Sol,,25)(Fa,,149)(Mi,,329)", sC: "tc as r1"},
            { line: "¡MADRE, MADRE, CIUDAD DE DIOS!, (La,m,34)(Sol,,112)(Fa,,226)(Mi,,307)", sC: "ta as r1"},
]}, // ULTIMA LINEA DEL CANTO: SIÓN, MADRE DE TODOS LOS PUEBLOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SOLA A SOLO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "solaasolo",
        tt: "Sola A Solo",
        title: "Sola A Solo",
        subtitle: "(Kiko Argüello)",
        category: ["Precatecumenado","Vírgen María","Cuaresma","Penitencial","Fracción Del Pan"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Punteo en la 1ª cuerda: al aire 5º 4º 5º 7° 5° 4° y 5° traste. La 4ª cuerda en el 6° traste tres veces y la 1 ª al aire nuevamente.",
        nCanURL: "",
        dbno: "155",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/solaasolo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=sionmadredetodoslospueblos",
        sig: "/src/index.html?canto=stabatmaterdolorosa",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Sola a solo, (Re,madd9*,47)(Sol,m,127)", sC: "tc"},
            { line: "bajo la cruz,, (La,,96)", sC: ""},
            { line: "María, ¿quién te podrá separar?, (Re,m,284)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Virgen sola,, (Sol,m,88)", sC: ""},
            { line: "Madre,, (La,,25)", sC: ""},
            { line: "torre atravesada., (Re,m,126)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Columna de amor,, (Sol,m,158)", sC: ""},
            { line: "tú sujetas el cielo, (La,,146)", sC: ""},
            { line: "de nuestra débil fe., (Re,m,164)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "SOLA A SOLO,, (Re,m,18)(Do,,100)", sC: "ta as"},
            { line: "MADRE, LLENA DE DIOS., (Fa,,209)", sC: "as"},
            { line: "RUEGA POR NOSOTROS, (La,,36)", sC: "as"},
            { line: "QUE SOMOS PECADORES., (Si♭,,71)(La,,200)", sC: "as"},
    ], lder: [
            { line: "Sola a solo, (Re,m,21)(Sol,m,85)", sC: "tc"},
            { line: "bajo la cruz,, (La,,92)", sC: ""},
            { line: "María, ¿quién te podrá separar?, (Re,m,286)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "VIRGEN SOLA,, (Re,m,19)(Sol,m,101)", sC: "ta as"},
            { line: "MADRE,, (La,,26)", sC: "as"},
            { line: "TORRE ATRAVESADA., (Re,m,163)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Columna de amor,, (Re,m,23)(Sol,m,157)", sC: "tc"},
            { line: "tú sujetas el cielo, (La,,143)", sC: ""},
            { line: "de nuestra débil fe., (Re,m,165)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SOLA A SOLO, (Re,m,18)(Do,,100)", sC: "ta as", lines: [
            { line: "MADRE, LLENA DE DIOS., (Fa,,209)", sC: "as"},
            { line: "RUEGA POR NOSOTROS, (La,,36)", sC: "as"},
            { line: "QUE SOMOS PECADORES., (Si♭,,71)(La,,200)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: SOLA A SOLO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           STABAT MATER DOLOROSA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "stabatmaterdolorosa",
        tt: "Stabat Mater Dolorosa",
        title: "Stabat Mater Dolorosa",
        subtitle: "Himno latin",
        category: ["Precatecumenado","Vírgen María","Cuaresma","Penitencial","Fracción Del Pan"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "156",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/stabatmaterdolorosa.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=solaasolo",
        sig: "/src/index.html?canto=subediosentreaclamaciones",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "STABAT MATER DOLOROSA, (Re,m add9,42)", sC: "ta as"},
            { line: "IUXTA CRUCEM LACRIMOSA,, (Do,7,19)(Si♭,7,237)", sC: "as r1"},
            { line: "DUM PENDEBAT FILIUS., (La,,201)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Era su alma un gemido,, (Re,m,20)", sC: "tc"},
            { line: "era un dolor, era un grito,, (Do,7,107)(Si♭,7,209)", sC: ""},
            { line: "cuando una espada la atravesó., (La,,291)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Oh qué triste y afligida, (Re,m,22)", sC: ""},
            { line: "está la bendita Madre, (Do,7,33)(Si♭,7,169)", sC: ""},
            { line: "del Unigénito., (La,,83)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "STABAT MATER DOLOROSA, (Re,m,20)", sC: "ta as", lines: [
            { line: "IUXTA CRUCEM LACRIMOSA,, (Do,7,19)(Si♭,7,237)", sC: "as r1"},
            { line: "DUM PENDEBAT FILIUS., (La,,201)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Cuál es el hombre que no llora, (Re,m,22)", sC: "tc"},
            { line: "al ver a la Madre de Cristo, (Do,7,41)(Si♭,7,216)", sC: ""},
            { line: "en tanto suplicio?, (La,,131)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Por los pecados de su gente, (Re,m,22)", sC: ""},
            { line: "Ella ve a Jesús en tormentos,, (Do,7,59)(Si♭,7,226)", sC: ""},
            { line: "y sometido a los azotes., (La,,189)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "STABAT MATER DOLOROSA, (Re,m,20)", sC: "ta as", lines: [
            { line: "IUXTA CRUCEM LACRIMOSA,, (Do,7,19)(Si♭,7,237)", sC: "as r1"},
            { line: "DUM PENDEBAT FILIUS., (La,,201)", sC: "as"},  ]},
    ], lder: [
            { line: "Ella ve a su Hijo amado, (Re,m,21)", sC: "tc"},
            { line: "que muere desolado,, (Do,7,80)(Si♭,7,171)", sC: ""},
            { line: "y que entrega su Espíritu., (La,,200)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Oh, Cristo, cuando yo deba morir,, (Re,m,21)(Sol,m,294)", sC: ""},
            { line: "por tu bendita Madre hazme conseguir, (Si♭,7,355)", sC: ""},
            { line: "la palma de la victoria., (La,,183)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "AMÉN, AMÉN, AMÉN., (Re,m,36)(Si♭,7,112)(La,7,179)", sC: "ta as r2"},
]}, // ULTIMA LINEA DEL CANTO: STABAT MATER DOLOROSA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           SUBE DIOS ENTRE ACLAMACIONES               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "subediosentreaclamaciones",
        tt: "Sube Dios Entre Aclamaciones",
        title: "Sube Dios Entre Aclamaciones",
        subtitle: "Salmo 47 (46)",
        category: ["Precatecumenado","Pascua","Pentecostés","Antiguo Testamento","Paz"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "157",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/subediosentreaclamaciones.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=stabatmaterdolorosa",
        sig: "/src/index.html?canto=teestoyllamandosenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Sube Dios entre aclamaciones,, (Re,m,20)(Sol,m,252)", sC: "tc"},
            { line: "al son de las trompetas., (Re,m,204)", sC: ""},
            { line: "SUBE DIOS ENTRE ACLAMACIONES,, (Re,m,20)(Sol,m,289)", sC: "ta as"},
            { line: "AL SON DE LAS TROMPETAS., (Re,m,256)", sC: "as r1"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Pueblos todos, batid palmas,, (Re,m,20)(Sol,m,227)", sC: "tc"},
            { line: "PUEBLOS TODOS, BATID PALMAS!, (Re,m,259)", sC: "ta as"},
            { line: "¡PUEBLOS TODOS, BATID PALMAS,, (Sol,m,262)", sC: "as"},
            { line: "PUEBLOS TODOS, BATID PALMAS!, (Re,m,256)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SUBE DIOS ENTRE ACLAMACIONES, (Re,m,20)(Sol,m,289)", sC: "ta as", lines: [
            { line: "AL SON DE LAS TROMPETAS., (Re,m,256)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Cantad para Dios, cantad,, (Re,m,22)(Sol,m,233)", sC: "tc"},
            { line: "CANTAD PARA DIOS, CANTAD!, (Re,m,261)", sC: "ta as"},
            { line: "¡CANTAD PARA DIOS, CANTAD,, (Sol,m,271)", sC: "as"},
            { line: "CANTAD PARA DIOS, CANTAD!, (Re,m,264)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "SUBE DIOS ENTRE ACLAMACIONES, (Re,m,20)(Sol,m,289)", sC: "ta as", lines: [
            { line: "AL SON DE LAS TROMPETAS., (Re,m,256)", sC: "as r1"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: SUBE DIOS ENTRE ACLAMACIONES
// SIGUIENTE CANTO DEBAJO
/*

// LETRA T

╔════════════════════════════════════════════════════════╗
║           TE ESTOY LLAMANDO, SEÑOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "teestoyllamandosenor",
        tt: "Te Estoy Llamando, Señor",
        title: "Te Estoy Llamando, Señor",
        subtitle: "Salmo 141 (140)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "158",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/teestoyllamandosenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=subediosentreaclamaciones",
        sig: "/src/index.html?canto=tehemanifestadomipecado",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "A TE ESTOY LLAMANDO,, (Re,m,22)", sC: "ta as"},
            { line: "TE ESTOY LLAMANDO, SEÑOR,, (La,7,269)", sC: "as"},
            { line: "VEN CORRIENDO,, (Sol,m,22)(La,7,113)", sC: "as"},
            { line: "ESCUCHA MI VOZ QUE YO A TI GRITO., (Re,m,324)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "VALGA ANTE TI MI ORACIÓN, ", sC: "as"},
            { line: "COMO INCIENSO,, (La,7,114)", sC: "as"},
            { line: "EL ALZAR DE MIS MANOS, ", sC: "as"},
            { line: "COMO SACRIFICIO DE LA TARDE., (Re,m,263)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pon, Señor, a mi boca un centinela,, (Do,,10)(Fa,,123)(La,7,309)", sC: "tc"},
            { line: "una guardia a la puerta de mis labios., (Do,,68)(Si♭,,191)(La,7,318)", sC: ""},
            { line: "No sea que se incline mi corazón a la maldad,, (Sol,m,52)(La,7,417)", sC: ""},
            { line: "a cometer acciones criminales., (Si♭,,88)(La,7,258)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que el justo me golpee por amor, y me corrija,, (Fa,,11)(Re,m,137)(La,7,300)(Re,m,411)", sC: ""},
            { line: "para que el ungüento del malvado, (Si,♭,10)", sC: ""},
            { line: "no perfume mi cabeza,, (La,7,190)", sC: ""},
            { line: "porque yo me enviciaría en su maldad,, (Sol,m,93)(La,7,348)", sC: ""},
            { line: "porque yo me enviciaría en su maldad., (Si♭,,90)(La,7,348)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TE ESTOY LLAMANDO, (Re,m,22)", sC: "ta as", lines: [
            { line: "TE ESTOY LLAMANDO, SEÑOR,, (La,7,269)", sC: "as"},
            { line: "VEN CORRIENDO,, (Sol,m,22)(La,7,113)", sC: "as"},
            { line: "ESCUCHA MI VOZ QUE YO A TI GRITO., (Re,m,324)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "VALGA ANTE TI MI ORACIÓN, ", sC: "as"},
            { line: "COMO INCIENSO,, (La,7,114)", sC: "as"},
            { line: "EL ALZAR DE MIS MANOS, ", sC: "as"},
            { line: "COMO SACRIFICIO DE LA TARDE., (Re,m,263)", sC: "as"},  ]},
    ], lder: [
            { line: "A ti, Señor, miran mis ojos,, (Do,,10)(Fa,,80)(La,7,228)", sC: "tc"},
            { line: "en ti me refugio, ¡no desampares mi alma!, (Do,,35)(Si♭,,120)(La,7,367)", sC: ""},
            { line: "Guárdame tú del lazo que me tienden,, (Sol,m,22)(La,7,307)", sC: ""},
            { line: "de las trampas de tantos enemigos., (Sol,m,87)(La,7,298)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Caigan ellos, cada uno en su red,, (Fa,,10)(Re,m,135)(La,7,294)", sC: ""},
            { line: "que yo, unido a ti, paso indemne,, (Si♭,,12)(La,7,265)", sC: ""},
            { line: "que yo, unido a ti, paso indemne., (Sol,m,23)(Si♭,,161)(La,7,262)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TE ESTOY LLAMANDO, (Re,m,22)", sC: "ta as", lines: [
            { line: "TE ESTOY LLAMANDO, SEÑOR,, (La,7,269)", sC: "as"},
            { line: "VEN CORRIENDO,, (Sol,m,22)(La,7,113)", sC: "as"},
            { line: "ESCUCHA MI VOZ QUE YO A TI GRITO., (Re,m,324)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "VALGA ANTE TI MI ORACIÓN, ", sC: "as"},
            { line: "COMO INCIENSO,, (La,7,114)", sC: "as"},
            { line: "EL ALZAR DE MIS MANOS, ", sC: "as"},
            { line: "COMO SACRIFICIO DE LA TARDE., (Re,m,263)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: TE ESTOY LLAMANDO, SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           TE HE MANIFESTADO MI PECADO                  ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "tehemanifestadomipecado",
        tt: "Te He Manifestado Mi Pecado",
        title: "Te He Manifestado Mi Pecado",
        subtitle: "Salmo 32 (31)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "159",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/tehemanifestadomipecado.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=teestoyllamandosenor",
        sig: "/src/index.html?canto=tuhascubiertodevergüenzalamuerte",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "TE HE MANIFESTADO MI PECADO,, (La,m,20)(Re,m,225)", sC: "ta as"},
            { line: "NO HE TENIDO ESCONDIDOS MIS ERRORES., (La,m,109)", sC: "as"},
            { line: "HE DICHO: «CONFESARÉ AL SEÑOR MI CULPA»., (Sol,,50)(La,m,225)", sC: "as"},
            { line: "Y TÚ HAS PERDONADO, (Sol,,36)", sC: "as"},
            { line: "LA MALICIA DE MI PECADO., (La,m,224)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Dichoso el hombre, (La,m,20)", sC: "tc"},
            { line: "al que le son perdonadas sus culpas, (Re,m,106)", sC: ""},
            { line: "y que le fueron cubiertos sus pecados., (La,m,101)", sC: ""},
            { line: "Dichoso el hombre, (Sol,,123)", sC: ""},
            { line: "al que el Señor no imputa algún mal, (La,m,132)", sC: ""},
            { line: "y en cuyo espíritu no hay engaño., (Sol,,131)(La,m,280)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TE HE MANIFESTADO MI PECADO, (La,m,20)(Re,m,225)", sC: "ta as", lines: [
            { line: "NO HE TENIDO ESCONDIDOS MIS ERRORES., (La,m,109)", sC: "as"},
            { line: "HE DICHO: «CONFESARÉ AL SEÑOR MI CULPA»., (Sol,,50)(La,m,225)", sC: "as"},
            { line: "Y TÚ HAS PERDONADO, (Sol,,36)", sC: "as"},
            { line: "LA MALICIA DE MI PECADO., (La,m,224)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Callaba y se consumían mis huesos, (La,m,20)(Sol,,197)", sC: "tc"},
            { line: "gimiendo todo el día,, (La,m,48)", sC: ""},
            { line: "porque día y noche, (Sol,,18)", sC: ""},
            { line: "pesaba tu mano sobre mí,, (La,m,238)", sC: ""},
            { line: "como estío de verano, (Sol,,90)", sC: ""},
            { line: "estaba árido mi corazón., (La,m,217)", sC: ""},
    ], lder: [
            { line: "Mas te he manifestado mi pecado,, (La,m,20)(Re,m,245)", sC: ""},
            { line: "no he tenido escondidos mis errores,, (La,m,98)", sC: ""},
            { line: "he dicho: «Confesaré al Señor mi culpa»., (Sol,,43)(La,m,190)", sC: ""},
            { line: "Y tú has perdonado la malicia de mi pecado., (Sol,,27)(La,m,389)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
              triggerLine: "TE HE MANIFESTADO MI PECADO, (La,m,20)(Re,m,225)", sC: "ta as", lines: [
            { line: "NO HE TENIDO ESCONDIDOS MIS ERRORES., (La,m,109)", sC: "as"},
            { line: "HE DICHO: «CONFESARÉ AL SEÑOR MI CULPA»., (Sol,,50)(La,m,225)", sC: "as"},
            { line: "Y TÚ HAS PERDONADO, (Sol,,36)", sC: "as"},
            { line: "LA MALICIA DE MI PECADO., (La,m,224)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Por eso te suplican tus fieles, (La,m,20)(Re,m,146)", sC: "tc"},
            { line: "en el día de la angustia,, (La,m,70)", sC: ""},
            { line: "cuando las aguas caudalosas se desbordan,, (Sol,,122)(La,m,245)", sC: ""},
            { line: "mas a él no le alcanzarán., (Sol,,76)(La,m,227)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú eres mi refugio,, (Sol,,136)", sC: ""},
            { line: "tú me preservas del peligro,, (La,m,114)", sC: ""},
            { line: "me rodeas de cantos de salvación,, (Sol,,14)(La,m,156)", sC: ""},
            { line: "me dices: «Te haré sabio,, (Sol,,14)", sC: ""},
            { line: "te indicaré el camino de la vida»., (La,m,275)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TE HE MANIFESTADO MI PECADO, (La,m,20)(Re,m,225)", sC: "ta as", lines: [
            { line: "NO HE TENIDO ESCONDIDOS MIS ERRORES., (La,m,109)", sC: "as"},
            { line: "HE DICHO: «CONFESARÉ AL SEÑOR MI CULPA»., (Sol,,50)(La,m,225)", sC: "as"},
            { line: "Y TÚ HAS PERDONADO, (Sol,,36)", sC: "as"},
            { line: "LA MALICIA DE MI PECADO., (La,m,224)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: TE HE MANIFESTADO MI PECADO
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           TÚ HAS CUBIERTO DE VERGÜENZA LA MUERTE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "tuhascubiertodevergüenzalamuerte",
        tt: "Tú Has Cubierto De Vergüenza La Muerte",
        title: "Tú Has Cubierto De Vergüenza La Muerte",
        subtitle: "Homilía Pascual (Melltón de Sardes)",
        category: ["Precatecumenado","Vírgen María","Pascua","Pentecostés","Fracción Del Pan"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "160",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/tuhascubiertodevergüenzalamuerte.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=tehemanifestadomipecado",
        sig: "/src/index.html?canto=tuqueeresfiel",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Tú has cubierto de vergüenza la muerte,, (Re,m,22)(La,7,345)", sC: "tc"},
            { line: "tú has llenado de luto el infierno., (Re,m,276)", sC: "r1"},
            { line: "Has golpeado la iniquidad,, (La,7,233)", sC: ""},
            { line: "has privado a la injusticia de sus hijos,, (Re,m,334)", sC: ""},
            { line: "como Moisés al Faraón,, (Si♭,7,112)(La,7,210)", sC: ""},
            { line: "como Moisés al Faraón., (Si♭,7,113)(La,7,210)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú nos has pasado de la esclavitud a la libertad, (Re,m,20)(La,7,433)", sC: "tc"},
            { line: "de las tinieblas a la luz,, (Re,m,207)", sC: ""},
            { line: "de la muerte a la vida,, (La,7,183)", sC: ""},
            { line: "de la tiranía al reino eterno., (Re,m,227)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú eres la Pascua de nuestra salvación;, (La,7,357)", sC: ""},
            { line: "tú eres el cordero nacido de María., (Re,m,315)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "MARÍA, CORDERA SIN MANCHA,, (Re,m,20)(La,7,241)", sC: "ta as"},
            { line: "MARÍA, LA INOCENTE CORDERA., (Re,m,273)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú has sido asesinado en Abel,, (Re,m,20)(La,7,275)", sC: "tc"},
            { line: "tú fuiste atado en Isaac,, (Re,m,210)", sC: ""},
            { line: "vendido en José,, (La,7,140)", sC: ""},
            { line: "abandonado sobre las aguas en Moisés,, (Re,m,362)", sC: ""},
    ], lder: [
            { line: "perseguido en David, (La,7,182)", sC: ""},
            { line: "y despreciado en todos los profetas., (Re,m,303)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú eres el cordero que no abre boca;, (La,7,314)", sC: ""},
            { line: "tú eres el cordero nacido de María., (Re,m,310)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "MARÍA, CORDERA SIN MANCHA, (Re,m,20)(La,7,241)", sC: "ta as", lines: [
            { line: "MARÍA, LA INOCENTE CORDERA., (Re,m,273)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú fuiste cogido del rebaño,, (Re,m,20)(La,7,228)", sC: "tc"},
            { line: "conducido al sacrificio, inmolado por la tarde,, (Re,m,396)", sC: ""},
            { line: "sepultado en la noche; (La,7,169)", sC: ""},
            { line: "sobre la cruz no te fue roto ningún hueso,", sC: ""},
            { line: "ni en la tierra experimentaste la corrupción., (Re,m,396)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú resucitando de la muerte, (La,7,238)", sC: ""},
            { line: "has hecho resurgir a la humanidad, ", sC: ""},
            { line: "de lo profundo del sepulcro., (Re,m,220)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú eres el cordero que no abre boca;, (La,7,313)", sC: ""},
            { line: "tú eres el cordero nacido de María., (Re,m,311)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "MARÍA, CORDERA SIN MANCHA, (Re,m,20)(La,7,241)", sC: "ta as", lines: [
            { line: "MARÍA, LA INOCENTE CORDERA., (Re,m,273)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: TÚ HAS CUBIERTO DE VERGÜENZA LA MUERTE
// SIGUIENTE CANTO DEBAJO


/*
╔══════════════════════════════════════════╗
║           TÚ QUE ERES FIEL               ║
╚══════════════════════════════════════════╝  */
   {
        id: "tuqueeresfiel",
        tt: "Tú Que Eres Fiel",
        title: "Tú Que Eres Fiel",
        subtitle: "Salmo 143 (142)",
        category: ["Precatecumenado","Cuaresma","Penitencial","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* La asamblea puede dividirse para hacer la segunda voz más grave.",
        nCanURL: "",
        dbno: "161",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/tuqueeresfiel.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=tuhascubiertodevergüenzalamuerte",
        sig: "/src/index.html?canto=unretonobrotadeltroncodejese",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Señor, escucha mi oración,, (Do,,10)(Re,,77)(Do,m,171)", sC: "tc"},
            { line: "presta oídos a mi súplica., (Re,,12)(Do,m,144)(Re,,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "TÚ QUE ERES FIEL,, (Sol,m,23)(Do,m,153)", sC: "ta as ast"},
            { line: "TÚ QUE ERES FIEL, RESPÓNDEME,, (Sol,m,20)(Do,m,153)(Re,7,244)", sC: "as"},
            { line: "POR TU JUSTICIA RESPÓNDEME., (Do,m,127)(Re,7,230)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No llames a juicio a tu siervo,, (Sol,m,23)(Re,7,238)", sC: "tc"},
            { line: "ningún hombre es inocente frente a ti., (Sol,m,350)", sC: ""},
            { line: "El enemigo me persigue,, (Re,7,193)", sC: ""},
            { line: "estrella mi vida contra el suelo., (Do,m,46)(Re,7,273)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "TÚ QUE ERES FIEL, (Sol,m,20)(Do,m,153)", sC: "ta as ast", lines: [
            { line: "TÚ QUE ERES FIEL, RESPÓNDEME,, (Sol,m,20)(Do,m,153)(Re,7,244)", sC: "as"},
            { line: "POR TU JUSTICIA RESPÓNDEME., (Do,m,127)(Re,7,230)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Extiendo mis manos hacia ti,, (Sol,m,24)(Re,7,268)", sC: "tc"},
            { line: "tengo sed de ti como tierra reseca., (Sol,m,304)", sC: ""},
            { line: "¡Escúchame pronto, Señor,, (Re,7,236)", sC: ""},
            { line: "que me falta el aliento!, (Do,m,22)(Re,7,180)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "TÚ QUE ERES FIEL, (Sol,m,20)(Do,m,153)", sC: "ta as ast", lines: [
            { line: "TÚ QUE ERES FIEL, RESPÓNDEME,, (Sol,m,20)(Do,m,153)(Re,7,244)", sC: "as"},
            { line: "POR TU JUSTICIA RESPÓNDEME., (Do,m,127)(Re,7,230)", sC: "as"},  ]},
    ], lder: [
            { line: "Hazme conocer el camino,, (Sol,m,20)(Re,7,220)", sC: "tc"},
            { line: "la vía que he de seguir., (Sol,m,194)", sC: ""},
            { line: "Líbrame de mis enemigos,, (Re,7,210)", sC: ""},
            { line: "Señor, que me refugio en ti., (Do,m,47)(Re,7,254)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "TÚ QUE ERES FIEL, (Sol,m,20)(Do,m,153)", sC: "ta as ast", lines: [
            { line: "TÚ QUE ERES FIEL, RESPÓNDEME,, (Sol,m,20)(Do,m,153)(Re,7,244)", sC: "as"},
            { line: "POR TU JUSTICIA RESPÓNDEME., (Do,m,127)(Re,7,230)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Enséñame a cumplir tu voluntad,, (Sol,m,20)(Re,7,293)", sC: "tc"},
            { line: "porque tú eres mi Dios;, (Sol,m,198)", sC: ""},
            { line: "tu Espíritu me guíe,, (Re,7,167)", sC: ""},
            { line: "tu Espíritu me guíe por tierra llana., (Do,m,60)(Re,7,296)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "TÚ QUE ERES FIEL, (Sol,m,20)(Do,m,153)", sC: "ta as ast", lines: [
            { line: "TÚ QUE ERES FIEL, RESPÓNDEME,, (Sol,m,20)(Do,m,153)(Re,7,244)", sC: "as"},
            { line: "POR TU JUSTICIA RESPÓNDEME., (Do,m,127)(Re,7,230)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: TÚ QUE ERES FIEL
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════════════════╗
║           UN RETOÑO BROTA DEL TRONCO DE JESÉ               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "unretonobrotadeltroncodejese",
        tt: "Un Retoño Brota Del Tronco De Jesé",
        title: "Un Retoño Brota Del Tronco De Jesé",
        subtitle: "Isaías 11,1-11",
        category: ["Precatecumenado","Adviento","Navidad","Pascua","Pentecostés","Comunión","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "162",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/unretonobrotadeltroncodejese.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=tuqueeresfiel",
        sig: "/src/index.html?canto=unagransenal",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "UN RETOÑO BROTA DEL TRONCO DE JESÉ,, (Sol,,14)(Mi,m,418)", sC: "ta as"},
            { line: "UN GERMEN DE SUS RAÍCES., (Sol,,231)", sC: "as"},
            { line: "SOBRE ÉL SE POSA EL ESPÍRITU DEL SEÑOR:, (Do,,82)(Sol,,406)", sC: "as"},
            { line: "ESPÍRITU DE SABIDURÍA E INTELIGENCIA,, (Re,,40)(Sol,,339)", sC: "as"},
            { line: "ESPÍRITU DE CONSEJO Y FORTALEZA,, (Re,,40)(Sol,,323)", sC: "as"},
            { line: "ESPÍRITU DE CIENCIA Y DE PIEDAD,, (Do,,40)(Sol,,313)", sC: "as"},
            { line: "ESPÍRITU DE TEMOR DEL SEÑOR., (Re,,40)(Sol,,290)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No juzgará de oídas,, (Do,,10)(Sol,,149)", sC: "tc"},
            { line: "sino que ayudará a los oprimidos., (Re,,10)(Sol,,279)", sC: ""},
            { line: "Su palabra será una vara contra el violento, (Do,,65)(Sol,,373)", sC: ""},
            { line: "y con el soplo de su boca matará al malvado., (Re,,92)(Sol,,398)", sC: ""},
            { line: "El lobo vivirá con el cordero,, (Do,,34)(Sol,,235)", sC: ""},
            { line: "la pantera se echará con el cabrito,, (Do,,71)(Sol,,309)", sC: ""},
            { line: "el león y el novillo pacerán juntos,, (Re,,45)(Sol,,269)", sC: ""},
            { line: "y un niño los guiará, y un niño los guiará., (Do,,57)(Sol,,176)(Re,,258)(Sol,,376)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "UN RETOÑO BROTA DEL TRONCO DE JESÉ, (Sol,,14)(Mi,m,418)", sC: "ta as", lines: [
            { line: "UN GERMEN DE SUS RAÍCES., (Sol,,231)", sC: "as"},
            { line: "SOBRE ÉL SE POSA EL ESPÍRITU DEL SEÑOR:, (Do,,82)(Sol,,406)", sC: "as"},
            { line: "ESPÍRITU DE SABIDURÍA E INTELIGENCIA,, (Re,,40)(Sol,,339)", sC: "as"},
            { line: "ESPÍRITU DE CONSEJO Y FORTALEZA,, (Re,,40)(Sol,,323)", sC: "as"},
            { line: "ESPÍRITU DE CIENCIA Y DE PIEDAD,, (Do,,40)(Sol,,313)", sC: "as"},
            { line: "ESPÍRITU DE TEMOR DEL SEÑOR., (Re,,40)(Sol,,290)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "La vaca y la osa estarán juntas,, (Do,,10)(Sol,,250)", sC: "tc"},
            { line: "el león, como el buey, comerá paja., (Do,,45)(Sol,,310)", sC: ""},
            { line: "El niño de pecho hurgará, (Re,,37)", sC: ""},
    ], lder: [
            { line: "en el agujero del áspid,, (Sol,,173)", sC: ""},
            { line: "el recién nacido meterá la mano, (Do,,123)", sC: ""},
            { line: "en la hura de la víbora., (Sol,,167)", sC: ""},
            { line: "Porque ya nadie hará daño., (Re,,56)(Sol,,223)", sC: "tc"},
            { line: "PORQUE YA NADIE HARÁ DAÑO., (Re,,74)(Sol,,271)", sC: "ta as"},
            { line: "Porque la tierra estará llena, (Re,,114)", sC: "tc"},
            { line: "del conocimiento del Señor., (Sol,,247)", sC: ""},
            { line: "PORQUE LA TIERRA ESTARÁ LLENA, (Re,,145)", sC: "ta as"},
            { line: "DEL CONOCIMIENTO DEL SEÑOR., (Sol,,288)", sC: "as"},
            { line: "Porque aquel día, (Si,7,20)", sC: "tc"},
            { line: "la raíz de Jesé se levantará, ", sC: ""},
            { line: "como estandarte de los pueblos,, (Mi,m,260)", sC: ""},
            { line: "y las gentes lo seguirán con ansia., (La,m,67)(Si,7,283)", sC: ""},
            { line: "En aquel día el Señor extenderá su mano, (Do,,104)(Si,7,362)", sC: ""},
            { line: "y un camino se formará,, (Do,,86)(Si,7,220)", sC: ""},
            { line: "Y UN CAMINO SE FORMARÁ;, (Do,,97)(Si,7,262)", sC: "ta as"},
            { line: "una vía para todas las naciones,, (Do,,58)(Si,7,263)", sC: "tc"},
            { line: "UNA VÍA PARA TODAS LAS NACIONES, (Do,,63)(Si,7,312)", sC: "ta as"},
            { line: "que la Virgen indicará., (La,m,20)(Si,7,200)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "UN RETOÑO BROTA DEL TRONCO DE JESÉ, (Sol,,14)(Mi,m,418)", sC: "ta as", lines: [
            { line: "UN GERMEN DE SUS RAÍCES., (Sol,,231)", sC: "as"},
            { line: "SOBRE ÉL SE POSA EL ESPÍRITU DEL SEÑOR:, (Do,,82)(Sol,,406)", sC: "as"},
            { line: "ESPÍRITU DE SABIDURÍA E INTELIGENCIA,, (Re,,40)(Sol,,339)", sC: "as"},
            { line: "ESPÍRITU DE CONSEJO Y FORTALEZA,, (Re,,40)(Sol,,323)", sC: "as"},
            { line: "ESPÍRITU DE CIENCIA Y DE PIEDAD,, (Do,,40)(Sol,,313)", sC: "as"},
            { line: "ESPÍRITU DE TEMOR DEL SEÑOR., (Re,,40)(Sol,,290)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: UN RETOÑO BROTA DEL TRONCO DE JESÉ
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           UNA GRAN SEÑAL               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "unagransenal",
        tt: "Una Gran Señal",
        title: "Una Gran Señal",
        subtitle: "Apocalipsis 12",
        category: ["Precatecumenado","Vírgen María","Adviento","Navidad","Pascua","Pentecostés","Final","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "163",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/unagransenal.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=unretonobrotadeltroncodejese",
        sig: "/src/index.html?canto=uriuriura",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "UNA GRAN SEÑAL APARECIÓ EN EL CIELO:, (La,m,20)", sC: "ta as"},
            { line: "UNA MUJER, UNA MUJER VESTIDA DEL SOL,, (Sol,,92)(La,m,393)", sC: "as"},
            { line: "CON LA LUNA BAJO SUS PIES, ", sC: "as"},
            { line: "Y UNA CORONA DE DOCE ESTRELLAS;, (Sol,,305)", sC: "as"},
            { line: "ESTÁ ENCINTA, Y GRITA, (La,m,198)", sC: "as"},
            { line: "CON LOS TORMENTOS DE DAR A LUZ., (Fa,,157)(Mi,,337)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y apareció otra señal en el cielo:, (La,m,20)", sC: "tc"},
            { line: "un enorme Dragón rojo,, (Sol,,198)", sC: ""},
            { line: "con siete cabezas y diez cuernos., (Fa,,61)(Mi,,264)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Dragón se detuvo delante de la Mujer,, (La,m,20)", sC: ""},
            { line: "de la Mujer que iba a dar a luz,, (Sol,,272)", sC: ""},
            { line: "para devorar a su Hijo en cuanto naciera., (Fa,,188)(Mi,,363)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y la Mujer dio a luz un Hijo varón,, (La,m,20)", sC: ""},
            { line: "aquel que ha de regir las naciones de la tierra,, (Sol,,404)", sC: ""},
            { line: "y su Hijo fue arrebatado, (Fa,,59)", sC: ""},
            { line: "hasta Dios y hasta su trono., (Mi,,233)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "UNA GRAN SEÑAL APARECIÓ EN EL CIELO..., (La,m,20)", sC: "ta as", lines: [
            { line: "UNA MUJER, UNA MUJER VESTIDA DEL SOL,, (Sol,,92)(La,m,393)", sC: "as"},
            { line: "CON LA LUNA BAJO SUS PIES,, ", sC: "as"},
            { line: "Y UNA CORONA DE DOCE ESTRELLAS;, (Sol,,305)", sC: "as"},
            { line: "ESTÁ ENCINTA, Y GRITA, (La,m,198)", sC: "as"},
            { line: "CON LOS TORMENTOS DE DAR A LUZ., (Fa,,157)(Mi,,337)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Entonces se entabló una batalla en el cielo:, (La,m,20)", sC: "tc"},
            { line: "Miguel y sus Ángeles combatieron, (Sol,,135)(Fa,,290)", sC: ""},
            { line: "con el Dragón, con el gran Dragón., (Mi,,308)", sC: ""},
    ], lder: [
            { line: "También el Dragón y sus ángeles combatieron,, (La,m,20)(Sol,,405)", sC: ""},
            { line: "pero no prevalecieron, (Fa,,61)", sC: ""},
            { line: "y no hubo ya lugar para ellos en el cielo., (Mi,,352)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y fue arrojado el Dragón, el gran Dragón,, (La,m,20)", sC: ""},
            { line: "la Serpiente antigua, el llamado Diablo, ", sC: ""},
            { line: "y Satanás, el seductor del mundo entero,, (Sol,,80)(Fa,,197)", sC: ""},
            { line: "fue arrojado a la tierra y sus ángeles con él., (Mi,,402)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "UNA GRAN SEÑAL APARECIÓ EN EL CIELO..., (La,m,20)", sC: "ta as", lines: [
            { line: "UNA MUJER, UNA MUJER VESTIDA DEL SOL,, (Sol,,92)(La,m,393)", sC: "as"},
            { line: "CON LA LUNA BAJO SUS PIES,, ", sC: "as"},
            { line: "Y UNA CORONA DE DOCE ESTRELLAS;, (Sol,,305)", sC: "as"},
            { line: "ESTÁ ENCINTA, Y GRITA, (La,m,198)", sC: "as"},
            { line: "CON LOS TORMENTOS DE DAR A LUZ., (Fa,,157)(Mi,,337)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cuando el Dragón vio que había sido, (La,m,20)", sC: "tc"},
            { line: "arrojado a la tierra, persiguió a la Mujer, (Sol,,144)(Fa,,364)", sC: ""},
            { line: "que había dado a luz al Hijo varón., (Mi,,304)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Pero se le dieron a la Mujer las dos alas, (La,m,20)", sC: ""},
            { line: "del águila grande, para volar al desierto,, (Sol,,122)(Fa,,259)", sC: ""},
            { line: "donde tiene que ser alimentada, ", sC: ""},
            { line: "un tiempo, dos tiempos y medio tiempo., (Mi,,333)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Entonces, despechado contra la Mujer,, (La,m,20)", sC: ""},
            { line: "el gran Dragón, se fue a hacer la guerra, (Sol,,346)", sC: ""},
            { line: "al resto de sus hijos, (Fa,,35)", sC: ""},
            { line: "los que guardan los mandamientos de Dios, ", sC: ""},
            { line: "y mantienen el testimonio de Jesús., (Mi,,317)", sC: ""},
            { line: "LA LA LA, LA LA, LA LA... ", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: UNA GRAN SEÑAL
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           URÍ, URÍ, URÁ               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "uriuriura",
        tt: "Urí, Urí, Urá",
        title: "Urí, Urí, Urá",
        subtitle: "Villancico (Kiko Argüello)",
        category: ["Precatecumenado","Adviento","Navidad","Niños"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "164",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/uriuriura.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=unagransenal",
        sig: "/src/index.html?canto=vamosyapastores",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Urí, urí, urí, urá,, (Mi,m,20)(Si,7,133)", sC: "tc"},
            { line: "urí, urí, urí, urá., (Mi,m,130)", sC: ""},
            { line: "URÍ, URÍ, URÍ, URÁ., (Si,7,172)", sC: "ta as"},
            { line: "URÍ, URÍ, URÍ, URÁ., (Mi,m,167)", sC: "as"},
            { line: "URÍ, URÍ, URÍ, URÁ., (Si,7,168)", sC: "as"},
            { line: "PAMPAM, PAMPAM, PAMPARAM PAMPAM,, (Mi,m,386)", sC: "as"},
            { line: "PAMPAM, PAMPAM, PAMPARAM PAMPAM,, (Si,7,382)", sC: "as"},
            { line: "LALALALÁ LALÁ., (Mi,m,147)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Un niño pequeño va a nacer,, (Mi,m,20)(Si,7,257)", sC: "tc"},
            { line: "un niñito pequeño., (Mi,m,146)", sC: ""},
            { line: "UN NIÑO PEQUEÑO VA A NACER,, (Si,7,288)", sC: "ta as"},
            { line: "UN NIÑITO PEQUEÑO., (Mi,m,167)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Cómo se llamará? Emmanuel., (Si,7,284)", sC: "tc"},
            { line: "¿CÓMO SE LLAMARÁ? EMMANUEL., (Mi,m,315)", sC: "ta as"},
            { line: "¿CÓMO SE LLAMARÁ? EMMANUEL., (Si,7,317)", sC: "as"},
            { line: "VEN CHIQUITITO, VEN., (Mi,m,183)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "URÍ, URÍ, URÍ, URÁ, (Mi,m,20)(Si,7,172)", sC: "ta as", lines: [
            { line: "URÍ, URÍ, URÍ, URÁ., (Mi,m,167)", sC: "as"},
            { line: "URÍ, URÍ, URÍ, URÁ., (Si,7,168)", sC: "as"},
            { line: "PAMPAM, PAMPAM, PAMPARAM PAMPAM,, (Mi,m,386)", sC: "as"},
            { line: "PAMPAM, PAMPAM, PAMPARAM PAMPAM,, (Si,7,382)", sC: "as"},
            { line: "LALALALÁ LALÁ., (Mi,m,147)", sC: "as"},  ]},
    ], lder: [
            { line: "Su madrecita está en Belén,, (Mi,m,20)(Si,7,248)", sC: "tc"},
            { line: "su padre es carpintero., (Mi,m,191)", sC: ""},
            { line: "SU MADRECITA ESTÁ EN BELÉN,, (Si,7,285)", sC: "ta as"},
            { line: "SU PADRE ES CARPINTERO., (Mi,m,229)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Cómo se llamará? Emmanuel., (Si,7,284)", sC: "tc"},
            { line: "¿CÓMO SE LLAMARÁ? EMMANUEL., (Mi,m,314)", sC: "ta as"},
            { line: "¿CÓMO SE LLAMARÁ? EMMANUEL., (Si,7,315)", sC: "as"},
            { line: "VEN CHIQUITITO, VEN., (Mi,m,184)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "URÍ, URÍ, URÍ, URÁ (Mi,m,20)(Si,7,172)", sC: "ta as", lines: [
            { line: "URÍ, URÍ, URÍ, URÁ., (Mi,m,167)", sC: "as"},
            { line: "URÍ, URÍ, URÍ, URÁ., (Si,7,168)", sC: "as"},
            { line: "PAMPAM, PAMPAM, PAMPARAM PAMPAM,, (Mi,m,386)", sC: "as"},
            { line: "PAMPAM, PAMPAM, PAMPARAM PAMPAM,, (Si,7,382)", sC: "as"},
            { line: "LALALALÁ LALÁ., (Mi,m,147)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: URÍ, URÍ, URÁ
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           VAMOS YA, PASTORES               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "vamosyapastores",
        tt: "Vamos Ya, Pastores",
        title: "Vamos Ya, Pastores",
        subtitle: "Villancico (Kiko Argüello)",
        category: ["Precatecumenado","Adviento","Navidad","Niños"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "165",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/vamosyapastores.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=uriuriura",
        sig: "/src/index.html?canto=vendellibano",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "VAMOS YA, PASTORES , (Mi,m,20)", sC: "ta as"},
            { line: "VAMOS A BELÉN,, (Si,7,141)", sC: "as"},
            { line: "QUE HA NACIDO UN NIÑO, ", sC: "as"},
            { line: "SE LLAMA EMMANUEL., (Mi,m,201)", sC: "as"},
            { line: "SE LLAMA EMMANUEL,", sC: "as"},
            { line: "SE LLAMA EMMANUEL,, (Si,7,197)", sC: "as"},
            { line: "VAMOS YA, PASTORES,", sC: "as"},
            { line: "VAMOS A BELÉN., (Mi,m,140)", sC: "as"},
            { line: "PA RA RAM PAM PAM,, (Si,7,187)", sC: "as r1"},
            { line: "PA RA RAM PAM PAM., (Mi,m,188)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los pobres ya cantan,, (Mi,m,20)", sC: "tc"},
            { line: "los niños ya ríen., (Si,7,153)", sC: ""},
            { line: "Los pobres ya cantan,, (Mi,m,150)", sC: ""},
            { line: "los niños ya ríen., (Si,7,20)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALEGRÍA, ALEGRÍA,, (Mi,m,20)(Si,7,169)", sC: "ta as"},
            { line: "ALEGRÍA, ALEGRÍA., (Mi,m,165)", sC: "as"},
            { line: "ALEGRÍA, ALEGRÍA:, (Si,7,165)", sC: "as"},
            { line: "HA NACIDO EL SALVADOR., (Mi,m,226)", sC: "as"},
    ], lder: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VAMOS YA, PASTORES, (Mi,m,20)", sC: "ta as", lines: [
            { line: "VAMOS A BELÉN,, (Si,7,141)", sC: "as"},
            { line: "QUE HA NACIDO UN NIÑO, ", sC: "as"},
            { line: "SE LLAMA EMMANUEL., (Mi,m,201)", sC: "as"},
            { line: "SE LLAMA EMMANUEL,", sC: "as"},
            { line: "SE LLAMA EMMANUEL,, (Si,7,197)", sC: "as"},
            { line: "VAMOS YA, PASTORES,", sC: "as"},
            { line: "VAMOS A BELÉN., (Mi,m,140)", sC: "as"},
            { line: "PA RA RAM PAM PAM,, (Si,7,187)", sC: "as r1"},
            { line: "PA RA RAM PAM PAM., (Mi,m,188)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Su madre, María,, (Mi,m,20)(Si,7,143)", sC: "tc"},
            { line: "su padre, José., (Mi,m,128)", sC: ""},
            { line: "Ha nacido un niño,, (Si,7,147)", sC: ""},
            { line: "se llama Emmanuel., (Mi,m,178)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALEGRÍA, ALEGRÍA, (Mi,m,20)(Si,7,169)", sC: "ta as", lines: [
            { line: "ALEGRÍA, ALEGRÍA., (Si,7,165)", sC: "as"},
            { line: "ALEGRÍA, ALEGRÍA:, (Mi,m,165)", sC: "as"},
            { line: "HA NACIDO EL SALVADOR, (Mi,m,226)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VAMOS YA, PASTORES, (Mi,m,20)", sC: "ta as", lines: [
            { line: "VAMOS A BELÉN,, (Si,7,141)", sC: "as"},
            { line: "QUE HA NACIDO UN NIÑO, ", sC: "as"},
            { line: "SE LLAMA EMMANUEL., (Mi,m,201)", sC: "as"},
            { line: "SE LLAMA EMMANUEL,", sC: "as"},
            { line: "SE LLAMA EMMANUEL,, (Si,7,197)", sC: "as"},
            { line: "VAMOS YA, PASTORES,", sC: "as"},
            { line: "VAMOS A BELÉN., (Mi,m,140)", sC: "as"},
            { line: "PA RA RAM PAM PAM,, (Si,7,187)", sC: "as r1"},
            { line: "PA RA RAM PAM PAM., (Mi,m,188)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: VAMOS YA, PASTORES
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           VEN DEL LÍBANO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "vendellibano",
        tt: "Ven Del Líbano",
        title: "Ven Del Líbano",
        subtitle: "Cantar de los cantares 4,8ss",
        category: ["Precatecumenado","Pascua","Pentecostés","Entrada","Comunión","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "166",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/vendellibano.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=vamosyapastores",
        sig: "/src/index.html?canto=venespiritusanto",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Ven del Líbano, esposa,, (Mi,m,20)(Re,,132)", sC: "tc"},
            { line: "ven del Líbano, ven., (Do,,10)(Re,,87)(Mi,m,168)", sC: ""},
            { line: "Tendrás por corona la cima de los montes,, (Re,,221)", sC: ""},
            { line: "la alta cumbre del Hermón., (Do,,32)(Re,,84)(Mi,m,238)", sC: ""},
            { line: "Tú me has herido, herido el corazón,, (Re,,208)", sC: ""},
            { line: "oh, esposa, amada mía., (Do,,10)(Re,,72)(Mi,m,207)", sC: ""},
            { line: "Ven del Líbano, esposa,, (Re,,131)", sC: ""},
            { line: "ven del Líbano, ven., (Do,,10)(Re,,86)(Mi,m,168)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "BUSQUÉ EL AMOR DEL ALMA MÍA,, (Sol,,153)(La,,303)", sC: "ta as"},
            { line: "LO BUSQUÉ SIN ENCONTRARLO., (La,m,96)Mi(m,,257)", sC: "as"},
            { line: "ENCONTRÉ EL AMOR DE MI VIDA,, (Sol,,98)(La,,282)", sC: "as"},
            { line: "LO HE ABRAZADO Y NO LO DEJARÉ JAMÁS., (Do,,136)(Re,,284)(Mi,m,392)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo pertenezco a mi amado, y él es todo para mí., (Mi,,10)(Re,,149)(Do,,292)(Re,,343)(Mi,m,446)", sC: "tc"},
            { line: "Ven, salgamos a los campos,, (Re,,154)", sC: ""},
            { line: "nos perderemos por los pueblos., (Do,,16)(Re,,107)(Mi,m,257)", sC: ""},
            { line: "Saldremos al alba a las viñas, (Re,,186)", sC: ""},
            { line: "y recogeremos de su fruto., (Do,,10)(Re,,91)(Mi,m,223)", sC: ""},
            { line: "Yo pertenezco a mi amado, y él es todo para mí., (Re,,147)(Do,,291)(Re,,343)(Mi,m,450)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BUSQUÉ EL AMOR DEL ALMA MÍA, (Sol,,153)(La,,303)", sC: "ta as", lines: [
            { line: "LO BUSQUÉ SIN ENCONTRARLO., (La,m,96)(Mi,m,257)", sC: "as"},
            { line: "ENCONTRÉ EL AMOR DE MI VIDA,, (Sol,,98)(La,,282)", sC: "as"},
            { line: "LO HE ABRAZADO Y NO LO DEJARÉ JAMÁS., (Do,,136)(Re,,284)(Mi,m,392)", sC: "as"},  ]},
    ], lder: [
            { line: "Levántate deprisa, amada mía,, (Mi,m,20)(Re,,217)", sC: "tc"},
            { line: "ven, paloma, ven., (Do,,14)(Re,,77)(Mi,m,144)", sC: ""},
            { line: "Porque el invierno ya ha pasado,, (Re,,192)", sC: ""},
            { line: "el canto de la alondra ya se oye., (Do,,39)(Re,,157)(Mi,m,282)", sC: ""},
            { line: "Las flores aparecen en la tierra,, (Re,,202)", sC: ""},
            { line: "el fuerte sol ha llegado., (Do,,46)(Re,,100)(Mi,m,189)", sC: ""},
            { line: "Levántate deprisa, amada mía,, (Re,,216)", sC: ""},
            { line: "ven, paloma, ven., (Do,,15)(Re,,78)(Mi,m,144)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BUSQUÉ EL AMOR DEL ALMA MÍA, (Sol,,153)(La,,303)", sC: "ta as", lines: [
            { line: "LO BUSQUÉ SIN ENCONTRARLO., (La,m,96)(Mi,m,257)", sC: "as"},
            { line: "ENCONTRÉ EL AMOR DE MI VIDA,, (Sol,,98)(La,,282)", sC: "as"},
            { line: "LO HE ABRAZADO Y NO LO DEJARÉ JAMÁS., (Do,,136)(Re,,284)(Mi,m,392)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Como un sello en el corazón,, (Mi,m,20)(Re,,150)", sC: "tc"},
            { line: "como tatuaje en el brazo., (Do,,10)(Re,,104)(Mi,m,207)", sC: ""},
            { line: "El amor es fuerte como la muerte,, (Re,,185)", sC: ""},
            { line: "las aguas no lo apagarán., (Do,,42)(Re,,111)(Mi,m,222)", sC: ""},
            { line: "Dar por este amor, ", sC: ""},
            { line: "todos los bienes de la casa,, (Re,,101)", sC: ""},
            { line: "sería despreciarlo., (Do,,32)(Re,,73)(Mi,m,137)", sC: ""},
            { line: "Como un sello en el corazón,, (Re,,149)", sC: ""},
            { line: "como tatuaje en el brazo., (Do,,13)(Re,,101)(Mi,m,206)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BUSQUÉ EL AMOR DEL ALMA MÍA, (Sol,,153)(La,,303)", sC: "ta as", lines: [
            { line: "LO BUSQUÉ SIN ENCONTRARLO., (La,m,96)(Mi,m,257)", sC: "as"},
            { line: "ENCONTRÉ EL AMOR DE MI VIDA,, (Sol,,98)(La,,282)", sC: "as"},
            { line: "LO HE ABRAZADO Y NO LO DEJARÉ JAMÁS., (Do,,136)(Re,,284)(Mi,m,392)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: VEN DEL LÍBANO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           VEN, ESPÍRITU SANTO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "venespiritusanto",
        tt: "Ven, Espíritu Santo",
        title: "Ven, Espíritu Santo",
        subtitle: "Secuencia de Pentecostés - Himno latin. «Veni, Sancte Spiritus»",
        category: ["Precatecumenado","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "167",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/venespiritusanto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=vendellibano",
        sig: "/src/index.html?canto=venhijodelhombre",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "VEN, ESPÍRITU SANTO,, (Do,,10)(Fa,,164)", sC: "ta as"},
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ven, padre de los pobres,, (Do,,10)(Fa,,186)", sC: "tc"},
            { line: "ven, luz del corazón., (Mi,,168)", sC: ""},
            { line: "Ven, consolador buenísimo,, (Do,,12)(Fa,,205)", sC: ""},
            { line: "dulce huésped del alma., (Mi,,189)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "Ven, dulce refrigerio, ", sC: "tc ptop0"},
            { line: "en la fatiga tú eres descanso; ", sC: "ptop0"},
            { line: "en el calor tú eres nuestro alivio; ", sC: "ptop0"},
            { line: "en el llanto eres consuelo. ", sC: "ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "Oh luz dichosísima, ", sC: "tc ptop0"},
            { line: "inunda de tu resplandor, ", sC: "ptop0"},
            { line: "lo íntimo del corazón de tus fieles, ", sC: "ptop0"},
            { line: "llega hasta el fondo del alma. ", sC: "ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ. (Mi,,235)", sC: "as"},  ]},
            { line: "Sin tu luz nada hay puro en el hombre, ", sC: "tc ptop0"},
            { line: "nada hay inocente. ", sC: "ptop0"},
            { line: "Mira la fuerza del pecado, ", sC: "ptop0"},
            { line: "cuando tú no estás con nosotros. ", sC: "ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
    ], lder: [
            { line: "Lava lo que está sucio, ", sC: "tc ptop0"},
            { line: "riega lo que está árido, ", sC: "ptop0"},
            { line: "sana lo que está enfermo. ", sC: "ptop0"},
            { line: "Convierte al duro y al rígido. ", sC: "ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ. (Mi,,235)", sC: "as"},  ]},
            { line: "Inflama lo que está tibio, ", sC: "tc ptop0"},
            { line: "encamina al que se ha extraviado. ", sC: "ptop0"},
            { line: "Danos tus siete dones, ", sC: "ptop0"},
            { line: "danos tu amor y tu alegría. ", sC: "ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "Danos virtud y premio, ", sC: "tc ptop0"},
            { line: "danos la alegría de la salvación, ", sC: "ptop0"},
            { line: "danos una muerte santa, ", sC: "ptop0"},
            { line: "danos el gozo eterno. ", sC: "ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "Danos sabiduría y entendimiento,, ", sC: "tc ptop0"},
            { line: "danos ciencia y piedad, ", sC: "ptop0"},
            { line: "danos consejo y fortaleza, ", sC: "ptop0"},
            { line: "danos el temor de Dios. ", sC: "ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "Danos tus santos frutos: ", sC: "tc ptop0"},
            { line: "danos paciencia y bondad, ", sC: "ptop0"},
            { line: "danos amor y alegría, ", sC: "ptop0"},
            { line: "danos justicia y verdad. ", sC: "ptop0"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: VEN, ESPÍRITU SANTO
// SIGUIENTE CANTO DEBAJO

/*
╔════════════════════════════════════════════╗
║           VEN, ESPÍRITU SANTO              ║
╚════════════════════════════════════════════╝  */
   {
        id: "venespiritusantov2",
        tt: "Ven, Espíritu Santo",
        title: "Ven, Espíritu Santo",
        subtitle: "Secuencia de Pentecostés - Himno latin. «Veni, Sancte Spiritus»",
        category: ["Precatecumenado","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "167",
        notes: "",
        mant: "Si",
        audioSrc: "https://audio.resucito.do/venespiritusanto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=vendellibano",
        sig: "/src/index.html?canto=venhijodelhombre",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "VEN, ESPÍRITU SANTO,, (Do,,10)(Fa,,250)", sC: "ta as"},
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,20)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ven, padre de los pobres,, (Do,,10)(Fa,,250)", sC: "tc"},
            { line: "ven, luz del corazón., (Mi,,20)", sC: ""},
            { line: "Ven, consolador buenísimo,, (Do,,10)(Fa,,250)", sC: ""},
            { line: "dulce huésped del alma., (Mi,,20)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ven, dulce refrigerio,, (Do,,10)(Fa,,250)", sC: "tc"},
            { line: "en la fatiga tú eres descanso;, (Mi,,20)", sC: ""},
            { line: "en el calor tú eres nuestro alivio;, (Do,,10)(Fa,,250)", sC: ""},
            { line: "en el llanto eres consuelo., (Mi,,20)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Oh luz dichosísima, (Do,,10)(Fa,,250)", sC: "tc"},
            { line: "inunda de tu resplandor, (Mi,,20)", sC: ""},
            { line: "lo íntimo del corazón de tus fieles,, (Do,,10)(Fa,,250)", sC: ""},
            { line: "llega hasta el fondo del alma., (Mi,,20)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sin tu luz nada hay puro en el hombre,, ", sC: "tc"},
            { line: "nada hay inocente., ", sC: ""},
            { line: "Mira la fuerza del pecado,, ", sC: ""},
            { line: "cuando tú no estás con nosotros., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
    ], lder: [
            { line: "Lava lo que está sucio,, ", sC: "tc"},
            { line: "riega lo que está árido,, ", sC: ""},
            { line: "sana lo que está enfermo., ", sC: ""},
            { line: "Convierte al duro y al rígido., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Inflama lo que está tibio,, ", sC: "tc"},
            { line: "encamina al que se ha extraviado., ", sC: ""},
            { line: "Danos tus siete dones,, ", sC: ""},
            { line: "danos tu amor y tu alegría., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Danos virtud y premio,, ", sC: "tc"},
            { line: "danos la alegría de la salvación,, ", sC: ""},
            { line: "danos una muerte santa,, ", sC: ""},
            { line: "danos el gozo eterno., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Danos sabiduría y entendimiento,, ", sC: "tc"},
            { line: "danos ciencia y piedad,, ", sC: ""},
            { line: "danos consejo y fortaleza,, ", sC: ""},
            { line: "danos el temor de Dios., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Danos tus santos frutos:, ", sC: "tc"},
            { line: "danos paciencia y bondad,, ", sC: ""},
            { line: "danos amor y alegría,, ", sC: ""},
            { line: "danos justicia y verdad., ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VEN, ESPÍRITU SANTO, (Do,,10)(Fa,,164)", sC: "ta as", lines: [
            { line: "ENVÍA UN RAYO DE TU LUZ., (Mi,,235)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
]}, // ULTIMA LINEA DEL CANTO: VEN, ESPÍRITU SANTO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           VEN, HIJO DEL HOMBRE               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "venhijodelhombre",
        tt: "Ven, Hijo Del Hombre",
        title: "Ven, Hijo Del Hombre",
        subtitle: "Apocalipsis 21,17ss",
        category: ["Precatecumenado","Adviento","Navidad","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* Melisma",
        nCanURL: "",
        dbno: "168",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/venhijodelhombre.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=venespiritusanto",
        sig: "/src/index.html?canto=venicreator",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Ven, Hijo del Hombre,, (Mi,m,20)(La,m,144)", sC: "tc"},
            { line: "ven, ¡Señor Jesús!, (Si,7,17)(Mi,m,146)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ven,, (Mi,m,20)", sC: "tc"},
            { line: "VEN, ", sC: "ta as a2"},
            { line: "Siervo de los pobres,, (La,m,149)", sC: "tc"},
            { line: "SIERVO DE LOS POBRES; ", sC: "ta as"},
            { line: "ven,, (Si,7,17)", sC: "tc"},
            { line: "VEN, ", sC: "ta as a2"},
            { line: "¡Señor Jesús!, (Mi,m,101)", sC: "tc"},
            { line: "¡SEÑOR JESÚS!, ", sC: "ta as a2"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Espíritu dice: ¡Ven!, (Do,,10)(Mi,m,178)", sC: "tc"},
            { line: "El que escucha diga: ¡Ven!, (Do,,102)(Si,7,230)", sC: ""},
            { line: "¡VEN! ¡VEN! ¡VEN!, ", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ven,, (Mi,m,20)", sC: "tc"},
            { line: "VEN, ", sC: "ta as a2"},
            { line: "amor mío,, (La,m,77)", sC: "tc"},
            { line: "AMOR MÍO, ", sC: "ta as a2"},
            { line: "ven,, (Si,7,17)", sC: ""},
            { line: "VEN, ", sC: "ta as a2"},
            { line: "¡Señor Jesús!, (Mi,m,108)", sC: ""},
            { line: "¡SEÑOR JESÚS!, ", sC: "ta as a2"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Calma,, (Mi,m,20)", sC: "tc"},
            { line: "CALMA, ", sC: "ta as a2"},
            { line: "tú este fuego,, (La,m,92)", sC: ""},
            { line: "TÚ ESTE FUEGO,", sC: "ta as a2"},
            { line: "ven,, (Si,7,17)", sC: ""},
            { line: "VEN, ", sC: "ta as a2"},
            { line: "¡Señor Jesús!, (Mi,m,100)", sC: ""},
            { line: "¡SEÑOR JESÚS!,", sC: "ta as a2"},
    ], lder: [
            { line: "La Esposa dice: ¡Ven!, (Do,,10)(Mi,m,176)", sC: "tc"},
            { line: "Y el que escucha diga: ¡Ven!, (Do,,177)(Si,7,245)", sC: ""},
            { line: "¡VEN! ¡VEN! ¡VEN! ", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Vieni,, (Mi,m,20)", sC: "tc"},
            { line: "VIENI, ", sC: "ta as a2"},
            { line: "Figlio dell'uomo,, (La,m,114)", sC: ""},
            { line: "FIGLIO DELL'UOMO, ", sC: "as a2"},
            { line: "vieni,, (Si,7,17)", sC: ""},
            { line: "VIENI, ", sC: "as a2"},
            { line: "Signore Gesú!, (Mi,m,114)", sC: ""},
            { line: "SIGNORE GESÚ!, ", sC: "as a2"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Viens,", sC: "tc t0"},
            { line: "VIENS,", sC: "ta as a2"},
            { line: "Fils de l'homme, ", sC: "t0 b1"},
            { line: "FILS DE L'HOMME, ", sC: "as a2"},
            { line: "viens, ", sC: "t0 b1"},
            { line: "VIENS, ", sC: "as a2"},
            { line: "Seigneur Jesús! ", sC: "t0 b1"},
            { line: "SEIGNEUR JESÚS! ", sC: "as a2"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Come, ", sC: "tc t0 b1"},
            { line: "COME, ", sC: "ta as a2 t0"},
            { line: "Son of the Man, ", sC: "t0 b1"},
            { line: "SON OF THE MAN, ", sC: "as a2 t0"},
            { line: "come, ", sC: "t0 b1"},
            { line: "COME, ", sC: "as a2 t0"},
            { line: "Lord Jesús! ", sC: "b1"},
            { line: "LORD JESÚS! ", sC: "as a2"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ven,, (Mi,m,20)", sC: "tc"},
            { line: "VEN, ", sC: "ta as a2"},
            { line: "Hijo del Hombre,, (La,m,98)", sC: ""},
            { line: "HIJO DEL HOMBRE, ", sC: "as a2"},
            { line: "¡Ven!, (Si,7,17)", sC: ""},
            { line: "¡VEN!, ", sC: "as a2"},

            { line: "¡Ven! (Si,7,17)", sC: "tc"},
            { line: "¡VEN! ", sC: "as a4"},
            { line: "¡Ven! ", sC: "a5"},
            { line: "¡VEN! ", sC: "as a6"},
            { line: "¡Ven! ", sC: "a7"},
            { line: "¡VEN! ... ", sC: "as a8"},
            { line: "", sC: "ast"},
            
            { line: "¡Señor! ", sC: ""},
            { line: "¡SEÑOR! ", sC: "as a9"},
            { line: "Signore! ", sC: "a10"},
            { line: "SIGNORE! ... ", sC: "as a11"},
            { line: "", sC: "ast1"},
            
            { line: "¡Ven! Vieni! Viens! Come! ¡Ven!, ", sC: ""},
            { line: "¡VEN! ... ", sC: "as a12"},
            { line: "", sC: "ast2"},
            { line: "¡SEÑOR JESÚS!, (Mi,m,121)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: VEN, HIJO DEL HOMBRE
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           VENI CREATOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "venicreator",
        tt: "Veni Creator",
        title: "Veni Creator",
        subtitle: "Himno latin",
        category: ["Precatecumenado","Pascua","Pentecostés"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "169",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/venicreator.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=venhijodelhombre",
        sig: "/src/index.html?canto=vieneelsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "VEN, ESPÍRITU CREADOR,, (La,m,20)(Sol,,220)", sC: "ta as"},
            { line: "VISITA NUESTRA MENTE;, (La,m,190)", sC: "as"},
            { line: "LLENA DE TU AMOR, (Sol,,168)", sC: "as"},
            { line: "EL CORAZÓN QUE HAS CREADO., (La,m,265)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Oh dulce consolador,, (La,m,20)(Sol,,181)", sC: "tc"},
            { line: "don del Padre altísimo,, (La,m,167)", sC: ""},
            { line: "agua viva, fuego, amor,, (Sol,,204)", sC: ""},
            { line: "santo crisma del alma., (La,m,179)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DEDO DE LA MANO DE DIOS,, (La,m,20)(Sol,,247)", sC: "ta as"},
            { line: "PROMESA DEL SALVADOR,, (La,m,231)", sC: "as"},
            { line: "DERRAMA TUS SIETE DONES,, (Sol,,225)", sC: "as"},
            { line: "SUSCITA EN NOSOTROS LA PALABRA., (La,m,307)", sC: "sa"},
    ], lder: [
            { line: "Sé luz del intelecto,, (La,m,20)(Sol,,144)", sC: "tc"},
            { line: "llama ardiente en el corazón,, (La,m,252)", sC: ""},
            { line: "sana nuestras heridas, (Sol,,173)", sC: ""},
            { line: "con el bálsamo de tu amor., (La,m,241)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DEFIÉNDENOS DEL ENEMIGO,, (La,m,20)(Sol,,246)", sC: "ta as"},
            { line: "DANOS EL DON DE LA PAZ., (La,m,238)", sC: "as"},
            { line: "TU GUÍA INVENCIBLE, (Sol,,157)", sC: "as"},
            { line: "NOS PRESERVE DEL MAL., (La,m,222)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Oh Luz de eterna sabiduría,, (La,m,20)(Sol,,241)", sC: "tc"},
            { line: "desvélanos el gran misterio, (La,m,232)", sC: ""},
            { line: "de Dios Padre y del Hijo,, (Sol,,203)", sC: ""},
            { line: "unidos en un solo amor., (La,m,208)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "AMÉN., (Sol,,10)(La,m,51)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: VENI CREATOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           VIENE EL SEÑOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "vieneelsenor",
        tt: "Viene El Señor",
        title: "Viene El Señor",
        subtitle: "Salmo 93 (92) - Apocalipsis 1, 5-7",
        category: ["Precatecumenado","Adviento","Navidad","Nuevo Testamento","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "2",
        nCan: "",
        nCanURL: "",
        dbno: "170",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/vieneelsenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=venicreator",
        sig: "/src/index.html?canto=virgendelamaravilla",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "VIENE EL SEÑOR, (Mi,m,20)", sC: "ta as"},
            { line: "VESTIDO DE MAJESTAD,, (La,m,206)", sC: "as r1"},
            { line: "VESTIDO Y CEÑIDO DE PODER., (Mi,m,267)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Así está firme el orbe y no vacila,, (Mi,m,20)(La,m,288)", sC: "tc"},
            { line: "la santidad es el adorno de tu casa;, (Mi,m,306)", sC: ""},
            { line: "tu trono está firme desde siempre,, (La,m,267)", sC: ""},
            { line: "desde siempre tú eres Señor., (Mi,m,262)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VIENE EL SEÑOR, (Mi,m,20)", sC: "ta as", lines: [
            { line: "VESTIDO DE MAJESTAD,, (La,m,206)", sC: "as r1"},
            { line: "VESTIDO Y CEÑIDO DE PODER., (Mi,m,267)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "A Aquel, a Aquel que nos amó,, (Mi,m,20)(La,m,275)", sC: "tc"},
            { line: "que nos libró de todos los pecados,, (Mi,m,293)", sC: ""},
            { line: "a Aquel, a Aquel que nos amó,, (La,m,275)", sC: ""},
            { line: "que nos ha hecho sacerdotes de su reino., (Mi,m,358)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "A ÉL LA GLORIA Y EL PODER, (Mi,m,20)(La,m,184)", sC: "ta as"},
            { line: "POR LOS SIGLOS DE LOS SIGLOS., (Mi,m,261)", sC: "as r2"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VIENE EL SEÑOR, (Mi,m,20)", sC: "ta as", lines: [
            { line: "VESTIDO DE MAJESTAD,, (La,m,206)", sC: "as r1"},
            { line: "VESTIDO Y CEÑIDO DE PODER., (Mi,m,267)", sC: "as"},  ]},
    ], lder: [
            { line: "Él viene en las nubes y todos le verán,, (Mi,m,20)(La,m,344)", sC: "tc"},
            { line: "también aquellos que le traspasaron;, (Mi,m,317)", sC: ""},
            { line: "todos los reyes y pueblos de la tierra, (La,m,315)", sC: ""},
            { line: "se lamentarán, se lamentarán., (Mi,m,275)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "A ÉL LA GLORIA Y EL PODER, (Mi,m,20)(La,m,184)", sC: "ta as", lines: [
            { line: "POR LOS SIGLOS DE LOS SIGLOS., (Mi,m,261)", sC: "as r2"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VIENE EL SEÑOR, (Mi,m,20)", sC: "ta as", lines: [
            { line: "VESTIDO DE MAJESTAD,, (La,m,206)", sC: "as r1"},
            { line: "VESTIDO Y CEÑIDO DE PODER., (Mi,m,267)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: VIENE EL SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           VIRGEN DE LA MARAVILLA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "virgendelamaravilla",
        tt: "Virgen De La Maravilla",
        title: "Virgen De La Maravilla",
        subtitle: "(Dante Allghlerl)*",
        category: ["Precatecumenado","Vírgen María","Adviento","Navidad"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "* Cf. La Divina Comedia, «El Paraíso», canto XXXIII. ** La asamblea puede dividirse para hacer la segunda voz más aguda.",
        nCanURL: "https://docs.resucito.do/CantoXXXIII.pdf",
        dbno: "171",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/virgendelamaravilla.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=vieneelsenor",
        sig: "/src/index.html?canto=vividalegres",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "MARÍA, HIJA DE TU HIJO,, (Si,m,20)(Mi,m,93)(Si,m,203)", sC: "tc as"},
            { line: "MADRE DE JESÚS, (Mi,m,27)", sC: "as r1"},
            { line: "Y MADRE NUESTRA., (Si,m,128)", sC: "as"},
            { line: "VIRGEN DE LA MARAVILLA., (Sol,,14)(Fa#,,214)", sC: "as"},
            { line: "", sC: "ast"}, 
            { line: "", sC: "ast1"}, 
            { line: "María, tú la creatura, (Si,m,20)(Mi,m,81)(Si,m,166)", sC: "tc"},
            { line: "que has dado a luz al Creador,, (Mi,m,98)(Si,m,272)", sC: ""},
            { line: "tú eres la sierva, (Sol,,37)", sC: ""},
            { line: "que ha concebido al Señor., (Fa#,,15)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
        triggerLine: "MARÍA, HIJA DE TU HIJO, (Si,m,20)(Mi,m,93)(Si,m,203)", sC: "ta as", lines: [
            { line: "MADRE DE JESÚS, (Mi,m,27)", sC: "as r1"},
            { line: "Y MADRE NUESTRA., (Si,m,128)", sC: "as"},
            { line: "VIRGEN DE LA MARAVILLA., (Sol,,14)(Fa#,,214)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "María, hecha de tierra,, (Si,m,20)(Mi,m,86)(Si,m,180)", sC: "tc"},
            { line: "tú eres la gloriosa,, (Mi,m,20)(Si,m,142)", sC: ""},
            { line: "gloriosa imagen del cielo., (Sol,,46)(Fa#,,216)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
        triggerLine: "MARÍA, HIJA DE TU HIJO, (Si,m,20)(Mi,m,93)(Si,m,203)", sC: "ta as", lines: [
            { line: "MADRE DE JESÚS, (Mi,m,27)", sC: "as r1"},
            { line: "Y MADRE NUESTRA., (Si,m,128)", sC: "as"},
            { line: "VIRGEN DE LA MARAVILLA., (Sol,,14)(Fa#,,214)", sC: "as"},  ]},
    ], lder: [
            { line: "María, siendo la pequeña, (Si,m,20)(Mi,m,82)(Si,m,212)", sC: "tc"},
            { line: "tú eres la más grande,, (Mi,m,20)(Si,m,169)", sC: ""},
            { line: "siendo Hija de Dios eres su Madre,, (Sol,,19)(Fa#,,286)", sC: ""},
            { line: "siendo Hija de Dios eres su Madre., (Mi,m,20)(Fa#,,286)", sC: ""},
            { line: "Virgen de la maravilla., (Sol,,14)(Fa#,,178)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
        triggerLine: "MARÍA, HIJA DE TU HIJO, (Si,m,20)(Mi,m,93)(Si,m,203)", sC: "ta as", lines: [
            { line: "MADRE DE JESÚS, (Mi,m,27)", sC: "as r1"},
            { line: "Y MADRE NUESTRA., (Si,m,128)", sC: "as"},
            { line: "VIRGEN DE LA MARAVILLA., (Sol,,14)(Fa#,,214)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: VIRGEN DE LA MARAVILLA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           VIVID ALEGRES               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "vividalegres",
        tt: "Vivid Alegres",
        title: "Vivid Alegres",
        subtitle: "Filipenses 4,4ss",
        category: ["Precatecumenado","Adviento","Navidad","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "172",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/vividalegres.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=virgendelamaravilla",
        sig: "/src/index.html?canto=vosotrossoislaluzdelmundo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "VIVID ALEGRES, EL SEÑOR ESTÁ CERCA,, (La,m,20)(Mi,,335)", sC: "ta as"},
            { line: "VIVID ALEGRES, EL SEÑOR ESTÁ CERCA., (La,m,336)", sC: "as"},
            { line: "VIVID ALEGRES, EL SEÑOR VIENE YA,, (La,7,32)(Re,m,341)", sC: "as"},
            { line: "Y NOS SALVARÁ,, (La,m,145)", sC: "as"},
            { line: "Y NOS SALVARÁ,, (Mi,,147)", sC: "as"},
            { line: "Y NOS SALVARÁ., (La,m,147)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Valor, no temáis, (La,,10)(La,7,130)", sC: "tc"},
            { line: "que el Señor viene ya,, (Re,m,198)", sC: ""},
            { line: "y nos salvará,, (La,m,117)", sC: ""},
            { line: "y nos salvará,, (Mi,,122)", sC: ""},
            { line: "y nos salvará., (La,m,115)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VIVID ALEGRES (La,m,20)", sC: "ta as top1", lines: [
            { line: "VIVID ALEGRES, EL SEÑOR ESTÁ CERCA., (La,m,20)(Mi,,335)", sC: "as sub"},
            { line: "VIVID ALEGRES, EL SEÑOR ESTÁ CERCA., (La,m,336)", sC: "as"},
            { line: "VIVID ALEGRES, EL SEÑOR VIENE YA,, (La,7,32)(Re,m,341)", sC: "as"},
            { line: "Y NOS SALVARÁ,, (La,m,147)", sC: "as"},
            { line: "Y NOS SALVARÁ,, (Mi,,147)", sC: "as"},
            { line: "Y NOS SALVARÁ., (La,m,147)", sC: "as"},  ]},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: VIVID ALEGRES
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           VOSOTROS SOIS LA LUZ DEL MUNDO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "vosotrossoislaluzdelmundo",
        tt: "Vosotros Sois La Luz Del Mundo",
        title: "Vosotros Sois La Luz Del Mundo",
        subtitle: "Mateo 5,14ss ",
        category: ["Precatecumenado","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "* La asamblea puede dividirse para cantar este comienzo en polifonía a tres voces",
        nCanURL: "",
        dbno: "173",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/vosotrossoislaluzdelmundo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=vividalegres",
        sig: "/src/index.html?canto=yavienemidios",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "VOSOTROS   SOIS LA LUZ DEL MUNDO,, (La,m,20)(Mi,,83)(La,m,317)", sC: "ta as"},
            { line: "", sC: "ast"},
            { line: "SOIS LA LUZ, LA LUZ DEL MUNDO,, (Re,m,22)(Mi,,100)(Re,m,150)(Mi,,272)", sC: "as"},
            { line: "LA LUZ DEL MUNDO., (Re,m,22)(Mi,,142)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "No puede ocultarse una ciudad, (La,m,20)(Mi,,279)", sC: "tc"},
            { line: "situada en la cima de un monte;, (La,m,267)", sC: ""},
            { line: "no puede ocultarse una ciudad, (Mi,,277)", sC: ""},
            { line: "situada en la cima de un monte., (La,m,268)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ni se enciende una lámpara,, (Mi,,200)", sC: ""},
            { line: "para ponerla debajo del celemín,, (La,m,295)", sC: ""},
            { line: "sino sobre el candelero,, (Re,m,20)(Mi,,197)", sC: ""},
            { line: "para que ilumine a los que están en la casa., (Re,m,22)(Mi,,392) ", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Brille así vuestra luz, (Do,,10)(Mi,,76)(La,m,178)", sC: ""},
            { line: "delante de los hombres,, (Fa,,33)(Mi,,158)", sC: ""},
            { line: "para que vean vuestras buenas obras, (Re,m,22)(Mi,,313)", sC: ""},
            { line: "y glorifiquen a vuestro Padre que está en los cielos., (Fa,,10)(Mi,,452)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "VOSOTROS SOIS LA LUZ DEL MUNDO (La,m,20)(Mi,,83)(La,m,317)", sC: "ta as", lines: [
            { line: "SOIS LA LUZ, LA LUZ DEL MUNDO,, (Re,m,22)(Mi,,100)(Re,m,150)(Mi,,272)", sC: "as"},
            { line: "LA LUZ DEL MUNDO., (Re,m,22)(Mi,,142)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: VOSOTROS SOIS LA LUZ DEL MUNDO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           YA VIENE MI DIOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "yavienemidios",
        tt: "Ya Viene Mi Dios",
        title: "Ya Viene Mi Dios",
        subtitle: "Villancico (Kiko Argüello)",
        category: ["Precatecumenado","Adviento","Navidad","Niños"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "174",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/yavienemidios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=vosotrossoislaluzdelmundo",
        sig: "/src/index.html?canto=yahvehtueresmidios",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "YA VIENE MI DIOS, YA VIENE MI REY,, (Mi,m,20)(Si,7,325)", sC: "ta as"},
            { line: "YA VIENE MI DIOS, YA VIENE MI REY., (Mi,m,324)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI SALVADOR,, (Si,7,302)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI REY., (Mi,m,241)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Es un pobre obrero nacido en Belén,, (Mi,m,20)(Si,7,323)", sC: "tc"},
            { line: "su madre, María, su padre, José., (Mi,m,293)", sC: ""},
            { line: "Ya viene, ya viene mi Salvador,, (Si,7,277)", sC: ""},
            { line: "ya viene, ya viene mi Rey., (Mi,m,222)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "YA VIENE MI DIOS (Mi,m,20)", sC: "ta as top1", lines: [
            { line: "YA VIENE MI DIOS, YA VIENE MI REY., (Mi,m,20)(Si,7,325)", sC: "as sub"},
            { line: "YA VIENE MI DIOS, YA VIENE MI REY., (Mi,m,324)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI SALVADOR,, (Si,7,302)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI REY., (Mi,m,241)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Él tiene unos ojos que hablan de amor,, (Mi,m,20)(Si,7,355)", sC: "tc"},
            { line: "que hablan del Padre, que hablan de Dios., (Mi,m,382)", sC: ""},
            { line: "Ya viene, ya viene mi Salvador,, (Si,7,277)", sC: ""},
            { line: "ya viene, ya viene mi Rey., (Mi,m,222)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "YA VIENE MI DIOS (Mi,m,20)", sC: "ta as top1", lines: [
            { line: "YA VIENE MI DIOS, YA VIENE MI REY., (Mi,m,20)(Si,7,325)", sC: "as sub"},
            { line: "YA VIENE MI DIOS, YA VIENE MI REY., (Mi,m,324)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI SALVADOR,, (Si,7,302)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI REY., (Mi,m,241)", sC: "as"},  ]},
    ], lder: [
            { line: "Murió en un madero lleno de dolor,, (Mi,m,20)(Si,7,318)", sC: "tc"},
            { line: "murió por los hombres muy lleno de amor., (Mi,m,391)", sC: ""},
            { line: "Ya viene, ya viene mi Salvador,, (Si,7,277)", sC: ""},
            { line: "ya viene, ya viene mi Rey., (Mi,m,221)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "YA VIENE MI DIOS (Mi,m,20)", sC: "ta as top1", lines: [
            { line: "YA VIENE MI DIOS, YA VIENE MI REY., (Mi,m,20)(Si,7,325)", sC: "as sub"},
            { line: "YA VIENE MI DIOS, YA VIENE MI REY., (Mi,m,324)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI SALVADOR,, (Si,7,302)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI REY., (Mi,m,241)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ha entrado en la muerte, ha entrado mi Dios,, (Mi,m,20)(Si,7,413)", sC: "tc"},
            { line: "ya viene, ya sube, ya llega el Señor., (Mi,m,319)", sC: ""},
            { line: "Que canten, que griten: ¡Resucitó!, (Si,7,310)", sC: ""},
            { line: "Mi Dios ha vencido, salió por amor., (Mi,m,315)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "YA VIENE MI DIOS (Mi,m,20)", sC: "ta as top1", lines: [
            { line: "YA VIENE MI DIOS, YA VIENE MI REY., (Mi,m,20)(Si,7,325)", sC: "as sub"},
            { line: "YA VIENE MI DIOS, YA VIENE MI REY., (Mi,m,324)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI SALVADOR,, (Si,7,302)", sC: "as"},
            { line: "YA VIENE, YA VIENE MI REY., (Mi,m,241)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: YA VIENE MI DIOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           YAHVEH, TÚ ERES MI DIOS               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "yahvehtueresmidios",
        tt: "Yahveh, Tú Eres Mi Dios",
        title: "Yahveh, Tú Eres Mi Dios",
        subtitle: "Isaías 25,1-8",
        category: ["Precatecumenado","Cuaresma","Penitencial","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "175",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/yahvehtueresmidios.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=yavienemidios",
        sig: "/src/index.html?canto=yoteamosenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "YAHVEH, TÚ ERES MI DIOS,, (La,m,20)(Mi,,231)", sC: "tc as"},
            { line: "YO TE ENSALZARÉ., (La,m,169)", sC: "as r1"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y alabaré tu nombre,, (Fa,,140)", sC: "tc"},
            { line: "alabaré tu nombre,, ", sC: ""},
            { line: "alabaré tu nombre., (Mi,,119)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "YAHVEH, TÚ ERES MI DIOS, (La,m,20)(Mi,,231)", sC: "ta as", lines: [
            { line: "YO TE ENSALZARÉ., (La,m,169)", sC: "as r1"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Destruirás la muerte para siempre., (Fa,,163)", sC: ""},
            { line: "Y enjugarás las lágrimas, (Sol,,161)", sC: ""},
            { line: "de todos los rostros,, (Fa,,133)", sC: ""},
            { line: "de todos los rostros., (Mi,,135)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "YAHVEH, TÚ ERES MI DIOS, (La,m,20)(Mi,,231)", sC: "ta as", lines: [
            { line: "YO TE ENSALZARÉ., (La,m,169)", sC: "as r1"},  ]},
    ], lder: [
            { line: "Ya se acercan los pasos de los pobres,, (Fa,,82)", sC: "tc"},
            { line: "los pies de los humildes,, (Sol,,186)", sC: ""},
            { line: "los pies de los humildes,, (Fa,,183)", sC: ""},
            { line: "el resto de Jacob., (Mi,,143)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "YAHVEH, TÚ ERES MI DIOS, (La,m,20)(Mi,,231)", sC: "ta as", lines: [
            { line: "YO TE ENSALZARÉ., (La,m,169)", sC: "as r1"},  ]},
]}, // ULTIMA LINEA DEL CANTO: YAHVEH, TÚ ERES MI DIOS
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           YO TE AMO, SEÑOR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "yoteamosenor",
        tt: "Yo Te Amo, Señor",
        title: "Yo Te Amo, Señor",
        subtitle: "Salmo 18 (17)",
        category: ["Precatecumenado","Entrada","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "176",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/yoteamosenor.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=yahvehtueresmidios",
        sig: "/src/index.html?canto=yovengoareunir",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Yo te amo, Señor, tú eres mi roca,, (Re,,11)(Fa#,,150)(Si,m,293)", sC: "tc"},
            { line: "tú eres mi liberador, tú eres mi Dios., (Sol,,14)(Fa#,,327)", sC: ""},
            { line: "Yo te amo, yo te amo, Señor., (Sol,,63)(Fa#,,255)", sC: ""},
            { line: "", sC: "mheight0"}, // Espacio Generado para separar contenido
            { line: "[Violin *]", sC: "fontstyle", color: "red"}, // Espacio Generado para separar contenido
            { line: "", sC: "mheight2"}, // Espacio Generado para separar contenido
            { line: "LAS OLAS DE LA MUERTE ME ENVOLVÍAN,, (Re,,11)(Si,m,369)", sC: "ta as"},
            { line: "ME ESPANTABAN LAS TROMBAS DE BELIAL,, (Sol,,117)(Re,,399)", sC: "as"},
            { line: "ME RODEABAN LOS LAZOS DEL SEOL,, (La,,96)(Sol,,338)", sC: "as"},
            { line: "HABÍA CAÍDO EN LOS CEPOS DE LA MUERTE., (Re,,379)", sC: "as"},
            { line: "", sC: "mheight0"}, // Espacio Generado para separar contenido
            { line: "[Violin **]", sC: "fontstyle", color: "red"}, // Espacio Generado para separar contenido
            { line: "", sC: "mheight2"}, // Espacio Generado para separar contenido
            { line: "Clamé al Señor en mi angustia,, (Fa#,,15)", sC: "tc"},
            { line: "a mi Dios, a mi Dios invoqué,, (Si,m,263)", sC: ""},
            { line: "y escuchó mi voz desde su templo,, (La,,11)(Sol,,274)", sC: ""},
            { line: "llegó mi llamada a sus oídos., (Fa#,,234)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y la tierra fue sacudida y vaciló,, (Sol,,58)(Fa#,,290)", sC: ""},
            { line: "retemblaron las bases de los montes., (Sol,,91)(Fa#,,304)", sC: ""},
            { line: "Porque inclinó los cielos y bajó., (Sol,,14)(Fa#,,284)", sC: "melisma"},
    ], lder: [
            { line: "Y el fondo del mar quedó a la vista,, (La,,10)(Fa#,,299)", sC: ""},
            { line: "los cimientos del orbe aparecieron., (La,,79)(Fa#,,294)", sC: ""},
            { line: "Extendió su mano para asirme,, (Sol,,77)", sC: ""},
            { line: "me sacó de lo profundo de las aguas., (Fa#,,306)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "YO TE AMO, SEÑOR (Re,,10)(Fa#,,150)", sC: "ta as top1", lines: [
            { line: "YO TE AMO, SEÑOR, TÚ ERES MI ROCA, (Re,,10)(Fa#,,150)(Si,m,293)", sC: "as sub"},
            { line: "TÚ ERES MI LIBERADOR, TÚ ERES MI DIOS., (Sol,,14)(Fa#,,327)", sC: "as"},
            { line: "YO TE AMO, YO TE AMO, SEÑOR., (Sol,,70)(Fa#,,276)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "LAS OLAS DE LA MUERTE (Re,,11)", sC: "ta as top1", lines: [
            { line: "LAS OLAS DE LA MUERTE ME ENVOLVÍAN, (Re,,11)(Si,m,369)", sC: "as sub"},
            { line: "ME ESPANTABAN LAS TROMBAS DE BELIAL,, (Sol,,117)(Re,,399)", sC: "as"},
            { line: "ME RODEABAN LOS LAZOS DEL SEOL,, (La,,96)(Sol,,338)", sC: "as"},
            { line: "HABÍA CAÍDO EN LOS CEPOS DE LA MUERTE., (Re,,379)", sC: "as"},     ]},
            { line: "", sC: "adb"}, // Espacio Generado para separar contenido
            { img: "/src/img/yoteamo1.png",chords: "(Si,m,93)(La,,348)",sC: "img ast" },
            { img: "/src/img/yoteamo2.png",chords: "(Si,m,71)(La,,281)(Si,m,380)",sC: "img" },
            { img: "/src/img/yoteamo3.png",chords: "(Sol,,65)(Fa#,,173)(Sol,,236)(Fa#,,430)",sC: "img" },
            { line: "", sC: "adb"}, // Espacio Generado para separar contenido
            { img: "/src/img/yoteamo4.png",chords: "(Si,m,88)(Sol,,213)(La,,382)",sC: "img astd" },
            { img: "/src/img/yoteamo5.png",chords: "(Sol,,67)(Fa#,,188)(Sol,,301)(Fa#,,425)",sC: "img" },
]}, // ULTIMA LINEA DEL CANTO: YO TE AMO, SEÑOR
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           YO VENGO A REUNIR               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "yovengoareunir",
        tt: "Yo Vengo A Reunir",
        title: "Yo Vengo A Reunir",
        subtitle: "Isaías 66,18-21",
        category: ["Precatecumenado","Entrada","Final","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "177",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/yovengoareunir.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=yoteamosenor",
        sig: "/src/index.html?canto=zaqueo",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Yo vengo a reunir,, (Mi,,10)", sC: "tc"},
            { line: "YO VENGO A REUNIR,, ", sC: "ta as"},
            { line: "a todas las naciones,, (La,,10)(Mi,,155)", sC: ""},
            { line: "A TODAS LAS NACIONES., (La,,10)(Mi,,186)", sC: "ta as"},
            { line: "Vendrán y verán mi gloria,, (Fa#,,60)(Si,7,212)", sC: ""},
            { line: "VENDRÁN Y VERÁN MI GLORIA., (La,,74)(Mi,,252)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "GLORIA, GLORIA, GLORIA., (La,,31)(Mi,,66)(La,,116)(Mi,,151)(Si,7,202)(Mi,,237)", sC: "ta as"},
            { line: "GLORIA, GLORIA, GLORIA., (La,,31)(Mi,,66)(La,,116)(Mi,,151)(Si,7,202)(Mi,,237)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y pondré en ellos una señal, (Do#,,14)", sC: ""},
            { line: "y los enviaré a las naciones más lejanas,, (La,,20)(Mi,,250)", sC: ""},
            { line: "para que anuncien mi gloria,, (Si,7,120)(Mi,,239)", sC: ""},
            { line: "para que anuncien mi gloria., (Si,7,120)(Mi,,239)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "GLORIA, GLORIA, GLORIA, (La,,31)(Mi,,66)(La,,116)(Mi,,151)(Si,7,202)(Mi,,237)", sC: "ta as", lines: [
            { line: "GLORIA, GLORIA, GLORIA., (La,,31)(Mi,,66)(La,,116)(Mi,,151)(Si,7,202)(Mi,,237)", sC: "as"},  ]},
    ], lder: [
            { line: "Y traerán a vuestros hermanos, (Sol#,,16)(La,,259)", sC: "tc"},
            { line: "de entre todas las naciones,, (Mi,,222)", sC: ""},
            { line: "como oblación al Señor,, (Si,7,120)(Mi,,212)", sC: ""},
            { line: "como oblación al Señor., (Si,7,120)(Mi,,212)", sC: ""},
            { line: "Y de entre ellos tomaré, (Do#,m,24)(Sol#,,214)", sC: ""},
            { line: "sacerdotes para mí,, (Si,,10)(Sol#,,179)", sC: ""},
            { line: "sacerdotes que anunciarán mi gloria,, (La,,66)(Mi,,320)", sC: ""},
            { line: "sacerdotes que anunciarán mi gloria., (Si,7,70)(Mi,,320)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "GLORIA, GLORIA, GLORIA, (La,,31)(Mi,,66)(La,,116)(Mi,,151)(Si,7,202)(Mi,,237)", sC: "ta as", lines: [
            { line: "GLORIA, GLORIA, GLORIA., (La,,31)(Mi,,66)(La,,116)(Mi,,151)(Si,7,202)(Mi,,237)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: YO VENGO A REUNIR
// SIGUIENTE CANTO DEBAJO

// LETRA Z
/*
╔════════════════════════════════╗
║           ZAQUEO               ║
╚════════════════════════════════╝  */
   {
        id: "zaqueo",
        tt: "Zaqueo",
        title: "Zaqueo",
        subtitle: "Lucas 19,1-10",
        category: ["Precatecumenado","Cuaresma","Penitencial","Entrada","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "178",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/zaqueo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=yovengoareunir",
        sig: "/src/index.html?canto=aclamacionesalaoraciondelosfieles",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "HABIENDO ENTRADO JESÚS EN JERICÓ,, (La,m,20)", sC: "ta as"},
            { line: "ATRAVESABA LA CIUDAD,, (Sol,,216)", sC: "as"},
            { line: "HABIENDO ENTRADO JESÚS EN JERICÓ,, (Fa,,167)", sC: "as"},
            { line: "ATRAVESABA LA CIUDAD., (Mi,,216)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Había un hombre llamado Zaqueo,, (La,m,20)", sC: "tc"},
            { line: "que era jefe de publicanos y muy rico, (Sol,,331)", sC: ""},
            { line: "que trataba de ver a Jesús, pero no podía, (Fa,,234)", sC: ""},
            { line: "porque era de pequeña estatura., (Mi,,285)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Se adelantó corriendo, (La,m,20)", sC: ""},
            { line: "y se subió a un sicómoro,, (Sol,,177)", sC: ""},
            { line: "pues iba a pasar por allí,, (Fa,,58)", sC: ""},
            { line: "pues iba a pasar por allí., (Mi,,222)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cuando llegó Jesús,, (La,m,20)", sC: ""},
            { line: "alzó la vista y le vio,, (Sol,,174)", sC: ""},
            { line: "y le dijo: «Zaqueo, baja pronto;, (Fa,,10)", sC: ""},
            { line: "porque conviene que hoy yo entre en tu casa,, (Mi,,395)", sC: ""},
            { line: "conviene que yo entre en tu casa»., (Fa,,48)(Mi,,283)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HABIENDO ENTRADO JESÚS EN JERICÓ (La,m,20)", sC: "ta as", lines: [
            { line: "ATRAVESABA LA CIUDAD,, (Sol,,216)", sC: "as"},
            { line: "HABIENDO ENTRADO JESÚS EN JERICÓ,, (Fa,,167)", sC: "as"},
            { line: "ATRAVESABA LA CIUDAD., (Mi,,216)", sC: "as"},  ]},
    ], lder: [
            { line: "Bajó deprisa Zaqueo, (La,m,20)", sC: "tc"},
            { line: "y le recibió lleno de alegría., (Sol,,238)", sC: ""},
            { line: "Al verlo, todos murmuraban:, (Fa,,222)", sC: ""},
            { line: "«Ha entrado en casa de un pecador»., (Mi,,320)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Zaqueo, se puso en pie y dijo al Señor:, (La,m,20)", sC: ""},
            { line: "«Daré, Señor, la mitad de mis bienes a los pobres;, (Sol,,393)", sC: "ajustar"},
            { line: "y si en algo defraudé, el cuádruplo le devolveré»., (Fa,,74)(Mi,,438)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y Jesús le dijo:, (La,m,20)", sC: ""},
            { line: "Hoy ha llegado la salvación a esta casa,, (La,m,20)(Sol,,345)", sC: "tc"},
            { line: "hoy ha llegado la salvación a esta casa., (Fa,,15)(Mi,,343)", sC: ""},
            { line: "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA,, (La,m,20)(Sol,,409)", sC: "ta as"},
            { line: "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA»., (Fa,,20)(Mi,,413)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "«Porque también este es hijo de Abraham,, (Re,m,22)(Mi,,371)", sC: "tc"},
            { line: "pues el Hijo del hombre ha venido, (Re,m,22)", sC: ""},
            { line: "a buscar y a salvar lo que estaba perdido»., (Mi,,363)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HABIENDO ENTRADO... HOY HA LLEGADO (La,m,20)(La,m,244)", sC: "ta as", lines: [
            { line: "HABIENDO ENTRADO JESÚS EN JERICÓ, ", sC: "as sub"},
            { line: "ATRAVESABA LA CIUDAD,, (Sol,,216)", sC: "as"},
            { line: "HABIENDO ENTRADO JESÚS EN JERICÓ,, (Fa,,167)", sC: "as"},
            { line: "ATRAVESABA LA CIUDAD., (Mi,,216)", sC: "as"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA». (La,,20)(Sol,,409)", sC: "ta as"},
            { line: "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA». (Fa,,20)(Mi,,413)", sC: "as"},]},

            { line: "Zaqueo eres tú., (Re,m,22)(Mi,,135)", sC: "r1 "},
            { line: "Baja pronto., (Re,m,22)(Mi,,70)", sC: "r1"},
            { line: "Conviene que hoy entre en tu casa., (Fa,,56)(Mi,,298)", sC: "r2"},

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "HABIENDO ENTRADO... HOY HA LLEGADO (La,m,20)(La,m,244)", sC: "ta as", lines: [
            { line: "HABIENDO ENTRADO JESÚS EN JERICÓ, ", sC: "as sub"},
            { line: "ATRAVESABA LA CIUDAD,, (Sol,,216)", sC: "as"},
            { line: "HABIENDO ENTRADO JESÚS EN JERICÓ,, (Fa,,167)", sC: "as"},
            { line: "ATRAVESABA LA CIUDAD., (Mi,,216)", sC: "as"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA». (La,,20)(Sol,,409)", sC: "ta as"},
            { line: "HOY HA LLEGADO LA SALVACIÓN A ESTA CASA». (Fa,,20)(Mi,,413)", sC: "as"},]},

]}, // ULTIMA LINEA DEL CANTO: ZAQUEO
// SIGUIENTE CANTO DEBAJO

// CANTOS LITURGICOS


/*
╔════════════════════════════════════════════════════════╗
║           ACLAMACIONES A LA ORACIÓN DE LOS FIELES               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "aclamacionesalaoraciondelosfieles",
        tt: "Aclamaciones A La Oración De Los Fieles",
        title: "Aclamaciones A La Oración De Los Fieles",
        subtitle: "Respuestas a las oraciones de los fieles, Modelo I, II, III, IV",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "179",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aclamacionesalaoraciondelosfieles.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=zaqueo",
        sig: "/src/ai.html",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "CANTOS LIRÚSTICOS ", sC: "as cl", color: "#544d47"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Modelo I ", sC: "as left", color: "rgb(196 76 75)"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Te lo pedimos Señor., (Sol,,15)(Re,,193)(Sol,,236)", sC: "tc"},
            { line: "TE LO PEDIMOS SEÑOR., (La,m,15)(Mi,m,194)(Si,7,240)(Mi,m,287)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Modelo II ", sC: "as left", color: "rgb(196 76 75)"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ESCÚCHANOS, OH SEÑOR., (Mi,m,15)(Re,,154)(Mi,m,229)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Modelo III ", sC: "as left", color: "rgb(196 76 75)"},
            { line: "Misma música Modelo I", sC: "mmmi", color: "gray"},
            { line: "ACUÉRDATE DE NOSOTROS,, (Sol,,15)(Re,,209)(Sol,,240)", sC: "ta as"},
            { line: "AHORA QUE ESTÁS EN TU REINO., (La m,,15)(Mi m,,262)(Si 7,,305)(Mi m,,345)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Modelo IV ", sC: "as left", color: "rgb(196 76 75)"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "OYE, PADRE, EL GRITO DE TU PUEBLO, (Mi,m,15)(La,m,70)(Si,7,139)(Mi,m,310)", sC: "ta as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ACLAMACIONES A LA ORACIÓN DE LOS FIELES
// SIGUIENTE CANTO DEBAJO



/*
╔════════════════════════════════════════════════════════╗
║           GLORIA A DIOS EN LO ALTO DEL CIELO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "gloriaadiosenloaltodelcielo",
        tt: "Gloria A Dios En Lo Alto Del Cielo",
        title: "Gloria A Dios En Lo Alto Del Cielo",
        subtitle: "Himno Litúrgico",
        category: ["Liturgia","Navidad","Orinario","Pascua"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "188",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/gloriaadiosenloaltodelcielo.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=credo",
        sig: "/src/index.html?canto=letaniasdelossantos",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "GLORIA DIOS EN LO ALTO DEL CIELO,, (Re,,10)(La,,322)", sC: "ta as"},
            { line: "Y PAZ EN LA TIERRA, (Sol,,43)", sC: "as"},
            { line: "A LOS HOMBRES QUE AMA EL SEÑOR., (La,,339)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "TE ALABAMOS, TE GLORIFICAMOS,, (Re,,91)(La,,276)", sC: "as"},
            { line: "TE ADORAMOS, TE DAMOS GRACIAS, (Sol,,95)", sC: "as"},
            { line: "POR TU INMENSA GLORIA., (La,,209)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Señor Dios, Rey celestial,, (Sol,,89)", sC: "tc"},
            { line: "Dios Padre todopoderoso., (Fa#,m,221)", sC: ""},
            { line: "Señor, Hijo único,, (Mi,m,125)", sC: ""},
            { line: "JESUCRISTO., (La,,77)", sC: "ta"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Señor Dios, Cordero de Dios,, (Sol,,89)", sC: "tc"},
            { line: "Hijo del Padre;, (Fa#,m,100)", sC: ""},
            { line: "tú que quitas el pecado del mundo,, (Mi,m,293)", sC: ""},
            { line: "TEN PIEDAD DE NOSOTROS., (La,,204)", sC: "ta as"},
    ], lder: [
            { line: "Tú que quitas el pecado del mundo,, (Sol,,96)", sC: "tc"},
            { line: "atiende a nuestra súplica;, (Fa#,m,196)", sC: ""},
            { line: "tú, que estás sentado, ", sC: ""},
            { line: "a la derecha del Padre,, (Mi,m,176)", sC: ""},
            { line: "TEN PIEDAD DE NOSOTROS;, (La,,204)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "PORQUE SOLO TÚ ERES SANTO,, (Sol,,107)", sC: "ta as"},
            { line: "SOLO TÚ SEÑOR,, (Fa#,m,138)", sC: "as"},
            { line: "SOLO TÚ ALTÍSIMO,, (Mi,m,130)", sC: "as"},
            { line: "JESUCRISTO,, (La,,78)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "con el Espíritu Santo, ", sC: "tc"},
            { line: "en la gloria de Dios Padre., (Re,,207)", sC: ""},
            { line: "AMÉN, AMÉN, (Sol,,12)(Re,,83)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: GLORIA A DIOS EN LO ALTO DEL CIELO
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
        nCanURL: "/src/index.html?canto=plegariaeucaristicaiimodeloi",
        dbno: "194",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/plegariaeucaristicaiimodeloip1.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=padrenuestro",
        sig: "/src/index.html?canto=plegariaeucaristicaiimodeloip2",
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
        audioSrc: "https://audio.resucito.do/plegariaeucaristicaiimodeloip2.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=plegariaeucaristicaiimodeloip1",
        sig: "/src/index.html?canto=plegariaeucaristicaiimodeloip3",
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
        audioSrc: "https://audio.resucito.do/plegariaeucaristicaiimodeloip3.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=plegariaeucaristicaiimodeloip2",
        sig: "/src/index.html?canto=plegariaeucaristicaiimodeloiip1",
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
        audioSrc: "https://audio.resucito.do/plegariaeucarísticaiimodeloi.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 4.5, incremento: 0.4 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=padrenuestro",
        sig: "/src/index.html?canto=plegariaeucaristicaiimodeloip2",
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
            { line: "hosanna en las alturas., (Si,7,180)", sC: ""},
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
        audioSrc: "https://audio.resucito.do/santopalomeras65.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=salmodiasparalaudes",
        sig: "/src/index.html?canto=santomelodiahebraica",
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
            { line: "hosanna en las alturas., (Si,7,180)", sC: ""},
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
        audioSrc: "https://audio.resucito.do/santomelodiahebraica.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=santopalomeras65",
        sig: "/src/index.html?canto=santopalestina74",
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
        audioSrc: "https://audio.resucito.do/santopalestina74.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=santomelodiahebraica",
        sig: "/src/index.html?canto=santoroma77",
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
        audioSrc: "https://audio.resucito.do/santoroma77.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=santopalestina74",
        sig: "/src/index.html?canto=santo1982",
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
        audioSrc: "https://audio.resucito.do/santo1982.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=santoroma77",
        sig: "/src/index.html?canto=santo1988",
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
        audioSrc: "https://audio.resucito.do/santo1988.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=santo1982",
        sig: "/src/index.html?canto=tedeum",
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
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "180",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aclamacionesalaoraciondelosfieles",
        sig: "/src/index.html?canto=aleluyapascual",
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











/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA XXII   ║
╚════════════════════════════════════════════════╝  */
   {
        id: "ialeluyas23",
        tt: "Aleluya Interleccional Semana XXIII",
        title: "Aleluya Interleccional Semana XXIII",
        subtitle: "Según Modelo",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "180",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aclamacionesalaoraciondelosfieles",
        sig: "/src/index.html?canto=aleluyapascual",
// Contenido del lado izquierdo del canto,
    lizq: [
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: "Aleluya, aleluya, aleluya, aleluya., (Sol,,11)(Do,,200)(Re,,230)(Sol,,301)", sC: "tc"},
            { line: "ALELUYA, ALELUYA, ALELUYA, ALELUYA., (Sol,,11)(Do,,245)(Re,,275)(Sol,,369)", sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Has brillar tu rostro sobre tu siervo,           (Mi,,10)(Re,,181)(Mi,m,352)", sC: "tc"},
            { line: "enséñame tus decretos.                           (Do,,10)(Mi,,142)(La,m,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: "ALELUYA, ALELUYA, ALELUYA.,(Do,,10)(Mi,,152)(La,m,275)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA.,(Do,,10)(Mi,,152)(La,m,275)", sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Has brillar tu rostro sobre tu siervo,             (Do,,10)(Mi,,178)(La,m,342)", sC: "tc"},
            { line: "enséñame tus decretos.                             (Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: "Aleluya, aleluya, aleluya., (Mi,m,21)(Re,,122)(Mi,m,219)", sC: "tc"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Re,,154)(Mi,m,271)", sC: "ta as"}, 

            { line: "Has brillar tu rostro sobre tu siervo,               (Do,,10)(Mi,,200)(La,m,346)", sC: "tc"},
            { line: "enséñame tus decretos.                               (Do,,10)(Mi,,152)(La,m,334)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA INTERLECCIONAL SEMANA XXIII
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA XXII   ║
╚════════════════════════════════════════════════╝  */


{
        id: "ialeluyas24",
        tt: "Aleluya Interleccional",
        title: "Aleluya Interleccional",
        subtitle: "Semana XXIV | Tiempo Ordinario",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "180",
        notes: "",
        mant: "Si",
        audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aclamacionesalaoraciondelosfieles",
        sig: "/src/index.html?canto=aleluyapascual",
// Contenido del lado izquierdo del canto,
    lizq: [

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: "Aleluya, aleluya, aleluya, aleluya., (Sol,,11)(Do,,200)(Re,,230)(Sol,,301)", sC: "tc"},
            { line: "ALELUYA, ALELUYA, ALELUYA, ALELUYA., (Sol,,11)(Do,,245)(Re,,275)(Sol,,369)", sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Jesús proclamaba el Evangelio del reino,           (Mi,m,20)(Re,,161)(Mi,m,364)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                 (Re,,10)(Mi,m,290)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: "ALELUYA, ALELUYA, ALELUYA.,(Do,,10)(Mi,,152)(La,m,275)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA.,(Do,,10)(Mi,,152)(La,m,275)", sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Jesús proclamaba el Evangelio del reino,             (Do,,10)(Mi,,178)(La,m,342)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                   (Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: "Aleluya, aleluya, aleluya., (Mi,m,21)(Re,,122)(Mi,m,219)", sC: "tc"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Re,,154)(Mi,m,271)", sC: "ta as"}, 

            { line: "Jesús proclamaba el Evangelio del reino,              (Mi,m,20)(La,m,171)(Mi,m,365)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                    (La,m,77)(Mi,m,298)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA INTERLECCIONAL SEMANA XXIII
// SIGUIENTE CANTO DEBAJO




































/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA XXII   ║
╚════════════════════════════════════════════════╝  */
   {
        id: "ialeluyasboceto24",
        tt: "Aleluya Interleccional Semana XXII",
        title: "Aleluya Interleccional Semana XXII",
        subtitle: "Según Modelo",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "180",
        notes: "",
        mant: "Si",
        audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=aclamacionesalaoraciondelosfieles",
        sig: "/src/index.html?canto=aleluyapascual",
// Contenido del lado izquierdo del canto,
    lizq: [
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: "Aleluya, aleluya, aleluya, aleluya., (Sol,,11)(Do,,200)(Re,,230)(Sol,,301)", sC: "tc"},
            { line: "ALELUYA, ALELUYA, ALELUYA, ALELUYA., (Sol,,11)(Do,,245)(Re,,275)(Sol,,369)", sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cargad con mi yugo y aprended de mí, (Mi,,10)(Re,,181)(Mi,m,352)", sC: "tc"},
            { line: "—dice el Señor—", sC: ""},
            { line: "que soy manso y humilde de corazón.(Do,,10)(Mi,,142)(La,m,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Do,,10)(Mi,,152)(La,m,275)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Do,,10)(Mi,,152)(La,m,275)", sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Cargad con mi yugo y aprended de mí, (Do,,10)(Mi,,178)(La,m,342)", sC: "tc"},
            { line: "—dice el Señor—", sC: ""},
            { line: "que soy manso y humilde de corazón.(Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: "Aleluya, aleluya, aleluya., (Mi,m,21)(Re,,122)(Mi,m,219)", sC: "tc"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Re,,154)(Mi,m,271)", sC: "ta as"}, 

                        { line: "Cargad con mi yugo y aprended de mí, (Do,,10)(Mi,,200)(La,m,346)", sC: "tc"},
            { line: "—dice el Señor—", sC: ""},
            { line: "que soy manso y humilde de corazón.(Do,,10)(Mi,,152)(La,m,334)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA INTERLECCIONAL SEMANA XXIII
// SIGUIENTE CANTO DEBAJO















// INCOVACION AL ESPIRITU SANTO
/*
╔════════════════════════════════════════════════════════╗
║           INVOCACIÓN AL ESPIRITU SANTO               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "iespiritusanto",
        tt: "Invocación Al Espiritu Santo",
        title: "Invocación Al Espiritu Santo",
        subtitle: "Celebración",
        category: ["Precatecumenado","Celebración",""],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "246",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/invocacionalespiritusanto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohluzgozosa",
        sig: "/src/index.html?canto=#",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "OH SEÑOR, ENVIA TU ESPIRITU,, (Mi,m,19)(La,m,133)(Mi,m,311)", sC: "ta as"},
            { line: "QUE RENUEVE LA FAZ, (Sol,,13)(Do,,152)(La,m,237)", sC: "as"},
            { line: "DE LA TIERRA, (Mi,m,46)(Si,7,83)(Mi,m,137)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "OH SEÑOR, ENVIA TU ESPIRITU,, (Mi,m,19)(La,m,133)(Mi,m,311)", sC: "ta as"},
            { line: "QUE RENUEVE LA FAZ, (Sol,,13)(Do,,152)(La,m,237)", sC: "as"},
            { line: "DE LA TIERRA, (Mi,m,46)(Si,7,83)(Mi,m,137)", sC: "as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: INVOCACIÓN AL ESPIRITU SANTO
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════════════╗
║           OH LUZ GOZOSA               ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "ohluzgozosa",
        tt: "Oh Luz Gozosa",
        title: "Oh Luz Gozosa",
        subtitle: "Salmo 17 (16) ",
        category: ["Precatecumenado","Cuaresma","Antiguo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "10",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/ohluzgozosa.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=ialeluyas22",
        sig: "/src/index.html?canto=iespiritusanto",
// Contenido del lado izquierdo del canto,
    lizq: [
/*            { line: "Oh luz gozosa, (Sol,,13)(Do,,101)", sC: "tc"},
            { line: "de la santa Gloria, (Sol,,15)(Re,,106)", sC: ""},
            { line: "del Padre celeste inmortal, (Mi,m,22)(Do,,107)(Re,,195)", sC: ""},
            { line: "Santo y feliz, Jesucristo,, (Sol,,13)(Do,,106)(Sol,,175)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido*/
            { line: "Oh luz gozosa, (Sol,,13)(Do,,101)", sC: "tc"},
            { line: "de la santa Gloria, (Sol,,15)(Re,,106)", sC: ""},
            { line: "del Padre celeste inmortal, (Mi,m,22)(Do,,107)(Re,,195)", sC: ""},
            { line: "Santo y feliz, (Sol,,13)(Do,,106)", sC: ""},
            { line: "Jesucristo, (Sol,,48)", sC: "as"},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: OH LUZ GOZOSA
// SIGUIENTE CANTO DEBAJO



// CATECUMENOS

/*
╔════════════════════════════════════════════════════════╗
║           HIMNO A LA CRUZ GLORIOSA                     ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "himnoalacruzgloriosa",
        tt: "Himno A La Cruz Gloriosa",
        title: "Himno A La Cruz Gloriosa",
        subtitle: "Homilía La Santa Pascua (Anónimo s. II)",
        category: ["Catecumenado"],
        catCanto: "Catecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "227",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/himnoalacruzgloriosa.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=heaquiquenuestroespejoeselsenor",
        sig: "/src/index.html?canto=jacob",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "LA CRUZ GLORIOSA, (Mi,,10)", sC: "ta as"},
            { line: "DEL SEÑOR RESUCITADO, (Sol#,,18)(Do#,m,210)", sC: "as"},
            { line: "ES EL ÁRBOL DE LA SALVACIÓN., (Fa#,m,80)(Sol#,,281)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DE ÉL YO ME NUTRO,, (Mi,,10)", sC: "as"},
            { line: "EN ÉL ME DELEITO,, (Sol#,,18)(Do#,m,145)", sC: "as"},
            { line: "EN SUS RAÍCES CREZCO,, (Fa#,m,55)", sC: "as"},
            { line: "EN SUS RAMAS YO ME EXTIENDO., (Si,7,16)(Mi,,273)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Su rocío me da fuerza,, (Sol#,,19)(La,,173)", sC: "tc"},
            { line: "su Espíritu como brisa me fecunda;, (Sol#,,292)", sC: ""},
            { line: "a su sombra he puesto yo mi tienda., (Fa#,m,69)(Sol#,,300)", sC: ""},
            { line: "En el hambre es la comida,, (La,,68)", sC: ""},
            { line: "en la desnudez es mi vestido,, ", sC: ""},
            { line: "en la sed es agua viva., (Sol#,,187)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Angosto sendero, mi puerta estrecha,, (Fa#,m,24)(Sol#,,314)", sC: ""},
            { line: "escala de Jacob, lecho de amor, (Fa#,m,39)", sC: ""},
            { line: "donde nos ha desposado el Señor., (Sol#,,309)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "LA CRUZ GLORIOSA, (Mi,,10)", sC: "ta as", lines: [
            { line: "DEL SEÑOR RESUCITADO, (Sol#,,18)(Do#,m,210)", sC: "as"},
            { line: "ES EL ÁRBOL DE LA SALVACIÓN., (Fa#,m,80)(Sol#,,210)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DE ÉL YO ME NUTRO,, (Mi,,10)", sC: "as"},
            { line: "EN ÉL ME DELEITO,, (Sol#,,18)(Do#,m,145)", sC: "as"},
            { line: "EN SUS RAÍCES CREZCO,, (Fa#,m,15)", sC: "as"},
            { line: "EN SUS RAMAS YO ME EXTIENDO., (Si,7,16)(Mi,,273)", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
    ], lder: [
            { line: "En el temor es mi defensa,, (Sol#,,19)(La,,207)", sC: "tc"},
            { line: "en el tropiezo me da fuerzas,, (Sol#,,227)", sC: ""},
            { line: "en la victoria es la corona,, (La,,92)", sC: ""},
            { line: "en la lucha ella es mi premio., (Sol#,,236)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Árbol de vida eterna,, (Fa#,m,24)(Sol#,,159)", sC: ""},
            { line: "misterio del universo., (Fa#,m,47)(Sol#,,163)", sC: ""},
            { line: "Columna de la tierra,, (La,,10)", sC: ""},
            { line: "tu cima toca el cielo, ", sC: ""},
            { line: "y en tus brazos abiertos, ", sC: ""},
            { line: "brilla el amor de Dios., (Sol#,,184)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "LA CRUZ GLORIOSA, (Mi,,10)", sC: "ta as", lines: [
            { line: "DEL SEÑOR RESUCITADO, (Sol#,,18)(Do#,m,210)", sC: "as"},
            { line: "ES EL ÁRBOL DE LA SALVACIÓN., (Fa#,m,80)(Sol#,,210)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "DE ÉL YO ME NUTRO,, (Mi,,10)", sC: "as"},
            { line: "EN ÉL ME DELEITO,, (Sol#,,18)(Do#,m,145)", sC: "as"},
            { line: "EN SUS RAÍCES CREZCO,, (Fa#,m,15)", sC: "as"},
            { line: "EN SUS RAMAS YO ME EXTIENDO., (Si,7,16)(Mi,,273)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: HIMNO A LA CRUZ GLORIOSA
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════╗
║           JACOB                ║
╚════════════════════════════════╝  */
   {
        id: "jacob",
        tt: "Jacob ",
        title: "Jacob ",
        subtitle: "Genesis 32,23-29 ",
        category: ["Catecumenado","Antiguo Testamento"],
        catCanto: "Catecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "228",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/jacob.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=himnoalacruzgloriosa",
        sig: "/src/index.html?canto=ningunopuedeserviradossenores",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Era ya noche cuando Jacob se levantó,, (La,m,20)", sC: "tc"},
            { line: "tomó a sus mujeres y a todos sus hijos, (Fa,,153)(Mi,,338)", sC: ""},
            { line: "y cruzó el vado de Yabboq., (La,m,226)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los tomó y les hizo pasar el río,, (La,m,20)", sC: ""},
            { line: "e hizo pasar también todos sus bienes, (Fa,,184)(Mi,,328)", sC: ""},
            { line: "y Jacob quedó solo., (La,m,158)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y de pronto alguien luchó con él., (Sol,,73)(La,m,295)", sC: "tc"},
            { line: "Y DE PRONTO ALGUIEN LUCHÓ CON ÉL., (Sol,,83)(La,m,358)", sC: "ta as"},
            { line: "Luchó, luchó con él hasta el alba., (Sol,,51)(La,m,289)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Viendo Aquel que Jacob se le resistía,, (La,m,20)(Fa,,336)", sC: "tc"},
            { line: "le golpeó con fuerza en la cadera, ", sC: ""},
            { line: "y el fémur de Jacob se dislocó, (Mi,,282)", sC: ""},
            { line: "en la lucha con Aquel., (La,m,193)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Suéltame, que ya viene la aurora., (Sol,,29)(La,m,228)", sC: "tc"},
            { line: "SUÉLTAME, QUE YA VIENE LA AURORA., (Sol,,29)(La,m,329)", sC: "ta as"},
            { line: "Suéltame, que ya viene la aurora»., (Sol,,29)(La,m,289)", sC: "tc"},
    ], lder: [
            { line: "«No, no te soltaré, (Do,,20)(Re,,112)", sC: "tc"},
            { line: "si no me bendices., (Fa,,33)(Mi,,137)", sC: ""},
            { line: "NO, NO TE SOLTARÉ, (Do,,18)(Re,,117)", sC: "ta as"},
            { line: "SI NO ME BENDICES»., (Fa,,41)(Mi,,151)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y Dios le preguntó:, (Mi,7,17)(La,m,165)", sC: "tc"},
            { line: "«¿Cuál es tu nombre? ", sC: ""},
            { line: "¿Cuál es tu nombre?» ", sC: ""},
            { line: "«Jacob», respondió él,, (Fa,,43)", sC: ""},
            { line: "«Jacob», respondió él., (Mi,,187)", sC: ""},
            { line: "«No te llamarás más Jacob., (La,m,236)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ISRAEL, ISRAEL,, (Sol,,52)(La,m,130)", sC: "ta as"},
            { line: "ISRAEL SERÁ TU NOMBRE., (Sol,,53)(La,m,130)", sC: "as"},
            { line: "ISRAEL, HAS CONOCIDO TU DEBILIDAD., (Sol,,53)(La,m,183)", sC: "as"},
            { line: "ISRAEL, TE APOYARÁS EN DIOS., (Sol,,53)(La,m,349)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ISRAEL, FUERTE CON DIOS., (Sol,,53)(La,m,228)", sC: "as"},
            { line: "ISRAEL, TU VENCERÁS., (Sol,,53)(La,m,193)", sC: "as"},
            { line: "ISRAEL, HAS CONOCIDO TU DEBILIDAD., (Sol,,53)(La,m,349)", sC: "as"},
            { line: "ISRAEL, TE APOYARÁS EN DIOS»., (Sol,,53)(La,m,277)", sC: "as"},
]}, // ULTIMA LINEA DEL CANTO: JACOB 
// SIGUIENTE CANTO DEBAJO




// ELECCIÓN




] //LLAVE DE CIERRE DEL CANTO



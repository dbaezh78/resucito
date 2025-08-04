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
  
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
           triggerLine: "A TI, SEÑOR, EN MI CLAMOR IMPLORO,, (La,m,15)(Re,m,327)", sC: "mt as ta", lines: [
            { line: "A TI, SEÑOR, EN MI CLAMOR SUPLICO,, (La,m,327)", sC: "as"},
            { line: "A TI DERRAMO MI LAMENTO,, (Mi,7,29)", sC: "as"},
            { line: "A TI MI ANGUSTIA EXPONGO. , (Fa,m,29)(Mi,,222)", sC: "as"},  ]},
 
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
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
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
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

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
           triggerLine: "A TI, SEÑOR, LEVANTO MI ALMA, (La,m,15)(Mi,,250)", sC: "mt as ta", lines: [
                { line: "A TI, OH DIOS MÍO., (Re,m,60)(Fa,,94)(Mi,,159)", sC: "as"},  ]},            

            { line: "Acuérdate, Señor, de tu ternura,, (La,m,15)(Mi,,270)", sC: "mt tc"},
            { line: "de tu inmensa compasión, que son de siempre., (Re,m,275)(Fa,,315)(Mi,,393)", sC: ""},
            { line: "De mis pecados, Señor, no te acuerdes,, (La,m,15)(Mi,,322)", sC: ""},
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
            { line: "A ti que escuchas la oración,, (Sol,m,28)(Re,m,246)", sC: ""},
            { line: "viene todo mortal, viene todo mortal., (La,7,156)(Re,m,330)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A TI QUE ESCUCHAS LA ORACIÓN, (Si♭,,8)(La,7,297)", sC: "ta as"},
            { line: "VIENE TODO MORTAL,, (Si♭,,25)", sC: "as"},
            { line: "VIENE TODO MORTAL., (La,7,189)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Pesan sobre nosotros nuestros pecados,, (Re,m,15)(La,7,340)", sC: "tc"},
            { line: "mas tú perdonas nuestras culpas., (Re,m,273)", sC: ""},
            { line: "Dichoso el que tú eliges, el que tú llamas,, (La,7,345)", sC: ""},
            { line: "vivirá en tus atrios., (Re,m,137)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A ti que escuchas la oración,, (Sol,m,31)(Re,m,247)", sC: ""},
            { line: "viene todo mortal, viene todo mortal., (La,7,158)(Re,m,333)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
  
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
           triggerLine: "A TI QUE ESCUCHAS LA ORACIÓN, (Si♭,,8)(La,7,297)", sC: "as ta", lines: [
            { line: "VIENE TODO MORTAL,, (Si♭,,25)", sC: "as"},
            { line: "VIENE TODO MORTAL., (La,7,189)", sC: "as"},  ]},
 
    ], lder: [
            { line: "Nos saciaremos de los bienes de tu casa,, (Re,m,15)(La,7,361)", sC: "tc"},
            { line: "de la santidad de tu templo., (Re,m,214)", sC: ""},
            { line: "Con los prodigios de tu amor tú nos hablas,, (La,7,360)", sC: ""},
            { line: "con los portentos de tu justicia nos respondes., (Re,m,380)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A ti que escuchas la oración,, (Sol,m,31)(Re,m,246)", sC: ""},
            { line: "viene todo mortal, viene todo mortal., (La,7,156)(Re,m,331)", sC: ""},
  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
           triggerLine: "A TI QUE ESCUCHAS LA ORACIÓN, (Si♭,,8)(La,7,297)", sC: "as ta", lines: [
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
        subtitle: "Rm 8,15–17",
        category: ["PreCatecumenado","Laudes", "Visperas","Comunión","Nuevo Testamento"],
        catCanto: "Precatecumenado",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "",
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
            { line: "para recaer en el temor,, (Fa,,10)(Mi,,209)", sC: ""},
            { line: "para recaer en el temor., (Fa,,10)(Mi,,209)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "ESTE MISMO ESPÍRITU, (La,m,15)", sC: "as ta"},
            { line: "DA TESTIMONIO A NUESTRO ESPÍRITU, (Re,m,15)(La,m,111)(Fa,,165)(Mi,,320)", sC: "as"},
            { line: "DE QUE SOMOS HIJOS DE DIOS., (Mi,7,15)(La,m,278)", sC: "as"},
            { line: "Y, SI HIJOS, TAMBIÉN HEREDEROS,, (Sol,7,61)(Do,,281)", sC: "mt as"},
            { line: "COHEREDEROS DE CRISTO,, (Mi,7,214)", sC: "as"},
            { line: "HEREDEROS DE DIOS., (La,m,189)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Y, SI HIJOS, TAMBIÉN HEREDEROS,, (Sol,7,63)(Do,,284)", sC: "as"},
            { line: "COHEREDEROS DE CRISTO,, (Mi,7,213)", sC: "as"},
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
            { line: "En cuanto los vio,, (Mi,,154)", sC: "mt"},
            { line: "se inclinó hasta el suelo y dijo: (La,m,267)", sC: ""},
            { line: "«Oh Señor mío,, (Sol,,123)", sC: "mt"},
            { line: "no pases, te ruego, sin detenerte., (Fa,,143)(Mi,,284)", sC: ""},
            { line: "«SIN DETENERTE,, (La,m,119)", sC: "ta as mt"},
            { line: "NO PASES, TE RUEGO,, (Sol,,168)", sC: "as"},
            { line: "SIN DETENERTE, SIN DETENERTE»., (Fa,,112)(Mi,,274)", sC: "as"},
    ], lder: [
            { line: "«Os traeré un poco de agua,, (La,m,15)(Mi,,221)", sC: "tc"},
            { line: "os lavaré los pies, ", sC: ""},
            { line: "y reposaréis a la sombra., (La,m,180)", sC: ""},
            { line: "Os traeré un bocado,, (Mi,,167)", sC: "mt"},
            { line: "os reconfortaréis, ", sC: ""},
            { line: "y lúego seguiréis adelante., (La,m,214)", sC: ""},
            { line: "No por casualidad, (Sol,,154)", sC: "mt"},
            { line: "habéis pasado hoy delante de mí., (Fa,,161)(Mi,,310)", sC: ""},

            { line: "«OH SEÑOR MÍO,, (La,m,135)", sC: "ta as mt"},
            { line: "NO PASES, TE RUEGO,, (Sol,,171)", sC: "as"},
            { line: "SIN DETENERTE, SIN DETENERTE., (Fa,,106)(Mi,,270)", sC: "as"},
            { line: "SIN DETENERTE,, (La,m,110)", sC: "as mt"},
            { line: "NO PASES, TE RUEGO,, (Sol,,170)", sC: "as"},
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
            { line: "TODA LA TIERRA,, (Sol,m,15)(Re,m,118)", sC: "as"},
            { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,58)(Sol,,154)(La,,297)", sC: "as"},

            { line: "Acercaos a Él, (Re,m,55)(La,7,138)", sC: "tc mt"},
            { line: "con gritos de júbilo., (Re,m,175)", sC: "ast91"},
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,, (Sol,m,15)(Re,m,118)", sC: "as"},
                { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,15)(Sol,,154)(La,,297)", sC: "as"},  ]},

            { line: "Porque el Señor es nuestro Dios, (Re,m,15)(La,7,250)", sC: "tc mt"},
            { line: "y nosotros su pueblo., (Re,m,15)", sC: "ast92"},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,, (Sol,m,15)(Re,m,118)", sC: "as"},
                { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,15)(Sol,,154)(La,,297)", sC: "as"},  ]},

            { line: "¡Entrad por sus puertas , (Re,m,15)(La,7,234)", sC: "tc mt"},
            { line: "con himnos de alegría!, (Re,m,205)", sC: "ast93"},

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,, (Sol,m,15)(Re,m,118)", sC: "as"},
                { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,15)(Sol,,154)(La,,297)", sC: "as"},  ]},
    ], lder: [
            { line: "Bendecid su nombre, (Re,m,73)(La,7,207)", sC: "mt tc"},
            { line: "dándole gracias, (Re,m,135)", sC: "ast94"},

            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,, (Sol,m,15)(Re,m,118)", sC: "as"},
                { line: "SERVID AL SEÑOR CON ALEGRÍA., (Fa,,15)(Sol,,154)(La,,297)", sC: "as"},  ]},

            { line: "Porque es bueno el Señor,, (Re,m,15)(La,7,254)", sC: "mt tc"},
            { line: "es eterno su amor, (Re,m,15)(La,7,138)", sC: "ast95"},
            { line: "con nosotros., (Re,m,103)", sC: "ast96"},

            { type: "collapsible-block", id: "asamblea_anadie_5", initialState: "collapsed",
           triggerLine: "ACLAMAD AL SEÑOR, (Re,m,15)", sC: "mt as ta", lines: [
                { line: "TODA LA TIERRA,, (Sol,m,15)(Re,m,118)", sC: "as"},
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

            { line: "Escucha, Señor, mi oración,, (Mi,m,15)(Si,m,241)", sC: "mt tc"},
            { line: "atiende, Señor, a mi clamor., (Mi,m,15)(Si,m,250)", sC: ""},
            { line: "Presta oídos a mi súplica,, (Sol,,11)(Fa#,,188)", sC: ""},
            { line: "que mis labios no traicionan, Señor,, (Sol,,96)(Fa#,,322)", sC: ""},
            { line: "salga de ti la sentencia., (Sol,,11)(Fa#,,175)", sC: ""},
            { line: "Porque tus ojos ven, tus ojos ven mi rectitud., (Mi,m,119)(Fa#,,404)", sC: ""},

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "AL DESPERTAR, (Si,m,15)", sC: "mt as ta", lines: [
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Sol,,115)(Si,m,262)", sC: "as"},
            { line: "AL DESPERTAR, (Mi,m,127)", sC: "as"},
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Si,m,261)", sC: "as"},  ]},

            { line: "Sondea, Señor, mi corazón,, (Mi,m,15)(Si,m,238)", sC: "mt tc"},
            { line: "escrútalo de noche, Señor,, (Mi,m,15)(Si,m,233)", sC: ""},
            { line: "pruébame al crisol, pruébame al crisol., (Sol,,15)(Fa#,,229)", sC: ""},
            { line: "Porque tú sabes que no hay malicia en mí,, (Sol,,15)(Fa#,,394)", sC: ""},
            { line: "que mi boca no miente como hacen los hombres., (Sol,,15)(Fa#,,299)", sC: ""},
            { line: "Que he guardado tu palabra,, (Mi,m,136)", sC: ""},
            { line: "que no he seguido los caminos del violento,, (Fa#,,377)", sC: ""},
            { line: "que a tus huellas he ajustado mis pasos,, (Sol,,123)(Fa#,,342)", sC: ""},
            { line: "que no vacilaré, que no vacilaré., (Mi,m,58)(Fa#,,294)", sC: ""},


            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "AL DESPERTAR, (Si,m,15)", sC: "mt as ta", lines: [
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Sol,,115)(Si,m,262)", sC: "as"},
            { line: "AL DESPERTAR, (Mi,m,127)", sC: "as"},
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Si,m,261)", sC: "as"},  ]},
    ], lder: [
            { line: "A Ti te invoco, Señor,, (Mi,m,15)(Si,m,178)", sC: "mt tc"},
            { line: "concédeme, Señor, una respuesta,, (Mi,m,51)(Si,m,294)", sC: ""},
            { line: "muéstrame los prodigios de tu amor., (Sol,,13)(Fa#,,196)", sC: ""},
            { line: "Porque tú salvas al que se apoya en ti,, (Sol,,112)(Fa#,,356)", sC: ""},
            { line: "porque tú ayudas, (Sol,,125)", sC: ""},
            { line: "al que se refugia a tu derecha., (Fa#,,244)", sC: ""},
            { line: "Como a la niña de tus ojos guárdame,, (Mi,m,15)(Fa#,,291)", sC: ""},
            { line: "a la sombra de tus alas escóndeme,, (Mi,m,53)(Fa#,,265)", sC: ""},
            { line: "mira que quieren matarme., (Sol,,21)(Fa#,,210)", sC: ""},

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "AL DESPERTAR, (Si,m,15)", sC: "mt as ta", lines: [
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Sol,,115)(Si,m,262)", sC: "as"},
            { line: "AL DESPERTAR, (Mi,m,127)", sC: "as"},
            { line: "ME SACIARÉ DE TU SEMBLANTE, SEÑOR., (Si,m,261)", sC: "as"},  ]},

            { line: "Míralos, están cerrados en su orgullo,, (Mi,m,15)(Si,m,322)", sC: "mt tc"},
            { line: "hablan, la arrogancia está en su boca., (Mi,m,15)(Si,m,330)", sC: ""},
            { line: "Avanzan contra mí, avanzan contra mí., (Sol,,15)(Fa#,,216)", sC: ""},
            { line: "Ayúdame tú, Señor,, (Sol,,15)(Fa#,,167)", sC: ""},
            { line: "líbrame de los hombres de este mundo,, (Sol,,15)(Fa#,,332)", sC: ""},
            { line: "de los hombres cuyo premio es esta vida., (Mi,m,80)(Fa#,,362)", sC: ""},
            { line: "Cólmalos de tus bienes, Señor,, (Sol,,15)(Fa#,,273)", sC: ""},
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
            { line: "Alabad al Señor en el Cielo,, (La,,8)", sC: "tc"},
            { line: "¡ALABADLO!, ", sC: "as ta"},
            { line: "alabad al Señor en lo alto,, (Fa#,m,219)", sC: "tc"},
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

            { line: "Alabanza de todos sus fieles,, ", sC: "ptop0 alabadlo"},
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

            { line: "¡Hoy os ha nacido,, (Sol,m,15)(Re,m,139)", sC: "b12-1"},
            { line: "ha nacido el Salvador!, (La,,64)(Re,m,194)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,, (Fa,,75)(La,,264)", sC: "as ta" },
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
       triggerLine: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,, (Fa,,75)(La,,264)", sC: "as ta", lines: [
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
       triggerLine: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,, (Fa,,75)(La,,264)", sC: "as ta", lines: [
            { line: "HA NACIDO EL SALVADOR, (Si♭,,78)", sC: "as b12-2"},
            { line: "ACOSTADO EN UN PESEBRE!, (Do,,68)", sC: "as"},
            { line: "¡ÉL ES EL CRISTO, EL SEÑOR!, (Do,7,252)", sC: "as"},  ]},
    ], lder: [
            { line: "Encontraron a María,, (Re,m,15)", sC: "b12-1"},
            { line: "encontraron a José., ", sC: ""},

            { line: "El buey, el asno y el niño,, (Sol,m,15)(Re,m,208)", sC: "b12-1"},
            { line: "que se llamará Emmanuel., (La,,85)(Re,m,234)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,, (Fa,,75)(La,,264)", sC: "as ta", lines: [
            { line: "HA NACIDO EL SALVADOR, (Si♭,,78)", sC: "as b12-2"},
            { line: "ACOSTADO EN UN PESEBRE!, (Do,,68)", sC: "as"},
            { line: "¡ÉL ES EL CRISTO, EL SEÑOR!, (Do,7,252)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El buey reconoce a su dueño,, (Re,m,15)", sC: "b12-1"},
            { line: "el borrico su pesebre., ", sC: ""},
            
            { line: "Pero Israel no conoce,, (Sol,m,15)(Re,m,174)", sC: "b12-1"},
            { line: "no conoce a su Señor., (La,,71)(Re,m,189)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_4", initialState: "collapsed",
       triggerLine: "¡ALEGRÍA, ALEGRÍA, ALEGRÍA,, (Fa,,75)(La,,264)", sC: "as ta", lines: [
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

            { line: "Alabad al Señor en su templo,, (MI,,10)(La,,139)(Re,,170)(La,,228)", sC: "tc"},
            { line: "alabadlo en su fuerte firmamento,, (Re,,52)(La,,173)(Mi,,286)", sC: ""},
            { line: "Alabadlo por sus obras estupendas,, (La,,52)(Re,,178)(La,,236)(Mi,,284)", sC: ""},
            { line: "alabadlo por su inmensa grandeza., (La,,52)(Re,,198)(Mi,,309)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "¡ALELUYA, ALELUYA, ALELUYA, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(La,,248)(Mi,,275)", sC: "as ta", lines: [
            { line: "¡ALELUYA, ALELUYA, ALELUYA!, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(Mi,,275)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Alabadlo al son de trompetas,, (Mi,,10)(La,,128)(Re,,168)(La,,245)", sC: "tc"},
            { line: "alabadlo con arpas y guitarras,, (Re,,45)(La,,140)(Mi,,243)", sC: ""},
            { line: "alabadlo con tambores y con danzas,, (La,,45)(Re,,182)(La,,237)(Mi,,298)", sC: ""},
            { line: "alabadlo con trompas y flautas., (La,,45)(Re,,143)(Mi,,257)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "¡ALELUYA, ALELUYA, ALELUYA, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(La,,248)(Mi,,275)", sC: "as ta", lines: [
            { line: "¡ALELUYA, ALELUYA, ALELUYA!, (Mi,,10)(La,,58)(Re,,108)(La,,153)(Re,,205)(Mi,,275)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Alabadlo con platillos sonoros,, (Mi,,15)(La,,169)(Re,,195)(La,,251)", sC: "tc"},
            { line: "alabadlo con platillos vibrantes., (Re,,48)(La,,166)(Mi,,249)", sC: ""},
            { line: "¡TODO SER ALABE AL SEÑOR,, (La,,10)(Re,,81)(La,,137)(Mi,,254)", sC: "as ta"},
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
            
            { line: "Bendecid al Señor, bendecid al Señor,, (Re,m,20)", sC: "niño"},
            { line: "vosotros los siervos del Señor., (La7,,266)", sC: ""},
            { line: "Bendecid al Señor, bendecid al Señor, ", sC: ""},
            { line: "vosotros que estáis en la casa del Señor., (Re,m,366)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Alzad a Él las manos, alzad a Él las manos, (Re,m,21)", sC: ""},
            { line: "y bendecid al Señor,, (La7,,172)", sC: ""},
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
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BENDECID AL SEÑOR, BENDECID AL SEÑOR,, (Re,m,20)", sC: "as ta", lines: [
            { line: "VOSOTROS LOS SIERVOS DEL SEÑOR., (La7,,327)", sC: "as"},
            { line: "BENDECID AL SEÑOR, BENDECID AL SEÑOR,, ", sC: "as"},
            { line: "VOSOTROS QUE ESTÁIS EN LA CASA DEL SEÑOR., (Re,m,439)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "ALZAD A ÉL LAS MANOS, ALZAD A ÉL LAS MANOS, (Re,m,21)", sC: "as ta"} ,
            { line: "Y BENDECID AL SEÑOR,, (La7,,172)", sC: "as"},
            { line: "VOSOTROS QUE ESTÁIS EN LA CASA DEL SEÑOR, ", sC: "as"},
            { line: "DURANTE LA NOCHE., (Re,m,159)", sC: "as"},  ]},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Aalelú, alelú uuu ... uuya., (Si♭,,59)(La,7,226)", sC: "tc"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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
            
            { line: "Démosle gloria,, (Do,,10)(Mi,,113)", sC: "tc"},
            { line: "han llegado las bodas., (La,m,170)", sC: ""},
            { line: "Démosle gloria,, (Do,,10)(Mi,,112)", sC: ""},
            { line: "las bodas con nuestro Dios., (La,m,240)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALELUYA,ALELUYA,ALELUYA., (Do,,15)(Mi,,149)(La,m,262)", sC: "as ta", lines: [
            { line: "ALELUYA,ALELUYA,ALELUYA., (Do,,53)(Mi,,149)(La,m,262)", sC: "as"},  ]},
    ], lder: [
            { line: "Bienaventurados, (Do,,10)", sC: "tc"},
            { line: "los invitados a bodas,, (Mi,,10)", sC: ""},
            { line: "a las bodas del Cordero., (La,m,201)", sC: ""},
            { line: "Bienaventurados, (Do,,10)", sC: "mt"},
            { line: "los invitados a bodas,, (Mi,,10)", sC: ""},
            { line: "a las bodas con el Señor., (La,m,222)", sC: ""},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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
            { line: "Del Señor es la tierra,, (Mi,,10)", sC: "tc"},
            { line: "DEL SEÑOR ES LA TIERRA,, ", sC: "ta as"},
            { line: "y todo aquello que contiene,, (Sol,,10)", sC: "tc"},
            { line: "Y TODO AQUELLO QUE CONTIENE,, ", sC: "ta as"},
            { line: "el orbe y sus habitantes., (La,,10)(Si,7,183)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALZAOS, PUERTAS,, (Mi,,10)", sC: "ta as"},
            { line: "ALZAD LOS DINTELES,, (Sol,,45)", sC: "as"},
            { line: "PUERTAS ETERNAS,, (La,,125)", sC: "as"},
            { line: "DEBE ENTRAR EL REY, (Mi,,195)", sC: "as"},
            { line: "DE LA GLORIA, DE LA GLORIA., ", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Quién es ese Rey de la gloria?, (Mi,m,15)(La,m,92)(Mi,m,258)", sC: "tc"},
            { line: "¿QUIÉN ES ESE REY DE LA GLORIA?, (La,m,94)(Mi,m,288)", sC: "ta as"},
            { line: "El Señor, el fuerte, el valiente,, (Si,m,17)", sC: "tc"},
            { line: "EL SEÑOR, EL FUERTE, EL VALIENTE,, ", sC: "ta as"},
            { line: "el Señor, valiente en la batalla,, (Sol,,63)(La,,254)", sC: "tc"},
            { line: "VALIENTE EN LA BATALLA., (Si,,200)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor de los ejércitos,, (Mi,m,15)(Si,m,177)", sC: "tc"},
            { line: "EL SEÑOR DE LOS EJÉRCITOS., (Mi,m,75)(Si,m,209)", sC: "ta as"},
    ], lder: [
            { line: "Él es el Rey de la gloria,, (Sol,,31)(La,,187)", sC: "tc"},
            { line: "EL REY DE LA GLORIA., (Si,,168)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALZAOS, PUERTAS,, (Mi,,10)", sC: "as ta", lines: [
            { line: "ALZAD LOS DINTELES,, (Sol,,45)", sC: "as"},
            { line: "PUERTAS ETERNAS,, (La,,125)", sC: "as"},
            { line: "DEBE ENTRAR EL REY, (Mi,,195)", sC: "as"},
            { line: "DE LA GLORIA, DE LA GLORIA., ", sC: "as"},  ]},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¿Quién subirá al monte del Señor?, (Mi,m,15)(La,m,124)(Mi,m,307)", sC: "tc"},
            { line: "¿QUIÉN SUBIRÁ AL MONTE DEL SEÑOR?, (La,m,138)(Mi,m,350)", sC: "ta as"},
            { line: "El de manos inocentes y puro corazón,, (Si,m,20)", sC: "tc"},
            { line: "EL DE MANOS INOCENTES, ", sC: "ta as"},
            { line: "Y PURO CORAZÓN,, ", sC: "as"},
            { line: "el que no conduce su vida por vanidad,, (Sol,,14)(La,,348)", sC: "tc"},
            { line: "POR VANIDAD., (Si,,114)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Y nosotros somos su Iglesia,, (Mi,m,15)(Si,m,233)", sC: "tc"},
            { line: "Y NOSOTROS SOMOS SU IGLESIA,, (Mi,m,65)(Si,m,280)", sC: "ta as"},
            { line: "que hoy viene a tu presencia,, (Mi,m,99)(Si,m,228)", sC: "tc"},
            { line: "QUE HOY VIENE A TU PRESENCIA,, (Mi,m,112)(Si,m,258)", sC: "ta as"},
            { line: "que busca tu rostro, oh Dios de Jacob,, (Sol,,55)(La,,335)", sC: "tc"},
            { line: "OH DIOS DE JACOB., (Si,,163)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ALZAOS, PUERTAS,, (Mi,,10)", sC: "as ta", lines: [
            { line: "ALZAD LOS DINTELES,, (Sol,,45)", sC: "as"},
            { line: "PUERTAS ETERNAS,, (La,,125)", sC: "as"},
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
            
            { line: "BENDICIÓN Y GLORIA,, (Do,,10)", sC: "as"},
            { line: "SABIDURÍA,, (Sol,,92)", sC: "as"},
            { line: "ACCIÓN DE GRACIAS,", sC: "as"},
            { line: "DEMOS A DIOS., (Do,,123)", sC: "as"},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "AMÉN, AMÉN, AMÉN, (Do,,10)", sC: "ta as", lines: [
            { line: "AMÉN, AMÉN, AMÉN., (La,m,41)", sC: "as"},
            { line: "AMÉN, AMÉN, AMÉN., (Sol,,38)(Do,,181)", sC: "as"},  ]},
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            
            { line: "Honor y poder, (Fa,,40)", sC: "tc"},
            { line: "y fortaleza,, (Mi,,71)", sC: ""},
            { line: "honor y poder, (Fa,,37)", sC: ""},
            { line: "demos a Dios., (Mi,,113)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "BENDICIÓN Y GLORIA, (Do,,10)", sC: "ta as", lines: [
            { line: "SABIDURÍA,, (Sol,,92)", sC: "as"},
            { line: "ACCIÓN DE GRACIAS, ", sC: "as"},
            { line: "DEMOS A DIOS., (Do,,123)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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
            { line: "EN LA SANGRE DEL CORDERO,, (Fa,,85)(Mi,,261)", sC: "as"},
            { line: "EN LA SANGRE DEL CORDERO., (Fa,,85)(Mi,,261)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "ESTOS SON LOS QUE VIENEN, (Sol,7,22)(Do,,228)", sC: "ta as", lines: [
            { line: "DE LA GRAN TRIBULACIÓN., (Sol,,99)(Do,,235)", sC: "as"},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Y LAVARON SUS TÚNICAS, (Fa,,62)", sC: "as"},
            { line: "Y LAS BLANQUEARON, (Do,,165)", sC: "as"},
            { line: "EN LA SANGRE DEL CORDERO,, (Fa,,85)(Mi,,261)", sC: "as"},
            { line: "EN LA SANGRE DEL CORDERO., (Fa,,85)(Mi,,261)", sC: "as"},  ]},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

            { line: "Me envolvían redes de muerte,, (Re,,11)", sC: "tc"},
            { line: "me alcanzaron los lazos del infierno;, (Fa#,m,300)", sC: ""},
            { line: "me rodeaban tristeza y angustia,, (Sol,,87)(Mi,m6,268)", sC: ""},
            { line: "invoqué el nombre del Señor:, (La,7,68)", sC: ""},
            { line: "«¡Te ruego, Señor, sálvame!»., (Re,,193)", sC: ""},

            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "RECOBRA, ALMA MÍA, TU REPOSO,, (Re,,11)(Fa#,m,297)", sC: "ta as"},
            { line: "PORQUE EL SEÑOR FUE BUENO CONTIGO., (Sol,,15)(Mi,m6,214)(La,7,364)", sC: "as"},
            { line: "ÉL TE HA SALVADO DE LA MUERTE,, (Sol,,13)(Re,,293)", sC: "as"},
            { line: "HA PRESERVADO TUS PIES DE LA CAÍDA., (La,7,243)(Re,,358)", sC: "as"},
            { line: "ÉL TE HA SALVADO DE LA MUERTE,, (Sol,,14)(Re,,284)", sC: "as"},
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
       triggerLine: "RECOBRA, ALMA MÍA, TU REPOSO,, (Re,,11)(Fa#,m,297)", sC: "ta as", lines: [
            { line: "PORQUE EL SEÑOR FUE BUENO CONTIGO., (Sol,,15)(Mi,m6,214)(La,7,364)", sC: "as"},
            { line: "ÉL TE HA SALVADO DE LA MUERTE,, (Sol,,13)(Re,,293)", sC: "as"},
            { line: "HA PRESERVADO TUS PIES DE LA CAÍDA., (La,7,243)(Re,,358)", sC: "as"},
            { line: "ÉL TE HA SALVADO DE LA MUERTE,, (Sol,,14)(Re,,284)", sC: "as"},
            { line: "HA PRESERVADO TUS PIES DE LA CAÍDA., (La,7,246)(Re,,359)", sC: "as"},  ]},
]}, // ULTIMA LINEA DEL CANTO: AMO AL SEÑOR
// SIGUIENTE CANTO DEBAJO






] //LLAVE DE CIERRE DEL CANTO
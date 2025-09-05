const am11 = "Aleluya, aleluya, aleluya, aleluya., (Sol,,11)(Do,,200)(Re,,230)(Sol,,301)";
const am12 = "ALELUYA, ALELUYA, ALELUYA, ALELUYA., (Sol,,11)(Do,,245)(Re,,275)(Sol,,369)";
const am2 = "ALELUYA, ALELUYA, ALELUYA., (Do,,10)(Mi,,152)(La,m,275)";
const am31 = "Aleluya, aleluya, aleluya., (Mi,m,21)(Re,,122)(Mi,m,219)";
const am32 = "ALELUYA, ALELUYA, ALELUYA., (Re,,154)(Mi,m,271)";

// aleluyainterleccional

const allCantosData = [
// Aleluyas Segun Semana


/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA I      ║
╚════════════════════════════════════════════════╝  */
   {
        id: "aitos1",
        tt: "Aleluya Interleccional Semana I",
        title: "Tiempo Ordinario | Semana I",
        subtitle: "Aleluya Interleccional Modelos I, II, III",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "180",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/ainterleccional.html?canto=aito2",
        sig: "/resucito/src/ainterleccional.html?canto=aito3",
// Contenido del lado izquierdo del canto,
    lizq: [
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},
            { line: am12, sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Jesús proclamaba el Evangelio del reino,           (Mi,,10)(Re,,181)(Mi,m,352)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                 (Do,,10)(Mi,,142)(La,m,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},
            { line: am2, sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Jesús proclamaba el Evangelio del reino,             (Do,,10)(Mi,,178)(La,m,342)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                   (Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},
            { line: am32, sC: "ta as"}, 

            { line: "Jesús proclamaba el Evangelio del reino,              (Do,,10)(Mi,,200)(La,m,346)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                    (Do,,10)(Mi,,152)(La,m,334)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},

    ], lder: []}, // SIGUIENTE CANTO DEBAJO

    
/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA I      ║
╚════════════════════════════════════════════════╝  */
   {
        id: "aitos2",
        tt: "Aleluya Interleccional Semana II",
        title: "Semana II, Tiempo Ordinario",
        subtitle: "Aleluya Interleccional - Modelos I, II, III",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "3",
        nCan: "",
        nCanURL: "",
        dbno: "180",
        notes: "",
        mant: "No",
        audioSrc: "/audio/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/ainterleccional.html?canto=aito2",
        sig: "/resucito/src/ainterleccional.html?canto=aito3",
// Contenido del lado izquierdo del canto,
    lizq: [
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},
            { line: am12, sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Dios nos llamó por medio del Evangelio,            (Mi,,10)(Re,,181)(Mi,m,352)", sC: "tc"},
            { line: "para que sea nuestra.                              (Do,,10)(Mi,,142)(La,m,335)", sC: ""},
            { line: "la gloria de nuestro Señor Jesucristo.             (Do,,10)(Mi,,142)(La,m,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},
            { line: am2, sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Dios nos llamó por medio del Evangelio,            (Do,,10)(Mi,,178)(La,m,342)", sC: "tc"},
            { line: "para que sea nuestra.                              (Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "la gloria de nuestro Señor Jesucristo.             (Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},
            { line: am32, sC: "ta as"}, 
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Dios nos llamó por medio del Evangelio,             (Do,,10)(Mi,,200)(La,m,346)", sC: "tc"},
            { line: "para que sea nuestra.                               (Do,,10)(Mi,,152)(La,m,334)", sC: "bg"},
            { line: "la gloria de nuestro Señor Jesucristo.              (Do,,10)(Mi,,152)(La,m,334)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},

    ], lder: []}, // SIGUIENTE CANTO DEBAJO



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
        audioSrc: "/audio/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aclamacionesalaoraciondelosfieles",
        sig: "/resucito/src/index.html?canto=aleluyapascual",
// Contenido del lado izquierdo del canto,
    lizq: [
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},
            { line: am12, sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Jesús proclamaba el Evangelio del reino,           (Mi,,10)(Re,,181)(Mi,m,352)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                 (Do,,10)(Mi,,142)(La,m,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},
            { line: am2, sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Jesús proclamaba el Evangelio del reino,             (Do,,10)(Mi,,178)(La,m,342)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                   (Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},
            { line: am32, sC: "ta as"}, 

            { line: "Jesús proclamaba el Evangelio del reino,              (Do,,10)(Mi,,200)(La,m,346)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                    (Do,,10)(Mi,,152)(La,m,334)", sC: "bg"},
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
        audioSrc: "/audio/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aclamacionesalaoraciondelosfieles",
        sig: "/resucito/src/index.html?canto=aleluyapascual",
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
        audioSrc: "/audio/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/index.html?canto=aclamacionesalaoraciondelosfieles",
        sig: "/resucito/src/index.html?canto=aleluyapascual",
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




















] //LLAVE DE CIERRE DEL CANTO



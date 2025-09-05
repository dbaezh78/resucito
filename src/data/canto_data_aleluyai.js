// TIEMPO ORDINARIO
const aitos1c = "Domingo I, Tiempo Ordinario";
const aitos2c = "Domingo II, Tiempo Ordinario";
const aitos3c = "Domingo III, Tiempo Ordinario";
const aitos4c = "Domingo IV, Tiempo Ordinario";
const aitos5c = "Domingo V, Tiempo Ordinario";
const aitos6c = "Domingo VI, Tiempo Ordinario";
const aitos7c = "Domingo VII, Tiempo Ordinario";
const aitos8c = "Domingo VIII, Tiempo Ordinario";
const aitos9c = "Domingo IX, Tiempo Ordinario";
const aitos10c = "Domingo X, Tiempo Ordinario";
const aitos11c = "Domingo XI, Tiempo Ordinario";
const aitos12c = "Domingo XII, Tiempo Ordinario";
const aitos13c = "Domingo XIII, Tiempo Ordinario";
const aitos14c = "Domingo XIV, Tiempo Ordinario";
const aitos15c = "Domingo XV, Tiempo Ordinario";
const aitos16c = "Domingo XVI, Tiempo Ordinario";
const aitos17c = "Domingo XVII, Tiempo Ordinario";
const aitos18c = "Domingo XVIII, Tiempo Ordinario";
const aitos19c = "Domingo XIX, Tiempo Ordinario";
const aitos20c = "Domingo XX, Tiempo Ordinario";
const aitos21c = "Domingo XXI, Tiempo Ordinario";
const aitos22c = "Domingo XXII, Tiempo Ordinario";
const aitos23c = "Domingo XXIII, Tiempo Ordinario";
const aitos24c = "Domingo XXIV, Tiempo Ordinario";
const aitos25c = "Domingo XXV, Tiempo Ordinario";
const aitos26c = "Domingo XXVI, Tiempo Ordinario";
const aitos27c = "Domingo XXVII, Tiempo Ordinario";
const aitos28c = "Domingo XXVIII, Tiempo Ordinario";
const aitos29c = "Domingo XXIX, Tiempo Ordinario";
const aitos30c = "Domingo XXX, Tiempo Ordinario";
const aitos31c = "Domingo XXXI, Tiempo Ordinario";
const aitos32c = "Domingo XXXII, Tiempo Ordinario";
const aitos33c = "Domingo XXXIII, Tiempo Ordinario";
const aitos34c = "Domingo XXXIV, Tiempo Ordinario";
// AVIENTO
const aitas1c = "Domingo I, Tiempo Adviento";
const aitas2c = "Domingo II, Tiempo Adviento";
const aitas3c = "Domingo III, Tiempo Adviento";
const aitas4c = "Domingo IV, Tiempo Adviento";
const aitas5c = "Domingo V, Tiempo Adviento";

// NAVIDAD
const aitns1c = "Domingo I, Tiempo Navidad";
const aitns2c = "Domingo II, Tiempo Navidad";
const aitns3c = "Domingo III, Tiempo Navidad";
const aitns4c = "Domingo IV, Tiempo Navidad";

// TIEMPO CUARESMA
const aitcs1c = "Domingo I, Tiempo Cuaresma";
const aitcs2c = "Domingo II, Tiempo Cuaresma";
const aitcs3c = "Domingo III, Tiempo Cuaresma";
const aitcs4c = "Domingo IV, Tiempo Cuaresma";
const aitcs5c = "Domingo V, Tiempo Cuaresma";
const aitcs6c = "Domingo VI, Tiempo Cuaresma";

// TIEMPO PASCUAL
const aitps1c = "Domingo I, Tiempo Pascual";
const aitps2c = "Domingo II, Tiempo Pascual";
const aitps3c = "Domingo III, Tiempo Pascual";
const aitps4c = "Domingo IV, Tiempo Pascual";
const aitps5c = "Domingo V, Tiempo Pascual";
const aitps6c = "Domingo VI, Tiempo Pascual";
const aitps7c = "Domingo VII, Tiempo Pascual";
const aitps8c = "Domingo VIII, Tiempo Pascual";



const añoa = "Aleluya InterLeccional, Modelo I, II, III - Año A";
const añob = "Aleluya InterLeccional, Modelo I, II, III - Año B";
const añoc = "Aleluya InterLeccional, Modelo I, II, III - Año C";


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
          id: "aitos1c",
           tt: aitos1c,
        title: aitos1c,
        subtitle: añoc,
        category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",mant: "No",audioSrc: "/audio/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/ainterleccional.html?canto=aitos1c",
        sig: "/resucito/src/ainterleccional.html?canto=aitos2c",
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

   {  /* ALELUYA INTERLECCIONAL TIEMPO ORDINARIO SEMANA II */
          id: "aitos2c",
           tt: aitos2c,
        title: aitos2c,
        subtitle: añoc,
        category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",mant: "No",audioSrc: "/audio/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/ainterleccional.html?canto=aitos1c",
        sig: "/resucito/src/ainterleccional.html?canto=aitos3c",
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
        
        ]},], lder: []}, // SIGUIENTE CANTO DEBAJO

   {  /* ALELUYA INTERLECCIONAL TIEMPO ORDINARIO SEMANA III*/
          id: "aitos3c",
           tt: aitos3c,
        title: aitos3c,
        subtitle: añoc,
        category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",mant: "No",audioSrc: "/audio/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/ainterleccional.html?canto=aitos2c",
        sig: "/resucito/src/ainterleccional.html?canto=aitos4c",
// Contenido del lado izquierdo del canto,
    lizq: [
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},
            { line: am12, sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El Señor me ha enviado a evangelizar a los pobres,                   (Mi,,10)(Re,,181)(Mi,m,352)", sC: "tc"},
            { line: "a proclamar a los cautivos la libertad.                              (Do,,10)(Mi,,142)(La,m,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},
            { line: am2, sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El Señor me ha enviado a evangelizar a los pobres,            (Do,,10)(Mi,,178)(La,m,342)", sC: "tc"},
            { line: "a proclamar a los cautivos la libertad.                       (Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},
            { line: am32, sC: "ta as"}, 
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El Señor me ha enviado a evangelizar a los pobres,            (Do,,10)(Mi,,200)(La,m,346)", sC: "tc"},
            { line: "a proclamar a los cautivos la libertad.                       (Do,,10)(Mi,,152)(La,m,334)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},], lder: []}, // SIGUIENTE CANTO DEBAJO

   {  /* ALELUYA INTERLECCIONAL TIEMPO ORDINARIO SEMANA III*/
          id: "aitos4c",
           tt: aitos4c,
        title: aitos4c,
        subtitle: añoc,
        category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",mant: "No",audioSrc: "/audio/aleluyainterleccional.mp3",
        // propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/resucito/src/ainterleccional.html?canto=aitos3c",
        sig: "/resucito/src/ainterleccional.html?canto=aitos5c",
// Contenido del lado izquierdo del canto,
    lizq: [
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},
            { line: am12, sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El Señor me ha enviado a evangelizar a los pobres,                   (Mi,,10)(Re,,181)(Mi,m,352)", sC: "tc"},
            { line: "a proclamar a los cautivos la libertad.                              (Do,,10)(Mi,,142)(La,m,335)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},
            { line: am2, sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El Señor me ha enviado a evangelizar a los pobres,            (Do,,10)(Mi,,178)(La,m,342)", sC: "tc"},
            { line: "a proclamar a los cautivos la libertad.                       (Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},
            { line: am32, sC: "ta as"}, 
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El Señor me ha enviado a evangelizar a los pobres,            (Do,,10)(Mi,,200)(La,m,346)", sC: "tc"},
            { line: "a proclamar a los cautivos la libertad.                       (Do,,10)(Mi,,152)(La,m,334)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},], lder: []}, // SIGUIENTE CANTO DEBAJO


/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA XXII   ║
╚════════════════════════════════════════════════╝  */
   {
        id: "aitos23c",
        tt: "Aleluya Interleccional Semana XXIII",
        title: aitos23c,
        subtitle: añoc,
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
        ant: "/resucito/src/ainterleccional.html?canto=aitos22c",
        sig: "/resucito/src/ainterleccional.html?canto=aitos24c",
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
        
        ]},], lder: []}, // SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA XXIV   ║
╚════════════════════════════════════════════════╝  */


{
        id: "aitos24c",
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
        ant: "/resucito/src/ainterleccional.html?canto=aitos23c",
        sig: "/resucito/src/ainterleccional.html?canto=aitos25c",
// Contenido del lado izquierdo del canto,
    lizq: [

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},
            { line: am12, sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Jesús proclamaba el Evangelio del reino,           (Mi,m,20)(Re,,161)(Mi,m,364)", sC: "tc"},
            { line: "y curaba toda dolencia del pueblo.                 (Re,,10)(Mi,m,290)", sC: ""},
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



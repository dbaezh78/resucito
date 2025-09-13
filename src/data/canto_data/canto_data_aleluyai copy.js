// Aleluyas Segun Semana - // aleluyainterleccional
const allCantosData = [

/*  ╔═════════════════════════════════════════════════╗
    ║ALELUYA INTERLECCIONAL TIEMPO ORDINARIO SEMANA I ║
    ╚═════════════════════════════════════════════════╝ */
   {      id: "aitos1c",
           tt: aitos1,
        title: aitos1,
        subtitle: añoc+", "+aitas1acita,
        category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
        mant: "Si",audioSrc: "/audio/aleluyainterleccional.mp3",
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
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},

            { line: `${aitos1c1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aitos1c2} (Re,,163)(Mi,m,312)`, sC: ""},
            { line: `${aitos1c3} (Re,,10)(Mi,m,312)`, sC: ""},

            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},

            { line: `${aitos1c1}  (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aitos1c2}  (Do,,10)(Mi,,152)(La,m,330)`, sC: "bg"},
            { line: `${aitos1c3}  (Do,,10)(Mi,,152)(La,m,330)`, sC: "bg"},

            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},{ line: "", sC: "adb1"},]},

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},

            { line: `${aitos1c1}   (Do,,10)(Mi,,200)(La,m,346)`, sC: "tc"},
            { line: `${aitos1c2}   (Do,,10)(Mi,,152)(La,m,334)`, sC: "bg"},
            { line: `${aitos1c3}   (Do,,10)(Mi,,152)(La,m,334)`, sC: "bg"},

            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},], lder: []},
            // SIGUIENTE CANTO DEBAJO

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
        tt: "aitos23c",
        title: aitos23c,
        subtitle: añoc,
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
        ant: "/resucito/src/ainterleccional.html?canto=aitos22c",
        sig: "/resucito/src/ainterleccional.html?canto=aitos24c",
// Contenido del lado izquierdo del canto,
    lizq: [
            
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},
            { line: am12, sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Haz brillar tu rostro sobre tu siervo,           (Mi,,10)(Re,,112)(Mi,m,323)", sC: "tc"},
            { line: "enséñame tus decretos.                           (Re,,10)(Mi,m,72)(Re,,120)(Mi,m,208)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},
            { line: am2, sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Haz brillar tu rostro sobre tu siervo,             (Do,,10)(Mi,,178)(La,m,342)", sC: "tc"},
            { line: "enséñame tus decretos.                             (Do,,10)(Mi,,152)(La,m,330)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},
            { line: am32, sC: "ta as"}, 

            { line: "Haz brillar tu rostro sobre tu siervo,              (Do,,10)(Mi,,200)(La,m,346)", sC: "tc"},
            { line: "enséñame tus decretos.                              (Do,,10)(Mi,,152)(La,m,334)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},], lder: []}, // SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA XXIV   ║
╚════════════════════════════════════════════════╝  */
{
        id: "aitos24c",
        tt: aitos24c,
        title: aitos24c,
        subtitle: añoc,
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
            { line: "Dios estaba en Cristo reconciliando al mundo consigo,       (Mi,m,20)(Re,,175)(Mi,m,489)", sC: "tc"},
            { line: "y ha puesto en nosotros el mensaje de la reconciliación     (Re,,225)(Mi,m,497)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},
            { line: am2, sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Dios estaba en Cristo reconciliando al mundo consigo,         (Do,,10)(Mi,,175)(La,m,478)", sC: "tc"},
            { line: "y ha puesto en nosotros el mensaje de la reconciliación       (Do,,10)(Mi,,212)(La,m,493)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},
            { line: am32, sC: "ta as"},

            { line: "Dios estaba en Cristo reconciliando al mundo consigo,          (Mi,m,20)(La,m,175)(Mi,m,487)", sC: "tc"},
            { line: "y ha puesto en nosotros el mensaje de la reconciliación        (La,m,204)(Mi,m,503)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA INTERLECCIONAL SEMANA XXIII
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA XXIV   ║
╚════════════════════════════════════════════════╝  */
{
        id: "aitos25c",
        tt: aitos25c,
        title: aitos25c,
        subtitle: añoc,
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
        ant: "/resucito/src/ainterleccional.html?canto=aitos24c",
        sig: "/resucito/src/ainterleccional.html?canto=aitos26c",
// Contenido del lado izquierdo del canto,
    lizq: [

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},
            { line: am12, sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Jesucristo, siendo rico, se hizo pobre           (Mi,m,20)(Re,,85)(Mi,m,325)", sC: "tc"},
            { line: "para enriqueceros con su pobreza.                (Re,,163)(Mi,m,312)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},
            { line: am2, sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Jesucristo, siendo rico, se hizo pobre             (Do,,10)(Mi,,82)(La,m,311)", sC: "tc"},
            { line: "para enriqueceros con su pobreza.                  (Do,,10)(Mi,,193)(La,m,302)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},
            { line: am32, sC: "ta as"},

            { line: "Jesucristo, siendo rico, se hizo pobre              (Mi,m,20)(La,m,79)(Mi,m,331)", sC: "tc"},
            { line: "para enriqueceros con su pobreza.                   (La,m,163)(Mi,m,304)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},
        
        ]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA INTERLECCIONAL SEMANA XXIII
// SIGUIENTE CANTO DEBAJO
/*
╔════════════════════════════════════════════════╗
║           ALELUYA INTERLECCIONAL SEMANA XXIV   ║
╚════════════════════════════════════════════════╝  */
{
        id:   "aitos26c",
           tt: aitos26c,
        title: aitos26c,
        subtitle: añoc,
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
        ant: "/resucito/src/ainterleccional.html?canto=aitos24c",
        sig: "/resucito/src/ainterleccional.html?canto=aitos26c",
// Contenido del lado izquierdo del canto,
    lizq: [

            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},
            { line: am12, sC: "ta as bg"},  
            
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: `${aitcs1a1} (Mi,m,20)(Re,,85)(Mi,m,325)`, sC: "tc"},
            { line: `${aitcs1a2} (Re,,163)(Mi,m,312)`, sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},
        ]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},
            { line: am2, sC: "as bg"},  
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Jesucristo, siendo rico, se hizo pobre             (Do,,10)(Mi,,82)(La,m,311)", sC: "tc"},
            { line: "para enriqueceros con su pobreza.                  (Do,,10)(Mi,,193)(La,m,302)", sC: "bg"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA ... (Do,,10)", sC: "ta as"},
        ]},

                        { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},
            { line: am32, sC: "ta as"},

            { line: "Jesucristo, siendo rico, se hizo pobre              (Mi,m,20)(La,m,79)(Mi,m,331)", sC: "tc"},
            { line: "para enriqueceros con su pobreza.                   (La,m,163)(Mi,m,304)", sC: "bg"},
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



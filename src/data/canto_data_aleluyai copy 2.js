// Aleluyas Segun Semana - // aleluyainterleccional
// Aclamaciones al Evangelio AE(ae)
// Tiempo de Adviento (ta)
// Semana I (s1)

allCantosData.push(

     /*
       ╔═════════╗
       ║  AÑO A  ║
       ╚═════════╝

     ╔════════════════════════════════════════════════════════╗
     ║    ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA I   ║
     ╚════════════════════════════════════════════════════════╝  */
   {
          id: "aetas1a",
          tt: aetas1,
       title: aetas1,
    subtitle: añoa+", "+aetas1a,
    category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
        mant: "No",
    audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
         ant: "/",
         sig: "/src/index.html?canto=aetas2a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas1a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas1a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas1a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas1a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas1a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetas1a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA I
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA II     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas2a",
        tt: aetas2,
     title: aetas2,
  subtitle: añoa+", "+aetas2a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetas1a",
sig: "/src/index.html?canto=aetas3a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas2a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas2a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas2a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas2a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas2a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetas2a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA II
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA III    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas3a",
        tt: aetas3,
     title: aetas3,
  subtitle: añoa+", "+aetas3a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetas2a",
sig: "/src/index.html?canto=aetas4a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas3a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas3a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas3a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas3a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas3a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetas3a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA III
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA IV     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas4a",
        tt: aetas4,
     title: aetas4,
  subtitle: añoa+", "+aetas4a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetas3a",
sig: "/src/index.html?canto=aetns25dicmva",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas4a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas4a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetas4a3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas4a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas4a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetas4a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas4a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetas4a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetas4a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA I     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmva",
        tt: aetns25dicmv,
     title: aetns25dicmv,
  subtitle: añoa+", "+aetns25dicmva,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetas4a",
sig: "/src/index.html?canto=aetns25dicmma",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmva1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmva2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmva1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmva2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmva1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns25dicmva2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║     ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA I     ║
    ╚════════════════════════════════════════════════════════╝  */
   { 
        id: "aetns25dicmma",
        tt: aetns25dicmm,
     title: aetns25dicmm,
  subtitle: añoa+", "+aetns25dicmma,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns25dicmva",
sig: "/src/index.html?canto=aetns25dicmaa",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmma1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmma2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetns25dicmma3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmma1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmma2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetns25dicmma3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmma1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns25dicmma2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetns25dicmma3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA I     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmaa",
        tt: aetns25dicma,
     title: aetns25dicma,
  subtitle: añoa+", "+aetns25dicmaa,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns25dicmma",
sig: "/src/index.html?canto=aetns25dicmda",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmaa1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmaa2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmaa1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmaa2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmaa1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns25dicmaa2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA I     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmda",
        tt: aetns25dicmd,
     title: aetns25dicmd,
  subtitle: añoa+", "+aetns25dicmda,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns25dicmaa",
sig: "/src/index.html?canto=aetnssfa",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmda1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmda2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetns25dicmda3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmda1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmda2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetns25dicmda3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmda1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns25dicmda2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetns25dicmda3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
// SIGUIENTE CANTO DEBAJO
  /*╔══════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA I     ║
    ╚══════════════════════════════════════════════════════╝  */
   {
        id: "aetnssfa",
        tt: aetnssf,
     title: aetnssf,
  subtitle: añoa+", "+aetnssfa,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns25dicmda",
sig: "/src/index.html?canto=aetns1a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetnssfa1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetnssfa2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetnssfa3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetnssfa4} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetnssfa1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetnssfa2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetnssfa3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetnssfa4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetnssfa1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetnssfa2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetnssfa3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetnssfa4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA I       ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetns1a",
        tt: aetns1,
     title: aetns1,
  subtitle: añoa+", "+aetns1a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetnssfa",
sig: "/src/index.html?canto=aetns2a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns1a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns1a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetns1a3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns1a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns1a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetns1a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns1a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns1a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetns1a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA II      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetns2a",
        tt: aetns2,
     title: aetns2,
  subtitle: añoa+", "+aetns2a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns1a",
sig: "/src/index.html?canto=aetns6a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns2a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns2a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns2a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns2a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns2a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns2a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA II
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD EPIFANIA       ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetns6a",
        tt: aetns6,
     title: aetns6,
  subtitle: añoa+", "+aetns6a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns2a",
sig: "/src/index.html?canto=aetos1a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns6a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns6a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns6a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns6a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns6a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns6a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD EPIFANIA
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA I     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos1a",
        tt: aetos1,
     title: aetos1,
  subtitle: añoa+", "+aetos1a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns6a",
sig: "/src/index.html?canto=aetos2a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos1a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos1a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetos1a3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos1a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos1a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetos1a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos1a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos1a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos1a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA I
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA II    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos2a",
        tt: aetos2,
     title: aetos2,
  subtitle: añoa+", "+aetos2a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos1a",
sig: "/src/index.html?canto=aetos3a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos2a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos2a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos2a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos2a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos2a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos2a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA II
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA III   ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos3a",
        tt: aetos3,
     title: aetos3,
  subtitle: añoa+", "+aetos3a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos2a",
sig: "/src/index.html?canto=aetos4a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos3a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos3a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos3a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos3a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos3a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos3a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA III
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA IV    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos4a",
        tt: aetos4,
     title: aetos4,
  subtitle: añoa+", "+aetos4a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos3a",
sig: "/src/index.html?canto=aetos5a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos4a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos4a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos4a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos4a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos4a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos4a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA IV
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA V     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos5a",
        tt: aetos5,
     title: aetos5,
  subtitle: añoa+", "+aetos5a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos4a",
sig: "/src/index.html?canto=aetos6a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos5a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos5a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetos5a3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos5a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos5a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetos5a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos5a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos5a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos5a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA V
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA VI      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos6a",
        tt: aetos6,
     title: aetos6,
  subtitle: añoa+", "+aetos6a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos5a",
sig: "/src/index.html?canto=aetos7a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos6a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos6a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetos6a3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos6a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos6a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetos6a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos6a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos6a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos6a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VI
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA VII   ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos7a",
        tt: aetos7,
     title: aetos7,
  subtitle: añoa+", "+aetos7a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos6a",
sig: "/src/index.html?canto=aetos8a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos7a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos7a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetos7a3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos7a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos7a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: `${aetos7a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos7a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos7a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos7a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA VIII  ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos8a",
        tt: aetos8,
     title: aetos8,
  subtitle: añoa+", "+aetos8a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos7a",
sig: "/src/index.html?canto=aetos9a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos8a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos8a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos8a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos8a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "tc"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos8a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos8a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VIII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA IX    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos9a",
        tt: aetos9,
     title: aetos9,
  subtitle: añoa+", "+aetos9a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos8a",
sig: "/src/index.html?canto=aetos10a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos9a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos9a2} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetos9a3} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: `${aetos9a4} (Re,,181)(Mi,m,352)`, sC: ""},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos9a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos9a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: ""},
            { line: `${aetos9a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: ""},
            { line: `${aetos9a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: ""},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos9a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos9a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos9a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos9a4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA IX
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA X      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos10a",
        tt: aetos10,
     title: aetos10,
  subtitle: añoa+", "+aetos10a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos9a",
sig: "/src/index.html?canto=aetos11a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos10a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos10a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos10a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos10a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos10a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos10a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos10a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos10a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos10a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA X
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XI    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos11a",
        tt: aetos11,
     title: aetos11,
  subtitle: añoa+", "+aetos11a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos10a",
sig: "/src/index.html?canto=aetos12a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos11a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos11a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos11a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos11a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos11a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos11a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XI
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XII   ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos12a",
        tt: aetos12,
     title: aetos12,
  subtitle: añoa+", "+aetos12a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos11a",
sig: "/src/index.html?canto=aetos13a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos12a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos12a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos12a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos12a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos12a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos12a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos12a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos12a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos12a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XIII  ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos13a",
        tt: aetos13,
     title: aetos13,
  subtitle: añoa+", "+aetos13a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos12a",
sig: "/src/index.html?canto=aetos14a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos13a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos13a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos13a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos13a4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos13a5} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos13a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos13a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos13a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos13a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos13a5} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos13a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos13a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos13a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos13a4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos13a5} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XIV      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos14a",
        tt: aetos14,
     title: aetos14,
  subtitle: añoa+", "+aetos14a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos13a",
sig: "/src/index.html?canto=aetos15a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos14a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos14a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos14a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos14a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos14a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos14a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos14a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos14a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos14a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIV
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XV    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos15a",
        tt: aetos15,
     title: aetos15,
  subtitle: añoa+", "+aetos15a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos14a",
sig: "/src/index.html?canto=aetos16a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos15a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos15a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos15a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos15a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos15a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos15a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos15a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos15a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos15a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XV
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XVI      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos16a",
        tt: aetos16,
     title: aetos16,
  subtitle: añoa+", "+aetos16a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos15a",
sig: "/src/index.html?canto=aetos17a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos16a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos16a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos16a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos16a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos16a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos16a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetosvsa1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetosvsa2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetosvsa3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XVI

// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XVII      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos17a",
        tt: aetos17,
     title: aetos17,
  subtitle: añoa+", "+aetos17a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos16a",
sig: "/src/index.html?canto=aetos18a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos17a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos17a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos17a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos17a4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos17a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos17a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos17a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos17a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos17a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos17a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos17a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos17a4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XVII

// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XVIII      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos18a",
        tt: aetos18,
     title: aetos18,
  subtitle: añoa+", "+aetos18a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos17a",
sig: "/src/index.html?canto=aetos19a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos18a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos18a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos18a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos18a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos18a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos18a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XVIII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XIX      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos19a",
        tt: aetos19,
     title: aetos19,
  subtitle: añoa+", "+aetos19a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos18a",
sig: "/src/index.html?canto=aetos20a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos19a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos19a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos19a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos19a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos19a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos19a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIX
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XX      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos20a",
        tt: aetos20,
     title: aetos20,
  subtitle: añoa+", "+aetos20a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos19a",
sig: "/src/index.html?canto=aetos21a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos20a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos20a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos20a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos20a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos20a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos20a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XX
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXI      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos21a",
        tt: aetos21,
     title: aetos21,
  subtitle: añoa+", "+aetos21a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos20a",
sig: "/src/index.html?canto=aetos22a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos21a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos21a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos21a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos21a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos21a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos21a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos16a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos16a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos16a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXI
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXII      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos22a",
        tt: aetos22,
     title: aetos22,
  subtitle: añoa+", "+aetos22a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos21a",
sig: "/src/index.html?canto=aetos23a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos22a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos22a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos22a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos22a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos22a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos22a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos21a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos21a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos21a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIII      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos23a",
        tt: aetos23,
     title: aetos23,
  subtitle: añoa+", "+aetos23a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos22a",
sig: "/src/index.html?canto=aetos24a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos23a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos23a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos23a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos23a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos23a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos23a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos22a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos22a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos22a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIV      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos24a",
        tt: aetos24,
     title: aetos24,
  subtitle: añoa+", "+aetos24a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos23a",
sig: "/src/index.html?canto=aetos25a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos24a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos24a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos24a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos24a4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos24a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos24a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos24a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos24a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos24a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos24a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos24a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos24a4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIV
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXV      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos25a",
        tt: aetos25,
     title: aetos25,
  subtitle: añoa+", "+aetos25a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos24a",
sig: "/src/index.html?canto=aetos26a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos25a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos25a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos25a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos25a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos25a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos25a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXV
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVI      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos26a",
        tt: aetos26,
     title: aetos26,
  subtitle: añoa+", "+aetos26a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos25a",
sig: "/src/index.html?canto=aetos27a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos26a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos26a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos26a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos26a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos26a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos26a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos23a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos23a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos23a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVI
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVII      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos27a",
        tt: aetos27,
     title: aetos27,
  subtitle: añoa+", "+aetos27a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos26a",
sig: "/src/index.html?canto=aetos28a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos27a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos27a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos27a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos27a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos27a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos27a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos26a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos26a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos26a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVIII      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos28a",
        tt: aetos28,
     title: aetos28,
  subtitle: añoa+", "+aetos28a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos27a",
sig: "/src/index.html?canto=aetos29a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos28a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos28a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos28a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos28a4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos28a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos28a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos28a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos28a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos28a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos28a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos28a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos28a4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVIII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIX      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos29a",
        tt: aetos29,
     title: aetos29,
  subtitle: añoa+", "+aetos29a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos28a",
sig: "/src/index.html?canto=aetos30a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos29a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos29a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos29a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos29a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos29a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos29a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIX
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXX      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos30a",
        tt: aetos30,
     title: aetos30,
  subtitle: añoa+", "+aetos30a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos29a",
sig: "/src/index.html?canto=aetos31a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos30a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos30a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos30a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos30a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos30a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos30a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXX
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXI      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos31a",
        tt: aetos31,
     title: aetos31,
  subtitle: añoa+", "+aetos31a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos30a",
sig: "/src/index.html?canto=aetos32a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos31a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos31a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos31a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos31a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos31a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos31a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXI
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXII      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos32a",
        tt: aetos32,
     title: aetos32,
  subtitle: añoa+", "+aetos32a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos31a",
sig: "/src/index.html?canto=aetos33a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos32a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos32a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos32a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos32a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos32a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos32a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXIII      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos33a",
        tt: aetos33,
     title: aetos33,
  subtitle: añoa+", "+aetos33a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos32a",
sig: "/src/index.html?canto=aetos34a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos33a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos33a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos33a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos33a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos33a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos33a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos27a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos27a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos27a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIII
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXIV      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetos34a",
        tt: aetos34,
     title: aetos34,
  subtitle: añoa+", "+aetos34a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos33a",
sig: "/src/index.html?canto=aetosscsca",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos34a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos34a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos34a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos34a4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos34a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos34a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos34a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos34a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos34a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos34a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos34a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos34a4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIV
// SIGUIENTE CANTO DEBAJO
  /*╔═══════════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO Santísimo Cuerpo y Sangre de Cristo  ║
    ╚═══════════════════════════════════════════════════════════════╝  */
   {
        id: "aetosscsca",
        tt: aetosscsc,
     title: aetosscsc,
  subtitle: añoa+", "+aetosscsca,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetos34a",
sig: "/src/index.html?canto=aetosvsa",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetosscsca1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetosscsca2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetosscsca3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetosscsca4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetosscsca1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetosscsca2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetosscsca3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetosscsca4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetosscsca1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetosscsca2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetosscsca3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetosscsca4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO Santísimo Cuerpo y Sangre de Cristo
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO - SAGRADO CORAZÓN DE JESUS  ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetosvsa",
        tt: aetosvs,
     title: aetosvs,
  subtitle: añof+", "+aetosvsa,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetosscsca",
sig: "/src/index.html?canto=aetcs1a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetosvsa1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetosvsa2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetosvsa3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetosvsa1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetosvsa2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetosvsa3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos33a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos33a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos33a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXVI
// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA I      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetcs1a",
        tt: aetcs1,
     title: aetcs1,
  subtitle: añoa+", "+aetcs1a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetosvsa",
sig: "/src/index.html?canto=aetcs2a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: gS11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs1a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetcs1a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs1a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetcs1a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetcs1a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetcs1a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA I

// SIGUIENTE CANTO DEBAJO
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA II     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetcs2a",
        tt: aetcs2,
     title: aetcs2,
  subtitle: añoa+", "+aetcs2a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetcs1a",
sig: "/src/index.html?canto=aetcs3a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs2a1} (Mi,m,20)(Re,,131)(Mi,m,239)`, sC: "tc"},
            { line: `${aetcs2a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetcs2a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs2a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetcs2a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetcs2a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetcs2a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetcs2a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetcs2a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA II
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA III      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetcs3a",
        tt: aetcs3,
     title: aetcs3,
  subtitle: añoa+", "+aetcs3a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetcs2a",
sig: "/src/index.html?canto=aetcs4a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs3a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetcs3a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs3a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetcs3a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetcs3a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetcs3a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA III
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA IV      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetcs4a",
        tt: aetcs4,
     title: aetcs4,
  subtitle: añoa+", "+aetcs4a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetcs3a",
sig: "/src/index.html?canto=aetcs5a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs4a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetcs4a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetcs4a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs4a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetcs4a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetcs4a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetcs4a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetcs4a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetcs4a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA IV
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA V      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetcs5a",
        tt: aetcs5,
     title: aetcs5,
  subtitle: añoa+", "+aetcs5a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetcs4a",
sig: "/src/index.html?canto=aetcs6a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs5a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetcs5a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetcs5a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs5a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetcs5a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetcs5a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetcs5a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetcs5a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetcs5a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA V
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA VI     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetcs6a",
        tt: aetcs6,
     title: aetcs6,
  subtitle: añoa+", "+aetcs6a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetcs5a",
sig: "/src/index.html?canto=aetcsjsa",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs6a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetcs6a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetcs6a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetcs6a4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcs6a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetcs6a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetcs6a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetcs6a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetcs6a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetcs6a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetcs6a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetcs6a4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA VI
  /*╔════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO JUEVES SANTO    ║
    ╚════════════════════════════════════════════╝  */
   {
        id: "aetcsjsa",  //JUEVES SANTO - Misa de la cena del Señor
        tt: aetcsjs,
     title: aetcsjs,
  subtitle: añoa+", "+aetcsjsa,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetcs6a",
sig: "/src/index.html?canto=aetcsvsa",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcsjsa1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetcsjsa2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetcsjsa3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetcsjsa4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcsjsa1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetcsjsa2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetcsjsa3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetcsjsa4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetcsjsa1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetcsjsa2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetcsjsa3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetcsjsa4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA VII
  /*╔═════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO VIERNES SANTO    ║
    ╚═════════════════════════════════════════════╝  */
   {
        id: "aetcsvsa",
        tt: aetcsvs,
     title: aetcsvs,
  subtitle: añoa+", "+aetcsvsa,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetcsjsa",
sig: "/src/index.html?canto=aetpsssa",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcsvsa1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetcsvsa2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetcsvsa3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetcsvsa4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetcsvsa1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetcsvsa2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetcsvsa3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetcsvsa4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetcsvsa1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetcsvsa2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetcsvsa3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetcsvsa4} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA VII
  /*╔══════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO VIGILIA PASCUAL   ║
    ╚══════════════════════════════════════════════╝  */
   {
        id: "aetpsssa",
        tt: aetpsss,
     title: aetpsss,
  subtitle: añoa+", "+aetpsssa,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetcsvsa",
sig: "/src/index.html?canto=aetps1a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetpsssa1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
//            { line: `${aetpsssa2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetpsssa1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
//            { line: `${aetpsssa2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetpsssa1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
//            { line: `${aetpsssa2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII
  /*╔═════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA I   ║
    ╚═════════════════════════════════════════════════════╝  */
   {
        id: "aetps1a",
        tt: aetps1,
     title: aetps1,
  subtitle: añoa+", "+aetps1a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetpsssa",
sig: "/src/index.html?canto=aetps2a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps1a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetps1a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetps1a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps1a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetps1a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetps1a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetps1a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetps1a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetps1a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA I
  /*╔══════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA II AÑO A ║
    ╚══════════════════════════════════════════════════════════╝  */
   {
        id: "aetps2a",
        tt: aetps2,
     title: aetps2,
  subtitle: añoa+", "+aetps2a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetps1a",
sig: "/src/index.html?canto=aetps3a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps2a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetps2a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetps2a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps2a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetps2a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetps2a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
             { line: `${aetps2a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
             { line: `${aetps2a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
             { line: `${aetps2a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA II
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA III    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetps3a",
        tt: aetps3,
     title: aetps3,
  subtitle: añoa+", "+aetps3a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetps2a",
sig: "/src/index.html?canto=aetps4a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps3a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetps3a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps3a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetps3a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetps3a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetps3a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA III
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA IV     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetps4a",
        tt: aetps4,
     title: aetps4,
  subtitle: añoa+", "+aetps4a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetps3a",
sig: "/src/index.html?canto=aetps5a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps4a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetps4a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetps4a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps4a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetps4a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetps4a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetps4a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetps4a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetps4a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA IV
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA V      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetps5a",
        tt: aetps5,
     title: aetps5,
  subtitle: añoa+", "+aetps5a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetps4a",
sig: "/src/index.html?canto=aetps6a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps5a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetps5a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetps5a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps5a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetps5a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetps5a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetps5a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetps5a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetps5a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA V
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA VI     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetps6a",
        tt: aetps6,
     title: aetps6,
  subtitle: añoa+", "+aetps6a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetps5a",
sig: "/src/index.html?canto=aetps7a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps6a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetps6a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetps6a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetps6a4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps6a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetps6a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetps6a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetps6a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetps6a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetps6a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetps6a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetps6a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VI
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA VII    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetps7a",
        tt: aetps7,
     title: aetps7,
  subtitle: añoa+", "+aetps7a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetps6a",
sig: "/src/index.html?canto=aetps8a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps7a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetps7a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetps7a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetps7a4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps7a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetps7a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetps7a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetps7a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetps7a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetps7a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetps7a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetps7a4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO La Ascensión del Señor      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetpsasa",
        tt: aetpsas,
     title: aetpsas,
  subtitle: añoa+", "+aetpsasa,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetps6a",
sig: "/src/index.html?canto=aetps8a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetpsasa1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetpsasa2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetpsasa3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetpsasa4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetpsasa1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetpsasa2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetpsasa3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetpsasa4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetpsasa1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetpsasa2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetpsasa3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetpsasa4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO DOMINGO DE PENTECOSTES      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetps8a",
        tt: aetps8a,
     title: aetps8a,
  subtitle: añoa+", "+aetps8a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetps7a",
sig: "/src/index.html?canto=aetps9a",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps8a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetps8a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetps8a3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps8a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetps8a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetps8a3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetps8a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetps8a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetps8a3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VIII
  /*╔════════════════════════════════════════════════════════╗
    ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA IX     ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetps9a",   //La Santísima Trinidad
        tt: aetps9,
     title: aetps9,
  subtitle: añoa+", "+aetps9a,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetps8a",
               sig: "/src/index.html?canto=aetas1b",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps9a1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetps9a2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetps9a1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetps9a2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetps9a1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetps9a2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA IX

/*
       ╔═════════╗
       ║  AÑO B  ║
       ╚═════════╝

     ╔══════════════════════════════════════════════════════════╗
     ║                                                          ║
     ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA I AÑO B  ║
     ║                                                          ║
     ╚══════════════════════════════════════════════════════════╝  */
   {
        id: "aetas1b",
        tt: aetas1,
     title: aetas1,
  subtitle: añob+", "+aetas1b,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetps9a",
               sig: "/src/index.html?canto=aetas2b",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas1b1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas1b2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas1b1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas1b2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas1b1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetas1b2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA I
  /*╔════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA II AÑO B  ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas2b",
        tt: aetas2,
     title: aetas2,
  subtitle: añob+", "+aetas2b,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetas1b",
               sig: "/src/index.html?canto=aetas3b",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas2b1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas2b2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas2b1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas2b2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas2b1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetas2b2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA II
  /*╔════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA III AÑO B  ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas3b",
        tt: aetas3,
     title: aetas3,
  subtitle: añob+", "+aetas3b,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetas2b",
               sig: "/src/index.html?canto=aetas4b",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas3b1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas3b2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas3b1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas3b2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas3b1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetas3b2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA III
  /*╔════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA IV AÑO B  ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas4b",
        tt: aetas4,
     title: aetas4,
  subtitle: añob+", "+aetas4b,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetas3b",
               sig: "/src/index.html?canto=aetns25dicmvb",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas4b1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas4b2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas4b1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas4b2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas4b1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetas4b2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
  /*╔════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO 25 DICIEMBRE - NAVIDAD AÑO B  ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmvb",
        tt: aetns25dicmv,
     title: aetns25dicmv,
  subtitle: añob+", "+aetns25dicmvb,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetas4b",
               sig: "/src/index.html?canto=aetns25dicmmb",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmvb1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmvb2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmvb1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmvb2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmvb1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns25dicmvb2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV
  /*╔══════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD MISA MEDIO DIA AÑO B ║
    ╚══════════════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmmb",
        tt: aetns25dicmm,
     title: aetns25dicmm,
  subtitle: añob+", "+aetns25dicmmb,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetns25dicmvb",
               sig: "/src/index.html?canto=aetns25dicmab",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmmb1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmmb2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmmb1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmmb2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmmb1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns25dicmmb2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV
  /*╔═══════════════════════════════════════════════════════╗
    ║    ACLAMACIÓN DEL EVANGELIO MISA DE LA AURORA AÑO B   ║
    ╚═══════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmab",
        tt: aetns25dicma,
     title: aetns25dicma,
  subtitle: añob+", "+aetns25dicmab,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetns25dicmmb",
               sig: "/src/index.html?canto=aetns25dicmdb",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmab1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmab2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmab1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmab2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmab1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns25dicmab2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV
  /*╔════════════════════════════════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO 25 DICIEMBRE - TIEMPO NAVIDAD SEMANA IV AÑO B - MISA DEL DIA  ║
    ╚════════════════════════════════════════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmdb",
        tt: aetns25dicmd,
     title: aetns25dicmd,
  subtitle: añob+", "+aetns25dicmdb,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetns25dicmab",
               sig: "/src/index.html?canto=aetnssfb",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmdb1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmdb2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmdb1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmdb2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmdb1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetns25dicmdb2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV
  /*╔══════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO Fiesta de la Sagrada Familia    ║
    ╚══════════════════════════════════════════════════════════╝  */
   {
        id: "aetnssfb",
        tt: aetnssf,
     title: aetnssf,
  subtitle: añob+", "+aetnssfb,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetns25dicmdb",
               sig: "/src/index.html?canto=aetns5b",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetnssfb1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetnssfb2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetnssfb1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetnssfb2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetnssfb1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetnssfb2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV


/*
       ╔═════════╗
       ║  AÑO C  ║
       ╚═════════╝

  /*╔════════════════════════════════════════════════════════╗
    ║   ALELUYA INTERLECCIONAL TIEMPO ADVIENTO SEMANA I      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas1c",
        tt: aetas1,
     title: aetas1,
  subtitle: añoc+", "+aetas1c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "/audio/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC

ant: "/src/index.html?canto=aetas0c",
sig: "/src/index.html?canto=aetas2c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas1c1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas1c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas1c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas1c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas1c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas1c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA I
// SIGUIENTE CANTO DEBAJO

  /*╔════════════════════════════════════════════════════════╗
    ║   ALELUYA INTERLECCIONAL TIEMPO ADVIENTO SEMANA II      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas2c",
        tt: aetas2,
     title: aetas2,
  subtitle: añoc+", "+aetas2c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "/audio/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetas1c",
sig: "/src/index.html?canto=aetas3c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas2c1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas2c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas2c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas2c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas2c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas2c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA II
// SIGUIENTE CANTO DEBAJO

  /*╔════════════════════════════════════════════════════════╗
    ║   ALELUYA INTERLECCIONAL TIEMPO ADVIENTO SEMANA III    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas3c",
        tt: aetas3,
     title: aetas3,
  subtitle: añoc+", "+aetas3c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetas2c",
sig: "/src/index.html?canto=aetas4c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas3c1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas3c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas3c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas3c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas3c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas3c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA III
// SIGUIENTE CANTO DEBAJO

  /*╔════════════════════════════════════════════════════════╗
    ║   ALELUYA INTERLECCIONAL TIEMPO ADVIENTO SEMANA IV      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetas4c",
        tt: aetas4,
     title: aetas4,
  subtitle: añoc+", "+aetas4c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetas3c",
sig: "/src/index.html?canto=aetas5c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas4c1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetas4c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetas4c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas4c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetas4c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetas4c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
// SIGUIENTE CANTO DEBAJO

  /*╔════════════════════════════════════════════════════════╗
    ║       25 DE DICIEMBRE, NAVIDAD MISA DE LA VIGILIA      ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmvc",
        tt: aetns25dicmv,
     title: aetns25dicmv,
  subtitle: añoc+", "+aetns25dicmvc,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetas4c",
sig: "/src/index.html?canto=aetns25dicmmc",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmvc1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmvc2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmvc1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmvc2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmvc1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmvc2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
// SIGUIENTE CANTO DEBAJO

  /*╔═══════════════════════════════════════════════════════╗
    ║ 25 DE DICIEMBRE | MISA DE LA MEDIA NOCHE              ║
    ╚═══════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmmc",
        tt: aetns25dicmm,
     title: aetns25dicmm,
  subtitle: añoc+", "+aetns25dicmmc,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns25dicmvc",
sig: "/src/index.html?canto=aetns25dicmac",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmmc1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmmc2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetns25dicmmc3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmmc1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmmc2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetns25dicmmc3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmmc1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmmc2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetns25dicmmc3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
// SIGUIENTE CANTO DEBAJO


  /*╔════════════════════════════════════════════════════════╗
    ║ 25 DE DICIEMBRE | Misa de la aurora                    ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmac",
        tt: aetns25dicma,
     title: aetns25dicma,
  subtitle: añoc+", "+aetns25dicmac,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns25dicmmc",
sig: "/src/index.html?canto=aetns25dicmdc",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmac1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmac2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmac1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmac2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmac1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmac2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
// SIGUIENTE CANTO DEBAJO

  /*╔═══════════════════════════════════════════════════════╗
    ║ 25 DE DICIEMBRE | Aleluya - Misa del día              ║
    ╚═══════════════════════════════════════════════════════╝  */
   {
        id: "aetns25dicmdc",
        tt: aetns25dicmd,
     title: aetns25dicmd,
  subtitle: añoc+", "+aetns25dicmdc,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns25dicmac",
sig: "/src/index.html?canto=aetnssfc",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "expanded",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmdc1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetns25dicmdc2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetns25dicmdc3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmdc1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmdc2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetns25dicmdc3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetns25dicmdc1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetns25dicmdc2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetns25dicmdc3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
// SIGUIENTE CANTO DEBAJO


//********************************************************************************************** */
//********************************************************************************************** */
//********************************************************************************************** */
//********************************************************************************************** */

  /*╔════════════════════════════════════════════════════════╗
#VALUE!
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetnssfc",
        tt: aetnssf,
     title: aetnssf,
  subtitle: añoc+", "+aetnssfc,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetns25dicmac",
sig: "/src/index.html?canto=aetas5c",

    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetnssfc1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetnssfc2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetnssfc3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetnssfc4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetnssfc1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetnssfc2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetnssfc3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetnssfc4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetnssfc1} (Mi,m,20)(La,,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetnssfc2} (La,,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetnssfc3} (La,,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetnssfc4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
// SIGUIENTE CANTO DEBAJO





  /*╔════════════════════════════════════════════════════════╗
    ║ 1 DE ENERO | SANTA MARIA MADRE DE DIOS                 ║
    ╚════════════════════════════════════════════════════════╝  */
   {
        id: "aetn1ec",
        tt: aetn1e,
     title: aetn1e,
  subtitle: añoc+", "+aetn1e,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "Si",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
ant: "/src/index.html?canto=aetnssfc",
sig: "/src/index.html?canto=aetas5c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetn1ec1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetn1ec2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetn1ec3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetn1ec1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetn1ec2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetn1ec3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetn1ec1} (Mi,m,20)(La,,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetn1ec2} (La,,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetn1ec3} (La,,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
// SIGUIENTE CANTO DEBAJO




//********************************************************************************************** */
//********************************************************************************************** */
//********************************************************************************************** */
//********************************************************************************************** */

























  /*╔════════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIV AÑO C    ║
    ╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos24c",
        tt: aetos24,
     title: aetos24,
  subtitle: añoc+", "+aetos24c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos23c",
               sig: "/src/index.html?canto=aetos25c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos24c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos24c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos24c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos24c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",    //collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos24c1} (Mi,m,20)(La,m,192)(Mi,m,326)`, sC: "tc"},
            { line: `${aetos24c2} (La,m,151)(Mi,m,292)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXV




  /*╔═════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXV AÑO C  ║
    ╚═════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos25c",
        tt: aetos25,
     title: aetos25,
  subtitle: añoc+", "+aetos25c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos24c",
               sig: "/src/index.html?canto=aetos26c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos25c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos25c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos25c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos25c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",    //collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos25c1} (Mi,m,20)(La,m,192)(Mi,m,326)`, sC: "tc"},
            { line: `${aetos25c2} (La,m,151)(Mi,m,292)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXV

  /*╔══════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVI AÑO C  ║
    ╚══════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos26c",
        tt: aetos26,
     title: aetos26,
  subtitle: añoc+", "+aetos26c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos25c",
               sig: "/src/index.html?canto=aetos27c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos26c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos26c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos26c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos26c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos26c1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos26c2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVI

  /*╔═══════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVII AÑO C  ║
    ╚═══════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos27c",
        tt: aetos27,
     title: aetos27,
  subtitle: añoc+", "+aetos27c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos26c",
               sig: "/src/index.html?canto=aetos28c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos27c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos27c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos27c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos27c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos27c1} (Mi,m,20)(La,m,178)(Mi,m,404)`, sC: "tc"},
            { line: `${aetos27c2} (La,m,163)(Mi,m,532)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVII

  /*╔═══════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVIII AÑO C ║
    ╚═══════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos28c",
        tt: aetos28,
     title: aetos28,
  subtitle: añoc+", "+aetos28c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos27c",
               sig: "/src/index.html?canto=aetos29c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos28c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos28c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos28c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos28c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos28c1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos28c2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVIII


  /*╔═══════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIX AÑO C   ║
    ╚═══════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos29c",
        tt: aetos29,
     title: aetos29,
  subtitle: añoc+", "+aetos29c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos28c",
               sig: "/src/index.html?canto=aetos30c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos29c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos29c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos29c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos29c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos29c1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos29c2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIX


  /*╔═════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXX AÑO C  ║
    ╚═════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos30c",
        tt: aetos30,
     title: aetos30,
  subtitle: añoc+", "+aetos30c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos29c",
               sig: "/src/index.html?canto=aetos31c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos30c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos30c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos30c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos30c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos30c1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos30c2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXX

  /*╔═════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXI AÑO C ║
    ╚═════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos31c",
        tt: aetos31,
     title: aetos31,
  subtitle: añoc+", "+aetos31c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos30c",
               sig: "/src/index.html?canto=aetos32c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos31c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos31c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetos31c3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos31c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos31c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetos31c3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos31c1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos31c2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetos31c3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXI

  /*╔══════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXII AÑO C ║
    ╚══════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos32c",
        tt: aetos32,
     title: aetos32,
  subtitle: añoc+", "+aetos32c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos31c",
               sig: "/src/index.html?canto=aetos33c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos32c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos32c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos32c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos32c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos32c1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos32c2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXII

  /*╔════════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXIII AÑO C  ║
    ╚════════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos33c",
        tt: aetos33,
     title: aetos33,
  subtitle: añoc+", "+aetos33c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos32c",
               sig: "/src/index.html?canto=aetos34c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos33c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos33c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos33c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos33c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos33c1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos33c2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIII

  /*╔═══════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXIV AÑO C  ║
    ╚═══════════════════════════════════════════════════════════════╝  */
   {
        id: "aetos34c",
        tt: aetos34,
     title: aetos34,
  subtitle: añoc+", "+aetos34c,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos33c",
               sig: "/src/index.html?canto=aetosscscc",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos34c1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetos34c2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetos34c1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetos34c2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetos34c1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetos34c2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIV

  /*╔══════════════════════════════════════════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO TIEMPO SANTISIMO CUERPO Y SANGRE DE NUESTRO SEÑOR JESUCRISTO AÑO C  ║
    ╚══════════════════════════════════════════════════════════════════════════════════════════════╝  */
   {
        id: "aetosscscc",
        tt: aetosscsc,
     title: aetosscsc,
  subtitle: añoc+", "+aetosscscc,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetos33c",
               sig: "/src/index.html?canto=aetos35c",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetosscscc1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetosscscc2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetosscscc3} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: `${aetosscscc4} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetosscscc1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetosscscc2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetosscscc3} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: `${aetosscscc4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetosscscc1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetosscscc2} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetosscscc3} (La,m,151)(Mi,m,252)`, sC: "bg"},
            { line: `${aetosscscc4} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},
    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIV






// FIESTAS DEL SEÑOR
  /*╔═══════════════════════════════════════════════════════════╗
    ║ ACLAMACIÓN DEL EVANGELIO 14 DE SEPTIEMBRE EXALTACIÓN ✟    ║
    ╚═══════════════════════════════════════════════════════════╝  */
   {
        id: "aetfs14s",
        tt: aetfs14,
     title: aetfs14,
  subtitle: añof+", "+aetfs14s,
  category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
      mant: "No",
  audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
// Nueva propiedad para la velocidad de desplazamiento
 scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/src/index.html?canto=aetas1a",
               sig: "/src/index.html?canto=aetas1b",
// Vaciando contenido,
    lizq: [
            { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
       triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
            { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},{ line: "", sC: "adb1"},
            { line: `${aetfs14s1} (Mi,m,20)(Re,,181)(Mi,m,352)`, sC: "tc"},
            { line: `${aetfs14s2} (Re,,181)(Mi,m,352)`, sC: "bg"},
            { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
       triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
            { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},
            { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},{ line: "", sC: "adb1"},
            { line: `${aetfs14s1} (Do,,10)(Mi,,178)(La,m,342)`, sC: "tc"},
            { line: `${aetfs14s2} (Do,,151)(Mi,,252)(La,m,350)`, sC: "bg"},
            { line: "ALELUYA ... (Do,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},
            { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
       triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
            { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},{ line: "", sC: "adb1"},
            { line: `${aetfs14s1} (Mi,m,20)(La,m,178)(Mi,m,342)`, sC: "tc"},
            { line: `${aetfs14s2} (La,m,151)(Mi,m,366)`, sC: "bg"},
            { line: "ALELUYA ... (Mi,,21)", sC: "ta as"},{ line: "", sC: "adb1"},]},

    ], lder: []}, // ULTIMA LINEA DEL CANTO: TIEMPO FIESTA 14 de septiembre LA EXALTACIÓN DE LA SANTA CRUZ






); //LLAVE DE CIERRE DEL CANTO

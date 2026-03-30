          // Aleluyas Segun Semana - // aleluyainterleccional
          // Aclamaciones al Evangelio AE(ae)
          // Tiempo de Adviento (ta)
          // Semana I (s1)


          // Si la variable no existe todavía, la creamos como un array vacío
          if (typeof allCantosData === 'undefined') {
          window.allCantosData = [];
          }

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
               ant: "/index-ae.html",
               sig: "/src/index.html?canto=aetas2a",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas1a1}`, sC: "tc"},
                    { line: `${aetas1a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                     { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas1a1}`, sC: "tc"},
                    { line: `${aetas1a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas1a1}`, sC: "tc"},
                    { line: `${aetas1a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA II   ║
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas2a1}`, sC: "tc"},
                    { line: `${aetas2a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas2a1}`, sC: "tc"},
                    { line: `${aetas2a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas2a1}`, sC: "tc"},
                    { line: `${aetas2a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA II
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA III  ║
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas3a1}`, sC: "tc"},
                    { line: `${aetas3a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas3a1}`, sC: "tc"},
                    { line: `${aetas3a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas3a1}`, sC: "tc"},
                    { line: `${aetas3a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA III
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA IV   ║
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas4a1}`, sC: "tc"},
                    { line: `${aetas4a2}`, sC: ""},
                    { line: `${aetas4a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas4a1}`, sC: "tc"},
                    { line: `${aetas4a2}`, sC: "tc"},
                    { line: `${aetas4a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas4a1}`, sC: "tc"},
                    { line: `${aetas4a2}`, sC: "bg"},
                    { line: `${aetas4a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmva1}`, sC: "tc"},
                    { line: `${aetns25dicmva2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmva1}`, sC: "tc"},
                    { line: `${aetns25dicmva2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmva1}`, sC: "tc"},
                    { line: `${aetns25dicmva2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmma1}`, sC: "tc"},
                    { line: `${aetns25dicmma2}`, sC: ""},
                    { line: `${aetns25dicmma3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmma1}`, sC: "tc"},
                    { line: `${aetns25dicmma2}`, sC: "tc"},
                    { line: `${aetns25dicmma3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmma1}`, sC: "tc"},
                    { line: `${aetns25dicmma2}`, sC: "bg"},
                    { line: `${aetns25dicmma3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmaa1}`, sC: "tc"},
                    { line: `${aetns25dicmaa2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmaa1}`, sC: "tc"},
                    { line: `${aetns25dicmaa2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmaa1}`, sC: "tc"},
                    { line: `${aetns25dicmaa2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmda1}`, sC: "tc"},
                    { line: `${aetns25dicmda2}`, sC: ""},
                    { line: `${aetns25dicmda3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmda1}`, sC: "tc"},
                    { line: `${aetns25dicmda2}`, sC: "tc"},
                    { line: `${aetns25dicmda3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmda1}`, sC: "tc"},
                    { line: `${aetns25dicmda2}`, sC: "bg"},
                    { line: `${aetns25dicmda3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
          // SIGUIENTE CANTO DEBAJO


             /*╔══════════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SAGRADA FAMILIA AÑO A  ║
          ╚══════════════════════════════════════════════════════════════════╝  */
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
          sig: "/src/index.html?canto=aetn1ea",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetnssfa1}`, sC: "tc"},
                    { line: `${aetnssfa2}`, sC: ""},
                    { line: `${aetnssfa3}`, sC: ""},
                    { line: `${aetnssfa4}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetnssfa1}`, sC: "tc"},
                    { line: `${aetnssfa2}`, sC: "tc"},
                    { line: `${aetnssfa3}`, sC: "tc"},
                    { line: `${aetnssfa4}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetnssfa1}`, sC: "tc"},
                    { line: `${aetnssfa2}`, sC: "bg"},
                    { line: `${aetnssfa3}`, sC: "bg"},
                    { line: `${aetnssfa4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
          // SIGUIENTE CANTO DEBAJO

             /*╔══════════════════════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN EVANGELIO TIEMPO NAVIDAD ALELUYA HB 1, 1-2 SEMANA 1 AÑO A    ║
          ║  SANTA MARIA MADRE DE DIOS                                               ║
          ╚══════════════════════════════════════════════════════════════════════════╝  */
          {
               id: "aetn1ea",
               tt: aetn1e,
               title: aetn1e,
          subtitle: añoa+", "+aetn1ea,
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetn1ea1}`, sC: "tc"},
                    { line: `${aetn1ea2}`, sC: ""},
                    { line: `${aetn1ea3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetn1ea1}`, sC: "tc"},
                    { line: `${aetn1ea2}`, sC: "tc"},
                    { line: `${aetn1ea3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetn1ea1}`, sC: "tc"},
                    { line: `${aetn1ea2}`, sC: "bg"},
                    { line: `${aetn1ea3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA II    ║
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
          ant: "/src/index.html?canto=aetn1ea",
          sig: "/src/index.html?canto=aetn6ea",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns2a1}`, sC: "tc"},
                    { line: `${aetns2a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns2a1}`, sC: "tc"},
                    { line: `${aetns2a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns2a1}`, sC: "tc"},
                    { line: `${aetns2a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA II
          // SIGUIENTE CANTO DEBAJO


        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD EPIFANIA     ║
          ╚════════════════════════════════════════════════════════╝  */
          {         
               id: "aetn6ea",
               tt: aetn6e,
               title: aetn6e,
          subtitle: añoa+", "+aetn6ea,
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetn6ea1}`, sC: "tc"},
                    { line: `${aetn6ea2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetn6ea1}`, sC: "tc"},
                    { line: `${aetn6ea2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetn6ea1}`, sC: "tc"},
                    { line: `${aetn6ea2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD EPIFANIA
          // SIGUIENTE CANTO DEBAJO

        /*╔═════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA I  AÑO A ║
          ║   EL BAUTISMO DEL SEÑOR                                     ║
          ╚═════════════════════════════════════════════════════════════╝  */
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
          ant: "/src/index.html?canto=aetn6ea",
          sig: "/src/index.html?canto=aetos2a",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos1a1}`, sC: "tc"},
                    { line: `${aetos1a2}`, sC: ""},
                    { line: `${aetos1a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos1a1}`, sC: "tc"},
                    { line: `${aetos1a2}`, sC: "tc"},
                    { line: `${aetos1a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos1a1}`, sC: "tc"},
                    { line: `${aetos1a2}`, sC: "bg"},
                    { line: `${aetos1a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA II  ║
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos2a1}`, sC: "tc"},
                    { line: `${aetos2a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos2a1}`, sC: "tc"},
                    { line: `${aetos2a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos2a1}`, sC: "tc"},
                    { line: `${aetos2a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA II
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos3a1}`, sC: "tc"},
                    { line: `${aetos3a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos3a1}`, sC: "tc"},
                    { line: `${aetos3a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos3a1}`, sC: "tc"},
                    { line: `${aetos3a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA III
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA IV  ║
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos4a1}`, sC: "tc"},
                    { line: `${aetos4a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos4a1}`, sC: "tc"},
                    { line: `${aetos4a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos4a1}`, sC: "tc"},
                    { line: `${aetos4a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA IV
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos5a1}`, sC: "tc"},
                    { line: `${aetos5a2}`, sC: ""},
                    { line: `${aetos5a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos5a1}`, sC: "tc"},
                    { line: `${aetos5a2}`, sC: "tc"},
                    { line: `${aetos5a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos5a1}`, sC: "tc"},
                    { line: `${aetos5a2}`, sC: "bg"},
                    { line: `${aetos5a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA V
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos6a1}`, sC: "tc"},
                    { line: `${aetos6a2}`, sC: ""},
                    { line: `${aetos6a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos6a1}`, sC: "tc"},
                    { line: `${aetos6a2}`, sC: "tc"},
                    { line: `${aetos6a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos6a1}`, sC: "tc"},
                    { line: `${aetos6a2}`, sC: "bg"},
                    { line: `${aetos6a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VI
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos7a1}`, sC: "tc"},
                    { line: `${aetos7a2}`, sC: ""},
                    { line: `${aetos7a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos7a1}`, sC: "tc"},
                    { line: `${aetos7a2}`, sC: "tc"},
                    { line: `${aetos7a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos7a1}`, sC: "tc"},
                    { line: `${aetos7a2}`, sC: "bg"},
                    { line: `${aetos7a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VII
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos8a1}`, sC: "tc"},
                    { line: `${aetos8a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos8a1}`, sC: "tc"},
                    { line: `${aetos8a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos8a1}`, sC: "tc"},
                    { line: `${aetos8a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VIII
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos9a1}`, sC: "tc"},
                    { line: `${aetos9a2}`, sC: ""},
                    { line: `${aetos9a3}`, sC: ""},
                    { line: `${aetos9a4}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos9a1}`, sC: "tc"},
                    { line: `${aetos9a2}`, sC: ""},
                    { line: `${aetos9a3}`, sC: ""},
                    { line: `${aetos9a4}`, sC: ""},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos9a1}`, sC: "tc"},
                    { line: `${aetos9a2}`, sC: "bg"},
                    { line: `${aetos9a3}`, sC: "bg"},
                    { line: `${aetos9a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA IX
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos10a1}`, sC: "tc"},
                    { line: `${aetos10a2}`, sC: "bg"},
                    { line: `${aetos10a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos10a1}`, sC: "tc"},
                    { line: `${aetos10a2}`, sC: "bg"},
                    { line: `${aetos10a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos10a1}`, sC: "tc"},
                    { line: `${aetos10a2}`, sC: "bg"},
                    { line: `${aetos10a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA X
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos11a1}`, sC: "tc"},
                    { line: `${aetos11a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos11a1}`, sC: "tc"},
                    { line: `${aetos11a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos11a1}`, sC: "tc"},
                    { line: `${aetos11a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XI
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos12a1}`, sC: "tc"},
                    { line: `${aetos12a2}`, sC: "bg"},
                    { line: `${aetos12a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos12a1}`, sC: "tc"},
                    { line: `${aetos12a2}`, sC: "bg"},
                    { line: `${aetos12a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos12a1}`, sC: "tc"},
                    { line: `${aetos12a2}`, sC: "bg"},
                    { line: `${aetos12a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XII
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos13a1}`, sC: "tc"},
                    { line: `${aetos13a2}`, sC: "bg"},
                    { line: `${aetos13a3}`, sC: "bg"},
                    { line: `${aetos13a4}`, sC: "bg"},
                    { line: `${aetos13a5}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos13a1}`, sC: "tc"},
                    { line: `${aetos13a2}`, sC: "bg"},
                    { line: `${aetos13a3}`, sC: "bg"},
                    { line: `${aetos13a4}`, sC: "bg"},
                    { line: `${aetos13a5}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos13a1}`, sC: "tc"},
                    { line: `${aetos13a2}`, sC: "bg"},
                    { line: `${aetos13a3}`, sC: "bg"},
                    { line: `${aetos13a4}`, sC: "bg"},
                    { line: `${aetos13a5}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIII
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos14a1}`, sC: "tc"},
                    { line: `${aetos14a2}`, sC: "bg"},
                    { line: `${aetos14a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos14a1}`, sC: "tc"},
                    { line: `${aetos14a2}`, sC: "bg"},
                    { line: `${aetos14a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos14a1}`, sC: "tc"},
                    { line: `${aetos14a2}`, sC: "bg"},
                    { line: `${aetos14a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIV
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos15a1}`, sC: "tc"},
                    { line: `${aetos15a2}`, sC: "bg"},
                    { line: `${aetos15a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos15a1}`, sC: "tc"},
                    { line: `${aetos15a2}`, sC: "bg"},
                    { line: `${aetos15a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos15a1}`, sC: "tc"},
                    { line: `${aetos15a2}`, sC: "bg"},
                    { line: `${aetos15a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XV
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos16a1}`, sC: "tc"},
                    { line: `${aetos16a2}`, sC: "bg"},
                    { line: `${aetos16a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos16a1}`, sC: "tc"},
                    { line: `${aetos16a2}`, sC: "bg"},
                    { line: `${aetos16a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetosvsa1}`, sC: "tc"},
                    { line: `${aetosvsa2}`, sC: "bg"},
                    { line: `${aetosvsa3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos17a1}`, sC: "tc"},
                    { line: `${aetos17a2}`, sC: "bg"},
                    { line: `${aetos17a3}`, sC: "bg"},
                    { line: `${aetos17a4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos17a1}`, sC: "tc"},
                    { line: `${aetos17a2}`, sC: "bg"},
                    { line: `${aetos17a3}`, sC: "bg"},
                    { line: `${aetos17a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos17a1}`, sC: "tc"},
                    { line: `${aetos17a2}`, sC: "bg"},
                    { line: `${aetos17a3}`, sC: "bg"},
                    { line: `${aetos17a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos18a1}`, sC: "tc"},
                    { line: `${aetos18a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos18a1}`, sC: "tc"},
                    { line: `${aetos18a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos18a1}`, sC: "tc"},
                    { line: `${aetos18a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos19a1}`, sC: "tc"},
                    { line: `${aetos19a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos19a1}`, sC: "tc"},
                    { line: `${aetos19a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos19a1}`, sC: "tc"},
                    { line: `${aetos19a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos20a1}`, sC: "tc"},
                    { line: `${aetos20a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos20a1}`, sC: "tc"},
                    { line: `${aetos20a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos20a1}`, sC: "tc"},
                    { line: `${aetos20a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos21a1}`, sC: "tc"},
                    { line: `${aetos21a2}`, sC: "bg"},
                    { line: `${aetos21a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos21a1}`, sC: "tc"},
                    { line: `${aetos21a2}`, sC: "bg"},
                    { line: `${aetos21a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos16a1}`, sC: "tc"},
                    { line: `${aetos16a2}`, sC: "bg"},
                    { line: `${aetos16a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos22a1}`, sC: "tc"},
                    { line: `${aetos22a2}`, sC: "bg"},
                    { line: `${aetos22a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos22a1}`, sC: "tc"},
                    { line: `${aetos22a2}`, sC: "bg"},
                    { line: `${aetos22a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos21a1}`, sC: "tc"},
                    { line: `${aetos21a2}`, sC: "bg"},
                    { line: `${aetos21a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos23a1}`, sC: "tc"},
                    { line: `${aetos23a2}`, sC: "bg"},
                    { line: `${aetos23a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos23a1}`, sC: "tc"},
                    { line: `${aetos23a2}`, sC: "bg"},
                    { line: `${aetos23a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos22a1}`, sC: "tc"},
                    { line: `${aetos22a2}`, sC: "bg"},
                    { line: `${aetos22a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos24a1}`, sC: "tc"},
                    { line: `${aetos24a2}`, sC: "bg"},
                    { line: `${aetos24a3}`, sC: "bg"},
                    { line: `${aetos24a4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos24a1}`, sC: "tc"},
                    { line: `${aetos24a2}`, sC: "bg"},
                    { line: `${aetos24a3}`, sC: "bg"},
                    { line: `${aetos24a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos24a1}`, sC: "tc"},
                    { line: `${aetos24a2}`, sC: "bg"},
                    { line: `${aetos24a3}`, sC: "bg"},
                    { line: `${aetos24a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos25a1}`, sC: "tc"},
                    { line: `${aetos25a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos25a1}`, sC: "tc"},
                    { line: `${aetos25a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos25a1}`, sC: "tc"},
                    { line: `${aetos25a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos26a1}`, sC: "tc"},
                    { line: `${aetos26a2}`, sC: "bg"},
                    { line: `${aetos26a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos26a1}`, sC: "tc"},
                    { line: `${aetos26a2}`, sC: "bg"},
                    { line: `${aetos26a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos23a1}`, sC: "tc"},
                    { line: `${aetos23a2}`, sC: "bg"},
                    { line: `${aetos23a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos27a1}`, sC: "tc"},
                    { line: `${aetos27a2}`, sC: "bg"},
                    { line: `${aetos27a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos27a1}`, sC: "tc"},
                    { line: `${aetos27a2}`, sC: "bg"},
                    { line: `${aetos27a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos26a1}`, sC: "tc"},
                    { line: `${aetos26a2}`, sC: "bg"},
                    { line: `${aetos26a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos28a1}`, sC: "tc"},
                    { line: `${aetos28a2}`, sC: "bg"},
                    { line: `${aetos28a3}`, sC: "bg"},
                    { line: `${aetos28a4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos28a1}`, sC: "tc"},
                    { line: `${aetos28a2}`, sC: "bg"},
                    { line: `${aetos28a3}`, sC: "bg"},
                    { line: `${aetos28a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos28a1}`, sC: "tc"},
                    { line: `${aetos28a2}`, sC: "bg"},
                    { line: `${aetos28a3}`, sC: "bg"},
                    { line: `${aetos28a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos29a1}`, sC: "tc"},
                    { line: `${aetos29a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos29a1}`, sC: "tc"},
                    { line: `${aetos29a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos29a1}`, sC: "tc"},
                    { line: `${aetos29a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos30a1}`, sC: "tc"},
                    { line: `${aetos30a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos30a1}`, sC: "tc"},
                    { line: `${aetos30a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos30a1}`, sC: "tc"},
                    { line: `${aetos30a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos31a1}`, sC: "tc"},
                    { line: `${aetos31a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos31a1}`, sC: "tc"},
                    { line: `${aetos31a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos31a1}`, sC: "tc"},
                    { line: `${aetos31a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos32a1}`, sC: "tc"},
                    { line: `${aetos32a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos32a1}`, sC: "tc"},
                    { line: `${aetos32a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos32a1}`, sC: "tc"},
                    { line: `${aetos32a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXII
          // SIGUIENTE CANTO DEBAJO
           /*╔═══════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXIII ║
          ╚═══════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos33a1}`, sC: "tc"},
                    { line: `${aetos33a2}`, sC: "bg"},
                    { line: `${aetos33a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos33a1}`, sC: "tc"},
                    { line: `${aetos33a2}`, sC: "bg"},
                    { line: `${aetos33a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos27a1}`, sC: "tc"},
                    { line: `${aetos27a2}`, sC: "bg"},
                    { line: `${aetos27a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos34a1}`, sC: "tc"},
                    { line: `${aetos34a2}`, sC: "bg"},
                    { line: `${aetos34a3}`, sC: "bg"},
                    { line: `${aetos34a4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos34a1}`, sC: "tc"},
                    { line: `${aetos34a2}`, sC: "bg"},
                    { line: `${aetos34a3}`, sC: "bg"},
                    { line: `${aetos34a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos34a1}`, sC: "tc"},
                    { line: `${aetos34a2}`, sC: "bg"},
                    { line: `${aetos34a3}`, sC: "bg"},
                    { line: `${aetos34a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIV
          // SIGUIENTE CANTO DEBAJO

             /*╔═════════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO SANTISIMO CUERPO Y SANGRE DE CRISTO  ║
          ╚═════════════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetosscsca1}`, sC: "tc"},
                    { line: `${aetosscsca2}`, sC: "bg"},
                    { line: `${aetosscsca3}`, sC: "bg"},
                    { line: `${aetosscsca4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetosscsca1}`, sC: "tc"},
                    { line: `${aetosscsca2}`, sC: "bg"},
                    { line: `${aetosscsca3}`, sC: "bg"},
                    { line: `${aetosscsca4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetosscsca1}`, sC: "tc"},
                    { line: `${aetosscsca2}`, sC: "bg"},
                    { line: `${aetosscsca3}`, sC: "bg"},
                    { line: `${aetosscsca4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetosvsa1}`, sC: "tc"},
                    { line: `${aetosvsa2}`, sC: "bg"},
                    { line: `${aetosvsa3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetosvsa1}`, sC: "tc"},
                    { line: `${aetosvsa2}`, sC: "bg"},
                    { line: `${aetosvsa3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos33a1}`, sC: "tc"},
                    { line: `${aetos33a2}`, sC: "bg"},
                    { line: `${aetos33a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXVI
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA I    ║
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
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    
                    { line: gSi1, sC: "tc bg"},
                    { line: gSi2, sC: "bg"},
                    { line: gSi3, sC: "bg"},

                    { line: "", sC: "adb1"},

                    { line: gSi4, sC: "ta as bg"},
                    { line: gSi6, sC: "as bg"},
                    { line: gSi7, sC: "as bg"},

                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs1a1}`, sC: "tc"},
                    { line: `${aetcs1a2}`, sC: "bg"},                    
                   ]},

          { line: "", sC: "adb1"},                  
          {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
                         triggerLine: gSi5, sC: "ta as bg", lines: [
                              { line: gSi6, sC: "as bg" },
                              { line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                              
                    { line: gSd1, sC: "tc bg"},
                    { line: gSd2, sC: "bg"},
                    { line: gSd3, sC: "bg"},

                    { line: "", sC: "adb1"},

                    { line: gSd4, sC: "ta as bg"},
                    { line: gSd6, sC: "as bg"},
                    { line: gSd7, sC: "as bg"},

                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs1a1}`, sC: "tc"},
                    { line: `${aetcs1a2}`, sC: "bg"},
                    
                   ]},

          { line: "", sC: "adb1"},
          {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
                         triggerLine: gSd5, sC: "ta as bg", lines: [
                              { line: gSd6, sC: "as bg" },
                              { line: gSd7, sC: "as bg" }]},
               
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA I
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA II   ║
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
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs2a1}`, sC: "tc"},
                    { line: `${aetcs2a2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs2a1}`, sC: "tc"},
                    { line: `${aetcs2a2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA II
          // SIGUIENTE CANTO DEBAJO



        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA III  ║
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
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs3a1}`, sC: "tc"},
                    { line: `${aetcs3a2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs3a1}`, sC: "tc"},
                    { line: `${aetcs3a2}`, sC: "bg"},

                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA III
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA IV   ║
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
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs4a1}`, sC: "tc"},
                    { line: `${aetcs4a2}`, sC: "bg"},
                    { line: `${aetcs4a3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs4a1}`, sC: "tc"},
                    { line: `${aetcs4a2}`, sC: "bg"},
                    { line: `${aetcs4a3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA III
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA V    ║
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
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs5a1}`, sC: "tc"},
                    { line: `${aetcs5a2}`, sC: "bg"},
                    { line: `${aetcs5a3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs5a1}`, sC: "tc"},
                    { line: `${aetcs5a2}`, sC: "bg"},
                    { line: `${aetcs5a3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA V
          // SIGUIENTE CANTO DEBAJO

           /*╔═══════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA DOMINGO DE RAMOS   ║
          ╚═══════════════════════════════════════════════════════════════╝  */
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
          ant: "/src/index.html?canto=aetcs4a",
          sig: "/src/index.html?canto=aetcsjsa",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs6a1}`, sC: "tc"},
                    { line: `${aetcs6a2}`, sC: "bg"},
                    { line: `${aetcs6a3}`, sC: "bg"},
                    { line: `${aetcs6a4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs6a1}`, sC: "tc"},
                    { line: `${aetcs6a2}`, sC: "bg"},
                    { line: `${aetcs6a3}`, sC: "bg"},
                    { line: `${aetcs6a4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA VI
          // SIGUIENTE CANTO DEBAJO


           /*╔════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO JUEVES SANTO    ║
          ╚════════════════════════════════════════════╝  */
          {
               id: "aetcsjsa",
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
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsjsa1}`, sC: "tc"},
                    { line: `${aetcsjsa2}`, sC: "bg"},
                    { line: `${aetcsjsa3}`, sC: "bg"},
                    { line: `${aetcsjsa4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsjsa1}`, sC: "tc"},
                    { line: `${aetcsjsa2}`, sC: "bg"},
                    { line: `${aetcsjsa3}`, sC: "bg"},
                    { line: `${aetcsjsa4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: JUEVES SANTO
          // SIGUIENTE CANTO DEBAJO

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
          sig: "/src/index.html?canto=aetcsssa",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsvsa1}`, sC: "tc"},
                    { line: `${aetcsvsa2}`, sC: "bg"},
                    { line: `${aetcsvsa3}`, sC: "bg"},
                    { line: `${aetcsvsa4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsvsa1}`, sC: "tc"},
                    { line: `${aetcsvsa2}`, sC: "bg"},
                    { line: `${aetcsvsa3}`, sC: "bg"},
                    { line: `${aetcsvsa4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: VIERNES SANTO
          // SIGUIENTE CANTO DEBAJO

           /*╔══════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO VIGILIA PASCUAL   ║
          ╚══════════════════════════════════════════════╝  */
   {
        id: "aetcsssa",
        tt: "Aleluya Pascual",
        title: "Vigilia Pascual",
        subtitle: "Aleluya Pascual",
        category: ["Liturgia","Pascua"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "La asamblea se divide para cantar a tres voces: A1, A2 y A3 y cada voz va entrando tal y como se indica en el esquema.",
        nCanURL: "",
        dbno: "181",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/aleluyapascual.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
              mobile: { v: 23, i: 1 }, // Para celular
              tablet: { v: 25, i: 1 },  // Para tablet
             desktop: { v: 7, i: 1 },   // Para PC
        desktopsmall: { v: 7, i: 1 }},   // Para PC
        ant: "/src/index.html?canto=aetcsvsa",
        sig: "/src/index.html?canto=aetps1a",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cristo Jesús ha resucitado., (La,,10)(Mi,,100)(La,,218)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta1 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta2 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo Jesús ha resucitado., (La,,10)(Mi,,100)(La,,218)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta2 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta1 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo Jesús ha resucitado., (La,,10)(Mi,,100)(La,,218)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "ta3 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta1 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta2 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA PASCUAL
// SIGUIENTE CANTO DEBAJO
// ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII


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
          ant: "/src/index.html?canto=aetcsssa",
          sig: "/src/index.html?canto=aetps2a",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps1a1}`, sC: "tc"},
                    { line: `${aetps1a2}`, sC: "bg"},
                    { line: `${aetps1a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                     { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},
                    
                    { line: `${aetps1a1}`, sC: "tc"},
                    { line: `${aetps1a2}`, sC: "bg"},
                    { line: `${aetps1a3}`, sC: "bg"},

                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},

                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps1a1}`, sC: "tc"},
                    { line: `${aetps1a2}`, sC: "bg"},
                    { line: `${aetps1a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA I
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps2a1}`, sC: "tc"},
                    { line: `${aetps2a2}`, sC: "bg"},
                    { line: `${aetps2a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps2a1}`, sC: "tc"},
                    { line: `${aetps2a2}`, sC: "bg"},
                    { line: `${aetps2a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps2a1}`, sC: "tc"},
                    { line: `${aetps2a2}`, sC: "bg"},
                    { line: `${aetps2a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA II
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps3a1}`, sC: "tc"},
                    { line: `${aetps3a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps3a1}`, sC: "tc"},
                    { line: `${aetps3a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps3a1}`, sC: "tc"},
                    { line: `${aetps3a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA III
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps4a1}`, sC: "tc"},
                    { line: `${aetps4a2}`, sC: "bg"},
                    { line: `${aetps4a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps4a1}`, sC: "tc"},
                    { line: `${aetps4a2}`, sC: "bg"},
                    { line: `${aetps4a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps4a1}`, sC: "tc"},
                    { line: `${aetps4a2}`, sC: "bg"},
                    { line: `${aetps4a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA IV
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps5a1}`, sC: "tc"},
                    { line: `${aetps5a2}`, sC: "bg"},
                    { line: `${aetps5a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"}]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps5a1}`, sC: "tc"},
                    { line: `${aetps5a2}`, sC: "bg"},
                    { line: `${aetps5a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps5a1}`, sC: "tc"},
                    { line: `${aetps5a2}`, sC: "bg"},
                    { line: `${aetps5a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA V
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps6a1}`, sC: "tc"},
                    { line: `${aetps6a2}`, sC: "bg"},
                    { line: `${aetps6a3}`, sC: "bg"},
                    { line: `${aetps6a4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps6a1}`, sC: "tc"},
                    { line: `${aetps6a2}`, sC: "bg"},
                    { line: `${aetps6a3}`, sC: "bg"},
                    { line: `${aetps6a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps6a1}`, sC: "tc"},
                    { line: `${aetps6a2}`, sC: "bg"},
                    { line: `${aetps6a3}`, sC: "bg"},
                    { line: `${aetps6a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VI
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps7a1}`, sC: "tc"},
                    { line: `${aetps7a2}`, sC: "bg"},
                    { line: `${aetps7a3}`, sC: "bg"},
                    { line: `${aetps7a4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps7a1}`, sC: "tc"},
                    { line: `${aetps7a2}`, sC: "bg"},
                    { line: `${aetps7a3}`, sC: "bg"},
                    { line: `${aetps7a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps7a1}`, sC: "tc"},
                    { line: `${aetps7a2}`, sC: "bg"},
                    { line: `${aetps7a3}`, sC: "bg"},
                    { line: `${aetps7a4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetpsasa1}`, sC: "tc"},
                    { line: `${aetpsasa2}`, sC: "bg"},
                    { line: `${aetpsasa3}`, sC: "bg"},
                    { line: `${aetpsasa4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetpsasa1}`, sC: "tc"},
                    { line: `${aetpsasa2}`, sC: "bg"},
                    { line: `${aetpsasa3}`, sC: "bg"},
                    { line: `${aetpsasa4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetpsasa1}`, sC: "tc"},
                    { line: `${aetpsasa2}`, sC: "bg"},
                    { line: `${aetpsasa3}`, sC: "bg"},
                    { line: `${aetpsasa4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps8a1}`, sC: "tc"},
                    { line: `${aetps8a2}`, sC: "bg"},
                    { line: `${aetps8a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps8a1}`, sC: "tc"},
                    { line: `${aetps8a2}`, sC: "bg"},
                    { line: `${aetps8a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps8a1}`, sC: "tc"},
                    { line: `${aetps8a2}`, sC: "bg"},
                    { line: `${aetps8a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VIII
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps9a1}`, sC: "tc"},
                    { line: `${aetps9a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps9a1}`, sC: "tc"},
                    { line: `${aetps9a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps9a1}`, sC: "tc"},
                    { line: `${aetps9a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA IX


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
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/index-ae.html",
               sig: "/src/index.html?canto=aetas2b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas1b1}`, sC: "tc"},
                    { line: `${aetas1b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                     { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas1b1}`, sC: "tc"},
                    { line: `${aetas1b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas1b1}`, sC: "tc"},
                    { line: `${aetas1b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA II   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetas2b",
               tt: aetas2,
               title: aetas2,
          subtitle: añob+", "+aetas2b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas2b1}`, sC: "tc"},
                    { line: `${aetas2b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas2b1}`, sC: "tc"},
                    { line: `${aetas2b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas2b1}`, sC: "tc"},
                    { line: `${aetas2b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA II

          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA III  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetas3b",
               tt: aetas3,
               title: aetas3,
          subtitle: añob+", "+aetas3b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas3b1}`, sC: "tc"},
                    { line: `${aetas3b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas3b1}`, sC: "tc"},
                    { line: `${aetas3b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas3b1}`, sC: "tc"},
                    { line: `${aetas3b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA III
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA IV   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetas4b",
               tt: aetas4,
               title: aetas4,
          subtitle: añob+", "+aetas4b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas4b1}`, sC: "tc"},
                    { line: `${aetas4b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas4b1}`, sC: "tc"},
                    { line: `${aetas4b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas4b1}`, sC: "tc"},
                    { line: `${aetas4b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetns25dicmvb",
               tt: aetns25dicmv,
               title: aetns25dicmv,
          subtitle: añob+", "+aetns25dicmvb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmvb1}`, sC: "tc"},
                    { line: `${aetns25dicmvb2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmvb1}`, sC: "tc"},
                    { line: `${aetns25dicmvb2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmvb1}`, sC: "tc"},
                    { line: `${aetns25dicmvb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
          ╚════════════════════════════════════════════════════════╝  */
          { 
               id: "aetns25dicmmb",
               tt: aetns25dicmm,
               title: aetns25dicmm,
          subtitle: añob+", "+aetns25dicmmb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmmb1}`, sC: "tc"},
                    { line: `${aetns25dicmmb2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmmb1}`, sC: "tc"},
                    { line: `${aetns25dicmmb2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmmb1}`, sC: "tc"},
                    { line: `${aetns25dicmmb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetns25dicmab",
               tt: aetns25dicma,
               title: aetns25dicma,
          subtitle: añob+", "+aetns25dicmab,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmab1}`, sC: "tc"},
                    { line: `${aetns25dicmab2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmab1}`, sC: "tc"},
                    { line: `${aetns25dicmab2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmab1}`, sC: "tc"},
                    { line: `${aetns25dicmab2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetns25dicmdb",
               tt: aetns25dicmd,
               title: aetns25dicmd,
          subtitle: añob+", "+aetns25dicmdb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmdb1}`, sC: "tc"},
                    { line: `${aetns25dicmdb2}`, sC: ""},
                    { line: `${aetns25dicmdb3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmdb1}`, sC: "tc"},
                    { line: `${aetns25dicmdb2}`, sC: "tc"},
                    { line: `${aetns25dicmdb3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmdb1}`, sC: "tc"},
                    { line: `${aetns25dicmdb2}`, sC: "bg"},
                    { line: `${aetns25dicmdb3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
          // SIGUIENTE CANTO DEBAJO


             /*╔══════════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SAGRADA FAMILIA AÑO B  ║
          ╚══════════════════════════════════════════════════════════════════╝  */
          {
               id: "aetnssfb",
               tt: aetnssf,
               title: aetnssf,
          subtitle: añob+", "+aetnssfb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetns25dicmdb",
          sig: "/src/index.html?canto=aetn1eb",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetnssfb1}`, sC: "tc"},
                    { line: `${aetnssfb2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetnssfb1}`, sC: "tc"},
                    { line: `${aetnssfb2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetnssfb1}`, sC: "tc"},
                    { line: `${aetnssfb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
          // SIGUIENTE CANTO DEBAJO

           /*╔══════════════════════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN EVANGELIO TIEMPO NAVIDAD ALELUYA HB 1, 1-2 SEMANA 1 AÑO B    ║
          ║  SANTA MARIA MADRE DE DIOS                                               ║
          ╚══════════════════════════════════════════════════════════════════════════╝  */
          {
               id: "aetn1eb",
               tt: aetn1e,
               title: aetn1e,
          subtitle: añob+", "+aetn1eb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetnssfb",
          sig: "/src/index.html?canto=aetns2b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetn1eb1}`, sC: "tc"},
                    { line: `${aetn1eb2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetn1eb1}`, sC: "tc"},
                    { line: `${aetn1eb2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetn1eb1}`, sC: "tc"},
                    { line: `${aetn1eb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA II    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetns2b",
               tt: aetns2,
               title: aetns2,
          subtitle: añob+", "+aetns2b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetn1eb",
          sig: "/src/index.html?canto=aetn6eb",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns2b1}`, sC: "tc"},
                    { line: `${aetns2b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns2b1}`, sC: "tc"},
                    { line: `${aetns2b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns2b1}`, sC: "tc"},
                    { line: `${aetns2b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA II
          // SIGUIENTE CANTO DEBAJO


        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD EPIFANIA     ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetn6eb",
               tt: aetn6e,
               title: aetn6e,
          subtitle: añob+", "+aetn6eb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetns2b",
          sig: "/src/index.html?canto=aetos1b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetn6eb1}`, sC: "tc"},
                    { line: `${aetn6eb2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetn6eb1}`, sC: "tc"},
                    { line: `${aetn6eb2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetn6eb1}`, sC: "tc"},
                    { line: `${aetn6eb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD EPIFANIA
          // SIGUIENTE CANTO DEBAJO

             /*╔═════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA I  AÑO A ║
          ║   EL BAUTISMO DEL SEÑOR                                     ║
          ╚═════════════════════════════════════════════════════════════╝  */
          {
               id: "aetos1b",
               tt: aetos1,
               title: aetos1,
          subtitle: añob+", "+aetos1b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetn6eb",
          sig: "/src/index.html?canto=aetos2b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos1b1}`, sC: "tc"},
                    { line: `${aetos1b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos1b1}`, sC: "tc"},
                    { line: `${aetos1b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos1b1}`, sC: "tc"},
                    { line: `${aetos1b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA II  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos2b",
               tt: aetos2,
               title: aetos2,
          subtitle: añob+", "+aetos2b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos1b",
          sig: "/src/index.html?canto=aetos3b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos2b1}`, sC: "tc"},
                    { line: `${aetos2b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos2b1}`, sC: "tc"},
                    { line: `${aetos2b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos2b1}`, sC: "tc"},
                    { line: `${aetos2b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA II
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA III   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos3b",
               tt: aetos3,
               title: aetos3,
          subtitle: añob+", "+aetos3b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos2b",
          sig: "/src/index.html?canto=aetos4b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos3b1}`, sC: "tc"},
                    { line: `${aetos3b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos3b1}`, sC: "tc"},
                    { line: `${aetos3b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos3b1}`, sC: "tc"},
                    { line: `${aetos3b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA III
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA IV    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos4b",
               tt: aetos4,
               title: aetos4,
          subtitle: añob+", "+aetos4b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos3b",
          sig: "/src/index.html?canto=aetos5b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos4b1}`, sC: "tc"},
                    { line: `${aetos4b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos4b1}`, sC: "tc"},
                    { line: `${aetos4b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos4b1}`, sC: "tc"},
                    { line: `${aetos4b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA IV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA V     ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos5b",
               tt: aetos5,
               title: aetos5,
          subtitle: añob+", "+aetos5b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos4b",
          sig: "/src/index.html?canto=aetos6b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos5b1}`, sC: "tc"},
                    { line: `${aetos5b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos5b1}`, sC: "tc"},
                    { line: `${aetos5b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos5b1}`, sC: "tc"},
                    { line: `${aetos5b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA V
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA VI      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos6b",
               tt: aetos6,
               title: aetos6,
          subtitle: añob+", "+aetos6b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos5b",
          sig: "/src/index.html?canto=aetos7b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos6b1}`, sC: "tc"},
                    { line: `${aetos6b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos6b1}`, sC: "tc"},
                    { line: `${aetos6b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos6b1}`, sC: "tc"},
                    { line: `${aetos6b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA VII   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos7b",
               tt: aetos7,
               title: aetos7,
          subtitle: añob+", "+aetos7b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos6b",
          sig: "/src/index.html?canto=aetos8b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos7b1}`, sC: "tc"},
                    { line: `${aetos7b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos7b1}`, sC: "tc"},
                    { line: `${aetos7b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos7b1}`, sC: "tc"},
                    { line: `${aetos7b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA VIII  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos8b",
               tt: aetos8,
               title: aetos8,
          subtitle: añob+", "+aetos8b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos7b",
          sig: "/src/index.html?canto=aetos9b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos8b1}`, sC: "tc"},
                    { line: `${aetos8b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos8b1}`, sC: "tc"},
                    { line: `${aetos8b2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos8b1}`, sC: "tc"},
                    { line: `${aetos8b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA IX    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos9b",
               tt: aetos9,
               title: aetos9,
          subtitle: añob+", "+aetos9b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos8b",
          sig: "/src/index.html?canto=aetos10b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos9b1}`, sC: "tc"},
                    { line: `${aetos9b2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos9b1}`, sC: "tc"},
                    { line: `${aetos9b2}`, sC: ""},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos9b1}`, sC: "tc"},
                    { line: `${aetos9b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA IX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA X      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos10b",
               tt: aetos10,
               title: aetos10,
          subtitle: añob+", "+aetos10b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos9b",
          sig: "/src/index.html?canto=aetos11b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos10b1}`, sC: "tc"},
                    { line: `${aetos10b2}`, sC: "bg"},
                    { line: `${aetos10b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos10b1}`, sC: "tc"},
                    { line: `${aetos10b2}`, sC: "bg"},
                    { line: `${aetos10b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos10b1}`, sC: "tc"},
                    { line: `${aetos10b2}`, sC: "bg"},
                    { line: `${aetos10b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA X
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XI    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos11b",
               tt: aetos11,
               title: aetos11,
          subtitle: añob+", "+aetos11b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos10b",
          sig: "/src/index.html?canto=aetos12b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos11b1}`, sC: "tc"},
                    { line: `${aetos11b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos11b1}`, sC: "tc"},
                    { line: `${aetos11b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos11b1}`, sC: "tc"},
                    { line: `${aetos11b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XII   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos12b",
               tt: aetos12,
               title: aetos12,
          subtitle: añob+", "+aetos12b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos11b",
          sig: "/src/index.html?canto=aetos13b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos12b1}`, sC: "tc"},
                    { line: `${aetos12b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos12b1}`, sC: "tc"},
                    { line: `${aetos12b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos12b1}`, sC: "tc"},
                    { line: `${aetos12b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XIII  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos13b",
               tt: aetos13,
               title: aetos13,
          subtitle: añob+", "+aetos13b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos12b",
          sig: "/src/index.html?canto=aetos14b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos13b1}`, sC: "tc"},
                    { line: `${aetos13b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos13b1}`, sC: "tc"},
                    { line: `${aetos13b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos13b1}`, sC: "tc"},
                    { line: `${aetos13b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XIV      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos14b",
               tt: aetos14,
               title: aetos14,
          subtitle: añob+", "+aetos14b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos13b",
          sig: "/src/index.html?canto=aetos15b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos14b1}`, sC: "tc"},
                    { line: `${aetos14b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos14b1}`, sC: "tc"},
                    { line: `${aetos14b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos14b1}`, sC: "tc"},
                    { line: `${aetos14b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XV    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos15b",
               tt: aetos15,
               title: aetos15,
          subtitle: añob+", "+aetos15b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos14b",
          sig: "/src/index.html?canto=aetos16b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos15b1}`, sC: "tc"},
                    { line: `${aetos15b2}`, sC: "bg"},
                    { line: `${aetos15b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos15b1}`, sC: "tc"},
                    { line: `${aetos15b2}`, sC: "bg"},
                    { line: `${aetos15b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos15b1}`, sC: "tc"},
                    { line: `${aetos15b2}`, sC: "bg"},
                    { line: `${aetos15b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XVI      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos16b",
               tt: aetos16,
               title: aetos16,
          subtitle: añob+", "+aetos16b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos15b",
          sig: "/src/index.html?canto=aetos17b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos16b1}`, sC: "tc"},
                    { line: `${aetos16b2}`, sC: "bg"},
                    { line: `${aetos16b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos16b1}`, sC: "tc"},
                    { line: `${aetos16b2}`, sC: "bg"},
                    { line: `${aetos16b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetosvsb1}`, sC: "tc"},
                    { line: `${aetosvsb2}`, sC: "bg"},
                    { line: `${aetosvsb3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XVI

          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XVII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos17b",
               tt: aetos17,
               title: aetos17,
          subtitle: añob+", "+aetos17b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos16b",
          sig: "/src/index.html?canto=aetos18b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos17b1}`, sC: "tc"},
                    { line: `${aetos17b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos17b1}`, sC: "tc"},
                    { line: `${aetos17b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos17b1}`, sC: "tc"},
                    { line: `${aetos17b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XVII

          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XVIII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos18b",
               tt: aetos18,
               title: aetos18,
          subtitle: añob+", "+aetos18b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos17b",
          sig: "/src/index.html?canto=aetos19b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos18b1}`, sC: "tc"},
                    { line: `${aetos18b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos18b1}`, sC: "tc"},
                    { line: `${aetos18b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos18b1}`, sC: "tc"},
                    { line: `${aetos18b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XVIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XIX      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos19b",
               tt: aetos19,
               title: aetos19,
          subtitle: añob+", "+aetos19b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos18b",
          sig: "/src/index.html?canto=aetos20b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos19b1}`, sC: "tc"},
                    { line: `${aetos19b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos19b1}`, sC: "tc"},
                    { line: `${aetos19b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos19b1}`, sC: "tc"},
                    { line: `${aetos19b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XX      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos20b",
               tt: aetos20,
               title: aetos20,
          subtitle: añob+", "+aetos20b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos19b",
          sig: "/src/index.html?canto=aetos21b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos20b1}`, sC: "tc"},
                    { line: `${aetos20b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos20b1}`, sC: "tc"},
                    { line: `${aetos20b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos20b1}`, sC: "tc"},
                    { line: `${aetos20b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXI      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos21b",
               tt: aetos21,
               title: aetos21,
          subtitle: añob+", "+aetos21b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos20b",
          sig: "/src/index.html?canto=aetos22b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos21b1}`, sC: "tc"},
                    { line: `${aetos21b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos21b1}`, sC: "tc"},
                    { line: `${aetos21b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos16b1}`, sC: "tc"},
                    { line: `${aetos16b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos22b",
               tt: aetos22,
               title: aetos22,
          subtitle: añob+", "+aetos22b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos21b",
          sig: "/src/index.html?canto=aetos23b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos22b1}`, sC: "tc"},
                    { line: `${aetos22b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos22b1}`, sC: "tc"},
                    { line: `${aetos22b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos21b1}`, sC: "tc"},
                    { line: `${aetos21b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos23b",
               tt: aetos23,
               title: aetos23,
          subtitle: añob+", "+aetos23b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos22b",
          sig: "/src/index.html?canto=aetos24b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos23b1}`, sC: "tc"},
                    { line: `${aetos23b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos23b1}`, sC: "tc"},
                    { line: `${aetos23b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos22b1}`, sC: "tc"},
                    { line: `${aetos22b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIV      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos24b",
               tt: aetos24,
               title: aetos24,
          subtitle: añob+", "+aetos24b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos23b",
          sig: "/src/index.html?canto=aetos25b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos24b1}`, sC: "tc"},
                    { line: `${aetos24b2}`, sC: "bg"},
                    { line: `${aetos24b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos24b1}`, sC: "tc"},
                    { line: `${aetos24b2}`, sC: "bg"},
                    { line: `${aetos24b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos24b1}`, sC: "tc"},
                    { line: `${aetos24b2}`, sC: "bg"},
                    { line: `${aetos24b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXV      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos25b",
               tt: aetos25,
               title: aetos25,
          subtitle: añob+", "+aetos25b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos24b",
          sig: "/src/index.html?canto=aetos26b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos25b1}`, sC: "tc"},
                    { line: `${aetos25b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos25b1}`, sC: "tc"},
                    { line: `${aetos25b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos25b1}`, sC: "tc"},
                    { line: `${aetos25b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVI      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos26b",
               tt: aetos26,
               title: aetos26,
          subtitle: añob+", "+aetos26b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos25b",
          sig: "/src/index.html?canto=aetos27b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos26b1}`, sC: "tc"},
                    { line: `${aetos26b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos26b1}`, sC: "tc"},
                    { line: `${aetos26b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos26b1}`, sC: "tc"},
                    { line: `${aetos26b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos27b",
               tt: aetos27,
               title: aetos27,
          subtitle: añob+", "+aetos27b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos26b",
          sig: "/src/index.html?canto=aetos28b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos27b1}`, sC: "tc"},
                    { line: `${aetos27b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos27b1}`, sC: "tc"},
                    { line: `${aetos27b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos27b1}`, sC: "tc"},
                    { line: `${aetos27b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVIII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos28b",
               tt: aetos28,
               title: aetos28,
          subtitle: añob+", "+aetos28b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos27b",
          sig: "/src/index.html?canto=aetos29b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos28b1}`, sC: "tc"},
                    { line: `${aetos28b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos28b1}`, sC: "tc"},
                    { line: `${aetos28b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos28b1}`, sC: "tc"},
                    { line: `${aetos28b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIX      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos29b",
               tt: aetos29,
               title: aetos29,
          subtitle: añob+", "+aetos29b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos28b",
          sig: "/src/index.html?canto=aetos30b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos29b1}`, sC: "tc"},
                    { line: `${aetos29b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos29b1}`, sC: "tc"},
                    { line: `${aetos29b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos29b1}`, sC: "tc"},
                    { line: `${aetos29b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXX      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos30b",
               tt: aetos30,
               title: aetos30,
          subtitle: añob+", "+aetos30b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos29b",
          sig: "/src/index.html?canto=aetos31b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos30b1}`, sC: "tc"},
                    { line: `${aetos30b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos30b1}`, sC: "tc"},
                    { line: `${aetos30b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos30b1}`, sC: "tc"},
                    { line: `${aetos30b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXI      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos31b",
               tt: aetos31,
               title: aetos31,
          subtitle: añob+", "+aetos31b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos30b",
          sig: "/src/index.html?canto=aetos32b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos31b1}`, sC: "tc"},
                    { line: `${aetos31b2}`, sC: "bg"},
                    { line: `${aetos31b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos31b1}`, sC: "tc"},
                    { line: `${aetos31b2}`, sC: "bg"},
                    { line: `${aetos31b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos31b1}`, sC: "tc"},
                    { line: `${aetos31b2}`, sC: "bg"},
                    { line: `${aetos31b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos32b",
               tt: aetos32,
               title: aetos32,
          subtitle: añob+", "+aetos32b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos31b",
          sig: "/src/index.html?canto=aetos33b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos32b1}`, sC: "tc"},
                    { line: `${aetos32b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos32b1}`, sC: "tc"},
                    { line: `${aetos32b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos32b1}`, sC: "tc"},
                    { line: `${aetos32b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXII
          // SIGUIENTE CANTO DEBAJO
           /*╔═══════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXIII ║
          ╚═══════════════════════════════════════════════════════════╝  */
          {
               id: "aetos33b",
               tt: aetos33,
               title: aetos33,
          subtitle: añob+", "+aetos33b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos32b",
          sig: "/src/index.html?canto=aetos34b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos33b1}`, sC: "tc"},
                    { line: `${aetos33b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos33b1}`, sC: "tc"},
                    { line: `${aetos33b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos27b1}`, sC: "tc"},
                    { line: `${aetos27b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXIV      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos34b",
               tt: aetos34,
               title: aetos34,
          subtitle: añob+", "+aetos34b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos33b",
          sig: "/src/index.html?canto=aetosscscb",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos34b1}`, sC: "tc"},
                    { line: `${aetos34b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos34b1}`, sC: "tc"},
                    { line: `${aetos34b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos34b1}`, sC: "tc"},
                    { line: `${aetos34b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIV
          // SIGUIENTE CANTO DEBAJO

             /*╔═════════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO SANTISIMO CUERPO Y SANGRE DE CRISTO  ║
          ╚═════════════════════════════════════════════════════════════════╝  */
          {
               id: "aetosscscb",
               tt: aetosscsc,
               title: aetosscsc,
          subtitle: añob+", "+aetosscscb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos34b",
          sig: "/src/index.html?canto=aetosvsb",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetosscscb1}`, sC: "tc"},
                    { line: `${aetosscscb2}`, sC: "bg"},
                    { line: `${aetosscscb3}`, sC: "bg"},
                    { line: `${aetosscscb4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetosscscb1}`, sC: "tc"},
                    { line: `${aetosscscb2}`, sC: "bg"},
                    { line: `${aetosscscb3}`, sC: "bg"},
                    { line: `${aetosscscb4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetosscscb1}`, sC: "tc"},
                    { line: `${aetosscscb2}`, sC: "bg"},
                    { line: `${aetosscscb3}`, sC: "bg"},
                    { line: `${aetosscscb4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO Santísimo Cuerpo y Sangre de Cristo
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO - SAGRADO CORAZÓN DE JESUS  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetosvsb",
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
          ant: "/src/index.html?canto=aetosscscb",
          sig: "/src/index.html?canto=aetcs1b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetosvsb1}`, sC: "tc"},
                    { line: `${aetosvsb2}`, sC: "bg"},
                    { line: `${aetosvsb3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetosvsb1}`, sC: "tc"},
                    { line: `${aetosvsb2}`, sC: "bg"},
                    { line: `${aetosvsb3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos33b1}`, sC: "tc"},
                    { line: `${aetos33b2}`, sC: "bg"},
                    { line: `${aetos33b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXVI
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA I    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs1b",
               tt: aetcs1,
               title: aetcs1,
          subtitle: añob+", "+aetcs1b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetosvsb",
          sig: "/src/index.html?canto=aetcs2b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    
                    { line: gSi1, sC: "tc bg"},
                    { line: gSi2, sC: "bg"},
                    { line: gSi3, sC: "bg"},

                    { line: "", sC: "adb1"},

                    { line: gSi4, sC: "ta as bg"},
                    { line: gSi6, sC: "as bg"},
                    { line: gSi7, sC: "as bg"},

                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs1b1}`, sC: "tc"},
                    { line: `${aetcs1b2}`, sC: "bg"},                    
                   ]},

          { line: "", sC: "adb1"},                  
          {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
                         triggerLine: gSi5, sC: "ta as bg", lines: [
                              { line: gSi6, sC: "as bg" },
                              { line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                              
                    { line: gSd1, sC: "tc bg"},
                    { line: gSd2, sC: "bg"},
                    { line: gSd3, sC: "bg"},

                    { line: "", sC: "adb1"},

                    { line: gSd4, sC: "ta as bg"},
                    { line: gSd6, sC: "as bg"},
                    { line: gSd7, sC: "as bg"},

                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs1b1}`, sC: "tc"},
                    { line: `${aetcs1b2}`, sC: "bg"},
                    
                   ]},

          { line: "", sC: "adb1"},
          {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
                         triggerLine: gSd5, sC: "ta as bg", lines: [
                              { line: gSd6, sC: "as bg" },
                              { line: gSd7, sC: "as bg" }]},
               
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA I
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA II   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs2b",
               tt: aetcs2,
               title: aetcs2,
          subtitle: añob+", "+aetcs2b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs1b",
          sig: "/src/index.html?canto=aetcs3b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs2b1}`, sC: "tc"},
                    { line: `${aetcs2b2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs2b1}`, sC: "tc"},
                    { line: `${aetcs2b2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA II
          // SIGUIENTE CANTO DEBAJO



        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA III  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs3b",
               tt: aetcs3,
               title: aetcs3,
          subtitle: añob+", "+aetcs3b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs2b",
          sig: "/src/index.html?canto=aetcs4b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs3b1}`, sC: "tc"},
                    { line: `${aetcs3b2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs3b1}`, sC: "tc"},
                    { line: `${aetcs3b2}`, sC: "bg"},

                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA III
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA IV   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs4b",
               tt: aetcs4,
               title: aetcs4,
          subtitle: añob+", "+aetcs4b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs3b",
          sig: "/src/index.html?canto=aetcs5b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs4b1}`, sC: "tc"},
                    { line: `${aetcs4b2}`, sC: "bg"},
                    { line: `${aetcs4b3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs4b1}`, sC: "tc"},
                    { line: `${aetcs4b2}`, sC: "bg"},
                    { line: `${aetcs4b3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA III
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA V    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs5b",
               tt: aetcs5,
               title: aetcs5,
          subtitle: añob+", "+aetcs5b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs4b",
          sig: "/src/index.html?canto=aetcs6b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs5b1}`, sC: "tc"},
                    { line: `${aetcs5b2}`, sC: "bg"},
                    { line: `${aetcs5b3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs5b1}`, sC: "tc"},
                    { line: `${aetcs5b2}`, sC: "bg"},
                    { line: `${aetcs5b3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA V
          // SIGUIENTE CANTO DEBAJO

           /*╔═══════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA DOMINGO DE RAMOS   ║
          ╚═══════════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs6b",
               tt: aetcs6,
               title: aetcs6,
          subtitle: añob+", "+aetcs6b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs4b",
          sig: "/src/index.html?canto=aetcsjsb",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs6b1}`, sC: "tc"},
                    { line: `${aetcs6b2}`, sC: "bg"},
                    { line: `${aetcs6b3}`, sC: "bg"},
                    { line: `${aetcs6b4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs6b1}`, sC: "tc"},
                    { line: `${aetcs6b2}`, sC: "bg"},
                    { line: `${aetcs6b3}`, sC: "bg"},
                    { line: `${aetcs6b4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA VI
          // SIGUIENTE CANTO DEBAJO


           /*╔════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO JUEVES SANTO    ║
          ╚════════════════════════════════════════════╝  */
          {
               id: "aetcsjsb",
               tt: aetcsjs,
               title: aetcsjs,
          subtitle: añob+", "+aetcsjsb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs6b",
          sig: "/src/index.html?canto=aetcsvsb",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsjsb1}`, sC: "tc"},
                    { line: `${aetcsjsb2}`, sC: "bg"},
                    { line: `${aetcsjsb3}`, sC: "bg"},
                    { line: `${aetcsjsb4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsjsb1}`, sC: "tc"},
                    { line: `${aetcsjsb2}`, sC: "bg"},
                    { line: `${aetcsjsb3}`, sC: "bg"},
                    { line: `${aetcsjsb4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: JUEVES SANTO
          // SIGUIENTE CANTO DEBAJO

           /*╔═════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO VIERNES SANTO    ║
          ╚═════════════════════════════════════════════╝  */
          {
               id: "aetcsvsb",
               tt: aetcsvs,
               title: aetcsvs,
          subtitle: añob+", "+aetcsvsb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcsjsb",
          sig: "/src/index.html?canto=aetcsssb",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsvsb1}`, sC: "tc"},
                    { line: `${aetcsvsb2}`, sC: "bg"},
                    { line: `${aetcsvsb3}`, sC: "bg"},
                    { line: `${aetcsvsb4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsvsb1}`, sC: "tc"},
                    { line: `${aetcsvsb2}`, sC: "bg"},
                    { line: `${aetcsvsb3}`, sC: "bg"},
                    { line: `${aetcsvsb4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: VIERNES SANTO
          // SIGUIENTE CANTO DEBAJO

           /*╔══════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO VIGILIA PASCUAL   ║
          ╚══════════════════════════════════════════════╝  */
   {
        id: "aetcsssb",
        tt: "Aleluya Pascual",
        title: "Aleluya Pascual",
        subtitle: "Apropiado para el tiempo Pascual",
        category: ["Liturgia","Pascua"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "La asamblea se divide para cantar a tres voces: A1, A2 y A3 y cada voz va entrando tal y como se indica en el esquema.",
        nCanURL: "",
        dbno: "181",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/aleluyapascual.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
              mobile: { v: 23, i: 1 }, // Para celular
              tablet: { v: 25, i: 1 },  // Para tablet
             desktop: { v: 7, i: 1 },   // Para PC
        desktopsmall: { v: 7, i: 1 }},   // Para PC
        ant: "/src/index.html?canto=aetcsvsb",
        sig: "/src/index.html?canto=aetps1b",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cristo Jesús ha resucitado., (La,,10)(Mi,,100)(La,,218)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta1 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta2 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo Jesús ha resucitado., (La,,10)(Mi,,100)(La,,218)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta2 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta1 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo Jesús ha resucitado., (La,,10)(Mi,,100)(La,,218)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "ta3 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta1 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta2 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA PASCUAL
// SIGUIENTE CANTO DEBAJO
// ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII


           /*╔═════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA I   ║
          ╚═════════════════════════════════════════════════════╝  */
          {
               id: "aetps1b",
               tt: aetps1,
               title: aetps1,
          subtitle: añob+", "+aetps1b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcsssb",
          sig: "/src/index.html?canto=aetps2b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps1b1}`, sC: "tc"},
                    { line: `${aetps1b2}`, sC: "bg"},
                    { line: `${aetps1b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                     { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},
                    
                    { line: `${aetps1b1}`, sC: "tc"},
                    { line: `${aetps1b2}`, sC: "bg"},
                    { line: `${aetps1b3}`, sC: "bg"},

                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},

                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps1b1}`, sC: "tc"},
                    { line: `${aetps1b2}`, sC: "bg"},
                    { line: `${aetps1b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA I
             /*╔══════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA II AÑO A ║
          ╚══════════════════════════════════════════════════════════╝  */
          {
               id: "aetps2b",
               tt: aetps2,
               title: aetps2,
          subtitle: añob+", "+aetps2b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps1b",
          sig: "/src/index.html?canto=aetps3b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps2b1}`, sC: "tc"},
                    { line: `${aetps2b2}`, sC: "bg"},
                    { line: `${aetps2b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps2b1}`, sC: "tc"},
                    { line: `${aetps2b2}`, sC: "bg"},
                    { line: `${aetps2b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps2b1}`, sC: "tc"},
                    { line: `${aetps2b2}`, sC: "bg"},
                    { line: `${aetps2b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA II
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA III    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps3b",
               tt: aetps3,
               title: aetps3,
          subtitle: añob+", "+aetps3b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps2b",
          sig: "/src/index.html?canto=aetps4b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps3b1}`, sC: "tc"},
                    { line: `${aetps3b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps3b1}`, sC: "tc"},
                    { line: `${aetps3b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps3b1}`, sC: "tc"},
                    { line: `${aetps3b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA III
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA IV     ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps4b",
               tt: aetps4,
               title: aetps4,
          subtitle: añob+", "+aetps4b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps3b",
          sig: "/src/index.html?canto=aetps5b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps4b1}`, sC: "tc"},
                    { line: `${aetps4b2}`, sC: "bg"},
                    { line: `${aetps4b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps4b1}`, sC: "tc"},
                    { line: `${aetps4b2}`, sC: "bg"},
                    { line: `${aetps4b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps4b1}`, sC: "tc"},
                    { line: `${aetps4b2}`, sC: "bg"},
                    { line: `${aetps4b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA IV
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA V      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps5b",
               tt: aetps5,
               title: aetps5,
          subtitle: añob+", "+aetps5b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps4b",
          sig: "/src/index.html?canto=aetps6b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps5b1}`, sC: "tc"},
                    { line: `${aetps5b2}`, sC: "bg"},
                    { line: `${aetps5b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"}]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps5b1}`, sC: "tc"},
                    { line: `${aetps5b2}`, sC: "bg"},
                    { line: `${aetps5b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps5b1}`, sC: "tc"},
                    { line: `${aetps5b2}`, sC: "bg"},
                    { line: `${aetps5b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA V
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA VI     ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps6b",
               tt: aetps6,
               title: aetps6,
          subtitle: añob+", "+aetps6b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps5b",
          sig: "/src/index.html?canto=aetps7b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps6b1}`, sC: "tc"},
                    { line: `${aetps6b2}`, sC: "bg"},
                    { line: `${aetps6b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps6b1}`, sC: "tc"},
                    { line: `${aetps6b2}`, sC: "bg"},
                    { line: `${aetps6b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps6b1}`, sC: "tc"},
                    { line: `${aetps6b2}`, sC: "bg"},
                    { line: `${aetps6b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VI
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA VII    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps7b",
               tt: aetps7,
               title: aetps7,
          subtitle: añob+", "+aetps7b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps6b",
          sig: "/src/index.html?canto=aetps8b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps7b1}`, sC: "tc"},
                    { line: `${aetps7b2}`, sC: "bg"},
                    { line: `${aetps7b3}`, sC: "bg"},
                    { line: `${aetps7b4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps7b1}`, sC: "tc"},
                    { line: `${aetps7b2}`, sC: "bg"},
                    { line: `${aetps7b3}`, sC: "bg"},
                    { line: `${aetps7b4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps7b1}`, sC: "tc"},
                    { line: `${aetps7b2}`, sC: "bg"},
                    { line: `${aetps7b3}`, sC: "bg"},
                    { line: `${aetps7b4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO La Ascensión del Señor      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetpsasb",
               tt: aetpsas,
               title: aetpsas,
          subtitle: añob+", "+aetpsasb,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps6b",
          sig: "/src/index.html?canto=aetps8b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetpsasb1}`, sC: "tc"},
                    { line: `${aetpsasb2}`, sC: "bg"},
                    { line: `${aetpsasb3}`, sC: "bg"},
                    { line: `${aetpsasb4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetpsasb1}`, sC: "tc"},
                    { line: `${aetpsasb2}`, sC: "bg"},
                    { line: `${aetpsasb3}`, sC: "bg"},
                    { line: `${aetpsasb4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetpsasb1}`, sC: "tc"},
                    { line: `${aetpsasb2}`, sC: "bg"},
                    { line: `${aetpsasb3}`, sC: "bg"},
                    { line: `${aetpsasb4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO DOMINGO DE PENTECOSTES      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps8b",
               tt: aetps8,
               title: aetps8,
          subtitle: añob+", "+aetps8b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps7b",
          sig: "/src/index.html?canto=aetps9b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps8b1}`, sC: "tc"},
                    { line: `${aetps8b2}`, sC: "bg"},
                    { line: `${aetps8b3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps8b1}`, sC: "tc"},
                    { line: `${aetps8b2}`, sC: "bg"},
                    { line: `${aetps8b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps8b1}`, sC: "tc"},
                    { line: `${aetps8b2}`, sC: "bg"},
                    { line: `${aetps8b3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VIII
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA IX     ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps9b",   //La Santísima Trinidad
               tt: aetps9,
               title: aetps9,
          subtitle: añob+", "+aetps9b,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
                         ant: "/src/index.html?canto=aetps8b",
                         sig: "/src/index.html?canto=aetas1b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps9b1}`, sC: "tc"},
                    { line: `${aetps9b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps9b1}`, sC: "tc"},
                    { line: `${aetps9b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps9b1}`, sC: "tc"},
                    { line: `${aetps9b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA IX



               /*
               ╔═════════╗
               ║  AÑO C  ║
               ╚═════════╝

               ╔════════════════════════════════════════════════════════╗
               ║    ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA I   ║
               ╚════════════════════════════════════════════════════════╝  */
          {
                    id: "aetas1c",
                    tt: aetas1,
               title: aetas1,
          subtitle: añoc+", "+aetas1c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
               ant: "/index-ae.html",
               sig: "/src/index.html?canto=aetas2c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas1c1}`, sC: "tc"},
                    { line: `${aetas1c2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                     { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas1c1}`, sC: "tc"},
                    { line: `${aetas1c2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas1c1}`, sC: "tc"},
                    { line: `${aetas1c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA II   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetas2c",
               tt: aetas2,
               title: aetas2,
          subtitle: añoc+", "+aetas2c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas2c1}`, sC: "tc"},
                    { line: `${aetas2c2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas2c1}`, sC: "tc"},
                    { line: `${aetas2c2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas2c1}`, sC: "tc"},
                    { line: `${aetas2c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA II
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA III  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetas3c",
               tt: aetas3,
               title: aetas3,
          subtitle: añoc+", "+aetas3c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas3c1}`, sC: "tc"},
                    { line: `${aetas3c2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas3c1}`, sC: "tc"},
                    { line: `${aetas3c2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas3c1}`, sC: "tc"},
                    { line: `${aetas3c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA III
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ADVIENTO SEMANA IV   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetas4c",
               tt: aetas4,
               title: aetas4,
          subtitle: añoc+", "+aetas4c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetas3c",
          sig: "/src/index.html?canto=aetns25dicmvc",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas4c1}`, sC: "tc"},
                    { line: `${aetas4c2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas4c1}`, sC: "tc"},
                    { line: `${aetas4c2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas4c1}`, sC: "tc"},
                    { line: `${aetas4c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetns25dicmvc",
               tt: aetns25dicmv,
               title: aetns25dicmv,
          subtitle: añoc+", "+aetns25dicmva,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmvc1}`, sC: "tc"},
                    { line: `${aetns25dicmvc2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmvc1}`, sC: "tc"},
                    { line: `${aetns25dicmvc2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmvc1}`, sC: "tc"},
                    { line: `${aetns25dicmvc2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
          ╚════════════════════════════════════════════════════════╝  */
          { 
               id: "aetns25dicmmc",
               tt: aetns25dicmm,
               title: aetns25dicmm,
          subtitle: añoc+", "+aetns25dicmma,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmmc1}`, sC: "tc"},
                    { line: `${aetns25dicmmc2}`, sC: ""},
                    { line: `${aetns25dicmmc3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmmc1}`, sC: "tc"},
                    { line: `${aetns25dicmmc2}`, sC: "tc"},
                    { line: `${aetns25dicmmc3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmmc1}`, sC: "tc"},
                    { line: `${aetns25dicmmc2}`, sC: "bg"},
                    { line: `${aetns25dicmmc3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetns25dicmac",
               tt: aetns25dicma,
               title: aetns25dicma,
          subtitle: añoc+", "+aetns25dicmaa,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmac1}`, sC: "tc"},
                    { line: `${aetns25dicmac2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmac1}`, sC: "tc"},
                    { line: `${aetns25dicmac2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmac1}`, sC: "tc"},
                    { line: `${aetns25dicmac2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD 25 DICIEMBRE SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD 25 DICIEMBRE  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetns25dicmdc",
               tt: aetns25dicmd,
               title: aetns25dicmd,
          subtitle: añoc+", "+aetns25dicmda,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmdc1}`, sC: "tc"},
                    { line: `${aetns25dicmdc2}`, sC: ""},
                    { line: `${aetns25dicmdc3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmdc1}`, sC: "tc"},
                    { line: `${aetns25dicmdc2}`, sC: "tc"},
                    { line: `${aetns25dicmdc3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmdc1}`, sC: "tc"},
                    { line: `${aetns25dicmdc2}`, sC: "bg"},
                    { line: `${aetns25dicmdc3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
          // SIGUIENTE CANTO DEBAJO


             /*╔══════════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SAGRADA FAMILIA AÑO A  ║
          ╚══════════════════════════════════════════════════════════════════╝  */
          {
               id: "aetnssfc",
               tt: aetnssf,
               title: aetnssf,
          subtitle: añoc+", "+aetnssfa,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetns25dicmdc",
          sig: "/src/index.html?canto=aetn1ec",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetnssfc1}`, sC: "tc"},
                    { line: `${aetnssfc2}`, sC: ""},
                    { line: `${aetnssfc3}`, sC: ""},
                    { line: `${aetnssfc4}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetnssfc1}`, sC: "tc"},
                    { line: `${aetnssfc2}`, sC: "tc"},
                    { line: `${aetnssfc3}`, sC: "tc"},
                    { line: `${aetnssfc4}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetnssfc1}`, sC: "tc"},
                    { line: `${aetnssfc2}`, sC: "bg"},
                    { line: `${aetnssfc3}`, sC: "bg"},
                    { line: `${aetnssfc4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
          // SIGUIENTE CANTO DEBAJO

             /*╔══════════════════════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN EVANGELIO TIEMPO NAVIDAD ALELUYA HB 1, 1-2 SEMANA 1 AÑO A    ║
          ║  SANTA MARIA MADRE DE DIOS                                               ║
          ╚══════════════════════════════════════════════════════════════════════════╝  */
          {
               id: "aetn1ec",
               tt: aetn1e,
               title: aetn1e,
          subtitle: añoc+", "+aetn1ec,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetnssfc",
          sig: "/src/index.html?canto=aetns2c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetn1ec1}`, sC: "tc"},
                    { line: `${aetn1ec2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetn1ec1}`, sC: "tc"},
                    { line: `${aetn1ec2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetn1ec1}`, sC: "tc"},
                    { line: `${aetn1ec2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD SEMANA II    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetns2c",
               tt: aetns2,
               title: aetns2,
          subtitle: añoc+", "+aetns2c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetn1ec",
          sig: "/src/index.html?canto=aetn6ec",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns2c1}`, sC: "tc"},
                    { line: `${aetns2c2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns2c1}`, sC: "tc"},
                    { line: `${aetns2c2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns2c1}`, sC: "tc"},
                    { line: `${aetns2c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA II
          // SIGUIENTE CANTO DEBAJO


        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO NAVIDAD EPIFANIA     ║
          ╚════════════════════════════════════════════════════════╝  */
          {         
               id: "aetn6ec",
               tt: aetn6e,
               title: aetn6e,
          subtitle: añoc+", "+aetn6ec,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetns2c",
          sig: "/src/index.html?canto=aetos1c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetn6ec1}`, sC: "tc"},
                    { line: `${aetn6ec2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetn6ec1}`, sC: "tc"},
                    { line: `${aetn6ec2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetn6ec1}`, sC: "tc"},
                    { line: `${aetn6ec2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD EPIFANIA
          // SIGUIENTE CANTO DEBAJO

        /*╔═════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA I  AÑO A ║
          ║   EL BAUTISMO DEL SEÑOR                                     ║
          ╚═════════════════════════════════════════════════════════════╝  */
          {
               id: "aetos1c",
               tt: aetos1,
               title: aetos1,
          subtitle: añoc+", "+aetos1c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "3",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetn6ec",
          sig: "/src/index.html?canto=aetos2c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos1c1}`, sC: "tc"},
                    { line: `${aetos1c2}`, sC: ""},
                    { line: `${aetos1c3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos1c1}`, sC: "tc"},
                    { line: `${aetos1c2}`, sC: "tc"},
                    { line: `${aetos1c3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos1c1}`, sC: "tc"},
                    { line: `${aetos1c2}`, sC: "bg"},
                    { line: `${aetos1c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA I
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA II  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos2c",
               tt: aetos2,
               title: aetos2,
          subtitle: añoc+", "+aetos2c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos1c",
          sig: "/src/index.html?canto=aetos3c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos2c1}`, sC: "tc"},
                    { line: `${aetos2c2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos2c1}`, sC: "tc"},
                    { line: `${aetos2c2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos2c1}`, sC: "tc"},
                    { line: `${aetos2c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA II
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA III   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos3c",
               tt: aetos3,
               title: aetos3,
          subtitle: añoc+", "+aetos3c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos2c",
          sig: "/src/index.html?canto=aetos4c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos3c1}`, sC: "tc"},
                    { line: `${aetos3c2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos3c1}`, sC: "tc"},
                    { line: `${aetos3c2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos3c1}`, sC: "tc"},
                    { line: `${aetos3c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA III
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA IV  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos4c",
               tt: aetos4,
               title: aetos4,
          subtitle: añoc+", "+aetos4c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos3c",
          sig: "/src/index.html?canto=aetos5c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos4c1}`, sC: "tc"},
                    { line: `${aetos4c2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos4c1}`, sC: "tc"},
                    { line: `${aetos4c2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos4c1}`, sC: "tc"},
                    { line: `${aetos4c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA IV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA V     ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos5c",
               tt: aetos5,
               title: aetos5,
          subtitle: añoc+", "+aetos5c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos4c",
          sig: "/src/index.html?canto=aetos6c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos5c1}`, sC: "tc"},
                    { line: `${aetos5c2}`, sC: ""},
                    { line: `${aetos5c3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos5c1}`, sC: "tc"},
                    { line: `${aetos5c2}`, sC: "tc"},
                    { line: `${aetos5c3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos5c1}`, sC: "tc"},
                    { line: `${aetos5c2}`, sC: "bg"},
                    { line: `${aetos5c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA V
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA VI      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos6c",
               tt: aetos6,
               title: aetos6,
          subtitle: añoc+", "+aetos6c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos5c",
          sig: "/src/index.html?canto=aetos7c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos6c1}`, sC: "tc"},
                    { line: `${aetos6c2}`, sC: ""},
                    { line: `${aetos6c3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos6c1}`, sC: "tc"},
                    { line: `${aetos6c2}`, sC: "tc"},
                    { line: `${aetos6c3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos6c1}`, sC: "tc"},
                    { line: `${aetos6c2}`, sC: "bg"},
                    { line: `${aetos6c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA VII   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos7c",
               tt: aetos7,
               title: aetos7,
          subtitle: añoc+", "+aetos7c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos6c",
          sig: "/src/index.html?canto=aetos8c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos7c1}`, sC: "tc"},
                    { line: `${aetos7c2}`, sC: ""},
                    { line: `${aetos7c3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos7c1}`, sC: "tc"},
                    { line: `${aetos7c2}`, sC: "tc"},
                    { line: `${aetos7c3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos7c1}`, sC: "tc"},
                    { line: `${aetos7c2}`, sC: "bg"},
                    { line: `${aetos7c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA VIII  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos8c",
               tt: aetos8,
               title: aetos8,
          subtitle: añoc+", "+aetos8c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos7c",
          sig: "/src/index.html?canto=aetos9c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos8c1}`, sC: "tc"},
                    { line: `${aetos8c2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos8c1}`, sC: "tc"},
                    { line: `${aetos8c2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos8c1}`, sC: "tc"},
                    { line: `${aetos8c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA VIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA IX    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos9c",
               tt: aetos9,
               title: aetos9,
          subtitle: añoc+", "+aetos9c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos8c",
          sig: "/src/index.html?canto=aetos10c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos9c1}`, sC: "tc"},
                    { line: `${aetos9c2}`, sC: ""},
                    { line: `${aetos9c3}`, sC: ""},
                    { line: `${aetos9c4}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos9c1}`, sC: "tc"},
                    { line: `${aetos9c2}`, sC: ""},
                    { line: `${aetos9c3}`, sC: ""},
                    { line: `${aetos9c4}`, sC: ""},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos9c1}`, sC: "tc"},
                    { line: `${aetos9c2}`, sC: "bg"},
                    { line: `${aetos9c3}`, sC: "bg"},
                    { line: `${aetos9c4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA IX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA X      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos10c",
               tt: aetos10,
               title: aetos10,
          subtitle: añoc+", "+aetos10c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos9c",
          sig: "/src/index.html?canto=aetos11c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos10c1}`, sC: "tc"},
                    { line: `${aetos10c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos10c1}`, sC: "tc"},
                    { line: `${aetos10c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos10c1}`, sC: "tc"},
                    { line: `${aetos10c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA X
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XI    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos11c",
               tt: aetos11,
               title: aetos11,
          subtitle: añoc+", "+aetos11c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos10c",
          sig: "/src/index.html?canto=aetos12c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos11c1}`, sC: "tc"},
                    { line: `${aetos11c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos11c1}`, sC: "tc"},
                    { line: `${aetos11c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos11c1}`, sC: "tc"},
                    { line: `${aetos11c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XII   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos12c",
               tt: aetos12,
               title: aetos12,
          subtitle: añoc+", "+aetos12c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos11c",
          sig: "/src/index.html?canto=aetos13c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos12c1}`, sC: "tc"},
                    { line: `${aetos12c2}`, sC: "bg"},
                    { line: `${aetos12c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos12c1}`, sC: "tc"},
                    { line: `${aetos12c2}`, sC: "bg"},
                    { line: `${aetos12c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos12c1}`, sC: "tc"},
                    { line: `${aetos12c2}`, sC: "bg"},
                    { line: `${aetos12c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XIII  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos13c",
               tt: aetos13,
               title: aetos13,
          subtitle: añoc+", "+aetos13c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos12c",
          sig: "/src/index.html?canto=aetos14c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos13c1}`, sC: "tc"},
                    { line: `${aetos13c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos13c1}`, sC: "tc"},
                    { line: `${aetos13c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos13c1}`, sC: "tc"},
                    { line: `${aetos13c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XIV      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos14c",
               tt: aetos14,
               title: aetos14,
          subtitle: añoc+", "+aetos14c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos13c",
          sig: "/src/index.html?canto=aetos15c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos14c1}`, sC: "tc"},
                    { line: `${aetos14c2}`, sC: "bg"},
                    { line: `${aetos14c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos14c1}`, sC: "tc"},
                    { line: `${aetos14c2}`, sC: "bg"},
                    { line: `${aetos14c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos14c1}`, sC: "tc"},
                    { line: `${aetos14c2}`, sC: "bg"},
                    { line: `${aetos14c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XV    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos15c",
               tt: aetos15,
               title: aetos15,
          subtitle: añoc+", "+aetos15c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos14c",
          sig: "/src/index.html?canto=aetos16c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos15c1}`, sC: "tc"},
                    { line: `${aetos15c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos15c1}`, sC: "tc"},
                    { line: `${aetos15c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos15c1}`, sC: "tc"},
                    { line: `${aetos15c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XVI      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos16c",
               tt: aetos16,
               title: aetos16,
          subtitle: añoc+", "+aetos16c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos15c",
          sig: "/src/index.html?canto=aetos17c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos16c1}`, sC: "tc"},
                    { line: `${aetos16c2}`, sC: "bg"},
                    { line: `${aetos16c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos16c1}`, sC: "tc"},
                    { line: `${aetos16c2}`, sC: "bg"},
                    { line: `${aetos16c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetosvsc1}`, sC: "tc"},
                    { line: `${aetosvsc2}`, sC: "bg"},
                    { line: `${aetosvsc3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XVI

          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XVII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos17c",
               tt: aetos17,
               title: aetos17,
          subtitle: añoc+", "+aetos17c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos16c",
          sig: "/src/index.html?canto=aetos18c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos17c1}`, sC: "tc"},
                    { line: `${aetos17c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos17c1}`, sC: "tc"},
                    { line: `${aetos17c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos17c1}`, sC: "tc"},
                    { line: `${aetos17c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XVII

          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XVIII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos18c",
               tt: aetos18,
               title: aetos18,
          subtitle: añoc+", "+aetos18c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos17c",
          sig: "/src/index.html?canto=aetos19c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos18c1}`, sC: "tc"},
                    { line: `${aetos18c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos18c1}`, sC: "tc"},
                    { line: `${aetos18c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos18c1}`, sC: "tc"},
                    { line: `${aetos18c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XVIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XIX      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos19c",
               tt: aetos19,
               title: aetos19,
          subtitle: añoc+", "+aetos19c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos18c",
          sig: "/src/index.html?canto=aetos20c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos19c1}`, sC: "tc"},
                    { line: `${aetos19c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos19c1}`, sC: "tc"},
                    { line: `${aetos19c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos19c1}`, sC: "tc"},
                    { line: `${aetos19c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XIX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XX      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos20c",
               tt: aetos20,
               title: aetos20,
          subtitle: añoc+", "+aetos20c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos19c",
          sig: "/src/index.html?canto=aetos21c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos20c1}`, sC: "tc"},
                    { line: `${aetos20c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos20c1}`, sC: "tc"},
                    { line: `${aetos20c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos20c1}`, sC: "tc"},
                    { line: `${aetos20c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXI      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos21c",
               tt: aetos21,
               title: aetos21,
          subtitle: añoc+", "+aetos21c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos20c",
          sig: "/src/index.html?canto=aetos22c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos21c1}`, sC: "tc"},
                    { line: `${aetos21c2}`, sC: "bg"},
                    { line: `${aetos21c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos21c1}`, sC: "tc"},
                    { line: `${aetos21c2}`, sC: "bg"},
                    { line: `${aetos21c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos16c1}`, sC: "tc"},
                    { line: `${aetos16c2}`, sC: "bg"},
                    { line: `${aetos16c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos22c",
               tt: aetos22,
               title: aetos22,
          subtitle: añoc+", "+aetos22c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos21c",
          sig: "/src/index.html?canto=aetos23c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos22c1}`, sC: "tc"},
                    { line: `${aetos22c2}`, sC: "bg"},
                    { line: `${aetos22c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos22c1}`, sC: "tc"},
                    { line: `${aetos22c2}`, sC: "bg"},
                    { line: `${aetos22c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos21c1}`, sC: "tc"},
                    { line: `${aetos21c2}`, sC: "bg"},
                    { line: `${aetos21c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIII      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetos23c",
               tt: aetos23,
               title: aetos23,
          subtitle: añoc+", "+aetos23c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos22c",
          sig: "/src/index.html?canto=aetos24c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos23c1}`, sC: "tc"},
                    { line: `${aetos23c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos23c1}`, sC: "tc"},
                    { line: `${aetos23c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos22c1}`, sC: "tc"},
                    { line: `${aetos22c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIV      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos24c1}`, sC: "tc"},
                    { line: `${aetos24c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos24c1}`, sC: "tc"},
                    { line: `${aetos24c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos24c1}`, sC: "tc"},
                    { line: `${aetos24c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXV      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos25c1}`, sC: "tc"},
                    { line: `${aetos25c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos25c1}`, sC: "tc"},
                    { line: `${aetos25c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos25c1}`, sC: "tc"},
                    { line: `${aetos25c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXV
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVI      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos26c1}`, sC: "tc"},
                    { line: `${aetos26c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos26c1}`, sC: "tc"},
                    { line: `${aetos26c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos23c1}`, sC: "tc"},
                    { line: `${aetos23c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVII      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos27c1}`, sC: "tc"},
                    { line: `${aetos27c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos27c1}`, sC: "tc"},
                    { line: `${aetos27c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos26c1}`, sC: "tc"},
                    { line: `${aetos26c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXVIII      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos28c1}`, sC: "tc"},
                    { line: `${aetos28c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos28c1}`, sC: "tc"},
                    { line: `${aetos28c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos28c1}`, sC: "tc"},
                    { line: `${aetos28c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXIX      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos29c1}`, sC: "tc"},
                    { line: `${aetos29c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos29c1}`, sC: "tc"},
                    { line: `${aetos29c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos29c1}`, sC: "tc"},
                    { line: `${aetos29c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXX      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos30c1}`, sC: "tc"},
                    { line: `${aetos30c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos30c1}`, sC: "tc"},
                    { line: `${aetos30c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos30c1}`, sC: "tc"},
                    { line: `${aetos30c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXX
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXI      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos31c1}`, sC: "tc"},
                    { line: `${aetos31c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos31c1}`, sC: "tc"},
                    { line: `${aetos31c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos31c1}`, sC: "tc"},
                    { line: `${aetos31c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXI
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXII      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos32c1}`, sC: "tc"},
                    { line: `${aetos32c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos32c1}`, sC: "tc"},
                    { line: `${aetos32c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos32c1}`, sC: "tc"},
                    { line: `${aetos32c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXII
          // SIGUIENTE CANTO DEBAJO
           /*╔═══════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXIII ║
          ╚═══════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos33c1}`, sC: "tc"},
                    { line: `${aetos33c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos33c1}`, sC: "tc"},
                    { line: `${aetos33c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos27c1}`, sC: "tc"},
                    { line: `${aetos27c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIII
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO ORDINARIO SEMANA XXXIV      ║
          ╚════════════════════════════════════════════════════════╝  */
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
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos34c1}`, sC: "tc"},
                    { line: `${aetos34c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos34c1}`, sC: "tc"},
                    { line: `${aetos34c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos34c1}`, sC: "tc"},
                    { line: `${aetos34c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIV
          // SIGUIENTE CANTO DEBAJO

             /*╔═════════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO SANTISIMO CUERPO Y SANGRE DE CRISTO  ║
          ╚═════════════════════════════════════════════════════════════════╝  */
          {
               id: "aetosscscc",
               tt: aetosscsc,
               title: aetosscsc,
          subtitle: añoc+", "+aetosscsca,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetos34c",
          sig: "/src/index.html?canto=aetosvsc",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetosscscc1}`, sC: "tc"},
                    { line: `${aetosscscc2}`, sC: "bg"},
                    { line: `${aetosscscc3}`, sC: "bg"},
                    { line: `${aetosscscc4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetosscscc1}`, sC: "tc"},
                    { line: `${aetosscscc2}`, sC: "bg"},
                    { line: `${aetosscscc3}`, sC: "bg"},
                    { line: `${aetosscscc4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetosscscc1}`, sC: "tc"},
                    { line: `${aetosscscc2}`, sC: "bg"},
                    { line: `${aetosscscc3}`, sC: "bg"},
                    { line: `${aetosscscc4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO Santísimo Cuerpo y Sangre de Cristo
          // SIGUIENTE CANTO DEBAJO
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO - SAGRADO CORAZÓN DE JESUS  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetosvsc",
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
          ant: "/src/index.html?canto=aetosscscc",
          sig: "/src/index.html?canto=aetcs1c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetosvsc1}`, sC: "tc"},
                    { line: `${aetosvsc2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetosvsc1}`, sC: "tc"},
                    { line: `${aetosvsc2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos33c1}`, sC: "tc"},
                    { line: `${aetos33c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

          ], lder: [
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXVI
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA I    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs1c",
               tt: aetcs1,
               title: aetcs1,
          subtitle: añoc+", "+aetcs1c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetosvsc",
          sig: "/src/index.html?canto=aetcs2c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    
                    { line: gSi1, sC: "tc bg"},
                    { line: gSi2, sC: "bg"},
                    { line: gSi3, sC: "bg"},

                    { line: "", sC: "adb1"},

                    { line: gSi4, sC: "ta as bg"},
                    { line: gSi6, sC: "as bg"},
                    { line: gSi7, sC: "as bg"},

                    { line: txtmsg, sC: "anotc",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs1c1}`, sC: "tc"},
                    { line: `${aetcs1c2}`, sC: "bg"},                    
                   ]},

          { line: "", sC: "adb1"},                  
          {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
                         triggerLine: gSi5, sC: "ta as bg", lines: [
                              { line: gSi6, sC: "as bg" },
                              { line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                              
                    { line: gSd1, sC: "tc bg"},
                    { line: gSd2, sC: "bg"},
                    { line: gSd3, sC: "bg"},

                    { line: "", sC: "adb1"},

                    { line: gSd4, sC: "ta as bg"},
                    { line: gSd6, sC: "as bg"},
                    { line: gSd7, sC: "as bg"},

                    { line: txtmsg, sC: "anotc",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs1c1}`, sC: "tc"},
                    { line: `${aetcs1c2}`, sC: "bg"},
                    
                   ]},

          { line: "", sC: "adb1"},
          {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
                         triggerLine: gSd5, sC: "ta as bg", lines: [
                              { line: gSd6, sC: "as bg" },
                              { line: gSd7, sC: "as bg" }]},
               
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA I
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA II   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs2c",
               tt: aetcs2,
               title: aetcs2,
          subtitle: añoc+", "+aetcs2c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs1c",
          sig: "/src/index.html?canto=aetcs3c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anotc",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs2c1}`, sC: "tc"},
                    { line: `${aetcs2c2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anotc",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs2c1}`, sC: "tc"},
                    { line: `${aetcs2c2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA II
          // SIGUIENTE CANTO DEBAJO



        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA III  ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs3c",
               tt: aetcs3,
               title: aetcs3,
          subtitle: añoc+", "+aetcs3c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs2c",
          sig: "/src/index.html?canto=aetcs4c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anotc",color: "gray"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs3c1}`, sC: "tc"},
                    { line: `${aetcs3c2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs3c1}`, sC: "tc"},
                    { line: `${aetcs3c2}`, sC: "bg"},

                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA III
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA IV   ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs4c",
               tt: aetcs4,
               title: aetcs4,
          subtitle: añoc+", "+aetcs4c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs3c",
          sig: "/src/index.html?canto=aetcs5c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs4c1}`, sC: "tc"},
                    { line: `${aetcs4c2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs4c1}`, sC: "tc"},
                    { line: `${aetcs4c2}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA III
          // SIGUIENTE CANTO DEBAJO

        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA SEMANA V    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs5c",
               tt: aetcs5,
               title: aetcs5,
          subtitle: añoc+", "+aetcs5c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs4c",
          sig: "/src/index.html?canto=aetcs6c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs5c1}`, sC: "tc"},
                    { line: `${aetcs5c2}`, sC: "bg"},
                    { line: `${aetcs5c3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},
                    
                    { line: `${aetcs5c1}`, sC: "tc"},
                    { line: `${aetcs5c2}`, sC: "bg"},
                    { line: `${aetcs5c3}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA V
          // SIGUIENTE CANTO DEBAJO

           /*╔═══════════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO CUARESMA DOMINGO DE RAMOS   ║
          ╚═══════════════════════════════════════════════════════════════╝  */
          {
               id: "aetcs6c",
               tt: aetcs6,
               title: aetcs6,
          subtitle: añoc+", "+aetcs6c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs4c",
          sig: "/src/index.html?canto=aetcsjsc",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs6c1}`, sC: "tc"},
                    { line: `${aetcs6c2}`, sC: "bg"},
                    { line: `${aetcs6c3}`, sC: "bg"},
                    { line: `${aetcs6c4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcs6c1}`, sC: "tc"},
                    { line: `${aetcs6c2}`, sC: "bg"},
                    { line: `${aetcs6c3}`, sC: "bg"},
                    { line: `${aetcs6c4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: TIEMPO CUARESMA SEMANA VI
          // SIGUIENTE CANTO DEBAJO


           /*╔════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO JUEVES SANTO    ║
          ╚════════════════════════════════════════════╝  */
          {
               id: "aetcsjsc",
               tt: aetcsjs,
               title: aetcsjs,
          subtitle: añoc+", "+aetcsjsa,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcs6c",
          sig: "/src/index.html?canto=aetcsvsc",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsjsc1}`, sC: "tc"},
                    { line: `${aetcsjsc2}`, sC: "bg"},
                    { line: `${aetcsjsc3}`, sC: "bg"},
                    { line: `${aetcsjsc4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsjsc1}`, sC: "tc"},
                    { line: `${aetcsjsc2}`, sC: "bg"},
                    { line: `${aetcsjsc3}`, sC: "bg"},
                    { line: `${aetcsjsc4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: JUEVES SANTO
          // SIGUIENTE CANTO DEBAJO

           /*╔═════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO VIERNES SANTO    ║
          ╚═════════════════════════════════════════════╝  */
          {
               id: "aetcsvsc",
               tt: aetcsvs,
               title: aetcsvs,
          subtitle: añoc+", "+aetcsvsa,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcsjsc",
          sig: "/src/index.html?canto=aetcsssc",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: "La estrofa que hace el cantor se canta con la \n melodía del «Aleluya interleccional - Modelo I». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSi1, sC: "tc bg"},{ line: gSi2, sC: "bg"},{ line: gSi3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSi4, sC: "ta as bg"},{ line: gSi6, sC: "as bg"},{ line: gSi7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsvsc1}`, sC: "tc"},
                    { line: `${aetcsvsc2}`, sC: "bg"},
                    { line: `${aetcsvsc3}`, sC: "bg"},
                    { line: `${aetcsvsc4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSi5, sC: "ta as bg", lines: [{ line: gSi6, sC: "as bg" },{ line: gSi7, sC: "as bg" }]},

          ], lder: [

               { type: "collapsible-block", id: "asamblea_cuaresma_1", initialState: "expanded",
               triggerLine: "Modelo II", sC: "as mod1", color: "red", lines: [
                    { line: "Toda la antífona se canta con la misma melodía \n del «Aleluya interleccional - Modelo I».». ", sC: "cnota"},{ line: "", sC: "adb1"},
                    { line: gSd1, sC: "tc bg"},{ line: gSd2, sC: "bg"},{ line: gSd3, sC: "bg"},{ line: "", sC: "adb1"},
                    { line: gSd4, sC: "ta as bg"},{ line: gSd6, sC: "as bg"},{ line: gSd7, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: "(Mi,m,20)(Re,,70)", sC: "bnota"},

                    { line: `${aetcsvsc1}`, sC: "tc"},
                    { line: `${aetcsvsc2}`, sC: "bg"},
                    { line: `${aetcsvsc3}`, sC: "bg"},
                    { line: `${aetcsvsc4}`, sC: "bg"},
                    
                 ]},
                  { line: "", sC: "adb1"},
                  {   type: "collapsible-block", id: "asamblea_cuaresma_2", initialState: "collapsed",
               triggerLine: gSd5, sC: "ta as bg", lines: [{ line: gSd6, sC: "as bg" },{ line: gSd7, sC: "as bg" }]},               
          ]}, 
          // ULTIMA LINEA DEL CANTO: VIERNES SANTO
          // SIGUIENTE CANTO DEBAJO

           /*╔══════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO VIGILIA PASCUAL   ║
          ╚══════════════════════════════════════════════╝  */
   {
        id: "aetcsssc",
        tt: "Aleluya Pascual",
        title: "Vigilia Pascual",
        subtitle: "Aleluya Pascual",
        category: ["Liturgia","Pascua"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        cejilla: "",
        nCan: "La asamblea se divide para cantar a tres voces: A1, A2 y A3 y cada voz va entrando tal y como se indica en el esquema.",
        nCanURL: "",
        dbno: "181",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/aleluyapascual.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
              mobile: { v: 23, i: 1 }, // Para celular
              tablet: { v: 25, i: 1 },  // Para tablet
             desktop: { v: 7, i: 1 },   // Para PC
        desktopsmall: { v: 7, i: 1 }},   // Para PC
        ant: "/src/index.html?canto=aetcsvsc",
        sig: "/src/index.html?canto=aetps1c",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Cristo Jesús ha resucitado., (La,,10)(Mi,,100)(La,,218)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta1 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta2 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo Jesús ha resucitado., (La,,10)(Mi,,100)(La,,218)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta2 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "ta as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta1 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Cristo Jesús ha resucitado., (La,,10)(Mi,,100)(La,,218)", sC: "tc"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,105)(La,,200)", sC: "ta3 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta1 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "ta2 as"},
            { line: "ALELUYA, ALELUYA, ALELUYA., (Mi,,154)(La,,250)", sC: "as"},
    ], lder: [
]}, // ULTIMA LINEA DEL CANTO: ALELUYA PASCUAL
// SIGUIENTE CANTO DEBAJO
// ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII


           /*╔═════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA I   ║
          ╚═════════════════════════════════════════════════════╝  */
          {
               id: "aetps1c",
               tt: aetps1,
               title: aetps1,
          subtitle: añoc+", "+aetps1c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetcsssc",
          sig: "/src/index.html?canto=aetps2c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps1c1}`, sC: "tc"},
                    { line: `${aetps1c2}`, sC: "bg"},
                    { line: `${aetps1c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                     { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},
                    
                    { line: `${aetps1c1}`, sC: "tc"},
                    { line: `${aetps1c2}`, sC: "bg"},
                    { line: `${aetps1c3}`, sC: "bg"},

                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},

                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps1c1}`, sC: "tc"},
                    { line: `${aetps1c2}`, sC: "bg"},
                    { line: `${aetps1c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA I
             /*╔══════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA II AÑO A ║
          ╚══════════════════════════════════════════════════════════╝  */
          {
               id: "aetps2c",
               tt: aetps2,
               title: aetps2,
          subtitle: añoc+", "+aetps2c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps1c",
          sig: "/src/index.html?canto=aetps3c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps2c1}`, sC: "tc"},
                    { line: `${aetps2c2}`, sC: "bg"},
                    { line: `${aetps2c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps2c1}`, sC: "tc"},
                    { line: `${aetps2c2}`, sC: "bg"},
                    { line: `${aetps2c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps2c1}`, sC: "tc"},
                    { line: `${aetps2c2}`, sC: "bg"},
                    { line: `${aetps2c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA II
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA III    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps3c",
               tt: aetps3,
               title: aetps3,
          subtitle: añoc+", "+aetps3c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps2c",
          sig: "/src/index.html?canto=aetps4c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps3c1}`, sC: "tc"},
                    { line: `${aetps3c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps3c1}`, sC: "tc"},
                    { line: `${aetps3c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps3c1}`, sC: "tc"},
                    { line: `${aetps3c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA III
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA IV     ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps4c",
               tt: aetps4,
               title: aetps4,
          subtitle: añoc+", "+aetps4c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps3c",
          sig: "/src/index.html?canto=aetps5c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps4c1}`, sC: "tc"},
                    { line: `${aetps4c2}`, sC: "bg"},
                    { line: `${aetps4c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps4c1}`, sC: "tc"},
                    { line: `${aetps4c2}`, sC: "bg"},
                    { line: `${aetps4c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps4c1}`, sC: "tc"},
                    { line: `${aetps4c2}`, sC: "bg"},
                    { line: `${aetps4c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA IV
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA V      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps5c",
               tt: aetps5,
               title: aetps5,
          subtitle: añoc+", "+aetps5c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps4c",
          sig: "/src/index.html?canto=aetps6c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps5c1}`, sC: "tc"},
                    { line: `${aetps5c2}`, sC: "bg"},
                    { line: `${aetps5c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"}]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps5c1}`, sC: "tc"},
                    { line: `${aetps5c2}`, sC: "bg"},
                    { line: `${aetps5c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps5c1}`, sC: "tc"},
                    { line: `${aetps5c2}`, sC: "bg"},
                    { line: `${aetps5c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA V
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA VI     ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps6c",
               tt: aetps6,
               title: aetps6,
          subtitle: añoc+", "+aetps6c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps5c",
          sig: "/src/index.html?canto=aetps7c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps6c1}`, sC: "tc"},
                    { line: `${aetps6c2}`, sC: "bg"},
                    { line: `${aetps6c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps6c1}`, sC: "tc"},
                    { line: `${aetps6c2}`, sC: "bg"},
                    { line: `${aetps6c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps6c1}`, sC: "tc"},
                    { line: `${aetps6c2}`, sC: "bg"},
                    { line: `${aetps6c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VI
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA VII    ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps7c",
               tt: aetps7,
               title: aetps7,
          subtitle: añoc+", "+aetps7c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps6c",
          sig: "/src/index.html?canto=aetps8c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps7c1}`, sC: "tc"},
                    { line: `${aetps7c2}`, sC: "bg"},
                    { line: `${aetps7c3}`, sC: "bg"},
                    { line: `${aetps7c4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps7c1}`, sC: "tc"},
                    { line: `${aetps7c2}`, sC: "bg"},
                    { line: `${aetps7c3}`, sC: "bg"},
                    { line: `${aetps7c4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps7c1}`, sC: "tc"},
                    { line: `${aetps7c2}`, sC: "bg"},
                    { line: `${aetps7c3}`, sC: "bg"},
                    { line: `${aetps7c4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO La Ascensión del Señor      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetpsasc",
               tt: aetpsas,
               title: aetpsas,
          subtitle: añoc+", "+aetpsasa,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps6c",
          sig: "/src/index.html?canto=aetps8c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetpsasc1}`, sC: "tc"},
                    { line: `${aetpsasc2}`, sC: "bg"},
                    { line: `${aetpsasc3}`, sC: "bg"},
                    { line: `${aetpsasc4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetpsasc1}`, sC: "tc"},
                    { line: `${aetpsasc2}`, sC: "bg"},
                    { line: `${aetpsasc3}`, sC: "bg"},
                    { line: `${aetpsasc4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetpsasc1}`, sC: "tc"},
                    { line: `${aetpsasc2}`, sC: "bg"},
                    { line: `${aetpsasc3}`, sC: "bg"},
                    { line: `${aetpsasc4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VII
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO DOMINGO DE PENTECOSTES      ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps8c",
               tt: aetps8c,
               title: aetps8c,
          subtitle: añoc+", "+aetps8c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
          ant: "/src/index.html?canto=aetps7c",
          sig: "/src/index.html?canto=aetps9c",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps8c1}`, sC: "tc"},
                    { line: `${aetps8c2}`, sC: "bg"},
                    { line: `${aetps8c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps8c1}`, sC: "tc"},
                    { line: `${aetps8c2}`, sC: "bg"},
                    { line: `${aetps8c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps8c1}`, sC: "tc"},
                    { line: `${aetps8c2}`, sC: "bg"},
                    { line: `${aetps8c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA VIII
        /*╔════════════════════════════════════════════════════════╗
          ║   ACLAMACIÓN DEL EVANGELIO TIEMPO PASCUA SEMANA IX     ║
          ╚════════════════════════════════════════════════════════╝  */
          {
               id: "aetps9c",   //La Santísima Trinidad
               tt: aetps9,
               title: aetps9,
          subtitle: añoc+", "+aetps9c,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "No",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
                         ant: "/src/index.html?canto=aetps8c",
                         sig: "/src/index.html?canto=aetas1b",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_ae_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps9c1}`, sC: "tc"},
                    { line: `${aetps9c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_ae_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps9c1}`, sC: "tc"},
                    { line: `${aetps9c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_ae_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetps9c1}`, sC: "tc"},
                    { line: `${aetps9c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO PASCUA SEMANA IX



          ); //LLAVE DE CIERRE DEL CANTO

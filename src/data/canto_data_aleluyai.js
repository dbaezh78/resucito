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
               ant: "/index-ae.html",
               sig: "/src/index.html?canto=aetas2a",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas1a1}`, sC: "tc"},
                    { line: `${aetas1a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                     { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas1a1}`, sC: "tc"},
                    { line: `${aetas1a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas2a1}`, sC: "tc"},
                    { line: `${aetas2a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas2a1}`, sC: "tc"},
                    { line: `${aetas2a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas3a1}`, sC: "tc"},
                    { line: `${aetas3a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas3a1}`, sC: "tc"},
                    { line: `${aetas3a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas4a1}`, sC: "tc"},
                    { line: `${aetas4a2}`, sC: ""},
                    { line: `${aetas4a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas4a1}`, sC: "tc"},
                    { line: `${aetas4a2}`, sC: "tc"},
                    { line: `${aetas4a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmva1}`, sC: "tc"},
                    { line: `${aetns25dicmva2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmva1}`, sC: "tc"},
                    { line: `${aetns25dicmva2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmma1}`, sC: "tc"},
                    { line: `${aetns25dicmma2}`, sC: ""},
                    { line: `${aetns25dicmma3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmma1}`, sC: "tc"},
                    { line: `${aetns25dicmma2}`, sC: "tc"},
                    { line: `${aetns25dicmma3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmaa1}`, sC: "tc"},
                    { line: `${aetns25dicmaa2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmaa1}`, sC: "tc"},
                    { line: `${aetns25dicmaa2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmda1}`, sC: "tc"},
                    { line: `${aetns25dicmda2}`, sC: ""},
                    { line: `${aetns25dicmda3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmda1}`, sC: "tc"},
                    { line: `${aetns25dicmda2}`, sC: "tc"},
                    { line: `${aetns25dicmda3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetn1ea1}`, sC: "tc"},
                    { line: `${aetn1ea2}`, sC: ""},
                    { line: `${aetn1ea3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetn1ea1}`, sC: "tc"},
                    { line: `${aetn1ea2}`, sC: "tc"},
                    { line: `${aetn1ea3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
          sig: "/src/index.html?canto=aetns6a",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns2a1}`, sC: "tc"},
                    { line: `${aetns2a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns2a1}`, sC: "tc"},
                    { line: `${aetns2a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns6a1}`, sC: "tc"},
                    { line: `${aetns6a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns6a1}`, sC: "tc"},
                    { line: `${aetns6a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns6a1}`, sC: "tc"},
                    { line: `${aetns6a2}`, sC: "bg"},
                    
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
          ant: "/src/index.html?canto=aetns6a",
          sig: "/src/index.html?canto=aetos2a",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos1a1}`, sC: "tc"},
                    { line: `${aetos1a2}`, sC: ""},
                    { line: `${aetos1a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos1a1}`, sC: "tc"},
                    { line: `${aetos1a2}`, sC: "tc"},
                    { line: `${aetos1a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos2a1}`, sC: "tc"},
                    { line: `${aetos2a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos2a1}`, sC: "tc"},
                    { line: `${aetos2a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos3a1}`, sC: "tc"},
                    { line: `${aetos3a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos3a1}`, sC: "tc"},
                    { line: `${aetos3a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos4a1}`, sC: "tc"},
                    { line: `${aetos4a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos4a1}`, sC: "tc"},
                    { line: `${aetos4a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos5a1}`, sC: "tc"},
                    { line: `${aetos5a2}`, sC: ""},
                    { line: `${aetos5a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos5a1}`, sC: "tc"},
                    { line: `${aetos5a2}`, sC: "tc"},
                    { line: `${aetos5a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos6a1}`, sC: "tc"},
                    { line: `${aetos6a2}`, sC: ""},
                    { line: `${aetos6a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos6a1}`, sC: "tc"},
                    { line: `${aetos6a2}`, sC: "tc"},
                    { line: `${aetos6a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos7a1}`, sC: "tc"},
                    { line: `${aetos7a2}`, sC: ""},
                    { line: `${aetos7a3}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos7a1}`, sC: "tc"},
                    { line: `${aetos7a2}`, sC: "tc"},
                    { line: `${aetos7a3}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos8a1}`, sC: "tc"},
                    { line: `${aetos8a2}`, sC: ""},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos8a1}`, sC: "tc"},
                    { line: `${aetos8a2}`, sC: "tc"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos10a1}`, sC: "tc"},
                    { line: `${aetos10a2}`, sC: "bg"},
                    { line: `${aetos10a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos10a1}`, sC: "tc"},
                    { line: `${aetos10a2}`, sC: "bg"},
                    { line: `${aetos10a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos11a1}`, sC: "tc"},
                    { line: `${aetos11a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos11a1}`, sC: "tc"},
                    { line: `${aetos11a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos12a1}`, sC: "tc"},
                    { line: `${aetos12a2}`, sC: "bg"},
                    { line: `${aetos12a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos12a1}`, sC: "tc"},
                    { line: `${aetos12a2}`, sC: "bg"},
                    { line: `${aetos12a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos14a1}`, sC: "tc"},
                    { line: `${aetos14a2}`, sC: "bg"},
                    { line: `${aetos14a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos14a1}`, sC: "tc"},
                    { line: `${aetos14a2}`, sC: "bg"},
                    { line: `${aetos14a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos15a1}`, sC: "tc"},
                    { line: `${aetos15a2}`, sC: "bg"},
                    { line: `${aetos15a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos15a1}`, sC: "tc"},
                    { line: `${aetos15a2}`, sC: "bg"},
                    { line: `${aetos15a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos16a1}`, sC: "tc"},
                    { line: `${aetos16a2}`, sC: "bg"},
                    { line: `${aetos16a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos16a1}`, sC: "tc"},
                    { line: `${aetos16a2}`, sC: "bg"},
                    { line: `${aetos16a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos18a1}`, sC: "tc"},
                    { line: `${aetos18a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos18a1}`, sC: "tc"},
                    { line: `${aetos18a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos19a1}`, sC: "tc"},
                    { line: `${aetos19a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos19a1}`, sC: "tc"},
                    { line: `${aetos19a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos20a1}`, sC: "tc"},
                    { line: `${aetos20a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos20a1}`, sC: "tc"},
                    { line: `${aetos20a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos21a1}`, sC: "tc"},
                    { line: `${aetos21a2}`, sC: "bg"},
                    { line: `${aetos21a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos21a1}`, sC: "tc"},
                    { line: `${aetos21a2}`, sC: "bg"},
                    { line: `${aetos21a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos22a1}`, sC: "tc"},
                    { line: `${aetos22a2}`, sC: "bg"},
                    { line: `${aetos22a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos22a1}`, sC: "tc"},
                    { line: `${aetos22a2}`, sC: "bg"},
                    { line: `${aetos22a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos23a1}`, sC: "tc"},
                    { line: `${aetos23a2}`, sC: "bg"},
                    { line: `${aetos23a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos23a1}`, sC: "tc"},
                    { line: `${aetos23a2}`, sC: "bg"},
                    { line: `${aetos23a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos25a1}`, sC: "tc"},
                    { line: `${aetos25a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos25a1}`, sC: "tc"},
                    { line: `${aetos25a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos26a1}`, sC: "tc"},
                    { line: `${aetos26a2}`, sC: "bg"},
                    { line: `${aetos26a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos26a1}`, sC: "tc"},
                    { line: `${aetos26a2}`, sC: "bg"},
                    { line: `${aetos26a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos27a1}`, sC: "tc"},
                    { line: `${aetos27a2}`, sC: "bg"},
                    { line: `${aetos27a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos27a1}`, sC: "tc"},
                    { line: `${aetos27a2}`, sC: "bg"},
                    { line: `${aetos27a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos29a1}`, sC: "tc"},
                    { line: `${aetos29a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos29a1}`, sC: "tc"},
                    { line: `${aetos29a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos30a1}`, sC: "tc"},
                    { line: `${aetos30a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos30a1}`, sC: "tc"},
                    { line: `${aetos30a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos31a1}`, sC: "tc"},
                    { line: `${aetos31a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos31a1}`, sC: "tc"},
                    { line: `${aetos31a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos32a1}`, sC: "tc"},
                    { line: `${aetos32a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos32a1}`, sC: "tc"},
                    { line: `${aetos32a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos33a1}`, sC: "tc"},
                    { line: `${aetos33a2}`, sC: "bg"},
                    { line: `${aetos33a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos33a1}`, sC: "tc"},
                    { line: `${aetos33a2}`, sC: "bg"},
                    { line: `${aetos33a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetosvsa1}`, sC: "tc"},
                    { line: `${aetosvsa2}`, sC: "bg"},
                    { line: `${aetosvsa3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetosvsa1}`, sC: "tc"},
                    { line: `${aetosvsa2}`, sC: "bg"},
                    { line: `${aetosvsa3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps1a1}`, sC: "tc"},
                    { line: `${aetps1a2}`, sC: "bg"},
                    { line: `${aetps1a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                     { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},
                    
                    { line: `${aetps1a1}`, sC: "tc"},
                    { line: `${aetps1a2}`, sC: "bg"},
                    { line: `${aetps1a3}`, sC: "bg"},

                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps2a1}`, sC: "tc"},
                    { line: `${aetps2a2}`, sC: "bg"},
                    { line: `${aetps2a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps2a1}`, sC: "tc"},
                    { line: `${aetps2a2}`, sC: "bg"},
                    { line: `${aetps2a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps3a1}`, sC: "tc"},
                    { line: `${aetps3a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps3a1}`, sC: "tc"},
                    { line: `${aetps3a2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps4a1}`, sC: "tc"},
                    { line: `${aetps4a2}`, sC: "bg"},
                    { line: `${aetps4a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps4a1}`, sC: "tc"},
                    { line: `${aetps4a2}`, sC: "bg"},
                    { line: `${aetps4a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps5a1}`, sC: "tc"},
                    { line: `${aetps5a2}`, sC: "bg"},
                    { line: `${aetps5a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"}]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps5a1}`, sC: "tc"},
                    { line: `${aetps5a2}`, sC: "bg"},
                    { line: `${aetps5a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps8a1}`, sC: "tc"},
                    { line: `${aetps8a2}`, sC: "bg"},
                    { line: `${aetps8a3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps8a1}`, sC: "tc"},
                    { line: `${aetps8a2}`, sC: "bg"},
                    { line: `${aetps8a3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetps9a1}`, sC: "tc"},
                    { line: `${aetps9a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetps9a1}`, sC: "tc"},
                    { line: `${aetps9a2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas1b1}`, sC: "tc"},
                    { line: `${aetas1b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas1b1}`, sC: "tc"},
                    { line: `${aetas1b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas2b1}`, sC: "tc"},
                    { line: `${aetas2b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas2b1}`, sC: "tc"},
                    { line: `${aetas2b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas2b1}`, sC: "tc"},
                    { line: `${aetas2b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA II
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas3b1}`, sC: "tc"},
                    { line: `${aetas3b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas3b1}`, sC: "tc"},
                    { line: `${aetas3b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas3b1}`, sC: "tc"},
                    { line: `${aetas3b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA III
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas4b1}`, sC: "tc"},
                    { line: `${aetas4b2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas4b1}`, sC: "tc"},
                    { line: `${aetas4b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas4b1}`, sC: "tc"},
                    { line: `${aetas4b2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmvb1}`, sC: "tc"},
                    { line: `${aetns25dicmvb2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmvb1}`, sC: "tc"},
                    { line: `${aetns25dicmvb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmvb1}`, sC: "tc"},
                    { line: `${aetns25dicmvb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmmb1}`, sC: "tc"},
                    { line: `${aetns25dicmmb2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmmb1}`, sC: "tc"},
                    { line: `${aetns25dicmmb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmmb1}`, sC: "tc"},
                    { line: `${aetns25dicmmb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmab1}`, sC: "tc"},
                    { line: `${aetns25dicmab2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmab1}`, sC: "tc"},
                    { line: `${aetns25dicmab2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmab1}`, sC: "tc"},
                    { line: `${aetns25dicmab2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmdb1}`, sC: "tc"},
                    { line: `${aetns25dicmdb2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmdb1}`, sC: "tc"},
                    { line: `${aetns25dicmdb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmdb1}`, sC: "tc"},
                    { line: `${aetns25dicmdb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetnssfb1}`, sC: "tc"},
                    { line: `${aetnssfb2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetnssfb1}`, sC: "tc"},
                    { line: `${aetnssfb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetnssfb1}`, sC: "tc"},
                    { line: `${aetnssfb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV


        /*╔══════════════════════════════════════════════════════════╗
          ║    ACLAMACIÓN DEL EVANGELIO Santa Maria Madre de Dios    ║
          ╚══════════════════════════════════════════════════════════╝  */
          {
               id: "aetn1eb",
               tt: aetn1e,
               title: aetn1e,
          subtitle: añob+", "+aetn1eb,
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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetn1eb1}`, sC: "tc"},
                    { line: `${aetn1eb2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetn1eb1}`, sC: "tc"},
                    { line: `${aetn1eb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetn1eb1}`, sC: "tc"},
                    { line: `${aetn1eb2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA IV



// SANTA MARIA MADRE DE DIOS




















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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas1c1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
                    { line: `${aetas1c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas1c1}`, sC: "tc"},
                    { line: `${aetas1c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetas1c1}`, sC: "tc"},
                    { line: `${aetas1c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA I
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas2c1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
                    { line: `${aetas2c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas2c1}`, sC: "tc"},
                    { line: `${aetas2c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas3c1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
                    { line: `${aetas3c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas3c1}`, sC: "tc"},
                    { line: `${aetas3c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetas4c1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
                    { line: `${aetas4c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetas4c1}`, sC: "tc"},
                    { line: `${aetas4c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmvc1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
                    { line: `${aetns25dicmvc2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmvc1}`, sC: "tc"},
                    { line: `${aetns25dicmvc2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmvc1}`, sC: "tc"},
                    { line: `${aetns25dicmvc2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmmc1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
                    { line: `${aetns25dicmmc2}`, sC: "bg"},
                    { line: `${aetns25dicmmc3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmmc1}`, sC: "tc"},
                    { line: `${aetns25dicmmc2}`, sC: "bg"},
                    { line: `${aetns25dicmmc3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
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
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmac1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
                    { line: `${aetns25dicmac2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmac1}`, sC: "tc"},
                    { line: `${aetns25dicmac2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetns25dicmac1}`, sC: "tc"},
                    { line: `${aetns25dicmac2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
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
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed",
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetns25dicmdc1} (Mi,m,10)(Re,,181)(Mi,m,352)`, sC: "tc"},
                    { line: `${aetns25dicmdc2}`, sC: "bg"},
                    { line: `${aetns25dicmdc3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetns25dicmdc1}`, sC: "tc"},
                    { line: `${aetns25dicmdc2}`, sC: "bg"},
                    { line: `${aetns25dicmdc3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",
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
 // ULTIMA LINEA DEL CANTO: TIEMPO ADVIENTO SEMANA IV
          // SIGUIENTE CANTO DEBAJO

          /*╔════════════════════════════════════════════════════════╗
          ║ ACLAMACIÓN EVANGELIO TIEMPO NAVIDAD COL 3, 15A. 16A - LA SAGRADA FAMILIA AÑO C ║
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
                         ant: "/src/index.html?canto=aetns0C",
                         sig: "/src/ainterleccional.html?canto=aetns2C",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetnssfc1}`, sC: "tc"},
                    { line: `${aetnssfc2}`, sC: "bg"},
                    { line: `${aetnssfc3}`, sC: "bg"},
                    { line: `${aetnssfc4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetnssfc1}`, sC: "tc"},
                    { line: `${aetnssfc2}`, sC: "bg"},
                    { line: `${aetnssfc3}`, sC: "bg"},
                    { line: `${aetnssfc4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetnssfc1} (Mi,m,20)(La,,178)(Mi,m,342)`, sC: "tc"},
                    { line: `${aetnssfc2} (La,,151)(Mi,m,252)`, sC: "bg"},
                    { line: `${aetnssfc3} (La,,151)(Mi,m,252)`, sC: "bg"},
                    { line: `${aetnssfc4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA 1


          /*╔══════════════════════════════════════════════════════════════════════════╗
          ║  ACLAMACIÓN EVANGELIO TIEMPO NAVIDAD ALELUYA HB 1, 1-2 SEMANA 1 AÑO C    ║
          ║  SANTA MARIA MADRE DE DIOS                                               ║
          ╚══════════════════════════════════════════════════════════════════════════╝  */
          {
               id: "aetn1ec",
               tt: aetn1e,
               title: aetn1e,
          subtitle: añoc+", "+aetn1ec,
          category: ["Liturgia"],catCanto: "Liturgia",cejilla: "",nCan: "",nCanURL: "",dbno: "180",notes: "",
               mant: "Si",
          audioSrc: "https://audio.resucito.do/aleluyainterleccional.mp3",
          // Nueva propiedad para la velocidad de desplazamiento
          scrollConfig: {
                    mobile: { velocidad: 6, incremento: 3 }, // Para celular
                    tablet: { velocidad: 7, incremento: 1 },  // Para tablet
                    desktop: { velocidad: 7, incremento: 1 },   // Para PC
                    desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
                         ant: "/src/index.html?canto=aetns0C",
                         sig: "/src/ainterleccional.html?canto=aetns2C",
          // Vaciando contenido,
          lizq: [
                    { type: "collapsible-block", id: "asamblea_anadie_1", initialState: "collapsed", // collapsed / expanded
               triggerLine: "Modelo I", sC: "as mod1", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetn1ec1}`, sC: "tc"},
                    { line: `${aetn1ec2}`, sC: "bg"},
                    { line: `${aetn1ec3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetn1ec1}`, sC: "tc"},
                    { line: `${aetn1ec2}`, sC: "bg"},
                    { line: `${aetn1ec3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetn1ec1} (Mi,m,20)(La,,178)(Mi,m,342)`, sC: "tc"},
                    { line: `${aetn1ec2} (La,,151)(Mi,m,252)`, sC: "bg"},
                    { line: `${aetn1ec3} (La,,151)(Mi,m,252)`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO NAVIDAD SEMANA 1

















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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos24c1}`, sC: "tc"},
                    { line: `${aetos24c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed", // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos24c1}`, sC: "tc"},
                    { line: `${aetos24c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",    //collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos24c1} (Mi,m,20)(La,m,192)(Mi,m,326)`, sC: "tc"},
                    { line: `${aetos24c2} (La,m,151)(Mi,m,292)`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXV




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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos25c1}`, sC: "tc"},
                    { line: `${aetos25c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed", // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos25c1}`, sC: "tc"},
                    { line: `${aetos25c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",    //collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos25c1} (Mi,m,20)(La,m,192)(Mi,m,326)`, sC: "tc"},
                    { line: `${aetos25c2} (La,m,151)(Mi,m,292)`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXV

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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos26c1}`, sC: "tc"},
                    { line: `${aetos26c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos26c1}`, sC: "tc"},
                    { line: `${aetos26c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos26c1}`, sC: "tc"},
                    { line: `${aetos26c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVI

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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos27c1}`, sC: "tc"},
                    { line: `${aetos27c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos27c1}`, sC: "tc"},
                    { line: `${aetos27c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos27c1} (Mi,m,20)(La,m,178)(Mi,m,404)`, sC: "tc"},
                    { line: `${aetos27c2} (La,m,163)(Mi,m,532)`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVII

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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos28c1}`, sC: "tc"},
                    { line: `${aetos28c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos28c1}`, sC: "tc"},
                    { line: `${aetos28c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos28c1}`, sC: "tc"},
                    { line: `${aetos28c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXVIII


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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos29c1}`, sC: "tc"},
                    { line: `${aetos29c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos29c1}`, sC: "tc"},
                    { line: `${aetos29c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos29c1}`, sC: "tc"},
                    { line: `${aetos29c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXIX


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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos30c1}`, sC: "tc"},
                    { line: `${aetos30c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos30c1}`, sC: "tc"},
                    { line: `${aetos30c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos30c1}`, sC: "tc"},
                    { line: `${aetos30c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXX

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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos31c1}`, sC: "tc"},
                    { line: `${aetos31c2}`, sC: "bg"},
                    { line: `${aetos31c3}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos31c1}`, sC: "tc"},
                    { line: `${aetos31c2}`, sC: "bg"},
                    { line: `${aetos31c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos31c1}`, sC: "tc"},
                    { line: `${aetos31c2}`, sC: "bg"},
                    { line: `${aetos31c3}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXI

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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos32c1}`, sC: "tc"},
                    { line: `${aetos32c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos32c1}`, sC: "tc"},
                    { line: `${aetos32c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos32c1}`, sC: "tc"},
                    { line: `${aetos32c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXII

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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos33c1}`, sC: "tc"},
                    { line: `${aetos33c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos33c1}`, sC: "tc"},
                    { line: `${aetos33c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos33c1}`, sC: "tc"},
                    { line: `${aetos33c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIII

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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetos34c1}`, sC: "tc"},
                    { line: `${aetos34c2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetos34c1}`, sC: "tc"},
                    { line: `${aetos34c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetos34c1}`, sC: "tc"},
                    { line: `${aetos34c2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIV

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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetosscscc1}`, sC: "tc"},
                    { line: `${aetosscscc2}`, sC: "bg"},
                    { line: `${aetosscscc3}`, sC: "bg"},
                    { line: `${aetosscscc4}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",   // collapsed / expanded
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

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",   // collapsed / expanded
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetosscscc1}`, sC: "tc"},
                    { line: `${aetosscscc2}`, sC: "bg"},
                    { line: `${aetosscscc3}`, sC: "bg"},
                    { line: `${aetosscscc4}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Mi,m,16)", sC: "ta as"},]},
                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO ORDINARIO SEMANA XXXIV






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
                    { line: "", sC: "adb1"},
                    { line: am11, sC: "tc"},{ line: am12, sC: "ta as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo1, sC: "bnota"},

                    { line: `${aetfs14s1}`, sC: "tc"},
                    { line: `${aetfs14s2}`, sC: "bg"},

                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Sol,,11)", sC: "ta as"},{ line: "", sC: "adb1"},]},

                    { type: "collapsible-block", id: "asamblea_anadie_2", initialState: "collapsed",
               triggerLine: "Modelo II", sC: "as mod2", color: "red", lines: [
                    { line: "Con la música del «Aleluya, ya llegó el Reino».", sC: "fssmall", color: "gray"},

                    { line: am2, sC: "ta as"},{ line: am2, sC: "as bg"},
                    { line: txtmsg, sC: "anota"},{ line: modelo2, sC: "bnota"},

                    { line: `${aetfs14s1}`, sC: "tc"},
                    { line: `${aetfs14s2}`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]}, 

                    { type: "collapsible-block", id: "asamblea_anadie_3", initialState: "expanded",
               triggerLine: "Modelo III", sC: "as mod3", color: "red", lines: [
                    { line: "", sC: "adb1"},
                    { line: am31, sC: "tc"},{ line: am32, sC: "ta as"},
                    { line: txtmsg, sC: "anota"},{ line: modelo3, sC: "bnota"},

                    { line: `${aetfs14s1}`, sC: "tc"},
                    { line: `${aetfs14s2} (La,m,151)(Mi,m,366)`, sC: "bg"},
                    
                    { line: "", sC: "adb1"},
                    { line: "ALELUYA ... (Do,,11)", sC: "ta as"},]},

                    ], lder: []},
 // ULTIMA LINEA DEL CANTO: TIEMPO FIESTA 14 de septiembre LA EXALTACIÓN DE LA SANTA CRUZ






          ); //LLAVE DE CIERRE DEL CANTO

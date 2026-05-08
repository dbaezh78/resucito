
          // Si la variable no existe todavía, la creamos como un array vacío
          if (typeof allCantosData === 'undefined') {
          window.allCantosData = [];
          }

          allCantosData.push(

/*
╔════════════════════════════════════════════╗
║           SALMOS LAUDES  5                 ║
╚════════════════════════════════════════════╝  */
   {
        id: "salmo5",
        tt: "Salmodias",
        title: "Salmo 5",
        subtitle: "ORACIÓN DE LA MAÑANA DE UN JUSTO PERSEGUIDO - Salmo 5, 2-10. 12-13",
        category: ["Precatecumenado","Celebración"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        salmodia: "1,2,4,5,7,17 | Cuaresma, Súplica", // Aqui ponemos al melodia que lleva: Melodia 2 (Menor) melodia del 1 al 14 o algo asi
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "311",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/invocacionalespiritusanto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
              mobile: { v: 23, i: 1 }, // Para celular
              tablet: { v: 25, i: 1 },  // Para tablet
             desktop: { v: 7, i: 1 },   // Para PC
        desktopsmall: { v: 7, i: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohluzgozosa",
        sig: "/src/index.html?canto=#",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Señor, escucha mis palabras,, (Sol,m,23)(La,7,250)", sC: "tc"},
            { line: "atiende a mis gemidos,, (Sol,m,23)(La,7,250)", sC: ""},
            { line: "haz caso de mis gritos de auxilio,, (Re,m,22)(La,7,250)", sC: "ta as"},
            { line: "Rey mío y Dios mío., (Sib,7,)(La,7,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "A ti te suplico, Señor;, (Sol,m,23)(La,7,250)", sC: "tc"},
            { line: "por la mañana escucharás mi voz,, (Sol,m,23)(La,7,250)", sC: ""},
            { line: "por la mañana te expongo mi causa,, (Re,m,22)(La,7,250)", sC: "ta as"},
            { line: "y me quedo aguardando., (Sib,7,)(La,7,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Tú no eres un Dios que ame la maldad,, (Sol,m,23)(La,7,250)", sC: "tc"},
            { line: "ni el malvado es tu huésped,, (Re,m,22)(La,7,250)", sC: ""},
            { line: "ni el arrogante se mantiene en tu presencia., (Sib,7,)(La,7,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Detestas a los malhechores,, (Sol,m,23)(La,7,250)", sC: "ta as"},
            { line: "destruyes a los mentirosos;, (Sol,m,23)(La,7,250)", sC: "as"},
            { line: "al hombre sanguinario y traicionero, (Re,m,22)(La,7,250)", sC: "tc"},
            { line: "lo aborrece el Señor., (Sib,7,)(La,7,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Pero yo, por tu gran bondad,, (Sol,m,23)(La,7,250)", sC: "ta as"},
            { line: "entraré en tu casa,, (Sol,m,23)(La,7,250)", sC: "as"},
            { line: "me postraré ante tu templo santo, (Re,m,22)(La,7,250)", sC: "tc"},
            { line: "con toda reverencia., (Sib,7,)(La,7,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

    ], lder: [
            { line: "Señor, guíame con tu justicia,, (Sol,m,23)(La,7,250)", sC: "ta as"},
            { line: "porque tengo enemigos;, (Re,m,22)(La,7,250)", sC: "as"},
            { line: "alláname tu camino., (Sib,7,)(La,7,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "En su boca no hay sinceridad,, (Sol,m,23)(La,7,250)", sC: "tc"},
            { line: "su corazón es perverso;, (Sol,m,23)(La,7,250)", sC: ""},
            { line: "su garganta es un sepulcro abierto,, (Re,m,22)(La,7,250)", sC: "ta as"},
            { line: "mientras halagan con la lengua., (Sib,7,)(La,7,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Que se alegren los que se acogen a ti,, (Sol,m,23)(La,7,250)", sC: "tc"},
            { line: "con júbilo eterno;, (Sol,m,23)(La,7,250)", sC: ""},
            { line: "protégelos, para que se llenen de gozo, (Re,m,22)(La,7,250)", sC: "ta as"},
            { line: "los que aman tu nombre., (Sib,7,)(La,7,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Porque tú, Señor, bendices al justo,, (Sol,m,23)(La,7,250)", sC: "tc"},
            { line: "y como un escudo lo rodea tu favor., (Sib,7,)(La,7,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Gloria al Padre, y al Hijo, y al Espíritu Santo., (Sol,m,23)(La,7,250)", sC: "ta as"},
            { line: "Como era en el principio, ahora y siempre, (Sib,7,20)", sC: "as"},
            { line: "por los siglos de los siglos. Amén., (La,7,260)", sC: "as"},
    ]
},


/*
╔════════════════════════════════════════════════════════════════════════════╗
║ Cántico: EL BUEN PASTOR ES EL DIOS ALTISIMO Y SAPIENTÍSIMO - Is 40, 10-17  ║
╚════════════════════════════════════════════════════════════════════════════╝  */
   {
        id: "is401017",
        tt: "Salmodia",
        title: "Salmodias - Cántico",
        subtitle: "EL BUEN PASTOR ES EL DIOS ALTISIMO Y SAPIENTÍSIMO - Is 40, 10-17",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        salmodia: "", // Aqui ponemos al melodia que lleva: Melodia 2 (Menor) melodia del 1 al 14 o algo asi
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "300",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/is401017.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=elmismodios",
        sig: "/src/index.html?canto=heaquiquenuestroespejoeselsenor",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Mirad, el Señor Dios llega con poder,, (Mi,m,20)", sC: "tc"},
            { line: "y su brazo manda., (La,m,20)(Mi,m,154)", sC: ""},
            { line: "Mirad, viene con él su salario, (Mi,m,20)", sC: "ta as"},
            { line: "y su recompensa lo precede., (La,m,20)(Mi,m,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Como un pastor que apacienta el rebaño,, (Mi,m,20)", sC: "tc"},
            { line: "su brazo lo reúne,, (La,m,20)(Mi,m,151)", sC: ""},
            { line: "toma en brazos los corderos, (Mi,m,20)", sC: "ta as"},
            { line: "y hace recostar a las madres., (La,m,20)(Mi,m,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¿Quién ha medido a puñados el mar, (Mi,m,20)(La,m,321)", sC: "tc"},
            { line: "o mensurado a palmos el cielo,, (Mi,m,20)", sC: ""},
            { line: "o a cuartillos el polvo de la tierra?, (La,m,20)(Mi,m,301)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "¿Quién ha pesado en la balanza los montes, (Mi,m,20)", sC: "ta as"},
            { line: "y en la báscula las colinas?, (La,m,20)(Mi,m,239)", sC: "as"},
            { line: "¿Quién ha medido el aliento del Señor?, (Mi,m,20)", sC: "tc"},
            { line: "¿Quién le ha sugerido su proyecto?, (La,m,20)(Mi,m,303)", sC: ""},
    ], lder: [
            { line: "¿Con quién se aconsejó para entenderlo,, (Mi,m,20)", sC: "ta as"},
            { line: "para que le enseñara el camino exacto,, (La,m,20)(Mi,m,350)", sC: "as"},
            { line: "para que le enseñara el saber, (Mi,m,20)", sC: "tc"},
            { line: "y le sugiriese el método inteligente?, (La,m,20)(Mi,m,322)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Mirad, las naciones son gotas de un cubo, (Mi,m,20)", sC: "ta as"},
            { line: "y valen lo que el polvillo de balanza., (La,m,20)(Mi,m,317)", sC: "as"},
            { line: "Mirad, las islas pesan lo que un grano,, (Mi,m,20)(La,m,338)", sC: "tc"},
            { line: "el Líbano no basta para leña,, (Mi,m,20)", sC: ""},
            { line: "sus fieras no bastan para el holocausto., (La,m,20)(Mi,m,347)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "En su presencia, las naciones todas,, (Mi,m,20)(La,m,317)", sC: "ta as"},
            { line: "como si no existieran,, (Mi,m,20)", sC: "as"},
            { line: "son ante él como nada y vacío., (La,m,20)(Mi,m,262)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Gloria al Padre, y al Hijo, y al Espíritu Santo., (Mi,m,20)", sC: "tc"},
            { line: "Como era en el principio, ahora y siempre, (La,m,20)", sC: "ta as"},
            { line: "por los siglos de los siglos. Amén., (Mi,m,294)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: Cántico: EL BUEN PASTOR ES EL DIOS ALTISIMO Y SAPIENTÍSIMO - Is 40, 10-17
// SIGUIENTE CANTO DEBAJO



/*
╔════════════════════════════════════════════════════════╗
║           Salmo 98 - SANTO ES EL SEÑOR, NUESTRO DIOS.  ║
╚════════════════════════════════════════════════════════╝  */
   {
        id: "salmo98",
        tt: "Salmo 98 - Santo Es El Señor, Nuestro Dios.",
        title: "Salmo 98",
        subtitle: "SANTO ES EL SEÑOR, NUESTRO DIOS.",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        salmodia: "2",
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "300",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/salmo98.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=salmo97",
        sig: "/src/index.html?canto=salmo99",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "El Señor reina, tiemblen las naciones;, (Fa,,10)", sC: "tc"},
            { line: "sentado sobre querubines, vacile la tierra., (Re,m,22)(La,m,203)(Re,m,375)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "El Señor es grande en Sión,, (Fa,,10)", sC: "ta as"},
            { line: "encumbrado sobre todos los pueblos., (Re,m,22)(La,m,210)(Re,m,350)", sC: "as"},
            { line: "Reconozcan tu nombre, grande y terrible:, (Fa,,10)", sC: "tc"},
            { line: "Él es santo., (Re,m,22)(La,m,65)(Re,m,113)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Reinas con poder y amas la justicia,, (Fa,,10)", sC: "ta as"},
            { line: "tú has establecido la rectitud;, (Re,m,22)(La,m,127)(Re,m,261)", sC: "as"},
            { line: "tú administras la justicia y el derecho,, (Fa,,10)", sC: "tc"},
            { line: "tú actúas en Jacob., (Re,m,22)(La,m,75)(Re,m,161)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ensalzad al Señor, Dios nuestro;, (Fa,,10)(Re,m,280)", sC: "ta as"},
            { line: "postraos ante el estrado de sus pies:, (Fa,,10)", sC: "as"},
            { line: "Él es santo., (Re,m,22)(La,m,66)(Re,m,115)", sC: "as"},
    ], lder: [
            { line: "Moisés y Aarón con sus sacerdotes,, (Fa,,10)(Re,m,308)", sC: "tc"},
            { line: "Samuel con los que invocan su nombre,, (Fa,,10)", sC: ""},
            { line: "invocaban al Señor, y él respondía., (Re,m,22)(La,m,167)(Re,m,299)", sC: ""},
            { line: "Dios les hablaba desde la columna de nube;, (Fa,,10)", sC: "ta as"},
            { line: "oyeron sus mandatos y la ley que les dio., (Re,m,22)(La,m,175)(Re,m,358)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Señor, Dios nuestro, tú les respondías,, (Fa,,10)(Re,m,338)", sC: "tc"},
            { line: "tú eras para ellos un Dios de perdón, (Fa,,10)", sC: ""},
            { line: "y un Dios vengador de sus maldades., (Re,m,22)(La,m,150)(Re,m,326)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Ensalzad al Señor, Dios nuestro;, (Fa,,10)(Re,m,283)", sC: "ta as"},
            { line: "postraos ante su monte santo:, (Fa,,10)", sC: "as"},
            { line: "Santo es el Señor, nuestro Dios., (Re,m,22)(La,m,150)(Re,m,278)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Gloria al Padre, y al Hijo, y al Espíritu Santo., (Fa,,10)", sC: "tc"},
            { line: "Como era en el principio, ahora y siempre, (Re,m,22)(La,m,185)", sC: "ta as"},
            { line: "por los siglos de los siglos. Amén., (Re,m,22)", sC: "ta as"},
]}, // ULTIMA LINEA DEL CANTO: Salmo 98 - SANTO ES EL SEÑOR, NUESTRO DIOS.
// SIGUIENTE CANTO DEBAJO










































/*
╔════════════════════════════════════════════╗
║           SALMOS 86 LAUDES                 ║
╚════════════════════════════════════════════╝  */
   {
        id: "salmo86",
        tt: "Salmodias",
        title: "Salmo 86",
        subtitle: "Salmo 86 - HIMNO A JERUSALÉN, MADRE DE TODOS LOS PUEBLOS.",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        salmodia: "1,2,3", // Aqui ponemos al melodia que lleva: Melodia 2 (Menor) melodia del 1 al 14 o algo asi
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "311",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/invocacionalespiritusanto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
              mobile: { v: 23, i: 1 }, // Para celular
              tablet: { v: 25, i: 1 },  // Para tablet
             desktop: { v: 7, i: 1 },   // Para PC
        desktopsmall: { v: 7, i: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohluzgozosa",
        sig: "/src/index.html?canto=#",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Él la ha cimentado sobre el monte santo;, (La,m,20)(Mi,m,370)", sC: "tc"},
            { line: "y el Señor prefiere las puertas de Sión, (La,m,20)(Mi,m,339)", sC: ""},
            { line: "a todas las moradas de Jacob., (Re,,22)(La,m,265)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "¡Qué pregón tan glorioso para ti,, (La,m,20)(Mi,m,282)", sC: "ta as"},
            { line: "ciudad de Dios!, (Re,,22)(La,m,127)", sC: "as"},
            { line: "«Contaré a Egipto y a Babilonia, (La,m,20)(Mi,m,274)", sC: "tc"},
            { line: "entre mis fieles;, (Re,,22)(La,m,131)", sC: ""},
            { line: "filisteos, tirios y etíopes, (La,m,20)(Mi,m,202)", sC: "ta as"},
            { line: "han nacido allí.», (Re,,22)(La,m,131)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Se dirá de Sión: «Uno por uno, (La,m,20)(Mi,m,250)", sC: "tc"},
            { line: "todos han nacido en ella;, (La,m,20)(Mi,m,213)", sC: ""},
            { line: "el Altísimo en persona la ha fundado.», (Re,,22)(La,m,332)", sC: ""},
    ], lder: [
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor escribirá en el registro de los pueblos:, (La,m,20)(Mi,m,417)", sC: "ta as"},
            { line: "«Éste ha nacido allí.», (Re,,22)(La,m,166)", sC: "as"},
            { line: "Y cantarán mientras danzan:, (La,m,20)(Mi,m,250)", sC: "tc"},
            { line: "«Todas mis fuentes están en ti.», (Re,,22)(La,m,264)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Gloria al Padre, y al Hijo, y al Espíritu Santo., (La,m,20)(Mi,m,208)(La,m,251)(Mi,m,384)", sC: "ta as"},
            { line: "Como era en el principio, ahora y siempre, (La,m,20)(Mi,m,376)", sC: "tc"},
            { line: "por los siglos de los siglos. Amén., (Re,,20)(La,m,280)", sC: "tc"},

    ]
},

/*
╔══════════════════════════════════╗
║           SALMO 92               ║
╚══════════════════════════════════╝  */
   {
        id: "salmo92",
        tt: "Salmo 92",
        title: "Salmo 92",
        subtitle: "Salmo 92 - GLORIA DEL DIOS CREADOR",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        salmodia: "1,2,3", // Aqui ponemos al melodia que lleva: Melodia 2 (Menor) melodia del 1 al 14 o algo asi
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "300",
        notes: "",
        mant: "Si",
        audioSrc: "https://audio.resucito.do/salmo92.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
            mobile: { velocidad: 6, incremento: 3 }, // Para celular
            tablet: { velocidad: 7, incremento: 1 },  // Para tablet
            desktop: { velocidad: 7, incremento: 1 },   // Para PC
            desktopsmall: { velocidad: 7, incremento: 1 }},   // Para PC
        ant: "/src/index.html?canto=salmo91",
        sig: "/src/index.html?canto=salmo93",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El Señor reina vestido de majestad,, (La,m,20)(Mi,m,250)", sC: "tc"},
            { line: "el Señor, vestido y ceñido de poder:, (La,m,20)(Mi,m,250)", sC: ""},
            { line: "así está firme el orbe y no vacila., (Re,,22)(La,m,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tu trono está firme desde siempre,, (La,m,20)(Mi,m,250)", sC: "ta as"},
            { line: "y tú eres eterno., (Re,,22)(La,m,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Levantan los ríos, Señor,, (La,m,20)(Mi,m,250)", sC: "tc"},
            { line: "levantan los ríos su voz,, (La,m,20)(Mi,m,250)", sC: ""},
            { line: "levantan los ríos su fragor;, (Re,,22)(La,m,250)", sC: ""},
        ], lder: [
            { line: "pero más que la voz de aguas caudalosas,, (La,m,20)(Mi,m,250)", sC: "ta as"},
            { line: "más potente que el oleaje del mar,, (La,m,20)(Mi,m,250)", sC: "as"},
            { line: "más potente en el cielo es el Señor., (Re,,22)(La,m,250)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tus mandatos son fieles y seguros;, (La,m,20)(Mi,m,250)", sC: "tc"},
            { line: "la santidad es el adorno de tu casa,, (La,m,20)(Mi,m,250)", sC: ""},
            { line: "Señor, por días sin término., (Re,,22)(La,m,250)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Gloria al Padre, y al Hijo, y al Espíritu Santo., (La,m,20)(Mi,m,208)(La,m,251)(Mi,m,384)", sC: "ta as"},
            { line: "Como era en el principio, ahora y siempre, (La,m,20)(Mi,m,376)", sC: "tc"},
            { line: "por los siglos de los siglos. Amén., (Re,,20)(La,m,280)", sC: ""},
]}, // ULTIMA LINEA DEL CANTO: SALMO 92
// SIGUIENTE CANTO DEBAJO



/*
╔════════════════════════════════════════════╗
║           SALMOS LAUDES  118               ║
╚════════════════════════════════════════════╝  */
   {
        id: "salmos118",
        tt: "Salmodias",
        title: "Salmodias",
        subtitle: "Salmo 118, 145-152 TE INVOCO DE TODO CORAZÓN",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        salmodia: "", // Aqui ponemos al melodia que lleva: Melodia 2 (Menor) melodia del 1 al 14 o algo asi
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "311",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/invocacionalespiritusanto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
              mobile: { v: 23, i: 1 }, // Para celular
              tablet: { v: 25, i: 1 },  // Para tablet
             desktop: { v: 7, i: 1 },   // Para PC
        desktopsmall: { v: 7, i: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohluzgozosa",
        sig: "/src/index.html?canto=#",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Te invoco de todo corazón;, (Sol,m,24)(La,7,250)", sC: "tc"},
            { line: "respóndeme, Señor, y guardaré tus leyes;, (Sol,m,24)(La,7,384)", sC: "ta as"},
            { line: "a ti grito: sálvame,, (Re,m,22)(La,7,172)", sC: "tc"},
            { line: "y cumpliré tus decretos;, (Sib,7,22)(La,7,224)", sC: "ta as"},
            { line: "me adelanto a la aurora pidiendo auxilio,, (Sol,m,24)(La,7,377)", sC: "tc"},
            { line: "esperando tus palabras., (Sol,m,24)(La,7,236)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Mis ojos se adelantan a las vigilias de la noche,, (Re,m,22)(La,7,445)", sC: "tc"},
            { line: "meditando tu promesa;, (Sib,7,22)(La,7,228)", sC: "ta as"},
            { line: "escucha mi voz por tu misericordia,, (Sol,m,24)(La,7,325)", sC: "tc"},
            { line: "con tus mandamientos dame vida;, (Sol,m,24)(La,7,325)", sC: "ta as"},
            { line: "ya se acercan mis inicuos perseguidores,, (Re,m,22)(La,7,386)", sC: "tc"},
            { line: "están lejos de tu voluntad., (Sib,7,22)(La,7,250)", sC: "ta as"},

    ], lder: [
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Tú, Señor, estás cerca,, (Sol,m,24)(La,7,211)", sC: "tc"},
            { line: "y todos tus mandatos son estables;, (Sol,m,24)(La,7,321)", sC: "ta as"},
            { line: "hace tiempo comprendí que tus preceptos, (Re,m,22)(La,7,390)", sC: "tc"},
            { line: "los fundaste para siempre., (Sib,7,22)(La,7,250)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido

            { line: "Gloria al Padre, y al Hijo, (Sol,m,24)(La,7,240)", sC: "tc"},
            { line: "y al Espíritu Santo., (Sol,m,24)(La,7,175)", sC: "ta as"},
            { line: "Como era en el principio, ahora y siempre,(Sib,7,22)(La,7,349)", sC: "tc"},
            { line: "por los siglos de los siglos. Amén., (Sib,7,22)(La,7,279)", sC: "ta as"},


    ]
},

/*
╔══════════════════════════════════════════╗
║  SALLMOS LAUDES Isaias 38, 10-14.17-20   ║
╚══════════════════════════════════════════╝  */
   {
        id: "is3810141720",
        tt: "Salmodias",
        title: "Salmodias - Cántico",
        subtitle: "ANGUSTIA DE UN MORIBUNDO Y ALEGRÍA DE LA CURACIÓN - Is 38, 10-14. 17-20",
        category: ["Liturgia"],
        catCanto: "Liturgia",   // Precatecumenado | Catecumenado | Liturgia | Eleccion
        salmodia: "", // Aqui ponemos al melodia que lleva: Melodia 2 (Menor) melodia del 1 al 14 o algo asi
        cejilla: "",
        nCan: "",
        nCanURL: "",
        dbno: "311",
        notes: "",
        mant: "No",
        audioSrc: "https://audio.resucito.do/invocacionalespiritusanto.mp3",
// Nueva propiedad para la velocidad de desplazamiento
        scrollConfig: {
              mobile: { v: 23, i: 1 }, // Para celular
              tablet: { v: 25, i: 1 },  // Para tablet
             desktop: { v: 7, i: 1 },   // Para PC
        desktopsmall: { v: 7, i: 1 }},   // Para PC
        ant: "/src/index.html?canto=ohluzgozosa",
        sig: "/src/index.html?canto=#",
// Contenido del lado izquierdo del canto,
    lizq: [
            { line: "Yo pensé: «En medio de mis días, (La,m,20)(Sol,,298)", sC: "tc"},
            { line: "tengo que marchar hacia las puertas del abismo;, (La,m,20)", sC: ""},
            { line: "me privan del resto de mis años.», (Sol,,14)(La,m,293)", sC: "ta as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Yo pensé: «Ya no veré más al Señor, (La,m,20)", sC: "tc"},
            { line: "en la tierra de los vivos,, (Sol,,14)(La,m,204)", sC: ""},
            { line: "ya no miraré a los hombres, (Sol,,14)(La,m,242)", sC: "ta as"},
            { line: "entre los habitantes del mundo., (Sol,,14)(La,m,272)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Levantan y enrollan mi vida, (La,m,20)", sC: "tc"},
            { line: "como una tienda de pastores., (Sol,,14)(La,m,250)", sC: ""},
            { line: "Como un tejedor devanaba yo mi vida,, (Sol,,14)(La,m,338)", sC: "ta as"},
            { line: "y me cortan la trama.», (Sol,,14)(La,m,185)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Día y noche me estás acabando,, (La,m,20)", sC: "tc"},
            { line: "sollozo hasta el amanecer., (Sol,,14)(La,m,250)", sC: ""},
            { line: "Me quiebras los huesos como un león,, (Sol,,14)(La,m,339)", sC: "ta as"},
            { line: "día y noche me estás acabando., (Sol,,14)(La,m,260)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Estoy piando como una golondrina,, (La,m,20)", sC: "tc"},
            { line: "gimo como una paloma., (Sol,,14)(La,m,212)", sC: ""},
            { line: "Mis ojos mirando al cielo se consumen:, (Sol,,14)(La,m,352)", sC: "ta as"},
            { line: "¡Señor, que me oprimen, sal fiador por mí!, (Sol,,14)(La,m,371)", sC: "as"},
    ], lder: [
            { line: "Me has curado, me has hecho revivir,, (La,m,20)", sC: "tc"},
            { line: "la amargura se me volvió paz, (Sol,,14)(La,m,251)", sC: ""},
            { line: "cuando detuviste mi alma ante la tumba vacía, (Sol,,14)(La,m,420)", sC: "ta as"},
            { line: "y volviste la espalda a todos mis pecados., (Sol,,14)(La,m,378)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "El abismo no te da gracias,, (La,m,20)", sC: "tc"},
            { line: "ni la muerte te alaba,, (Sol,,14)(La,m,185)", sC: ""},
            { line: "ni esperan en tu fidelidad, (Sol,,14)(La,m,229)", sC: "ta as"},
            { line: "los que bajan a la fosa., (Sol,,14)(La,m,195)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Los vivos, los vivos son quienes te alaban:, (La,m,20)", sC: "tc"},
            { line: "como yo ahora., ", sC: ""},
            { line: "El Padre enseña a sus hijos tu fidelidad., (Sol,,14)(La,m,356)", sC: ""},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Sálvame, Señor, y tocaremos nuestras arpas, (Sol,,14)(La,m,406)", sC: "ta as"},
            { line: "todos nuestros días en la casa del Señor., (Sol,,14)(La,m,366)", sC: "as"},
            { line: "", sC: "adb1"}, // Espacio Generado para separar contenido
            { line: "Gloria al Padre, y al Hijo, y al Espíritu Santo., (La,m,20)", sC: "tc"},
            { line: "Como era en el principio, ahora y siempre, (Sol,,14)(La,m,378)", sC: "ta as"},
            { line: "por los siglos de los siglos. Amén., (Sol,,14)(La,m,294)", sC: "ta as"},


    ]
},




          ) //LLAVE DE CIERRE DEL CANTO


/* Info del archivo en dbaezh.docx
resucito\src\data\Explicacion Cantos.docx
Posible fuente para acorde: sans-serif, 'system-ui', cursive, sans-serif
font-family: sans-serif, cursive, 'system-ui', 'Franklin Gothic Medium', Arial;

Generar espacio: \u200B   , lo que est'a entre la coma es el espacio que se generó


SALMODIA VIII Sal 96 (95)
   Sol
C. El Señor reina la tierra goza,
   Do                         Sol
   se alegran las islas innumerables.
   Sol
A. TINIEBLA Y NUBE LO RODEAN,
   Do                               Sol
   JUSTICIA Y DERECHO SOSTIENEN SU TRONO.

SALMO 96
Gloria del Señor, rey de justicia

1El Señor reina, la tierra goza,
se alegran las islas innumerables.
2Tiniebla y nube lo rodean,
justicia y derecho sostienen su trono.

3Delante de él avanza fuego,
abrasando en torno a los enemigos;
4sus relámpagos deslumbran el orbe,
y, viéndolos, la tierra se estremece.

5Los montes se derriten como cera
ante el dueño de toda la tierra;
6los cielos pregonan su justicia,
y todos los pueblos contemplan su gloria.

7Los que adoran estatuas se sonrojan,
los que ponen su orgullo en los ídolos;
ante él se postran todos los dioses.

8Lo oye Sión, y se alegra,
se regocijan las ciudades de Judá
por tus sentencias, Señor;

9porque tú eres, Señor,
altísimo sobre toda la tierra,
encumbrado sobre todos los dioses.

10El Señor ama al que aborrece el mal,
protege la vida de sus fieles
y los libra de los malvados.

11Amanece la luz para el justo,
y la alegría para los rectos de corazón.
12Alegraos, justos, con el Señor,
celebrad su santo nombre.

╔═══════════════════════════════════════════════════════════╗
║                A LA VICTIMA PASCUAL                       ║
╚═══════════════════════════════════════════════════════════╝  */
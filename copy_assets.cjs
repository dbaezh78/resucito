const fs = require('fs');
const path = require('path');

function copyFolderRecursiveSync(source, target) {
    if (!fs.existsSync(source)) return;
    
    // Create target directory if it doesn't exist
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
    }
    
    // Read source directory
    const files = fs.readdirSync(source);
    files.forEach(file => {
        const curSource = path.join(source, file);
        const curTarget = path.join(target, file);
        
        if (fs.lstatSync(curSource).isDirectory()) {
            copyFolderRecursiveSync(curSource, curTarget);
        } else {
            fs.copyFileSync(curSource, curTarget);
        }
    });
}

const distPath = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
}

console.log('--- COPIANDO ACTIVOS A LA CARPETA DIST ---');

// Copy folders
const folders = ['data', 'ima', 'img', 'fonts', '.well-known'];
folders.forEach(folder => {
    const src = path.resolve(__dirname, folder);
    const dest = path.resolve(distPath, folder);
    if (fs.existsSync(src)) {
        console.log(`Copiando carpeta ${folder}...`);
        copyFolderRecursiveSync(src, dest);
    }
});

// Asegurar que src (css, img, lib, data, etc.) esté presente en dist/src/
const srcDirsToCopy = ['css', 'img', 'lib', 'js'];
srcDirsToCopy.forEach(sub => {
    const sDir = path.resolve(__dirname, 'src', sub);
    const dDir = path.resolve(distPath, 'src', sub);
    if (fs.existsSync(sDir)) {
        console.log(`Copiando src/${sub} a dist/src/${sub}...`);
        copyFolderRecursiveSync(sDir, dDir);
    }
});

// Copiar archivos individuales de src/ a dist/src/
const srcFilesToCopy = ['navegador.css', 'navegador.js', 'main.js', 'style.css', 'styleCanto.css', 'auth.js', 'firebase.js', 'sync.js', 'search.js', 'chords.js', 'pwa.js', 'accesscontrol.js', 'bitacora.css', 'bitacoraLogger.js'];
srcFilesToCopy.forEach(f => {
    const sFile = path.resolve(__dirname, 'src', f);
    const dFile = path.resolve(distPath, 'src', f);
    if (fs.existsSync(sFile)) {
        try {
            fs.copyFileSync(sFile, dFile);
        } catch (e) {}
    }
});

// Asegurar copia de data también a dist/src/data por si alguna vista en /src/ hace fetch('data/...')
const srcDataDest = path.resolve(distPath, 'src', 'data');
const dataFolderSrc = path.resolve(__dirname, 'data');
if (fs.existsSync(dataFolderSrc)) {
    console.log('Copiando data a dist/src/data para compatibilidad con rutas relativas...');
    copyFolderRecursiveSync(dataFolderSrc, srcDataDest);
}

// Copy individual files
const files = ['manifest.json', 'sw.js', '.nojekyll', 'CNAME', 'version.json', 'chat.html'];
files.forEach(file => {
    const src = path.resolve(__dirname, file);
    const dest = path.resolve(distPath, file);
    if (fs.existsSync(src)) {
        console.log(`Copiando archivo ${file}...`);
        try {
            fs.copyFileSync(src, dest);
        } catch (e) {
            console.warn(`Aviso: no se pudo sobrescribir ${file} en dist:`, e.message);
        }
    }
});

console.log('--- ACTIVOS COPIADOS CORRECTAMENTE A DIST ---');

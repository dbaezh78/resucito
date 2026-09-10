import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Fuerza a Vite a usar rutas relativas para activos importados en el index.html de producción,
  // permitiendo que el proyecto funcione en cualquier subcarpeta (ej: /resucitov2/)
  base: './',
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        perfil: path.resolve(__dirname, 'perfil.html'),
        preparar: path.resolve(__dirname, 'preparar.html'),
        expancion: path.resolve(__dirname, 'expancion.html'),
        mantcantos: path.resolve(__dirname, 'mantcantos.html'),
        respaldo: path.resolve(__dirname, 'respaldo.html'),
        privacidad: path.resolve(__dirname, 'privacidad.html'),
        chat: path.resolve(__dirname, 'src/chat.html')
      }
    }
  },
  plugins: [
    {
      name: 'save-chord-positions-middleware',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/save-positions' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const data = JSON.parse(body);
                const { songId, lizq, lder } = data;
                
                if (!songId) {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ error: 'Missing songId' }));
                  return;
                }
                
                const filePath = path.resolve(__dirname, 'data', 'chord_positions.json');
                let positionsDb = {};
                if (fs.existsSync(filePath)) {
                  positionsDb = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                }
                
                positionsDb[songId] = { lizq, lder };
                
                fs.writeFileSync(filePath, JSON.stringify(positionsDb, null, 2), 'utf8');
                console.log(`[Server] Saved chord positions for song: ${songId}`);
                
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: `Positions saved to data/chord_positions.json for ${songId}` }));
              } catch (e) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
          } else if (req.url === '/api/pull-positions' && req.method === 'POST') {
            try {
              const url = 'https://firestore.googleapis.com/v1/projects/cristoresucito/databases/(default)/documents/global_positions?pageSize=1000';
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Firebase REST API error: ${response.status} ${response.statusText}`);
              }
              const data = await response.json();
              const positionsDb = {};
              
              if (data.documents && Array.isArray(data.documents)) {
                for (const doc of data.documents) {
                  const parts = doc.name.split('/');
                  const cantoId = parts[parts.length - 1];
                  
                  const fields = doc.fields || {};
                  
                  const deserializeArray = (field) => {
                    if (!field || !field.arrayValue || !Array.isArray(field.arrayValue.values)) {
                      return [];
                    }
                    return field.arrayValue.values.map(v => {
                      const str = v.stringValue || '';
                      try {
                        return JSON.parse(str);
                      } catch (e) {
                        return str;
                      }
                    });
                  };
                  
                  positionsDb[cantoId] = {
                    lizq: deserializeArray(fields.lizq),
                    lder: deserializeArray(fields.lder)
                  };
                }
              }
              
              const filePath = path.resolve(__dirname, 'data', 'chord_positions.json');
              
              // Ensure directory exists
              const dirPath = path.dirname(filePath);
              if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
              }
              
              fs.writeFileSync(filePath, JSON.stringify(positionsDb, null, 2), 'utf8');
              console.log(`[Server] Pulled positions from Firebase. Updated chord_positions.json with ${Object.keys(positionsDb).length} songs.`);
              
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, count: Object.keys(positionsDb).length }));
            } catch (e) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: e.message }));
            }
          } else if (req.url === '/api/save-backup-positions' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });
            req.on('end', () => {
              try {
                const data = JSON.parse(body);
                const filePath = path.resolve(__dirname, 'data', 'chord_positions-backup.json');
                const dirPath = path.dirname(filePath);
                if (!fs.existsSync(dirPath)) {
                  fs.mkdirSync(dirPath, { recursive: true });
                }
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
                console.log(`[Server] Guardado archivo de respaldo: data/chord_positions-backup.json con ${Object.keys(data).length} cantos.`);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, count: Object.keys(data).length }));
              } catch (e) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: e.message }));
              }
            });
          } else if (req.url === '/api/list-backups' && req.method === 'GET') {
            try {
              const backupsDir = path.resolve(__dirname, 'backups');
              if (!fs.existsSync(backupsDir)) {
                fs.mkdirSync(backupsDir, { recursive: true });
              }

              const historyFile = path.join(backupsDir, 'backups-history.json');
              let history = [];
              if (fs.existsSync(historyFile)) {
                try {
                  history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
                } catch (e) { history = []; }
              }

              // Sincronizar archivos reales en disco que puedan haberse añadido
              const existingFiles = fs.readdirSync(backupsDir).filter(f => f.endsWith('.7z'));
              const historyMap = new Map(history.map(item => [item.filename, item]));

              existingFiles.forEach(filename => {
                if (!historyMap.has(filename)) {
                  const stat = fs.statSync(path.join(backupsDir, filename));
                  const mtime = stat.mtime;
                  const item = {
                    filename,
                    date: mtime.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
                    time: mtime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false }),
                    timestamp: stat.mtimeMs,
                    version: 'v2.1.06',
                    sizeBytes: stat.size,
                    sizeFormatted: (stat.size / (1024 * 1024)).toFixed(2) + ' MB'
                  };
                  history.unshift(item);
                }
              });

              // Filtrar solo los que aún existan en disco
              history = history.filter(item => fs.existsSync(path.join(backupsDir, item.filename)));
              history.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

              fs.writeFileSync(historyFile, JSON.stringify(history, null, 2), 'utf8');

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, backups: history }));
            } catch (e) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: e.message }));
            }
          } else if (req.url === '/api/generate-backup' && req.method === 'POST') {
            try {
              console.log('[Server Backup] 1. Actualizando posiciones desde Firebase...');
              
              // 1. Sincronizar chord_positions.json desde Firebase
              const fbUrl = 'https://firestore.googleapis.com/v1/projects/cristoresucito/databases/(default)/documents/global_positions?pageSize=1000';
              let fbUpdatedCount = 0;
              try {
                const fbRes = await fetch(fbUrl);
                if (fbRes.ok) {
                  const fbData = await fbRes.json();
                  const positionsDb = {};
                  if (fbData.documents && Array.isArray(fbData.documents)) {
                    for (const doc of fbData.documents) {
                      const parts = doc.name.split('/');
                      const cantoId = parts[parts.length - 1];
                      const fields = doc.fields || {};
                      const deserializeArray = (field) => {
                        if (!field || !field.arrayValue || !Array.isArray(field.arrayValue.values)) return [];
                        return field.arrayValue.values.map(v => {
                          const str = v.stringValue || '';
                          try { return JSON.parse(str); } catch (e) { return str; }
                        });
                      };
                      positionsDb[cantoId] = {
                        lizq: deserializeArray(fields.lizq),
                        lder: deserializeArray(fields.lder)
                      };
                    }
                  }
                  const chordPath = path.resolve(__dirname, 'data', 'chord_positions.json');
                  fs.writeFileSync(chordPath, JSON.stringify(positionsDb, null, 2), 'utf8');
                  fbUpdatedCount = Object.keys(positionsDb).length;
                  console.log(`[Server Backup] ✅ chord_positions.json actualizado con ${fbUpdatedCount} cantos.`);
                }
              } catch (fbErr) {
                console.warn('[Server Backup] Aviso al consultar Firebase:', fbErr.message);
              }

              // 2. Leer versión actual del sistema
              let currentVersion = 'v2.1.06';
              try {
                const versionPath = path.resolve(__dirname, 'version.json');
                if (fs.existsSync(versionPath)) {
                  const vData = JSON.parse(fs.readFileSync(versionPath, 'utf8'));
                  if (vData.latestVersion) currentVersion = 'v' + vData.latestVersion;
                }
              } catch (e) {}

              // 3. Generar nombre de archivo resucito_LAFECHADELDIAHORAMILITAR
              const now = new Date();
              const dd = String(now.getDate()).padStart(2, '0');
              const mm = String(now.getMonth() + 1).padStart(2, '0');
              const yy = String(now.getFullYear()).slice(-2);
              const hh = String(now.getHours()).padStart(2, '0');
              const min = String(now.getMinutes()).padStart(2, '0');
              const militar = `${hh}${min}`;
              const filename = `resucito_${dd}${mm}${yy}${militar}.7z`;

              const backupsDir = path.resolve(__dirname, 'backups');
              if (!fs.existsSync(backupsDir)) {
                fs.mkdirSync(backupsDir, { recursive: true });
              }
              const outputZipPath = path.join(backupsDir, filename);

              // 4. Ubicar 7-Zip
              const possible7zPaths = [
                'C:\\Program Files\\7-Zip\\7z.exe',
                'C:\\Program Files (x86)\\7-Zip\\7z.exe',
                '7z'
              ];
              let sevenZipBin = possible7zPaths.find(p => fs.existsSync(p)) || '7z';

              // Argumentos de 7z
              const args = [
                'a',
                '-t7z',
                '-mx=5',
                '-y',
                outputZipPath,
                '.',
                '-xr!.git',
                '-xr!node_modules',
                '-xr!dist',
                '-xr!backups',
                '-xr!*.7z',
                '-xr!scratch',
                '-xr!backup_cambios*.patch'
              ];

              console.log(`[Server Backup] Creando respaldo 7z: ${filename}...`);

              execFile(sevenZipBin, args, { cwd: __dirname }, (error, stdout, stderr) => {
                if (error) {
                  console.error('[Server Backup] Error ejecutando 7z:', error, stderr);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Error al generar compresión 7z: ' + (error.message || stderr) }));
                  return;
                }

                if (!fs.existsSync(outputZipPath)) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'El archivo 7z no se generó correctamente.' }));
                  return;
                }

                const stat = fs.statSync(outputZipPath);
                const item = {
                  filename,
                  date: `${dd}/${mm}/${now.getFullYear()}`,
                  time: `${hh}:${min}`,
                  timestamp: now.getTime(),
                  version: currentVersion,
                  sizeBytes: stat.size,
                  sizeFormatted: (stat.size / (1024 * 1024)).toFixed(2) + ' MB',
                  firebaseChordsUpdated: fbUpdatedCount
                };

                // Guardar en histórico
                const historyFile = path.join(backupsDir, 'backups-history.json');
                let history = [];
                if (fs.existsSync(historyFile)) {
                  try {
                    history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
                  } catch (e) { history = []; }
                }
                history.unshift(item);
                fs.writeFileSync(historyFile, JSON.stringify(history, null, 2), 'utf8');

                console.log(`[Server Backup] ✅ Respaldo completado: ${filename} (${item.sizeFormatted})`);

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, backup: item }));
              });
            } catch (e) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: e.message }));
            }
          } else if (req.url.startsWith('/api/download-backup') && req.method === 'GET') {
            try {
              const urlObj = new URL(req.url, `http://${req.headers.host}`);
              const requestedFile = urlObj.searchParams.get('file');
              if (!requestedFile || !requestedFile.endsWith('.7z')) {
                res.statusCode = 400;
                res.end('Archivo inválido');
                return;
              }

              const safeName = path.basename(requestedFile);
              const filePath = path.resolve(__dirname, 'backups', safeName);
              if (!fs.existsSync(filePath)) {
                res.statusCode = 404;
                res.end('Archivo no encontrado');
                return;
              }

              const stat = fs.statSync(filePath);
              res.writeHead(200, {
                'Content-Type': 'application/x-7z-compressed',
                'Content-Length': stat.size,
                'Content-Disposition': `attachment; filename="${safeName}"`
              });

              const readStream = fs.createReadStream(filePath);
              readStream.pipe(res);
            } catch (e) {
              res.statusCode = 500;
              res.end(e.message);
            }
          } else {
            next();
          }
        });
      }
    }
  ]
});

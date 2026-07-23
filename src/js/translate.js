const fs = require('fs');
const { translate } = require('@vitalets/google-translate-api');

async function main() {
    let raw = fs.readFileSync('songs-data_it.js', 'utf8');
    
    // find where 'const songs = [' starts
    const match = raw.match(/const\s+songs\s*=\s*\[/);
    if (!match) {
        console.error("Could not find start of songs array");
        return;
    }
    
    raw = raw.substring(match.index);
    raw = raw.replace(/const\s+songs\s*=\s*/, '');
    raw = raw.replace(/;\s*$/, '');
    
    let songs;
    try {
        songs = eval('(' + raw + ')');
    } catch (e) {
        console.error("Eval error:", e);
        return;
    }
    
    console.log(`Found ${songs.length} songs. Beginning translation...`);
    
    const BATCH_SIZE = 10;
    for (let i = 0; i < songs.length; i += BATCH_SIZE) {
        const batch = songs.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map(async (s) => {
            try {
                if (s.title) s.title = (await translate(s.title, { to: 'it' })).text;
                if (s.subtitle) s.subtitle = (await translate(s.subtitle, { to: 'it' })).text;
                if (s.content) s.content = (await translate(s.content, { to: 'it' })).text;
            } catch(e) {
                console.error(`Failed on id ${s.id}: ${e.message}`);
            }
        }));
        console.log(`Translated up to ${Math.min(i + BATCH_SIZE, songs.length)}/${songs.length}`);
        await new Promise(r => setTimeout(r, 2000));
    }
    
    // Formatting the output back to a readable JS file
    const newContent = '// Datos de los cantos\nconst songs = ' + JSON.stringify(songs, null, '\t') + ';\n';
    fs.writeFileSync('songs-data_it.js', newContent, 'utf8');
    console.log("Done!");
}
main();

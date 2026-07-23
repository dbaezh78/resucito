const fs = require('fs');
const translate = require('translate-google');

async function main() {
    let raw = fs.readFileSync('songs-data_it.js', 'utf8');
    
    // find where 'const songs = [' starts
    const match = raw.match(/const\s+songs\s*=\s*\[/);
    if (!match) {
        console.error("Could not find start of songs array");
        return;
    }
    
    let prefixData = raw.substring(0, match.index);
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
    
    // Check state to resume
    let state = 0;
    
    const BATCH_SIZE = 1; // 1 at a time to avoid rate limits
    let count = 0;
    
    for (let i = 0; i < songs.length; i++) {
        let s = songs[i];
        
        // Skip already translated (crude check: if title is different or we know we did it)
        // Let's just track the 'translated' flag. Since we don't have it, we check if it is translated.
        // Actually, let's look for a temporary file.
        
        if (s.translated) {
            count++;
            continue;
        }
        
        try {
            if (s.title) s.title = await translate(s.title, { to: 'it' });
            if (s.subtitle) s.subtitle = await translate(s.subtitle, { to: 'it' });
            if (s.content) s.content = await translate(s.content, { to: 'it' });
            s.translated = true;
            count++;
            console.log(`Translated ${count}/${songs.length}: ${s.id}`);
            
            // Save immediately after each success to not lose progress
            const newContent = prefixData + 'const songs = ' + JSON.stringify(songs, null, '\t') + ';\n';
            fs.writeFileSync('songs-data_it.js', newContent, 'utf8');
            
            await new Promise(r => setTimeout(r, 1000));
        } catch(e) {
            console.error(`Failed on id ${s.id}: ${e.message}`);
            // Wait longer on failure
            await new Promise(r => setTimeout(r, 5000));
            // Don't break, retry on next run or loop?
            // Actually, if it fails, break the loop so we can see.
            break;
        }
    }
    
    console.log("Translation loop finished.");
}
main();

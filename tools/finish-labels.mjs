import fs from 'node:fs/promises';
let s=await fs.readFile('entrega/Prototipo/HTML/app.js','utf8');s=s.replace('aria-label="${new Intl.DateTimeFormat','title="${new Intl.DateTimeFormat');await fs.writeFile('entrega/Prototipo/HTML/app.js',s);
let c=await fs.readFile('tools/content.mjs','utf8');c=c.replace('https://www.nomodes.com/complexity','https://www.nomodes.com/larry-tesler-consulting/complexity-law');await fs.writeFile('tools/content.mjs',c);

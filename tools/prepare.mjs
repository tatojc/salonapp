import fs from 'node:fs/promises';
const root='entrega/Prototipo/HTML';
let js=await fs.readFile(root+'/app.js','utf8');
js=js.replace("currentId='',rescheduleId='',lastRoute=''","currentId='',rescheduleId=draft.editingId||'',lastRoute=''");
js=js.replace("if(!['reagendar','horario','resumen','fecha'].includes(route))rescheduleId='';if(['profesionales','fecha','horario','resumen','reagendar'].includes(route)","if(['servicios','inicio','citas','cita'].includes(route)){rescheduleId='';delete draft.editingId;saveDraft()}if(['profesionales','fecha','horario','resumen'].includes(route)");
js=js.replace("draft={ids:[...a.ids],staff:a.staffId,date:'',time:''};saveDraft()","draft={ids:[...a.ids],staff:a.staffId,date:'',time:'',editingId:arg};saveDraft()");
await fs.writeFile(root+'/app.js',js);
let css=await fs.readFile(root+'/styles.css','utf8');
css=css.replace("@font-face{font-family:Inter;src:url('assets/Inter.woff2') format('woff2');font-display:swap}","@font-face{font-family:Inter;src:url('assets/Inter-Regular.ttf') format('truetype');font-weight:400;font-display:swap}@font-face{font-family:Inter;src:url('assets/Inter-Medium.ttf') format('truetype');font-weight:500;font-display:swap}@font-face{font-family:Inter;src:url('assets/Inter-SemiBold.ttf') format('truetype');font-weight:600;font-display:swap}@font-face{font-family:Inter;src:url('assets/Inter-Bold.ttf') format('truetype');font-weight:700;font-display:swap}");
await fs.writeFile(root+'/styles.css',css);
const urls=[['Regular','mMEVuLyfMZg'],['Medium','mMEVuI6fMZg'],['SemiBold','mMEVuGKYMZg'],['Bold','mMEVuFuYMZg']];
for(const [name,end]of urls){const url='https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduK'+end+'.ttf';const res=await fetch(url);if(!res.ok)throw Error('Font '+res.status);await fs.writeFile(root+'/assets/Inter-'+name+'.ttf',Buffer.from(await res.arrayBuffer()))}
const license=await fetch('https://raw.githubusercontent.com/rsms/inter/master/LICENSE.txt');if(license.ok)await fs.writeFile(root+'/assets/Inter-LICENSE.txt',await license.text());
console.log('Fuentes locales y navegación preparadas.');

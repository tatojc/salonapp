import fs from 'node:fs/promises';
await fs.appendFile('entrega/Prototipo/HTML/styles.css',"\n.service-art img{position:absolute;inset:0;object-position:center 63%}\n");
let s=await fs.readFile('tools/documents.mjs','utf8');
s=s.replace("function miniSitemap(top=y){const groups=", "function miniSitemap(top=y){const rootY=top;box(doc.page.width/2-65,rootY,130,30,'APPSALÓN',C.ink,9);doc.font('bold').fontSize(9).fillColor('#fff').text('APPSALÓN',doc.page.width/2-55,rootY+9,{width:110,align:'center'});top+=65;for(let i=0;i<4;i++){const ww=(doc.page.width-118)/4;arrow(doc.page.width/2,rootY+30,44+i*(ww+10)+ww/2,top-4);}const groups=");
s=s.replace("arrow(X,top+472,195,top+472,'No / volver');arrow(X+W/2", "arrow(X,top+472,195,top+472,'No / volver');arrow(118,top+450,118,top+396);arrow(118,top+396,X,top+396);arrow(X+W/2");
await fs.writeFile('tools/documents.mjs',s);

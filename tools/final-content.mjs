import fs from 'node:fs/promises';import {processPages,prefix,author,sources} from './content.mjs';
let r=await fs.readFile('tools/render-pdfs.mjs','utf8');r=r.replace('await pdf.destroy();','');await fs.writeFile('tools/render-pdfs.mjs',r);
let a=await fs.readFile('entrega/Prototipo/HTML/app.js','utf8');a=a.replace('Interior de un salón con sillas y espejos, un ambiente cálido y luminoso','Profesional secando el cabello de una clienta en un salón luminoso');await fs.writeFile('entrega/Prototipo/HTML/app.js',a);
const editable=processPages.map((p,i)=>p.type==='cover'?`# AppSalón\n\n${author}\n\nDocumento de proceso de diseño · 7 de noviembre de 2026\n\nTesting humano pendiente.`:`\n\n---\n\n## Página ${i+1}: ${p.section} - ${p.title}\n\n${(p.paras||[]).join('\n\n')}${p.table?'\n\n'+p.table.map(row=>row.join(' | ')).join('\n'):''}${p.callout?'\n\nNota: '+p.callout:''}`).join('');await fs.writeFile('entrega/Anexos/'+prefix+'_Documento_Proceso_Editable.md',editable+'\n\n'+sources.map(([id,t,u])=>`[${id}] ${t}\n${u}`).join('\n\n'));
await fs.writeFile('entrega/LEEME_ANTES_DE_ENTREGAR.txt',`APPSALÓN - PROYECTO FINAL UX

INICIO RÁPIDO
1. Descomprime todo el ZIP.
2. Abre Prototipo/HTML/index.html. Funciona sin instalación ni internet.
3. Consulta Documento/${prefix}_Documento_Proceso.pdf (25 páginas).
4. Para exponer: Presentacion/${prefix}_Presentacion.pdf y el guion de 15 minutos.

QUÉ ESTÁ CONSTRUIDO
- Prototipo con 18 tipos de pantalla navegables y guía interna.
- Reserva, búsqueda, filtros, total y duración, disponibilidad, gestión, cambio y cancelación.
- 25 páginas de proceso, sitemap, 2 flujos, 2 personas hipotéticas, journeys, 12 requerimientos funcionales, 10 no funcionales, casos de uso y 5 wireframes.
- Plan de testing, informe de estado, formatos y herramienta para registrar sesiones reales.
- 46/46 comprobaciones técnicas; auditoría automática sin infracciones en las pantallas revisadas.
- 30 comprobaciones adicionales de reflujo a 320 y 768 px.

PENDIENTES OBLIGATORIOS ANTES DE MOODLE
1. Confirmar nombre completo: se usó ${author}, inferido de la carpeta de trabajo. Tu respuesta confirmó AppSalón como proyecto, pero no el nombre personal. Si es distinto, actualizar portada, documentos y nombres de archivo.
2. Ejecutar testing con AL MENOS DOS PERSONAS REALES. La rúbrica lo exige. Ahora hay 0 participantes documentados.
3. Abrir Prototipo/HTML/testing.html, registrar P01 y P02, usar datos ficticios y exportar el JSON. Guardar capturas anónimas en Testing/Evidencias/Sesiones_Reales.
4. Completar resultados cualitativos, frecuencia y severidad, priorizar máximo 2 problemas críticos reales y actualizar proceso, informe y presentación. No presentar hipótesis ni verificaciones automáticas como sesiones humanas.
5. Comprimir la carpeta actualizada con el nombre Apellido_Nombre_ProyectoFinal_UX.zip y subir un único ZIP a Moodle. Verificar plazo en clase; la consigna no da una fecha calendario.

LÍMITES DEL PROTOTIPO
El salón, equipo, servicios y precios son ficticios. No hay autenticación real, correos, pagos, backend ni agenda sincronizada. Acceso y registro gestionan solo un perfil local sin contraseña. Usa información ficticia. Los controles de disponibilidad operan sobre citas de este navegador.

ACCESIBILIDAD
Se implementan criterios WCAG 2.1 AA y se ejecutan reglas automáticas y comprobaciones de teclado. No se declara certificación ni auditoría integral; falta lector de pantalla y evaluación con usuarios. Las reglas que requieren revisión manual están en el JSON técnico.

ORGANIZACIÓN
Documento/ · Prototipo/ · Arquitectura/ · Testing/ · Anexos/ · Presentacion/
El archivo editable del proceso está en Anexos. Los scripts de generación permanecen en tools/ dentro del workspace APPSALON, fuera del ZIP académico. Los PDF se entregan terminados; para ejecutar el prototipo no hacen falta esos scripts.

La entrega está preparada para completar las dos sesiones; no debe presentarse como testing humano ya ejecutado.
`);
await fs.mkdir('entrega/Testing/Evidencias/Sesiones_Reales',{recursive:true});await fs.writeFile('entrega/Testing/Evidencias/Sesiones_Reales/INSTRUCCIONES.txt',`Esta carpeta todavía no contiene evidencia de participantes.
Guarda capturas REALES y anónimas: P01_T1_confirmacion.png, P01_T2_cambio.png, P01_T3_cancelacion.png; equivalente para P02.
No es necesario fotografiar rostros. Obtén consentimiento y oculta información personal.
Exporta las sesiones desde Prototipo/HTML/testing.html y guarda AppSalon_Sesiones_Reales.json en Testing/.
Las capturas automatizadas existentes están en Verificacion_Tecnica y no representan participantes.
`);
await fs.writeFile('entrega/Testing/Plantilla_Sesiones_Reales.json',JSON.stringify({project:'AppSalón',status:'pendiente_sin_participantes',participantsDocumented:0,sessions:['P01','P02'].map(id=>({participant:id,consent:null,context:null,device:null,recordedAt:null,tasks:['T1','T2','T3'].map(task=>({task,result:null,seconds:null,ease1to7:null,help:null,notes:null,evidence:[]})),positive:null,improvements:null})),problems:[]},null,2));
await fs.writeFile('entrega/Prototipo/HTML/assets/CREDITOS.txt',`RECURSOS VISUALES Y TIPOGRÁFICOS
Las fotografías ambientan una demostración académica. No representan al equipo ficticio.
Licencia Unsplash: https://unsplash.com/license

salon.jpg: https://images.unsplash.com/photo-1562322140-8baeececf3df
corte.jpg: https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f
unas.jpg: https://images.unsplash.com/photo-1604654894610-df63bc536371
bienestar.jpg: https://images.unsplash.com/photo-1544161515-4ab6ce6db874

Inter: Rasmus Andersson, https://github.com/rsms/inter
Licencia SIL Open Font License 1.1: ver Inter-LICENSE.txt.
Georgia y Segoe UI: fuentes de sistema para títulos / alternativa.
Iconos y marca SVG: construidos en código para este proyecto.
Los recursos usados durante la ejecución se incluyen localmente. No requiere llamadas a Google Fonts o Unsplash.
`);
console.log('Guías, datos editables y créditos completos.');

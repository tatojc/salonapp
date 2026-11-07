import fs from 'node:fs/promises';import {processPages,prefix,author,sources,functional,nonfunctional} from './content-v2.mjs';
const guide=`APPSALÓN - VERSIÓN CON ADMINISTRACIÓN

INICIAR EN EL WORKSPACE
1. Si ya tenías un servidor abierto, detenlo con Ctrl+C.
2. En C:\\Users\\jerson cardenas\\APPSALON ejecuta: npm.cmd run preview
3. Sitio: http://127.0.0.1:4173
4. Panel: http://127.0.0.1:4173/#/admin

CUENTA INICIAL DE ADMINISTRADOR
Correo: admin@appsalon.local
Contraseña: AppSalon2026!
Puedes cambiar la contraseña en Configuración. Al reiniciar, se conserva la contraseña nueva y se solicita iniciar sesión otra vez.

INICIAR DESDE EL ZIP
Descomprime TODO el ZIP. Abre INICIAR_APPSALON.bat. Requiere Node.js 22 o posterior, sin paquetes adicionales.
Alternativa: terminal en Prototipo > node Servidor/server.mjs

QUÉ PUEDE HACER EL ADMINISTRADOR
- Agregar, editar y eliminar trabajadores; fotografía, especialidades y disponibilidad.
- Agregar, editar y eliminar servicios; precio, duración, categoría, descripción, foto y destacado.
- Consultar TODAS las citas y los datos de contacto de los clientes.
- Filtrar por búsqueda, fecha, estado y profesional; descargar CSV.
- Cambiar profesional, fecha y hora; marcar completada o cancelada.
- Configurar datos y horarios del salón, descanso, días de atención y política de citas.
- Cambiar la contraseña y cerrar sesión.

FOTOGRAFÍAS
Los 12 servicios y 4 trabajadores iniciales tienen foto. Las imágenes se incluyen localmente. El administrador puede usar la galería o subir JPG, PNG o WebP de hasta 1 MB. Los retratos iniciales son ilustrativos de perfiles ficticios.

DATOS Y REGLAS
La agenda y configuración se guardan en el servidor: .appsalon/appsalon.json en el workspace, o Prototipo/Servidor/datos/appsalon.json al iniciar desde el ZIP.
No borres esa base si quieres conservar tu trabajo. Respáldala con el servidor detenido.
Los cambios de precio no alteran el importe de citas anteriores.
No puede eliminarse un trabajador con citas futuras activas sin reasignarlas o cancelarlas primero.
Las rutas de administración requieren una sesión válida en el servidor.
Los clientes solo consultan las citas de su navegador; el administrador consulta todas.

MODO DE ARCHIVO
Prototipo/HTML/index.html sigue abriendo la demostración de cliente sin servidor. En ese modo las citas no llegan al administrador. Para administrar, usa el servidor.

ENTREGA ACADÉMICA
Proceso de 25 páginas, sitemap de cliente y administrador, dos flujos, personas y journeys, ${functional.length} requerimientos funcionales y ${nonfunctional.length} no funcionales, casos de uso, 5 wireframes, manual administrativo, material de testing y presentación.
Pruebas técnicas: 46/46 cliente, 56/56 panel, 13/13 persistencia y contraseña. Son verificaciones automatizadas, no participantes.

PENDIENTES ANTES DE MOODLE
- Confirmar nombre completo: ${author}, inferido de la carpeta.
- Ejecutar testing con DOS PERSONAS REALES. Actualmente hay 0 documentadas.
- Registrar P01 y P02 desde Prototipo/HTML/testing.html, exportar JSON y guardar capturas anónimas.
- Actualizar resultados, proceso y presentación con hallazgos reales; priorizar máximo dos problemas críticos observados.
- Comprimir de nuevo la carpeta actualizada con nombre Apellido_Nombre_ProyectoFinal_UX.zip.

ALCANCE
Distribución académica para uso local. No hay despliegue público, pagos, correo ni cuentas de cliente autenticadas. El salón, personas y precios iniciales son de demostración. Usa datos ficticios al evaluar.
`;
await fs.writeFile('entrega/LEEME_ANTES_DE_ENTREGAR.txt',guide);await fs.writeFile('entrega/Prototipo/HTML/README.txt',guide);
const editable=processPages.map((p,i)=>p.type==='cover'?`# AppSalón\n\n${author}\n\nDocumento de proceso · 7 de noviembre de 2026\n\nTesting humano pendiente.`:`\n\n---\n\n## Página ${i+1}: ${p.section} - ${p.title}\n\n${(p.paras||[]).join('\n\n')}${p.table?'\n\n'+p.table.map(r=>r.join(' | ')).join('\n'):''}${p.callout?'\n\nNota: '+p.callout:''}`).join('');await fs.writeFile('entrega/Anexos/'+prefix+'_Documento_Proceso_Editable.md',editable+'\n\n'+sources.map(([id,t,u])=>`[${id}] ${t}\n${u}`).join('\n\n'));
let credits=await fs.readFile('entrega/Prototipo/HTML/assets/CREDITOS.txt','utf8');credits=credits.replace('No representan al equipo ficticio.', 'Los retratos son fotografías ilustrativas para perfiles ficticios; no identifican a empleados reales.');credits+='\nRECURSOS AÑADIDOS PARA LA AMPLIACIÓN\nUnsplash: https://unsplash.com/license\n';const photos=JSON.parse(await fs.readFile('tmp/images/fuentes.json'));for(const p of photos)if(!['color','tratamiento','pedicure'].includes(p.name))credits+=p.name+'.jpg: '+p.url+'\n';credits+='\nPexels: https://www.pexels.com/license/\ncolor.jpg: https://www.pexels.com/photo/woman-getting-her-hair-colored-8468126/\ntratamiento.jpg: cottonbro studio, https://www.pexels.com/photo/woman-getting-her-hair-shampoo-3993444/\npedicure.jpg: Zeal Creative Studios, https://www.pexels.com/photo/relaxing-spa-pedicure-service-in-salon-31091768/\n\nLas fotografías subidas después desde administración son responsabilidad del propietario del salón y no forman parte de los recursos de stock iniciales.\n';await fs.writeFile('entrega/Prototipo/HTML/assets/CREDITOS.txt',credits);
let html=await fs.readFile('entrega/ABRIR_PROTOTIPO.html','utf8');html=html.replace('<p><a href="Prototipo/HTML/testing.html">','<p>Para la administración y la agenda compartida, abre INICIAR_APPSALON.bat y visita http://127.0.0.1:4173/#/admin.</p><p><a href="Prototipo/HTML/testing.html">');await fs.writeFile('entrega/ABRIR_PROTOTIPO.html',html);
let pkg=await fs.readFile('tools/package.mjs','utf8');pkg=pkg.replace("const zipPath=", "const admin=JSON.parse(await fsp.readFile('entrega/Testing/Verificacion_Admin.json')),persistence=JSON.parse(await fsp.readFile('entrega/Testing/Verificacion_Persistencia.json'));if(admin.checks.some(c=>!c.ok)||admin.audits.some(a=>a.violations.length)||persistence.checks.some(c=>!c.ok))throw Error('Hay comprobaciones administrativas pendientes.');\nconst zipPath=");pkg=pkg.replace("processPages:25,files", "processPages:25,adminChecks:56,persistenceChecks:13,files");pkg=pkg.replace("if(e.isDirectory())await walk(f);", "if(e.isDirectory()&&!['datos','node_modules'].includes(e.name))await walk(f);");await fs.writeFile('tools/package.mjs',pkg);
for(const file of ['tools/responsive.mjs','tools/final-check.mjs']){let s=await fs.readFile(file,'utf8');s=s.replaceAll('http://127.0.0.1:4173','http://127.0.0.1:4174');await fs.writeFile(file,s)}
let readme=await fs.readFile('README.md','utf8');readme=readme.replace('No necesita instalación ni internet.','Para administrar y compartir la agenda, inicia el servidor Node.js. El modo de archivo demuestra solamente las pantallas de cliente.');readme=readme.replace('Los datos de texto están en `tools/content.mjs`','La cuenta inicial de administrador es `admin@appsalon.local`, contraseña `AppSalon2026!`. El acceso está en `http://127.0.0.1:4173/#/admin`.\n\nLos datos de texto están en `tools/content-v2.mjs`');readme=readme.replace('No hay backend, pagos, autenticación real ni agenda compartida.','Incluye backend local, agenda compartida y sesión de administrador. No incluye despliegue público, pagos, correo ni cuentas de cliente autenticadas.');await fs.writeFile('README.md',readme);console.log('Instrucciones, créditos, documentación editable y paquete actualizados.');

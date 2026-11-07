import {createAppServer} from '../entrega/Prototipo/Servidor/server.mjs';
import path from 'node:path';
const server=await createAppServer({dataDir:process.env.APPSALON_DATA_DIR||path.resolve('.appsalon')});
const port=Number(process.env.PORT||4173);
server.on('error',e=>{console.error(e.code==='EADDRINUSE'?'El puerto '+port+' está ocupado. Detén el servidor anterior con Ctrl+C y ejecuta npm.cmd run preview.':e.message);process.exitCode=1});
server.listen(port,'127.0.0.1',()=>console.log('AppSalón: http://127.0.0.1:'+port+'\nAdministración: http://127.0.0.1:'+port+'/#/admin'));
process.on('SIGINT',()=>server.close());

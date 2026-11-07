APPSALÓN - SERVIDOR LOCAL Y ADMINISTRACIÓN

Requiere Node.js 22 o posterior. No utiliza paquetes externos.

EJECUTAR DESDE EL ZIP
Descomprime todo el ZIP. Abre INICIAR_APPSALON.bat en la carpeta principal.
Alternativa: abre una terminal en Prototipo y ejecuta node Servidor/server.mjs

En el workspace APPSALON: npm.cmd run preview

SITIO: http://127.0.0.1:4173
ADMINISTRACIÓN: http://127.0.0.1:4173/#/admin
CORREO INICIAL: admin@appsalon.local
CONTRASEÑA INICIAL: AppSalon2026!

La contraseña puede cambiarse en Configuración. El correo y contraseña de inicio solo crean la cuenta cuando todavía no existe la base de datos. Cambiar variables de entorno después no reemplaza una contraseña guardada.

CAPACIDADES
- Agregar, editar y eliminar trabajadores; especialidades, foto y disponibilidad.
- Agregar, editar y eliminar servicios; precio, duración, categoría, descripción, foto y destacado.
- Ver TODAS las citas con contacto del cliente, fecha, hora, servicios y total.
- Filtrar agenda por cliente, fecha, estado y profesional; exportar CSV.
- Reasignar, reagendar, completar y cancelar citas.
- Configurar nombre, eslogan, dirección, teléfono, días, horario, descanso y política de citas.
- Cambiar la contraseña y cerrar sesión.

DATOS
Al ejecutar directamente este servidor, se crea datos/appsalon.json junto a server.mjs.
Desde el workspace, tools/server.mjs guarda en .appsalon/appsalon.json.
No borres esos archivos si deseas conservar tu configuración y citas. Guarda una copia del archivo con el servidor detenido.
Las fotos subidas se guardan dentro de cada registro, en la misma base JSON.

AUTORIZACIÓN
Las rutas de administración comprueban la sesión en el servidor. La contraseña se almacena como hash scrypt con sal. La cookie de sesión es HttpOnly y SameSite=Strict. Las sesiones duran hasta 8 horas y se cierran al reiniciar el servidor. Cambiar contraseña revoca las otras sesiones.
El servidor acepta conexiones en 127.0.0.1 y hosts locales. Esta distribución está preparada para uso local académico; no incluye despliegue público, HTTPS ni cuentas de cliente autenticadas.
Cada navegador conserva un identificador de cliente: el administrador ve todas las citas; los clientes solo pueden consultar y gestionar las suyas. No se autentica una identidad personal por correo.

REGLAS
Los precios nuevos se aplican a reservas nuevas. Al reagendar se conserva el precio y la duración originales.
No se permite retirar un trabajador que tiene citas futuras activas: primero reasignarlas o cancelarlas.
Los servicios se archivan al eliminarlos para conservar la información de reservas anteriores.
Los cambios de horario no pueden dejar citas activas fuera de la jornada.
Dos solicitudes simultáneas no pueden ocupar al mismo profesional en horarios solapados.

SI EL PUERTO ESTÁ OCUPADO
Cierra el servidor anterior con Ctrl+C y vuelve a ejecutar. También puedes establecer PORT a otro puerto antes de iniciarlo.

MODO SIN SERVIDOR
HTML/index.html sigue abriendo la demostración de cliente sin internet. Ese modo usa almacenamiento del navegador y no conecta las citas con el administrador. Para usar la administración y la agenda compartida, abre el sitio mediante el servidor.

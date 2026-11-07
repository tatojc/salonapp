APPSALÓN - VERSIÓN CON ADMINISTRACIÓN

INICIAR EN EL WORKSPACE
1. Si ya tenías un servidor abierto, detenlo con Ctrl+C.
2. En C:\Users\jerson cardenas\APPSALON ejecuta: npm.cmd run preview
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
Proceso de 25 páginas, sitemap de cliente y administrador, dos flujos, personas y journeys, 18 requerimientos funcionales y 12 no funcionales, casos de uso, 5 wireframes, manual administrativo, material de testing y presentación.
Pruebas técnicas: 46/46 cliente, 56/56 panel, 13/13 persistencia y contraseña. Son verificaciones automatizadas, no participantes.

PENDIENTES ANTES DE MOODLE
- Confirmar nombre completo: Jerson Cárdenas, inferido de la carpeta.
- Ejecutar testing con DOS PERSONAS REALES. Actualmente hay 0 documentadas.
- Registrar P01 y P02 desde Prototipo/HTML/testing.html, exportar JSON y guardar capturas anónimas.
- Actualizar resultados, proceso y presentación con hallazgos reales; priorizar máximo dos problemas críticos observados.
- Comprimir de nuevo la carpeta actualizada con nombre Apellido_Nombre_ProyectoFinal_UX.zip.

ALCANCE
Distribución académica para uso local. No hay despliegue público, pagos, correo ni cuentas de cliente autenticadas. El salón, personas y precios iniciales son de demostración. Usa datos ficticios al evaluar.

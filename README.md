# AppSalón · reservas y administración

Aplicación académica para reservar servicios de salón y administrar trabajadores, fotografías, precios, horarios y citas. Incluye 12 servicios con foto, cuatro profesionales iniciales, agenda compartida y acceso de administrador.

Requiere **Node.js 22 o posterior**. El servidor usa módulos de Node.js y puede iniciarse sin instalar paquetes:

```powershell
git clone https://github.com/tatojc/appsalon.git
cd appsalon
npm.cmd run preview
```

Abre **http://127.0.0.1:4173**. Para administrar, entra a **http://127.0.0.1:4173/#/admin** con la cuenta inicial `admin@appsalon.local` y la contraseña `AppSalon2026!`. Puedes cambiarla en Configuración.

En Windows también puedes abrir [INICIAR_APPSALON.bat](entrega/INICIAR_APPSALON.bat). Mantén la terminal abierta y usa `Ctrl+C` para detener el servidor.

El servidor del workspace guarda los datos en `.appsalon/appsalon.json`; el lanzador de la entrega usa `entrega/Prototipo/Servidor/datos/appsalon.json`. Estas bases locales se excluyen de Git. Los precios nuevos no alteran el importe de las reservas existentes; antes de eliminar un trabajador con citas activas hay que reasignarlas o cancelarlas.

La carpeta `entrega/` reúne el documento de 25 páginas, el prototipo, arquitectura, testing, anexos, manual administrativo y presentación. El [ZIP de entrega](output/Cardenas_Jerson_ProyectoFinal_UX.zip) se guarda en `output/`. Abrir [index.html](entrega/Prototipo/HTML/index.html) directamente permite demostrar las pantallas de cliente sin servidor; ese modo tiene una agenda independiente.

**Pendiente antes de entregar:** ejecutar las dos sesiones humanas, actualizar resultados y confirmar el nombre del estudiante. La documentación distingue pruebas técnicas, personas hipotéticas y evidencia real pendiente.

Para instalar las herramientas de desarrollo y generación de documentos:

```powershell
npm.cmd ci
```

Las comprobaciones de navegador usan un servidor de pruebas en el puerto 4174 y Chrome local. Los comandos de documentación y empaquetado son:

```powershell
npm.cmd run docs
node tools/render-pdfs.mjs
npm.cmd run package
```

Los datos de texto están en `tools/content-v2.mjs` y la composición PDF en `tools/documents.mjs`. Los scripts `prepare`, `refine`, `polish` y similares registran pasos de construcción ya aplicados; no es necesario volver a ejecutarlos.

El prototipo guarda datos ficticios en el navegador. Incluye backend local, agenda compartida y sesión de administrador. No incluye despliegue público, pagos, correo ni cuentas de cliente autenticadas.

Para publicar cambios desde Windows, abre [SUBIR_A_GITHUB.bat](SUBIR_A_GITHUB.bat). El archivo solicita la autorización de la cuenta `tatojc` en GitHub y después ejecuta `git push` a `main`, conservando el historial del repositorio.

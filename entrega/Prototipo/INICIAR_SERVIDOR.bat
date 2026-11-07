@echo off
title AppSalon - Servidor local
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo Instala Node.js 22 o posterior y vuelve a abrir este archivo.
  pause
  exit /b 1
)
echo Abre http://127.0.0.1:4173 en tu navegador.
echo Administracion: http://127.0.0.1:4173/#/admin
echo Para detener el servidor, presiona Ctrl+C.
node Servidor\server.mjs
pause

@echo off
setlocal
title AppSalon - Subir a GitHub
cd /d "%~dp0"

echo ==========================================
echo   APPSALON - SUBIR A GITHUB
echo ==========================================
echo.
echo Repositorio: https://github.com/tatojc/salonapp
echo Cuenta que debes autorizar: tatojc
echo.
echo Se abrira la autorizacion de GitHub en tu navegador.
echo Entra como tatojc y pulsa Authorize Git Credential Manager.
echo Si aparece otra cuenta, entra con tatojc en esa ventana.
echo No cierres esta terminal mientras autorizas.
echo.

git remote set-url origin https://github.com/tatojc/salonapp.git
if errorlevel 1 (
  echo No se pudo configurar el repositorio de destino.
  pause
  exit /b 1
)

git credential-manager github login --username tatojc --browser
if errorlevel 1 (
  echo.
  echo No se completo la autorizacion. El proyecto sigue guardado localmente.
  echo Revisa la cuenta usada en GitHub y vuelve a abrir este archivo.
  pause
  exit /b 1
)

echo.
echo Autorizacion completada. Subiendo main...
git -c credential.https://github.com.username=tatojc push --set-upstream origin main
if errorlevel 1 (
  echo.
  echo GitHub no acepto la subida. Conserva el error mostrado y compartelo.
  echo Tus archivos y commits siguen guardados localmente.
  pause
  exit /b 1
)

echo.
echo SUBIDA COMPLETADA.
echo Abre https://github.com/tatojc/salonapp
echo.
git log -1 --oneline
pause

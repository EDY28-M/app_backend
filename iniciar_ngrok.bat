@echo off
echo ========================================
echo   ngrok - Exponer backend a internet
echo ========================================
echo.
echo Asegurate de que el backend este corriendo (npm run start)
echo en otra terminal antes de usar ngrok.
echo.

set NGROK_EXE=
where ngrok >nul 2>&1 && set NGROK_EXE=ngrok
if "%NGROK_EXE%"=="" if exist "%~dp0ngrok.exe" set NGROK_EXE=%~dp0ngrok.exe
if "%NGROK_EXE%"=="" if exist "%USERPROFILE%\Downloads\ngrok.exe" set NGROK_EXE=%USERPROFILE%\Downloads\ngrok.exe

if "%NGROK_EXE%"=="" (
  echo ERROR: ngrok no encontrado.
  echo.
  echo 1. Descarga ngrok: https://ngrok.com/download
  echo 2. Extrae ngrok.exe
  echo 3. Opciones:
  echo    - Pon ngrok.exe en esta carpeta: APP\backend\
  echo    - O en Descargas
  echo    - O agrega la carpeta de ngrok al PATH de Windows
  echo.
  pause
  exit /b 1
)

echo Cuando ngrok inicie, copia la URL https://... y pegala
echo en lib/config/app_config.dart como apiBaseUrlNgrok
echo.
pause
"%NGROK_EXE%" http 3000

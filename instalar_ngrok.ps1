# Instalar ngrok y agregarlo al PATH (PowerShell)
# Ejecutar: powershell -ExecutionPolicy Bypass -File instalar_ngrok.ps1

$ngrokDir = "$env:LOCALAPPDATA\ngrok"
$zipUrl = "https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip"
$zipPath = "$env:TEMP\ngrok.zip"

Write-Host "=== Instalador ngrok ===" -ForegroundColor Cyan
Write-Host ""

# Si ya existe en Descargas, usar esa copia
$descargas = "$env:USERPROFILE\Downloads\ngrok-v3-stable-windows-amd64"
if (Test-Path "$descargas\ngrok.exe") {
    Write-Host "ngrok encontrado en Descargas. Agregando al PATH..." -ForegroundColor Green
    $ngrokDir = $descargas
} else {
    Write-Host "Descargando ngrok..." -ForegroundColor Yellow
    try {
        Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath -UseBasicParsing
    } catch {
        Write-Host "Error al descargar. Prueba manualmente: https://ngrok.com/download" -ForegroundColor Red
        exit 1
    }

    Write-Host "Extrayendo..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Force -Path $ngrokDir | Out-Null
    Expand-Archive -Path $zipPath -DestinationPath $ngrokDir -Force
    Remove-Item $zipPath -Force
    Write-Host "ngrok instalado en: $ngrokDir" -ForegroundColor Green
}

# Agregar al PATH del usuario
$userPath = [Environment]::GetEnvironmentVariable("Path", [EnvironmentVariableTarget]::User)
if ($userPath -notlike "*$ngrokDir*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$ngrokDir", [EnvironmentVariableTarget]::User)
    $env:Path = "$env:Path;$ngrokDir"
    Write-Host ""
    Write-Host "ngrok agregado al PATH correctamente." -ForegroundColor Green
} else {
    Write-Host "ngrok ya estaba en el PATH." -ForegroundColor Green
}

Write-Host ""
Write-Host "Cierra y abre una nueva terminal para usar 'ngrok'." -ForegroundColor Cyan
Write-Host "Luego ejecuta: ngrok config add-authtoken TU_TOKEN" -ForegroundColor Yellow
Write-Host "(Obtén el token en https://dashboard.ngrok.com/get-started/your-authtoken)" -ForegroundColor Gray

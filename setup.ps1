# =============================================================================
# setup.ps1
# Configuración inicial del backend NestJS
# Uso: .\setup.ps1
# =============================================================================

$BACKEND_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "=== Setup Backend Marketplace ===" -ForegroundColor Cyan
Write-Host ""

# 1. Verificar .env
$envFile = Join-Path $BACKEND_DIR ".env"
$envExample = Join-Path $BACKEND_DIR ".env.example"

if (-not (Test-Path $envFile)) {
    Write-Host "[1/4] Creando .env desde .env.example..." -ForegroundColor Yellow
    Copy-Item $envExample $envFile
    Write-Host "  Archivo .env creado. Edita los valores antes de continuar:" -ForegroundColor Yellow
    Write-Host "  - DATABASE_URL: conexion a PostgreSQL" -ForegroundColor Gray
    Write-Host "  - JWT_SECRET: cambia por un valor aleatorio largo" -ForegroundColor Gray
    Write-Host "  - JWT_REFRESH_SECRET: cambia por otro valor diferente" -ForegroundColor Gray
    Write-Host "  - GOOGLE_CLIENT_ID: (opcional) para login con Google" -ForegroundColor Gray
    Write-Host "  - OTP_PROVIDER: 'local' para desarrollo (muestra OTP en logs)" -ForegroundColor Gray
} else {
    Write-Host "[1/4] .env ya existe" -ForegroundColor Green
}

# 2. Instalar dependencias
Write-Host "[2/4] Instalando dependencias..." -ForegroundColor Yellow
Set-Location $BACKEND_DIR
npm install
Write-Host "  Dependencias instaladas" -ForegroundColor Green

# 3. Generar Prisma Client
Write-Host "[3/4] Generando Prisma Client..." -ForegroundColor Yellow
npx prisma generate
Write-Host "  Prisma Client generado" -ForegroundColor Green

# 4. Verificar conexion a BD
Write-Host "[4/4] Verificando conexion a la base de datos..." -ForegroundColor Yellow
npx prisma db pull --force 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) {
    Write-Host "  Conexion a la base de datos OK" -ForegroundColor Green
} else {
    Write-Host "  ERROR: No se pudo conectar a la base de datos" -ForegroundColor Red
    Write-Host "  Verifica DATABASE_URL en .env" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Setup completado ===" -ForegroundColor Green
Write-Host ""
Write-Host "Para iniciar el servidor:" -ForegroundColor Cyan
Write-Host "  npm run start:dev" -ForegroundColor White
Write-Host ""
Write-Host "Swagger docs:" -ForegroundColor Cyan
Write-Host "  http://localhost:3000/api/docs" -ForegroundColor White
Write-Host ""
Write-Host "Placeholders pendientes de configurar:" -ForegroundColor Yellow
Write-Host "  - GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET -> Login con Google" -ForegroundColor Gray
Write-Host "  - TWILIO_* -> Envio real de SMS/OTP" -ForegroundColor Gray
Write-Host "  En modo 'local', los codigos OTP se muestran en los logs del servidor." -ForegroundColor Gray

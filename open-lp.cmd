@echo off
setlocal

REM Redscale local preview launcher.
REM Double-click this file from the repository root to serve the latest pages in app\frontend.

cd /d "%~dp0"

if not exist "app\frontend\dev_server.py" (
  echo [ERRO] Nao encontrei app\frontend\dev_server.py.
  echo Execute este arquivo dentro da pasta do repositorio www.redscale.company v2.
  pause
  exit /b 1
)

where py >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  set "PYTHON_CMD=py -3"
) else (
  where python >nul 2>nul
  if %ERRORLEVEL% EQU 0 (
    set "PYTHON_CMD=python"
  ) else (
    echo [ERRO] Python nao encontrado. Instale Python 3 ou adicione ao PATH.
    pause
    exit /b 1
  )
)

set "HOST=127.0.0.1"
set "PORT=8000"
set "BASE_URL=http://%HOST%:%PORT%"

echo Iniciando preview local Redscale em %BASE_URL% ...
echo Paginas principais atualizadas:
echo - %BASE_URL%/home.html
echo - %BASE_URL%/contato.html
echo - %BASE_URL%/planilhas-personalizadas.html
echo - %BASE_URL%/dashboards.html
echo - %BASE_URL%/automacoes.html
echo - %BASE_URL%/controle-de-estoque.html
echo - %BASE_URL%/financeiro-e-gestao.html
echo - %BASE_URL%/mapeamento-inicial.html
echo - %BASE_URL%/recursos-prontos.html
echo - %BASE_URL%/redsights.html

start "" "%BASE_URL%/home.html"
start "" "%BASE_URL%/contato.html"
start "" "%BASE_URL%/planilhas-personalizadas.html"
start "" "%BASE_URL%/redsights.html"

%PYTHON_CMD% app\frontend\dev_server.py --host %HOST% --port %PORT%

echo.
echo Preview encerrado.
pause

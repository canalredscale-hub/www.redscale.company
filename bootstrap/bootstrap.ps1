param(
    [switch]$SkipLaunch
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$frontendRoot = Join-Path $root "app-teste\frontend"
$homePath = Join-Path $frontendRoot "home.html"

function Show-RecommendedNextSteps {
    Write-Host "Projeto atual: frontend de teste em app-teste/frontend."
    Write-Host "Preview local: python bootstrap/dev_server.py --web-root app-teste/frontend --port 8000"
    Write-Host "URL: http://127.0.0.1:8000/"
    Write-Host "Arquivos principais: app-teste/frontend/home.html, app-teste/frontend/contato.html, app-teste/frontend/styles.css, app-teste/frontend/main.js."
}

if (-not (Test-Path -LiteralPath $homePath)) {
    throw "O arquivo app-teste/frontend/home.html nao foi encontrado."
}

if ($SkipLaunch) {
    Show-RecommendedNextSteps
    exit 0
}

$python = Get-Command python -ErrorAction SilentlyContinue
if (-not $python) {
    throw "O comando 'python' nao foi encontrado no PATH."
}

Set-Location -LiteralPath $root
Write-Host "Iniciando preview do frontend atual em http://127.0.0.1:8000/"
& $python.Source .\bootstrap\dev_server.py --web-root app-teste/frontend --port 8000

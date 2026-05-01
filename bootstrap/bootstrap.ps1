param(
    [switch]$SkipLaunch
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$frontendRoot = Join-Path $root "app\frontend"
$homePath = Join-Path $frontendRoot "home.html"

function Show-RecommendedNextSteps {
    Write-Host "Projeto atual: frontend estatico em app/frontend."
    Write-Host "Preview local: python app/frontend/dev_server.py --port 8000"
    Write-Host "URL: http://127.0.0.1:8000/"
    Write-Host "Arquivos principais: app/frontend/home.html, app/frontend/contato.html, app/frontend/styles.css, app/frontend/main.js."
}

if (-not (Test-Path -LiteralPath $homePath)) {
    throw "O arquivo app/frontend/home.html nao foi encontrado."
}

if ($SkipLaunch) {
    Show-RecommendedNextSteps
    exit 0
}

$python = Get-Command python -ErrorAction SilentlyContinue
if (-not $python) {
    throw "O comando 'python' nao foi encontrado no PATH."
}

Set-Location -LiteralPath $frontendRoot
Write-Host "Iniciando preview do frontend atual em http://127.0.0.1:8000/"
& $python.Source .\dev_server.py --port 8000

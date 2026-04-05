param(
    [switch]$SkipLaunch
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$uvCommand = Get-Command uv -ErrorAction SilentlyContinue
if (-not $uvCommand) {
    Write-Host "O comando 'uv' nao foi encontrado."
    Write-Host "Instale o uv no Windows com a instrucao oficial da Astral:"
    Write-Host "powershell -ExecutionPolicy ByPass -c `"irm https://astral.sh/uv/install.ps1 | iex`""
    exit 1
}

function Invoke-OrThrow {
    param(
        [string]$Description,
        [scriptblock]$Command
    )

    & $Command
    if ($LASTEXITCODE -ne 0) {
        throw "$Description falhou com codigo de saida $LASTEXITCODE."
    }
}

function Show-RecommendedNextSteps {
    Write-Host "Proximos passos canonicos:"
    Write-Host "1. Leia ``00-user-guide.md`` para retomar a interface atual em construcao."
    Write-Host "2. Leia ``04-solution-research.md`` antes de avancar para ``01-roadmap.md``."
    Write-Host "3. Use ``README.md`` para setup e preview local do frontend."
    Write-Host "4. Continue a construcao com ``orquestrador-projeto/workflows/04-site-construction.md`` e ``orquestrador-projeto/skills/04-web-design-motion-build.md``."
}

Write-Host "Sincronizando o ambiente local do projeto"
Invoke-OrThrow -Description "Sincronizacao do ambiente local do projeto" -Command {
    uv sync
}

if (-not $SkipLaunch) {
    Write-Host "Iniciando o orquestrador do projeto"
    Invoke-OrThrow -Description "Inicializacao do orquestrador do projeto" -Command {
        uv run orquestrador-projeto start
    }
}
else {
    Show-RecommendedNextSteps
}

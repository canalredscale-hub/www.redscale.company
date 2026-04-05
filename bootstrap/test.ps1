Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

if (-not (Test-Path (Join-Path $root "tests"))) {
    Write-Host "Nenhuma suite em tests/ encontrada. Validacao automatizada ainda nao foi recriada nesta fase da reconstrucao do frontend."
    exit 0
}

$localUv = Join-Path $root ".tooling\uv\uv.exe"
if (Test-Path $localUv) {
    & $localUv run python -m unittest discover -s tests -q
    exit $LASTEXITCODE
}

$uvCommand = Get-Command uv -ErrorAction SilentlyContinue
if ($uvCommand) {
    uv run python -m unittest discover -s tests -q
    exit $LASTEXITCODE
}

python -m unittest discover -s tests -q
exit $LASTEXITCODE

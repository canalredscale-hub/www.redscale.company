param(
    [switch]$IncludeTooling
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$targets = @(
    ".venv",
    ".uv_cache",
    ".tmp_tests",
    "dist",
    "build"
)

if ($IncludeTooling) {
    $targets += ".tooling"
}

foreach ($target in $targets) {
    if (Test-Path $target) {
        Remove-Item -LiteralPath $target -Recurse -Force
    }
}

Get-ChildItem -Recurse -Directory -Force | Where-Object { $_.Name -eq "__pycache__" } | ForEach-Object {
    Remove-Item -LiteralPath $_.FullName -Recurse -Force
}

Get-ChildItem -Recurse -File -Force -Include *.pyc, *.pyo | ForEach-Object {
    Remove-Item -LiteralPath $_.FullName -Force
}

Get-ChildItem -Recurse -Directory -Force -Filter *.egg-info | ForEach-Object {
    Remove-Item -LiteralPath $_.FullName -Recurse -Force
}

Write-Host "Artefatos transitorios removidos."

param(
  [string]$Remote = "origin",
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"

function Assert-PathInside {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Path,
    [Parameter(Mandatory = $true)]
    [string]$Parent
  )

  $resolvedPath = (Resolve-Path -LiteralPath $Path).Path
  $resolvedParent = (Resolve-Path -LiteralPath $Parent).Path

  if (-not $resolvedPath.StartsWith($resolvedParent, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Caminho fora do destino esperado: $resolvedPath"
  }

  return $resolvedPath
}

function Remove-OneDriveGitConflicts {
  param(
    [Parameter(Mandatory = $true)]
    [string]$GitRoot
  )

  if (-not (Test-Path -LiteralPath $GitRoot)) {
    return
  }

  $conflictFiles = Get-ChildItem -LiteralPath $GitRoot -Recurse -Force -File |
    Where-Object {
      $_.Name -like "*MacBook Air de Juan*" -or
      $_.Name -like "*-INFORITUWKS210.*"
    }

  foreach ($file in $conflictFiles) {
    $resolvedFile = Assert-PathInside -Path $file.FullName -Parent $GitRoot
    Remove-Item -LiteralPath $resolvedFile -Force
    Write-Host "Removido conflito Git local: $resolvedFile"
  }
}

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$gitRoot = Join-Path $projectRoot ".git"
$deployFrontend = Join-Path $projectRoot "app\frontend"
$testFrontend = Join-Path $projectRoot "app-teste\frontend"
$testParent = Split-Path -Parent $testFrontend

Set-Location -LiteralPath $projectRoot

Remove-OneDriveGitConflicts -GitRoot $gitRoot

Write-Host "Baixando ultimo commit de $Remote/$Branch..."
git fetch $Remote $Branch

Write-Host "Restaurando app/frontend a partir de $Remote/$Branch..."
git restore --source "$Remote/$Branch" -- app/frontend

if (-not (Test-Path -LiteralPath $deployFrontend)) {
  throw "Diretorio oficial de deploy nao encontrado: $deployFrontend"
}

if (-not (Test-Path -LiteralPath $testParent)) {
  New-Item -ItemType Directory -Path $testParent | Out-Null
}

if (Test-Path -LiteralPath $testFrontend) {
  $resolvedTestFrontend = Assert-PathInside -Path $testFrontend -Parent $projectRoot
  Remove-Item -LiteralPath $resolvedTestFrontend -Recurse -Force
}

Write-Host "Copiando app/frontend para app-teste/frontend..."
Copy-Item -LiteralPath $deployFrontend -Destination $testFrontend -Recurse -Force

Write-Host "Sincronizacao concluida."
Write-Host "Deploy oficial: app/frontend"
Write-Host "Teste oficial: app-teste/frontend"

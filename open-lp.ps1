param(
  [switch]$NoBrowser,
  [int]$TimeoutSeconds = 90
)

$ErrorActionPreference = "Stop"

function Test-RedscaleLandingServer {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Url
  )

  try {
    $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 2

    if ($response.StatusCode -lt 200 -or $response.StatusCode -ge 500) {
      return $false
    }

    return $response.Content -match "RedscaleHQ" -and $response.Content -match "data-page=""home"""
  } catch {
    return $false
  }
}

function Get-ListeningProcessForPort {
  param(
    [Parameter(Mandatory = $true)]
    [int]$Port
  )

  try {
    $connection = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction Stop |
      Select-Object -First 1

    if (-not $connection) {
      return $null
    }

    return Get-Process -Id $connection.OwningProcess -ErrorAction SilentlyContinue
  } catch {
    return $null
  }
}

function Get-UvExecutablePath {
  try {
    return (Get-Command uv -ErrorAction Stop).Source
  } catch {
    throw "O executavel 'uv' nao foi encontrado no PATH."
  }
}

function Get-PreferredBrowserExecutablePath {
  $browserCandidates = @(
    "msedge.exe",
    "chrome.exe",
    "brave.exe"
  )

  foreach ($candidate in $browserCandidates) {
    try {
      $command = Get-Command $candidate -ErrorAction Stop
      if ($command -and $command.Source) {
        return $command.Source
      }
    } catch {
    }
  }

  $knownPaths = @(
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe",
    "C:\Program Files (x86)\BraveSoftware\Brave-Browser\Application\brave.exe"
  )

  foreach ($path in $knownPaths) {
    if (Test-Path -LiteralPath $path) {
      return $path
    }
  }

  return $null
}

function Open-BrowserWithDevTools {
  param(
    [Parameter(Mandatory = $true)]
    [string]$BrowserExecutable,
    [Parameter(Mandatory = $true)]
    [string]$Url
  )

  $profileRoot = Join-Path $env:TEMP "redscale-lp-browser"
  $profileDir = Join-Path $profileRoot ([Guid]::NewGuid().ToString("N"))

  New-Item -ItemType Directory -Path $profileDir -Force | Out-Null

  Start-Process -FilePath $BrowserExecutable `
    -ArgumentList @(
      "--new-window",
      "--user-data-dir=$profileDir",
      "--no-first-run",
      "--no-default-browser-check",
      $Url
    ) | Out-Null
}

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$landingRoot = Join-Path $projectRoot "app-teste\frontend"
$devServerArg = "bootstrap\dev_server.py"
$landingRootArg = "app-teste\frontend"
$serverUrl = "http://127.0.0.1:8123/"
$cacheBust = Get-Date -Format "yyyyMMddHHmmss"
$browserUrl = "http://127.0.0.1:8123/?inspect=1&v=$cacheBust"
$uvExecutable = Get-UvExecutablePath
$serverStdoutLog = Join-Path $projectRoot "bootstrap\open-lp-server.out.log"
$serverStderrLog = Join-Path $projectRoot "bootstrap\open-lp-server.err.log"

if (-not (Test-Path -LiteralPath (Join-Path $landingRoot "home.html"))) {
  throw "O arquivo 'home.html' nao foi encontrado em $landingRoot."
}

Set-Location -LiteralPath $landingRoot

Write-Host ""
Write-Host "==> Preparando visualizacao da landing v2..." -ForegroundColor Cyan

$existingProcess = Get-ListeningProcessForPort -Port 8123

if ($existingProcess) {
  Write-Host "==> Reiniciando servidor anterior na porta 8123..." -ForegroundColor Yellow
  Stop-Process -Id $existingProcess.Id -Force -ErrorAction SilentlyContinue
  Start-Sleep -Milliseconds 500
}

Write-Host "==> Iniciando servidor da landing RedscaleHQ v2..." -ForegroundColor Cyan

Remove-Item -LiteralPath $serverStdoutLog, $serverStderrLog -ErrorAction SilentlyContinue

$serverProcess = Start-Process -FilePath $uvExecutable `
  -WorkingDirectory $projectRoot `
  -WindowStyle Hidden `
  -RedirectStandardOutput $serverStdoutLog `
  -RedirectStandardError $serverStderrLog `
  -PassThru `
  -ArgumentList @(
    "run",
    "--managed-python",
    "--python",
    "3.12",
    "--no-project",
    $devServerArg,
    "--web-root",
    $landingRootArg,
    "--inject-inspector",
    "--port",
    "8123"
  ) | Out-Null

$deadline = (Get-Date).AddSeconds($TimeoutSeconds)

while ((Get-Date) -lt $deadline) {
  Start-Sleep -Milliseconds 500

  if (Test-RedscaleLandingServer -Url $serverUrl) {
    break
  }
}

if (-not (Test-RedscaleLandingServer -Url $serverUrl)) {
  $stderrPreview = ""

  if (Test-Path -LiteralPath $serverStderrLog) {
    $stderrPreview = (Get-Content -Raw -LiteralPath $serverStderrLog -ErrorAction SilentlyContinue).Trim()
  }

  if ($serverProcess.HasExited -and $stderrPreview) {
    throw "A landing RedscaleHQ v2 nao respondeu em $TimeoutSeconds segundos na porta 8123. Log: $serverStderrLog. Erro: $stderrPreview"
  }

  throw "A landing RedscaleHQ v2 nao respondeu em $TimeoutSeconds segundos na porta 8123. Logs: $serverStdoutLog e $serverStderrLog."
}

Write-Host "==> Landing pronta em $serverUrl" -ForegroundColor Green

if (-not $NoBrowser) {
  $browserExecutable = Get-PreferredBrowserExecutablePath

  if ($browserExecutable) {
    Write-Host "==> Abrindo navegador com inspetor da landing..." -ForegroundColor Cyan
    Open-BrowserWithDevTools -BrowserExecutable $browserExecutable -Url $browserUrl
  } else {
    Write-Host "==> Nenhum navegador Chromium foi encontrado. Abrindo navegador padrao com inspetor da landing..." -ForegroundColor Yellow
    Start-Process $browserUrl
  }
}

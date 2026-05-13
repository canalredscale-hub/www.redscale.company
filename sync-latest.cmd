@echo off
setlocal
powershell.exe -ExecutionPolicy Bypass -File "%~dp0sync-latest.ps1" %*

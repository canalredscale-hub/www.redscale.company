@echo off
setlocal
powershell.exe -ExecutionPolicy Bypass -File "%~dp0open-lp.ps1" %*

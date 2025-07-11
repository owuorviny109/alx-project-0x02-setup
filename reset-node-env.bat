@echo off
title Full Node.js + npm Environment Reset
color 0C
echo [!] WARNING: This will remove Node.js, npm, npx and all global packages.
echo     Press Ctrl+C now to cancel or wait 5 seconds to continue...
timeout /t 5 >nul

echo.
echo [*] Terminating running Node.js-related processes...
taskkill /F /IM node.exe /T >nul 2>&1
taskkill /F /IM npm.exe /T >nul 2>&1
taskkill /F /IM npx.cmd /T >nul 2>&1

echo.
echo [*] Deleting common installation folders...
rd /s /q "%ProgramFiles%\nodejs"
rd /s /q "%ProgramFiles(x86)%\nodejs"
rd /s /q "%LocalAppData%\Programs\nodejs"
rd /s /q "%AppData%\npm"
rd /s /q "%AppData%\npm-cache"
rd /s /q "%LocalAppData%\npm-cache"

echo.
echo [*] Removing residual folders in user profile...
rd /s /q "%UserProfile%\.npm"
rd /s /q "%UserProfile%\.nvm"
rd /s /q "%UserProfile%\.node_repl_history"

echo.
echo [*] Checking for orphaned binaries in PATH:
where node
where npm
where npx

echo.
echo [*] Done.
echo -----------------------------------------
echo ✅ Node.js environment has been reset.
echo 🔁 Please now:
echo     1. Download LTS from https://nodejs.org
echo     2. Reinstall Node.js (make sure "Add to PATH" is checked)
echo -----------------------------------------
pause

@Echo off
TIMEOUT /T 3
START chrome --app="%~dp0index-pids.html" --incognito --window-position=0,0 --kiosk --user-data-dir=c:/monitor1
START chrome --app="%~dp0index-pids-2.html" --incognito --window-position=1680,0 --kiosk --user-data-dir=c:/monitor2 
EXIT
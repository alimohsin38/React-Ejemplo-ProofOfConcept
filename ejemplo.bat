@echo off 
echo batch controller starting... & 
:: There are three parameters to generate css from scss in compact version >> compact, compress, compressed... 
::start scss --watch scss/style.scss:css/style.css --style compact & 
call scss ./scss/style.scss ./css/style.css --style compressed &
call npm start & 
call npm run build & 
call xcopy.exe index.html build & 
TASKKILL /F /IM cmd.exe /T 
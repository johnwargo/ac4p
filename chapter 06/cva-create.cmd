REM ==================================
REM  cva-create.cmd
REM
REM  By John M. Wargo
REM  www.johnwargo.com
REM ==================================

REM Turn off writing commands to the console
ECHO off

REM Clear the screen so we start at the top
REM when we run
cls

echo ==================================
echo  Creating the Cordova Project
echo ==================================
call cordova create %1 %2 "%3"
REM change to the new project folder that 
REM was just created
cd %1
echo.

echo ==================================
echo  Adding Platforms
echo ==================================
call cordova platform add android firefoxos wp8
echo.

echo ==================================
echo  Adding Plugins
echo ==================================
call cordova plugin add org.apache.cordova.console
call cordova plugin add org.apache.cordova.device
call cordova plugin add org.apache.cordova.dialogs

REM Tell the user that we're done
echo.
echo Finished!
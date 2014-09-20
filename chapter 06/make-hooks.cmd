REM ==================================
REM  make-hooks.cmd
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
echo  Creating Cordova Hooks Folders
echo ==================================

REM Make the hooks folder
mkdir hooks
REM Change to the hooks folder
cd hooks

REM Now make the folders
echo Creating before_build Folder
mkdir before_build

echo Creating  Folder
mkdir after_build

echo Creating after_build Folder
mkdir before_compile

echo Creating after_compile Folder
mkdir after_compile

echo Creating before_docs Folder
mkdir before_docs

echo Creating after_docs Folder
mkdir after_docs

echo Creating before_emulate Folder
mkdir before_emulate

echo Creating after_emulate Folder
mkdir after_emulate

echo Creating before_platform_add Folder
mkdir before_platform_add

echo Creating after_platform_add Folder
mkdir after_platform_add

echo Creating before_platform_rm Folder
mkdir before_platform_rm

echo Creating after_platform_rm Folder
mkdir after_platform_rm

echo Creating before_platform_ls Folder
mkdir before_platform_ls

echo Creating after_platform_ls Folder
mkdir after_platform_ls

echo Creating before_plugin_add Folder
mkdir before_plugin_add

echo Creating after_plugin_add Folder
mkdir after_plugin_add

echo Creating before_plugin_ls Folder
mkdir before_plugin_ls

echo Creating after_plugin_ls Folder
mkdir after_plugin_ls

echo Creating before_plugin_rm Folder
mkdir before_plugin_rm

echo Creating after_plugin_rm Folder
mkdir after_plugin_rm

echo Creating before_plugin_search Folder
mkdir before_plugin_search

echo Creating after_plugin_search Folder
mkdir after_plugin_search

echo Creating before_prepare Folder
mkdir before_prepare

echo Creating after_prepare Folder
mkdir after_prepare

echo Creating before_run Folder
mkdir before_run

echo Creating after_run Folder
mkdir after_run

echo Creating before_serve Folder
mkdir before_serve

echo Creating after_serve Folder
mkdir after_serve

echo Creating pre_package Folder
mkdir pre_package

REM Tell the user that we're done
echo.
echo Finished!
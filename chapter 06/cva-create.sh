#!/bin/sh

# ==================================
#  cva-create.cmd
#
#  By John M. Wargo
#  www.johnwargo.com
# ==================================

# clear the screen, so we start at the top
# when we run
clear

# Create the Cordova project
echo ===============================
echo  Creating the Cordova Project
echo ===============================
cordova create $1 $2 "$3"

# Change to the new project folder
cd $1

echo
echo ===============================
echo  Adding Platforms
echo ===============================
cordova platform add android ios

echo
echo ===============================
echo  Adding Plugins
echo ===============================
cordova plugin add org.apache.cordova.console
cordova plugin add org.apache.cordova.dialogs
cordova plugin add org.apache.cordova.device

# tell the user we're done
echo
echo "Finished!"

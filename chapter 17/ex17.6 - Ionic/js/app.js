// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {

    function makeListItem(textStr) {
      return '<li class="item">' + textStr + '</li>';
    }

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    console.log("Cordova: " + device.cordova);
    var tmpStr;
    tmpStr = '<ul class="list">';
    tmpStr += makeListItem('Cordova Version: ' + device.cordova);
    tmpStr += makeListItem('Operating System: ' + device.platform);
    tmpStr += makeListItem('OS Version: ' + device.version);
    tmpStr += makeListItem('Device Model: ' + device.model);
    tmpStr += makeListItem('UUId: ' + device.uuid);
    tmpStr += '</ul>';
    //Get the appInfo DOM element
    var element = document.getElementById('deviceInfo');
    //replace it with specific information about the device 
    //running the application
    element.innerHTML = tmpStr;
  });
});
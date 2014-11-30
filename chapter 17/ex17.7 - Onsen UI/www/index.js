/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global $*/

function onBodyLoad() {
  console.log("Entering onBodyLoad");
  alert("Body Load");
  document.addEventListener("deviceready", onDeviceReady, false);
}

function makeListItem(textStr) {
  return '<ons-list-item>' + textStr + '</ons-list-item>';
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  navigator.notification.alert("Cordova is ready!");
  console.log("Cordova: " + device.cordova);

  var tmpStr;
  tmpStr = '<ons-list-header>Device API Properties</ons-list-header>';
  tmpStr += makeListItem('Cordova Version: ' + device.cordova);
  tmpStr += makeListItem('Operating System: ' + device.platform);
  tmpStr += makeListItem('OS Version: ' + device.version);
  tmpStr += makeListItem('Device Model: ' + device.model);
  tmpStr += makeListItem('UUId: ' + device.uuid);
  //Get the appInfo DOM element
  var element = document.getElementById('deviceInfo');
  //replace it with specific information about the device 
  //running the application
  element.innerHTML = tmpStr;
  ons.compile(element);
  console.log("Leaving onDeviceReady");
}
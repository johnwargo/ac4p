/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/

function onBodyLoad() {
  console.log("Entering onBodyLoad");
  alert("Body Load");
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  console.log("Cordova: " + device.cordova);
  navigator.notification.alert("Cordova is ready!");
  console.log("Leaving onDeviceReady");
}
/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global $*/

var br = "<br />";

window.onerror = function (msg, url, line) {
  var idx = url.lastIndexOf("/");
  if (idx > -1) {
    url = url.substring(idx + 1);
  }
  //Build the message string we'll display to the user
  var errStr = "ERROR in " + url + " (line #" + line + "): " + msg;
  //Write the error to the console
  console.error(errStr);
  //Tell the user what happened
  alert(errStr);
  return false;
};

function onBodyLoad() {
  console.log("Entering onBodyLoad");
  alert("Body Load");
  document.addEventListener("deviceready", onDeviceReady, false);
  console.log("Leaving onBodyLoad");
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  console.log("Cordova: " + device.cordova);
  //Blank out the page content
  $('#eventOutput').html('');

  navigator.notification.alert("Cordova is ready");

  //Add the Cordova event listeners
  //Battery events
  window.addEventListener("batterystatus", onBatteryStatus, false);
  window.addEventListener("batterycritical", onBatteryStatus, false);
  window.addEventListener("batterylow", onBatteryStatus, false);

  //Network events
  document.addEventListener("onOffline", onOffline, false);
  document.addEventListener("onOnline", onOnline, false);

  //Other events
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  document.addEventListener("backbutton", onBackButton, false);
  document.addEventListener("menubutton", onMenuButton, false);
  document.addEventListener("searchbutton", onSearchButton, false);
  document.addEventListener("startcallbutton", onStartCallButton, false);
  document.addEventListener("endcallbutton", onEndCallButton, false);
  document.addEventListener("volumedownbutton", volumeDownButton, false);
  document.addEventListener("volumeupbutton", volumeUpButton, false);

  console.log("Leaving onDeviceReady");
}

function onBatteryStatus(batInfo) {
  //First append the battery status to the page
  console.log(JSON.stringify(batInfo));
  $('#eventOutput').prepend(JSON.stringify(batInfo) + br);
  //Then tell the user that the battery event fired
  $('#eventOutput').prepend(batInfo.type + " event fired" + br);
}

function batteryCallback(batInfo) {
  console.log('%s event fired', batInfo.type);
  console.log(JSON.stringify(batInfo));
}

function onOffline() {
  $('#eventOutput').prepend("offline event fired" + br);
}

function onOnline() {
  $('#eventOutput').prepend("online event fired" + br);
}

function onPause() {
  $('#eventOutput').prepend("pause event fired" + br);
}

function onResume() {
  $('#eventOutput').prepend("resume event fired" + br);
}

function onBackButton() {
  $('#eventOutput').prepend("backbutton event fired" + br);
}

function onMenuButton() {
  $('#eventOutput').prepend("menubutton event fired" + br);
}

function onSearchButton() {
  $('#eventOutput').prepend("searchbutton event fired" + br);
}

function onStartCallButton() {
  $('#eventOutput').prepend("startcallbutton event fired" + br);
}

function onEndCallButton() {
  $('#eventOutput').prepend("endcallbutton event fired" + br);
}

function volumeDownButton() {
  $('#eventOutput').prepend("volumebuttondown event fired" + br);
}

function volumeUpButton() {
  $('#eventOutput').prepend("volumeupbutton event fired" + br);
}
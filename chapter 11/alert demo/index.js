/*jslint browser:true*/
/*global alert*/
/*global console*/
/*global Windows*/

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

function myAlert(message) {
  if (typeof (Windows) !== 'undefined') {
    new Windows.UI.Popups.MessageDialog(message, 'Alert').showAsync().done();
  } else {
    alert(message);
  }
}

function onBodyLoad() {
  console.log("Entering onBodyLoad");
  myAlert("Body Load");
  document.addEventListener("deviceready", onDeviceReady, false);
  console.log("Leaving onBodyLoad");
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  //Let the user know that the deviceReady event has fired
  navigator.notification.alert("Cordova is ready", null, "Device Ready", "Continue");
  console.log("Leaving onDeviceReady");
}
/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global mol*/

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
  alert("onBodyLoad");
  document.addEventListener("deviceready", onDeviceReady);
  console.log("Leaving onBodyLoad");
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  console.log("Cordova: " + device.cordova);
  navigator.notification.alert("Cordova is ready");
  console.log("Leaving onDeviceReady");
}

function doMOLSync() {
  console.log("Entering doMOLSync");
  var res = mol.calculateMOLSync();
  var msg = "Result: " + res;
  console.log(msg);
  navigator.notification.alert(msg, null, "MOL", "Continue");
  console.log("Leaving doMOLSync");
}

function doMOLAsync() {
  console.log("Entering doMOLAsync");
  var res = mol.calculateMOL(molCallback);
  console.log("Leaving doMOLAsync");
}

function molCallback(res) {
  console.log("Entering molCallback");
  var msg = "Result: " + res;
  console.log(msg);
  navigator.notification.alert(msg, null, "MOL", "Continue");
  console.log("Leaving molCallback");
}
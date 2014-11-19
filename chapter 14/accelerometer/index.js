/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global $*/

var br = "<br />";
var watchID;

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
  $('#accelInfo').prepend("Ready!<br />");
  console.log("Leaving onDeviceReady");
}

function checkOrientation() {
  console.log("Entering checkOrientation");
  $('#accelInfo').prepend(br + "Requesting Orientation." + br);
  navigator.accelerometer.getCurrentAcceleration(orientationSuccess, orientationFailure);
  console.log("Leaving checkOrientation");
}

function orientationSuccess(res) {
  console.log("Entering orientationSuccess");
  $('#accelInfo').prepend("Received orientation." + br);
  var d = new Date(res.timestamp);
  $('#accelInfo').prepend("X: " + res.x + br + "Y: " + res.y + br + "Z: " + res.z + br + "Timestamp: " + d.toLocaleString() + br + br);
  console.log("Leaving orientationSuccess");
}

function orientationFailure() {
  console.log("Entering orientationFailure");
  $('#accelInfo').prepend("Error determining orientation.<br />");
  console.log("Leaving orientationFailure");
}

function createWatch() {
  console.log("Entering createWatch");
  var options = {
    frequency: 1000
  };
  watchID = navigator.accelerometer.watchAcceleration(orientationSuccess, orientationFailure, options);
  console.log("Leaving createWatch");
}

function clearWatch() {
  console.log("Entering clearWatch");
  navigator.accelerometer.clearWatch(watchID);
  console.log("Leaving clearWatch");
}
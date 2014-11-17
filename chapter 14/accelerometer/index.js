br = "<br />";
var watchID

function onBodyLoad() {
  alert("onBodyLoad");
  document.addEventListener("deviceready", onDeviceReady);
}

function onDeviceReady() {
  alert("onDeviceReady");
  $('#accelInfo').prepend("Ready!<br />");
}

function checkOrientation() {
  $('#accelInfo').prepend(br + "Requesting Orientation." + br);
  navigator.accelerometer.getCurrentAcceleration(orientationSuccess, orientationFailure);
}

function orientationSuccess(res) {
  $('#accelInfo').prepend("Received orientation." + br);
  var d = new Date(res.timestamp);
  $('#accelInfo').prepend("X: " + res.x + br + "Y: " + res.y + br + "Z: " + res.z + br + "Timestamp: " + d.toLocaleString() + br + br);
}

function orientationFailure() {
  $('#accelInfo').prepend("Error determining orientation.<br />");
}

function createWatch() {
  var options = {
    frequency: 1000
  };
  watchID = navigator.accelerometer.watchAcceleration(orientationSuccess, orientationFailure, options);
}

function clearWatch() {
  navigator.accelerometer.clearWatch(watchID);
}
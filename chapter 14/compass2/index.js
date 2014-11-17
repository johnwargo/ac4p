br = "<br />";
var watchID

function onBodyLoad() {
  // alert("onBodyLoad");
  document.addEventListener("deviceready", onDeviceReady);
}

function onDeviceReady() {
  // alert("onDeviceReady");
  $('#accelInfo').prepend(br + "Ready!");
}

function checkHeading() {
  $('#accelInfo').prepend(br + "Requesting Heading." + br);
  navigator.compass.getCurrentHeading(onSuccess, onFailure);
}

function onSuccess(res) {
  // alert('onSuccess');
  $('#accelInfo').prepend("Received Heading." + br);
  var d = new Date(res.timestamp);
  $('#accelInfo').prepend(br + "Magnetic Heading: " + res.magneticHeading + br + "True Heading: " + res.trueHeading + br + "Accuracy: " + res.headingAccuracy + br + "Timestamp: " + d.toLocaleString() + br + br);
}

function onFailure(err) {
  // alert('onError');
  var errStr;
  switch (err.code) {
  case CompassError.COMPASS_INTERNAL_ERR:
    errStr = 'Internal error';
    break;
  case CompassError.COMPASS_NOT_SUPPORTED:
    errStr = 'Compass not supported';
    break;
  default:
    errStr = 'Unknown error';
  }
  $('#accelInfo').prepend("Error determining heading: ." + errStr + br);
}

function createWatch() {
  var options = {
    frequency: 1000,
    //filter : 1
  };
  watchID = navigator.compass.watchHeading(onSuccess, onFailure, options);
}

function clearWatch() {
  navigator.compass.clearWatch(watchID);
}
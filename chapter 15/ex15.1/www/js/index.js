/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global $*/
/*global CompassError*/

//Some variables used by the application
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
  //Setup the watch
  //Read the compass every second (1000 milliseconds)
  var watchOptions = {
    frequency: 1000,
  };
  console.log('Creating watch: %s', JSON.stringify(watchOptions));
  watchID = navigator.compass.watchHeading(onSuccess, onError, watchOptions);
  console.log("Leaving onDeviceReady");
}

function onSuccess(heading) {
  console.log("Entering onSuccess");
  console.log('Received Heading');
  console.log(JSON.stringify(heading));
  var hv = Math.round(heading.magneticHeading);
  $('#headingInfo').html('<b>Heading:</b> ' + hv + ' Degrees');
  console.log('Rotating to ' + hv + ' degrees');
  $("#compass").rotate(-hv);
  console.log("Leaving onSuccess");
}

function onError(err) {
  var msg;
  console.log("Entering onError");
  console.error('Error: ' + JSON.stringify(err));
  //Remove the watch since we're having a problem
  navigator.compass.clearWatch(watchID);
  //Clear the heading value from the page  
  $('#headingInfo').html('<b>Heading: </b>None');
  //Then tell the user what happened.
  switch (err.code) {
  case CompassError.COMPASS_NOT_SUPPORTED:
    msg = 'Compass not supported';
    break;
  case CompassError.COMPASS_INTERNAL_ERR:
    msg = 'Internal compass error';
    break;
  default:
    msg = 'Unknown heading error!';
  }
  console.error(msg);
  navigator.notification.alert(msg, null, "Compass Error", "Continue");
  console.log("Leaving onError");
}
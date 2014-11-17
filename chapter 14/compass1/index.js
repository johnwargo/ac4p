//Some variables used by the application
var hi, watchID;
var appName = "Compass - ";

//Fires whenever there is an error - helps with toubleshooting.
window.onerror = function (msg, url, line) {
  var resStr;
  var idx = url.lastIndexOf('/');
  if (idx > -1) {
    url = url.substring(idx + 1);
  }
  resStr = 'ERROR in ' + url + ' on line ' + line + ': ' + msg;
  console.error(resStr);
  alert(resStr);
  return false;
};

function onBodyLoad() {
  document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
  console.log('onDeviceReady fired.');
  hi = document.getElementById('headingInfo');
  //Setup the watch
  //Read the compass every second (1000 milliseconds)
  var watchOptions = {
    frequency: 1000,
    // filter : 1
  };
  console.log(appName + 'Creating watch: ' + JSON.stringify(watchOptions));
  watchID = navigator.compass.watchHeading(onSuccess, onError, watchOptions);
}

function onSuccess(heading) {
  console.log(appName + 'Received Heading');
  console.log(appName + JSON.stringify(heading));
  var hv = Math.round(heading.magneticHeading);
  console.log(appName + 'Rotating to ' + hv + ' degrees');
  $("#compass").rotate(-hv);
  hi.innerHTML = '<b>Heading:</b> ' + hv + ' Degrees';
}

function onError(err) {
  console.error(appName + 'Heading Error');
  console.error(appName + 'Error: ' + JSON.stringify(err));
  //Remove the watch since we're having a problem
  navigator.compass.clearWatch(watchID);
  //Clear the heading value from the page
  // $('#headingInfo').replaceWith('<b>Heading:</b> None');
  hi.innerHTML = '<b>Heading: </b>None';
  //Then tell the user what happened.
  if (err.code == CompassError.COMPASS_NOT_SUPPORTED) {
    alert('Compass not supported.');
  } else if (compassError.code == CompassError.COMPASS_INTERNAL_ERR) {
    alert('Compass Internal Error');
  } else {
    alert('Unknown heading error!');
  }
}
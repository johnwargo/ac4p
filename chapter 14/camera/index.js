/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global $*/

var br = "<br />";
var watchID;

window.onerror = function (msg, url, line) {
  console.error("window.onerror called");
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
  navigator.notification.alert("Cordova is ready");
  $('#CameraInfo').append("Ready!" + br);
  console.log("Leaving onDeviceReady");
}

function getPic() {
  console.log("Entering getPic");
  $('#CameraInfo').append(br + "Taking Photo." + br);
  navigator.camera.getPicture(onSuccess, onFailure);
  console.log("Leaving getPic");
}

function onSuccess(res) {
  console.log("Entering onSuccess");
  $('#CameraInfo').append("Received photo." + br);
  $('#CameraInfo').append(res + br);
  console.log("Leaving onSuccess");
}

function onFailure(errMsg) {
  console.log("Entering onFailure");
  console.error(errMsg);
  $('#CameraInfo').append("Error: " + errMsg + br);
  console.log("Leaving onFailure");
}

function doCleanup() {
  console.log("Entering doCleanup");
  navigator.camera.cleanup(onCleanupSuccess, onCleanupFailure);
  console.log("Leaving doCleanup");
}

function onCleanupSuccess() {
  $('#CameraInfo').append("onCleanupSuccess" + br);
}

function onCleanupFailure(err) {
  $('#CameraInfo').append("Error: " + err + br);
  alert(err);
}

function capPhoto() {
  $('#CameraInfo').append("Capture Photo" + br);
  var options = {
    limit: 3
  };
  navigator.device.capture.captureImage(onCapSuccess, onCapFailure, options);
}

function capVideo() {
  $('#CameraInfo').append("Capture Video" + br);
  var options = {
    limit: 3
  };
  navigator.device.capture.captureVideo(onCapSuccess, onCapFailure, options);
}

function capAudio() {
  $('#CameraInfo').append("Capture Audio" + br);
  var options = {
    limit: 3,
    duration: 10
  };
  navigator.device.capture.captureAudio(onCapSuccess, onCapFailure, options);
}

function onCapSuccess(fileList) {
  $('#CameraInfo').append("Capture Success" + br);
  var len, I, path;
  //See how many files are listed in the array
  len = fileList.length;
  //Make sure we had a result; it should always be
  //at least greater than 0, but you never know!
  if (len > 0) {
    //Media files were captured, so let's process them...
    for (var i = 0; i < len; i += 1) {
      //get the path to the file
      path = fileList[i].fullPath;
      //do something with the file here
      $('#CameraInfo').append("Path: " + path + br);
    }
  } else {
    //This will probably never execute
    $('#CameraInfo').append("Capture: No Files Returned" + br);
  }
}

function onCapFailure(err) {
  $('#CameraInfo').append("Capture Error: " + err.code + br);
}
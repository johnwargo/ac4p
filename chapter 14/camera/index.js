br = "<br />";
var watchID

window.onerror = function (msg, url, line) {
  var idx = url.lastIndexOf("/");
  if (idx > -1) {
    url = url.substring(idx + 1);
  }
  alert("ERROR in " + url + " (line #" + line + "): " + msg);
  return false;
  //suppressErrorAlert;
};

function onBodyLoad() {
  alert("onBodyLoad");
  document.addEventListener("deviceready", onDeviceReady);
}

function onDeviceReady() {
  alert("onDeviceReady");
  $('#CameraInfo').append("Ready!" + br);
}

function getPic() {
  $('#CameraInfo').append(br + "Taking Photo." + br);
  navigator.camera.getPicture(onSuccess, onFailure);
}

function onSuccess(res) {
  // alert('onSuccess');
  $('#CameraInfo').append("Received photo." + br);
  $('#CameraInfo').append(res + br);

}

function onFailure(errMsg) {
  $('#CameraInfo').append("Error: " + errMsg + br);
}

function doCleanup() {
  navigator.camera.cleanup(onCleanupSuccess, onCleanupFailure);
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
    //Media files were captured, so letís process them...
    for (i = 0, len; i < len; i += 1) {
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
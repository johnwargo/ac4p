/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global $*/

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

function getPreferred() {
  navigator.globalization.getPreferredLanguage(onGPSuccess, onGPFailure);
}

function onGPSuccess(lang) {
  navigator.notification.alert("Preferred language: " + lang.value);
}

function onGPFailure(err) {
  navigator.notification.alert("Error: " + err.code + " - " + err.message);
}

function doGlobal1() {
  var d = new Date();
  navigator.globalization.dateToString(d, onSuccess, onFailure);
}

function doGlobal2() {
  var d = new Date();
  navigator.globalization.dateToString(d, onSuccess, onFailure, {
    formatLength: 'short',
    selector: 'date and time'
  });
}

function doGlobal3() {
  var d = new Date();
  navigator.globalization.dateToString(d, onSuccess, onFailure, {
    formatLength: 'long',
    selector: 'date and time'
  });
}

function onSuccess(resStr) {
  navigator.notification.alert("Result: " + resStr.value);
}

function onFailure(error) {
  navigator.notification.alert('Error converting date to string\n Error Code: ' + error.code + '\nError Message: ' + error.message);
}
/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global carrier*/

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

function doGetCarrier() {
  console.log("Entering doGetCarrier");
  carrier.getCarrier(onSuccess, onError);
  console.log("Leaving doGetCarrier");
}

function doGetCountryCode() {
  console.log("Entering doGetCountryCode");
  carrier.getCountryCode(onSuccess, onError);
  console.log("Leaving doGetCountryCode");
}

function onSuccess(res) {
  console.log("Entering onSuccess");

  //Does this need to be stringified?

  var msg = "Result: " + JSON.stringify(res);
  console.log(msg);
  navigator.notification.alert(msg, null, "Carrier Information", "Continue");
  console.log("Leaving onSuccess");
}

function onError(err) {

  //Have plugin return an error object: code and message

  console.log("Entering onError");
  console.error(JSON.stringify(err));
  var msg = "Error obtaining carrier information: " + err;
  navigator.notification.alert(msg, null, "Carrier Error", "Oops");
  console.log("Leaving onError");
}
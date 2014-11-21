/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/

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

function makeContact() {

}

function findContact() {
  var contactFields = ["displayName", "name", "phoneNumbers", "emails", "addresses"];
  var contactOptions = {
    filter: "Wargo",
    multiple: true
  };
  navigator.contacts.find(contactFields, contactSuccess, contactError, contactOptions);
}

function pickContact() {
  navigator.contacts.pickContact(contactSuccess, contactError);
}

function contactSuccess(contacts) {
  for (var i = 0; i < contacts.length; i++) {
    console.log("Contact[" + i + "]: " + JSON.stringify(contacts[i]));
  }
}

function contactError(err) {
  console.error(err);
  console.log("Error: " + err.code);
}

function onSuccess(resStr) {
  alert("Result: " + resStr.value);
  navigator.globalization.stringToDate(resStr.value, function (res) {
    console.log("Result: " + JSON.stringify(res));
  }, onFailure);
}

function onFailure(error) {
  alert('Error conveting date to string\n Error Code: ' + error.code + '\nError Message: ' + error.message);
}
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
  //alert("onBodyLoad");
  document.addEventListener("deviceready", onDeviceReady, false);
};

function onDeviceReady() {
  //alert("onDeviceReady");
};

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

function contactSuccess(contacts) {
  for (var i = 0; i < contacts.length; i++) {
    console.log("Contact[" + i + "]: " + JSON.stringify(contacts[i]));
  }
}

function contactError(err) {
  console.log("Error: " + err.code);
}

function onSuccess(resStr) {
  alert("Result: " + resStr.value);
  navigator.globalization.stringToDate(resStr.value, function (res) {
    console.log("Result: " + JSON.stringify(res));
  }, onFailure);
};

function onFailure(error) {
  alert('Error conveting date to string\n Error Code: ' + error.code + '\nError Message: ' + error.message);
}
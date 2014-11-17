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

function getPreferred() {
  navigator.globalization.getPreferredLanguage(onGPSuccess, onGPFailure);
}

function onGPSuccess(lang) {
  alert("Preferred language: " + lang.value);
}

function onGPFailure(err) {
  alert("Error: " + err.code + " - " + err.message);
}

function doGlobal1() {
  var d = new Date();
  //navigator.globalization.dateToString(date, successCallback, errorCallback, options);
  navigator.globalization.dateToString(d, onSuccess, onFailure);
};

function doGlobal2() {
  var d = new Date();
  //navigator.globalization.dateToString(date, successCallback, errorCallback, options);
  navigator.globalization.dateToString(d, onSuccess, onFailure, {
    formatLength: 'short',
    selector: 'date and time'
  });
};

function doGlobal3() {
  var d = new Date();
  //navigator.globalization.dateToString(date, successCallback, errorCallback, options);
  navigator.globalization.dateToString(d, onSuccess, onFailure, {
    formatLength: 'long',
    selector: 'date and time'
  });
};

function doSTR() {}

function onSuccess(resStr) {
  alert("Result: " + resStr.value);
  navigator.globalization.stringToDate(resStr.value, function (res) {
    console.log("Result: " + JSON.stringify(res));
  }, onFailure);
};

function onFailure(error) {
  alert('Error conveting date to string\n Error Code: ' + error.code + '\nError Message: ' + error.message);
}
window.onerror = function (msg, url, line) {
  var idx = url.lastIndexOf("/");
  if (idx > -1) {
    url = url.substring(idx + 1);
  }
  alert("ERROR in " + url + " (line #" + line + "): " + msg);
  return false;
};

function onBodyLoad() {
  alert("onBodyLoad");
  //console.log('onBodyLoad');
  document.addEventListener("deviceready", onDeviceReady, false);
};

function onDeviceReady() {
  alert("onDeviceReady");
  console.log('onDeviceReady');

};

function showSplash() {
  console.log('1');
  navigator.splashscreen.show();
  console.log('2');
  setTimeout(hideSplash, 2000);
  console.log('3');
}

function hideSplash() {
  console.log('4');
  navigator.splashscreen.hide();
}
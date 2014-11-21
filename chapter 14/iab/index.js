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
  console.log("Cordova: %s", device.cordova);
  navigator.notification.alert("Cordova is ready");
  console.log("Leaving onDeviceReady");
}

function showHelp1() {
  console.log('showHelp1');
  var ref1 = window.open('help.html', '_blank', 'location=no');
  ref1.addEventListener('loadstart', onLoadStart);
  ref1.addEventListener('loadstop', onLoadStop);
  ref1.addEventListener('loaderror', onLoadError);
  ref1.addEventListener('exit', onExit);

}

function showHelp2() {
  console.log('showHelp2');
  var ref2 = window.open('help.html', '_self');
  ref2.addEventListener('loadstart', onLoadStart);
  ref2.addEventListener('loadstop', onLoadStop);
  ref2.addEventListener('loaderror', onLoadError);
  ref2.addEventListener('exit', onExit);
}

function injectCSS() {
  console.log('insertCSS');
  var ref = window.open('help.html', '_blank', 'location=no');
  ref.addEventListener('loadstop', function () {
    ref.insertCSS({
      code: "body {background-color:black; color:white}"
    }, onSuccess);
  });
  ref.addEventListener('loadstart', onLoadStart);
  ref.addEventListener('loaderror', onLoadError);
  ref.addEventListener('exit', onExit);
}

function onSuccess() {
  console.log('Success!');
}

function injectScript() {
  console.log('ExecuteScript');
  var ref = window.open('help.html', '_blank', 'location=no');
  ref.addEventListener('loadstop', function () {
    ref.executeScript({
      code: "$('#heading').replaceWith('<h2>This is some injected text</h2>');"
    }, onSuccess);
  });
}

function showHelp3() {
  console.log('showHelp3');
  var ref3 = window.open('help.html', '_system');
  ref3.addEventListener('loadstart', onLoadStart);
  ref3.addEventListener('loadstop', onLoadStop);
  ref3.addEventListener('loaderror', onLoadError);
  ref3.addEventListener('exit', onExit);
}

function showAuthorWeb1() {
  console.log('showAuthorWeb1');
  var ref4 = window.open('http://www.johnwargo.com', '_blank', 'location=yes');
  ref4.addEventListener('loadstart', onLoadStart);
  ref4.addEventListener('loadstop', onLoadStop);
  ref4.addEventListener('loaderror', onLoadError);
  ref4.addEventListener('exit', onExit);
}

function showAuthorWeb2() {
  console.log('showAuthorWeb1');
  var ref5 = window.open('http://www.johnwargo.com', '_blank', 'location=no');
  ref5.addEventListener('loadstart', onLoadStart);
  ref5.addEventListener('loadstop', onLoadStop);
  ref5.addEventListener('loaderror', onLoadError);
  ref5.addEventListener('exit', onExit);
}

function onLoadStart(event) {
  console.log('onLoadStart: ' + JSON.stringify(event));
}

function onLoadStop(event) {
  console.log('onLoadStop: ' + JSON.stringify(event));
}

function onLoadError(event) {
  console.error('onLoadError: ' + JSON.stringify(event));
}

function onExit(event) {
  console.log('onExit: ' + JSON.stringify(event));
}
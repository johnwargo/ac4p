/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/

//Defines the button label for alert dialogs
var btnText = "Continue";

function onBodyLoad() {
  //Let the user know we've launched
  alert("onBodyLoad");
  //Set the Cordova deviceready event listener, so we'll know
  //when Cordova is ready
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  console.log("Cordova: " + device.cordova);
  //Let the user know that the deviceReady event has fired        
  navigator.notification.alert("Cordova is ready", null, "Device Ready", btnText);
  console.log("Leaving onDeviceReady");
}

function getDeviceInfo() {

  function makeListItem(textStr) {
    return '<li class="topcoat-list__item">' + textStr + '</li>';
  }

  var tmpStr;
  tmpStr = '<ul class="topcoat-list__container"><h3 class="topcoat-list__header">Device API Properties</h3>';
  tmpStr += makeListItem('Cordova Version: ' + device.cordova);
  tmpStr += makeListItem('Operating System: ' + device.platform);
  tmpStr += makeListItem('OS Version: ' + device.version);
  tmpStr += makeListItem('Device Model: ' + device.model);
  tmpStr += makeListItem('Universally Unique Identifier: ' + device.uuid);
  tmpStr += '</ul><hr />';
  //Get the appInfo DOM element
  var element = document.getElementById('deviceInfo');
  //replace it with specific information about the device 
  //running the application
  element.innerHTML = tmpStr;
}

function takePhoto() {
  console.log("Entering takePhoto");
  navigator.camera.getPicture(cameraSuccess, cameraError);
  console.log("Entering takePhoto");
}

function cameraSuccess(imageURL) {
  console.log("Entering cameraSuccess");
  navigator.notification.alert(imageURL, null, "Photo Results", btnText);
  console.log("Leaving cameraSuccess");
}

function cameraError(errObj) {
  console.log("Entering cameraError");
  console.error(JSON.stringify(errObj));
  navigator.notification.alert("Error: " + JSON.stringify(errObj), null, "Camera Error", btnText);
  console.log("Leaving cameraError");
}

function doLoop(loopCount) {
  var loopLimit = loopCount + 1;
  console.log("\nStarting Loop");
  for (var i = 1; i < loopLimit; i++) {
    console.log("Loop %s of %s", i, loopCount);
  }
  console.log("Done!");
}
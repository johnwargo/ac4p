function onBodyLoad() {
  console.log("Entering onBodyLoad");
  alert("Body Load");
  //  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");

  console.log("Cordova: " + device.cordova);
}

function addEventListeners() {
  navigator.notification.alert("Cordova is ready!");
}

function removeEventListeners() {

}

function eventResponder() {

}

function eventError() {

}
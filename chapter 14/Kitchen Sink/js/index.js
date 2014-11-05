function onBodyLoad() {
  console.log("Entering onBodyLoad");
  alert("Body Load");
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  navigator.notification.alert("Cordova is ready!");
  console.log("Cordova: " + device.cordova);
}
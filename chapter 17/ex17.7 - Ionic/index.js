function onBodyLoad() {
  console.log("Entering onBodyLoad");
  alert("Body Load");
  document.addEventListener("deviceready", onDeviceReady, false);
}

function makeListItem(textStr) {
  return '<li">' + textStr + '</li>';
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  navigator.notification.alert("Cordova is ready!");
  console.log("Cordova: " + device.cordova);

  var tmpStr;
  tmpStr = '<h3>Device API Properties</h3><ul>';
  tmpStr += makeListItem('Cordova Version: ' + device.cordova);
  tmpStr += makeListItem('Operating System: ' + device.platform);
  tmpStr += makeListItem('OS Version: ' + device.version);
  tmpStr += makeListItem('Device Model: ' + device.model);
  tmpStr += makeListItem('Universally Unique Identifier: ' + device.uuid);
  tmpStr += '</ul>';
  //Get the appInfo DOM element
  var element = document.getElementById('appInfo');
  //replace it with specific information about the device running the application
  element.innerHTML = tmpStr;
  console.log("Leaving onDeviceReady");
}
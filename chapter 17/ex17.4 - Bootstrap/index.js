function onBodyLoad() {
  console.log("Entering onBodyLoad");
  alert("Body Load");
  document.addEventListener("deviceready", onDeviceReady, false);
  //test();
}

function makeListItem(label, value) {
  return '<strong>' + label + '</strong>' + value + '<br />';
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  navigator.notification.alert("Cordova is ready!");
  console.log("Cordova: " + device.cordova);
  //Now populate the content 
  var tmpStr;
  tmpStr = makeListItem('Cordova Version: ', device.cordova);
  tmpStr += makeListItem('Operating System: ', device.platform);
  tmpStr += makeListItem('OS Version: ', device.version);
  tmpStr += makeListItem('Device Model: ', device.model);
  tmpStr += makeListItem('Universally Unique Identifier: ', device.uuid);

  //Write the values to the page
  $('#deviceInfo').html(tmpStr);

  //replace it with specific information about the device running the application
  element.innerHTML = tmpStr;
  console.log("Leaving onDeviceReady");
}
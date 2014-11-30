/* jshint browser: true */
/*global alert*/
/*global console*/
/*global device*/
/*global $*/

function onBodyLoad() {
  console.log("Entering onBodyLoad");
  alert("Body Load");
  document.addEventListener("deviceready", onDeviceReady, false);
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
  tmpStr += makeListItem('UUId: ', device.uuid);

  //Write the values to the page
  $('#deviceInfo').html(tmpStr);

  console.log("Leaving onDeviceReady");
}
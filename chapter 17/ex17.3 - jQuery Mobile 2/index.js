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

function makeListItem(textStr) {
  return '<li>' + textStr + '</li>';
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  navigator.notification.alert("Cordova is ready!");
  console.log("Cordova: " + device.cordova);

  var tmpStr;
  tmpStr = makeListItem('Cordova Version: ' + device.cordova);
  tmpStr += makeListItem('Operating System: ' + device.platform);
  tmpStr += makeListItem('OS Version: ' + device.version);
  tmpStr += makeListItem('Device Model: ' + device.model);
  tmpStr += makeListItem('UUId: ' + device.uuid);

  //Write the values to the Unordered list
  $('#devInfo').html(tmpStr);
  $('#devInfo').listview('refresh');
  console.log("Leaving onDeviceReady");
}
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
  document.addEventListener("deviceready", onDeviceReady, false);
  console.log("Leaving onBodyLoad");
}

function onDeviceReady() {
  console.log("Entering onDeviceReady");
  navigator.notification.alert("Cordova is ready");
  console.log("Leaving onDeviceReady");
}

function doBeep(beepCount) {
  console.log("Entering doBeep");
  navigator.notification.beep(beepCount);
  console.log("Leaving doBeep");
}

function doVibrate() {
  console.log("Entering doVibrate");
  if (navigator.notification) {
    //Pull the vibration value off of the form
    var duration = document.getElementById("vibDur").value;
    console.log("Vibration duration: %s", duration);
    //Make the device vibrate
    navigator.notification.vibrate(duration);
  } else {
    var msg = "Vibration not available";
    console.error(msg);
    navigator.notification.alert(msg);
  }
  console.log("Leaving doVibrate");
}

function doAlert1() {
  console.log("Entering doAlert1");
  alert("This is a JavaScript alert.");
  console.log("Leaving doAlert1");
}

function doAlert2() {
  console.log("Entering doAlert2");
  navigator.notification.alert("This is a Cordova Alert.", null, "Alert Test", "Click Me!");
  console.log("Leaving doAlert2");
}

function doConfirm() {
  console.log("Entering doConfirm1");
  navigator.notification.confirm('Do you want to continue?', doContinue, 'Please confirm', 'Yes, No');
  console.log("Leaving doConfirm1");
}

function doContinue(buttonNum) {
  console.log("Entering doContinue");
  navigator.notification.alert('You chose option #' + buttonNum + '?', null, 'Really?', 'Yes');
  console.log("Leaving doContinue");
}

function doPrompt() {
  console.log("Entering doPrompt");
  //navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText]);
  navigator.notification.prompt('Please enter your nickname', gotData, 'Nickname?', ['Cancel', 'OK'], 'Jimmy');
  console.log("Leaving doPrompt");
}

function gotData(res) {
  navigator.notification.alert('You chose option #' + res.buttonIndex + '\nYou entered: ' + res.input1, null, 'Results', 'OK');
}
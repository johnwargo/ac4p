function onBodyLoad() {
  //alert("onBodyLoad");
  document.addEventListener("deviceready", onDeviceReady, false);
};

function onDeviceReady() {
  //alert("onDeviceReady");
  //navigator.notification.alert("This is a Cordova Alert.", null, "Alert Test", "Click Me!");
  //navigator.notification.confirm('Do you want to continue?', doContinue, 'Please confirm', 'Yes, No');
  //alert("beforePrompt");
  //navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText]);
  navigator.notification.prompt('Please enter your nickname', gotData, 'Nickname?', ['Cancel', 'OK'], 'Jimmy');
  alert("afterPrompt");
};

function gotData(res) {
  navigator.notification.alert('You chose option #' + res.buttonIndex + '\nYou entered: ' + res.input1, null, 'Results', 'OK');
  //navigator.notification.alert('Here', null, 'Results', 'OK');

};

function doContinue(buttonNum) {
  navigator.notification.alert('You chose option #' + buttonNum + '?', null, 'Really?', 'Yes');
};
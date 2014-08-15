/*jslint browser:true*/
/*global console*/

var cvaReady;

var someOtherFunction = function () {
  if (cvaReady) {
    //do something 

  } else {
    //tell the user why they can’t do that

  }
};


(function () {

  var onDeviceReady = function () {
    console.log("Entering onDeviceReady");
    //Let the user know that the deviceReady event has fired
    navigator.notification.alert("Cordova is ready", null, "Device Ready", "Continue");
    //Set the variable that lets other parts of the program
    //know that Cordova has initialized
    cvaReady = true;

    //===================================================
    //Do whatever other stuff you want to do on startup
    //===================================================

    console.log("Leaving onDeviceReady");
  };

  //add an event listener for the Cordova deviceReady event.
  document.addEventListener('deviceready', onDeviceReady, false);

}());
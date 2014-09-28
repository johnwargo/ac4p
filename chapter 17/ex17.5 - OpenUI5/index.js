/*jslint browser:true*/
/*global console*/
/*global sap*/
/*global device*/

"use strict";

function onDeviceReady() {

  function makeListItem(label, value) {
    return '<li><strong>' + label + '</strong>' + value + '</li>';
  }

  console.log("Entering onDeviceReady");
  navigator.notification.alert("Cordova is ready!");
  console.log("Cordova: " + device.cordova);

  //Now populate the UL content
  var tmpStr;
  tmpStr = makeListItem('Cordova Version: ', device.cordova);
  tmpStr += makeListItem('Operating System: ', device.platform);
  tmpStr += makeListItem('OS Version: ', device.version);
  tmpStr += makeListItem('Device Model: ', device.model);
  tmpStr += makeListItem('Universally Unique Identifier: ', device.uuid);
  //Write the values to the page
  $('#deviceInfo').html(tmpStr);

  console.log("Leaving onDeviceReady");
}

function onBodyLoad() {
  console.log("Entering onBodyLoad");
  alert("Body Load");
  document.addEventListener("deviceready", onDeviceReady, false);

  var app = new sap.m.App("myApp");
  var mainPage = new sap.m.Page("mainPage", {
    title: "Hello World #5 - OpenUI5 Version",
    content: new sap.ui.core.HTML({
      content: "<p>This is a Cordova application that makes calls to the Cordova Device API.</p><ul id=deviceInfo></ul>"
    }),
    footer: new sap.m.Bar({
      contentMiddle: [new sap.m.Label('footerTitle', {
        text: "Apache Cordova 4 Programming"
      })]
    })
  });
  app.addPage(mainPage);
  app.setInitialPage("mainPage");
  app.placeAt("body");
}
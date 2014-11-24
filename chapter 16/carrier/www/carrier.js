/*global require*/
/*global module*/
/*global exports*/

var exec = require('cordova/exec');

var carrier = {
  getCarrierName: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'Carrier', 'getCarrierName', []);
  },

  getCountryCode: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'Carrier', 'getCountryCode', []);
  }
};

module.exports = carrier;
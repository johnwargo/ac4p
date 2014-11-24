var exec = require('cordova/exec');

var carrier = {
  getCarrierName: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'carrier', 'getCarrierName', []);
  },

  getCountryCode: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'carrier', 'getCountryCode', []);
  }
};

module.exports = carrier;
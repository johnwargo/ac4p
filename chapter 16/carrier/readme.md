Carrier Plugin
==============
This plugin is a sample native plugin from Apache Cordova 4 Programming. It exposes the mobile carrier code and country code to a Cordova application.

To add the plugin to your application, use:

	cordova plugin add com.johnwargo.carrier 

There are two methods exposed by this plugin

`getCarrierName`: returns the name of carrier supplying service to the mobile device.

Usage: 

	getCarrierName(successCallback, errorCallback)

	function successCallback(res) {
	  console.log(res);	  
	}

`getCountryCode`: returns the current device country code.

Usage:

	getCountryCode(successCallback, errorCallback)

	function successCallback(res) {
	  console.log(res);	  
	}

That's it!

***

You can find information on many different topics on my [personal blog](http://www.johnwargo.com). Learn about all of my publications at [John Wargo Books](http://www.johnwargobooks.com). 
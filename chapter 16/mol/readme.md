mol
==========
This plugin calculates the answer to the Ultimate Question of Life, the Universe, and Everything (according to Douglas Adams).

It's a JavaScript plugin, created as a sample plugin in my [Apache Cordova 3 Programming](www.cordovaprogramming.com) and Apache [Cordova 4 Programming books](www.cordova4programming.com).

There are two methods exposed by this plugin:

calculateMOLSync() - Synchronous function that returns the results of the calculation immediately. 

Usage: 

	res = mol.calculateMOLSync();
	console.log(res)

Results in '42' being written to the console.

calculateMOL(callback) - Asynchronous method, passes the results of the calculation to the callback function.

Usage:

	var res = mol.calculateMOL(molCallback);
	 
	function molCallback(res) {
	  var msg = "Result: " + res;
	  console.log(msg);
	  navigator.notification.alert(msg, null, "MOL", "Continue");
	}  


Add the plugin to a Cordova or PhoneGap project using:

	cordova plugin add com.johnwargo.mol

That's it.

***

You can find information on many different topics on my [personal blog](http://www.johnwargo.com). Learn about all of my publications at [John Wargo Books](http://www.johnwargobooks.com). 
Apache Cordova 4 Programming: Chapter 6
=======================================

The files in this folder are some helper files I created to align with the content in the chapter.

The cva-create files (`cva-create.cmd` and `cva-create.sh`) are the example code from Listing 6.1 and 6.2, essentially scripts that automate the Cordova application creation process. I also published a node module to perform this same task; you can read more about it at [https://github.com/johnwargo/cdva-create](https://github.com/johnwargo/cdva-create).

The make-hooks files (`make-hooks.cmd` and `make-hooks.sh`) are simple script files that create the hooks sub-folders for you. After I finished the book, I published a node module to perform this same task; you can read more about it at [https://github.com/johnwargo/cdva-make-hooks](https://github.com/johnwargo/cdva-make-hooks).

The `pause.cmd` file is a simple Windows command file I created to help me test Hooks on Windows. It does nothing except write some text to the terminal window then execute the pause command which causes the command file to wait until a keypress before existing.

The `test.js` file is a simple node application I created to help me test running a node application as a hook. The application simply writes some content to the console and nothing more.

***

You can find information on many different topics on my [personal blog](http://www.johnwargo.com). Learn about all of my publications at [John Wargo Books](http://www.johnwargobooks.com). 
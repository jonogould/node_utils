node_utils
==========

by Jono Gould ([TravelGround](http://github.com/TravelGround)), @jonogould

Random node utilities. Use them, don't use them.

## Functions

1. ###simplewalk()
Simply and synchronously lists all files (filename and full path) from within every folder of the specified dir.

2. ###search()
Does a GREP for a term within the specified file.

3. ###timing()
Gives you a human-readable printout of the difference between two times. Doesn't matter which way round you place the times


## Installation

First, you need to install [node](http://nodejs.org). Then you can continue!

This script runs in terminal.

To get these tools running, you need the following dependencies, available off npm:


- [async](https://github.com/caolan/async)
- [shelljs](http://shelljs.org)
- [underscorejs](http://underscorejs.org)

To install this dependency (the easy way), run the following command from the ``` utils ``` root dir:

``` $ npm install ```

Or place the dependencies there manually but adding them to a ``` node_modules ``` folder

Or add them individually by calling:

``` $ npm install underscore ```

Lastly make the script executable using ```chmod +x utils.js```


## Usage

How do you use ``` utils ```, I hear you asking? Well add this to the top of your node script file and get going!

	var utils = require('utils');

	var files = utils.simplewalk('/test');
	var result = utils.search('foo', 'bar.txt');
	console.log(utils.timing(time1, time2));



## Examples

Coming soon: check out the [wiki](https://github.com/TravelGround/utils/wiki) for some examples on what this tool could be used for, check it out and add your own!


### Now go play, use it to create useful stuff!
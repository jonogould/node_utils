/*
*	utils.js
*	=======================================================
*
*	Author: 	jono gould
*	Company: 	TravelGround.com
*	Date: 		30 April 2013
*
*	Description:
*	Random node utilities. Use them, don't use them.
*
*	=======================================================
*/


//	Dependancies
var fs = require('fs');
var url = require('url');
var http = require('http');
var async = require('async');
var shell = require('shelljs');
var _ = require('underscore');


/*
*	Simplewalk
*	==========
*	Simply and synchronously lists all files (filename and full path)
*	from within every folder of the specified dir. Based on walker by
*	wayneashleyberry (https://github.com/wayneashleyberry/walker).
*	
*	Returns = array or objects (filename, full path)
*
*	dir 	= root folder
*	done 	= callback that is triggered on completion
*/

var simplewalk = function(dir, done) {
	var list = fs.readdirSync(dir);
	var results = [];
	iterate(dir, list, results);
	return results;
};

var iterate = function (dir, list, results) {
	_.each(list, function (f) {
		var path = dir + '/' + f;
		var stat = fs.statSync(path);
		if (stat.isDirectory()) {
			var list = fs.readdirSync(path);
			iterate(path, list, results);
		} else {
			results.push({file: f, path: path});
		}
	});
}

/*
*	Search
*	======
*	Does a GREP for a term within the specified file.
*
*	Returns = object (result, filename)
*
*	term 	= The search term
*	file 	= The file to search within
*/

var search = function(term, file) {
	var results = shell.grep(term, file);
	return {result: (results.length)?true:false, file: file};
};


/*
*	Timing
*	======
*	Quick function that returns the duration between two times.
*	You do not have to order the arguments by time.
*
*	Returns = 2 min 50 sec (e.g.)
*
*	time1 	= First time
*	time2 	= Second time
*/

var timing = function(time1, time2) {
	time1 = time1.getTime();
	time2 = time2.getTime();

	var mins = 0;
	var diff = (time1 > time2) ? time1 - time2 : time2 - time1;
	
	diff /= 1000;

	if (diff > 60) {
		mins = parseInt(diff / 60, 10);
		diff = parseInt(diff - mins*60, 10);
	}

	return (mins > 0) ? mins + ' min ' + diff + ' sec' : diff + ' sec';
};


/*
*	Export the functions
*/

exports.simplewalk = simplewalk;
exports.search = search;
exports.timing = timing;
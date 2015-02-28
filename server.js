var dirname = process.cwd();
var test = process.mainModule;

var http = require('http');
var express = require('express');
var path    = require('path');
var fs = require('fs');
var util = require('util');


var test2 = require('node-sass');
var test1 = require('node-sass').info();
var result = ""; //test2.renderSync({ data: 'body{background:blue; a{color:black;}}' })

console.log("SASS", test2, test1, result);

var gui = global.window.nwDispatcher.requireNwGui();
var gui = global.window.nwDispatcher.requireNwGui();
var win = gui.Window.get();
console.log("GUI", win.showDevTools());
//win.maximize();
//var rapi = require(path.join(dirname, '/controllers/routes/scss'));


var bodyParser = require('body-parser');

// create our app
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // to support URL-encoded bodies


app.use(express.static(path.join(dirname, 'views/')));



//module.exports.dirname = dirname;
// Exported Module from snippets-controller.js file
//var misc = require(__dirname +'/controllers/snippets-controller');
//console.log("Adding %d to 10 gives us %d", misc.x, misc.addX(10));

// Start Server
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
	if (window.location.href.indexOf('localhost') < 0) {
		//window.location = 'http://localhost:' + app.get('port');
	}
});			
var staticApp     = require('node-static')
  , grunt 		    = require('grunt')
  , colors        = require('colors')
  , staticDir     = '.'
  , port          = 5001
  , traceur       = process.env.TRACEUR || 'none'
  , gruntTask     = process.env.TRACEUR || 'default';

if(traceur){
	staticDir = staticDir + '/' + traceur.replace('-', '/');
}

var file = new staticApp.Server(staticDir);

// --> Run Grunt task
grunt.tasks(gruntTask, {verbose: true});

// --> Create HTTP local static server
require('http').createServer(function (request, response) {
	request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);

// --> Log msg server OK 
console.log(("Server running on " + (new String(port)).underline + " port... with traceur " + traceur.toUpperCase().underline).green);



var static 		= require('node-static')
  , grunt 		= require('grunt')
  , colors		= require('colors')
  , staticDir 	= '.'
  , port 		= 5001
  , tracer 		= process.env.TRACER || 'none'
  , gruntTask 	= process.env.TRACER || 'default';

if(tracer){
	staticDir = staticDir + '/' + tracer.replace('-', '/');
}

console.log(staticDir);

var file = new static.Server(staticDir);

// --> Run Grunt task
grunt.tasks(gruntTask, {verbose: true});

// --> Create HTTP local static server
require('http').createServer(function (request, response) {
	request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);

// --> Log msg server OK 
console.log(("Server running on " + (new String(port)).underline + " port... with tracer " + tracer.toUpperCase().underline).green);



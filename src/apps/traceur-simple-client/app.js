console.log("traceur-simple-client !");

var t = 'Mon texte';
console.log(`mon texte est == ${t} !`);

import {Human} from './modules/human.js';

var h = new Human({
	firstname: 'Fred',
	lastname: 'GIGI'
});


console.log(h.firstname);

var fx = function(t, ...rest){
	if(t) {
		console.log(t);
	}

	if(rest) {
		console.log(rest);

		var [a, b] = rest;

		console.log(`a == ${a}`);
	}
};

fx("podel");
fx('t', 'v', 'x');

var tx = function(p = 'poodle', ...r) {
	console.log(p);
};

tx();
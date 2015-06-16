console.log("podel !!!!");
/**
 * Import/Modules
 */
import {Human} from './modules/human.js';

var h = new Human({
	firstname: 'Fred',
	lastname: 'GIGI'
});

var s = new Set();
s.add(5);
for(let x of s){
	console.log(x);
}

console.log(h.firstname);

console.log("podel de fin !");

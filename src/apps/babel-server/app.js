require('core-js');

/**
 * Import/Modules
 */
import {Me} from './modules/me';

/**
 * Using modules
 */
var me = new Me({fullname: 'Frederic GINIOUX', gender: 'M'}, 43);
// Used toString method class extended Me
console.log(me.toString());

/**
 * Set object usage
 */
var s = new Set();
// Add value in set 
s.add(6);
// List value with for of loop
for(let v of s){
	console.log(v);
}
// Add new value
s.add(12);
// Use Array.from method to map set object
Array.from(s).map((x) => {console.log(x, "podel"); });

/**
 * Promise natif object
 */
Promise.all([10, 30]).then(function (v){
	for (let i = 0, l = v.length; i < l; i++) {
		console.log(v[i]);
	}
});
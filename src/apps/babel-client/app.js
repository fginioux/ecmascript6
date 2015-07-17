

require(['js/modules/human'], function(module){
	
});

/**
 * Module AMD (requirejs)
 * Exemple d'utilisation des modules
 */
require(['js/modules/human'], function (module) {
	console.log(module);

	var me = new module.Human({
		firstname: 'Frédéric',
		lastname: 'GINIOUX',
		age: 43,
		gender: 'male'
	});

	console.log(`Instance of Human loaded from module/human.js`);
	for (let p in me) {
		console.log(`${p} == ${me[p]}`);
	}
});


var x = (x) => x*x;
console.log(x(4));

var s = new Set();
s.add(5);
s.add(10);
console.log(s);
for(let d of s) {
	console.log(d);
}

Array.from(s).map(function(x){
	console.log(x);
});

var str = "Fred Ginioux !";
console.log(str.startsWith('Fred'));
console.log(str.startsWith('Gini', 5));
console.log(str.endsWith('!'));
//console.log(str.contains('un type'));
//
document.addEventListener("DOMContentLoaded", function(event) { 
	var link = document.getElementsByTagName('a');
	link[0].addEventListener("click", function(e){
		e.preventDefault();
		require(['js/modules/primate'], function(module){
			var primate = new module.Primate();
			console.log(primate.toString());
		});

		return false;
	});
});











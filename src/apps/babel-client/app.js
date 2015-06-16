/**
 * Module AMD (requirejs)
 * Exemple d'utilisation des modules
 */
requirejs(['js/modules/human'], function (module) {
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

var str = "Fred Ginioux est un type impatient !";
console.log(str.startsWith('Fred'));
console.log(str.startsWith('Gini', 5));
console.log(str.endsWith('!'));
console.log(str.contains('un type'));


/**
 * All example ECMASCRIPT 6
 */

/**
 * @description
 * Constant usage
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#constant|Constant usage example}
 */
try {
	// Constant definition
	const MY_CONST = 1;
	console.info('Constant usage supported by traceur.');
} catch(e) {
	console.error('Constant usage not supported by traceur.');
}

/**
 * @description
 * Block scoping usage
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#scope-variables-simple|Block scope usage}
 */
try {
	var j = 1
	  , i = 10;

	if(i > j) {
		let j = 100;
		if(j > i) {
			console.info('Block scope variable supported by traceur.');
		}
	}
} catch(e) {
	console.error('Block scope not supported by traceur.');
}

/**
 * @description
 * Block scope variable in loop
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#scope-variables-loop | Block scope variable in loop}
 */
try {
	var i = 1;
	for(let i = 0; i < 10; i++) {}
	if(i === 1) {
		console.info('Block scope variable in loop supported by traceur.');
	}
} catch(e) {
	console.error('Block scope variable in loop not supported by traceur.');
}

/**
 * @description 
 * Arrow function syntax
 */
try {
	var f 	= x => x*x
	  , ff 	= (x, y) => { return (x + y)*2; }
	  , fff = (x, y, z) => {
	  		if(x == y) {
	  			z += y;
	  		}

	  		return z;
	  }
	  , ffff = (r) => { return r.reduce((p, c) => p + c); };
	if(f(2) === 4 && ff(1, 1) === 4 && fff(1, 1, 2) === 3 && ffff([1, 1, 2]) === 4) {
		console.info('Arrow function supported by traceur.');
	}
} catch(e) {
	console.error('Arrow function not supported by traceur.');
}

/**
 * @description
 * Arrow function with this reference
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#arrow-functions-this-reference | Arrow function with this reference}
 */
try {
	var Person = function(birthdate){
		this.birthdate = new Date(birthdate);
	    this.age = () => { return Math.round(((Date.now() - this.birthdate)/1000)/(525949*60)); };
	    if(this.age() > 18) {
	    	console.info('Arrow function with this reference supported by traceur.');
	    }
	};

	var me = new Person('1972-02-21 01:00:00');
} catch(e) {
	console.error('Arrow function with this reference not supported by traceur.');
}

/**
 * @description 
 * Function with default parameter value
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#functions-parameters-default-value | Function with default parameter value}
 */
try {
	let f = function(x, y = 12) {
		return x + y;
	};

	if(f(2) === 14) {
		console.info('Function with default parameter value supported by traceur.');
	}
} catch(e) {
	console.error('Function with default parameter value not supported by traceur.');
}

/**
 * @description 
 * Function with variable number of parameters
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#functions-parameters-variable-number | Function with variable number of parameters}
 */
try {
	let f = function(x, ...y) {
		// y is an array with all undeclared arguments
	    for(let i = 0, l = y.length; i < l; i++){
	        x += y[i];
	    }

    	return x;
	};

	if(f(1, 2, 3) === 6 && f(...[1, 2, 3]) === 6) {
		console.info('Function with variable number of parameters supported by traceur.');
	}
} catch(e) {
	console.error('Function with variable number of parameters not supported by traceur.');
}

/**
 * @description  
 * Template string
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#template-string | Template string}
 */
try {
	let a = 1
	  , b = `My string with a variable == ${a}.`;
	console.info('Template string supported by traceur.');
} catch(e) {
	console.error('Template string not supported by traceur.');
}

/**
 * @description
 * Destructuring assignment for array
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#destructuring-assigment-array | Destructuring assignment for array}
 */
try {
	var a, b, t = [2, 3];
	[a, b] = t;
	// With var statement
	var [c, d] = t;
	// Ignored values
	var [e, f, , g] = [2, 3, 4, 5];
	// Return function
	var [h, i] = (() => t)();
	if(a === 2 && b === 3 && c == a && d == b && e == a && f == b && g == 5 && h == a && i == b) {
		console.info('Destructuring assignment for array supported by traceur.');
	}
} catch(e) {
	console.error('Destructuring assignment for array not supported by traceur.');
}

/**
 * @description
 * Destructuring assignment for object
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#destructuring-assigment-object | Destructuring assignment for object}
 */
try {
	let t = {a: 1, b: 2};
	var {a, b} = t;
	let {a: c, b: d} = t;
	var e, f;
	({a: e, b: f} = t);
	// Destructuration && default value parameter
	var w = function({x = 10, y = 20} = {}, n = 10){
		return {x: x+n, y: y+n};
	};
	let {x, y} = w({x: 2}, 1);
	if(a === 1 && b === 2 && c == a && d == b && e == a && f == b && x == 3 && y == 21) {
		console.info('Destructuring assignment for object supported by traceur.');
	}
} catch(e) {
	console.error('Destructuring assignment for object not supported by traceur.');
}

/**
 * @description 
 * Promise
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#promise-object | Promise }
 */
try {
	let get = function(value = 10, delay = 0){
		return new Promise((resolve) => {
			window.setTimeout(() => {
				resolve(value);
			}, delay);
		});
	};

	get().then(function(v){
		console.info('Promise supported by traceur.');
	});
} catch(e) {
	console.error('Promise not supported by traceur.');
}

/**
 * @description
 * POO
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#oop-support | POO}
 */
class Entity {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
}

class Player extends Entity {
	/**
	 * Constructor with super method parent call
	 */
	constructor(name, position) {
		super(position.x, position.y);
		this.name = name;
	}

	/**
	 * Methode not inherited
	 */
	toString() {
		return `Player ${this.name} @t (x: ${this.x}, y: ${this.y})`;
	}

	/**
	 * Getter for position (return x, y position values)
	 */
	get position() {
		return {x: this.x, y: this.y};
	}

	/**
	 * Setter for position (affect x, y position)
	 */
	set position(position) {
		({x: this.x, y: this.y} = position);
	}
}

try {
	var player = new Player('freddy', {x: 2, y: 10});
	player.position = {x: 22, y: 34};
	if(player.y === 34) {
		console.info('Basic POO supported by traceur.');
	}
} catch(e) {
	console.error('Basic POO not supported by traceur.');
}

/**
 * @description
 * Module
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#modules-syntax | Module}
 */
import {PI, sqr} 	from './modules/math.js';
import {Human} 		from './modules/human.js';
import {lib} 		from './modules/lib.js';

try {
	let me = new Human('Frederic GINIOUX');
	if(PI && typeof sqr === 'function' && me instanceof Human && typeof lib == 'object') {
		console.info('Module supported by traceur.');
	}
} catch(e) {
	console.error('Module not supported by traceur.');
}

/**
 * @description
 * Proxy
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#proxy-concept | Proxy}
 */
try {
	
	var p = new Proxy({}, {
		get(t, p) {
			return t[p] + 10;
		},

		set(t, p, v) {
			console.log("podel d'access");
			t[p] = v;
		}
	});

	p.a = 10;
	var t = p.a;
	if(t === 20) {
		console.info('Proxy supported by traceur.');
	}
} catch(e) {
	console.error('Proxy not supported by traceur.');
}

/**
 * @description 
 * Set/Map objects
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#object-map | Set/Map objects}
 */
try {
	let s = new Set();
	// Add value in set
	s.add(5);
	// Set object iteration
	for(let v of s) {}
	// Array conversion
	let w = [...s];
	console.info('Set object supported by traceur.');
} catch(e) {
	console.error('Set object not supported by traceur.');
}

try {
	let d = new Map();
	d.set('poodle', true);
	// Map object iteration
	for(let v of d) { /*[key, value]*/ }
	let keys = d.keys();
	for(let k of keys) { /*key*/ }
	let values = d.values();
	for(let v of values) { /*value*/ }
	console.info('Map object supported by traceur.');
} catch(e) {
	console.error('Map object not supported by traceur.');
}

/**
 * @description
 * Array new methods
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#array-new-methods | Array new methods }
 */
try {
	let s = new Set([1, 2, 2, 5]);
	let values = Array.from(s).reverse().join('-'); // 5-2-1
	console.info('Array.from method supported by traceur.');
} catch(e) {
	console.error('Array.from method not supported by traceur.');
}

try {
	let f = [1, 2, 3, 4].find((x) => { return x > 2; });
	if(f) {
		console.info('Array.prototype.find method supported by traceur.');
	}
} catch(e) {
	console.error('Array.prototype.find method not supported by traceur.');
}

try {
	let f = [1, 2, 3, 4].findIndex((x) => { return x > 2; });
	if(f) {
		console.info('Array.prototype.findIndex method supported by traceur.');
	}
} catch(e) {
	console.error('Array.prototype.findIndex method not supported by traceur.');
}

/**
 * @description
 * String new methods
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#string-new-methods | String new methods}
 */
try {
	let startsWith 	= 'hello'.startsWith('he');
	let endsWith 	= 'hello'.endsWith('o');
	let contains 	= 'hello'.contains('ell');
	if(startsWith && endsWith && contains) {
		console.info('String new methods (startsWith, endsWith, contains) supported by traceur.');
	}
} catch(e) {
	console.error('String new methods (startsWith, endsWith, contains) not supported by traceur.');
}

/**
 * @description  
 * Number new methods
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#number-new-methods | Number new methods }
 */
try {
	let i = 12;
	let ii = '12';
	if(Number.isInteger(i) && !Number.isNaN(ii) && Number.isNaN(NaN) && Number.isSafeInteger(i) && !Number.isSafeInteger(ii)) {
		console.info('Number new methods (isInteger, isNaN, isSafeInteger) supported by traceur.');
	}
} catch(e) {
	console.error('Number new methods (isInteger, isNaN, isSafeInteger) not supported by traceur.');
}

/**
 * @description  
 * Object syntax
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#object-literal-syntax | Object syntax}
 */
try {
	let name = 't';
	let s = Symbol('foo');
	let o = {
		a: 1,
		b() {
			return this.a + 10;
		},
		c: 'poodle',
		[name + '_prefix']: 'dynamic name',
		[s](){
			return 10;
		}
	};
	console.info('Object syntax supported by traceur.');
} catch(e) {
	console.error('Object syntax not supported by traceur.');
}

/**
 * @description 
 * Object assessors
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#object-literal-accessors | Object assessors}
 */
try {
	let o = {
		a: 1,
		b: 10,
		get values() {
			return {a: this.a, b: this.b};
		},

		set values(values) {
			({a: this.a, b: this.b} = values);
		}
	};

	o.values = {a: 10, b: 1};
	if(o.a == 10) {
		console.info('Object assessors supported by traceur.');
	}
} catch(e) {
	console.error('Object assessors not supported by traceur.');
}

/**
 * @description  
 * Generators
 * {@link https://github.com/fginioux/ecmascript6/blob/master/examples.md#generators-example | Generators}
 */
try {
	function* prime(i = 2, m = 100){
		var i = (i && i > 1)? i : 2
		  , p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

		// Loop generator
		for(let j = i; j < m; j++) {
			// Check if j is in first list of prime number
			if(p.indexOf(j) !== -1) {
				yield j;
			} else {
				let matched = false;
				for(let ii = 0, ll = p.length; ii < ll; ii++) {
					if(j%p[ii] === 0) {
						matched = true;
						break;
					}
				}
				
				if(!matched) {
					yield j;
				}
			}
		}
	};

	let g = Array.from(new Set(prime()));
	if(g.indexOf(2) === 0 && g.indexOf(3) === 1) {
		console.info('Generators supported by traceur.');
	}
} catch(e) {
	console.error('Generators not supported by traceur.');
}

/**
 * @description
 * Iterators
 * {@link | Iterators}
 */
try {
	let iter = {
		[Symbol.iterator](){
			let i = 0;

			return {
				next(){
					if(i < 10) {
						i++;
						return {value: i, done: false};
					} else {
						return {done: true};
					}
				}
			}
		}
	};

	let myPoodle = {type: 'dog', race: 'poodle', color: '#fff'};
	myPoodle[Symbol.iterator] = function(){
		let i = 0
		  , props = Object.keys(this).filter(x => { return (typeof this[x] !== 'function')? true : false; })
		  , that = this;

		return {
			next(){
				if(i < props.length) {
					return {value: that[props[i++]], done: false};
				} else {
					return {done: true};
				}
			}
		};
	};

	let p = Array.from(new Set(iter));
	let pSet = new Set(myPoodle);
	if(p.length === 10 && pSet.has('poodle')) {
		console.info('Iterators supported by traceur.');
	}
} catch(e) {
	console.error('Iterators not supported by traceur.');
}
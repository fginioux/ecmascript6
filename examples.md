#Examples
List of ECMAScript 6 implementation

### Constant <a name="constant"></a>
```javascript
const MY_CONST = 44;
console.log(MY_CONST > 100); //-> 0

// Redeclare throw Error
const MY_CONST = 23; //-> Error
var MY_CONST = 12 //-> Error
let MY_CONST = 2 //-> Error
```
### Scope Variables (simple) <a name="blockscope"></a>
```javascript
// let keyword
let i = 0;
if(i !== 0) {
    let j = 1;
    i = 0;
}

// i exists but j not
console.log(i); //-> 0
console.log(j); //-> undefined
```
### Scope Variables (loop)
```javascript
for(let i = 0; i < 10; i++) {
	console.log(i); //-> 0,1,2,3,etc.
	let scopedValue = i+10;
	console.log(scopedValue); //-> 10,11,12,13,etc.
	var unscopedValue = i+2;
	console.log(unscopedValue); //-> 2,3,4,etc.
}

// Variable access
console.log(i); //-> undefined
console.log(scopedValue); //-> undefined
console.log(unscopedValue); //-> 12
```
### Scope Variables (loop + scope)
```javascript
var $elt = $('a') 
  , methods = []
  , l = $elt.length; //-> 4
for(let i = 0; i < l; i++) {
	$elt.eq(i).bind('click', function(){
	    console.log('Index : ' + i); //-> output current index i (not the last one like in ES5)
	});
	// Push method. (arrow function)
	methods.push((n) => i*n);
}

// Use method builded in loop
console.log(methods[1](2)); //-> 2
```
### Arrow functions (syntax)
```javascript
() => { statement }
(param) => { statement }
param => statement //-> return statement
(p1, p2, p3) => { statement }
```
### Arrow functions (basic)
```javascript
var sq = (n) => n*n; //-> var sq = function(n) { return n*n; };
console.log(sq(2) === 4); //-> 1
console.log(Math.sqrt(sq(2)) === 2); //-> 1

var reduce = (r) => { return r.reduce((p, c) => p + c); }
console.log(reduce([1,1,2]) === 4); //-> 1
```
### Arrow functions (this reference)
```javascript
var Person = function(birthdate){
    this.birthdate = new Date(birthdate);
	this.age = () => { Math.round(((Date.now() - this.birthdate)/1000)/(525949*60))};
	// this in arrow function (instance of Person)
	window.setTimeout(() => {
	    console.log(this.age); //-> 43 with this.bithdate === '1972-02-21 01:00:00'
	}, 1000);
};

var me = new Person('1972-02-21 01:00:00');
console.log(me.age); //-> 43
```
### OOP support
```javascript
// Base class
class Point {
    // Constructor
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	
	toString(){
		return '(' + this.x + ',' + this.y + ')';
	}
	
	// Static method
	static log(){
	    console.log('This is an instance of Point class.');
	}
    
    // Getter
	get x(){
		return this.x;
	}

	get y(){
		return this.y;
	}
    
    // Setter
	set x(value){
	    if(!/^\d+$/.test(value)){
	        throw Error('Invalid value for x property. It must be numeric.');
	    } else this.y = value;
	}

	set y(value){
		this.y = value;
	}
};

// Child class extends Point
class LabelPoint extends Point {
	constructor(x, y, label){
		super(x, y);
		this.label = label;
	}

	toString(){
		return this.label + ' - (' + this.x + ',' + this.y + ')';
	}
}

var p = new Point(2, 4);
console.log(p.x); //-> 2 (use getter in background)
p.x = 10; //-> use setter in background
try {
    p.x = 'poodle'; 
} catch(e){
    console.log(e.message); //-> Invalid value for x property. It must be numeric.
}

// Instance check
var lPoint = new LabelPoint(10, 100, 'My label');
lPoint.toString(); //-> My label - (10,100)
console.log(p instanceof Point); //-> 1
console.log(p instanceof LabelPoint); //-> 0
console.log(lPoint instanceof Point); //-> 1
console.log(lPoint instanceof LabelPoint); //-> 1
```
### Functions parameters (default value)
```javascript
let f = function(x, y = 12){
    return x + y;
};
console.log(f(2)); //-> 14
console.log(f(2, 10)); //-> 12
```
### Functions parameters (variable number)
```javascript
let f = fucntion(x, ...y){
    // y is an array with all undeclared arguments
    for(let i = 0, l = y.length; i < l; i++){
        x += y[i];
    }
    
    return x;
};
console.log(f(2)); //-> 2
console.log(f(2,4)); //-> 6
console.log(f(2,4,6,8,10)); //-> 30
```
### Functions parameters (Rest argument replacement)
```javascript
let f = function(w, x, y){
    return w + x + y;
}

// replace all arguments with array values
console.log(f(...[1,2,3])); //-> 6

// possible too
var t = [1, 2, 3]
  , w = [10, 11, ...t];
console.log(w.split('-')); //-> 10-11-1-2-3

// possible too
var t = 'poodle'
  , w = [...t];
console.log(w.split(',')); //-> p,o,o,d,l,e 
```
### Template string 
```javascript
let t = `Text in template`;
console.log(t); //-> Text in template
let t = `Text in template
With two lines`;
let a = 5;
let b = 10;
let t = `My text with the a variable ${a}`;
let v = `My text with a statement a+b == ${a + b}`;
console.log(t); //-> My text with the a variable 5
console.log(v); //-> My text with a statement a+b == 15
```
### Destructuring assigment (Array)
```javascript
// Basic
var a, b;
[a, b] = [3, 4];
console.log('Valeur de a == ${a} - Valeur de b == ${b}.'); //-> Valeur de a == 3 - Valeur de b == 4

// With string value and non-declaration ("var" before assignment statement)
var [a, b] = ["String A", "String B"];
console.log('${a} - ${b}.'); //-> String A - String B

// Crossed assignment
var a = 1, b = 2;
[a, b] = [b, a];
console.log('Valeur de a == ${a} - Valeur de b == ${b}.'); //-> Valeur de a == 2 - Valeur de b == 1

// Ignoring values
var a, b, c;
[a, b, , c] = [1, 2, 3, 4];
console.log(a, b, c); //-> 1, 2, 4
// Using function
function f(n){
    return [1, 2, 3].map((v) => v + n);
};

var [a, b, c] = f(1);
console.log(a, b, c); //-> 2, 3, 4
a = f(2);
console.log(a.joint(', ')); //-> 4, 5, 6
```
### Destructuring assigment (Object)
```javascript
// Basic 
var {a, b} = {a: 3, b: 4};
console.log('Valeur de a == ${a} - Valeur de b == ${b}.'); //-> Valeur de a == 3 - Valeur de b == 4

// Unmatch variable name
var {p: a, q: b} = {p: 3, q: 4};
console.log('Valeur de a == ${a} - Valeur de b == ${b}.'); //-> Valeur de a == 3 - Valeur de b == 4

// Without var keyword before assignment statement
var a, b;
({a, b} = {a: 3, b: 4});

// Function declaration with destructuring assignment
function f({x = 0, y = 0} = {}, n){
    return {x: x*n, y: y*n};
};

var {x: a, y: b} = f({x: 2}, 5);
console.log(a, b); //-> 10, 0
```
### Promise Object
```javascript
function get(url = 'http://www.google.ca'){
    return new Promise(function(resolve, reject){
    	$.ajax({
    	    url: url,
    	    complete: function(data){
    	    	resolve(data);
    	    },
    	    error: function(err){
    	    	reject(err);
    	    }
    	});
    });
}

// First syntax
get().then(function(data){
    //-> Success
}).catch(function(err){
    //-> Error
});

// Second syntax
get('http://dogtime.com/dog-breeds/poodle').then(function(html){
    //-> Success
}, function(err){
    //-> Error
});
```
### Object literal (Syntax)
```javascript
//-> properties
let a = 1, b = 2;
let obj = {a, b};
console.log(obj.a); //-> 1

//-> methods
let obj = {
    a: 1,
    b(){
    	console.log(`a == ${this.a}, c == ${this.c}`);
    },
    c: "poodle"
};
obj.b() //-> a == 1, c == poodle

//-> Computed property name
let prefix = 'my_prop_';
let obj = {
   [prefix + 'name']: 'poodle',
   [prefix + 'age']: 34
};
console.log(`Object name == ${obj[prefix + 'name']}`); //-> Object name == poodle
```
### Object literal (Accessors)
```javascript
var o = {
   a: 1,
   get b(){
   	return this.b + this.a;
   },
   set b(value = 0){
   	if(!/^\d+$/.test(value)){
            throw Error('Invalid value for b property. It must be numeric.');
        } else this.b = value;
   }
};

o.b = 1;
console.log(o.b); //-> 2
o.b = 'poodle'; //-> throw Error : Invalid value for b property. It must be numeric.

//-> other syntax
var o = {
    a: 1,
    b: {
    	enumerable: true,
    	get: function(){
    	    return this.b + this.a;
    	},
    	set: function(value = 0){
    	    if(!/^\d+$/.test(value)){
                throw Error('Invalid value for b property. It must be numeric.');
            } else this.b = value;
    	}
    }
};
```
### Object Map
```javascript
var m = new Map();
m.set('a', 1);
if(m.has('a')){
    console.log(m.get('a')); //-> 1
}

//-> Clear content
m.clear();
console.log(m.has('a')); //-> false

//-> keys access
m.set('b', 10);
var k = m.keys();
for(let w of k) {
    console.log(w); //-> b
}

//-> values access
var v = m.values();
for(let w of v) {
    console.log(v); //-> 10
}
```
### Object Set 
```javascript
var s = new Set();
s.add(10);
s.add(5);
console.log(s.add(5), s.size); //-> true, 2
s.add(5);
console.log(s.size); //-> 2

//-> Acces values
s.forEach(function(v){
    console.log(v); //-> 10,5
});

//-> Array conversion
var mySet2Array = [...s];
console.log(mySet2Array); //-> [10,5]
```
### Modules (Syntax)
```javascript
//-> module file my-module.js
module.exports = (function(){
    return {
    	sum: function(x = 0, y = 0){
    	    return x + y;
    	},
    	
    	pythagore: function(a = 0, b = 0){
    	    return Math.sqrt((a*a) + (b*b));
    	}
    };
});
//-> main js file
import * from 'my-module';
console.log(sum(2, 2)); //-> 4
console.log(Math.ceil(pythagore(2, 2))); //-> 3

//-> Select references in imported module (with namespace)
//-> Only sum is imported and available in lib
import {sum} as lib from 'my-module';
console.log(lib.sum(2, 2)); //-> 4

//-> Exporting only one function my-module.js
export default function(x){
    return x + x;
}

//-> main.js
import myModuleFunc from 'my-module';
console.log(myModuleFunc(2)); //-> 4
//-> other syntax (_ == default)
import _ as myModuleFunc from 'my-module';
console.log(myModuleFunc(2)); //-> 4

//-> Exporting only one class my-module.js
export default class {
    constructor(x){
    	this.x = x;
    }
    
    sum(y){
    	return this.x + y;
    }
};

//-> main.js
import myModuleClass from 'my-module';
var t = new myModuleClass(2);
console.log(t.sum(2)); //-> 4
```
### Module (Loader)
```javascript
let file = 'my-module';
System.import(file).then(function(myModule){
    myModule.sum(2, 2); //-> 4
}).catch(function(err){
   //-> load error 
});

//-> load multiple modules
Promise.all(['moduleA', 'moduleB'].map(x => System.import(x))).then((moduleA, moduleB) => {
    //-> can use modules here
});
```
### Proxy (Concept)
```javascript
var handler = {
    get(target, name){
    	return (name in target)? target[name] : 'Default value';
    }
};

var target = new Proxy({a: 1}, handler);
console.log(target.a, target.b); //-> 1, 'Default value'
```
### Proxy (example: validator)
```javascript
let p_num = '_numeric', p_required = '_required';
// Validator
let validator = {
    set(obj, prop, value){
    	// Validations
    	if(prop.indexOf(p_num) && !/^\d+$/.test(value)){
    	    throw error(prop + ' must be a numeric !');
    	} else if(prop.indexOf(p_required) && !/\S/.test(value)){
    	    throw error(prop + ' is required !');
    	}
    	//-> assignment
    	obj[prop] = value;
    }
};


var p = new Proxy({}, validator);
p['name' + p_required] = 'Poodle';
p['age' + p_num] = 'My age is 18 !'; //-> throw an error 'age_numeric must be a numeric !';
```
### Array new methods
```javascript
// Array.from Iterable
function double(args){
    return Array.from(arguments, (el) => el * 2);
}
console.log(double(1, 2, 3)) //-> [2, 4, 6] in Array type
//-> other example
let lis = document.querySelectorAll('ul#myList li');
Array.from(lis).forEach(function(li){
    console.log(node);
});

// Array.find (return element find with a search function)
console.log([1, 2, 3, 4].find((x) => { return x > 2; })); //-> 2 (first element with match with the search)

// Array.findIndex (return element index find with a search function)
console.log([1, 2, 3, 4].findIndex((x) => { return x > 3; })); //-> 3
```
### String new methods
```javascript
// String.startWith
console.log('hello'.startsWith('he')); //-> true
console.log('hello'.startsWith('el', 1)); //-> true

// String.endsWith
console.log('hello'.endsWith('o')); //-> true

// String.contains
console.log('hello'.contains('ll')); //-> true

// String.repeat
let t = 'hello'.repeat(3); 
console.log(t); //-> hellohellohello
```
### Number new methods
```javascript
// Number.isInteger
console.log(Number.isInteger(19)); //-> true
console.log(Number.isInteger(1.9)); //-> false

// Number.isNaN();
console.log(Number.isNaN('t')); //-> true
console.log(Number.isNaN(12)); //-> false

// Number.isSafeInteger
console.log(Number.isSafeInteger(2)); //-> true
console.log(Number.isSafeInteger('2')); //-> false
```
### Iterators 
```javascript
var myIterator = function(items){
    let index = 0;
    return {
        next(){
            let done = (i >= items.length)
              , value = !done ? items[i++] : undefined
              , r = {done, value};

            return r;
        }
    };
};

var it = myIterator([1, 2, 3, 4]);
console.log(it.next().value); //-> 1
console.log(it.next().value); //-> 2
console.log(it.next().value); //-> 3
console.log(it.next()); //-> {value: 4, done: true}
// loop an iterator
for(let x of new myIterator([1, 2, 3, 4])){
    console.log(x); //-> 1, 2, 3, 4
}

// String
let t = 'My new string';
for(let l of t){
    console.log(l); //-> output each letter
}

// Map 
let m = new Map();
m.set('a', 1);
m.set('b', 2);
for(let v of m){
    console.log(v); //-> ['a', 1], ['b', 2]
}

// Set
let s = new Set();
s.add(5);
s.add(10);
for(let w of s){
    console.log(w); //-> 5, 10
}
```
### Generators 
```javascript
// Generator function
function* g(items){
    for(let i = 0, l = items.length; i < l; i++) {
    	yield items[i];
    }
}
//-> othe syntax
var g = function*(){};

// Using generator to create iterable objects
for(let w of g([1, 3])) {
    console.log(w); //-> 1, 3
}

// Object syntax
var o = {
    *g(items){
    	// Code here
    }
};
```

#Examples
List of ECMAScript 6 implementation

### Constant
```javascript
const MY_CONST = 44;
console.log(MY_CONST > 100); //-> 0

// Redeclare throw Error
const MY_CONST = 23; //-> Error
var MY_CONST = 12 //-> Error
let MY_CONST = 2 //-> Error
```
### Scope Variables (simple)
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
let t = `My text with the a variable ${a}`;
```


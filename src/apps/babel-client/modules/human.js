/**
 * Class parent Primate == P
 */
class P {
	constructor() {

	}

	toString() {
		return "I'm a primate...";
	}
};

// Available props for HUman instance
var props = ['firstname', 'lastname', 'age', 'gender'];

class H extends P {
	constructor(options) {
		super();
		for(let v in options) {
			if(props.indexOf(v) !== -1) {
				this[v] = options[v];
			} else throw Error(v + ' property name invalid for Human class !');
		}
	}

	toString() {
		return `${this.firstname}, ${this.lastname}, ${this.age}`;
	}
};

export var Human = H;
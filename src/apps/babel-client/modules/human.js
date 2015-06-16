// Available props for HUman instance
var props = ['firstname', 'lastname', 'age', 'gender'];

class H {
	constructor(options) {
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
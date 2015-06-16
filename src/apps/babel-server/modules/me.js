import {Human} from './human';

class M extends Human {
	constructor(opts, age) {
		super(opts);

		if(!this.age) {
			this.age = age;
		}
	}

	toString() {
		return `${super.toString()} but it's me and i have ${this.age} years old !`;
	}
};

export var Me = M;
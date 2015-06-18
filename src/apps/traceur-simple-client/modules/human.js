import {Primate} from './primate.js';

class H extends Primate {
	constructor(name) {
		super();
		this.name = name;
	}

	toString() {
		return super.toString() + ' and I\'m an human too...';
	}
};

export var Human = H;
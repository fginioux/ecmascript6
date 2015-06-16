class H {
	constructor(opts) {
		for (let p in opts) {
			this[p] = opts[p];
		}
	}

	toString() {
		return 'I\'m an human...';
	}
};


export var Human = H;
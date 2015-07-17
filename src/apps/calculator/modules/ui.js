class Element {
	_parent;
	_element;

	constructor($parent) {
		this.parent = $parent;
		return this.init();
	}

	init() {
		return this.inject();
	}

	inject($parent = null) {
		this.parent = $parent;
		if(this._element && this._parent) {
			var f = document.createElement('FIELDSET');
			f.appendChild(this._element);
			this._parent.append(f);
		}

		return this;
	}

	set parent($parent) {
		if($parent && !this._parent) {
			this._parent = $parent;
		}
	}
}

class Input extends Element {
	_parent;
	_element;
	_placeholder;

	constructor($parent, placeholder){
		super($parent);
		this.placeholder = placeholder;
		return this;
	}

	init(){
		// Shadow DOM
		this._element = document.createElement('INPUT');
		this._element.setAttribute('type', 'text');
		
		// Change event
		this._element.addEventListener('change', () => {
			// Use class setter
			this.value = this._element.value;
		});

		return this.inject();
	}

	get value(){
		return this._element.getAttribute('value');
	}

	set value(value){
		this._element.setAttribute('value', value);
	}

	set placeholder(value) {
		if(this._element) {
			this._element.setAttribute('placeholder', value);
		}
	}
}

class Select extends Element {
	_parent;
	_element;

	constructor($parent, options){
		super($parent);
		return this.setOptions(options);
	}

	init(){
		this._element = document.createElement('SELECT');

		/**
		 * Event change for set/get value
		 */
		this._element.addEventListener('change', () => {
			this.value = this._element.value;
		});

		return this.inject();
	}

	setOptions(values) {
		for(let i = 0, l = values.length; i < l; i++) {
			let val = values[i];
			let {name, abbr} = val;
			let option = document.createElement('OPTION');
			option.value = abbr;
			option.text = name;
			this._element.add(option);
		}

		return this;
	}

	get value() {
		return this._element.value;
	}

	set value(value) {
		this._element.value = value;
	}
}

class Button extends Element {
	_parent;
	_element;
	_text;

	constructor($parent, {obj = null, cb = function(){}, text = 'Calculer'} = {}) {
		super($parent);
		this.text = text;
		return this.onClick(cb, obj);
	}

	init() {
		this._element = document.createElement('BUTTON');
		return this.inject();
	}

	set text(text) {
		var text = document.createTextNode(text);
		this._element.appendChild(text);
	}

	onClick(cb, obj) {
		this._element.addEventListener('click', function(evt){
			evt.preventDefault();
			cb.call(obj);
			return false;
		});

		return this;
	}
}

export {Input, Select, Button};
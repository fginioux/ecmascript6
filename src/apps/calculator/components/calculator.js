define(['modules/provinces', 'modules/ui'], function(Provinces, UI){
	var Provinces = Provinces.Provinces;
	
	// Component default options
	var defaultOptions = {
		labels: {
			select: 'Provinces',
			input: 'Prix',
			btn: 'Calculez'
		}
	};

	class Calculator {
		_wrapper;
		_provinces;
		_price;
		_btn;

		constructor(wrapper = null) {
			// Use class setter for validate wrapper type
			this.wrapper = wrapper;
			return this.init();
		}

		init() {
			// use UI modules
			this._price = new UI.Input(this.wrapper, defaultOptions.labels.input);
			this._provinces = new UI.Select(this.wrapper, Provinces.sort(), defaultOptions.labels.select);
			this._btn = new UI.Button(this.wrapper, {text: defaultOptions.labels.btn, obj: this, cb: () => {
				let p = Provinces.getByAbbr(this._provinces.value)
				  , r = this.calculate(p, parseFloat(this._price.value || 0, 10));

				if(isNaN(r.total)) {
					console.error('Price must be a number !');
				} else {
					console.log(`Total (TTC) : ${r.total} - Taxes = GST : ${r.gst}, PST: ${r.pst}`);
				}
			}});

			return this;
		}

		get wrapper() {
			return this._wrapper;
		}

		set wrapper(wrapper) {
			if(wrapper instanceof jQuery) {
				this._wrapper = wrapper;
			} else throw Error('Calculator wrapper must be a jquery element');
		}

		/**
		 * Return prices with taxes and each taxes value
		 * @param  {Object} Taxes 		Object with property gst, pst
		 * @param  {Number} price       Price without taxes
		 * @return {Object}             Object with total, gst, pst values
		 */
		calculate({gst = 0, pst = 0} = {}, price = 0.00) {
			var {gst, pst} = {gst: price*gst/100, pst: price*pst/100};
			return {total: price + (gst+pst), gst: gst, pst: pst};
		}
	}

	return function(elt, options = defaultOptions){
		var c = new Calculator(elt);
	};
});
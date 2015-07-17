/**
 * Load module calculator on DOM ready if calculator is required 
 */
document.addEventListener('DOMContentLoaded', function(event){
	/**
	 * Required modules
	 */
	requirejs.config({
		baseUrl: 'js/libs',
		paths: {
			corejs: 'corejs',
			jquery: 'jquery',
			modules: '../modules',
			components: '../components'
		}
	});

	/**
	 * Optional modules
	 */
	requirejs(['jquery'], function($){
		var $calculators = $('*[data-component="calculator"]');
		// Check if calculator component in required
		if($calculators.length) {
			// Load component
			requirejs(['components/calculator'], function(Calculator){
				// use component
				$calculators.each(function(i, elt){
					var calculator = Calculator($(elt));
				});
			});
		}
	});
});

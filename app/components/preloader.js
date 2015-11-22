(function(){
	'use strict';

	var mPreloader = function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/preloader.html'
		};
	}

	angular
		.module('survey')

		.directive('mPreloader', [mPreloader])

})();
(function(){
	'use strict';

	var registerForm = function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/registerform.html'
		}
	}

	angular
		.module('survey')

		.directive('registerForm', [registerForm])

})();
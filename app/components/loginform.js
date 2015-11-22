(function(){
	'use strict';

	var loginForm = function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/loginform.html'
		}
	}

	angular
		.module('survey')

		.directive('loginForm', [loginForm])

})();
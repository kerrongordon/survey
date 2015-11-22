(function(){
	'use strict';

	var loginCtrl = function($scope, $state, furl, loginService) {
		var login = this;
		var events = {};
		var err = false;
		var loading = false;


		login.loginUser = function() {
			if (this.email || this.pass) {
				$scope.err = false;
				$scope.loading = true;
				loginService.loginUser(this);
			} else {
				$scope.err = true;
				$scope.loading = false;
			}
		}
		

	}

	angular
		.module('survey')
		.controller('loginCtrl', [ '$scope', '$state', 'furl', 'loginService', loginCtrl ]);

})();

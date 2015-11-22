(function(){
	'use strict';

	var registerCtrl = function($scope, $state, furl, registerService) {
		var register = this;
		var events = {};
		var err = false;
		var loading = false;
		
		register.createUserAccount = function() {
			if (this.con_pass === this.pass ) {
				$scope.err = false;
				$scope.loading = true;
				registerService.createUserAccount(this);
			} else {
				$scope.err = true;
				$scope.loading = false;
			}
		}
		

	}

	angular
		.module('survey')
		.controller('registerCtrl', [ '$scope', '$state', 'furl', 'registerService', registerCtrl ]);

})();
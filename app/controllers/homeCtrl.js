(function(){
	'use strict';

	var homeCtrl = function($scope, $state, furl, $firebaseAuth, loginService) {
		var home = this;
		var ref = new Firebase(furl);
		var authData = ref.getAuth();

		var authObj = $firebaseAuth(ref);
		
		$scope.authData = authData
		
		console.log(authData);
		if (authData) {
		  	console.log("Authenticated user with uid:", authData.uid);
		}

	    home.logoutUser = function() {
	    	authObj.$unauth();
	    	$state.go('login');
	    }

	}

	angular
		.module('survey')
		.controller('homeCtrl', [ '$scope', '$state', 'furl', '$firebaseAuth', 'loginService', homeCtrl ])

})();

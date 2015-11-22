(function(){
	'use strict';

	var loginService = function($state, furl, $firebaseArray, $firebaseAuth, $timeout) {
		var loginService = {};
		var ref = new Firebase(furl);
		var users = $firebaseArray(ref);
		var userAuth =  {};
		

		return {
			loginUser: function(users) {
				console.log(users);

				var authObj = $firebaseAuth(ref);

				authObj.$authWithPassword({
					email: users.email,
				  	password: users.pass
				}).then(function(authData) {
				  console.log("User " + authData.uid + " created successfully!");
				  	if (authData) {
				  		$timeout(function() {
							$state.go('home');
						}, 2000);
						
						return authData;
					}
				});
			}
		}


	}

	angular
		.module('survey')
		.factory('loginService', [ '$state', 'furl', '$firebaseArray', '$firebaseAuth', '$timeout', loginService])

})();


(function(){
	'use strict';

	var registerService = function($state, furl, $firebaseArray, $firebaseAuth, $timeout) {
		var registerService = {};
		var ref = new Firebase(furl);
		var users = $firebaseArray(ref);
		

		return {
			createUserAccount: function(users) {
				console.log(users);

				var authObj = $firebaseAuth(ref);

				authObj.$createUser({
					email: users.email,
				  	password: users.pass
				}).then(function(userData) {
				  console.log("User " + userData.uid + " created successfully!");
				  	if (userData) {
				  		$timeout(function() {
							$state.go('login');
						}, 2000);
					}
				});
			}
		}

		//return createUserAccount();

	}

	angular
		.module('survey')
		.factory('registerService', [ '$state', 'furl', '$firebaseArray', '$firebaseAuth', '$timeout', registerService])

})();
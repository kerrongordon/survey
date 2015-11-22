(function(){
	'use strict';

	var accountCtrl = function($scope, $state, furlUsers, $firebaseArray, $firebaseObject, $timeout, $firebaseAuth) {
		var account = this;
		var ref = new Firebase(furlUsers);
		var authData = ref.getAuth();

		account.account = $firebaseObject(ref);

		account.name = $firebaseArray(ref);
		
		account.addUserName = function() {
			ref.push({
				name: account.name
			});
		};

		ref.on('value', function(snapshot) {
			$timeout(function() {
				console.log(snapshot.val());
				account.name = snapshot.val();
			});
		});
		

	}

	angular
		.module('survey')
		.controller('accountCtrl', [ '$scope', '$state', 'furlUsers', '$firebaseArray', '$firebaseObject', '$timeout', '$firebaseAuth', accountCtrl ]);

})();
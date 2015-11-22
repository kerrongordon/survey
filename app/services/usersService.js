(function(){
	'use strict';

	var usersService = function($state, furl, $firebaseArray, $firebaseAuth, $firebaseObject) {
		var usersService = {};
		var ref = new Firebase(furl+'/users');
		var usersName = $firebaseArray(ref);
		var syncObject = $firebaseObject(ref);
		var authData = ref.getAuth();		

		return {
			addUserName: function(usersName) {
				this.usersName.push({Name: usersName});
				console.log(usersName);
			}
		}

	}

	angular
		.module('survey')
		.factory('usersService', [ '$state', 'furl', '$firebaseArray', '$firebaseAuth', '$firebaseObject', usersService])

})();
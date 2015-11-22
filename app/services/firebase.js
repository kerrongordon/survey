(function(){
	'use strict';

	var firebaseData = function($firebaseAuth, furl) {
		var root = new Firebase(furl);

		var service = {
			root: root,
			users: 'kerron',
			emails: 'kgpsounds.com@gmail.com'
		};
		return service;
		console.log(service);
	}

	function login(user) {
      return firebaseAuthObject.$authWithPassword(user);
    }

	angular
		.module('survey')

		.factory('firebaseData', ['$firebaseAuth', 'furl', firebaseData])


})();


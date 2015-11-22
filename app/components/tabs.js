(function(){
	'use strict';

	var mTabs = function() {
		return {
			restrict: 'E'
		};
	}

	angular
		.module('survey')

		.directive('mTabs', [mTabs])

})();
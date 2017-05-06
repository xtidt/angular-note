(function() {
	'use strict';
	angular.module('tooltipDemo1', ['ngMaterial'])
		.controller('AppCtrl', function($scope) {
			$scope.demo = {};

			$scope.buttonFn = function(){
				alert(1);
			}
		});
})();
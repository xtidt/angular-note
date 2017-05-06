(function() {
	'use strict';
	angular.module('inputErrorsApp', ['ngMaterial', 'ngMessages'])
		.controller('AppCtrl', function($scope) {
			$scope.project = {
				description: 'Nuclear Missile Defense System',
				clientName: 'Tony',
				rate: 500
			};
		});
})();
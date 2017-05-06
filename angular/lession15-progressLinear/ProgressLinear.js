(function() {
	'use strict';
	angular.module('progressLinearDemo1', ['ngMaterial'])
		.config(function($mdThemingProvider) {})
		.controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
			$scope.mode = 'determinate';
			$scope.determinateValue = 0;
			$scope.determinateValue2 = 0;
			$interval(function() {
				$scope.determinateValue += 1;
				$scope.determinateValue2 += 1.5;
				if ($scope.determinateValue > 100) {
					$scope.determinateValue = 0;
					$scope.determinateValue2 = 0;
				}
			}, 100, 0, true);
			$interval(function() {
				$scope.mode = ($scope.mode == 'query' ? 'determinate' : 'query');
			}, 7200, 0, true);
		}]);
})();
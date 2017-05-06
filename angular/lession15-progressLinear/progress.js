(function() {
	'use strict';
	angular.module('progressCircularDemo1', ['ngMaterial'])
		.controller('AppCtrl', ['$scope', '$interval',
			function($scope, $interval) {
				$scope.mode = 'query';
				$scope.determinateValue = 0;
				$interval(function() {
					$scope.determinateValue += 1;
					if ($scope.determinateValue > 100) {
						$scope.determinateValue = 0;
					}
				}, 100, 0, true);
			}
		]);
})();
(function() {
	'use strict';
	angular.module('app', [])
		.controller('myController', ['$scope', '$parse', function($scope, $parse) {
			$scope.msg = "angular";

			$scope.clock = {
				now: new Date()
			};
			var updateClock = function() {
				$scope.clock.now = new Date()
			};
			setInterval(function() {
				$scope.$apply(updateClock);
			}, 1000);
			updateClock();


			$scope.person = {
				name: "Ari Lerner"
			};

			$scope.$watch('expr', function(newVal, oldVal, scope) {
				if (newVal !== oldVal) {
					// Let's set up our parseFun with the expression
					var parseFun = $parse(newVal);
					// Get the value of the parsed expression, set it on the scope for output
					scope.parsedExpr = parseFun(scope);
				}
			});
		}]);
})();
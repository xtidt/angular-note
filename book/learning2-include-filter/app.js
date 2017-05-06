(function() {
	'use strict';
	angular.module('app', [])
		.run(function($rootScope){
			$rootScope.template = 1;
		})
		.controller('myController', ['$scope', '$filter', function($scope, $filter) {
			$scope.msg = "angular";

			$scope.name = $filter('lowercase')('Ari');

			$scope.clock = new Date();

			$scope.today = new Date();

			$scope.template = 2;

			// $scope.users = [{
			// 	fName : 'aa0',
			// 	lName : 'ab0',
			// },{
			// 	fName : 'aa1',
			// 	lName : 'ab1',
			// }]
		}])
		.controller('template', function($scope){
			$scope.template = 3;
		});


})();
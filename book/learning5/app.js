(function() {
	'use strict';
	angular.module('app', [])
		.controller('myController', ['$scope', '$parse', function($scope, $parse) {
			$scope.name = "hello";

			$scope.array = [{
				name: '小米',
				price: '20',
				count: '2'
			}, {
				name: '三星',
				price: '50',
				count: '1'
			},{
				name: '华为',
				price: '30',
				count: '1'
			}]; // 表格数据



			$scope.delAction = function() {
				$scope.name = "world";
				$scope.array.splice(1,1);		
			}

			$scope.addAction = function(){
				$scope.array.push({
					name: 'HTC',
					price: '30',
					count: '1'
				});
			}

			$scope.sort = function(){
				$scope.array.sort(function(a,b){
					return a.price - b.price;
				});
			}

			$scope.del = function(index){
				$scope.array.splice(index,1);	
			}
		}]);
})();
(function() {
	'use strict';
	angular.module('listDemo1', ['ngMaterial'])
		.config(function($mdIconProvider) {
			$mdIconProvider
				.iconSet('communication', 'img/icons/60.jpeg', 24);
		})
		.controller('AppCtrl', function($scope) {
			var imagePath = 'img/60.jpeg';
			$scope.phones = [{
				type: 'Home',
				number: '(555) 251-1234'
			}, {
				type: 'Cell',
				number: '(555) 786-9841'
			}, ];
			$scope.todos = [{
				face: imagePath,
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			}, {
				face: imagePath,
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			}, {
				face: imagePath,
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			}, {
				face: imagePath,
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			}, {
				face: imagePath,
				what: 'Brunch this weekend?',
				who: 'Min Li Chan',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			}, ];
		});
})();
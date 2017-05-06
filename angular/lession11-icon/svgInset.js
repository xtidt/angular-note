(function() {
	'use strict';
	angular.module('appSvgIconSets', ['ngMaterial'])
		.controller('DemoCtrl', function($scope) {})
		.config(function($mdIconProvider) {
			$mdIconProvider
				.iconSet('social', 'img/icons/social-icons.svg', 24)
				.defaultIconSet('img/icons/core-icons.svg', 24);
		});
})();
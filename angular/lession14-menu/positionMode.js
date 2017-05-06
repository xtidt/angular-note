(function() {
	'use strict';
	angular.module('menuDemoPosition', ['ngMaterial'])
		.config(function($mdIconProvider) {
			$mdIconProvider
				.iconSet("call", 'img/icons/communication-icons.svg', 24)
				.iconSet("social", 'img/icons/social-icons.svg', 24);
		})
		.controller('PositionDemoCtrl', DemoCtrl);

	function DemoCtrl($mdDialog) {
		var vm = this;
		this.announceClick = function(index) {
			$mdDialog.show(
				$mdDialog.alert()
				.title('You clicked!')
				.content('You clicked the menu item at index ' + index)
				.ok('Nice')
			);
		};

		this.items = [1,2,3,4,5]
	}
})();
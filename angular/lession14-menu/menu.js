(function() {
	'use strict';
	angular.module('menuDemoBasic', ['ngMaterial'])
		.config(function($mdIconProvider) {
			$mdIconProvider
				.iconSet("call", 'img/icons/communication-icons.svg', 24)
				.iconSet("social", 'img/icons/social-icons.svg', 24);
		})
		.controller('BasicDemoCtrl', DemoCtrl);

	function DemoCtrl($mdDialog) {
		var vm = this;
		vm.notificationsEnabled = true;
		vm.toggleNotifications = function() {
			vm.notificationsEnabled = !vm.notificationsEnabled;
		};
		vm.redial = function(e) {
			$mdDialog.show(
				$mdDialog.alert()
				.title('Suddenly, a redial')
				.content('You just called someone back. They told you the most amazing story that has ever been told. Have a cookie.')
				.ok('That was easy')
			);
		};
		vm.checkVoicemail = function() {
			alert(13);
			// This never happens.
		};
	}
})();
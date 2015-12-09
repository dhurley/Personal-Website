var app = angular.module('personalWebsiteApp', ['ngMaterial'])
				.config(function($mdThemingProvider) {
 					$mdThemingProvider.theme('default').primaryPalette('grey').dark();
 				});
var app = angular.module('personalWebsiteApp', ['ngMaterial', 'smoothScroll', 'ngMdIcons'])
				.config(function($mdThemingProvider) {
 					$mdThemingProvider.theme('default').primaryPalette('grey').dark();
 				});
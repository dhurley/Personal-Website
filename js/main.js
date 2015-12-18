var app = angular.module('personalWebsiteApp', ['ngMaterial', 'smoothScroll'])
				.config(function($mdThemingProvider) {
 					$mdThemingProvider.theme('default').primaryPalette('grey').dark();
 				});
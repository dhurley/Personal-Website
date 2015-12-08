var appController = function($scope, $mdDialog, googlePlayStore) {
	var packageNames = ['net.djhurley.strandedinspace.android', 'net.djhurley.mindthegap.android'];
	$scope.apps = [];

	for (var i = 0; i < packageNames.length; i++) {
		googlePlayStore.getApp(packageNames[i])
					 	.then(function(data) { 
					 				$scope.apps.push(data); 
					 			},
					 		  function(reason) {
							     	console.log("Error occured fetching app data.");
							   	}
							);
	};

	$scope.showAlert = function(app, ev) {
    $mdDialog.show(
      		$mdDialog.alert()
        	.parent(angular.element(document.querySelector('#popupContainer')))
        	.clickOutsideToClose(true)
        	.title(app.name)
        	.textContent(app.description)
        	.ariaLabel(app.name)
        	.ok('ok!')
        	.targetEvent(ev)
    	);
	};
};

app.controller('appController', appController);
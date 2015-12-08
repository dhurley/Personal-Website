var appController = function($scope, googlePlayStore) {
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

};

app.controller('appController', appController);
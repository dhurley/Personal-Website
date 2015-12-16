var repoController = function($scope, $window, github) {
	github.getRepos('dhurley')
			.then(function(data) {
						$scope.repos = data; 
						for (var i = 0; i < $scope.repos.length; i++) {
							$scope.repos[i].created_at = $scope.repos[i].created_at.substr(0, 10);
						}
					},
				function(reason) {
						console.log("Error occured fetching repo data: " + reason);
					}
				);

	$scope.openGithubRepoTab = function(url){
		$window.open(url, '_blank');
	}
};

app.controller('repoController', repoController);
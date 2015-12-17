var repoController = function($scope, $window, github) {
	github.getRepos('dhurley')
			.then(function(data) {
						$scope.repos = data;
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
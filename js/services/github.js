var github = function($http){
	var getRepos = function(username){
		return $http.get('https://api.github.com/users/' + username + '/repos')
					.then(function(response){
						return response.data;
					});
	};

	return{
		getRepos: getRepos
	};
}

app.factory('github', github);
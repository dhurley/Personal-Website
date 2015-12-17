var googlePlayStore = function($http){
	var getApp = function(packageName){
		return $http.get('http://googleplay-jsapi.herokuapp.com/app/' + packageName)
					.then(function(response){
						response.data.viewUrl = response.data.viewUrl + packageName;
						return response.data;
					});
	};

	return{
		getApp: getApp
	};
}

app.factory('googlePlayStore', googlePlayStore);
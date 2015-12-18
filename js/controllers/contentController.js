var contentController = function($scope, smoothScroll) {
	$scope.goToContent = function(id){
		var element = document.getElementById(id);
      	smoothScroll(element);
	}
};

app.controller('contentController', contentController);
var contentController = function($scope, smoothScroll, $timeout, $mdSidenav) {
	$scope.goToContent = function(id){
		var element = document.getElementById(id);
      	smoothScroll(element);
	};

	$scope.goToContentAndCloseSidnav = function(id){
		$scope.closeSidnav();
		$scope.goToContent(id);
	}; 

	$scope.closeSidnav = function () {
      	$mdSidenav('left').close();
    };

    $scope.openSidnav = function () {
      	$mdSidenav('left').open();
    }
};

app.controller('contentController', contentController);
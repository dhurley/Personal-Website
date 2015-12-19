var contentController = function($scope, smoothScroll, $timeout, $mdSidenav, $mdMedia) {
	$scope.goToContent = function(id){
		var element = document.getElementById(id);
      	smoothScroll(element);
	};

	$scope.goToContentAndCloseSidnav = function(id){
		$scope.closeSidnav();
		$scope.goToContent(id);
	}; 

	$scope.closeSidnav = function () {
		if($mdMedia('xs')){
      		$mdSidenav('left').close();
      	}
    };

    $scope.openSidnav = function () {
    	if($mdMedia('xs')){
      		$mdSidenav('left').open();
      	}
    }
};

app.controller('contentController', contentController);
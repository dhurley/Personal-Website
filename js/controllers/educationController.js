var educationController = function($scope) {
	$scope.colleges = [
            {name : 'Dublin Insitute of Technology', degree : 'Master\'s degree in Applied Software Technology', grade : '1st Class Honours', timePeriod : '2012 - 2013'},
						{name : 'Trinity College Dublin', degree : 'Bachelor of Arts in Physics and Astrophysics', grade : '2nd Class Honours', timePeriod : '2008 - 2012'}
					];
	$scope.certificates = [
						{name : 'Oracle Certified Professional, Java SE 6 Programmer', year : '2013'},
						{name : 'IP Technology Certificate, Ericsson Internal', year : '2013'}
					];
};

app.controller('educationController', educationController);

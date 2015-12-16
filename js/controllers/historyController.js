var historyController = function($scope) {
	$scope.stages = [
						{name : 'Software Engineer - Ericsson (June 2013 - present)', description : 'I am currently working in an agile team developing a product that provides customers with a web-based user interface that they can use to monitor their mobile networks and to monitor the quality of service they are providing to their network subscribers.'},
						{name : 'Master\'s degree in Applied Software Technology - DIT (2012 - 2013)', description : 'In this course I was able to achieve a first class honors and I was exposed to the following technologies and topics: Java, JEE, JAX-RS, JPA, Hibernate, Ruby, MySQL, HTML5, CSS3, Backbone.js, JQuery, Networking, Linux Administration, Data Structures, Distributed Systems, Software Design & Testing.'},
						{name : 'Bachelor of Arts in Physics and Astrophysics - TCD (2008 - 2012)', description : 'In this course I was able to achieve a second class honors. This was mathematically intense course that constantly challenged me everyday and really helped me in the development of my strong problem solving skills. It was in my final year where I was introduced to my first programming language, C.'}
					];
};

app.controller('historyController', historyController);
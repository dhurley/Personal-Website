var skillsController = function($scope) {
	var skillsArray = ['Java', 'C#', 'Python', 'Bash', 'SQL', 'Javascript', 'HTML', 'CSS', 'JEE', 'JBoss', 'Git', 'Maven', 'Junit', 'Selenium', 'JPA', 'Hibernate', 'JAX-RS', 'MySQL', 'Backbone.js', 'JQuery', 'Apache Kafka', 'Apache Zookeeper', 'Apache Avro', 'Unity3D', 'Libgdx', 'Android SDK', 'Google Play Services', 'Ionic Framework', 'Angularjs', 'Angular Material', 'Bower'];
  $scope.skills = angular.copy(skillsArray);
};

app.controller('skillsController', skillsController);

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainController'
		})

		.when('/test1', {
			templateUrl: 'views/test1.html',
			controller: 'Test1Controller'
		})

		.when('/test2', {
			templateUrl: 'views/test2.html',
			controller: 'Test2Controller'	
		})
		.when('/dbtest', {
			templateUrl: 'views/dbtest.html',
			controller: 'DbTestController'	
		});
	$locationProvider.html5Mode(true);

}]);
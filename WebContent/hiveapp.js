var app = angular.module('hiveapp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/',{
		templateUrl: 'Home/views/home.html',
		controller: 'HomeController'	
	})

	.when('/aboutus',{
		templateUrl: 'Home/views/aboutus.html'
	})
	
	.when('/login',{
		templateUrl: 'Home/views/login.html'
	})
	
	.when('/contactus',{
		templateUrl: 'Home/views/contactus.html'
	})
	
	.when('/signup',{
		templateUrl: 'Home/views/signup.html'
	})
	
	.otherwise({
		redirectTo: '/'
	});
});
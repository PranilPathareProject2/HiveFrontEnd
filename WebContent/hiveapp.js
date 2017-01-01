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
	
	.when('/createblog',{
		templateUrl: 'Blog/views/create_blog.html',
		controller: 'BlogController'	
	})
	
	.when('/viewblogs',{
		templateUrl: 'Blog/views/view_blogs.html',
		controller: 'BlogController'
	})
	
	.when('/createforum',{
		templateUrl: 'Chat Forum/views/create_forum.html'
	})
	
	.when('/viewforums',{
		templateUrl: 'Chat Forum/views/view_forums.html'
	})
	
	.when('/friends',{
		templateUrl: 'Friend/views/my_friends.html'
	})
	
	.when('/onlinefriends',{
		templateUrl: 'Friend/views/online_friends.html'
	})
	
	.when('/viewjobs',{
		templateUrl: 'Job/views/view_jobs.html'
	})
	
	.when('/appliedjobs',{
		templateUrl: 'Job/views/applied_jobs.html'
	})
	
	.when('/viewbulletins',{
		templateUrl: 'Bulletin/views/view_bulletins.html'
	})
	
	.when('/viewevents',{
		templateUrl: 'Event/views/view_events.html'
	})
	
	.otherwise({
		redirectTo: '/'
	});
});
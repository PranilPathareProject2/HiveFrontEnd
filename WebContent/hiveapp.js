var app = angular.module('hiveapp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	
	.when('/',{
		templateUrl: 'Home/views/home.html',
		controller: 'HomeController'	
	})

	.when('/aboutus',{
		templateUrl: 'Home/views/aboutus.html'
	})
	
	.when('/contactus',{
		templateUrl: 'Home/views/contactus.html'
	})
	
	.when('/login',{
		templateUrl: 'User/views/login.html',
		controller: 'UserController'
	})
	
	.when('/signup',{
		templateUrl: 'User/views/signup.html',
		controller: 'UserController'
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
	
	.when('/manageusers',{
		templateUrl: 'Admin/views/manage_users.html',
		controller: 'UserController'
	})
	
	.otherwise({
		redirectTo: '/'
	});
});

app.run(function ($rootScope, $location, $cookieStore, $http){
	$rootScope.$on('$locationChangeStart', function(event, next, current){
		console.log('$locationChangeStart');
		
		var userPages = ["/createblog"];
		var adminPages = ["/manageusers"];
		
		var currentPage = $location.path();
		
		var isUserPage = $.inArray(currentPage, userPages)==0;
		var isAdminPage = $.inArray(currentPage, adminPages)==0;
		
		var loggedIn = $rootScope.loggedInUser;
		
			if(angular.equals(loggedIn, {}))
			{
				if(isUserPage || isAdminPage)
				{
					alert("Please login to do this operation");
					$location.path("/login");
				}	
			}
			else
			{
				if(isAdminPage && $rootScope.loggedInUserRole!='ROLE_ADMIN')
				{
					alert("You are not authorized to access this page");
					$location.path("/");
				}	
			}	
	});
	
	//To keep user logged in after page refresh
	$rootScope.loggedInUser = $cookieStore.get("loggedInUser");
	$rootScope.loggedInUserRole = $cookieStore.get("loggedInUserRole");
	if($rootScope.loggedInUser)
	{
		$http.defaults.headers.common['Authorization'] = 'Basic '+$rootScope.loggedInUser;
	}	
});
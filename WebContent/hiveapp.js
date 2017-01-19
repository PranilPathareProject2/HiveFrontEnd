var app = angular.module('hiveapp', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	
	//Home page related start
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
	
	.when('/userprofile',{
		templateUrl: 'User/views/user_profile.html',
		controller: 'UserController'
	})
	//Home page related end
	
	//Blog related start
	.when('/createblog',{
		templateUrl: 'Blog/views/create_blog.html',
		controller: 'BlogController'	
	})
	
	.when('/viewblogs',{
		templateUrl: 'Blog/views/view_blogs.html',
		controller: 'BlogController'
	})
	
	.when('/manageblogs',{
		templateUrl: 'Blog/views/manage_blogs.html',
		controller: 'BlogController'
	})
	//Blog related end
	
	.when('/createforum',{
		templateUrl: 'Chat Forum/views/create_forum.html'
	})
	
	.when('/viewforums',{
		templateUrl: 'Chat Forum/views/view_forums.html'
	})
	
	.when('/manageforums',{
		templateUrl: 'Chat Forum/views/manage_forums.html'
	})
	
	//Friend related starts
	.when('/friends',{
		templateUrl: 'Friend/views/my_friends.html'
	})
	
	.when('/findafriend',{
		templateUrl: 'Friend/views/find_a_friend.html'
	})
	
	.when('/onlinefriends',{
		templateUrl: 'Friend/views/online_friends.html'
	})
	
	.when('/friendrequests',{
		templateUrl: 'Friend/views/friend_requests.html'
	})
	//Friend related ends
	
	//Job related starts
	.when('/viewjobs',{
		templateUrl: 'Job/views/view_jobs.html'
	})
	
	.when('/managejobs',{
		templateUrl: 'Job/views/manage_jobs.html'
	})
	
	.when('/viewjobdetails',{
		templateUrl: 'Job/views/view_job_details.html'
	})
	
	.when('/appliedjobs',{
		templateUrl: 'Job/views/applied_jobs.html'
	})
	//Job related ends
	
	//bulletin related starts
	.when('/viewbulletins',{
		templateUrl: 'Bulletin/views/view_bulletins.html'
	})
	
	.when('/managebulletins',{
		templateUrl: 'Bulletin/views/manage_bulletins.html'
	})
	//bulletin related ends
	
	//event related starts
	.when('/viewevents',{
		templateUrl: 'Event/views/view_events.html'
	})
	
	.when('/manageevents',{
		templateUrl: 'Event/views/manage_events.html'
	})
	//event related ends
	
	//Admin related start
	.when('/manageusers',{
		templateUrl: 'Admin/views/manage_users.html',
		controller: 'UserController'
	})
	//Admin related end
	
	.otherwise({
		redirectTo: '/'
	});
});

app.run(function ($rootScope, $location, $cookies, $http){
	$rootScope.$on('$locationChangeStart', function(event, next, current){
		console.log('$locationChangeStart');
		
		var userPages = ["/createblog", "/userprofile", "/appliedjobs", "/createforum", "/friends", "/onlinefriends"];
		var adminPages = ["/manageusers", "/managejobs", "/managebulletins", "/manageevents", "/manageforums", "/manageblogs"];
		
		var currentPage = $location.path();
		
		var isUserPage = !($.inArray(currentPage, userPages)==-1);
		var isAdminPage = !($.inArray(currentPage, adminPages)==-1);
		
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
	$rootScope.loggedInUser = $cookies.get("loggedInUser");
	$rootScope.loggedInUserRole = $cookies.get("loggedInUserRole");
	$rootScope.userLoggedIn = $cookies.get('userLoggedIn');
	if($rootScope.loggedInUser)
	{
		$http.defaults.headers.common['Authorization'] = 'Basic '+$rootScope.loggedInUser;
	}	
});
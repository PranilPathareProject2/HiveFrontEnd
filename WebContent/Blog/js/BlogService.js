'use strict';

app.service('BlogService', [ '$http', '$q', '$rootScope', function($http, $q, $rootScope){
	console.log("In BlogService.....");
	var url = "http://localhost:8081/HiveBackEnd";
	
	return {
		allBlogsForAdmin: function() {
			return $http.get(url+'/listblogs').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		allBlogs: function() {
			return $http.get(url+'/acceptedblogs').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		allBlogsForUser: function() {
			return $http.get(url+'/listblogsbyuser').then(
				function(response){
					return response.data;
				},
				null
			);
		}
		
		/*addBlog: function(blog) {
			return $http.post(url+'/addblog/',blog).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		activateBlog: function(blog_id) {
			return $http.put(url+'/activateblog/'+blog_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		deactivateBlog: function(blog_id) {
			return $http.put(url+'/deactivateblog/'+blog_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		getBlog: function(blog_id) {
			return $http.get(url+'/getblog/'+blog_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		updateBlog: function(blog) {
			return $http.put(url+'/updateblog/',blog).then(
				function(response){
					return response.data;
				},
				null
			);
		}*/
	};
}]);
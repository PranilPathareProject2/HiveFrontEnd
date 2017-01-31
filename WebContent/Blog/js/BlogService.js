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
		},
		
		addBlogComment: function(blogcomment, blog_id) {
			return $http.post(url+'/addblogcomment/'+blog_id,blogcomment).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		allBlogCommentsOfBlog: function(blog_id) {
			return $http.get(url+'/listblogcommentsbyblog/'+blog_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		getBlogToDisplay: function(blog_id) {
			return $http.get(url+'/getblogtodisplay/'+blog_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		acceptBlog: function(blog_id) {
			return $http.put(url+'/acceptblog/'+blog_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		rejectBlog: function(blog_id, reason) {
			return $http.put(url+'/rejectblog/'+blog_id+'/'+reason).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		addBlog: function(blog) {
			return $http.post(url+'/addblog/',blog).then(
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
		}
	};
}]);
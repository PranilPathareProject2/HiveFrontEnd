app.controller('BlogController', [ '$scope', 'BlogService', '$rootScope', '$http', '$location', '$cookies', function($scope, BlogService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.blog = {"blog_id":"", "blog_title":"", "blog_description":"", "created_by":"", "published_on":"", "rejection_reason":"", "status":"", "errorCode":"", "errorMessage":""};
	//$rootScope.blogs = [];
	//self.allblogs = [];
	
	self.allBlogsForAdmin = function() {
		console.log("allBlogsForAdmin method in controller started");
		BlogService
			.allBlogsForAdmin()
			.then(
					function(bdata) {
						if(bdata[0].errorMessage != undefined)	
						{
							alert(bdata[0].errorMessage);
							$location.path("/manageblogs");
							delete $rootScope.blogs;
						}	
						else
						{	
							$rootScope.blogs = bdata;
							$location.path("/manageblogs");
						}	
					},
					function(errorresponse) {
						console.error("Error while fetching blogs for admin");
					}
			);
	};
	
	self.allBlogs = function() {
		console.log("allBlogs method in controller started");
		BlogService
			.allBlogs()
			.then(
					function(bdata) {
						$rootScope.allblogs = bdata;
						$location.path("/viewblogs");	
					},
					function(errorresponse) {
						console.error("Error while fetching blogs for all users");
					}
			);
	};
	
	self.allBlogsForUser = function() {
		console.log("allBlogsForUser method in controller started");
		BlogService
			.allBlogsForUser()
			.then(
					function(bdata) {
						if(bdata[0].errorMessage != undefined)	
						{
							alert(bdata[0].errorMessage);
							$location.path("/createblog");
							delete $rootScope.allblogsforuser;
						}	
						else
						{	
							$rootScope.allblogsforuser = bdata;
							$location.path("/createblog");
						}	
					},	
					function(errorresponse) {
						console.error("Error while fetching blogs for a specific user");
					}
			);
	};
	
	self.getBlogToDisplay = function(blog_id) {
		console.log("getBlogToDisplay method in controller started");
		BlogService
			.getBlogToDisplay(blog_id)
			.then(
					function(bldata) {
						$rootScope.selectedblog = bldata;
						$location.path("/selectedblog");
					},
					function(errorresponse) {
						console.error("Error while fetching a blog to display");
					}
			);
	};
	
	/*self.addBlog = function(blog) {
		console.log("addBlog method in controller started");
		BlogService
			.addBlog(blog)
			.then(
					function(bdata) {
						alert(bdata.errorMessage);
						self.allBlogsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while adding blog");
					}
			);
	};
	
	self.activateBlog = function(blog_id) {
		console.log("activateBlog method in controller started");
		BlogService
			.activateBlog(blog_id)
			.then(
					function(fdata) {
						self.allBlogsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while activating blog");
					}
			);
	};
	
	self.deactivateBlog = function(blog_id) {
		console.log("deactivateBlog method in controller started");
		BlogService
			.deactivateBlog(blog_id)
			.then(
					function(fdata) {
						self.allBlogsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while deactivating blog");
					}
			);
	};
	
	

	self.updateBlog = function(blog) {
		console.log("updateBlog method in controller started");
		BlogService
			.updateBlog(blog)
			.then(
					function(bldata) {
						alert(bldata.errorMessage);
						self.allBlogsForAdmin();
						$scope.showUpdateForm = false;
					},
					function(errorresponse) {
						console.error("Error while updating blog");
					}
			);
	};
	
	self.submitBlogFormToAdd = function() {
		console.log("submitBlogFormToAdd method in blog controller started");
		self.addBlog(self.blog);
		self.resetblogform();
		console.log("submitBlogFormToAdd method in blog controller ended");
	};
	
	self.submitBlogFormToUpdate = function() {
		console.log("submitBlogFormToUpdate method in blog controller started");
		self.updateBlog(self.blog);
		self.resetblogform();
		console.log("submitBlogFormToUpdate method in blog controller ended");
	};
	
	self.resetblogform = function() {
		console.log("reset method in blog controller started");
		self.blog = {"blog_id":"", "blog_title":"", "blog_description":"", "status":"", "errorCode":"", "errorMessage":""};
	};*/
	
}]);
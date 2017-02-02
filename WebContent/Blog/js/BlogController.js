app.controller('BlogController', [ '$scope', 'BlogService', '$rootScope', '$http', '$location', '$cookies', function($scope, BlogService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.blog = {"blog_id":"", "blog_title":"", "blog_description":"", "created_by":"", "published_on":"", "rejection_reason":"", "status":"", "errorCode":"", "errorMessage":""};
	self.blogcomment = {"blog_comment_id":"", "blog_id":"", "comment_by":"", "blog_comment":"", "blog_comment_date":"", "errorCode":"", "errorMessage":""};
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
		//console.log("$rootScope.loggedInUser"+$rootScope.loggedInUser);
		if ($rootScope.loggedInUser == undefined || angular.equals($rootScope.loggedInUser, {})) {
			alert("Please login to do this operation");
			$location.path("/login");
		}
		else
		{	
			BlogService
					.allBlogsForUser()
					.then(
							function(bdata) {

								if (bdata[0].errorMessage != undefined) {
									$location.path("/createblog");
									alert(bdata[0].errorMessage);
									delete $rootScope.allblogsforuser;
								} else {
									$rootScope.allblogsforuser = bdata;
									$location.path("/createblog");
								}
							},
							function(errorresponse) {
								console
										.error("Error while fetching blogs for a specific user");
							});
		}
	};
	
	self.getBlogToDisplay = function(blog_id) {
		console.log("getBlogToDisplay method in controller started");
		BlogService
			.getBlogToDisplay(blog_id)
			.then(
					function(bldata) {
						$rootScope.selectedblog = bldata;
						self.allBlogCommentsOfBlog(blog_id);
						$location.path("/selectedblog");
					},
					function(errorresponse) {
						console.error("Error while fetching a blog to display");
					}
			);
	};
	
	self.allBlogCommentsOfBlog = function(blog_id) {
		console.log("allBlogCommentsOfBlog method in controller started");
		BlogService
			.allBlogCommentsOfBlog(blog_id)
			.then(
					function(bdata) {
						$rootScope.allblogcommentsofblog = bdata;	
					},
					function(errorresponse) {
						console.error("Error while fetching blog comments");
					}
			);
	};
	
	self.submitBlogComment = function(blog_id) {
		console.log("submitBlogComment method in blog controller started");
		self.addBlogComment(self.blogcomment, blog_id);
		self.resetblogcommentform();
		console.log("submitBlogComment method in blog controller ended");
	};
	
	self.resetblogcommentform = function() {
		console.log("resetblogcommentform method in blog controller started");
		self.blogcomment = {"blog_comment_id":"", "blog_id":"", "comment_by":"", "blog_comment":"", "blog_comment_date":"", "errorCode":"", "errorMessage":""};
	};
	
	self.addBlogComment = function(blogcomment, blog_id) {
		console.log("addBlogComment method in controller started");
		BlogService
			.addBlogComment(blogcomment, blog_id)
			.then(
					function(bdata) {
						alert(bdata.errorMessage);
						self.allBlogCommentsOfBlog(blog_id);
					},
					function(errorresponse) {
						console.error("Error while adding blog comment");
					}
			);
	};
	
	self.acceptBlog = function(blog_id) {
		console.log("acceptBlog method in controller started");
		BlogService
			.acceptBlog(blog_id)
			.then(
					function(fdata) {
						self.allBlogsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while accepting blog");
					}
			);
	};
	
	self.rejectBlog = function(blog_id) {
		console.log("rejectBlog method in controller started");
		var reason = prompt("Enter the reason to reject the blog");
		BlogService
			.rejectBlog(blog_id, reason)
			.then(
					function(fdata) {
						self.allBlogsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while accepting blog");
					}
			);
	};
	
	self.addBlog = function(blog) {
		console.log("addBlog method in controller started");
		BlogService
			.addBlog(blog)
			.then(
					function(bdata) {
						alert(bdata.errorMessage);
						self.allBlogsForUser();
					},
					function(errorresponse) {
						console.error("Error while adding blog");
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
						self.allBlogsForUser();
						$scope.showUpdateForm = false;
					},
					function(errorresponse) {
						console.error("Error while updating blog");
					}
			);
	};
	
	self.getBlog = function(blog_id) {
		console.log("getBlog method in controller started");
		BlogService
			.getBlog(blog_id)
			.then(
					function(bldata) {
						self.blog = bldata;
						self.allBlogsForUser();
						$scope.showUpdateForm = true;
					},
					function(errorresponse) {
						console.error("Error while fetching a blog to update");
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
	};
	
}]);
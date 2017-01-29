app.controller('BlogController', [ '$scope', 'BlogService', '$rootScope', '$http', '$location', '$cookies', function($scope, BlogService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.blog = {"blog_id":"", "blog_title":"", "blog_description":"", "created_by":"", "published_on":"", "rejection_reason":"", "status":"", "errorCode":"", "errorMessage":""};
	//$rootScope.bulletins = [];
	//self.allbulletins = [];
	
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
		
	/*self.addBulletin = function(bulletin) {
		console.log("addBulletin method in controller started");
		BlogService
			.addBulletin(bulletin)
			.then(
					function(bdata) {
						alert(bdata.errorMessage);
						self.allBulletinsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while adding bulletin");
					}
			);
	};
	
	self.activateBulletin = function(bulletin_id) {
		console.log("activateBulletin method in controller started");
		BlogService
			.activateBulletin(bulletin_id)
			.then(
					function(fdata) {
						self.allBulletinsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while activating bulletin");
					}
			);
	};
	
	self.deactivateBulletin = function(bulletin_id) {
		console.log("deactivateBulletin method in controller started");
		BlogService
			.deactivateBulletin(bulletin_id)
			.then(
					function(fdata) {
						self.allBulletinsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while deactivating bulletin");
					}
			);
	};
	
	self.getBulletin = function(bulletin_id) {
		console.log("getBulletin method in controller started");
		BlogService
			.getBulletin(bulletin_id)
			.then(
					function(bldata) {
						
						if(bldata.errorMessage != undefined)	
						{
							alert(bldata.errorMessage);
						}	
						else
						{	
							self.bulletin = bldata;
							$scope.showUpdateForm = true;
						}
					},
					function(errorresponse) {
						console.error("Error while fetching bulletin");
					}
			);
	};

	self.updateBulletin = function(bulletin) {
		console.log("updateBulletin method in controller started");
		BlogService
			.updateBulletin(bulletin)
			.then(
					function(bldata) {
						alert(bldata.errorMessage);
						self.allBulletinsForAdmin();
						$scope.showUpdateForm = false;
					},
					function(errorresponse) {
						console.error("Error while updating bulletin");
					}
			);
	};
	
	self.submitBulletinFormToAdd = function() {
		console.log("submitBulletinFormToAdd method in bulletin controller started");
		self.addBulletin(self.bulletin);
		self.resetbulletinform();
		console.log("submitBulletinFormToAdd method in bulletin controller ended");
	};
	
	self.submitBulletinFormToUpdate = function() {
		console.log("submitBulletinFormToUpdate method in bulletin controller started");
		self.updateBulletin(self.bulletin);
		self.resetbulletinform();
		console.log("submitBulletinFormToUpdate method in bulletin controller ended");
	};
	
	self.resetbulletinform = function() {
		console.log("reset method in bulletin controller started");
		self.bulletin = {"bulletin_id":"", "bulletin_title":"", "bulletin_description":"", "status":"", "errorCode":"", "errorMessage":""};
	};*/
	
}]);
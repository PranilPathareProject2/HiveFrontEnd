app.controller('ForumController', [ '$scope', 'ForumService', '$rootScope', '$http', '$location', '$cookies', function($scope, ForumService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.chatforum = {"chat_forum_id":"", "chat_forum_name":"", "created_by":"", "created_date":"", "status":"", "rejection_reason":"", "errorCode":"", "errorMessage":""};
	
	self.addForum = function(chatforum) {
		console.log("addForum method in controller started");
		chatforum.created_by=$rootScope.loggedInUser;
		console.log("chatforum.created_by:"+chatforum.created_by);
		ForumService
			.addForum(chatforum)
			.then(
					function(cfdata) {
						self.chatforum.errorMessage = cfdata.errorMessage;
					},
					function(errorresponse) {
						console.error("Error while creating forum");
					}
			);
	};
	
	self.submitForumForm = function() {
		console.log("submitForumForm method in ChatForum controller started");
		self.addForum(self.chatforum);
		self.reset();
		console.log("submitForumForm method in ChatForum controller ended");
	};
	
	self.reset = function() {
		console.log("reset method in forum controller started");
		self.chatforum = {"chat_forum_id":"", "chat_forum_name":"", "created_by":"", "created_date":"", "status":"", "rejection_reason":"", "errorCode":"", "errorMessage":""};	
	};
}]);
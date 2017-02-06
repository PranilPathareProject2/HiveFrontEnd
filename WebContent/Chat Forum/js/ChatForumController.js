app.controller("ChatForumController", function($scope, ChatForumService) {
  $scope.messages = [];
  $scope.message = "";
  $scope.max = 140;
  var self = this;
  self.chatforum = {"chat_forum_id":"", "chat_forum_name":"", "created_by":"", "created_date":"", "status":"", "rejection_reason":"", "errorCode":"", "errorMessage":""};

  $scope.addMessage = function() {
	console.log("addMessage");  
    ChatForumService.send($scope.message);
    $scope.message = "";
  };

  ChatForumService.receive().then(null, null, function(message) {
	  console.log("receive");
	  $scope.messages.push(message);
  });
  
  	self.addForum = function(chatforum) {
		console.log("addForum method in controller started");
		ChatForumService
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
});
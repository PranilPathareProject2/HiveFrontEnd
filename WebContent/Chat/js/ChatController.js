app.controller("ChatController", function($scope, $location, $rootScope, ChatService) {
  $scope.messages = [];
  $scope.message = "";
  $scope.max = 140;
  
  $scope.chat = function(friend_username) {
	console.log("chat method called");
	console.log("friend_username"+friend_username);
	$rootScope.friendid = friend_username;
	$location.path("/chat");
	console.log("chat method ended");
  };
  
  $scope.sendMessage = function() {
	console.log("addMessage");  
    ChatService.send($scope.message, $rootScope.friendid);
    $scope.message = "";
  };

  ChatService.receiveMessage().then(null, null, function(message) {
	  console.log("receive");
	  if($rootScope.loggedInUser == message.friend_id)
	  {
		  $scope.messages.push(message);  
	  } 
  });
});
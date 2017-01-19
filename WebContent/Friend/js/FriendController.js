app.controller('FriendController', [ '$scope', 'FriendService', '$rootScope', '$http', '$location', '$cookies', function($scope, FriendService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.friend = {"friend_id":"", "user_username":"", "friend_username":"", "is_online":"", "status":"", "errorCode":"", "errorMessage":""};
	self.friends = [];
	self.getnewfriendrequests = [];
	self.getsentfriendrequests = [];
	self.onlinefriends = [];
	
	self.myFriends = function() {
		console.log("myFriends method in controller started");
		FriendService
			.myFriends()
			.then(
					function(fdata) {
						console.log("erorr = "+fdata.errorMessage)
						if(fdata.errorMessage == '')
						{
							self.friends = fdata;
						}	
						else
						{	
							alert(fdata.errorMessage);
						}	
					},
					function(errorresponse) {
						console.error("Error while fetching friends");
					}
			);
	};
	
	self.myFriends();
		
	self.addFriendRequest = function(friendusername) {
		console.log("addFriendRequest method in controller started");
		FriendService
			.addFriendRequest(friendusername)
			.then(
					function(fdata) {
						alert(fdata.errorMessage);
					},
					function(errorresponse) {
						console.error("Error while adding friend request");
					}
			);
	};
	
	self.acceptFriend = function(username) {
		console.log("acceptFriend method in controller started");
		FriendService
			.acceptFriend(username)
			.then(
					function(fdata) {
						self.getNewFriendRequests();
					},
					function(errorresponse) {
						console.error("Error while accepting friend");
					}
			);
	};
	
	self.rejectFriend = function(username) {
		console.log("rejectFriend method in controller started");
		FriendService
			.rejectFriend(username)
			.then(
					function(fdata) {
						self.getNewFriendRequests();
					},
					function(errorresponse) {
						console.error("Error while rejecting friend");
					}
			);
	};
	
	self.unfriend = function(username) {
		console.log("unfriend method in controller started");
		FriendService
			.unfriend(username)
			.then(
					function(fdata) {
						self.myFriends();
					},
					function(errorresponse) {
						console.error("Error while unfriending friend");
					}
			);
	};
	
	self.getNewFriendRequests = function() {
		console.log("getNewFriendRequests method in controller started");
		FriendService
			.getNewFriendRequests()
			.then(
					function(fdata) {
						self.getnewfriendrequests = fdata;
					},
					function(errorresponse) {
						console.error("Error while fetching new friend requests");
					}
			);
	};
	
	self.getNewFriendRequests();
	
	self.getSentFriendRequests = function() {
		console.log("getSentFriendRequests method in controller started");
		FriendService
			.getSentFriendRequests()
			.then(
					function(fdata) {
						self.getsentfriendrequests = fdata;
					},
					function(errorresponse) {
						console.error("Error while fetching sent friend requests");
					}
			);
	};
	
	self.getSentFriendRequests();
	
	self.getOnlineFriends = function() {
		console.log("getOnlineFriends method in controller started");
		FriendService
			.getOnlineFriends()
			.then(
					function(fdata) {
						self.onlinefriends = fdata;
					},
					function(errorresponse) {
						console.error("Error while fetching friends");
					}
			);
	};
	
	self.getOnlineFriends();
}]);
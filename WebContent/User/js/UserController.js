app.controller('UserController', [ '$scope', 'UserService', '$rootScope', '$http', function($scope, UserService, $rootScope, $http){
	var self = this;
	self.user = {"username":"", "firstname":"", "lastname":"", "date_of_birth":"", "email_id":"", "gender":"", "contact_no":"", "address":"", "state":"", "city":"", "pincode":"", "experience":"", "qualification":"", "reason":"", "status":"", "role":"", "password":"", "errorCode":"", "errorMessage":""};
	self.users = [];
	self.usercreds = [];
	
	self.allUsers = function() {
		console.log("allUsers method in controller started");
		UserService
			.allUsers()
			.then(
					function(d) {
						self.users = d;
					},
					function(errorresponse) {
						console.error("Error while fetching users");
					}
			);
	};
	
	self.manageUsers = function() {
		console.log("manageUsers method in controller started");
		UserService
			.manageUsers()
			.then(
					function(d) {
						self.usercreds = d;
					},
					function(errorresponse) {
						console.error("Error while fetching users");
					}
			);
	};
	
	self.manageUsers();
	
	self.addUser = function(user) {
		console.log("addUser method in controller started");
		UserService
			.addUser(user)
			.then(
					function(udata) {
						self.user = udata;
					},
					function(errorresponse) {
						console.error("Error while creating user for management");
					}
			);
	};
	
	self.submit = function() {
		console.log("submit method in controller started");
		self.addUser(self.user);
		console.log("submit method in controller ended");
		self.reset();
	};
	
	self.reset = function() {
		console.log("reset method in controller started");
		self.user = {"username":"", "firstname":"", "lastname":"", "date_of_birth":"", "email_id":"", "gender":"", "contact_no":"", "address":"", "state":"", "city":"", "pincode":"", "experience":"", "qualification":"", "reason":"", "status":"", "role":"", "password":"", "errorCode":"", "errorMessage":""};	
	};
	
	self.acceptUser = function(username) {
		console.log("acceptUser method in controller started");
		UserService
			.acceptUser(username)
			.then(
					function(udata) {
						self.manageUsers();
					},
					function(errorresponse) {
						console.error("Error while accepting user for management");
					}
			);
	};
	
	self.rejectUser = function(username) {
		console.log("rejectUser method in controller started");
		var reason = prompt("Enter the reason for rejection");
		UserService
			.rejectUser(username, reason)
			.then(
					function(udata) {
						self.manageUsers();
					},
					function(errorresponse) {
						console.error("Error while rejecting user for management");
					}
			);
	};
}]);
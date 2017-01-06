app.controller('UserController', [ '$scope', 'UserService', '$rootScope', '$http', function($scope, UserService, $rootScope, $http){
	var self = this;
	self.user = {"username":"", "firstname":"", "lastname":"", "date_of_birth":"", "email_id":"", "gender":"", "contact_no":"", "address":"", "state":"", "city":"", "pincode":"", "experience":"", "qualification":"", "reason":"", "status":"", "role":"", "password":"", "errorCode":"", "errorMessage":""};
	self.users = [];
	
	self.allUsers = function() {
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
	}
}]);
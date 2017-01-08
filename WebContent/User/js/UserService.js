'use strict';

app.service('UserService', [ '$http', '$q', '$rootScope', function($http, $q, $rootScope){
	console.log("In UserService.....");
	var url = "http://localhost:8081/HiveBackEnd";
	
	return {
		allUsers: function() {
			return $http.get(url+'/listusers').then(
				function(response){
					return response.data;
				},
				null
			);
		},
	
		addUser: function(user) {
			return $http.post(url+'/adduser',user).then(
				function(response){
					response.data.date_of_birth = new Date(response.data.date_of_birth);
					return response.data;
				},
				null
			);
		},
		
		manageUsers: function() {
			return $http.get(url+'/manageusers').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		acceptUser: function(username) {
			return $http.get(url+'/manageusers'+username).then(
				function(response){
					return response.data;
				},
				null
			);
		}
	};
}]);
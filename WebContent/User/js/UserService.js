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
			return $http.put(url+'/acceptuser/'+username).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		rejectUser: function(username, reason) {
			return $http.put(url+'/rejectuser/'+username+'/'+reason).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		makeAdmin: function(username) {
			return $http.put(url+'/makeadmin/'+username).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		authenticate: function(usercred) {
			return $http.post(url+'/authenticateuser',usercred).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		logout: function() {
			return $http.get(url+'/logout').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		updateUser: function(user) {
			return $http.put(url+'/updateuser',user).then(
				function(response){
					response.data.date_of_birth = new Date(response.data.date_of_birth);
					return response.data;
				},
				null
			);
		},
		
		userProfile: function(username) {
			return $http.get(url+'/getuser/'+username).then(
				function(response){
					console.log("Here i am  ****** "+ response.data);
					response.data.date_of_birth = new Date(response.data.date_of_birth);
					console.log("Here i am  2 ****** "+ response.data);
					return response.data;
				},
				null
			);
		}
	};
}]);
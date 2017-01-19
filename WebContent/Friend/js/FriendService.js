'use strict';

app.service('FriendService', [ '$http', '$q', '$rootScope', function($http, $q, $rootScope){
	console.log("In FriendService.....");
	var url = "http://localhost:8081/HiveBackEnd";
	
	return {
		myFriends: function() {
			return $http.get(url+'/myfriends').then(
				function(response){
					return response.data;
				},
				null
			);
		},
	
		getNewFriendRequests: function() {
			return $http.get(url+'/getnewfriendrequests').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		getSentFriendRequests: function() {
			return $http.get(url+'/getsentfriendrequests').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		addFriendRequest: function(friendusername) {
			return $http.post(url+'/addfriendrequest/'+friendusername).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		acceptFriend: function(username) {
			return $http.put(url+'/acceptfriendrequest/'+username).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		rejectFriend: function(username) {
			return $http.put(url+'/rejectfriendrequest/'+username).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		getOnlineFriends: function() {
			return $http.get(url+'/getonlinefriends').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		unfriend: function(username) {
			return $http.put(url+'/unfriend/'+username).then(
				function(response){
					return response.data;
				},
				null
			);
		}
	};
}]);
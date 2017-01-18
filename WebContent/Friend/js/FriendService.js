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
	
		addFriendRequest: function(friendusername) {
			return $http.post(url+'/addfriendrequest/'+friendusername).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		/*updateJob: function(job) {
			return $http.put(url+'/updatejob',job).then(
				function(response){
					response.data.posted_date = new Date(response.data.posted_date);
					return response.data;
				},
				null
			);
		},
		
		getMyAppliedJobs: function() {
			return $http.get(url+'/getmyappliedjobs').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		getAllJobApplications: function() {
			return $http.get(url+'/getalljobapplications').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		applyJob: function(job_id) {
			return $http.post(url+'/applyjob/'+job_id).then(
				function(response){
					console.log(response.data);
					return response.data;
				},
				null
			);
		},
		
		selectUser: function(job_id, username, reason) {
			return $http.put(url+'/selectuser/'+job_id+'/'+username+'/'+reason).then(
				function(response){
					console.log(response.data);
					return response.data;
				},
				null
			);
		},
		
		callForInterview: function(job_id, username, reason) {
			return $http.put(url+'/callforinterview/'+job_id+'/'+username+'/'+reason).then(
				function(response){
					console.log(response.data);
					return response.data;
				},
				null
			);
		},
		
		rejectJobApplication: function(job_id, username, reason) {
			return $http.put(url+'/rejectjobapplication/'+job_id+'/'+username+'/'+reason).then(
				function(response){
					console.log(response.data);
					return response.data;
				},
				null
			);
		},
		
		getJobDetails: function(job_id) {
			return $http.get(url+'/getjobdetails/'+job_id).then(
				function(response){
					response.data.posted_date = new Date(response.data.posted_date);
					console.log(response.data);
					return response.data;
				},
				null
			);
		}*/
	};
}]);
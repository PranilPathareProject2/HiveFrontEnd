'use strict';

app.service('JobService', [ '$http', '$q', '$rootScope', function($http, $q, $rootScope){
	console.log("In JobService.....");
	var url = "http://localhost:8081/HiveBackEnd";
	
	return {
		allJobs: function() {
			return $http.get(url+'/alljobs').then(
				function(response){
					return response.data;
				},
				null
			);
		},
	
		postJob: function(job) {
			return $http.post(url+'/postjob',job).then(
				function(response){
					response.data.posted_date = new Date(response.data.posted_date);
					return response.data;
				},
				null
			);
		},
		
		/*manageUsers: function() {
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
		},*/
		
		updateJob: function(job) {
			return $http.put(url+'/updatejob',job).then(
				function(response){
					response.data.posted_date = new Date(response.data.posted_date);
					return response.data;
				},
				null
			);
		},
		
		nextID: function() {
			return $http.get(url+'/nextjobid').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		getJobDetails: function(job_id) {
			return $http.get(url+'/getjobdetails/'+job_id).then(
				function(response){
					response.data.posted_date = new Date(response.data.posted_date);
					return response.data;
				},
				null
			);
		}
	};
}]);
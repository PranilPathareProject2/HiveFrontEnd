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
		
		updateJob: function(job) {
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
		
		applyJob: function(job_id) {
			return $http.post(url+'/applyjob/'+job_id).then(
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
		}
	};
}]);
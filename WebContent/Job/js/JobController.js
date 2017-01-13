app.controller('JobController', [ '$scope', 'JobService', '$rootScope', '$http', '$location', '$cookies', function($scope, JobService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.job = {"job_id":"", "job_title":"", "job_description":"", "posted_date":"", "job_designation":"", "job_salary":"", "job_location":"", "experience":"", "status":"", "errorCode":"", "errorMessage":""};
	self.jobapplication = {"job_applied_id":"", "job_id":"", "username":"", "applied_date":"", "rejection_reason":"", "status":"", "errorCode":"", "errorMessage":""};
	self.jobs = [];
	self.jobapplications = [];
	
	self.allJobs = function() {
		console.log("allJobs method in controller started");
		JobService
			.allJobs()
			.then(
					function(d) {
						self.jobs = d;
					},
					function(errorresponse) {
						console.error("Error while fetching jobs");
					}
			);
	};
	
	self.allJobs();
	
	/*self.manageUsers = function() {
		console.log("manageUsers method in controller started");
		JobService
			.manageUsers()
			.then(
					function(d) {
						self.usercreds = d;
					},
					function(errorresponse) {
						console.error("Error while fetching users for management");
					}
			);
	};
	
	self.manageUsers();*/
	
	self.postJob = function(job) {
		console.log("postJob method in controller started");
		JobService
			.postJob(job)
			.then(
					function(jdata) {
						self.job = jdata;
					},
					function(errorresponse) {
						console.error("Error while creating job");
					}
			);
	};
	
	self.submit = function() {
		console.log("submit method in job controller started");
		self.postJob(self.job);
		self.reset();
		console.log("submit method in job controller ended");
	};
	
	self.reset = function() {
		console.log("reset method in job controller started");
		self.job = {"job_id":"", "job_title":"", "job_description":"", "posted_date":"", "job_designation":"", "job_salary":"", "job_location":"", "experience":"", "status":"", "errorCode":"", "errorMessage":""};	
	};
	
	self.getJobDetails = function(job_id) {
		console.log("getJobDetails method in controller started");
		JobService
			.getJobDetails(job_id)
			.then(
					function(jdata) {
						self.job = jdata;
						$location.path("/viewjobdetails")
					},
					function(errorresponse) {
						console.error("Error while fetching job details");
					}
			);
	};
		
	self.updateJob = function(job) {
		console.log("updateJob method in controller started");
		JobService
			.updateJob(job)
			.then(
					function(jdata) {
						self.job = jdata;
					},
					function(errorresponse) {
						console.error("Error while updating job");
					}
			);
	};
	
	self.submitJobToUpdate = function() {
		console.log("submitJobToUpdate method in controller started");
		self.updateJob(self.job);
		self.reset();
		console.log("submitJobToUpdate method in controller ended");
	};
	
	self.nextID = function() {
		console.log("nextID method in controller started");
		JobService
			.nextID()
			.then(
					function(jdata) {
						self.job = jdata;
					},
					function(errorresponse) {
						console.error("Error while updating job");
					}
			);
	};
	
	self.nextID();
}]);
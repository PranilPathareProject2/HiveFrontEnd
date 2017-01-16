app.controller('JobController', [ '$scope', 'JobService', '$rootScope', '$http', '$location', '$cookies', function($scope, JobService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.job = {"job_id":"", "job_title":"", "job_description":"", "posted_date":"", "job_designation":"", "job_salary":"", "job_location":"", "experience":"", "status":"", "errorCode":"", "errorMessage":""};
	self.jobapplication = {"job_applied_id":"", "job_id":"", "username":"", "applied_date":"", "reason":"", "status":"", "errorCode":"", "errorMessage":""};
	self.jobs = [];
	self.jobapplications = [];
	self.alljobapplications = [];
	
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
						self.job.errorMessage = jdata.errorMessage;
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
						$rootScope.selectedjob = jdata;
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
	
	self.applyJob = function(job_id) {
		console.log("applyJob method in controller started");
		JobService
			.applyJob(job_id)
			.then(
					function(jdata) {
						alert(jdata.errorMessage);
					},
					function(errorresponse) {
						console.error("Error while applying for job");
					}
			);
	};
	
	self.getMyAppliedJobs = function() {
		console.log("getMyAppliedJobs method in controller started");
		JobService
			.getMyAppliedJobs()
			.then(
					function(d) {
						self.jobapplications = d;
					},
					function(errorresponse) {
						console.error("Error while fetching applied jobs");
					}
			);
	};
	
	self.getMyAppliedJobs();
	
	self.getAllJobApplications = function() {
		console.log("getAllJobApplications method in controller started");
		JobService
			.getAllJobApplications()
			.then(
					function(d) {
						self.alljobapplications = d;
					},
					function(errorresponse) {
						console.error("Error while fetching applied jobs");
					}
			);
	};
	
	self.getAllJobApplications();
	
	self.submitJobToUpdate = function() {
		console.log("submitJobToUpdate method in controller started");
		self.updateJob(self.job);
		self.reset();
		console.log("submitJobToUpdate method in controller ended");
	};
	
	self.selectUser = function(job_id, username) {
		console.log("selectUser method in controller started");
		var reason = prompt("Enter remarks");
		JobService
			.selectUser(job_id, username, reason)
			.then(
					function(jdata) {
						alert(jdata.errorMessage);
						self.getAllJobApplications();
					},
					function(errorresponse) {
						console.error("Error while selecting user for job");
					}
			);
	};
	
	self.callForInterview = function(job_id, username) {
		console.log("callForInterview method in controller started");
		var reason = prompt("Enter remarks");
		JobService
			.callForInterview(job_id, username, reason)
			.then(
					function(jdata) {
						alert(jdata.errorMessage);
						self.getAllJobApplications();
					},
					function(errorresponse) {
						console.error("Error while selecting user for job");
					}
			);
	};
	
	self.rejectJobApplication = function(job_id, username) {
		console.log("rejectJobApplication method in controller started");
		var reason = prompt("Enter remarks");
		JobService
			.rejectJobApplication(job_id, username, reason)
			.then(
					function(jdata) {
						alert(jdata.errorMessage);
						self.getAllJobApplications();
					},
					function(errorresponse) {
						console.error("Error while selecting user for job");
					}
			);
	};
}]);
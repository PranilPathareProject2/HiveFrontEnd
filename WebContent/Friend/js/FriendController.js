app.controller('FriendController', [ '$scope', 'FriendService', '$rootScope', '$http', '$location', '$cookies', function($scope, FriendService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.friend = {"friend_id":"", "user_username":"", "friend_username":"", "is_online":"", "status":"", "errorCode":"", "errorMessage":""};
	self.friends = [];
	
	self.myFriends = function() {
		console.log("myFriends method in controller started");
		FriendService
			.myFriends()
			.then(
					function(fdata) {
						self.friends = fdata;
					},
					function(errorresponse) {
						console.error("Error while fetching friends");
					}
			);
	};
	
	self.myFriends();
		
	self.addFriendRequest = function(friendusername) {
		console.log("addFriendRequest method in controller started");
		FriendService
			.addFriendRequest(friendusername)
			.then(
					function(fdata) {
						alert(fdata.errorMessage);
					},
					function(errorresponse) {
						console.error("Error while adding friend request");
					}
			);
	};
	
	/*self.submit = function() {
		console.log("submit method in job controller started");
		self.postJob(self.job);
		self.reset();
		console.log("submit method in job controller ended");
	};
	
	self.reset = function() {
		console.log("reset method in job controller started");
		self.job = {"job_id":"", "job_title":"", "job_description":"", "posted_date":"", "job_designation":"", "job_salary":"", "job_location":"", "experience":"", "status":"", "errorCode":"", "errorMessage":""};	
	};*/
	
	/*self.getJobDetails = function(job_id) {
		console.log("getJobDetails method in controller started");
		FriendService
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
		FriendService
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
		FriendService
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
		FriendService
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
		FriendService
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
		FriendService
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
		FriendService
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
		FriendService
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
	};*/
}]);
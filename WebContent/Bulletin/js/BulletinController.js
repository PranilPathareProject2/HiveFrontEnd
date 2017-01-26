app.controller('BulletinController', [ '$scope', 'BulletinService', '$rootScope', '$http', '$location', '$cookies', function($scope, BulletinService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.bulletin = {"bulletin_id":"", "bulletin_title":"", "bulletin_description":"", "status":"", "errorCode":"", "errorMessage":""};
	//$rootScope.bulletins = [];
	//self.allbulletins = [];
	
	self.allBulletinsForAdmin = function() {
		console.log("allBulletinsForAdmin method in controller started");
		BulletinService
			.allBulletinsForAdmin()
			.then(
					function(bldata) {
						if(bldata[0].errorMessage != undefined)	
						{
							alert(bldata[0].errorMessage);
							$location.path("/managebulletins");
							delete $rootScope.bulletins;
						}	
						else
						{	
							$rootScope.bulletins = bldata;
							$location.path("/managebulletins");
						}	
					},
					function(errorresponse) {
						console.error("Error while fetching bulletins");
					}
			);
	};
	
	self.allBulletins = function() {
		console.log("allBulletins method in controller started");
		BulletinService
			.allBulletins()
			.then(
					function(bldata) {
						$rootScope.allbulletins = bldata;
						$location.path("/viewbulletins");	
					},
					function(errorresponse) {
						console.error("Error while fetching bulletins");
					}
			);
	};
		
	self.addBulletin = function(bulletin) {
		console.log("addBulletin method in controller started");
		BulletinService
			.addBulletin(bulletin)
			.then(
					function(bdata) {
						alert(bdata.errorMessage);
						self.allBulletinsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while adding bulletin");
					}
			);
	};
	
	self.activateBulletin = function(bulletin_id) {
		console.log("activateBulletin method in controller started");
		BulletinService
			.activateBulletin(bulletin_id)
			.then(
					function(fdata) {
						self.allBulletinsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while activating bulletin");
					}
			);
	};
	
	self.deactivateBulletin = function(bulletin_id) {
		console.log("deactivateBulletin method in controller started");
		BulletinService
			.deactivateBulletin(bulletin_id)
			.then(
					function(fdata) {
						self.allBulletinsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while deactivating bulletin");
					}
			);
	};
	
	self.getBulletin = function(bulletin_id) {
		console.log("getBulletin method in controller started");
		BulletinService
			.getBulletin(bulletin_id)
			.then(
					function(bldata) {
						
						if(bldata.errorMessage != undefined)	
						{
							alert(bldata.errorMessage);
						}	
						else
						{	
							self.bulletin = bldata;
							$scope.showUpdateForm = true;
						}
					},
					function(errorresponse) {
						console.error("Error while fetching bulletin");
					}
			);
	};

	self.updateBulletin = function(bulletin) {
		console.log("updateBulletin method in controller started");
		BulletinService
			.updateBulletin(bulletin)
			.then(
					function(bldata) {
						alert(bldata.errorMessage);
						self.allBulletinsForAdmin();
						$scope.showUpdateForm = false;
					},
					function(errorresponse) {
						console.error("Error while updating bulletin");
					}
			);
	};
	
	self.submitBulletinFormToAdd = function() {
		console.log("submitBulletinFormToAdd method in bulletin controller started");
		self.addBulletin(self.bulletin);
		self.resetbulletinform();
		console.log("submitBulletinFormToAdd method in bulletin controller ended");
	};
	
	self.submitBulletinFormToUpdate = function() {
		console.log("submitBulletinFormToUpdate method in bulletin controller started");
		self.updateBulletin(self.bulletin);
		self.resetbulletinform();
		console.log("submitBulletinFormToUpdate method in bulletin controller ended");
	};
	
	self.resetbulletinform = function() {
		console.log("reset method in bulletin controller started");
		self.bulletin = {"bulletin_id":"", "bulletin_title":"", "bulletin_description":"", "status":"", "errorCode":"", "errorMessage":""};
	};
	
}]);
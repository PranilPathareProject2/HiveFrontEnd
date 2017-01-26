app.controller('EventController', [ '$scope', 'EventService', '$rootScope', '$http', '$location', '$cookies', function($scope, EventService, $rootScope, $http, $location, $cookies){
	var self = this;
	self.event = {"event_id":"", "event_name":"", "event_description":"", "event_date":"", "event_time":"", "event_venue":"", "status":"", "errorCode":"", "errorMessage":""};
	
	self.allEventsForAdmin = function() {
		console.log("allEventsForAdmin method in controller started");
		EventService
			.allEventsForAdmin()
			.then(
					function(bldata) {
						if(bldata[0].errorMessage != undefined)	
						{
							alert(bldata[0].errorMessage);
							$location.path("/manageevents");
							delete $rootScope.events;
						}	
						else
						{	
							$rootScope.events = bldata;
							$location.path("/manageevents");
						}	
					},
					function(errorresponse) {
						console.error("Error while fetching events");
					}
			);
	};
	
	self.allEvents = function() {
		console.log("allEvents method in controller started");
		EventService
			.allEvents()
			.then(
					function(bldata) {
						$rootScope.allevents = bldata;
						$location.path("/viewevents");	
					},
					function(errorresponse) {
						console.error("Error while fetching events");
					}
			);
	};
		
	self.addEvent = function(event) {
		console.log("addEvent method in controller started");
		EventService
			.addEvent(event)
			.then(
					function(bdata) {
						alert(bdata.errorMessage);
						self.allEventsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while adding event");
					}
			);
	};
	
	self.activateEvent = function(event_id) {
		console.log("activateEvent method in controller started");
		EventService
			.activateEvent(event_id)
			.then(
					function(fdata) {
						self.allEventsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while activating event");
					}
			);
	};
	
	self.deactivateEvent = function(event_id) {
		console.log("deactivateEvent method in controller started");
		EventService
			.deactivateEvent(event_id)
			.then(
					function(fdata) {
						self.allEventsForAdmin();
					},
					function(errorresponse) {
						console.error("Error while deactivating event");
					}
			);
	};
	
	self.getEvent = function(event_id) {
		console.log("getEvent method in controller started");
		EventService
			.getEvent(event_id)
			.then(
					function(bldata) {
						
						if(bldata.errorMessage != undefined)	
						{
							alert(bldata.errorMessage);
						}	
						else
						{	
							self.event = bldata;
							$scope.showUpdateForm = true;
						}
					},
					function(errorresponse) {
						console.error("Error while fetching event");
					}
			);
	};

	self.updateEvent = function(event) {
		console.log("updateEvent method in controller started");
		EventService
			.updateEvent(event)
			.then(
					function(bldata) {
						alert(bldata.errorMessage);
						self.allEventsForAdmin();
						$scope.showUpdateForm = false;
					},
					function(errorresponse) {
						console.error("Error while updating event");
					}
			);
	};
	
	self.submitEventFormToAdd = function() {
		console.log("submitEventFormToAdd method in event controller started");
		self.addEvent(self.event);
		self.reseteventform();
		console.log("submitEventFormToAdd method in event controller ended");
	};
	
	self.submitEventFormToUpdate = function() {
		console.log("submitEventFormToUpdate method in event controller started");
		self.updateEvent(self.event);
		self.reseteventform();
		console.log("submitEventFormToUpdate method in event controller ended");
	};
	
	self.reseteventform = function() {
		console.log("reset method in event controller started");
		self.event = {"event_id":"", "event_name":"", "event_description":"", "event_date":"", "event_time":"", "event_venue":"", "status":"", "errorCode":"", "errorMessage":""};
	};
	
}]);
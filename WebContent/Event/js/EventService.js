'use strict';

app.service('EventService', [ '$http', '$q', '$rootScope', function($http, $q, $rootScope){
	console.log("In EventService.....");
	var url = "http://localhost:8081/HiveBackEnd";
	
	return {
		allEventsForAdmin: function() {
			return $http.get(url+'/listevents').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		allEvents: function() {
			return $http.get(url+'/activeevents').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		addEvent: function(event) {
			return $http.post(url+'/addevent/',event).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		activateEvent: function(event_id) {
			return $http.put(url+'/activateevent/'+event_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		deactivateEvent: function(event_id) {
			return $http.put(url+'/deactivateevent/'+event_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		getEvent: function(event_id) {
			return $http.get(url+'/getevent/'+event_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		updateEvent: function(event) {
			return $http.put(url+'/updateevent/',event).then(
				function(response){
					return response.data;
				},
				null
			);
		}
	};
}]);
'use strict';

app.service('BulletinService', [ '$http', '$q', '$rootScope', function($http, $q, $rootScope){
	console.log("In BulletinService.....");
	var url = "http://localhost:8081/HiveBackEnd";
	
	return {
		allBulletinsForAdmin: function() {
			return $http.get(url+'/listbulletins').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		allBulletins: function() {
			return $http.get(url+'/activebulletins').then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		addBulletin: function(bulletin) {
			return $http.post(url+'/addbulletin/',bulletin).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		activateBulletin: function(bulletin_id) {
			return $http.put(url+'/activatebulletin/'+bulletin_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		deactivateBulletin: function(bulletin_id) {
			return $http.put(url+'/deactivatebulletin/'+bulletin_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		getBulletin: function(bulletin_id) {
			return $http.get(url+'/getbulletin/'+bulletin_id).then(
				function(response){
					return response.data;
				},
				null
			);
		},
		
		updateBulletin: function(bulletin) {
			return $http.put(url+'/updatebulletin/',bulletin).then(
				function(response){
					return response.data;
				},
				null
			);
		}
	};
}]);
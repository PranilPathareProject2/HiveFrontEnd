'use strict';

app.service('ForumService', [ '$http', '$q', '$rootScope', function($http, $q, $rootScope){
	console.log("In ForumService.....");
	var url = "http://localhost:8081/HiveBackEnd";
	
	return {
		addForum: function(chatforum) {
			return $http.post(url+'/addforum',chatforum).then(
				function(response){
					response.data.created_date = new Date(response.data.created_date);
					return response.data;
				},
				null
			);
		}
	};
}]);
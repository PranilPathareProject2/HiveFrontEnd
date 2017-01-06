'use strict';

app.service('UserService', [ '$http', '$q', '$rootScope', function($http, $q, $rootScope){
	console.log("In UserService.....");
	var url = "http://localhost:8081/HiveBackEnd";
	
	return {
		allUsers: function() {
			return $http.get(url+'/listusers').then(
				function(response){
					return response.data;
				},
				null
			);
		}
	};
}]);
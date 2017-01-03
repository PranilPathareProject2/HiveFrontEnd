app.controller("HomeController", function($scope, $http) {
	console.log("In home cotroller");
	$scope.message="This is from home controller";
	
	$http.get('http://localhost:8081/HiveBackEnd/listusers').then(function (response){
		$scope.users = response.data;
	});
});
function AppCtrl($scope, $http) {
	console.log('Hello world from controller');
	
	$http.get('/contactList').success(function(res) {
		console.log('I got the data I requested');
		$scope.contactList = res;
	});
}
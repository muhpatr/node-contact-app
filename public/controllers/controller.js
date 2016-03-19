function AppCtrl($scope, $http) {
	console.log('Hello world from controller');
	
	var refresh = function() {
		$http.get('/contactList').success(function(res) {
			console.log('I got the data I requested');
			$scope.contactList = res;
			$scope.contact = "";
		});
	};
	
	refresh();
	
	$scope.addContact = function() {
		console.log($scope.contact);
		$scope.contact._id = "";
		$http.post('/contactList', $scope.contact).success(function(res) {
			console.log(res);
			refresh();
		});
	};
	
	$scope.remove = function(id) {
		console.log(id);
		$http.delete('/contactList/' + id).success(function(res) {
			refresh();
		});
	};
	
	$scope.edit = function(id) {
		console.log(id);
		$http.get('/contactList/' + id).success(function(res) {
			$scope.contact = res;
		});
	};
	
	$scope.update = function() {
		console.log($scope.contact._id);
		$http.put('/contactList/' + $scope.contact._id, $scope.contact).success(function(res) {
			refresh();
		});
	};
	
	$scope.deselect = function() {
		$scope.contact = "";
	};
}
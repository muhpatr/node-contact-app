function AppCtrl($scope) {
	console.log('Hello world from controller');
	
	person1 = {
		name: 'Patr',
		email: 'muh@patr.com',
		number: '(021) 333-3333'
	};
	
	person2 = {
		name: 'John',
		email: 'terry@john.com',
		number: '(021) 262-2626'
	};
	
	person3 = {
		name: 'Costa',
		email: 'diego@costa.com',
		number: '(021) 191-1919'
	};
	
	var contactList = [person1, person2, person3];
	$scope.contactList = contactList;
}
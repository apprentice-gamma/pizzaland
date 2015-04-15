angular.module("pizzaland").controller("addySearchController", addySearchController); 
function addySearchController($http, $scope, householdFactory){
	var vm = this;
	vm.street = "";
	vm.city = "";
	vm.zip = "";
	vm.state = "";
	vm.addresses = householdFactory.addresses;

	householdFactory.getDataFromJson();

	$scope.$watchCollection(householdFactory.addresses, function(newVal, oldVal){
		console.log(newVal, oldVal);
	})


	console.log(vm.addresses);
}


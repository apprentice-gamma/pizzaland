angular.module("pizzaland").controller("addySearchController", addySearchController); 
function addySearchController($http, $scope, householdFactory){
	var vm = this;
	vm.street = "";
	vm.city = "";
	vm.zip = "";
	vm.state = "";
	
	vm.households = householdFactory;
	
	//vm.households.getDataFromJson();
	
	console.log(vm.households);

}


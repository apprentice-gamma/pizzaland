angular.module("pizzaland").controller("addySearchController", addySearchController); 
function addySearchController($http, householdFactory){
	var vm = this;
	vm.street = "";
	vm.city = "";
	vm.zip = "";
	vm.state = "";
	
	householdFactory.getDataFromJson();

	vm.addresses = householdFactory.addresses;

	console.log(vm.addresses);
}


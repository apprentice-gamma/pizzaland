angular.module("pizzaland").controller("addySearchController", addySearchController); 
function addySearchController($http, $scope, householdFactory){
	var vm = this;
	vm.street = "";
	vm.city = "";
	vm.zip = "";
	vm.state = "";
	
	vm.currentPage = 1;
	vm.itemsPerPage = 5;
	
	vm.households = householdFactory;
		
	console.log(vm.households);

}


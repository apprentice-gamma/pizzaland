angular.module("pizzaland").controller("orderFormController", orderFormController); 
function orderFormController($http, householdFactory, $routeParams){
	var vm = this;
	vm.message = "This is the order form";
	vm.houseID = $routeParams.id;
	vm.households = householdFactory;
	vm.houseObject = houseFinder();
	
	console.log(vm.houseObject);
	
	function houseFinder(){
		for (var i = 0; i < householdFactory.addresses.length; i++) {
			if (householdFactory.addresses[i]._id === vm.houseID) {
				return householdFactory.addresses[i];
			}
		}
		return false;
	}

}
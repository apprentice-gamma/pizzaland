angular.module("pizzaland").controller("orderFormController", orderFormController); 
function orderFormController($http, householdFactory, $routeParams){
	var vm = this;
	vm.message = "This is the order form";
	vm.houseID = $routeParams.id;
	vm.householdFactory = householdFactory;
	vm.houseObject = houseFinder();
	console.log(vm.houseObject);

	function houseFinder(){
		console.log(householdFactory.addresses.length);
		for (var i = 0; i < householdFactory.addresses.length; i++) {
			console.log(householdFactory.addresses[i]._id);
			if (householdFactory.addresses[i]._id === vm.houseID) {
				return householdFactory.addresses[i];
			}
		}
		return false;
	}

}
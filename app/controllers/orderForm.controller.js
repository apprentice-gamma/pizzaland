angular.module("pizzaland").controller("orderFormController", orderFormController); 
function orderFormController($http, householdFactory, $routeParams, $location, invoiceFactory){
	var vm = this;
	vm.message = "This is the order form";
	vm.houseID = $routeParams.id;
	vm.households = householdFactory;
	vm.houseObject = houseFinder();
	vm.resident = vm.houseObject.residents[0];
	vm.submitOrder = submitOrder;
	vm.resetForm = resetForm;
	vm.quantity = 0;

	console.log(vm.houseObject);
	
	function houseFinder(){
		for (var i = 0; i < householdFactory.addresses.length; i++) {
			if (householdFactory.addresses[i]._id === vm.houseID) {
				return householdFactory.addresses[i];
			}
		}
		return false;
	}

	function submitOrder(){
		invoiceFactory.quantity = vm.quantity;
		invoiceFactory.resident = vm.resident;
		invoiceFactory.houseObject = vm.houseObject;
		$location.url('/invoice');
	}

	function resetForm(){
		vm.quantity = 0;
		vm.resident = vm.houseObject.residents[0];
	}
}
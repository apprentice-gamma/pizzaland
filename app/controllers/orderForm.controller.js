angular.module("pizzaland").controller("orderFormController", orderFormController); 
function orderFormController($http, householdFactory, $routeParams, $location, invoiceFactory){
	var vm = this;
	vm.message = "This is the order form";
	vm.houseID = $routeParams.id;
	vm.households = householdFactory;
	vm.houseObject = houseFinder();
	vm.resident = vm.houseObject.residents[0];
	vm.submitOrder = submitOrder;
	vm.quantity = 0;
	vm.validName = validName;

	console.log(vm.houseObject);

	// $scope.myFilter = function(user) {
 //  		return /^c5$/.test(user.type);
	// }

	function validName(resident){
		return /^[a-z ,.'-]+$/i.test(resident.first_name);
	}
	
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

}
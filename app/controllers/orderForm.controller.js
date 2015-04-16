angular.module("pizzaland").controller("orderFormController", orderFormController); 
function orderFormController($http, householdFactory, $routeParams){
	var vm = this;
	vm.message = "This is the order form";
	vm.houseID = $routeParams.id;
	

}
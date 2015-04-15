angular.module("pizzaland").controller("orderFormController", orderFormController); 
function orderFormController($http, householdFactory){
	var vm = this;
	vm.message = "This is the order form";
}
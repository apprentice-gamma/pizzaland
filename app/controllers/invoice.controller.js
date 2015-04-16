angular.module("pizzaland").controller("invoiceController", invoiceController); 
function invoiceController($http, householdFactory){
	var vm = this;
	vm.message = "This is the invoice";
}
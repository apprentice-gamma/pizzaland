angular.module("pizzaland").controller("invoiceController", invoiceController); 
function invoiceController($http, householdFactory, invoiceFactory){
	var vm = this;
	vm.message = "This is the invoice";
	
	vm.invoiceFactory = invoiceFactory;

	console.log(invoiceFactory.quantity);
}
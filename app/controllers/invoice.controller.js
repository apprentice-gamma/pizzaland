angular.module("pizzaland").controller("invoiceController", invoiceController); 
function invoiceController($http, householdFactory, invoiceFactory){
	var vm = this;
	vm.noEmailMessage = "snarky message";
	vm.validEmail = validEmail;
	vm.invoiceFactory = invoiceFactory;

	function validEmail(){
		return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(invoiceFactory.resident.email);
	}
}
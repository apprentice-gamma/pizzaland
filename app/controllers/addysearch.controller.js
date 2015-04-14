angular.module("pizzaland").controller("addySearchController", addySearchController); 
function addySearchController(){

	var vm = this;
	vm.message = "HOLA!";
	vm.street = "";
	vm.city = "";
	vm.zip = "";
	vm.addresses = [];
	vm.addAddress = addAddress;
	function addAddress(){
		var address = {
			"street":vm.street,
			"city":vm.city,
			"zip":vm.zip
		};
		vm.addresses.push(address);
	}
}


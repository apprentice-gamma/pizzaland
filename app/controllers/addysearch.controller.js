angular.module("pizzaland").controller("addySearchController", addySearchController); 
function addySearchController($http){
	var vm = this;
	vm.message = "HOLA!";
	vm.street = "";
	vm.city = "";
	vm.zip = "";
	vm.addresses = [];
	vm.addAddress = addAddress;
	vm.demoData = {};
	$http.get('./data/demo-data.json').
    success(function(data, status, headers, config) {
      vm.demoData = data;
      console.log(vm.demoData);
    }).
    error(function(data, status, headers, config) {
      // log error
    });

	function addAddress(){
		var address = {
			"street":vm.street,
			"city":vm.city,
			"zip":vm.zip
		};
		vm.addresses.push(address);
	}
}


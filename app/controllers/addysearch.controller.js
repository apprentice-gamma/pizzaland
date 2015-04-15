angular.module("pizzaland").controller("addySearchController", addySearchController); 
function addySearchController($http, householdFactory){
	var vm = this;
	vm.street = "";
	vm.city = "";
	vm.zip = "";
	vm.state = "";
	vm.addresses = undefined;
	
	//Retreive JSON data and handle ASYNC callbacks in this Controller
	householdFactory.getDataFromJson()
        .success(function(data, status, headers, config) {
        	//
        	vm.addresses = data[0]["Owned Households"];
        	householdFactory.addresses = data[0]["Owned Households"];
        	//console.log(vm.addresses, householdFactory.addresses);
        })
		.error(function(data, status, headers, config) {
			// log error
			console.log("An error occured in reading JSON data");
		});


	console.log(vm.addresses);
}


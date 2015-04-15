angular.module("pizzaland").controller("displayController", displayController); 
function displayController($http, $location, householdFactory){
	var vm = this;
	vm.showJumbotron = ($location.path() === '/');
	console.log($location.path());
}
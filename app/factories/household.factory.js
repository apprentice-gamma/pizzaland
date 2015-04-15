(function() {
    angular.module('pizzaland').factory('householdFactory', householdFactory);

    function householdFactory($http) {
        var factory = {};
        	//properties
        	factory.addresses = [];
        	
        	//methods
        	factory.getDataFromJson = getDataFromJson;

        	//method declarations
	        function getDataFromJson(){
	        	return $http.get('./data/demo-data.json');
			}
        return factory;
    }
})();
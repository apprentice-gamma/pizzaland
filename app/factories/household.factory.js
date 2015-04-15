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
	        	$http.get('./data/demo-data.json').
	            success(function(data, status, headers, config) {	              
	              factory.addresses = data[0]["Owned Households"];
	              console.log(factory.addresses);
	            }).
    			error(function(data, status, headers, config) {
     				console.log("There was an error retrieving JSON data");// log error
    			});

			}
        return factory;
    }
})();
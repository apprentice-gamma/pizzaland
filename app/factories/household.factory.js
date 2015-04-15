(function() {

    angular.module('pizzaland').factory('householdFactory', householdFactory);

    function householdFactory($http) {
        var factory = {};
        factory.addresses = [];
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
			factory.getDataFromJson = getDataFromJson;
			
        return factory;
    }

})();
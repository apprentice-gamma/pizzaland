(function() {

    angular.module('pizzaland').factory('householdFactory', householdFactory);

    function householdFactory($http) {
        var factory = {};
        factory.addresses = [];
	        function getDataFromJson(){
	        	$http.get('./data/demo-data.json').
	            success(function(data, status, headers, config) {
	              factory.demoData = data;
	              // console.log(factory.demoData);
	              factory.addresses = factory.demoData[0]["Owned Households"];
	              console.log(factory.addresses);
	            }).
    			error(function(data, status, headers, config) {
     			 // log error
    			});
			}
			factory.getDataFromJson = getDataFromJson;
			
        return factory;
    }

})();
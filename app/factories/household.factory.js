(function() {
    angular.module('pizzaland').factory('householdFactory', householdFactory);

    function householdFactory($http) {
        var factory = {};
        	//properties
        	factory.addresses = [];
            factory.json = "./data/demo-data.json";
            factory.apiurl = "http://project2-backend.herokuapp.com/api/dictators/552ebf29fbb278488829bb1f";

        	//methods
            factory.getData = getData;

        	//method declarations

            function getData(url) {
                $http.get(url).
                    success(function(data, status, headers, config) { 
                        if(data.owned_households !== undefined)                
                            factory.addresses = data.owned_households;
                        else
                            factory.addresses = data[0].owned_households;
                    }).
                    error(function(data, status, headers, config) {
                        console.log("There was an error retrieving JSON data");// log error
                    });
            }
       return factory;
    }
})();
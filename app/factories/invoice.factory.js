(function() {

    angular.module('pizzaland').factory('invoiceFactory', invoiceFactory);

    function invoiceFactory() {
        var factory = {};
        	factory.quantity = 0;
        	factory.houseObject = {};
        	factory.resident = {};
	        

        return factory;
    }

})();
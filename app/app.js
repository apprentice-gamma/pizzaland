var pizzaland = angular.module("pizzaland", ["ngRoute"]);

pizzaland.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: '../../partials/addySearch.html',
	});

	$routeProvider.when("/order", {
	     templateUrl: '../../partials/orderForm.html',
	});

	$routeProvider.otherwise({redirectTo: '/'});
}]);

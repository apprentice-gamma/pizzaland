var pizzaland = angular.module("pizzaland", ["ngRoute", "ui.bootstrap"]);

pizzaland.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: '../../partials/addySearch.html',
	});

	$routeProvider.when("/order/:id", {
	     templateUrl: '../../partials/orderForm.html',
	});

	$routeProvider.when("/invoice", {
	     templateUrl: '../../partials/invoice.html',
	});

	$routeProvider.otherwise({redirectTo: '/'});
}]);

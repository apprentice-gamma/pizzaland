var pizzaland = angular.module("pizzaland", ["ngRoute"]);

pizzaland.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when("/", {
     controller: "addySearchController",
     templateUrl: '../../partials/addySearch.html'
 });
 $routeProvider.when("/order", {
     controller: "orderFormController",
     templateUrl: '../../partials/orderForm.html'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}])

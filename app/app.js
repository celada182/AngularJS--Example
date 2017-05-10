/**
 * Created by Javier on 07/05/2017.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'myApp.inicio',
    'myApp.productos',
    'myApp.nuevoProducto'
]);
myApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/inicio'});
}]);
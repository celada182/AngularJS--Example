/**
 * Created by Javier on 07/05/2017.
 */
var inicio = angular.module('myApp.inicio', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/inicio', {
            templateUrl: 'inicio/inicio.html',
            controller: 'InicioCtrl'
        });
    }]);

inicio.controller('InicioCtrl', [function ($scope) {
    $('#nav-productos').removeClass('active');
    $('#nav-nuevo').removeClass('active');
    $('#nav-inicio').addClass('active');
}]);
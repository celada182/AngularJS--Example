/**
 * Created by Javier on 07/05/2017.
 */
var productos = angular.module('myApp.productos', ['ngRoute', 'service.productos'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/productos', {
            templateUrl: 'productos/productos.html',
            controller: 'ProductosCtrl'
        });
    }]);

productos.controller('ProductosCtrl', function ($scope, serviceProductos) {
    jQuery('#nav-inicio').removeClass('active');
    jQuery('#nav-nuevo').removeClass('active');
    jQuery('#nav-productos').addClass('active');
    $scope.productos = serviceProductos.getProductos();
});
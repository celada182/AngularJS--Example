/**
 * Created by Aula08-17 on 09/05/2017.
 */
var nuevoProducto = angular.module('myApp.nuevoProducto', ['ngRoute', 'service.productos'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/nuevo', {
            templateUrl: 'nuevo-producto/nuevo-producto.html',
            controller: 'NuevoProductoCtrl'
        });
    }]);

nuevoProducto.controller('NuevoProductoCtrl', function ($scope, serviceProductos, $location) {
    jQuery('#nav-inicio').removeClass('active');
    jQuery('#nav-productos').removeClass('active');
    jQuery('#nav-nuevo').addClass('active');
    $scope.producto = {};
    $scope.insertar = function () {
        console.log($scope.producto);
        serviceProductos.addProducto($scope.producto);
        $location.path('/productos');
    };
});
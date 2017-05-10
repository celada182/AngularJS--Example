/**
 * Created by Javier on 07/05/2017.
 */
var serviceProductos = angular.module('service.productos', [])
    .service('serviceProductos', function () {
        var productos = [
            {nombre: 'Producto A', unidades: 10, precio: 29.99},
            {nombre: 'Producto B', unidades: 12, precio: 8.99}
        ];
        this.getProductos = function () {
            return productos;
        };
        this.addProducto = function (producto) {
            productos.push(producto);
        }
    });
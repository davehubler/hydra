'use strict';

app.controller('ProductCtrl', function ($scope, Product) {
  $scope.products = Product.all;

  $scope.product = {
    name: '',
    productCode: '',
    description: ''
  };

  $scope.submitProduct = function () {
    Product.create($scope.product).then(function (ref) {
      $scope.product = null;
    });
  };

  $scope.deleteProduct = function (product) {
    Product.delete(product);
  }

})
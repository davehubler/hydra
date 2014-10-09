'use strict';

app.factory('Product', 
  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'products');

    var products = $firebase(ref).$asArray();

    var Product = {
      all: products,
      create: function (product) {
        return products.$add(product);
      },
      find: function (productId) {
        return $firebase(ref.child(productId)).$asObject();
      },
      delete: function (product) {
        return products.$remove(product);
      }
    };

    return Product;
});
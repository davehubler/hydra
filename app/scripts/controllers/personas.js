'use strict';

app.controller('PersonaCtrl', function ($scope, Persona, Product) {
  $scope.personas = Persona.all;
  $scope.products = Product.all;

  $scope.persona = {
    name: '',
    product: '',
    description: '',
    role: ''
  };

  $scope.submitPersona = function () {
    Persona.create($scope.persona).then(function (ref) {
      // $location.path('/personas/' + ref.name());
      $scope.persona = null;
    });
  };

  $scope.deletePersona = function (persona) {
    Persona.delete(persona);
  }

})
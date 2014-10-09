'use strict';

app.controller('StoryCtrl', function ($scope, Story, Product, Persona) {
  $scope.sorter = '-(impact*evidence)';
  $scope.stories = Story.all;
  $scope.products = Product.all;
  $scope.personas = Persona.all;

  $scope.story = {
    title: '',
    as: '',
    want: '',
    so: '',
    impact: '',
    evidence: '',
    product: '',
  };

  $scope.submitStory = function () {
    Story.create($scope.story).then(function (ref) {
      // $location.path('/stories/' + ref.name());
      $scope.story = null;
    });
  };

  $scope.deleteStory = function (story) {
    Story.delete(story);
  }

})
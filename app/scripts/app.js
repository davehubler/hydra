'use strict';

/**
 * @ngdoc overview
 * @name hydraApp
 * @description
 * # hydraApp
 *
 * Main module of the application.
 */
var app = angular.module('hydraApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'firebase'
])

  // FIREBASE URL
  // Replace with your own firebase URL
  // Sign up for free at firebase.com
  .constant('FIREBASE_URL', 'https://open-hydra.firebaseIO.com');

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductCtrl'
      })
      .when('/stories', {
        templateUrl: 'views/stories.html',
        controller: 'StoryCtrl'
      })
      .when('/personas', {
        templateUrl: 'views/personas.html',
        controller: 'PersonaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

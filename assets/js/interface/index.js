var gsa18f = angular.module('gsa18f', [ 'ngRoute', 'ui.router', 'ngMaterial']);
gsa18f.config(function($urlRouterProvider, $locationProvider, $stateProvider, $mdThemingProvider) {
  // $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
  
  $mdThemingProvider.theme('default').primaryPalette('cyan').accentPalette('light-blue');

  $stateProvider
  // Home page
  .state('home', {
    url : '/',
    templateUrl : 'states/home/index.html',
    controller : 'HomeController'
  })
  .state('drug', {
    url : '/drug/:id',
    templateUrl : 'states/drug/index.html',
    controller : 'DrugController'
  });
});

var gsa18f = angular.module('gsa18f', [ 'ngRoute', 'ui.router' ]);
gsa18f.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
  // $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

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

var gsa18f = angular.module('gsa18f', [ 'ngRoute', 'ui.router' ]);
gsa18f.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
  // $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
  // Home page
  .state('home', {
    url : '/',
    templateUrl : 'home/index.html',
    controller : 'HomeController'
  });
});

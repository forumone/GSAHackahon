var gsa18f = angular.module('gsa18f', [ 'ngRoute', 'ui.router', 'ngMaterial']);
gsa18f.config(function($urlRouterProvider, $locationProvider, $stateProvider, $mdThemingProvider) {
  // $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
  
  $mdThemingProvider.theme('default').primaryPalette('cyan').accentPalette('blue-grey');

  $stateProvider
  // Home page
  .state('home', {
    url : '/?display&drug',
    templateUrl : 'states/home/index.html',
    controller : 'HomeController',
    reloadOnSearch: false,
    params : {
      drug : {
        value : []
      },
      display : {
        value : 'brand'
      }
    }
  })
  .state('drug', {
    url : '/drug/:id',
    templateUrl : 'states/drug/index.html',
    controller : 'DrugController'
  });
});

gsa18f.constant('DrugSeriousness', {
  seriousnessdisabling : "Disability",
  seriousnesscongenitalanomali : "Congenital Anomaly",
  seriousnessdeath : "Death",
  seriousnesshospitalization : "Hospitalization",
  seriousnesslifethreatening : "Life-threatening",
  seriousnessother : "Other Serious"
});
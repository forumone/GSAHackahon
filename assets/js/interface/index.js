var gsaHackathon = angular.module('gsaHackathon', [ 'ngRoute', 'ui.router', 'ngMaterial']);
gsaHackathon.config(function($urlRouterProvider, $locationProvider, $stateProvider, $mdThemingProvider) {
  $urlRouterProvider.otherwise('/');
  
  var dCarePalette = $mdThemingProvider.extendPalette('indigo', {
//    '300' : 'c9c7c8',
//    '800' : '1daaf1',
//    'A100' : 'eb2e80'
  });
  
  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('dCarePalette', dCarePalette);
  
  $mdThemingProvider.theme('default')
    .primaryPalette('dCarePalette')
    .accentPalette('amber');
  
  $stateProvider
  // Home page
  .state('home', {
    url : '/?drug',
    templateUrl : 'states/home/index.html',
    controller : 'HomeController',
    reloadOnSearch: false,
    params : {
      drug : {
        value : []
      },
      tabIndex : {
        value : 0
      }
    }
  })
  .state('drug', {
    url : '/drug/:id',
    templateUrl : 'states/drug/index.html',
    controller : 'DrugController'
  })
  .state('about', {
    url : '/about',
    templateUrl : 'states/page/index.html',
    controller : 'PageController',
    params : {
      page : {
        value : 'about'
      },
      tabIndex : {
        value : 1
      }
    }
  });
});
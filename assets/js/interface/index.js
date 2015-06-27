var gsa18f = angular.module('gsa18f', [ 'ngRoute', 'ui.router', 'ngMaterial']);
gsa18f.config(function($urlRouterProvider, $locationProvider, $stateProvider, $mdThemingProvider) {
  // $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
  
  var dCarePalette = $mdThemingProvider.extendPalette('cyan', {
    '300' : 'c9c7c8',
    '800' : '1daaf1',
    'A100' : 'eb2e80'
  });
  
  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('dCarePalette', dCarePalette);
  
  $mdThemingProvider.theme('default')
    .primaryPalette('dCarePalette')
    .accentPalette('grey');
  
  
//  $mdThemingProvider.definePalette('dCarePalette', {
//    '50' : '1daaf1',
//    '100' : '1daaf1',
//    '200' : '1daaf1',
//    '300' : '1daaf1',
//    '400' : '1daaf1',
//    '500' : 'ffffff',
//    '600' : '1daaf1',
//    '700' : '1daaf1',
//    '800' : 'c9c7c8',
//    '900' : '1daaf1',
//    'A100' : 'eb2e80',
//    'A200' : '1daaf1',
//    'A400' : '1daaf1',
//    'A700' : '1daaf1',
//  });

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
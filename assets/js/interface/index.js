var gsa18f = angular.module('gsa18f', [ 'ngRoute', 'ui.router', 'ngMaterial']);
gsa18f.config(function($urlRouterProvider, $locationProvider, $stateProvider, $mdThemingProvider) {
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

gsa18f.run(function($rootScope, $window) {
  $rootScope.tab = ('/about' == $window.location.pathname.substring(0, 6)) ? 1 : 0;
  
  $rootScope.goAbout = function() {
    if (1 != $rootScope.tab) {
      $window.location = '/about/#/';
    }
  };
  
  $rootScope.goApp = function() {
    if (0 != $rootScope.tab) {
      $window.location = '/#/';
    }
  };
});
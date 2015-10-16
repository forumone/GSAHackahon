angular.module('gsaHackathon').controller('HomeController',
    function($scope, $stateParams, $state, vouchers, airfare, $mdToast) {
      $scope.data = [ {
        key : 'April',
        values : [ {
          label : '2014',
          value : '22000',
        }, {
          label : '2015',
          value : '38000',
        } ]
      }, {
        key : 'May',
        values : [ {
          label : '2014',
          value : '29000',
        }, {
          label : '2015',
          value : '42000',
        } ]
      }, {
        key : 'June',
        values : [ {
          label : '2014',
          value : '25000',
        }, {
          label : '2015',
          value : '23000',
        } ]
      } ];
    });
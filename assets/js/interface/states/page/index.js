angular.module('gsaHackathon').controller('PageController', function ($scope, $stateParams) {
  $scope.uri = '/api/content/' + $stateParams.page;
});
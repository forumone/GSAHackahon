angular.module('gsa18f').controller('PageController', function ($scope, $stateParams) {
  $scope.uri = '/api/content/' + $stateParams.page;
});
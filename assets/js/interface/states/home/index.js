angular.module('gsa18f').controller('HomeController', function($scope, $stateParams, $state, substances) {
  $scope.querySearch = function(text) {
    return substances.getBrandsLike(text, 10).then(function(result) {
      return result.data;
    });
  }
});
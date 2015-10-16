angular.module('gsaHackathon').controller('DrugController', function ($scope, $stateParams, fdaLabel) {
  fdaLabel.getLabel($stateParams.id).then(function(result) {
    // TODO: Make sure that this logic is correct, maybe encapsulate in a $filter
    result = result.results;
    
    if (angular.isArray(result) && 1 == result.length) {
      $scope.title = result[0].openfda.brand_name[0];
    }
  })
  .catch(function() {
    $scope.title = 'Invalid Drug'
  });
});
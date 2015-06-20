angular.module('gsa18f').controller('HomeController', function($scope, fdaLabel) {
  $scope.currentPage = 0;
  $scope.limit = 20;
  $scope.total = 0;
  
  getLabels();
  
  $scope.pagingAction = function(page) {
    $scope.currentPage = page;
    getLabels();
  }
  
  function getLabels() {
    var skip = $scope.currentPage * $scope.limit;

    fdaLabel.search('', skip, $scope.limit).then(function(results) {
      $scope.results = results;
      $scope.drugLabels = results.results;
      $scope.total = results.meta.results.total;
    })
  }
});
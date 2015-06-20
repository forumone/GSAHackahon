angular.module('gsa18f').controller('HomeController', function($scope, fdaLabel) {
  $scope.drugs = [{
    drug : '',
  }];
  
  $scope.addDrug = function() {
    $scope.drugs.push({
      drug : ''
    });
  }
});
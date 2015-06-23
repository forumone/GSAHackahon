angular.module('gsa18f').controller('HomeController', function($scope, fdaLabel, substances, $q) {
  $q.all({
    brands : substances.getBrands(),
    substances : substances.getSubstances()
  })
  .then(function(results) {
    $scope.brands = results.brands.brands;
    $scope.substances = results.substances.substances;
  });
  
  $scope.display = "brand";
  
  $scope.drugs = [{
    drug : '',
  }];
  
  $scope.addDrug = function() {
    $scope.drugs.push({
      drug : ''
    });
  }

  $scope.reset = function() {
    $scope.drugs = [{}];
  }
  
  $scope.$watch('display', function(newValue, oldValue) {
    $scope.reset();
  });
  
});
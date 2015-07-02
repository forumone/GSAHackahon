angular.module('gsa18f').controller('HomeController', function($scope, $stateParams, $state, substances) {
  $scope.drugs = [];
  
  // Performs search for drug
  $scope.querySearch = function(text) {
    return substances.getBrands(text, 10).then(function(result) {
      return result.data;
    });
  }
  
  // Handler for 'Add Drug' button
  $scope.addDrug = function() {
    if ($scope.selectedItem && $scope.selectedItem.brand_name) {
      $scope.drugs.push($scope.selectedItem);
      $scope.selectedItem = undefined;
      $scope.searchText = '';
    }
  }
});
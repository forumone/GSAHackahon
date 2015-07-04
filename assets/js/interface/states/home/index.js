angular.module('gsa18f').controller('HomeController', function($scope, $stateParams, $state, substances, fdaEvent, $mdToast) {
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
  
  $scope.$watchCollection('drugs', function() {
    var data = [];
    
    if (angular.isArray($scope.drugs)) {
      if (0 < $scope.drugs.length) {
        $mdToast.show({
          controller : 'LoadingController',
          templateUrl: 'states/home/loading.html',
          hideDelay: 0,
          position: 'bottom right'
        });
        
        var products = _.map($scope.drugs, function(drug) {
          return drug.brand_name;
        });
        
        fdaEvent.getEventDates(products)
        .then(function(results) {
          data = _.map(results, function(result) {
            var values = _.chain(result.dates).map(function(value, key) {
              return {
                y : value,
                x : parseInt(key)
              }
            })
            .sortBy('+x')
            .value();
            
            return {
              key : result.drug,
              values : values,
            };
          });
          
          $scope.data = data;
          
          $mdToast.hide();
        });
      }
    }
  });
});
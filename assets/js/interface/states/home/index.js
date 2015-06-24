angular.module('gsa18f').controller('HomeController', function($scope, fdaLabel, substances, $q, DrugSeriousness, $mdToast) {
  $q.all({
    brands : substances.getBrands(),
    substances : substances.getSubstances()
  })
  .then(function(results) {
    $scope.brands = results.brands.brands;
    $scope.substances = results.substances.substances;
  });
  
  $scope.addDrug = function() {
    $scope.drugs.push({
      drug : ''
    });
  }

  $scope.reset = function() {
    $scope.drugs = [{}];
    
    $scope.medicinalproducts = [];
  }
  
  $scope.$watch('display', function(newValue, oldValue) {
    $scope.reset();
  });
  
  $scope.$watchCollection('drugs', function() {
    $scope.processChanges();
  }, true);
  
  
  $scope.processChanges = function() {
    var medicinalproducts = _.chain($scope.drugs)
    .map(function(drug) {
      return (_.has(drug, 'medicinalproduct')) ? drug.medicinalproduct : null;
    })
    .compact()
    .value();
    
    rdiff = _.difference(medicinalproducts, $scope.medicinalproducts);
    ldiff = _.difference($scope.medicinalproducts, medicinalproducts);
    
    if (0 == medicinalproducts.length || 0 < rdiff.length || 0 < ldiff.length) {
      $scope.medicinalproducts = medicinalproducts;
    }
  }
  
  $scope.$watchCollection('medicinalproducts', function() {
    if (angular.isArray($scope.medicinalproducts)) {
      if (0 < $scope.medicinalproducts.length) {
        $mdToast.show({
          controller : 'LoadingController',
          templateUrl: 'states/home/loading.html',
          hideDelay: 0,
          position: 'bottom right'
        });
        
        fdaLabel.getEvents($scope.medicinalproducts)
        .then(function(events) {

          var drugEvents = _.reduce(events, function(result, key) {
            var output = (_.isArray(result)) ? result : [];

            var drugCombo = key.drugs.join(' and ');

            var drug = _.find(output, { key : drugCombo });

            if (!drug) {
              drug = {
                key : drugCombo,
                values : [],
              }

              output.push(drug);
            }

            drug.values.push({
              label : _.has(DrugSeriousness, key.seriousness) ? DrugSeriousness[key.seriousness] : key.seriousness,
              value : key.count
            });

            return output;
          }, {});
          
          $mdToast.hide();
          
          $scope.data = drugEvents;
        })
        .catch(function() {
          $scope.data = [];
        });
      }
      else {
        $scope.data = [];
      }
    }
  });
  
  
  $scope.reset();
  $scope.display = "brand";
});
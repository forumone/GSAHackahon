angular.module('gsa18f').service('substances', function($http) {
  /**
   * Returns a list of mental health substances
   */
  function getSubstances(id) {
    return $http.get('/api/substances/substances')
    .then(function(result) {
      return result.data;
    });
  }
  
  /**
   * Returns a list of mental health brands
   */
  function getBrands() {
    return $http.get('/api/substances/brands')
    .then(function(result) {
      return result.data;
    });
  }
  
  return {
    getSubstances : getSubstances,
    getBrands : getBrands
  }
});
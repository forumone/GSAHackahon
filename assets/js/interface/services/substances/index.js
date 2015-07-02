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
  
  function getBrandsLike(like, limit) {
    limit = limit || 10;
    
    return $http.get('/api/drugs', {
      params : {
        limit : limit,
        like : like,
      }
    });
  }
  
  return {
    getSubstances : getSubstances,
    getBrands : getBrands,
    getBrandsLike : getBrandsLike
  }
});
angular.module('gsa18f').service('substances', function($http) {
  
  /**
   * Returns a list of substances
   */
  function getBrands(like, limit) {
    limit = limit || 10;
    
    return $http.get('/api/substances/brands', {
      params : {
        limit : limit,
        like : like,
      }
    });
  }
  
  /**
   * Returns a list of substances
   */
  function getSubstances(like, limit) {
    limit = limit || 10;
    
    return $http.get('/api/substances/substances', {
      params : {
        limit : limit,
        like : like,
      }
    });
  }
  
  return {
    getSubstances : getSubstances,
    getBrands : getBrands,
  }
});
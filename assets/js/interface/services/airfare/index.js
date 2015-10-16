angular.module('gsaHackathon').service('airfare', function($http) {
  
  /**
   * Returns a list of airfare
   */
  function find(params) {
    return $http.get('/airfare', {
      params : params
    });
  }
  
  function findOne(id) {
    return $http.get('/airfare/' + id);
  }
  
  return {
    find : find,
    findOne : findOne,
  }
});
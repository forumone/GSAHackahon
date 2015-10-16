angular.module('gsaHackathon').service('vouchers', function($http) {
  
  /**
   * Returns a list of vouchers
   */
  function find(params) {
    return $http.get('/vouchers', {
      params : params
    });
  }
  
  function findOne(id) {
    return $http.get('/vouchers/' + id);
  }
  
  return {
    find : find,
    findOne : findOne,
  }
});
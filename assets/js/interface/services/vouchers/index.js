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
  
  function getPrograms() {
    return $http.get('/programs');
  }
  
  return {
    find : find,
    findOne : findOne,
    getPrograms : getPrograms
  }
});
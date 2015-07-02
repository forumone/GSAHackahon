angular.module('gsa18f').service('fdaEvent', function($http) {
  function getEventDates(drugs) {
    return $http.get('/api/fda/eventdates', {
      params : {
        drug : drugs
      }
    })
    .then(function(result) {
      return result.data;
    });
  }

  return {
    getEventDates : getEventDates,
  }
});
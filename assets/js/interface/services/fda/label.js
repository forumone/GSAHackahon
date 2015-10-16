angular.module('gsaHackathon').service('fdaLabel', function($http) {
  function getLabel(id) {
    return $http.get('/api/fda/label.json', {
      params : {
        search : 'id:' + id
      }
    })
    .then(function(result) {
      return result.data;
    });
  }
  
  function getEvents(drugs) {
    return $http.get('/api/fda/drugevents', {
      params : {
        drug : drugs
      }
    })
    .then(function(result) {
      return result.data;
    });;
  }
  
  function search(search, skip, limit) {
    return $http.get('/api/fda/label.json', {
      params : {
        search : search,
        skip : skip,
        limit : limit
      }
    })
    .then(function(result) {
      return result.data;
    });
  }
  
  return {
    getLabel : getLabel,
    search : search,
    getEvents : getEvents
  }
});
angular.module('gsa18f').service('fdaLabel', function($http) {
  function getLabel(id) {
    return $http.get('/api/fda/label.json', {
      params : {
        search : 'id:' + id
      }
    })
    .then(function(result) {
      return result.data.results;
    });
  }
  
  return {
    getLabel : getLabel
  }
});
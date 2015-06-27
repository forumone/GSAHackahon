/**
 * OpenFdaController
 * 
 * @description :: API proxy for OpenFDA API
 * @help :: See http://links.sailsjs.org/docs/controllers
 */
var rp = require('request-promise');
var _ = require('lodash');
var Promise = require("bluebird");
var RateLimiter = require('request-rate-limiter');

var limiter = new RateLimiter(240);

var BluebirdLRU = require("bluebird-lru-cache");
var options = {
  max : 1000,
  maxAge : 1000 * 60 * 60 * 24, // 24 hours
  noreject : true // Don't reject
};
 
var cache = BluebirdLRU(options);

/**
 * Sends request to openFDA API
 */
function apiQuery(endpoint, params) {
  params = params || {};

  // Add API key
  params.api_key = sails.config.keys.fda;
  
  var url = "https://api.fda.gov/drug/" + endpoint + parameters.serialize(params);
  
  // Try the cache first
  return cache.get(url)
    .then(function(result) {
      if (result) {
        return result;
      }
      else {
        // If that fails load it from the request imiter
        return limiter.request({
          url : url,
          method : 'GET',
        }); 
      }
    })
    // Then save it to the cache
    .then(function(result) {
      return cache.set(url, result);
    })
    // Add it to the cache
    .then(function() {
      return cache.get(url);
    })
    // Finally process and return
    .then(function(result) {
      return {
        params : params,
        url : url,
        result : JSON.parse(result.body),
      };
    });
}



/**
 * Proxies a request from the app to the openFDA API.
 * 
 * In the future this could be cached or other value added.
 */
function apiProxy(req, res) {
  apiQuery(req.params.endpoint, req.query)
  .then(function(result) {
    var output = JSON.parse(result.result);
    return res.json(output);
  })
  .catch(function(err) {
    sails.log.error(err);
    res.serverError();
  });
}

/**
 * Retrieve events for drug combinations
 */
function drugEvents(req, res) {
  var drugs = req.query.drug || [];
  
  if (!_.isArray(drugs)) {
    drugs = [drugs];
  }
  
  if (0 < drugs.length) {
    var combos = combinations.getCombinations(drugs);
    var promises = _.chain(combos)
    .map(function(combo) {
      var search = _.map(combo, function(product) {
        return 'medicinalproduct:"' + product + '"';
      });
      
      var queries = _.map([
                           'seriousnesscongenitalanomali', 
                           'seriousnessdeath', 
                           'seriousnessdisabling', 
                           'seriousnesshospitalization', 
                           'seriousnesslifethreatening', 
                           'seriousnessother'], 
      function(seriousness) {
        return apiQuery('event.json', {
          search : '(' + search.join(' AND ') + ')',
          count : seriousness,
        })
        .then(function(result) {
          result.search = search;
          result.combo = combo;
          return result;
        });
      });
      return queries;
    })
    .flatten()
    .value();
    
    Promise.all(promises)
    .then(function(results) {
      var drugResults = _.chain(results)
      .map(function(result) {
        var count = 0;
        
        if (_.has(result.result, 'results')) {
          var counts = result.result.results.shift();
          count = counts.count;
        }
        
        return {
          drugs : result.combo,
          seriousness : result.params.count,
          count : count,
        };
      })
      .value();
      
      return res.json(drugResults);
    })
    .catch(function(err) {
      sails.log.error(err);
      return res.serverError();
    })
  }
  else {
    return res.notFound();
  }
}

module.exports = {
  apiProxy : apiProxy,
  drugEvents : drugEvents,
};

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
  
  return sails.services.cachedrequest.query(url, limiter)
    // Process the results
    .then(function(result) {
      return {
        url : url,
        params : params,
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
    return res.json(result.result);
  })
  .catch(function(err) {
    res.serverError('An error occurred');
  });
}

/**
 * Gets event dates from the openFDA API
 */
function eventDates(req, res) {
  var drugs = req.query.drug || [];
  
  if (!_.isArray(drugs)) {
    drugs = [drugs];
  }
  
  var promises = [ ];
  
  if (0 < drugs.length) {
    var combos = combinations.getCombinations(drugs);
    
    promises = _.chain(combos)
    .map(function(combo) {
      var search = _.map(combo, function(product) {
        return 'medicinalproduct:"' + product + '"';
      });
      
      return apiQuery('event.json', {
        search : '(' + search.join(' AND ') + ')',
        count : 'receivedate',
      })
      .then(function(result) {
        result.search = search;
        result.combo = combo.join(' and ');
        return result;
      });
    })
    .flatten()
    .value();
  }
  
  Promise.all(promises)
  .then(function(results) {
    var dates = _.chain(results)
      .map(function(result) {
        return {
          drug : result.combo,
          dates : combineDates(result.result.results)
        }
      })
      .value();
    
    return res.json(dates);
  })
  .catch(function(err) {
    sails.log.error(err);
    return res.serverError();
  });
}

/**
 * Combines daily values into months
 */
function combineDates(results) {
  var months = _.reduce(results, function(result, n) {
    var year = n.time.substring(0, 4);
    var month = n.time.substring(4, 6);
    var day = n.time.substring(6, 8);

    var date = Date.parse(year + '-' + month + '-15');
    
    if (!_.has(result, date)) {
      result[date] = 0;
    }
    
    result[date] += parseInt(n.count);
    
    return result;
  }, {});
  
  return months;
}

module.exports = {
  apiProxy : apiProxy,
  eventDates : eventDates
};

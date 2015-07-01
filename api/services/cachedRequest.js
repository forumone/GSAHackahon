/**
 * cachedRequest service
 * 
 * @description :: Sends requests and caches them in a in-memory LRU cache
 */

var BluebirdLRU = require("bluebird-lru-cache");
var options = {
  max : 1000,
  maxAge : 1000 * 60 * 60 * 24, // 24 hours
  noreject : true // Don't reject
};

var cache = BluebirdLRU(options);

function query(url, limiter) {
  // Try the cache first
  return cache.get(url)
    .then(function(result) {
      if (result) {
        return result;
      }
      else {
        // If that fails load it from the request limiter
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
    });
}

module.exports = {
  query : query
}
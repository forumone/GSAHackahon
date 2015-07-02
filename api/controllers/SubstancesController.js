/**
 * SubstancesController
 *
 * @description :: Server-side logic for managing Substances
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');

/**
 * Returns a list of brands like the provided value
 * @param req
 * @param res
 * @returns
 */
function getBrands(req, res) {
  var params = parameters.getQueryParams(req, [ 'limit', 'offset', 'like' ], { 
    limit : 50, 
    offset : 0,
    like : '',
  });
  
  Promise.bind({}).then(function() {
    return drugsDb.connect()
  })
  .then(function(db) {
    this.db = db;
    
    var query_params = {
      $limit : params.limit,
      $offset : params.offset,
      $like : params.like + '%',
    };
    
    return db.all('SELECT brand_name, generic_name FROM Products WHERE brand_name LIKE $like ORDER BY brand_name ASC LIMIT $limit OFFSET $offset', query_params);
  })
  .then(function(rows) {
    return res.json(rows);
  })
  .catch(function(err) {
    sails.log.error(err);
    res.serverError('An error occurred');
  });
}

/**
 * Returns a list of substances like the provided value
 * @param req
 * @param res
 * @returns
 */
function getSubstances(req, res) {
  var params = parameters.getQueryParams(req, [ 'limit', 'offset', 'like' ], { 
    limit : 50, 
    offset : 0,
    like : '',
  });
  
  Promise.bind({}).then(function() {
    return drugsDb.connect()
  })
  .then(function(db) {
    this.db = db;
    
    var query_params = {
      $limit : params.limit,
      $offset : params.offset,
      $like : params.like + '%',
    };
    
    return db.all('SELECT brand_name, generic_name FROM Products WHERE generic_name LIKE $like ORDER BY brand_name ASC LIMIT $limit OFFSET $offset', query_params);
  })
  .then(function(rows) {
    return res.json(rows);
  })
  .catch(function(err) {
    sails.log.error(err);
    res.serverError('An error occurred');
  });
}

module.exports = {
  getSubstances : getSubstances,
  getBrands : getBrands
};


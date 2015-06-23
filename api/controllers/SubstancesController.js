/**
 * SubstancesController
 *
 * @description :: Server-side logic for managing Substances
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var _ = require('lodash');
var fs = require('fs');
var path = require('path');

/**
 * Sends an arbitrary file from the public files
 * 
 * @param filename
 * @param res
 */
function sendJsonFile(filename, res) {
  var file = path.resolve(__dirname, '../../.tmp/public/files/' + filename);
  fs.exists(file, function (exists) {
    if (!exists) {
      return res.notFound('The requested file does not exist.');
    }

    fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
        return res.notFound('The requested file does not exist.');
      }
      
      var json = JSON.parse(data);
      return res.json(json);
    });
  });
}

/**
 * Send list of substances
 * 
 * @param req
 * @param res
 */
function getSubstances(req, res) {
  return sendJsonFile('substances.json', res);
}

/**
 * Send list of brands
 * 
 * @param req
 * @param res
 */
function getBrands(req, res) {
  return sendJsonFile('brands.json', res);
}

module.exports = {
  getSubstances : getSubstances,
  getBrands : getBrands
};


/**
 * VoucherController
 *
 * @description :: Server-side logic for managing Vouchers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var _ = require('lodash');

function getPrograms(req, res) {
  Voucher.find({
    where : {
      agency : 'Agency A'
    }
  }).then(function(results) {
    var programs = {};
    _.each(results, function(result) {
      if (!_.has(programs, result.organization)) {
        programs[result.organization] = {
            organization : result.organization,
            common_carrier : 0,
            lodging : 0,
            meals_and_incidentals : 0,
            rental_car : 0,
            pov : 0,
            misc_expenses : 0,
            local_transportation : 0,
            total_expenses : 0
        };
      }
      
      programs[result.organization].common_carrier += result.common_carrier;
      programs[result.organization].lodging += result.lodging;
      programs[result.organization].meals_and_incidentals += result.meals_and_incidentals;
      programs[result.organization].rental_car += result.rental_car;
      programs[result.organization].pov += result.pov;
      programs[result.organization].misc_expenses += result.misc_expenses;
      programs[result.organization].local_transportation += result.local_transportation;
      programs[result.organization].total_expenses += result.total_expenses;
    });
    
    return res.json(programs);
  });
}

module.exports = {
    getPrograms : getPrograms
};


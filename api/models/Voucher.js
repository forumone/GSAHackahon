/**
* Voucher.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName : 'vouchers',
  attributes : {
    id : {
      type : 'integer',
      columnName : 'id',
      primaryKey : true,
      unique : true
    },
    organization : {
      type : 'string',
      columnName : 'organization'
    },
    office : {
      type : 'string',
      columnName : 'office'
    },
    trip_id : {
      type : 'string',
      columnName : 'trip_id'
    },
    authorization_doc : {
      type : 'string',
      columnName : 'authorization_doc'
    },
    final_destination : {
      type : 'string',
      columnName : 'final_destination'
    },
    depart : {
      type : 'datetime',
      columnName : 'depart'
    },
    'return' : {
      type : 'datetime',
      columnName : 'RETURN'
    },
    voucher_doc : {
      type : 'string',
      columnName : 'voucher_doc'
    },
    common_carrier : {
      type : 'float',
      columnName : 'common_carrier'
    },
    lodging : {
      type : 'float',
      columnName : 'lodging'
    },
    meals_and_incidentals : {
      type : 'float',
      columnName : 'meals_and_incidentals'
    },
    rental_car : {
      type : 'float',
      columnName : 'rental_car'
    },
    pov : {
      type : 'float',
      columnName : 'pov'
    },
    misc_expenses : {
      type : 'float',
      columnName : 'misc_expenses'
    },
    local_transportation : {
      type : 'float',
      columnName : 'local_transportation'
    },
    voucher_fee : {
      type : 'float',
      columnName : 'voucher_fee'
    },
    tmc_fee : {
      type : 'float',
      columnName : 'tmc_fee'
    },
    total_expenses : {
      type : 'float',
      columnName : 'total_expenses'
    },
    agency : {
      type : 'string',
      columnName : 'agency'
    }
  }
};
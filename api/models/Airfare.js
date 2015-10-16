/**
 * Airfare.js
 * 
 * @description :: TODO: You might write a short summary of how this model works
 *              and what it represents here.
 * @docs :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName : 'airfare',
  attributes : {
    id : {
      type : 'integer',
      columnName : 'id',
      primaryKey : true,
      unique : true
    },
    gds : {
      type : 'string',
      columnName : 'gds'
    },
    reservation_date : {
      type : 'datetime',
      columnName : 'reservation_date'
    },
    ticket_issue_date : {
      type : 'datetime',
      columnName : 'ticket_issue_date'
    },
    trip_departure_date : {
      type : 'datetime',
      columnName : 'trip_departure_date'
    },
    ticket_number : {
      type : 'integer',
      columnName : 'ticket_number'
    },
    airline_name : {
      type : 'string',
      columnName : 'airline_name'
    },
    cabin_class : {
      type : 'string',
      columnName : 'cabin_class'
    },
    domestic_international : {
      type : 'string',
      columnName : 'domestic_international'
    },
    origin_airport : {
      type : 'string',
      columnName : 'origin_airport'
    },
    destination_airport : {
      type : 'string',
      columnName : 'destination_airport'
    },
    routing : {
      type : 'string',
      columnName : 'routing'
    },
    invoice_amount : {
      type : 'float',
      columnName : 'invoice_amount'
    },
    tax_amount : {
      type : 'float',
      columnName : 'tax_amount'
    },
    total_amount : {
      type : 'float',
      columnName : 'total_amount'
    },
    mileage : {
      type : 'float',
      columnName : 'mileage'
    },
    exchange_indicator : {
      type : 'string',
      columnName : 'exchange_indicator'
    },
    exchange_ticket : {
      type : 'integer',
      columnName : 'exchange_ticket'
    },
    refund_indicator : {
      type : 'string',
      columnName : 'refund_indicator'
    },
    original_invoice : {
      type : 'integer',
      columnName : 'original_invoice'
    },
    online_indicator : {
      type : 'datetime',
      columnName : 'online_indicator'
    },
    fare_category : {
      type : 'string',
      columnName : 'fare_category'
    },
    agency : {
      type : 'string',
      columnName : 'agency'
    }
  }
};

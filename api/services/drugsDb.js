var Promise = require('bluebird'),
  QSQL = require('q-sqlite3'),
  path = require('path');

var db;

function connect() {
  var file = path.resolve(__dirname + '../../../data/products.sqlite');
  
  if (db) {
    return Promise.resolve(db);
  }
  else {
    return QSQL.createDatabase(file)
    .then(function(database) {
      db = database;
      return db;
    });
  }
}

module.exports = {
  connect : connect,
}
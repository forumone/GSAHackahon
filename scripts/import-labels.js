var fs = require('fs'),
    d3 = require('d3'),
    path = require('path'),
    sqlite3 = require('sqlite3');
    
var prefix = 'data';
    
/**
 * Cleans brand names
 */
function brandName(s) {
    return String(s);
}

/**
 * Cleans generic names
 */
function genericName(s) {
    return String(s);
}

fs.readFile(path.join(prefix, 'Product.txt'), 'utf8', function (err, contents) {
    var db = new sqlite3.Database(path.join(prefix, 'products.sqlite')),
        rows = d3.tsv.parse(contents, function (d) {
            var brand = brandName(d['drugname']),
                generic = genericName(d['activeingred']),
                key = brand + '\t' + generic;

            return {
                key: key,
                $brand_name: brand,
                $generic_name: generic
            };
        });
        
    db.serialize(function () {
        db.exec('DROP INDEX IF EXISTS Products_Unique');
        db.exec('DROP TABLE IF EXISTS Products');
        db.exec('CREATE TABLE Products (brand_name TEXT NOT NULL, generic_name TEXT NOT NULL)');
        db.exec('CREATE UNIQUE INDEX Products_Unique ON Products (brand_name, generic_name)');
        
        db.exec('BEGIN TRANSACTION');
        var stmt = db.prepare('INSERT INTO Products (brand_name, generic_name) VALUES ($brand_name, $generic_name)'),
            seen = {};
        
        rows.forEach(function (row, i) {
            if (seen[row.key]) {
                return;
            }
            
            seen[row.key] = true;
            delete row.key;
            
            stmt.run(row);
        });
        
        stmt.finalize();
        db.exec('COMMIT');
    });
    
    db.close();
    db.on('error', console.log.bind(console, "error!"));
});
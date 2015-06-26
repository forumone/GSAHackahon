var parameters = require('../../api/services/parameters'),
    assert = require('assert');
    
describe('services/parameters', function () {
    describe('getQueryParams()', function () {
        it('omits "All"', function () {
            var query = {
                x: 'All',
            };
            
            var result = parameters.getQueryParams({ query: query }, ['x'], {});
            assert.deepEqual(result, {}, 'expected no values');
            
            query = {
                x: 'All',
                y: 'All',
            };
            
            result = parameters.getQueryParams({query: query}, ['x', 'y'], {});
            assert.deepEqual(result, {}, 'expected no values'); 
        });
        
        it('returns only requested values', function () {
            var query = {
                x: 'x',
                y: 'y',
                z: 'z',
            };
            
            var result = parameters.getQueryParams({ query: query }, ['x', 'y'], {});
            assert.deepEqual(result, {x: 'x', y: 'y'}, 'expected only "x" and "y" keys');
        });
        
        it('returns defaults', function () {
            var query = {},
                defaults = {x: 'x', y: 'y'};
            
            var result = parameters.getQueryParams({ query: query }, ['x', 'y'], defaults);
            assert.deepEqual(result, {x: 'x', y: 'y'}, 'defaulted parameters');
        });
        
        it('overwrites defaults', function () {
            var query = {
                    x: 'overwritten',
                },
                defaults = {
                    x: 'defaulted',
                    y: 'defaulted',
                };
                
            var result = parameters.getQueryParams({ query: query }, ['x', 'y'], defaults);
            assert.deepEqual(result, { x: 'overwritten', y: 'defaulted' }, 'defaulted and overwritten parameters');
        });
    });
    
    describe('serialize()', function () {
        it('handles empty objects', function () {
            var result = parameters.serialize({});
            assert.strictEqual(result, '?');
        });
        it('handles plain key-value pairs', function () {
            var result = parameters.serialize({x: 'y'});
            assert.strictEqual(result, '?x=y', 'single key-value pair');
            
            result = parameters.serialize({
                x: 'y',
                z: 'w'
            }); 
            assert.strictEqual(result, '?x=y&z=w', 'multiple key-value pairs');
        });
        it('handles special characters', function () {
            var result = parameters.serialize({ space: ' ' });
            assert.strictEqual(result, '?space=%20', 'space is escaped as value');
            
            result = parameters.serialize({ ' ': 'space' });
            assert.strictEqual(result, '?%20=space', 'space is escaped as key');
            
            result = parameters.serialize({ '&': '&' });
            assert.strictEqual(result, '?%26=%26', 'ampersand is also escaped');
        });
    });
});
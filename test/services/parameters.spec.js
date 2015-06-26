var parameters = require('../../api/services/parameters'),
    assert = require('assert');
    
describe('services/parameters', function () {
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
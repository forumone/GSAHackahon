var Combinations = require('../../api/services/combinations.js'),
    sinon = require('sinon'),
    assert = require('assert');
    
describe('The combinations service', function () {
   describe('when we call getCombinations([1])', function () {
       it('should return [[1]]', function () {
           assert.deepEqual(Combinations.getCombinations([1]), [[1]]);
       });
   });
   
   describe('when we call getCombinations([1, 2, 3])', function () {
       it('should return all combinations', function () {
           assert.deepEqual(Combinations.getCombinations([1, 2, 3]), [[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]);
       })
   }); 
});
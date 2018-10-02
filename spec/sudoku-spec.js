import { nonNumeric } from '../src/business.js';
import { wholeNumberChecker } from '../src/business.js';
describe('nonNumeric', function() {

  it('should return false for non numeric inputs', function() {
  var input = 5;
  expect(Number.isNaN(input)).toBe(false);
  });

  it('should accept whole numbers 1-9 only', function() {
    var input2 = 0;
    expect(wholeNumberChecker(input2)).toBe(true);
  })

});

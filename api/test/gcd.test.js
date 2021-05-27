const assert = require('assert');
const gcd = require('../routes/gcd');

describe('Greatest Common Divisor', () => {
    it('should return 5', () => {
        const res = gcd.greatestCommonDivisor([20, 40, 100, 5005, 7005, 10000, 20000]);
        assert.strictEqual(res, 5);
    });
    it('should return 4', () => {
        const res = gcd.greatestCommonDivisor([12, 24, 64, 144, 180]);
        assert.strictEqual(res, 4);
    });
    it('should return 5', () => {
        const res = gcd.greatestCommonDivisor([20, 25, 11125, 3435, 33435, 45]);
        assert.strictEqual(res, 5);
    });
});
const assert = require('assert');
const gcd = require('../classes/gcd');

describe('Greatest Common Divisor', () => {
    let GreatestCommonDivisor = new gcd();
    it('should return 5', () => {
        const res = GreatestCommonDivisor.arrayGreatestCommonDivisor([20, 40, 100, 5005, 7005, 10000, 20000]);
        assert.strictEqual(res, 5);
    });
    it('should return 4', () => {
        const res = GreatestCommonDivisor.arrayGreatestCommonDivisor([12, 24, 64, 144, 180]);
        assert.strictEqual(res, 4);
    });
    it('should return 5', () => {
        const res = GreatestCommonDivisor.arrayGreatestCommonDivisor([20, 25, 11125, 3435, 33435, 45]);
        assert.strictEqual(res, 5);
    });
    it('should return 1', () => {
        const res = GreatestCommonDivisor.arrayGreatestCommonDivisor([1, 5, 2, 5, 33435, 99]);
        assert.strictEqual(res, 1);
    });
    it('should return 3', () => {
        const res = GreatestCommonDivisor.arrayGreatestCommonDivisor([3, 6, 0, 9, 33435, 99]);
        assert.strictEqual(res, 3);
    });
});
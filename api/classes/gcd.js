const IGreatestCommonDivisor = require("../interfaces/igcd");

class GreatestCommonDivisor extends IGreatestCommonDivisor {

    constructor() {
        super();
    }

    /**
     * 
     * @param {array} numbers array of numbers to be computed
     * @returns the greatest common divisor of all numbers
     */
    arrayGreatestCommonDivisor(numbers) {
        let res = 0;
        numbers.forEach((number) => {
            res = this.greatestCommonDivisor(res, number);

            if (res == 1) {
                return 1;
            }
        });

        return res;
    }

    /**
     * 
     * @param {int} num1 current greatest common divisor
     * @param {int} num2 next number
     * @returns the greatest common divisor of two numbers
     */
    greatestCommonDivisor(num1, num2) {
        let temp = 0;
        while (num1 != 0) {
            temp = num2 % num1;
            num2 = num1;
            num1 = temp;
        }
        return num2;
    }
}

module.exports = GreatestCommonDivisor;
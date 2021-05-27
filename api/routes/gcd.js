const express = require("express");
const router = express.Router();
// const igcd = require("./igcd");

// class GreatestCommonDivisor extends igcd {

//     constructor() {
//         super();
//     }

    // /**
    //  * 
    //  * @param {array} numbers array of numbers to be computed
    //  * @returns the greatest common divisor of all numbers
    //  */
    // function greatestCommonDivisor(numbers) {
    //     let res = 0;
    //     numbers.forEach((number) => {
    //         res = gcdOperations(res, number);

    //         if (res == 1) {
    //             return 1;
    //         }
    //     });

    //     return res;
    // }

    // /**
    //  * 
    //  * @param {int} num1 current greatest common divisor
    //  * @param {int} num2 next number
    //  * @returns the greatest common divisor of two numbers
    //  */
    // function gcdOperations(num1, num2) {
    //     let temp = 0;
    //     while (num1 != 0) {
    //         temp = num2 % num1;
    //         num2 = num1;
    //         num1 = temp;
    //     }
    //     return num2;
    // }
// }

/**
     * 
     * @param {array} numbers array of numbers to be computed
     * @returns the greatest common divisor of all numbers
     */
function greatestCommonDivisor(numbers) {
    let res = 0;
    numbers.forEach((number) => {
        res = gcdOperations(res, number);

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
function gcdOperations(num1, num2) {
    let temp = 0;
    while (num1 != 0) {
        temp = num2 % num1;
        num2 = num1;
        num1 = temp;
    }
    return num2;
}

/**
 * 
 */
router.post('/gcd', function(req, res) {
    try {
        let input = req.body.input;
        console.log(input);
        let result = greatestCommonDivisor(input);

        return res.status(200).send(result.toString(10));
    } catch(err) {
        console.error(err);
    }
});

module.exports = {
    greatestCommonDivisor,
    gcdOperations,
    router,
};
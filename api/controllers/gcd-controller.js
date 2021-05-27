const express = require("express");
const router = express.Router();
const gcd = require("../classes/gcd");
const GreatestCommonDivisor = new gcd();

/**
 * 
 */
 router.post('/gcd', function(req, res) {
    try {
        let input = req.body.numbers;
        input = input.trim()
        input = input.replace(/[^0-9\s-]+/g, '').replace(/\s\s+/g, ' ')
        input = input.split(" ");
        for (let i = 0; i < input.length; i++) {
            input[i] = Math.abs(parseInt(input[i]));
        }

        let result = GreatestCommonDivisor.arrayGreatestCommonDivisor(input);

        return res.status(200).json({
            "gcd": result.toString(10)
        });
    } catch(err) {
        console.error(err);
    }
});

module.exports = router;
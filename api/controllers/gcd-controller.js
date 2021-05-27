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
        let result = GreatestCommonDivisor.arrayGreatestCommonDivisor(input);

        return res.status(200).json({
            "gcd": result.toString(10)
        });
    } catch(err) {
        console.error(err);
    }
});

module.exports = router;
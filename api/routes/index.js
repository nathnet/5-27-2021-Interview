const express = require('express');
const router = express.Router();

router.use('/', require('./gcd').router);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

var color = 'red';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/traffic', function (req, res, next) {

  if (color === 'red') {
    color = 'yellow';
  } else if (color === 'yellow') {
    color = 'green';
  } else if (color === 'green') {
    color = 'red';
  }

  res.json({ "active": color })
});


module.exports = router;

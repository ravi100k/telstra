let color = require('../services/Signal_State_Manager').active_signal_color;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/traffic', (req, res, next) => {
  res.json(color)
});


module.exports = router;

var express = require('express');
var router = express.Router();

const library = require('js-svg-path');

var sp = require('../js/svgToShape.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	sp.svgpr();
	
	
  res.render('collection', { title: 'G-code viewer' });
});

module.exports = router;

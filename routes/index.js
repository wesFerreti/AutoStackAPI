var express = require('express');
var router = express.Router();

var tcp = require('../bin/modBusClientTCP');  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AutoStack REST API' });


});





module.exports = router;

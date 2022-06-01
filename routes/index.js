/**
 * Module dependencies.
 */
 const express = require('express');

 /**
  * Express router.
  */
 const router = express.Router();
 
/**
 * Routes.
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

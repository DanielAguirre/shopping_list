'use strict'
const express = require('express');
const apiController = require('./controller')();

const router = express.Router();

router.get('/shopping_lists/', apiController.findAll);

router
	.route('/shopping_lists/:id?')
	.all(function(req,res,next){
		res.set('Content-Type','application/json');
		next();
	})
	.post(apiController.save)
	.get(apiController.find)
	.put(apiController.update)
	.delete(apiController.delete);

module.exports = router;
'use strict'
const express = require('express');
const apiController = require('./controller');

const router = express.Router();

router.get('/shopping_lists/', apiController.getAll);

router
	.route('/shopping_lists/:id?')
	.all(function(req,res,next){
		console.log(req.method,req.path);
		res.set('Content-Type','application/json');
		next();
	})
	.post(apiController.post)
	.get(apiController.fetch)
	.put(apiController.restore)
	.delete(apiController.remove);

module.exports = router;
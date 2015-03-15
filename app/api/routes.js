var express = require('express'),
	apiController = require('./controller');

var router = express.Router();

router.get('/shopping_lists/', apiController.getAll);
            
router
	.route('/shopping_lists/:id?')
	.all(function(req,res,next){
		console.log(req.method,req.path);
		res.set('Content-Type','application/json');
		next();
	})
	.post(apiController.save)
	.get(apiController.get)
	.put(apiController.update)
	.delete(apiController.delete)
	;

module.exports = router;
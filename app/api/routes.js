var express = require('express'),
	apiController = require('./controller');

var crouter = express.Router();

router.get('/shopping_lists/' , apiController.getAll);

module.exports = router;
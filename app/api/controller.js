var modelShoppinglist = require('model/shoppinglist')
var ApiController = {};

ApiController.getAll = function(req, res){
	modelShoppinglist.findAll(function(data){
		res.json({shoppinglist:data});
	})
}
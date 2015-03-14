var modelShoppinglist = require('./model/shoppinglist')
var ApiController = {};

ApiController.getAll = function(req, res){
	modelShoppinglist.findAll(function(data){
		res.json({shoppinglist:data});
	})
}

ApiController.save = function(req,res){	
	modelShoppinglist.save(req.body.list, function(data){		
		res.json(data);
	});	
}

module.exports = ApiController;
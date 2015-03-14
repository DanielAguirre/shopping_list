var modelShoppinglist = require('./model/shoppinglist')
var ApiController = {};

ApiController.getAll = function(req, res) {
	modelShoppinglist.findAll(function(data){
		res.json({shoppinglist:data});
	})
};

ApiController.save = function(req,res) {	
	modelShoppinglist.save(req.body.list, function(data){		
		res
			.status(201)
			.set('Content-Type','application/json')
			.json(data);
	});	
};

ApiController.get = function(req,res) {	
	modelShoppinglist.get(req.params.id, function(data){		
		res.json(data);
	})
}

module.exports = ApiController;
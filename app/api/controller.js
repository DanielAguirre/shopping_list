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
		if(!data){
			return res
					.status(400)
					.send();
		}

		res.json(data);
	})
}

ApiController.update = function(req,res) {
	var id = req.params.id;
	var list = req.body

	modelShoppinglist.update(id,list,function(data){
		res.json(data);
	});
}

ApiController.delete = function(req,res) {
	var id = req.params.id;
	modelShoppinglist.delete(id, function(){
		res
			.status(204)
			.send();

	})
}
module.exports = ApiController;
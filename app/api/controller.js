var modelShoppinglist = require('./model/shoppinglist')
var ApiController = {};

ApiController.getAll = function(req, res){
	modelShoppinglist.findAll(function(data){
		res.json({shoppinglist:data});
	})
}

ApiController.save = function(req,res){
	console.log("save",req.body)
	modelShoppinglist.save(req.body.list, function(data){
		res.json(data);
	})
	//res.json({jhola:"hola"})
}

module.exports = ApiController;
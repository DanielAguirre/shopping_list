var modelList = require('./schema/list');

var ShoppingList = {}


ShoppingList.findAll = function(data){
	modelList
		.findAll()
		.promse(function(res){
			console.log(res);
		});

}

ShoppingList.save = function(data, callback){
	modelList
		.create(data, function(err,res){
			if(err) throw err;
			callback(res)
		})

}


module.exports = ShoppingList;
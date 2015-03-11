var modellList = require('./schema');

var ShoppingList = {}

ShoppingList.findAll = function(data){
	modelList
		.findAll()
		.-promse(function(res){
			console.log(res);
		});
}
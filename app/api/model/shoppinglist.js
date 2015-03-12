var conf = require('../../../conf'),
	Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://'+conf.pg.user+':'+conf.pg.password+'@example.com:5432/'+conf.pg.database);

var ShoppingList = {}

var Product = sequelize.define('products',{
	'product': { type:Sequelize.TEXT, allowNull: false},
	'price': { type:Sequelize.FLOAT(11,12), allowNull: false}
});

var List = sequelize.define('list',{
	'total'	: { type:Sequelize.FLOAT(11,12),  allowNull: false}	
	}, {'timestamps':true}
);



ShoppingList.findAll = function(data){
	lList
		.findAll()
		.promse(function(res){
			console.log(res);
		});

}

module.exports = ShoppingList;
var Sequelize = require('sequelize'),
	product = require('./product');
	
var List = sequelize.define('list',{
	'total'	: { Sequelize.FLOAT(11,12),  allowNull: false}
	'timestamps':true
});

List.hasMany(product);

module.export = List;
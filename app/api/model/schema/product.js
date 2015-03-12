var Sequelize = require('sequelize');

var Product = sequelize.define('products',{
	'product': { Sequelize.TEXT, allowNull: false},
	'price': { Sequelize.FLOAT(11,12), allowNull: false}
});

module.exports = Product;
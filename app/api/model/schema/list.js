var mongoose = require('mongoose'),
	Schema = mongoose.Schmea;
	product = require('./product');
	
var List = sequelize.define('list',{
	'total'	: {type:'Number',required: true }
	'product':[product],
	'createdAt': Date
});;

module.export = List;
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	product = require('./product');
	
var ListSchema = new Schema({
	'total'	: {type:'Number',required: true },
	'products':{type : Array },
	'createdAt': Date
});

var List = mongoose.model('List', ListSchema);

module.exports = List;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;	
	
var ListSchema = new Schema({
	'total'	: {type:'Number',required: true },
	'products':{type : Array },
	'createdAt': Date
});

const List = mongoose.model('List', ListSchema);

module.exports = List
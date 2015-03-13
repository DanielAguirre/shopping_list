var mongoose = require('mongoose'),
	Schema = mongoose.Schmea;

var ProductSchema new Schema({
	'product':'string',
	'price':{type:'Number',required: true }
});


module.exports = Product;
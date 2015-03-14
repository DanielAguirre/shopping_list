var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProductSchema = new Schema ({
	'product':'string',
	'price':{type:'Number',required: true }
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
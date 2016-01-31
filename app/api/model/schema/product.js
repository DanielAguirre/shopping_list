const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
	'product':'string',
	'price':{type:'Number',required: true }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
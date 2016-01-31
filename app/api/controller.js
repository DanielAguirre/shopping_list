'use strict'

const modelShoppinglist = require('./model/shoppinglist')
const ApiController = {

	getAll: function(req, res) {	
		modelShoppinglist.findAll(function(data){
			res.json(data);
		})
	},

	save: function(req,res) {	
		modelShoppinglist.save(req.body.list, function(data){		
			res
				.status(201)
				.set('Content-Type','application/json')
				.json(data);
		});	
	},

	get: function(req,res) {	
		modelShoppinglist.get(req.params.id, function(data){
			if(!data){
				return res
						.status(400)
						.send();
			}

			res.json(data);
		})
	},

	update: function(req,res) {
		let id = req.params.id;
		let list = req.body

		modelShoppinglist.update(id,list,function(data){
			res.json(data);
		});
	},

	delete: function(req,res) {
		let id = req.params.id;
		modelShoppinglist.delete(id, function(){
			res
				.status(204)
				.send();

		})
	},
};
module.exports = ApiController;
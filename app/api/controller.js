'use strict'

const ApiController = Object.create(require('../models/shoppinglist'));

ApiController.getAll= function(req, res) {	
	this.findAll((data) =>{
		res.json(data);
	})
}.bind(ApiController)

ApiController.post = function(req,res) {		
	this.save(req.body.list, (data) =>{
		res
			.status(201)
			.set('Content-Type','application/json')
			.json(data);
	});
}.bind(ApiController);

ApiController.fetch= function(req,res) {	
	this.get(req.params.id, (data) => {
		if(!data){
			return res
				.status(400)
				.send();
		}
		res.json(data);
	})
}.bind(ApiController)

ApiController.restore= function(req,res) {
	let id = req.params.id;
	let list = req.body

	this.update(id,list, (data) =>{
		res.json(data);
	});
}.bind(ApiController)

ApiController.remove= function(req,res) {
	let id = req.params.id;
	this.delete(id, () =>{
		res
			.status(204)
			.send();

	})
}.bind(ApiController)

module.exports = ApiController;
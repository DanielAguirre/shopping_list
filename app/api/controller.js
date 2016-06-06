'use strict'
const ListModel = require('../database/shoppinglist');

const ApiController= function(){
	return {
		find: (req,res) =>{
			ListModel.get(req.params.id, (data) => {
					if(!data){
					return res.status(400)
							.send();
				}
				
				res.json(data);
			})
		},

		findAll:(req, res) =>{
			ListModel.find((data)=>{
				res.json(data)
			})
		},

		save: (req, res) =>{
			ListModel.save(req.body.list, (data) =>{
				res.status(201)
					.set('Content-Type','application/json')
					.json(data);
			});
		},

		update: (req, res) => {
			let id = req.params.id;
			let list = req.body

			ListModel.update(id,list, (data) =>{
				res.json(data);
			});		
		},

		delete: (req, res) => {
			let id = req.params.id;
			ListModel.delete(id, () =>{
				res.status(204)
					.send();
			});
		},
	}
}

/*ApiController.getAll= function(req, res) {	
	this.findAll((data) =>{
		res.json(data);
	})
}.bind(ApiController)*/

/*ApiController.post = function(req,res) {		
	this.save(req.body.list, (data) =>{
		res
			.status(201)
			.set('Content-Type','application/json')
			.json(data);
	});
}.bind(ApiController);*/

/*ApiController.fetch= function(req,res) {	
	this.get(req.params.id, (data) => {
		if(!data){
			return res
				.status(400)
				.send();
		}
		res.json(data);
	})
}.bind(ApiController)*/

/*ApiController.restore= function(req,res) {
	let id = req.params.id;
	let list = req.body

	this.update(id,list, (data) =>{
		res.json(data);
	});
}.bind(ApiController)*/

ApiController.remove= function(req,res) {
	let id = req.params.id;
	this.delete(id, () =>{
		res
			.status(204)
			.send();

	})
}.bind(ApiController)

module.exports = ApiController;
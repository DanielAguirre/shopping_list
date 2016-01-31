'use strict'					   
var request = require('supertest-as-promised'),
	api = require('../server'),
	host = process.env.API_TEST_HOST || api,
	url= '/api/shopping_lists',
	_ = require('lodash');

request = request(host);

var data = {
	'list':{
		'products':[{
			'product':'milk',
			'price':'20.50'
		}],
		'total':'20.50'
	}
};

describe('recurso /list',function(){
	describe('POST',function(){
		it('should create a new shopping list', function(done){
			request
				.post(url)
				.set('Accept','application/json')
				.send(data)
				.expect('Content-Type',/application\/json/)
				.expect(201)
				.end(function(err,res){	
					var body = res.body;
					
					expect(body).to.have.property('products')
					var products = body.products;
					
					//Properties
					expect(products[0]).to.have.property('product','milk');
					expect(products[0]).to.have.property('price','20.50');
					expect(body).to.have.property('total',20.5);
					expect(body).to.have.property('_id');
					done();
				});			
		});
	});

	describe('GET', function(){
		it('should get an existing list', function(done){
			var id;
			request
				.post(url)
				.set('Accept','application/json')
				.send(data)
				.expect(201)
				.then(function(res){
					id = res.body._id;
					return request
							.get(url+'/'+id)
							.expect(200)
							.expect('Content-Type',/application\/json/)
				}, done)
				.then(function(res) {
					var body = res.body;
					var products = res.body.products;
					//Properties
					expect(products[0]).to.have.property('product','milk');
					expect(products[0]).to.have.property('price','20.50');
					expect(body).to.have.property('total',20.5);
					expect(body).to.have.property('_id', id);
					done();
				}, done);
		})
		it('shoulld get a list of all shopping lists',function(done){
			var id1,id2;
			var data1 = {
				'list':{
					'products':[{
						'product':'bread',
						'price':'7.50'
					},{
						'product':'coffe',
						'price':'11.75'
					}],
					'total':'19.25'
				}				
			};

			var data2 = {
				'list':{
					'products':[{
						'product':'milk',
						'price':'10.50'
					},{
						'product':'juice',
						'price':'3.25'
					}],
					'total':'13.75'
				}				
			};

			request
				.post(url)
				.set('Accept','application/json')
				.send(data1)
				.expect(201)
				.expect('Content-Type',/application\/json/)
				.then(function(res){
					id1 = res.body._id;

					return request
							.post(url)
							.set('Accept','application/json')
							.send(data2)
							.expect(201)
							.expect('Content-Type',/application\/json/)

				}, done)
				.then(function(res){
					id2 = res.body._id;
					return request
							.get(url)
							.expect(200)
							.expect('Content-Type',/application\/json/)
				}, done)
				.then(function(res){
					var lists = res.body;

					expect(lists).to.be.an('array')
							.and.to.have.length.above(0);

					var list1 = _.find(lists,{_id:id1})
					var list2 = _.find(lists,{_id:id2})

					var products1 = list1.products;
					var products2 = list2.products;
					expect(products1[0]).to.have.property('product','bread');
					expect(products1[0]).to.have.property('price','7.50');
					expect(products1[1]).to.have.property('product','coffe');
					expect(products1[1]).to.have.property('price','11.75');
					expect(list1).to.have.property('total',19.25);
					expect(list1).to.have.property('_id', id1);

					expect(products2[0]).to.have.property('product','milk');
					expect(products2[0]).to.have.property('price','10.50');
					expect(products2[1]).to.have.property('product','juice');
					expect(products2[1]).to.have.property('price','3.25');
					expect(list2).to.have.property('total',13.75);
					expect(list2).to.have.property('_id', id2);

					done();
				}, done)
		})
	})

	describe('PUT', function(){
		it('should update an existing list', function(done){
			var id;
			request
				.post(url)
				.set('Accept','application/json')
				.send(data)
				.expect(201)
				.then(function(res){
					id = res.body._id;
					return request
							.get(url+'/'+id)							
							.expect('Content-Type',/application\/json/)
							.send();
				}, done)
				.then(function(res){
					var list = res.body;

					list
						.products
						.push({
							'product':'water',
							'price':'12'
						}) 
						return request
								.put(url+'/'+id)
								.send(list)
								.expect(200)
								.expect('Content-Type',/application\/json/)
				}, done)
				.then(function(res){
					var list = res.body;
					var products = res.body.products;
					//Properties
					expect(products[0]).to.have.property('product','milk');
					expect(products[0]).to.have.property('price','20.50');
					expect(products[1]).to.have.property('product','water');
					expect(products[1]).to.have.property('price','12');
					expect(list).to.have.property('total',20.5);
					expect(list).to.have.property('_id', id);
					done();
				}, done);
		})
	})
	describe('DELETE', function(){
		it('should delete an existing list',function(done){
			var id;

			request
				.post(url)
				.set('Accept','application/json')
				.send(data)
				.expect(201)
				.then(function(res){
					console.log("id_",res.body._id)
					id = res.body._id
					return request
							.delete(url+'/'+id)
							.set('Accept','application/json')
							.expect(204)
				}, done)
				.then(function(res){
					return request
							.get(url+'/'+id)
							.expect(400)
				},done)
				.then(function(res){
					done();
				},done)
		});
	})
});
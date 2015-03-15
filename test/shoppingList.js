'use strict'					   
var request = require('supertest-as-promised'),
	api = require('../server'),
	host = process.env.API_TEST_HOST || api,
	url= '/api/shopping_lists';

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
		it('sgould delte an existing list',function(done){
			var id;

			console.log(data);
			request
				.post(url)
				.set(data)
				.expect(201)
				.then(function(res){
					id = res.body._id
					return request
							.delete(utl+'/'+id)
							.set('Accept','application/json')
							.expect(204)
				}, done)
				.then(function(res){
					return request
							.get(utl+'/'+id)
							.expect(400)
				},done)
				.then(function(res){
					done();
				},done)
		});
	})
});
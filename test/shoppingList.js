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
		it('shoud create a new shopping list', function(done){
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
});
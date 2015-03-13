'use strict'

var request = require('supertest-as-promised'),
	api = require('../server'),
	host = process.env.API_TEST_HOST || api,
	url= '/api/shopping_lists';

request = request(host);

var data = {
	'list':{
		'products':{
			'product':'milk',
			'price':'20.50'
		},
		'total':'20.50'
	}
};

describe('recurso /list',function(){
	describe('POST',function(){
		it('shoud create a new shopping list', function(done){
			console.log(url);
			request
				.post(url)
				.set('Accept','application/json')
				.send(data)
				.expect('Content-Type',/application\/json/)
				.expect(201)
				.end(function(err,res){
					console.log(res)
					var body = res.body;
	
					expect(body).to.have.property('list')

					var list = body.list;

					//Propiedades
					expect(list).to.have.property('products.product','milk');
					expect(list).to.have.property('products.product.price','20.50');
					expect(list).to.have.property('total','20.50');
					expect(list).to.have.property('id');
					done();
				});			
		});
	});
});
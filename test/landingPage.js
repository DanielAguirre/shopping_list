'use strict'
let request = require('supertest-as-promised');
const serer = require('../server');
const host = process.env.API_TEST_HOST || serer;
const url ='/';

request = request(host)
describe('source /', function() {
	describe('Landing Page', function () {
		it('Should display the home page', function(done){
			request
				.get(url)
				.set('Accept','text/html')
				.expect('Content-Type',/text\/html/)
				.expect(200)
				.end(function () {
					assert.equal(200,res.status,'Status code 200')
					done()
				})
		})
	})
	describe('Signin Page', function () {
		it('Should display the sign page with 3 buttons ', function(done){
			request
				.get(url+'signin')
				.set('Accept','text/html')
				.expect('Content-Type',/text\/html/)
				.expect(200)
				.end(function (err, res) {
					var body = res.text					
					expect(body.indexOf('<button>Twitter</button><button>Facebook</button><button>Gmail</button>')).to.not.equal(-1)
					done()
				})
		})
	})
})
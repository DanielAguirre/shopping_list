'use strict'
const https = require('http');
const	mongoose = require('mongoose');
const conf = require('./conf');
const expressServer = require('./app/expressServer');


mongoose.connect('mongodb://'+ conf.mongoDB.host+ '/'+ conf.mongoDB.name);

const app = Object.create(expressServer)//new expressServer();


const server = new https.createServer(app.init);

if(!module.parent){
	server.listen(conf.port, function(){
		console.log('app runining in port 3000')
	});
}else {
	module.exports = server;
}

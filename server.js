'use strict'
const http = require('http');
const	mongoose = require('mongoose');
const conf = require('./conf');
const expressServer = require('./app/expressServer');


mongoose.connect('mongodb://'+conf.mongoDB.host+'/'+conf.mongoDB.name);

const app = new expressServer();

const server = new http.createServer(app.expressServer);;

if(!module.parent){
	server.listen(conf.port,function(){
		console.log('app runining in port 3000')
	});
}else {
	module.exports = server;
}

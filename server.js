var http = require('http'),	
    conf = require('./conf'), 
    expressServer = require('./app/expressServer');


var app = new expressServer();

var server = new http.createServer(app.expressServer);;

if(!module.parent){
	server.listen(conf.port,function(){
		console.log('app runining in port 3000')
	});
}else {
	module.exports = server;
}
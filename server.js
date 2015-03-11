var http = require('http'),
	Sequelize = require('sequelize'),
    conf = require('./conf'),    
    expressServer = require('./app/expressServer');

var sequelize = new Sequelize('postgres://'+conf.pg.user+':'+conf.pg.password+'@example.com:5432/'+conf.pg.database);

var app = new expressServer();

var server = new http.createServer(app.expressServer);;

if(!module.parent){
	server.listen(conf.port,function(){
		console.log('app runining in port 3000')
	});
}else {
	module.exports = server;
}
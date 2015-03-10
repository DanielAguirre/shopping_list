var env = process.env.NODE_EN || 'production',
    express = require('express'),
    swig = require('swig');

var ExpressServer = function (){

    this.expressServer = express()

    if(env === 'development') {
    	console.log("NO HAY CHACHE");
    	this.expressServer,set('view cache', false);
    }

    this.expressServer.engine('html',swig.renderFile);
    this.expressServer.set('view cache','html');
    this.expressServer.set('views',__dirname+'/webapp/views');
}


module.exports = ExpressServer;
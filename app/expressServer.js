var env = process.env.NODE_EN || 'production',
    express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser');

var ExpressServer = function (){

    this.expressServer = express()

    //middlewares
    this.expressServer.use(bodyParser.json());
    if(env === 'development') {
    	console.log("NO HAY CHACHE");
    	this.expressServer,set('view cache', false);
    }

    this.expressServer.engine('html',swig.renderFile);
    this.expressServer.set('view cache','html');
    this.expressServer.set('views',__dirname+'/webapp/views');
}


module.exports = ExpressServer;
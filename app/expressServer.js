var env = process.env.NODE_EN || 'production',
    express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    urls = require('./urls');

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

    for(var ulr in urls){
        this.expressServer.use(url, urls[url]);
    }
}


module.exports = ExpressServer;
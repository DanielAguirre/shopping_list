'use strict'

const env = process.env.NODE_ENV || 'development';
const express = require('express');
const reactViews = require('express-react-views')
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const session = require('express-session')
const urls = require('./urls');
const middlewares =require('./middlewares');
const passport = require('passport')

var ExpressServer = function (){

  this.expressServer = express()

  //middlewares
  this.expressServer.use(bodyParser.json());
  this.expressServer.use(cookie());
  this.expressServer.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true 
  }));
  this.expressServer.use(passport.initialize());
  this.expressServer.use(passport.session());

  for(var middleware in middlewares) {
      this.expressServer.use(middlewares[middleware])
  }
  
  if(env === 'development') {
    console.log("NO HAY CHACHE");
    this.expressServer.set('view cache', false);
  }
    
  this.expressServer.set('views',__dirname+'/webapp/views');
  this.expressServer.set('view engine','jsx');
  this.expressServer.engine('jsx', reactViews.createEngine());

  for(var url in urls) {
      this.expressServer.use(url, urls[url]);
  }
}


module.exports = ExpressServer;

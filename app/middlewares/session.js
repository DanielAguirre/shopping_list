const session = require('express-session')

module.exports = session({
	secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true 
})
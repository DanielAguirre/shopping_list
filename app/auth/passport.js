'use strict'
const Passport = require('passport')
const twitter = require('./twitter')

Passport.serializeUser((user,done) => done(null, user))
Passport.deserializeUser((user,done) =>{				
	done(null, user)
})

Passport.use(twitter)

module.exports = Passport;


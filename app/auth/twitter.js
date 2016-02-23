'use strict'
const Twitter = require('passport-twitter').Strategy
const User = require('../database/user')

module.exports = new Twitter({
	consumerKey		 : '',
	consumerSecret : '',
	callbackURL		 : 'http://127.0.0.1:3000/login/twitter/callback'
}, (token, tokenSecret, profile, done) => {
	User.fetchOne({
		'username':    profile.username,
		'displayName': profile.displayName,
		'photo': 			 profile.photos[0].value,
		'provider': 	 profile.provider,
		'provider_id': profile.id,
	}, (err, user) => {
		if (err) throw err
		done(null, user)
	})
})

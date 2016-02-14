'use strict'
const TwitterStrategy = require('passport-twitter').Strategy

module.exports = new TwitterStrategy({
	consumerKey		 : TWITTER_COMSUMER_KEY,
	consumerSecret : TWITTER_COMSUMER_SECRET,
	callbackURL		 : 'http://127.0.0.1:3000/login/twitter/callback'
}, (token, tokenSecret, profile, cb) => {
	process.nextTick(()=>{
		console.log("token",token, tokenSecret,profile.id, profile)	
		cb(null, profile)
	})
	

})

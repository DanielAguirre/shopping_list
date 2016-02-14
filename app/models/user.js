const modelUser = require('./schema/user')

const User = {
	fetchOne: function(profile, done) {
		modelUser
			.findOne({"provider_id": profile.provider_id}, (err, res) =>{
				if(err) return done(err)

				if(res) return done(null, res)

				User.save(profile, (err, user) =>{
					if(err) return done(err)
					
					if(user) return done(null, user)
				})
			})
	},
	save: function(user, done) {
		modelUser
			.create(user, (err, res) =>{
				if (err) return done(err)
				done(null, res)
			})
	}
}

module.exports = User
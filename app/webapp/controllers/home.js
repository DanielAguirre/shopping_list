'use strict'

const Home = {	
	home: function (req, res) {
		if (req.isAuthenticated()) {
			res.redirect('welcome')
		}
		res.render('index')
	},
	login: function(req, res) {
		res.render('login',{title:'Registrate'})
	},
	logout: function(req, res){
		req.session.destroy()
		res.redirect('/')
	},
	signin: function(req, res) {
		res.render('signin',{title:'Sing in'})
	},
	welcome: function(req, res) {
		res.render('welcome', {title:'welcome',user: req.user})
	}
};

module.exports = Home;
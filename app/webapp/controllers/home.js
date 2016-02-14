'use strict'

const Home = {	
	home: function (req, res) {
		res.render('index')
	},
	login: function(req, res) {
		res.render('login',{title:'Registrate'})
	},
	signin: function(req, res) {
		res.render('signin',{title:'Sing in'})
	},
	welcome: function(req, res){
		res.render('welcome', {title:'welcome',user: req.user})
	}
}

module.exports = Home
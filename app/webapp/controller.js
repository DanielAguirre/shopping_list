'use strict'

const HomeController = {
	home: function (req, res) {
		res.render('index')
	},
	login: function(req, res) {
		res.render('login',{title:'Registrate'})
	},
	signin: function(req, res) {
		res.render('signin',{title:'Sing in'})
	}
}

module.exports = HomeController
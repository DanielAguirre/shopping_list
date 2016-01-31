'use strict'

const HomeController = {
	home: function (req, res) {
		res.render('index')
	},
	login: function(req, res) {
		res.render('login')
	},
	signin: function(req, res) {
		res.render('signin')
	}
}

module.exports = HomeController
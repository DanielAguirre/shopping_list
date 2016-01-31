'use strict'

const HomeController = {
	home: function (req, res) {
		res.render('index', {})
	}
}

module.exports = HomeController
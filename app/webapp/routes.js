'use strict'
const express = require('express');
const homeController = require('./controllers/home');
const auth = require('../auth')
const router = express.Router();

router.get('/login', homeController.login);
router.get('/login/twitter', auth.authenticate('twitter'));
router.get('/login/twitter/callback', auth.authenticate('twitter', {
	  successRedirect: '/welcome',
    failureRedirect: '/login' 
}));
router.get('', homeController.home)


module.exports = router;
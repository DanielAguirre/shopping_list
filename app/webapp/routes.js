'use strict'
const express = require('express');
const homeController = require('./controller');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.get('', homeController.home);
router.get('/login', homeController.login);
router.get('/logout', homeController.logout);
router.get('/welcome', authMiddleware.ensure, homeController.welcome);
//router.get('/welcome', homeController.welcome);

module.exports = router;
'use strict'
const express = require('express');
const homeController = require('./controller');
const router = express.Router();

router.get('/signin', homeController.signin);
router.get('', homeController.home)

module.exports = router;
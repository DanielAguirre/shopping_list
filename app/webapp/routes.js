'use strict'
const express = require('express');
const homeController = require('./controller');
const router = express.Router();

router.get('/', homeController.home);

module.exports = router;
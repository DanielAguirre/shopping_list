'use strict'
const express = require('express');
console.log('dirname',__dirname)
module.exports = express.static('public')
const express = require('express');
const catchAsync = require('../utils/catchAsync');
const HomeCtrl = require('../controllers/home-ctrl');

const router = express.Router();

router.get('/home', catchAsync(HomeCtrl.statistics));

module.exports = router;
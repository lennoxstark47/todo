const express = require('express');
const router = express.Router();

//setting path for home controller
const homeController = require('../controllers/home_controller');

console.log('Router Loaded');

//setting controller function to a route
router.get('/', homeController.home);
//routing all reqs starting with '/action' to action route
router.use('/action',require('./action'))

module.exports = router;
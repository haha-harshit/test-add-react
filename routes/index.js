const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main_controller');

router.get('/', mainController.home);

router.use('/route2', require('./route2'));

console.log('Router loaded!');

module.exports = router;
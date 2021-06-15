const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main_controller');

router.get('/', mainController.home);

console.log('Router loaded!');

module.exports = router;
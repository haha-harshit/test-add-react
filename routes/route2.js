const express = require('express');
const router = express.Router();

const route2Controller = require('../controllers/route2Controller');

router.get('/', route2Controller.route2);

// console.log('Router loaded!');

module.exports = router;
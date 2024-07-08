const express = require('express');
const router = express.Router();

const couresController = require('../app/controllers/coures.controller');

router.get('/', couresController.index);

module.exports = router;

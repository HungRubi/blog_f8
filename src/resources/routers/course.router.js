const express = require('express');
const router = express.Router();

const couresController = require('../app/controllers/coures.controller');

router.post('/store', couresController.store);
router.get('/create', couresController.create);
router.get('/:slug', couresController.show);
router.get('/', couresController.index);

module.exports = router;

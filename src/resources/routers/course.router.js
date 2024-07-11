const express = require('express');
const router = express.Router();

const couresController = require('../app/controllers/coures.controller');

router.get('/list-course', couresController.listCourses);
router.get('/list-course/:id/edit', couresController.editCourse);
router.put('/list-course/:id/', couresController.updateCourse);
router.post('/store', couresController.store);
router.get('/create', couresController.create);
router.get('/:slug', couresController.show);
router.get('/', couresController.index);

module.exports = router;

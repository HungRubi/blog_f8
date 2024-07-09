const Course = require('../model/course.model');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
class CouresController {
    //[GET] /course
    index(req, res, next) {
        Course.find({})
            .then((course) => {
                res.render('course', {
                    course: mutipleMongooseToObject(course),
                });
            })
            .catch((error) => next(error));
    }

    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/showCourse', {
                    course: mongooseToObject(course),
                });
            })
            .catch((error) => next(error));
    }

    //{GET} /course/create
    create(req, res, next) {
        res.render('courses/createCourse');
    }

    //[POST] /course/store
    store(req, res) {
        res.json(req.body);
    }
}
module.exports = new CouresController();

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
    store = async (req, res, next) => {
        try {
            const formData = req.body;
            formData.image = `https://i.ytimg.com/vi/${req.body.videoID}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdDoWybKmwAh9u7av6uJY5YtEEDw`;

            let slug = formData.name.toLowerCase().replace(/\s+/g, '-');
            var count = 1;
            while (true) {
                const exitCourse = await Course.findOne({ slug });
                if (!exitCourse) {
                    break;
                }
                slug = `${req.body.name.toLowerCase().replace(/\s+/g, '-')}-${count}`;
                count++;
            }
            formData.slug = slug;
            const course = new Course(formData);
            await course.save();
            res.redirect('/course');
        } catch (error) {
            next(error);
        }
    };

    //[GET] course/list-course
    listCourses(req, res, next) {
        Course.find({})
            .then((course) =>
                res.render('courses/listCourse', {
                    course: mutipleMongooseToObject(course),
                }),
            )
            .catch((error) => next(error));
    }

    //[GET] course/list-course/:id/edit
    editCourse(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/updateCourse', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //[PUT] course/list-course/:id
    updateCourse(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/course/list-course'))
            .catch(next);
    }
}
module.exports = new CouresController();

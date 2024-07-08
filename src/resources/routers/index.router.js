const siteRouter = require('../routers/site.router');
const couresRouter = require('../routers/course.router');

function router(app) {
    app.use('/course', couresRouter);
    app.use('/', siteRouter);
}
module.exports = router;

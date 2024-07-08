class CouresController {
    index(req, res, next) {
        res.render('course');
    }
}
module.exports = new CouresController();

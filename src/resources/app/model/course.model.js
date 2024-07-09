const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema(
    {
        name: String,
        description: String,
        image: String,
        slug: String,
        videoID: String,
        level: String,
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('course', course);

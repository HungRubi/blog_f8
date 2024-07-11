const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

// mongoose.plugin(slug);

const course = new Schema(
    {
        name: String,
        description: String,
        image: String,
        // slug: 'name'
        slug: String,
        videoID: String,
        level: String,
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('course', course);

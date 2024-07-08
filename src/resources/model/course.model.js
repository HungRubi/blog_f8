const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coures = new Schema(
    {
        name: String,
        price: String,
        description: String,
        videoID: String,
        image: String,
    },
    {
        timestamps: true,
    },
);
module.exports = coures;

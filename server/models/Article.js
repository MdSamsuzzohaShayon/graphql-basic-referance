const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('article', articleSchema);
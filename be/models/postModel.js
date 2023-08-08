const mongoose = require('mongoose');

const PostModelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true  
    },
    author: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
}, {timestamps: true, strict: true})


module.exports = mongoose.model('Post', PostModelSchema, 'posts');
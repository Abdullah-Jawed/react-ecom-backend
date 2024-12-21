const mongoose = require('mongoose');
const { required } = require('../validators/auth-validator');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image_link: {
        type: String,
        required: true,
    }
});


const Category = mongoose.model('Category', CategorySchema, 'category');
module.exports = Category;

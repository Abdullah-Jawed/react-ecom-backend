const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cateogry_id: {
        type: Number,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    cut_price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image_link: {
        type: String,
        required: true,
    }
});


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
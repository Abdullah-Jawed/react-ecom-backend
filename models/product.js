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

ProductSchema.virtual('product_media', {
    ref: 'ProductMedia', // Model to reference
    localField: '_id',   // Field in Product
    foreignField: 'product_id' // Field in ProductMedia
});


ProductSchema.set('toJSON', { virtuals: true, id: false });
ProductSchema.set('toObject', { virtuals: true, id: false });  

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
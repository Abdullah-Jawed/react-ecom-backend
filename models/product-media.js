const mongoose = require('mongoose');


const ProductMediaSchema = mongoose.Schema({
    product_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    image_link:{
        type: String,
        required: true,
    }
});

const ProductMedia = mongoose.model('ProductMedia', ProductMediaSchema);
module.exports = ProductMedia;
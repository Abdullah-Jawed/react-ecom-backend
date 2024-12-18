const Product = require('../models/product');
const ProductMedia = require('../models/product-media');
const mongoose = require('mongoose');


const get_all = async (req, res) => {
    try {
        const products = await Product.find({ cateogry_id: 1 });
        res.status(200).json({ products });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const product_detail = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findOne({ _id: productId }).populate({
            path: 'product_media', // Field to populate
            select: 'image_link -_id -product_id' // Only fetch `image_link` (exclude `_id`)
        }).lean();
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const save = async (req, res) => {
    try {
        const product = new Product(req.body);
        const result = await product.save();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const add_media = async (req, res) => {
    try{  
        const id = new mongoose.Types.ObjectId(req.body.product_id);
        const image_link = req.body.image_link;
        const product_media = new ProductMedia({
            product_id: id,
            image_link
        });
        const result = await product_media.save();
        res.status(200).json(result);
    }
    catch (error){
        res.status(500).json({ message: error.message });
    }
}

module.exports = { get_all, product_detail, save, add_media };
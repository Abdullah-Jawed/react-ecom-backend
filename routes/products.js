const express = require('express');
const router = express.Router();
const Product = require('../models/product');


router.post('/save', async function (req, res) {
    try {
        const product = new Product(req.body);
        const result = await product.save();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/get_all', async function (req, res) {
    try {
        const products = await Product.find({ cateogry_id: 1 });
        res.status(200).json({ products });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/product-detail/:productId', async function (req, res) {
    try {
        const productId = req.params.productId;
        const product = await Product.findOne({ _id: productId });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
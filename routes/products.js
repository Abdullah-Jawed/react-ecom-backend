const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');


router.post('/save', productController.save);

router.get('/get_all', productController.get_all);

router.get('/product-detail/:productId', productController.product_detail);

router.post('/media_save', productController.add_media);

module.exports = router
const express = require('express');
const router = express.Router();
const Category = require('../models/category');


router.post('/create', async function(req, res){
    try{
        const category = new Category({
            name: req.body.name,
            color: req.body.color
        });

        const savedCategory = await category.save();
        res.status(200).json(savedCategory);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
});

router.get('/get', async function(req, res){
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
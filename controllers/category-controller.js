const Category = require('../models/category');

const create = async (req, res) => {
    try {
        const category = new Category(req.body);

        const savedCategory = await category.save();
        res.status(200).json(savedCategory);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const get = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleterow = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const deleted_row = await Category.deleteOne({ _id: id });
        res.status(200).json(deleted_row);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { create, get, deleterow }
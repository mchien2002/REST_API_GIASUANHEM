const { Category } = require("../models/categoryModel");
const categorytController = {
    add: async (req, res) => {
        try {
        const newItem = new Category(req.body);
        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const newItem = await Category.find();
            res.status(200).json(newItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = categorytController;
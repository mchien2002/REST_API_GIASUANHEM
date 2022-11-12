const { Category } = require("../models/categoryModel");
const { param } = require("../routes/routes");
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
            const params = req.query.style;
            console.log(params);
            const list = await Category.find(({
                style: params
            }));
            res.status(200).json(list);

        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = categorytController;
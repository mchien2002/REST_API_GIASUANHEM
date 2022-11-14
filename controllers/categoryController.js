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

    getByStyle: async (req, res) => {
        try {
            const params = req.query.style ?? null;
            console.log("********PARAMS********");
            console.log(`style: ${params}`);
            if (params) {
                const list = await Category.find({
                    style: params
                });
                res.status(200).json(list);
            } else {
                const list = await Category.find(({}));
                res.status(200).json(list);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAll: async (req, res)=>{
        try {
            const newPost = await Category.find();
            res.status(200).json(newPost);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async(req, res) =>{
        try{
            const itemRemove = await Tutor.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json("Delete Successfully");
        } catch(error){
            res.status(500).json(error);
        }
    },
    updateByID: async (req, res) => {
        try {
            Category.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json("Update Successfully")
            })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = categorytController;
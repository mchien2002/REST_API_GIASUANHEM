const { Category } = require("../models/categoryModel");
const { param } = require("../routes/routes");
const ApplicationState = require("../models/applicationState")
const categorytController = {
    add: async (req, res) => {
        try {
            const newItem = new Category(req.body);
            const saveItem = await newItem.save();
            res.status(200).json(saveItem);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
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
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    getAll: async (req, res)=>{
        try {
            const newPost = await Category.find();
            res.status(200).json(newPost);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    delete: async(req, res) =>{
        try{
            const itemRemove = await Tutor.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json(new ApplicationState(200));
        } catch(error){
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    updateByID: async (req, res) => {
        try {
            Category.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json(new ApplicationState(200))
            })
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    }
}

module.exports = categorytController;
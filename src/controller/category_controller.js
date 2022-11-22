const { Category } = require("../models/categoryModel")
const { NewClass } = require("../models/newClassModel")

const categoryController = module.exports = {
    find: async (req, res) => {
        params = {
            page: parseInt(req.query.page),
            PAGE_SIZE: parseInt(req.query.PAGE_SIZE),
        }
        await Category.find(req.query.style ? { style: req.query.style } : {})
            .skip((params.page - 1) * params.PAGE_SIZE)
            .limit(params.PAGE_SIZE)
            .then((data) => { res.status(200).json(data) })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            })
    },
    create: async (req, res) => {
        await Category.create(req.body)
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    },
    deleteByID: async (req, res) => {
        try {
            await NewClass.updateMany(
                { categories: req.query._id },
                { $pull: { categories: req.query._id } }
            );
            await Category.findByIdAndDelete(req.query._id)
                .then(() => {
                    res.status(200).json({
                        status: 200,
                        message: "Successfull"
                    })
                });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: "Some thing went wrong!",
            });
        }
    },
    updateByID: async (req, res) => {
        await Category.findByIdAndUpdate(req.query._id, { $set: req.body })
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            }).catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    }
}
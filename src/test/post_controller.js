const { Post } = require("../models/postModel");

const postController = module.exports = {
    find: async (req, res) => {
        params = {
            style: req.query.style,
            page: parseInt(req.query.page),
            PAGE_SIZE: parseInt(req.query.PAGE_SIZE),
        }
        await Post.find(params.style ? { style: params.style } : {})
            .skip((params.page - 1) * params.PAGE_SIZE)
            .limit(params.PAGE_SIZE)
            .then((data) => { res.status(200).json(data) })
            .catch((error) => {
                res.status(500).json({
                    status: 500,
                    message: error.message,
                })
            });
    },
    create: async (req, res) => {
        await Post.create(req.body)
            .then((data) => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull",
                })
            })
            .catch((error) => {
                res.status(500).json({
                    status: 500,
                    message: error.message,
                })
            });

    },
    deleteByID: async (req, res) => {
        await Post.findByIdAndDelete(req.query._id)
            .then((data) => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull",
                })
            })
            .catch((error) => {
                res.status(500).json({
                    status: 500,
                    message: error.message,
                })
            });
    },
    updateByID: async (req, res) => {
        await Post.findByIdAndUpdate(req.query._id, { $set: req.body })
            .then((data) => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull",
                })
            })
            .catch((error) => {
                res.status(500).json({
                    status: 500,
                    message: error.message,
                })
            });
    },
}
const { Post } = require("../models/postModel");
const ApplicationState = require("../models/applicationState")

const postController = {
    add: async (req, res) => {
        try {
            const newPost = new Post(req.body);
            const savePost = await newPost.save();
            res.status(200).json(savePost);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },

    get: async (req, res) => {
        try {
            const listItem = await Post.find({
                "$and": [
                    req.query.style ?
                        { style: req.query.style }
                        : {}
                ]
            });
            res.status(200).json(listItem);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    delete: async (req, res) => {
        try {
            const itemRemove = await Post.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json("Delete Successfully");
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    updateByID: async (req, res) => {
        try {
            Post.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json("Update Successfully")
            });
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
}

module.exports = postController